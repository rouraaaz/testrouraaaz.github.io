import { el } from "../ui.js";
import { markCasoVisitado } from "../storage.js";

export async function render(container, params = {}, navegar) {
  const { casos } = await import("../../data/casos.js");

  container.appendChild(el("div", { class: "topbar" }, [el("div", {}, [el("h1", {}, "Casos prácticos de auditoría"), el("div", { class: "subt" }, "10 situaciones reales que podría encontrar un auditor junior")])]));

  casos.forEach((caso, idx) => {
    const card = el("div", { class: "card" });
    card.appendChild(el("h3", {}, `Caso ${idx + 1}: ${caso.titulo}`));
    card.appendChild(el("p", {}, caso.situacion));

    card.appendChild(el("h4", {}, "Preguntas guía (piénsalas antes de ver la solución)"));
    const ul = el("ul");
    caso.preguntasGuia.forEach((p) => ul.appendChild(el("li", {}, p)));
    card.appendChild(ul);

    const solucionBox = el("div", { style: "display:none;margin-top:.8rem" });
    const sol = caso.solucion;
    solucionBox.appendChild(bloqueSolucion("Problema / señal de alerta", sol.problema));
    solucionBox.appendChild(bloqueSolucion("Riesgo de auditoría", sol.riesgo));
    solucionBox.appendChild(bloqueSolucion("Partida(s) afectada(s)", sol.partidaAfectada));
    solucionBox.appendChild(bloqueSolucion("Documentación a solicitar", sol.documentacion));
    solucionBox.appendChild(bloqueSolucion("Procedimiento de auditoría", sol.procedimiento));
    solucionBox.appendChild(bloqueSolucion("Conclusión", sol.conclusion));

    const btn = el("button", { class: "btn btn-primario" }, "Ver solución razonada");
    btn.addEventListener("click", () => {
      const visible = solucionBox.style.display !== "none";
      solucionBox.style.display = visible ? "none" : "block";
      btn.textContent = visible ? "Ver solución razonada" : "Ocultar solución";
      markCasoVisitado(caso.id);
    });
    card.appendChild(btn);
    card.appendChild(solucionBox);
    container.appendChild(card);
  });
}

function bloqueSolucion(titulo, texto) {
  return el("div", { style: "margin-bottom:.6rem" }, [el("div", { style: "font-weight:700;color:#1d5b9e;font-size:.85rem" }, titulo), el("p", { style: "margin:.1rem 0 0" }, texto)]);
}
