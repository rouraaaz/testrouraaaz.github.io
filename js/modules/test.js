import { el, renderMCQ, navegacionPreguntas, shuffle, progressBar } from "../ui.js";
import { getStats } from "../storage.js";
import { cargarTodoElBanco, obtenerPreguntasFalladas, obtenerPorTemasDebiles } from "./registry.js";

export async function render(container, params = {}, navegar) {
  const modo = params.modo || "menu";
  container.appendChild(el("div", { class: "topbar" }, [el("h1", {}, "Test de conocimientos contables")]));

  if (modo === "menu") return renderMenuModos(container, navegar);
  if (modo === "aprendizaje") return iniciarSesion(container, navegar, await obtenerBancoTest(), { modoExamen: false, titulo: "Modo Aprendizaje" });
  if (modo === "examen") return renderConfigExamen(container, navegar);
  if (modo === "errores") {
    const preguntas = await obtenerPreguntasFalladas();
    if (preguntas.length === 0) {
      container.appendChild(el("div", { class: "card" }, [el("p", {}, "🎉 No tienes preguntas falladas pendientes de repasar. ¡Buen trabajo!"), el("button", { class: "btn btn-primario", onclick: () => navegar("dashboard") }, "Volver al dashboard")]));
      return;
    }
    return iniciarSesion(container, navegar, shuffle(preguntas), { modoExamen: false, titulo: "Repaso de errores" });
  }
  if (modo === "intensivo") {
    const stats = getStats();
    const temas = stats.temasDebiles.map((t) => t.tema);
    let preguntas = [];
    if (temas.length > 0) preguntas = await obtenerPorTemasDebiles(temas, 20);
    if (preguntas.length < 5) {
      const banco = await cargarTodoElBanco();
      preguntas = shuffle(banco).slice(0, 20);
    }
    return iniciarSesion(container, navegar, shuffle(preguntas), { modoExamen: false, titulo: "Repaso intensivo" });
  }
}

async function obtenerBancoTest() {
  const [{ questions }, { questionsExtra }] = await Promise.all([
    import("../../data/questions.js"),
    import("../../data/questions-extra.js"),
  ]);
  return [...questions, ...questionsExtra];
}

function renderMenuModos(container, navegar) {
  container.appendChild(el("p", { class: "subt" }, "Elige una modalidad de práctica. Todas corrigen al instante salvo el Modo Examen."));
  const grid = el("div", { class: "modos-grid" });

  const modos = [
    { id: "aprendizaje", titulo: "📘 Modo Aprendizaje", desc: "Sin límite de tiempo. Explicación detallada tras cada respuesta." },
    { id: "examen", titulo: "⏱️ Modo Examen", desc: "20 preguntas aleatorias, tiempo límite configurable. Soluciones solo al terminar." },
    { id: "entrevista", titulo: "🎤 Modo Entrevista", desc: "Preguntas abiertas y casos, una a una, como en una entrevista real." },
    { id: "intensivo", titulo: "🎯 Repaso Intensivo", desc: "Selecciona automáticamente las preguntas de tus temas más débiles." },
  ];

  modos.forEach((m) => {
    const card = el("div", { class: "card modo-card", onclick: () => (m.id === "entrevista" ? navegar("perfil?modo=entrevista") : navegar(`test?modo=${m.id}`)) }, [
      el("h4", {}, m.titulo),
      el("p", {}, m.desc),
    ]);
    grid.appendChild(card);
  });
  container.appendChild(grid);

  const stats = getStats();
  if (stats.errorCount > 0) {
    container.appendChild(
      el("div", { class: "card" }, [
        el("p", {}, `Tienes ${stats.errorCount} pregunta(s) marcadas como falladas en tu historial.`),
        el("button", { class: "btn btn-secundario", onclick: () => navegar("test?modo=errores") }, "Repasar errores"),
      ])
    );
  }
}

function renderConfigExamen(container, navegar) {
  const card = el("div", { class: "card" });
  card.appendChild(el("h3", {}, "Configurar Modo Examen"));
  card.appendChild(el("p", {}, "20 preguntas aleatorias del banco de conocimientos contables. Elige el tiempo límite total:"));
  const select = el("select", {});
  [10, 15, 20, 30].forEach((min) => {
    const opt = el("option", { value: String(min) }, `${min} minutos`);
    if (min === 20) opt.setAttribute("selected", "selected");
    select.appendChild(opt);
  });
  card.appendChild(select);
  card.appendChild(
    el("div", { class: "btn-fila" }, [
      el("button", { class: "btn btn-primario", onclick: async () => {
        const minutos = parseInt(select.value, 10);
        const banco = await obtenerBancoTest();
        const preguntas = shuffle(banco).slice(0, 20);
        container.innerHTML = "";
        container.appendChild(el("div", { class: "topbar" }, [el("h1", {}, "Test de conocimientos contables")]));
        iniciarExamen(container, navegar, preguntas, minutos * 60);
      } }, "Empezar examen"),
      el("button", { class: "btn btn-secundario", onclick: () => navegar("test") }, "Cancelar"),
    ])
  );
  container.appendChild(card);
}

