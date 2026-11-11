// Ejercicios de asientos contables (PGC español). Debe = Haber siempre.
export const reglasFundamentales = [
  { regla: "Aumenta un activo", lado: "DEBE" },
  { regla: "Disminuye un activo", lado: "HABER" },
  { regla: "Aumenta un pasivo", lado: "HABER" },
  { regla: "Disminuye un pasivo", lado: "DEBE" },
  { regla: "Aumenta el patrimonio neto", lado: "HABER" },
  { regla: "Disminuye el patrimonio neto", lado: "DEBE" },
  { regla: "Los gastos aumentan en el", lado: "DEBE" },
  { regla: "Los ingresos aumentan en el", lado: "HABER" },
];

function tabla(filas) {
  const rows = filas
    .map(
      (f) =>
        `<tr><td>${f.cuenta}</td><td>${f.debe ? f.debe.toLocaleString("es-ES") + " €" : ""}</td><td>${
          f.haber ? f.haber.toLocaleString("es-ES") + " €" : ""
        }</td></tr>`
    )
    .join("");
  return `<table class="asiento-tabla"><tr><th>Cuenta</th><th>Debe</th><th>Haber</th></tr>${rows}</table>`;
}

// Ejercicios tipo test: elegir el asiento correcto entre 4 opciones (A-D)
export const asientosQuiz = [
  {
    id: "as001",
    modulo: "asientos",
    tema: "Compra de mercaderías al contado",
    dificultad: "básico",
    enunciado: "Una empresa compra mercaderías por 10.000 € + IVA 21%, pagando al contado mediante transferencia bancaria. ¿Cuál es el asiento correcto?",
    opciones: {
      A: { html: tabla([{ cuenta: "(600) Compra de mercaderías", debe: 10000 }, { cuenta: "(472) H.P. IVA soportado", debe: 2100 }, { cuenta: "(572) Bancos", haber: 12100 }]) },
      B: { html: tabla([{ cuenta: "(600) Compra de mercaderías", debe: 12100 }, { cuenta: "(572) Bancos", haber: 12100 }]) },
      C: { html: tabla([{ cuenta: "(572) Bancos", debe: 12100 }, { cuenta: "(600) Compra de mercaderías", haber: 10000 }, { cuenta: "(472) H.P. IVA soportado", haber: 2100 }]) },
      D: { html: tabla([{ cuenta: "(600) Compra de mercaderías", debe: 10000 }, { cuenta: "(477) H.P. IVA repercutido", debe: 2100 }, { cuenta: "(572) Bancos", haber: 12100 }]) },
    },
    correcta: "A",
    explicacion:
      "La compra aumenta un gasto (600, al Debe). El IVA soportado en una compra es deducible y se registra en el Debe de la cuenta (472) H.P. IVA soportado, nunca en el (477). El pago al contado disminuye el activo Bancos, por lo que se anota en el Haber por el importe total (12.100 €).",
    porQueNoLasOtras: {
      B: "Olvida registrar el IVA soportado como cuenta independiente (472); lo integra en la compra, lo que distorsiona el gasto real y el control del IVA deducible.",
      C: "Invierte el Debe y el Haber: registra la salida de Bancos como un aumento (Debe) cuando en realidad el pago disminuye el activo (Haber), y coloca la compra y el IVA en el Haber cuando deberían ir al Debe.",
      D: "Usa la cuenta (477) H.P. IVA repercutido, que corresponde al IVA de VENTAS, no al IVA soportado en compras. Es un error típico de confundir IVA soportado (472, en compras) con IVA repercutido (477, en ventas).",
    },
  },
  {
    id: "as002",
    modulo: "asientos",
    tema: "Compra de mercaderías a crédito",
    dificultad: "básico",
    enunciado: "La empresa compra mercaderías por 8.000 € + IVA 21% a un proveedor, a pagar a 60 días. ¿Cuál es el asiento correcto?",
    opciones: {
      A: { html: tabla([{ cuenta: "(600) Compra de mercaderías", debe: 8000 }, { cuenta: "(472) H.P. IVA soportado", debe: 1680 }, { cuenta: "(400) Proveedores", haber: 9680 }]) },
      B: { html: tabla([{ cuenta: "(400) Proveedores", debe: 9680 }, { cuenta: "(600) Compra de mercaderías", haber: 8000 }, { cuenta: "(472) H.P. IVA soportado", haber: 1680 }]) },
      C: { html: tabla([{ cuenta: "(600) Compra de mercaderías", debe: 9680 }, { cuenta: "(400) Proveedores", haber: 9680 }]) },
      D: { html: tabla([{ cuenta: "(600) Compra de mercaderías", debe: 8000 }, { cuenta: "(472) H.P. IVA soportado", debe: 1680 }, { cuenta: "(430) Clientes", haber: 9680 }]) },
    },
    correcta: "A",
    explicacion:
      "Al comprar a crédito no hay salida de tesorería inmediata: nace una deuda con el proveedor, que es un pasivo. Aumentar un pasivo se registra en el Haber de (400) Proveedores por el importe total (9.680 €). El gasto (600) y el IVA soportado (472) van al Debe, igual que en la compra al contado.",
    porQueNoLasOtras: {
      B: "Invierte todos los signos: registra el nacimiento de la deuda con el proveedor en el Debe (cuando aumentar un pasivo va al Haber) y la compra en el Haber (cuando un gasto va al Debe).",
      C: "No separa el IVA soportado de la compra; mete el 21% de IVA dentro de la cuenta de compras, lo que infla el gasto contable y rompe el control del IVA deducible ante Hacienda.",
      D: "Confunde (400) Proveedores con (430) Clientes. Proveedores es la cuenta de pasivo para deudas por compras; Clientes es la cuenta de activo por ventas pendientes de cobro.",
    },
  },
  {
    id: "as003",
    modulo: "asientos",
    tema: "Venta de productos al contado",
    dificultad: "básico",
    enunciado: "La empresa vende productos por 15.000 € + IVA 21%, cobrando al contado en efectivo. ¿Cuál es el asiento correcto?",
    opciones: {
      A: { html: tabla([{ cuenta: "(570) Caja", debe: 18150 }, { cuenta: "(700) Ventas de mercaderías", haber: 15000 }, { cuenta: "(477) H.P. IVA repercutido", haber: 3150 }]) },
      B: { html: tabla([{ cuenta: "(570) Caja", debe: 18150 }, { cuenta: "(700) Ventas de mercaderías", haber: 15000 }, { cuenta: "(472) H.P. IVA soportado", haber: 3150 }]) },
      C: { html: tabla([{ cuenta: "(700) Ventas de mercaderías", debe: 15000 }, { cuenta: "(477) H.P. IVA repercutido", debe: 3150 }, { cuenta: "(570) Caja", haber: 18150 }]) },
      D: { html: tabla([{ cuenta: "(430) Clientes", debe: 18150 }, { cuenta: "(700) Ventas de mercaderías", haber: 15000 }, { cuenta: "(477) H.P. IVA repercutido", haber: 3150 }]) },
    },
    correcta: "A",
    explicacion:
      "El cobro en efectivo aumenta el activo Caja (Debe) por el importe total con IVA (18.150 €). La venta es un ingreso y aumenta en el Haber (700) por el importe sin IVA (15.000 €). El IVA repercutido al cliente es una deuda con Hacienda y aumenta en el Haber (477) por 3.150 €.",
    porQueNoLasOtras: {
      B: "Usa (472) H.P. IVA soportado, que es la cuenta de IVA en COMPRAS, no en ventas. En una venta el IVA que se repercute al cliente va siempre a (477).",
      C: "Invierte el Debe y el Haber: la entrada de caja no puede ir al Haber (disminuiría el activo) y los ingresos no pueden ir al Debe (disminuirían el ingreso).",
      D: "Usa (430) Clientes, que es correcto solo si la venta fuera A CRÉDITO. Al ser una venta al CONTADO en efectivo, el cobro es inmediato y debe registrarse en (570) Caja, no en Clientes.",
    },
  },
  {
    id: "as004",
    modulo: "asientos",
    tema: "Venta de productos a crédito",
    dificultad: "básico",
    enunciado: "La empresa vende productos por 20.000 € + IVA 21% a un cliente, a cobrar en 30 días. ¿Cuál es el asiento correcto?",
    opciones: {
      A: { html: tabla([{ cuenta: "(430) Clientes", debe: 24200 }, { cuenta: "(700) Ventas de mercaderías", haber: 20000 }, { cuenta: "(477) H.P. IVA repercutido", haber: 4200 }]) },
      B: { html: tabla([{ cuenta: "(700) Ventas de mercaderías", debe: 20000 }, { cuenta: "(477) H.P. IVA repercutido", debe: 4200 }, { cuenta: "(430) Clientes", haber: 24200 }]) },
      C: { html: tabla([{ cuenta: "(400) Proveedores", debe: 24200 }, { cuenta: "(700) Ventas de mercaderías", haber: 20000 }, { cuenta: "(477) H.P. IVA repercutido", haber: 4200 }]) },
      D: { html: tabla([{ cuenta: "(430) Clientes", debe: 20000 }, { cuenta: "(700) Ventas de mercaderías", haber: 20000 }]) },
    },
    correcta: "A",
    explicacion:
      "La venta a crédito genera un derecho de cobro: aumenta el activo (430) Clientes, por lo que se registra en el Debe por el importe total con IVA (24.200 €). El ingreso (700) y el IVA repercutido (477) se registran en el Haber, igual que en la venta al contado.",
    porQueNoLasOtras: {
      B: "Invierte todos los signos: el derecho de cobro (activo que aumenta) no puede ir al Haber, y los ingresos no pueden ir al Debe.",
      C: "Confunde (430) Clientes con (400) Proveedores. Clientes es la cuenta correcta para derechos de cobro por ventas; Proveedores es para deudas por compras.",
      D: "Olvida registrar el IVA repercutido (4.200 €), dejando el asiento descuadrado frente a la obligación real con Hacienda y subestimando tanto el derecho de cobro como la deuda por IVA.",
    },
  },
  {
    id: "as005",
    modulo: "asientos",
    tema: "Pago a proveedores",
    dificultad: "básico",
    enunciado: "La empresa paga 9.680 € a un proveedor mediante transferencia bancaria, liquidando una deuda pendiente. ¿Cuál es el asiento correcto?",
    opciones: {
      A: { html: tabla([{ cuenta: "(400) Proveedores", debe: 9680 }, { cuenta: "(572) Bancos", haber: 9680 }]) },
      B: { html: tabla([{ cuenta: "(572) Bancos", debe: 9680 }, { cuenta: "(400) Proveedores", haber: 9680 }]) },
      C: { html: tabla([{ cuenta: "(400) Proveedores", debe: 9680 }, { cuenta: "(430) Clientes", haber: 9680 }]) },
      D: { html: tabla([{ cuenta: "(600) Compra de mercaderías", debe: 9680 }, { cuenta: "(572) Bancos", haber: 9680 }]) },
    },
    correcta: "A",
    explicacion:
      "Pagar una deuda disminuye el pasivo (400) Proveedores, lo que se registra en el Debe. El pago también disminuye el activo Bancos, lo que se registra en el Haber. El gasto de la compra ya se reconoció en su momento; este asiento solo liquida tesorería y deuda.",
    porQueNoLasOtras: {
      B: "Invierte el asiento: registraría un aumento de Bancos (cuando en realidad el banco disminuye al pagar) y una disminución errónea de Proveedores en el Haber (cuando disminuir un pasivo va al Debe).",
      C: "Usa (430) Clientes en lugar de (572) Bancos; no tiene sentido cancelar una deuda con proveedores contra la cuenta de clientes salvo que exista un acuerdo de compensación expreso, que no es el caso aquí.",
      D: "Vuelve a registrar el gasto de compra (600), duplicando un gasto que ya se contabilizó cuando se recibió la mercadería. Este asiento es solo el pago, no una nueva compra.",
    },
  },
  {
    id: "as006",
    modulo: "asientos",
    tema: "Cobro de clientes",
    dificultad: "básico",
    enunciado: "Un cliente paga 24.200 € mediante transferencia bancaria, liquidando una factura pendiente. ¿Cuál es el asiento correcto?",
    opciones: {
      A: { html: tabla([{ cuenta: "(572) Bancos", debe: 24200 }, { cuenta: "(430) Clientes", haber: 24200 }]) },
      B: { html: tabla([{ cuenta: "(430) Clientes", debe: 24200 }, { cuenta: "(572) Bancos", haber: 24200 }]) },
      C: { html: tabla([{ cuenta: "(572) Bancos", debe: 24200 }, { cuenta: "(700) Ventas de mercaderías", haber: 24200 }]) },
      D: { html: tabla([{ cuenta: "(572) Bancos", debe: 24200 }, { cuenta: "(400) Proveedores", haber: 24200 }]) },
    },
    correcta: "A",
    explicacion:
      "El cobro aumenta el activo Bancos (Debe) y cancela el derecho de cobro, disminuyendo el activo (430) Clientes (Haber). La venta ya se reconoció como ingreso cuando se emitió la factura; este asiento solo mueve tesorería y cuentas a cobrar.",
    porQueNoLasOtras: {
      B: "Invierte el asiento: Bancos no puede ir al Haber si está aumentando, ni Clientes al Debe si está disminuyendo.",
      C: "Vuelve a registrar un ingreso por ventas (700), duplicando el ingreso que ya se contabilizó en el momento de la venta a crédito.",
      D: "Usa (400) Proveedores en vez de (430) Clientes; son cuentas de naturaleza y signo distintos (pasivo vs. activo) y no deben confundirse.",
    },
  },
  {
    id: "as007",
    modulo: "asientos",
    tema: "Compra de maquinaria",
    dificultad: "intermedio",
    enunciado: "La empresa compra una máquina por 40.000 € + IVA 21%, pagando el 30% al contado y el resto a crédito a 90 días. ¿Cuál es el asiento correcto?",
    opciones: {
      A: { html: tabla([{ cuenta: "(213) Maquinaria", debe: 40000 }, { cuenta: "(472) H.P. IVA soportado", debe: 8400 }, { cuenta: "(572) Bancos", haber: 14520 }, { cuenta: "(523) Proveedores de inmovilizado a c/p", haber: 33880 }]) },
      B: { html: tabla([{ cuenta: "(600) Compra de mercaderías", debe: 40000 }, { cuenta: "(472) H.P. IVA soportado", debe: 8400 }, { cuenta: "(572) Bancos", haber: 14520 }, { cuenta: "(400) Proveedores", haber: 33880 }]) },
      C: { html: tabla([{ cuenta: "(213) Maquinaria", debe: 48400 }, { cuenta: "(572) Bancos", haber: 14520 }, { cuenta: "(523) Proveedores de inmovilizado a c/p", haber: 33880 }]) },
      D: { html: tabla([{ cuenta: "(572) Bancos", debe: 14520 }, { cuenta: "(523) Proveedores de inmovilizado a c/p", debe: 33880 }, { cuenta: "(213) Maquinaria", haber: 40000 }, { cuenta: "(472) H.P. IVA soportado", haber: 8400 }]) },
    },
    correcta: "A",
    explicacion:
      "La maquinaria es inmovilizado material (213), no mercadería, y aumenta un activo no corriente (Debe) por su valor sin IVA (40.000 €). El IVA soportado (472) va al Debe (8.400 €). El pago parcial al contado disminuye Bancos (Haber, 14.520 €) y el resto genera una deuda con proveedores de inmovilizado a corto plazo (523), no con proveedores comerciales (400), por el resto (33.880 €).",
    porQueNoLasOtras: {
      B: "Clasifica la compra como mercadería (600) en lugar de inmovilizado (213), y usa proveedores comerciales (400) en vez de proveedores de inmovilizado (523). La maquinaria no es existencia para la venta, es un activo que la empresa usará durante varios años.",
      C: "Incluye el IVA dentro del valor del inmovilizado (48.400 € en lugar de 40.000 €). El IVA soportado deducible no forma parte del coste del activo; debe registrarse por separado en (472).",
      D: "Invierte completamente los signos del asiento: registra la deuda con proveedores de inmovilizado como un aumento del Debe y el activo adquirido en el Haber, cuando debería ser al contrario.",
    },
  },
  {
    id: "as008",
    modulo: "asientos",
    tema: "Amortización de maquinaria",
    dificultad: "intermedio",
    enunciado: "Al cierre del ejercicio, la empresa calcula la amortización anual de su maquinaria por importe de 6.000 €. ¿Cuál es el asiento correcto?",
    opciones: {
      A: { html: tabla([{ cuenta: "(681) Amortización del inmovilizado material", debe: 6000 }, { cuenta: "(2813) Amortización acumulada de maquinaria", haber: 6000 }]) },
      B: { html: tabla([{ cuenta: "(2813) Amortización acumulada de maquinaria", debe: 6000 }, { cuenta: "(681) Amortización del inmovilizado material", haber: 6000 }]) },
      C: { html: tabla([{ cuenta: "(681) Amortización del inmovilizado material", debe: 6000 }, { cuenta: "(213) Maquinaria", haber: 6000 }]) },
      D: { html: tabla([{ cuenta: "(690) Pérdidas por deterioro del inmovilizado material", debe: 6000 }, { cuenta: "(2813) Amortización acumulada de maquinaria", haber: 6000 }]) },
    },
    correcta: "A",
    explicacion:
      "La amortización es un gasto que refleja la pérdida de valor del inmovilizado por su uso/paso del tiempo, y aumenta en el Debe (681). En contrapartida, se acumula en una cuenta compensadora de activo, (2813) Amortización acumulada, que resta valor al activo en el balance y se registra en el Haber (no se toca directamente la cuenta de maquinaria 213, que mantiene su coste histórico).",
    porQueNoLasOtras: {
      B: "Invierte el asiento: el gasto de amortización debe ir al Debe (aumenta un gasto) y la amortización acumulada al Haber (es una cuenta correctora de activo que 'resta' valor en el Haber).",
      C: "Reduce directamente el coste histórico de la cuenta (213) Maquinaria en lugar de usar la cuenta compensadora (2813). El PGC exige mantener el coste histórico del activo y reflejar la depreciación acumulada en una cuenta separada.",
      D: "Confunde amortización sistemática (681, por el uso normal y previsible) con deterioro de valor (690, por una pérdida de valor adicional e imprevista, p. ej. obsolescencia tecnológica). Son conceptos distintos del PGC.",
    },
  },
  {
    id: "as009",
    modulo: "asientos",
    tema: "Registro de nóminas",
    dificultad: "intermedio",
    enunciado: "La empresa devenga los sueldos del mes por 20.000 € brutos. Las retenciones de IRPF ascienden a 2.500 € y las cotizaciones a la Seguridad Social a cargo del trabajador a 1.200 €, pendiente todo de pago. ¿Cuál es el asiento correcto de devengo?",
    opciones: {
      A: { html: tabla([{ cuenta: "(640) Sueldos y salarios", debe: 20000 }, { cuenta: "(4751) H.P. acreedora por retenciones IRPF", haber: 2500 }, { cuenta: "(476) Organismos de la Seg. Social, acreedores", haber: 1200 }, { cuenta: "(465) Remuneraciones pendientes de pago", haber: 16300 }]) },
      B: { html: tabla([{ cuenta: "(640) Sueldos y salarios", debe: 16300 }, { cuenta: "(465) Remuneraciones pendientes de pago", haber: 16300 }]) },
      C: { html: tabla([{ cuenta: "(465) Remuneraciones pendientes de pago", debe: 20000 }, { cuenta: "(640) Sueldos y salarios", haber: 20000 }]) },
      D: { html: tabla([{ cuenta: "(640) Sueldos y salarios", debe: 20000 }, { cuenta: "(572) Bancos", haber: 20000 }]) },
    },
    correcta: "A",
    explicacion:
      "El gasto de personal se reconoce por el importe BRUTO (20.000 €) en (640), al Debe. De ese bruto, las retenciones de IRPF y la parte de Seguridad Social del trabajador no se pagan al trabajador sino que generan deudas con Hacienda (4751) y con la Seguridad Social (476), que aumentan en el Haber. El resto (16.300 €, el neto) es la deuda pendiente con el personal, (465), también en el Haber. El total del Haber (2.500+1.200+16.300=20.000) coincide con el Debe.",
    porQueNoLasOtras: {
      B: "Registra el gasto solo por el importe neto (16.300 €), ocultando el coste real del gasto de personal y sin reflejar las deudas con Hacienda y la Seguridad Social, que son obligaciones reales de la empresa frente a terceros.",
      C: "Invierte el asiento completo: el gasto de personal no puede ir al Haber (disminuiría un gasto que en realidad se está generando) y la deuda con el personal no puede nacer en el Debe.",
      D: "Da por pagada la nómina directamente desde Bancos, sin pasar por el devengo de las deudas con Hacienda y la Seguridad Social. Esto es incorrecto en el momento del DEVENGO; el pago desde Bancos sería un asiento posterior y distinto, cuando efectivamente se liquide.",
    },
  },
  {
    id: "as010",
    modulo: "asientos",
    tema: "Pago de préstamos",
    dificultad: "intermedio",
    enunciado: "La empresa paga una cuota de préstamo bancario de 5.000 €, de los cuales 4.200 € son devolución de principal (deuda a largo plazo reclasificada como corto plazo) y 800 € son intereses del periodo. El pago se realiza desde la cuenta bancaria. ¿Cuál es el asiento correcto?",
    opciones: {
      A: { html: tabla([{ cuenta: "(5201) Deudas a c/p por préstamos", debe: 4200 }, { cuenta: "(662) Intereses de deudas", debe: 800 }, { cuenta: "(572) Bancos", haber: 5000 }]) },
      B: { html: tabla([{ cuenta: "(572) Bancos", debe: 5000 }, { cuenta: "(5201) Deudas a c/p por préstamos", haber: 4200 }, { cuenta: "(662) Intereses de deudas", haber: 800 }]) },
      C: { html: tabla([{ cuenta: "(170) Deudas a l/p por préstamos", debe: 4200 }, { cuenta: "(662) Intereses de deudas", debe: 800 }, { cuenta: "(572) Bancos", haber: 5000 }]) },
      D: { html: tabla([{ cuenta: "(5201) Deudas a c/p por préstamos", debe: 5000 }, { cuenta: "(572) Bancos", haber: 5000 }]) },
    },
    correcta: "A",
    explicacion:
      "El pago de la cuota reduce la deuda pendiente a corto plazo (5201, ya reclasificada previamente), lo que disminuye un pasivo y se registra en el Debe (4.200 €). Los intereses son un gasto financiero del periodo y aumentan en el Debe (662, 800 €). El pago disminuye el activo Bancos, en el Haber, por el total (5.000 €).",
    porQueNoLasOtras: {
      B: "Invierte los signos: el pago desde Bancos disminuye el activo (debería ir al Haber, no al Debe) y la reducción de deuda e intereses no pueden ir al Haber en esta operación.",
      C: "Usa (170) Deudas a largo plazo en lugar de (5201) a corto plazo. La parte de la deuda que vence dentro de los próximos 12 meses debe estar reclasificada a corto plazo; pagar contra la cuenta de largo plazo sería incorrecto si ya se hizo la reclasificación.",
      D: "Trata toda la cuota como devolución de principal (5.000 €), sin separar los 800 € de intereses como gasto financiero. Esto infravalora el gasto financiero del periodo y sobreestima la reducción de la deuda.",
    },
  },
  {
    id: "as011",
    modulo: "asientos",
    tema: "Devengo de intereses",
    dificultad: "avanzado",
    enunciado: "Al cierre del ejercicio (31/12), la empresa tiene un préstamo cuyos intereses del último trimestre (900 €) se devengan pero no se pagarán hasta enero del año siguiente. ¿Cuál es el asiento de periodificación correcto a 31/12?",
    opciones: {
      A: { html: tabla([{ cuenta: "(662) Intereses de deudas", debe: 900 }, { cuenta: "(5130) Intereses a corto plazo de deudas", haber: 900 }]) },
      B: { html: tabla([{ cuenta: "(5130) Intereses a corto plazo de deudas", debe: 900 }, { cuenta: "(662) Intereses de deudas", haber: 900 }]) },
      C: { html: tabla([{ cuenta: "(662) Intereses de deudas", debe: 900 }, { cuenta: "(572) Bancos", haber: 900 }]) },
      D: { html: "No procede registrar ningún asiento hasta que se pague el interés en enero." },
    },
    correcta: "A",
    explicacion:
      "Por el principio de devengo, el gasto financiero debe reconocerse en el ejercicio en que se genera, aunque el pago sea posterior. Se registra el gasto (662) al Debe por 900 €, y como contrapartida nace una deuda (intereses pendientes de pago, 5130) que aumenta en el Haber. Este es un ejemplo clásico de periodificación: el gasto es de este ejercicio, el pago es del siguiente.",
    porQueNoLasOtras: {
      B: "Invierte el asiento: el gasto financiero del periodo no puede registrarse en el Haber (eso lo anularía) ni la deuda pendiente en el Debe.",
      C: "Da por pagado el interés desde Bancos en la fecha de cierre, cuando el enunciado indica explícitamente que el pago no se realizará hasta enero. Esto anticiparía una salida de tesorería que no ha ocurrido.",
      D: "Contradice directamente el principio de devengo (NRV PGC): los gastos se imputan al ejercicio en que se generan, no al ejercicio en que se pagan. No periodificar este gasto infravaloraría los gastos financieros del ejercicio.",
    },
  },
  {
    id: "as012",
    modulo: "asientos",
    tema: "Facturas pendientes de recibir",
    dificultad: "avanzado",
    enunciado: "Al cierre del ejercicio, la empresa ha recibido mercaderías de un proveedor por valor de 5.000 € + IVA, pero la factura todavía no ha llegado. ¿Cuál es el asiento correcto a 31/12 (sin IVA, al no disponer todavía de factura)?",
    opciones: {
      A: { html: tabla([{ cuenta: "(600) Compra de mercaderías", debe: 5000 }, { cuenta: "(4109) Acreedores por operaciones pendientes de factura", haber: 5000 }]) },
      B: { html: tabla([{ cuenta: "(4109) Acreedores por operaciones pendientes de factura", debe: 5000 }, { cuenta: "(600) Compra de mercaderías", haber: 5000 }]) },
      C: { html: tabla([{ cuenta: "(600) Compra de mercaderías", debe: 6050 }, { cuenta: "(400) Proveedores", haber: 6050 }]) },
      D: { html: "No procede registrar nada hasta que llegue la factura, por prudencia." },
    },
    correcta: "A",
    explicacion:
      "Por el principio de devengo, la mercadería ya ha sido recibida y el gasto/activo ya existe económicamente, aunque falte el documento formal (factura). Se registra la compra (600) al Debe y, como aún no hay factura, la deuda se anota en (4109) Acreedores por operaciones pendientes de factura en lugar de en (400) Proveedores. El IVA NO se registra todavía porque, sin factura, no hay derecho a deducción fiscal del IVA soportado.",
    porQueNoLasOtras: {
      B: "Invierte el asiento: la compra no puede ir al Haber (anularía el gasto) ni la deuda con el acreedor al Debe.",
      C: "Incluye el IVA (6.050 € con IVA) y usa la cuenta ordinaria de Proveedores (400), cuando el criterio correcto es registrar solo la base sin IVA en (4109) hasta que llegue la factura formal que permita deducir el IVA.",
      D: "Viola el principio de devengo: la mercadería ya se ha recibido y el pasivo ya existe aunque falte el soporte documental. No registrar la operación infravaloraría tanto las existencias/compras como las deudas con terceros al cierre.",
    },
  },
  {
    id: "as013",
    modulo: "asientos",
    tema: "Facturas pendientes de emitir",
    dificultad: "avanzado",
    enunciado: "La empresa ha prestado un servicio por 3.000 € a 31/12, pero la factura al cliente se emitirá en enero del año siguiente. ¿Cuál es el asiento correcto a 31/12 (sin IVA, al no haberse emitido factura)?",
    opciones: {
      A: { html: tabla([{ cuenta: "(4430) Clientes, facturas pendientes de formalizar", debe: 3000 }, { cuenta: "(700) Prestación de servicios", haber: 3000 }]) },
      B: { html: tabla([{ cuenta: "(700) Prestación de servicios", debe: 3000 }, { cuenta: "(4430) Clientes, facturas pendientes de formalizar", haber: 3000 }]) },
      C: { html: tabla([{ cuenta: "(430) Clientes", debe: 3630 }, { cuenta: "(700) Prestación de servicios", haber: 3000 }, { cuenta: "(477) H.P. IVA repercutido", haber: 630 }]) },
      D: { html: "No se registra nada hasta emitir la factura en enero, ya que el ingreso es del ejercicio siguiente." },
    },
    correcta: "A",
    explicacion:
      "El servicio ya se ha prestado, por lo que el ingreso ya se ha devengado (principio de devengo), aunque la factura formal se emita después. Se reconoce el ingreso (700) en el Haber, y el derecho de cobro se registra en (4430) Clientes, facturas pendientes de formalizar, al Debe, en lugar de en la cuenta ordinaria (430) Clientes, reservada para facturas ya emitidas. El IVA no se devenga todavía porque, salvo excepciones, el IVA repercutido nace con la emisión de la factura.",
    porQueNoLasOtras: {
      B: "Invierte el asiento: el derecho de cobro no puede ir al Haber ni el ingreso devengado al Debe.",
      C: "Usa la cuenta ordinaria (430) Clientes y registra el IVA repercutido (477) antes de haberse emitido la factura. Mientras no exista factura formal, se debe usar (4430) y no corresponde todavía devengar el IVA.",
      D: "Contradice el principio de devengo: el ingreso corresponde al ejercicio en que se presta el servicio (este ejercicio), no a aquel en que se emite la factura. No registrarlo infravaloraría los ingresos del periodo.",
    },
  },
  {
    id: "as014",
    modulo: "asientos",
    tema: "Deterioro de clientes",
    dificultad: "avanzado",
    enunciado: "Un cliente con un saldo pendiente de 2.000 € presenta serias dudas de cobro (concurso de acreedores). La empresa decide dotar un deterioro por el 100% del saldo, sin dar de baja el derecho de cobro todavía. ¿Cuál es el asiento correcto?",
    opciones: {
      A: { html: tabla([{ cuenta: "(694) Pérdidas por deterioro de créditos por operaciones comerciales", debe: 2000 }, { cuenta: "(490) Deterioro de valor de créditos por operaciones comerciales", haber: 2000 }]) },
      B: { html: tabla([{ cuenta: "(490) Deterioro de valor de créditos por operaciones comerciales", debe: 2000 }, { cuenta: "(694) Pérdidas por deterioro de créditos por operaciones comerciales", haber: 2000 }]) },
      C: { html: tabla([{ cuenta: "(694) Pérdidas por deterioro de créditos por operaciones comerciales", debe: 2000 }, { cuenta: "(430) Clientes", haber: 2000 }]) },
      D: { html: tabla([{ cuenta: "(650) Pérdidas de créditos comerciales incobrables", debe: 2000 }, { cuenta: "(430) Clientes", haber: 2000 }]) },
    },
    correcta: "A",
    explicacion:
      "El deterioro reconoce una pérdida probable de valor del derecho de cobro, SIN darlo de baja todavía (a diferencia de un incobrable definitivo). El gasto (694) aumenta en el Debe, y la contrapartida es una cuenta correctora de activo, (490) Deterioro de valor de créditos, que resta valor a Clientes en el balance y se registra en el Haber, manteniendo (430) Clientes con su saldo original.",
    porQueNoLasOtras: {
      B: "Invierte el asiento: el gasto por deterioro no puede ir al Haber (lo anularía) y la cuenta correctora de activo no puede ir al Debe en esta operación de dotación.",
      C: "Da de baja directamente el saldo de (430) Clientes, lo que correspondería a un incobrable definitivo (650/436), no a un deterioro por mera probabilidad de impago. El enunciado indica que el derecho de cobro NO se da de baja todavía.",
      D: "Usa la cuenta de incobrables definitivos (650) y cancela Clientes directamente. Es el tratamiento de una pérdida ya consumada y definitiva, distinto del deterioro por riesgo de cobro que plantea el enunciado.",
    },
  },
  {
    id: "as015",
    modulo: "asientos",
    tema: "Constitución de provisiones",
    dificultad: "avanzado",
    enunciado: "La empresa es demandada por un cliente y sus abogados estiman que es probable que deba pagar una indemnización de 15.000 €, aunque el importe final no es del todo seguro. ¿Cuál es el asiento correcto para dotar la provisión?",
    opciones: {
      A: { html: tabla([{ cuenta: "(6952) Dotación a la provisión para otras responsabilidades", debe: 15000 }, { cuenta: "(5420) Provisión a corto plazo para otras responsabilidades", haber: 15000 }]) },
      B: { html: tabla([{ cuenta: "(5420) Provisión a corto plazo para otras responsabilidades", debe: 15000 }, { cuenta: "(6952) Dotación a la provisión para otras responsabilidades", haber: 15000 }]) },
      C: { html: tabla([{ cuenta: "(6952) Dotación a la provisión para otras responsabilidades", debe: 15000 }, { cuenta: "(572) Bancos", haber: 15000 }]) },
      D: { html: "No se registra nada porque el importe exacto todavía no es seguro (solo se menciona en la memoria)." },
    },
    correcta: "A",
    explicacion:
      "Cuando existe una obligación PROBABLE y se puede estimar razonablemente su importe (aunque no con total certeza), el PGC exige dotar una provisión, por el principio de prudencia. El gasto (6952) aumenta en el Debe, y la obligación con terceros (provisión, un pasivo) aumenta en el Haber. Si la obligación fuera solo 'posible' y no 'probable', se trataría como pasivo contingente y se informaría solo en la memoria, sin registrar asiento.",
    porQueNoLasOtras: {
      B: "Invierte el asiento: el gasto de dotación no puede ir al Haber ni la provisión (pasivo que nace) al Debe.",
      C: "Registra una salida de tesorería (Bancos) como si ya se hubiera pagado la indemnización, cuando en realidad todavía es solo una estimación de una obligación futura; no ha habido ningún pago.",
      D: "Confunde el tratamiento de una obligación PROBABLE y estimable (que exige provisión contable) con el de una obligación simplemente POSIBLE (pasivo contingente, que sí se limita a información en la memoria). El enunciado indica que es probable y estimable, por lo que corresponde dotar la provisión.",
    },
  },
  {
    id: "as016",
    modulo: "asientos",
    tema: "Pago de IVA",
    dificultad: "intermedio",
    enunciado: "Tras liquidar el IVA del trimestre, la empresa debe pagar a Hacienda 1.500 € mediante domiciliación bancaria. ¿Cuál es el asiento correcto del pago?",
    opciones: {
      A: { html: tabla([{ cuenta: "(4750) H.P. acreedora por IVA", debe: 1500 }, { cuenta: "(572) Bancos", haber: 1500 }]) },
      B: { html: tabla([{ cuenta: "(572) Bancos", debe: 1500 }, { cuenta: "(4750) H.P. acreedora por IVA", haber: 1500 }]) },
      C: { html: tabla([{ cuenta: "(477) H.P. IVA repercutido", debe: 1500 }, { cuenta: "(572) Bancos", haber: 1500 }]) },
      D: { html: tabla([{ cuenta: "(4750) H.P. acreedora por IVA", debe: 1500 }, { cuenta: "(475) H.P. acreedora por conceptos fiscales", haber: 1500 }]) },
    },
    correcta: "A",
    explicacion:
      "Tras la liquidación trimestral (ver ejercicio siguiente), la deuda neta con Hacienda por IVA queda reflejada en (4750) H.P. acreedora por IVA. El PAGO de esa deuda disminuye el pasivo (Debe) y disminuye el activo Bancos (Haber). Este asiento es distinto del de LIQUIDACIÓN del IVA (que compensa 477 contra 472).",
    porQueNoLasOtras: {
      B: "Invierte el asiento: pagar una deuda no aumenta Bancos (sería al revés, Bancos disminuye) ni disminuye la deuda en el Haber (disminuir un pasivo va al Debe).",
      C: "Usa directamente la cuenta (477) IVA repercutido en el momento del pago, saltándose el paso de la liquidación trimestral que determina la cuota neta a ingresar en (4750).",
      D: "Usa una cuenta genérica (475) en lugar de la específica (4750) para IVA, y plantea una cancelación entre dos cuentas de Hacienda sin que exista de hecho un pago real a través de Bancos, que es lo que describe el enunciado.",
    },
  },
  {
    id: "as017",
    modulo: "asientos",
    tema: "Liquidación del IVA",
    dificultad: "avanzado",
    enunciado: "Al cierre del trimestre, la empresa tiene acumulado en (477) H.P. IVA repercutido un saldo de 6.300 € y en (472) H.P. IVA soportado un saldo de 4.800 €. ¿Cuál es el asiento correcto para liquidar el IVA del periodo?",
    opciones: {
      A: { html: tabla([{ cuenta: "(477) H.P. IVA repercutido", debe: 6300 }, { cuenta: "(472) H.P. IVA soportado", haber: 4800 }, { cuenta: "(4750) H.P. acreedora por IVA", haber: 1500 }]) },
      B: { html: tabla([{ cuenta: "(472) H.P. IVA soportado", debe: 4800 }, { cuenta: "(4750) H.P. acreedora por IVA", debe: 1500 }, { cuenta: "(477) H.P. IVA repercutido", haber: 6300 }]) },
      C: { html: tabla([{ cuenta: "(477) H.P. IVA repercutido", debe: 6300 }, { cuenta: "(4750) H.P. acreedora por IVA", haber: 6300 }]) },
      D: { html: tabla([{ cuenta: "(472) H.P. IVA soportado", debe: 1500 }, { cuenta: "(4750) H.P. acreedora por IVA", debe: 4800 }, { cuenta: "(477) H.P. IVA repercutido", haber: 6300 }]) },
    },
    correcta: "A",
    explicacion:
      "Liquidar el IVA significa cancelar ambas cuentas de IVA entre sí y dejar reflejada solo la cuota neta a pagar o a compensar. (477), que tenía saldo acreedor (Haber), se cancela llevándolo al Debe por su importe total (6.300 €). (472), que tenía saldo deudor (Debe), se cancela llevándolo al Haber (4.800 €). La diferencia (6.300 − 4.800 = 1.500 €) es la cuota a ingresar en Hacienda y queda en el Haber de (4750) H.P. acreedora por IVA.",
    porQueNoLasOtras: {
      B: "Intercambia por completo los lados: cancela el IVA repercutido (477) llevándolo al Haber (cuando debe ir al Debe para cancelarse) y el IVA soportado (472) al Debe (cuando debe ir al Haber). El resultado invierte el sentido real de la liquidación.",
      C: "Ignora por completo el IVA soportado (472) de 4.800 €, calculando la deuda como si fuera el importe total del IVA repercutido (6.300 €) en lugar de la diferencia neta entre repercutido y soportado.",
      D: "Mezcla los importes de forma incoherente: asigna 1.500 € (la cuota a pagar real) al IVA soportado y 4.800 € (el IVA soportado real) a la cuota con Hacienda, intercambiando los importes entre las cuentas en lugar de usar la cifra correcta en cada una.",
    },
  },
];

