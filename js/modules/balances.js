import { el, formatEUR, renderMCQ } from "../ui.js";
import { markCasoVisitado } from "../storage.js";

const LABELS_ACTIVO = {
  inmovilizadoMaterial: "Inmovilizado material",
  inmovilizadoIntangible: "Inmovilizado intangible",
  existencias: "Existencias",
  clientes: "Clientes",
  otrosDeudores: "Otros deudores",
  efectivo: "Efectivo y equivalentes",
};
const LABELS_PNPASIVO = {
  capitalSocial: "Capital social",
  reservas: "Reservas",
  resultadoEjercicio: "Resultado del ejercicio",
  deudasLPlazo: "Deudas financieras a largo plazo",
  deudasCPlazo: "Deudas financieras a corto plazo",
  proveedores: "Proveedores",
  acreedores: "Acreedores",
  otrosPasivos: "Otros pasivos",
};

function sum(obj) {
  return Object.values(obj).reduce((a, b) => a + b, 0);
}

function calcularPYG(pyg) {
  const margenBruto = pyg.ventas + pyg.aprovisionamientos + pyg.variacionExistencias;
  const ebitda = margenBruto + pyg.gastosPersonal + pyg.otrosGastosExplotacion;
  const ebit = ebitda + pyg.amortizaciones;
  const rai = ebit + pyg.gastosFinancieros;
  const beneficioNeto = rai + pyg.impuesto;
  return { ...pyg, margenBruto, ebitda, ebit, rai, beneficioNeto };
}

