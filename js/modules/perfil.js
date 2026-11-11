import { el } from "../ui.js";
import { saveInterviewAnswer, getInterviewAnswer } from "../storage.js";

export async function render(container, params = {}, navegar) {
  const vista = params.modo === "entrevista" ? "entrevista" : "guia";

  container.appendChild(
    el("div", { class: "topbar" }, [
      el("div", {}, [el("h1", {}, "Preguntas de perfil y entrevista"), el("div", { class: "subt" }, "CV, formación académica y motivación — Modo Entrevista incluido")]),
      el("div", { class: "btn-fila" }, [
        el("button", { class: `btn ${vista === "guia" ? "btn-primario" : "btn-secundario"}`, onclick: () => navegar("perfil") }, "Guía de preparación"),
        el("button", { class: `btn ${vista === "entrevista" ? "btn-primario" : "btn-secundario"}`, onclick: () => navegar("perfil?modo=entrevista") }, "🎤 Modo Entrevista"),
      ]),
    ])
  );

  if (vista === "entrevista") return renderEntrevista(container, navegar);

  container.appendChild(
    el("div", { class: "alerta-info" }, "Estas preguntas no tienen una única respuesta correcta. Te damos una guía de qué se evalúa, cómo estructurar tu respuesta y qué errores evitar — tú aportas tu experiencia real.")
  );

  const { perfilPreguntas } = await import("../../data/perfil.js");
  const categorias = [...new Set(perfilPreguntas.map((p) => p.categoria))];
  categorias.forEach((cat) => {
    container.appendChild(el("h2", { style: "margin-top:1.2rem" }, cat));
    perfilPreguntas.filter((p) => p.categoria === cat).forEach((p) => container.appendChild(renderFichaPerfil(p)));
  });
}

function renderFichaPerfil(p) {
  const card = el("div", { class: "card" });
  card.appendChild(el("h3", {}, p.pregunta));
  card.appendChild(el("h4", {}, "Qué buscan evaluar"));
  card.appendChild(el("p", {}, p.queEvalua));
  card.appendChild(el("h4", {}, "Cómo estructurar tu respuesta"));
  card.appendChild(el("p", {}, p.comoEstructurar));
  card.appendChild(el("h4", {}, "Puntos de tu experiencia que podrías usar"));
  const ul = el("ul");
  p.puntosDeTuExperiencia.forEach((pt) => ul.appendChild(el("li", {}, pt)));
  card.appendChild(ul);
  card.appendChild(el("h4", {}, "Ejemplo orientativo (adapta con tus propios detalles reales)"));
  card.appendChild(el("p", { style: "font-style:italic;color:#5b6775" }, p.ejemploOrientativo));
  card.appendChild(el("h4", {}, "Errores a evitar"));
  const ul2 = el("ul");
  p.erroresEvitar.forEach((e) => ul2.appendChild(el("li", {}, e)));
  card.appendChild(ul2);
  return card;
}

