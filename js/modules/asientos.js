import { el, renderMCQ, navegacionPreguntas, progressBar, formatEUR } from "../ui.js";
import { recordAttempt } from "../storage.js";

export async function render(container, params = {}, navegar) {
  const [{ reglasFundamentales, asientosQuiz, asientosConstruir }, { asientosQuizExtra }] = await Promise.all([
    import("../../data/asientos.js"),
    import("../../data/asientos-extra.js"),
  ]);
  const quizCompleto = [...asientosQuiz, ...asientosQuizExtra];
  const vista = params.vista || "teoria";

  container.appendChild(
    el("div", { class: "topbar" }, [
      el("div", {}, [el("h1", {}, "Asientos contables"), el("div", { class: "subt" }, "Debe y Haber según el Plan General de Contabilidad")]),
      el("div", { class: "btn-fila" }, [
        el("button", { class: `btn ${vista === "teoria" ? "btn-primario" : "btn-secundario"}`, onclick: () => navegar("asientos?vista=teoria") }, "Reglas"),
        el("button", { class: `btn ${vista === "quiz" ? "btn-primario" : "btn-secundario"}`, onclick: () => navegar("asientos?vista=quiz") }, "Practicar (tipo test)"),
        el("button", { class: `btn ${vista === "construir" ? "btn-primario" : "btn-secundario"}`, onclick: () => navegar("asientos?vista=construir") }, "Construir el asiento"),
      ]),
    ])
  );

  if (vista === "quiz") return renderQuiz(container, navegar, quizCompleto);
  if (vista === "construir") return renderConstruir(container, asientosConstruir);

  const card = el("div", { class: "card" });
  card.appendChild(el("h3", {}, "Reglas fundamentales"));
  const tabla = el("table", { class: "tabla-financiera" });
  tabla.appendChild(el("tr", {}, [el("th", {}, "Situación"), el("th", { style: "text-align:center" }, "Lado")]));
  reglasFundamentales.forEach((r) => {
    tabla.appendChild(
      el("tr", {}, [el("td", {}, r.regla), el("td", { style: `text-align:center;font-weight:800;color:${r.lado === "DEBE" ? "#1d5b9e" : "#b8860b"}` }, r.lado)])
    );
  });
  card.appendChild(tabla);
  card.appendChild(
    el("div", { class: "alerta-info", style: "margin-top:.8rem" }, "Todo asiento contable debe mantener la igualdad: suma del Debe = suma del Haber. Si no cuadra, hay un error.")
  );
  container.appendChild(card);

  container.appendChild(
    el("div", { class: "card" }, [
      el("h3", {}, "Cómo razonar cualquier asiento"),
      el("ol", {}, [
        el("li", {}, "Identifica qué cuentas intervienen (¿qué activo, pasivo, patrimonio, gasto o ingreso cambia?)."),
        el("li", {}, "Para cada cuenta, decide si AUMENTA o DISMINUYE."),
        el("li", {}, "Aplica la regla: activo que aumenta → Debe; activo que disminuye → Haber; pasivo/PN que aumenta → Haber; pasivo/PN que disminuye → Debe; gasto → Debe; ingreso → Haber."),
        el("li", {}, "Comprueba que la suma del Debe coincide con la suma del Haber."),
      ]),
    ])
  );
}

function renderQuiz(container, navegar, preguntas) {
  let indice = 0;
  function pintar() {
    container.querySelectorAll(".sesion-asientos").forEach((n) => n.remove());
    const wrap = el("div", { class: "sesion-asientos" });
    wrap.appendChild(progressBar(Math.round((indice / preguntas.length) * 100)));
    const box = el("div", { class: "card", style: "margin-top:.8rem" });
    wrap.appendChild(box);
    container.appendChild(wrap);
    renderMCQ(box, preguntas[indice], { modoExamen: false });
    wrap.appendChild(
      navegacionPreguntas({
        indice,
        totalPreguntas: preguntas.length,
        disablePrev: indice === 0,
        disableNext: indice === preguntas.length - 1,
        onPrev: () => { indice--; pintar(); },
        onNext: () => { indice++; pintar(); },
      })
    );
  }
  pintar();
}

