import { el } from "../ui.js";

export async function render(container, params = {}, navegar) {
  const { ratios } = await import("../../data/ratios.js");
  const { reglasFundamentales } = await import("../../data/asientos.js");
  const { teoriaAuditoria } = await import("../../data/auditoria.js");

  container.appendChild(
    el("div", { class: "topbar" }, [el("div", {}, [el("h1", {}, "Guía rápida / Chuleta de estudio"), el("div", { class: "subt" }, "Repaso exprés de todo lo esencial antes de entrar a la entrevista")])])
  );

  // Principios contables clave
  container.appendChild(
    seccion("Principios contables clave (PGC)", [
      bloqueTexto("Principio de devengo", "Los ingresos y gastos se registran cuando se generan económicamente, no cuando se cobran o pagan. Por eso existen las periodificaciones, las facturas pendientes de recibir/emitir y el devengo de intereses."),
      bloqueTexto("Principio de prudencia", "Ante la incertidumbre, se contabilizan las pérdidas probables en cuanto se conocen (deterioros, provisiones) y los beneficios solo cuando se realizan. No se anticipan ingresos dudosos."),
      bloqueTexto("Beneficio ≠ Flujo de caja", "El beneficio es un concepto de devengo (incluye ventas a crédito, amortizaciones no monetarias...). El flujo de caja es la tesorería real que entra y sale. Una empresa puede ser rentable y tener problemas de caja si, por ejemplo, sus clientes tardan mucho en pagar o ha invertido mucho en inmovilizado."),
    ])
  );

  // Estructura del balance
  container.appendChild(
    seccion("Estructura del balance y la PYG", [
      bloqueTexto("Activo", "Corriente (se espera convertir en efectivo en ≤12 meses: existencias, clientes, efectivo) y No corriente (inmovilizado material, intangible, inversiones a largo plazo)."),
      bloqueTexto("Patrimonio Neto y Pasivo", "Patrimonio Neto (capital, reservas, resultado del ejercicio) + Pasivo No corriente (deudas a largo plazo) + Pasivo Corriente (deudas a corto plazo, proveedores, acreedores)."),
      bloqueTexto("Cascada de la PYG", "Ventas − Aprovisionamientos ± Variación existencias = Margen Bruto. Margen Bruto − Gastos de personal − Otros gastos de explotación = EBITDA. EBITDA − Amortizaciones = EBIT. EBIT − Gastos financieros = RAI. RAI − Impuesto = Beneficio Neto."),
      bloqueTexto("Fondo de Maniobra (Working Capital)", "Activo Corriente − Pasivo Corriente. Mide el margen de seguridad financiera a corto plazo."),
    ])
  );

  // Asientos: reglas
  const reglasCard = el("div", { class: "card chuleta-seccion" });
  reglasCard.appendChild(el("h3", {}, "Reglas de Debe y Haber"));
  const tabla = el("table", { class: "tabla-financiera" });
  reglasFundamentales.forEach((r) => tabla.appendChild(el("tr", {}, [el("td", {}, r.regla), el("td", { style: "font-weight:800" }, r.lado)])));
  reglasCard.appendChild(tabla);
  container.appendChild(reglasCard);

  // Ratios: fórmulas rápidas
  const ratiosCard = el("div", { class: "card chuleta-seccion" });
  ratiosCard.appendChild(el("h3", {}, "Fórmulas de ratios"));
  const categorias = [...new Set(ratios.map((r) => r.categoria))];
  categorias.forEach((cat) => {
    ratiosCard.appendChild(el("h4", {}, cat));
    const ul = el("ul");
    ratios.filter((r) => r.categoria === cat).forEach((r) => ul.appendChild(el("li", {}, [el("strong", {}, r.nombre + ": "), r.formula])));
    ratiosCard.appendChild(ul);
  });
  container.appendChild(ratiosCard);

  // Auditoría: resumen
  const audCard = el("div", { class: "card chuleta-seccion" });
  audCard.appendChild(el("h3", {}, "Auditoría: conceptos clave"));
  teoriaAuditoria.forEach((t) => {
    audCard.appendChild(el("h4", {}, t.titulo));
    audCard.appendChild(el("p", {}, t.resumen));
  });
  container.appendChild(audCard);

  // IVA
  container.appendChild(
    seccion("IVA: soportado vs. repercutido", [
      bloqueTexto("IVA soportado (472)", "El que la empresa paga en sus COMPRAS. Es deducible si hay factura correcta."),
      bloqueTexto("IVA repercutido (477)", "El que la empresa cobra a sus clientes en sus VENTAS, en nombre de Hacienda."),
      bloqueTexto("Liquidación", "Cuota a ingresar = IVA repercutido − IVA soportado. Si el soportado es mayor, resulta una cuota a compensar/devolver."),
    ])
  );

  container.appendChild(
    el("div", { class: "card", style: "margin-top:1rem" }, [
      el("p", {}, "💪 ¡Mucha suerte en la entrevista! Repasa esta guía justo antes de entrar y practica el Modo Examen y el Modo Entrevista para llegar con confianza."),
      el("button", { class: "btn btn-primario", onclick: () => navegar("dashboard") }, "Volver al dashboard"),
    ])
  );
}

function seccion(titulo, bloques) {
  const card = el("div", { class: "card chuleta-seccion" });
  card.appendChild(el("h3", {}, titulo));
  bloques.forEach((b) => card.appendChild(b));
  return card;
}

function bloqueTexto(titulo, texto) {
  return el("div", { style: "margin-bottom:.6rem" }, [el("div", { style: "font-weight:700;font-size:.88rem" }, titulo), el("p", { style: "margin:.1rem 0 0" }, texto)]);
}
