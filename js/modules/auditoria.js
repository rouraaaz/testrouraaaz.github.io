import { el, renderMCQ, navegacionPreguntas, progressBar } from "../ui.js";

export async function render(container, params = {}, navegar) {
  const { teoriaAuditoria, auditoriaQuiz } = await import("../../data/auditoria.js");
  const vista = params.vista || "teoria";
  const temaId = params.tema || teoriaAuditoria[0].id;

  container.appendChild(
    el("div", { class: "topbar" }, [
      el("div", {}, [el("h1", {}, "Auditoría y procedimientos"), el("div", { class: "subt" }, "OMNIA · GRA · Procedimientos NIA-ES · CIRBE · Hechos posteriores · Facturas pendientes")]),
      el("div", { class: "btn-fila" }, [
        el("button", { class: `btn ${vista === "teoria" ? "btn-primario" : "btn-secundario"}`, onclick: () => navegar("auditoria?vista=teoria") }, "Teoría"),
        el("button", { class: `btn ${vista === "quiz" ? "btn-primario" : "btn-secundario"}`, onclick: () => navegar("auditoria?vista=quiz") }, "Quiz"),
      ]),
    ])
  );

  if (vista === "quiz") return renderQuiz(container, auditoriaQuiz);

  const tabs = el("div", { class: "btn-fila", style: "margin-bottom:1rem;flex-wrap:wrap" });
  teoriaAuditoria.forEach((t) => tabs.appendChild(el("button", { class: `btn ${t.id === temaId ? "btn-primario" : "btn-secundario"}`, onclick: () => navegar(`auditoria?tema=${t.id}`) }, t.titulo)));
  container.appendChild(tabs);

  const tema = teoriaAuditoria.find((t) => t.id === temaId) || teoriaAuditoria[0];
  const card = el("div", { class: "card" });
  card.appendChild(el("h2", {}, tema.titulo));
  if (tema.avisoMetodologia) card.appendChild(el("div", { class: "aviso-sector" }, tema.avisoMetodologia));
  tema.secciones.forEach((s) => {
    card.appendChild(el("h4", {}, s.subtitulo));
    card.appendChild(el("div", { html: s.contenido }));
  });
  container.appendChild(card);
}

function renderQuiz(container, preguntas) {
  let indice = 0;
  function pintar() {
    container.querySelectorAll(".sesion-aud").forEach((n) => n.remove());
    const wrap = el("div", { class: "sesion-aud" });
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