function renderConstruir(container, ejercicios) {
  container.appendChild(el("p", { class: "subt" }, "Elige la cuenta y el importe (Debe o Haber) para cada línea del asiento. Puedes añadir o quitar líneas."));

  ejercicios.forEach((ej) => {
    const card = el("div", { class: "card" });
    card.appendChild(el("h3", {}, ej.tema));
    card.appendChild(el("p", {}, ej.situacion));

    const filasContainer = el("div", {});
    const filas = [];

    function nuevaFila() {
      const fila = { cuenta: null, debe: 0, haber: 0 };
      const row = el("div", { class: "selector-respuesta", style: "display:flex;align-items:center;gap:.4rem;margin-bottom:.4rem;flex-wrap:wrap" });
      const select = el("select", {});
      select.appendChild(el("option", { value: "" }, "— Elige cuenta —"));
      ej.cuentasDisponibles.forEach((c) => select.appendChild(el("option", { value: c }, c)));
      select.addEventListener("change", () => (fila.cuenta = select.value));
      const inputDebe = el("input", { type: "number", placeholder: "Debe €", min: "0" });
      inputDebe.addEventListener("input", () => (fila.debe = parseFloat(inputDebe.value) || 0));
      const inputHaber = el("input", { type: "number", placeholder: "Haber €", min: "0" });
      inputHaber.addEventListener("input", () => (fila.haber = parseFloat(inputHaber.value) || 0));
      row.appendChild(select);
      row.appendChild(inputDebe);
      row.appendChild(inputHaber);
      filasContainer.appendChild(row);
      filas.push(fila);
    }

    nuevaFila();
    nuevaFila();
    card.appendChild(filasContainer);

    const btnAdd = el("button", { class: "btn btn-ghost", onclick: () => nuevaFila() }, "+ Añadir línea");
    card.appendChild(btnAdd);

    const resultadoBox = el("div", {});
    const btnComprobar = el("button", {
      class: "btn btn-primario",
      style: "display:block;margin-top:.7rem",
      onclick: () => {
        const respuestaUsuario = filas.filter((f) => f.cuenta).map((f) => ({ cuenta: f.cuenta, debe: f.debe || 0, haber: f.haber || 0 }));
        const correcto = compararAsientos(respuestaUsuario, ej.solucion);
        recordAttempt({ modulo: "asientos-construir", id: ej.id, tema: ej.tema, correct: correcto, timeMs: 0 });
        resultadoBox.innerHTML = "";
        resultadoBox.appendChild(
          el("div", { class: `feedback-box ${correcto ? "feedback-correcta" : "feedback-incorrecta"}` }, [
            el("div", { class: "feedback-titulo" }, correcto ? "✓ ¡Asiento correcto!" : "✗ El asiento no es correcto."),
            el("p", {}, "Solución:"),
            tablaSolucion(ej.solucion),
          ])
        );
      },
    }, "Comprobar asiento");
    card.appendChild(btnComprobar);
    card.appendChild(resultadoBox);
    container.appendChild(card);
  });
}

function tablaSolucion(solucion) {
  const t = el("table", { class: "asiento-tabla" });
  t.appendChild(el("tr", {}, [el("th", {}, "Cuenta"), el("th", {}, "Debe"), el("th", {}, "Haber")]));
  solucion.forEach((f) => t.appendChild(el("tr", {}, [el("td", {}, f.cuenta), el("td", {}, f.debe ? formatEUR(f.debe) : ""), el("td", {}, f.haber ? formatEUR(f.haber) : "")])));
  return t;
}

function compararAsientos(respuesta, solucion) {
  if (respuesta.length !== solucion.length) return false;
  const norm = (arr) => arr.map((f) => `${f.cuenta}|${Math.round(f.debe)}|${Math.round(f.haber)}`).sort();
  const a = norm(respuesta);
  const b = norm(solucion);
  return a.length === b.length && a.every((v, i) => v === b[i]);
}