// Ejercicios de "construir el asiento completo": el usuario elige cuentas e importes.
export const asientosConstruir = [
  {
    id: "con001",
    tema: "Venta a crédito con IVA",
    situacion: "La empresa vende mercaderías por 12.000 € + IVA 21% a un cliente, a cobrar en 45 días. Construye el asiento completo.",
    cuentasDisponibles: [
      "(430) Clientes",
      "(400) Proveedores",
      "(700) Ventas de mercaderías",
      "(600) Compra de mercaderías",
      "(477) H.P. IVA repercutido",
      "(472) H.P. IVA soportado",
      "(572) Bancos",
    ],
    solucion: [
      { cuenta: "(430) Clientes", debe: 14520, haber: 0 },
      { cuenta: "(700) Ventas de mercaderías", debe: 0, haber: 12000 },
      { cuenta: "(477) H.P. IVA repercutido", debe: 0, haber: 2520 },
    ],
  },
  {
    id: "con002",
    tema: "Compra de mobiliario a crédito",
    situacion: "La empresa compra mobiliario de oficina por 6.000 € + IVA 21%, a pagar a 30 días a un proveedor de inmovilizado. Construye el asiento completo.",
    cuentasDisponibles: [
      "(216) Mobiliario",
      "(600) Compra de mercaderías",
      "(472) H.P. IVA soportado",
      "(477) H.P. IVA repercutido",
      "(523) Proveedores de inmovilizado a c/p",
      "(400) Proveedores",
      "(572) Bancos",
    ],
    solucion: [
      { cuenta: "(216) Mobiliario", debe: 6000, haber: 0 },
      { cuenta: "(472) H.P. IVA soportado", debe: 1260, haber: 0 },
      { cuenta: "(523) Proveedores de inmovilizado a c/p", debe: 0, haber: 7260 },
    ],
  },
  {
    id: "con003",
    tema: "Cobro parcial de un cliente",
    situacion: "Un cliente que debía 10.000 € paga 6.000 € mediante transferencia bancaria, quedando pendiente el resto. Construye el asiento del cobro.",
    cuentasDisponibles: ["(572) Bancos", "(430) Clientes", "(400) Proveedores", "(700) Ventas de mercaderías", "(570) Caja"],
    solucion: [
      { cuenta: "(572) Bancos", debe: 6000, haber: 0 },
      { cuenta: "(430) Clientes", debe: 0, haber: 6000 },
    ],
  },
  {
    id: "con004",
    tema: "Dotación de amortización de un elemento de transporte",
    situacion: "Al cierre del ejercicio, la amortización anual de un vehículo de reparto asciende a 3.500 €. Construye el asiento de dotación.",
    cuentasDisponibles: [
      "(681) Amortización del inmovilizado material",
      "(218) Elementos de transporte",
      "(2818) Amortización acumulada de elementos de transporte",
      "(690) Pérdidas por deterioro del inmovilizado material",
    ],
    solucion: [
      { cuenta: "(681) Amortización del inmovilizado material", debe: 3500, haber: 0 },
      { cuenta: "(2818) Amortización acumulada de elementos de transporte", debe: 0, haber: 3500 },
    ],
  },
  {
    id: "con005",
    tema: "Pago de nóminas netas pendientes",
    situacion: "La empresa paga a sus empleados, mediante transferencia bancaria, 16.300 € correspondientes a las nóminas netas del mes anterior, ya registradas como pendientes de pago. Construye el asiento del pago.",
    cuentasDisponibles: [
      "(465) Remuneraciones pendientes de pago",
      "(640) Sueldos y salarios",
      "(572) Bancos",
      "(476) Organismos de la Seguridad Social, acreedores",
    ],
    solucion: [
      { cuenta: "(465) Remuneraciones pendientes de pago", debe: 16300, haber: 0 },
      { cuenta: "(572) Bancos", debe: 0, haber: 16300 },
    ],
  },
  {
    id: "con006",
    tema: "Devolución de una venta a crédito",
    situacion: "Un cliente devuelve mercaderías defectuosas correspondientes a una venta a crédito anterior, por un importe de 3.000 € + IVA 21% (3.630 € en total), que se abonan contra su cuenta pendiente de cobro. Construye el asiento de la devolución.",
    cuentasDisponibles: [
      "(708) Devoluciones de ventas y operaciones similares",
      "(700) Ventas de mercaderías",
      "(477) H.P. IVA repercutido",
      "(430) Clientes",
      "(600) Compra de mercaderías",
    ],
    solucion: [
      { cuenta: "(708) Devoluciones de ventas y operaciones similares", debe: 3000, haber: 0 },
      { cuenta: "(477) H.P. IVA repercutido", debe: 630, haber: 0 },
      { cuenta: "(430) Clientes", debe: 0, haber: 3630 },
    ],
  },
  {
    id: "con007",
    tema: "Deterioro de existencias obsoletas",
    situacion: "Al cierre del ejercicio, la empresa detecta que parte de sus existencias de mercaderías, con un coste de 9.000 €, han quedado obsoletas: su valor de mercado estimado es de solo 2.000 €. Construye el asiento para dotar el deterioro por la pérdida de valor.",
    cuentasDisponibles: [
      "(693) Pérdidas por deterioro de existencias",
      "(390) Deterioro de valor de las mercaderías",
      "(600) Compra de mercaderías",
      "(300) Mercaderías",
    ],
    solucion: [
      { cuenta: "(693) Pérdidas por deterioro de existencias", debe: 7000, haber: 0 },
      { cuenta: "(390) Deterioro de valor de las mercaderías", debe: 0, haber: 7000 },
    ],
  },
];