async function renderEntrevista(container, navegar) {
  const { perfilPreguntas } = await import("../../data/perfil.js");
  const { casos } = await import("../../data/casos.js");

  const preguntas = [
    ...perfilPreguntas.map((p) => ({ tipo: "perfil", id: p.id, enunciado: p.pregunta, data: p })),
    ...casos.slice(0, 4).map((c) => ({ tipo: "caso", id: c.id, enunciado: `Caso: ${c.titulo}\n\n${c.situacion}`, data: c })),
  ];

  container.appendChild(
    el("div", { class: "alerta-info" }, "Simulación de entrevista: responde como si un entrevistador de Deloitte te preguntara en persona. No hay evaluación automática por IA — al terminar, compara tu respuesta con la guía de autoevaluación.")
  );

  let indice = 0;

  function pintar() {
    container.querySelectorAll(".sesion-entrevista").forEach((n) => n.remove());
    const wrap = el("div", { class: "sesion-entrevista" });
    const p = preguntas[indice];

    const card = el("div", { class: "card" });
    card.appendChild(el("div", { style: "font-size:.8rem;color:#5b6775" }, `Pregunta ${indice + 1} de ${preguntas.length}`));
    card.appendChild(el("h3", { style: "white-space:pre-wrap" }, p.enunciado));

    const guardada = getInterviewAnswer("entrevista", p.id);
    const textarea = el("textarea", { class: "respuesta-abierta", placeholder: "Escribe tu respuesta aquí…" });
    if (guardada) textarea.value = guardada.texto;
    card.appendChild(textarea);

    const guardarBtn = el("button", { class: "btn btn-secundario", style: "margin-top:.5rem" }, "Guardar respuesta");
    guardarBtn.addEventListener("click", () => {
      saveInterviewAnswer("entrevista", p.id, textarea.value);
      guardarBtn.textContent = "✓ Guardada";
      setTimeout(() => (guardarBtn.textContent = "Guardar respuesta"), 1500);
    });
    card.appendChild(guardarBtn);

    const evalBox = el("div", { style: "display:none;margin-top:.9rem" });
    const evalBtn = el("button", { class: "btn btn-primario", style: "margin-top:.5rem" }, "Ver guía de autoevaluación");
    evalBtn.addEventListener("click", () => {
      saveInterviewAnswer("entrevista", p.id, textarea.value);
      evalBox.style.display = evalBox.style.display === "none" ? "block" : "none";
    });

    if (p.tipo === "perfil") {
      evalBox.appendChild(bloque("Qué buscan evaluar", p.data.queEvalua));
      evalBox.appendChild(bloque("Cómo deberías haberla estructurado", p.data.comoEstructurar));
      evalBox.appendChild(bloqueLista("Puntos fuertes que debería incluir una buena respuesta", p.data.puntosDeTuExperiencia));
      evalBox.appendChild(bloqueLista("Errores habituales a evitar (puntos débiles típicos)", p.data.erroresEvitar));
      evalBox.appendChild(bloque("Respuesta orientativa", p.data.ejemploOrientativo));
    } else {
      const s = p.data.solucion;
      evalBox.appendChild(bloque("Problema / señal de alerta", s.problema));
      evalBox.appendChild(bloque("Riesgo de auditoría", s.riesgo));
      evalBox.appendChild(bloque("Partida(s) afectada(s)", s.partidaAfectada));
      evalBox.appendChild(bloque("Documentación a solicitar", s.documentacion));
      evalBox.appendChild(bloque("Procedimiento de auditoría", s.procedimiento));
      evalBox.appendChild(bloque("Conclusión esperada", s.conclusion));
    }

    card.appendChild(evalBtn);
    card.appendChild(evalBox);
    wrap.appendChild(card);

    const nav = el("div", { class: "nav-preguntas" });
    nav.appendChild(el("button", { class: "btn btn-secundario", disabled: indice === 0 ? "disabled" : null, onclick: () => { textGuardarAuto(); indice--; pintar(); } }, "← Anterior"));
    nav.appendChild(el("span", { class: "contador-preguntas" }, `${indice + 1} / ${preguntas.length}`));
    if (indice < preguntas.length - 1) {
      nav.appendChild(el("button", { class: "btn btn-primario", onclick: () => { textGuardarAuto(); indice++; pintar(); } }, "Siguiente →"));
    } else {
      nav.appendChild(el("button", { class: "btn btn-exito", onclick: () => { textGuardarAuto(); navegar("dashboard"); } }, "Terminar simulación"));
    }
    wrap.appendChild(nav);
    container.appendChild(wrap);

    function textGuardarAuto() {
      saveInterviewAnswer("entrevista", p.id, textarea.value);
    }
  }
  pintar();
}

function bloque(titulo, texto) {
  return el("div", { style: "margin-bottom:.6rem" }, [el("div", { style: "font-weight:700;color:#1d5b9e;font-size:.85rem" }, titulo), el("p", { style: "margin:.1rem 0 0" }, texto)]);
}
function bloqueLista(titulo, items) {
  const wrap = el("div", { style: "margin-bottom:.6rem" });
  wrap.appendChild(el("div", { style: "font-weight:700;color:#1d5b9e;font-size:.85rem" }, titulo));
  const ul = el("ul");
  items.forEach((i) => ul.appendChild(el("li", {}, i)));
  wrap.appendChild(ul);
  return wrap;
}