export async function render(container, params = {}, navegar) {
  const { companies } = await import("../../data/companies.js");
  const empresaId = params.empresa || companies[0].id;
  const empresa = companies.find((c) => c.id === empresaId) || companies[0];

  container.appendChild(el("div", { class: "topbar" }, [el("div", {}, [el("h1", {}, "Balances y cuentas de pérdidas y ganancias"), el("div", { class: "subt" }, "5 empresas ficticias de distintos sectores para analizar")])]));

  const tabs = el("div", { class: "btn-fila", style: "margin-bottom:1rem" });
  companies.forEach((c) => {
    tabs.appendChild(el("button", { class: `btn ${c.id === empresa.id ? "btn-primario" : "btn-secundario"}`, onclick: () => navegar(`balances?empresa=${c.id}`) }, c.sector.split(" / ")[0]));
  });
  container.appendChild(tabs);

  container.appendChild(el("div", { class: "card" }, [el("h2", { style: "margin:0" }, empresa.nombre), el("p", { style: "color:#5b6775;margin:.2rem 0 0" }, empresa.sector), el("p", {}, empresa.descripcion)]));

  const totalActivo = sum(empresa.balance.activo);
  const totalPN = sum(empresa.balance.patrimonioNetoPasivo);
  const pyg = calcularPYG(empresa.pyg);

  const grid = el("div", { class: "grid grid-2" });

  const activoCard = el("div", { class: "card" });
  activoCard.appendChild(el("h3", {}, "ACTIVO"));
  const tablaActivo = el("table", { class: "tabla-financiera" });
  Object.entries(LABELS_ACTIVO).forEach(([k, label]) => tablaActivo.appendChild(fila(label, empresa.balance.activo[k])));
  tablaActivo.appendChild(fila("TOTAL ACTIVO", totalActivo, "fila-total"));
  activoCard.appendChild(tablaActivo);
  grid.appendChild(activoCard);

  const pnCard = el("div", { class: "card" });
  pnCard.appendChild(el("h3", {}, "PATRIMONIO NETO Y PASIVO"));
  const tablaPN = el("table", { class: "tabla-financiera" });
  Object.entries(LABELS_PNPASIVO).forEach(([k, label]) => tablaPN.appendChild(fila(label, empresa.balance.patrimonioNetoPasivo[k])));
  tablaPN.appendChild(fila("TOTAL PATRIMONIO NETO + PASIVO", totalPN, "fila-total"));
  pnCard.appendChild(tablaPN);
  grid.appendChild(pnCard);

  container.appendChild(grid);

  if (totalActivo === totalPN) {
    container.appendChild(el("div", { class: "alerta-info" }, `✓ El balance cuadra: ${formatEUR(totalActivo)} = ${formatEUR(totalPN)}.`));
  }

  const pygCard = el("div", { class: "card" });
  pygCard.appendChild(el("h3", {}, "CUENTA DE PÉRDIDAS Y GANANCIAS"));
  const tablaPyg = el("table", { class: "tabla-financiera" });
  tablaPyg.appendChild(fila("Ventas", pyg.ventas));
  tablaPyg.appendChild(fila("Aprovisionamientos", pyg.aprovisionamientos));
  tablaPyg.appendChild(fila("Variación de existencias", pyg.variacionExistencias));
  tablaPyg.appendChild(fila("MARGEN BRUTO", pyg.margenBruto, "fila-subtotal"));
  tablaPyg.appendChild(fila("Gastos de personal", pyg.gastosPersonal));
  tablaPyg.appendChild(fila("Otros gastos de explotación", pyg.otrosGastosExplotacion));
  tablaPyg.appendChild(fila("EBITDA", pyg.ebitda, "fila-subtotal"));
  tablaPyg.appendChild(fila("Amortizaciones", pyg.amortizaciones));
  tablaPyg.appendChild(fila("EBIT", pyg.ebit, "fila-subtotal"));
  tablaPyg.appendChild(fila("Gastos financieros", pyg.gastosFinancieros));
  tablaPyg.appendChild(fila("Resultado antes de impuestos (RAI)", pyg.rai, "fila-subtotal"));
  tablaPyg.appendChild(fila("Impuesto sobre beneficios", pyg.impuesto));
  tablaPyg.appendChild(fila("BENEFICIO NETO", pyg.beneficioNeto, "fila-total"));
  pygCard.appendChild(tablaPyg);
  container.appendChild(pygCard);

  if (Math.abs(pyg.beneficioNeto - empresa.balance.patrimonioNetoPasivo.resultadoEjercicio) < 1) {
    container.appendChild(el("div", { class: "alerta-info" }, `✓ El resultado del ejercicio en balance (${formatEUR(empresa.balance.patrimonioNetoPasivo.resultadoEjercicio)}) coincide con el beneficio neto de la PYG.`));
  }

  // Preguntas tipo test
  container.appendChild(el("h2", { style: "margin-top:1.4rem" }, "Preguntas tipo test"));
  empresa.preguntasTest.forEach((p, i) => {
    const box = el("div", { class: "card" });
    container.appendChild(box);
    renderMCQ(box, { id: `${empresa.id}-test-${i}`, modulo: "balances", tema: empresa.sector, dificultad: "intermedio", enunciado: p.enunciado, opciones: p.opciones, correcta: p.correcta, explicacion: p.explicacion }, { modoExamen: false, mostrarTema: false });
  });

  // Preguntas abiertas
  container.appendChild(el("h2", { style: "margin-top:1.4rem" }, "Preguntas de interpretación abierta"));
  container.appendChild(el("p", { class: "subt" }, "Piensa tu respuesta y luego pulsa 'Ver puntos clave' para comparar tu razonamiento."));
  empresa.preguntasAbiertas.forEach((p, i) => {
    const box = el("div", { class: "card" });
    box.appendChild(el("p", { style: "font-weight:600" }, p.pregunta));
    const btn = el("button", { class: "btn btn-secundario" }, "Ver puntos clave");
    const lista = el("ul", { style: "display:none;margin-top:.6rem" });
    p.puntosClave.forEach((pt) => lista.appendChild(el("li", {}, pt)));
    btn.addEventListener("click", () => { lista.style.display = lista.style.display === "none" ? "block" : "none"; });
    box.appendChild(btn);
    box.appendChild(lista);
    container.appendChild(box);
  });

  // Riesgos
  container.appendChild(el("h2", { style: "margin-top:1.4rem" }, "Identificación de riesgos como auditor"));
  empresa.riesgosDetectables.forEach((r) => {
    const box = el("div", { class: "card" });
    box.appendChild(el("p", { style: "font-weight:700" }, `⚠️ ${r.anomalia}`));
    box.appendChild(el("p", {}, [el("strong", {}, "Riesgo de auditoría: "), r.riesgoAuditoria]));
    box.appendChild(el("p", {}, [el("strong", {}, "Procedimiento a aplicar: "), r.procedimiento]));
    container.appendChild(box);
  });

  markCasoVisitado(`balance-${empresa.id}`);
}

function fila(label, valor, clase = "") {
  return el("tr", { class: clase }, [el("td", {}, label), el("td", {}, formatEUR(valor))]);
}
