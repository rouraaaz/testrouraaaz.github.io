import { el, renderMCQ, navegacionPreguntas, shuffle, progressBar } from "../ui.js";

export async function render(container, params = {}, navegar) {
  const { ratios, ratiosPractica } = await import("../../data/ratios.js");
  const vista = params.vista || "fichas";

  container.appendChild(
    el("div", { class: "topbar" }, [
      el("div", {}, [el("h1", {}, "Ratios financieros"), el("div", { class: "subt" }, "Liquidez · Endeudamiento · Rentabilidad · Eficiencia · Working Capital")]),
      el("div", { class: "btn-fila" }, [
        el("button", { class: `btn ${vista === "fichas" ? "btn-primario" : "btn-secundario"}`, onclick: () => navegar("ratios?vista=fichas") }, "Fichas teóricas"),
        el("button", { class: `btn ${vista === "practica" ? "btn-primario" : "btn-secundario"}`, onclick: () => navegar("ratios?vista=practica") }, "Simulador de práctica"),
      ]),
    ])
  );

  if (vista === "practica") return renderPractica(container, navegar, ratiosPractica);

  container.appendChild(
    el("div", { class: "aviso-sector" }, "⚠️ Los valores de referencia (alto/bajo) NO son reglas universales: dependen del sector, el modelo de negocio y las características concretas de cada empresa. Un auditor siempre interpreta el ratio en su contexto.")
  );

  const categorias = [...new Set(ratios.map((r) => r.categoria))];
  categorias.forEach((cat) => {
    container.appendChild(el("h2", { style: "margin-top:1.3rem" }, cat));
    ratios.filter((r) => r.categoria === cat).forEach((r) => container.appendChild(renderFicha(r)));
  });
}

function renderFicha(r) {
  const card = el("div", { class: "card ficha-ratio" });
  card.appendChild(el("h3", {}, r.nombre));
  card.appendChild(el("div", { class: "formula" }, r.formula));
  card.appendChild(el("h4", {}, "Qué mide"));
  card.appendChild(el("p", {}, r.queMide));
  card.appendChild(el("h4", {}, "Si es alto"));
  card.appendChild(el("p", {}, r.valorAlto));
  card.appendChild(el("h4", {}, "Si es bajo"));
  card.appendChild(el("p", {}, r.valorBajo));
  card.appendChild(el("h4", {}, "Cómo lo interpreta un auditor"));
  card.appendChild(el("p", {}, r.interpretacionAuditor));
  card.appendChild(el("h4", {}, "Ejemplo numérico"));
  card.appendChild(el("p", {}, r.ejemploNumerico.datos));
  card.appendChild(el("p", { style: "font-family:monospace" }, r.ejemploNumerico.calculo));
  card.appendChild(el("p", { style: "font-weight:700;color:#1d5b9e" }, `Resultado: ${r.ejemploNumerico.resultado}`));
  card.appendChild(el("h4", {}, "Posibles preguntas de entrevista"));
  const ul = el("ul");
  r.preguntasEntrevista.forEach((p) => ul.appendChild(el("li", {}, p)));
  card.appendChild(ul);
  return card;
}

function renderPractica(container, navegar, ejercicios) {
  container.appendChild(el("p", { class: "subt" }, "Calcula el ratio a partir de los datos. Después de responder verás el cálculo paso a paso."));
  let indice = 0;
  const lista = shuffle(ejercicios);

  function pintar() {
    const wrap = el("div", {});
    wrap.appendChild(progressBar(Math.round((indice / lista.length) * 100)));
    const box = el("div", { class: "card", style: "margin-top:.8rem" });
    wrap.appendChild(box);
    container.querySelectorAll(".sesion-practica").forEach((n) => n.remove());
    wrap.classList.add("sesion-practica");
    container.appendChild(wrap);

    renderMCQ(box, lista[indice], { modoExamen: false, mostrarTema: true });

    wrap.appendChild(
      navegacionPreguntas({
        indice,
        totalPreguntas: lista.length,
        disablePrev: indice === 0,
        disableNext: indice === lista.length - 1,
        onPrev: () => { indice--; pintar(); },
        onNext: () => { indice++; pintar(); },
      })
    );
  }
  pintar();
}
