import { getStats, scoreLabel, clearProgress } from "../storage.js";
import { el, progressBar } from "../ui.js";

const MODULOS_MENU = [
  { ruta: "test", icono: "📝", titulo: "Test de conocimientos", desc: "50+ preguntas sobre contabilidad financiera y fundamentos de auditoría." },
  { ruta: "ratios", icono: "📊", titulo: "Ratios financieros", desc: "Fichas completas + simulador de cálculo de los ratios más preguntados." },
  { ruta: "balances", icono: "🏢", titulo: "Balances y PYG", desc: "5 empresas reales de distintos sectores para analizar e interpretar." },
  { ruta: "asientos", icono: "✍️", titulo: "Asientos contables", desc: "Practica el Debe y el Haber con 17 operaciones típicas del PGC." },
  { ruta: "auditoria", icono: "🔎", titulo: "Auditoría y procedimientos", desc: "OMNIA, GRA, CIRBE, hechos posteriores y procedimientos NIA-ES." },
  { ruta: "casos", icono: "⚖️", titulo: "Casos prácticos", desc: "10 situaciones reales de un auditor junior, con solución razonada." },
  { ruta: "perfil", icono: "🎤", titulo: "Preguntas de perfil", desc: "Prepara las preguntas sobre tu CV, formación y motivación." },
  { ruta: "guia", icono: "📘", titulo: "Guía / Chuleta", desc: "Repaso teórico rápido de todos los conceptos clave antes de entrar." },
];

export async function render(container, params, navegar) {
  const stats = getStats();
  const nivel = scoreLabel(stats.pctAciertos);

  container.appendChild(
    el("div", { class: "topbar" }, [
      el("div", {}, [el("h1", {}, "Dashboard · Mi progreso"), el("div", { class: "subt" }, "Preparación Deloitte Audit & Assurance · Junior")]),
      el("button", { class: "btn btn-secundario", onclick: () => { if (confirm("¿Borrar todo el progreso guardado? Esta acción no se puede deshacer.")) { clearProgress(); render(container, params, navegar); } } }, "Reiniciar progreso"),
    ])
  );

  const grid = el("div", { class: "grid grid-4" });
  grid.appendChild(statCard("Preguntas realizadas", stats.total, ""));
  grid.appendChild(statCard("% Aciertos", `${stats.pctAciertos}%`, nivel.clase));
  grid.appendChild(statCard("% Errores", stats.total ? `${100 - stats.pctAciertos}%` : "0%", ""));
  grid.appendChild(statCard("Tiempo medio/pregunta", stats.tiempoMedioSeg ? `${stats.tiempoMedioSeg}s` : "—", ""));
  container.appendChild(grid);

  const nivelCard = el("div", { class: "card" });
  nivelCard.appendChild(el("h3", {}, "Nivel general"));
  nivelCard.appendChild(progressBar(stats.pctAciertos));
  nivelCard.appendChild(el("p", { class: `${nivel.clase}`, style: "margin-top:.5rem;font-weight:700" }, `${nivel.texto} (${stats.pctAciertos}/100)`));
  nivelCard.appendChild(
    el("p", { style: "font-size:.8rem;color:#5b6775" }, "Escala: 0-49 Necesitas mejorar · 50-69 Nivel básico · 70-84 Buen nivel · 85-100 Muy buen nivel.")
  );
  if (stats.errorCount > 0) {
    const btnRepaso = el("button", { class: "btn btn-primario", style: "margin-top:.7rem", onclick: () => navegar("test?modo=errores") }, `Repasar ${stats.errorCount} pregunta(s) falladas`);
    nivelCard.appendChild(btnRepaso);
  }
  container.appendChild(nivelCard);

  const colGrid = el("div", { class: "grid grid-2" });

  const debilCard = el("div", { class: "card" });
  debilCard.appendChild(el("h3", {}, "Temas a repasar"));
  if (stats.temasDebiles.length === 0) {
    debilCard.appendChild(el("p", { style: "color:#5b6775" }, "Todavía no hay suficientes datos, o vas muy bien en todos los temas practicados."));
  } else {
    stats.temasDebiles.forEach((t) => {
      debilCard.appendChild(
        el("div", { style: "margin-bottom:.6rem" }, [
          el("div", { style: "display:flex;justify-content:space-between;font-size:.85rem;margin-bottom:.2rem" }, [el("span", {}, t.tema), el("span", { style: "font-weight:700" }, `${t.pct}%`)]),
          progressBar(t.pct),
        ])
      );
    });
  }
  colGrid.appendChild(debilCard);

  const fuerteCard = el("div", { class: "card" });
  fuerteCard.appendChild(el("h3", {}, "Temas que dominas"));
  if (stats.temasFuertes.length === 0) {
    fuerteCard.appendChild(el("p", { style: "color:#5b6775" }, "Sigue practicando para ver aquí tus puntos fuertes."));
  } else {
    stats.temasFuertes.forEach((t) => {
      fuerteCard.appendChild(
        el("div", { style: "margin-bottom:.6rem" }, [
          el("div", { style: "display:flex;justify-content:space-between;font-size:.85rem;margin-bottom:.2rem" }, [el("span", {}, t.tema), el("span", { style: "font-weight:700" }, `${t.pct}%`)]),
          progressBar(t.pct),
        ])
      );
    });
  }
  colGrid.appendChild(fuerteCard);
  container.appendChild(colGrid);

  if (stats.ultimos.length > 0) {
    const ultimosCard = el("div", { class: "card" });
    ultimosCard.appendChild(el("h3", {}, "Últimos resultados"));
    const lista = el("div", { style: "display:flex;flex-wrap:wrap;gap:.35rem" });
    stats.ultimos.forEach((a) => {
      lista.appendChild(el("span", { class: "pill", style: a.correct ? "background:#e6f4ec;color:#1e8e5a" : "background:#fbe9e7;color:#c0392b" }, `${a.correct ? "✓" : "✗"} ${a.tema}`));
    });
    ultimosCard.appendChild(lista);
    container.appendChild(ultimosCard);
  }

  container.appendChild(el("h2", { style: "margin-top:1.6rem" }, "Módulos de estudio"));
  const menuGrid = el("div", { class: "grid grid-4" });
  MODULOS_MENU.forEach((m) => {
    const tile = el("div", { class: "modulo-tile", onclick: () => navegar(m.ruta) });
    const card = el("div", { class: "card" }, [el("span", { class: "modulo-icono" }, m.icono), el("h3", {}, m.titulo), el("p", {}, m.desc)]);
    tile.appendChild(card);
    menuGrid.appendChild(tile);
  });
  container.appendChild(menuGrid);
}

function statCard(label, valor, claseValor) {
  return el("div", { class: "card stat-card" }, [el("div", { class: `stat-valor ${claseValor}` }, String(valor)), el("div", { class: "stat-label" }, label)]);
}