function iniciarSesion(container, navegar, preguntas, opts) {
  let indice = 0;
  const respuestas = new Array(preguntas.length).fill(null);

  function pintar() {
    const wrap = el("div", {});
    wrap.appendChild(el("div", { class: "card" }, [el("h3", { style: "margin:0" }, opts.titulo), progressBar(Math.round(((indice) / preguntas.length) * 100))]));
    const preguntaBox = el("div", { class: "card" });
    wrap.appendChild(preguntaBox);
    container.innerHTML = "";
    container.appendChild(el("div", { class: "topbar" }, [el("h1", {}, "Test de conocimientos contables")]));
    container.appendChild(wrap);

    renderMCQ(preguntaBox, preguntas[indice], {
      modoExamen: false,
      onAnswered: (correcta) => {
        respuestas[indice] = correcta;
      },
    });

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

    if (indice === preguntas.length - 1) {
      wrap.appendChild(
        el("div", { class: "card", style: "margin-top:1rem" }, [
          el("button", { class: "btn btn-exito", onclick: () => navegar("dashboard") }, "Terminar y ver mi progreso"),
        ])
      );
    }
  }
  pintar();
}

function iniciarExamen(container, navegar, preguntas, segundosTotales) {
  let indice = 0;
  const respuestas = new Array(preguntas.length).fill(null);
  let segundosRestantes = segundosTotales;
  let timerId = null;
  let terminado = false;

  const topWrap = el("div", { class: "card", style: "display:flex;justify-content:space-between;align-items:center" });
  const timerBadge = el("span", { class: "timer-badge" }, "");
  topWrap.appendChild(el("strong", {}, "Modo Examen"));
  topWrap.appendChild(timerBadge);
  container.appendChild(topWrap);

  const preguntaBox = el("div", { class: "card" });
  container.appendChild(preguntaBox);
  const navBox = el("div", {});
  container.appendChild(navBox);

  function formatoTiempo(s) {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  }

  function actualizarTimer() {
    timerBadge.textContent = formatoTiempo(segundosRestantes);
    timerBadge.classList.toggle("timer-urgente", segundosRestantes <= 60);
  }

  function pintarPregunta() {
    preguntaBox.innerHTML = "";
    preguntaBox.appendChild(el("div", { style: "font-size:.8rem;color:#5b6775;margin-bottom:.4rem" }, `Pregunta ${indice + 1} de ${preguntas.length}`));
    renderMCQ(preguntaBox, preguntas[indice], {
      modoExamen: true,
      mostrarTema: false,
      onAnswered: (correcta, letra) => { respuestas[indice] = { correcta, letra }; },
    });
    navBox.innerHTML = "";
    navBox.appendChild(
      navegacionPreguntas({
        indice,
        totalPreguntas: preguntas.length,
        disablePrev: indice === 0,
        disableNext: false,
        onPrev: () => { indice--; pintarPregunta(); },
        onNext: () => {
          if (indice < preguntas.length - 1) { indice++; pintarPregunta(); }
          else finalizarExamen();
        },
      })
    );
    if (indice === preguntas.length - 1) {
      const btn = navBox.querySelector(".nav-preguntas button:last-child");
      if (btn) btn.textContent = "Finalizar examen";
    }
  }

  function finalizarExamen() {
    if (terminado) return;
    terminado = true;
    clearInterval(timerId);
    const correctas = respuestas.filter((r) => r && r.correcta).length;
    const sinResponder = respuestas.filter((r) => !r).length;
    const pct = Math.round((correctas / preguntas.length) * 100);

    container.innerHTML = "";
    container.appendChild(el("div", { class: "topbar" }, [el("h1", {}, "Resultado del examen")]));
    const resumen = el("div", { class: "card" }, [
      el("h2", {}, `${correctas} / ${preguntas.length} correctas (${pct}%)`),
      el("p", {}, `Preguntas sin responder: ${sinResponder}`),
      progressBar(pct),
    ]);
    container.appendChild(resumen);

    preguntas.forEach((p, i) => {
      const r = respuestas[i];
      const box = el("div", { class: "card" });
      box.appendChild(el("div", { style: "font-weight:700;margin-bottom:.4rem" }, `${i + 1}. ${p.enunciado.replace(/<[^>]+>/g, "")}`));
      if (!r) {
        box.appendChild(el("p", { style: "color:#c0392b" }, `No respondida. Respuesta correcta: ${p.correcta}`));
      } else {
        box.appendChild(el("p", { style: r.correcta ? "color:#1e8e5a" : "color:#c0392b" }, `Tu respuesta: ${r.letra} — ${r.correcta ? "Correcta" : `Incorrecta (correcta: ${p.correcta})`}`));
      }
      box.appendChild(el("p", { style: "color:#5b6775" }, p.explicacion));
      container.appendChild(box);
    });

    container.appendChild(el("button", { class: "btn btn-primario", onclick: () => navegar("dashboard") }, "Volver al dashboard"));
  }

  actualizarTimer();
  pintarPregunta();
  timerId = setInterval(() => {
    segundosRestantes--;
    actualizarTimer();
    if (segundosRestantes <= 0) finalizarExamen();
  }, 1000);
}
