// Ejercicios adicionales de asientos contables (PGC español). Debe = Haber siempre.
// Continúa la numeración de data/asientos.js (as001-as017) a partir de as018.

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

export const asientosQuizExtra = [
  {
    id: "as018",
    modulo: "asientos",
    tema: "Descuento por pronto pago concedido",
    dificultad: "intermedio",
    enunciado:
      "Un cliente debía 5.000 € por una venta anterior. Paga antes del plazo acordado y la empresa le concede un descuento por pronto pago de 100 €, cobrando el resto (4.900 €) por banco. ¿Cuál es el asiento correcto?",
    opciones: {
      A: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 4900 },
          { cuenta: "(665) Descuentos sobre ventas por pronto pago", debe: 100 },
          { cuenta: "(430) Clientes", haber: 5000 },
        ]),
      },
      B: {
        html: tabla([
          { cuenta: "(430) Clientes", debe: 5000 },
          { cuenta: "(572) Bancos", haber: 4900 },
          { cuenta: "(665) Descuentos sobre ventas por pronto pago", haber: 100 },
        ]),
      },
      C: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 5000 },
          { cuenta: "(430) Clientes", haber: 5000 },
        ]),
      },
      D: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 4900 },
          { cuenta: "(708) Devoluciones de ventas de mercaderías", debe: 100 },
          { cuenta: "(430) Clientes", haber: 5000 },
        ]),
      },
    },
    correcta: "A",
    explicacion:
      "El cobro real por banco disminuye el derecho de cobro: (572) Bancos aumenta en el Debe por lo efectivamente cobrado (4.900 €). El descuento concedido por pronto pago es un gasto financiero (no comercial, porque la mercancía no se devuelve ni se vendió más baratо por su naturaleza), y se registra en el Debe de (665). La cancelación total del derecho de cobro se anota en el Haber de (430) Clientes por el importe original (5.000 €).",
    porQueNoLasOtras: {
      B: "Invierte todos los signos: el cobro en Bancos no puede ir al Haber (disminuiría el activo cuando en realidad aumenta) y la cancelación de Clientes no puede ir al Debe (aumentaría un derecho de cobro que en realidad se está liquidando).",
      C: "Ignora por completo el descuento concedido: da por cobrados los 5.000 € íntegros en Bancos, cuando el enunciado indica que solo se cobran 4.900 € y los 100 € restantes son un gasto financiero que debe reconocerse.",
      D: "Usa la cuenta (708) Devoluciones de ventas, propia de una devolución física de mercadería, cuando en realidad no hay devolución alguna: se trata de un descuento financiero por pago anticipado, que corresponde a la cuenta (665).",
    },
  },
  {
    id: "as019",
    modulo: "asientos",
    tema: "Descuento por pronto pago obtenido",
    dificultad: "intermedio",
    enunciado:
      "La empresa debía 3.000 € a un proveedor. Paga antes del vencimiento acordado y obtiene un descuento por pronto pago de 90 €, abonando el resto (2.910 €) por banco. ¿Cuál es el asiento correcto?",
    opciones: {
      A: {
        html: tabla([
          { cuenta: "(400) Proveedores", debe: 3000 },
          { cuenta: "(572) Bancos", haber: 2910 },
          { cuenta: "(765) Descuentos sobre compras por pronto pago obtenidos", haber: 90 },
        ]),
      },
      B: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 2910 },
          { cuenta: "(765) Descuentos sobre compras por pronto pago obtenidos", debe: 90 },
          { cuenta: "(400) Proveedores", haber: 3000 },
        ]),
      },
      C: {
        html: tabla([
          { cuenta: "(400) Proveedores", debe: 3000 },
          { cuenta: "(572) Bancos", haber: 2910 },
          { cuenta: "(665) Descuentos sobre ventas por pronto pago", haber: 90 },
        ]),
      },
      D: {
        html: tabla([
          { cuenta: "(400) Proveedores", debe: 3000 },
          { cuenta: "(572) Bancos", haber: 3000 },
        ]),
      },
    },
    correcta: "A",
    explicacion:
      "El pago cancela por completo la deuda con el proveedor: (400) Proveedores disminuye un pasivo y se registra en el Debe por el importe total (3.000 €). El pago real por banco disminuye el activo Bancos en el Haber, pero solo por lo realmente pagado (2.910 €). La diferencia (90 €) es un ingreso financiero por el descuento obtenido y se registra en el Haber de (765).",
    porQueNoLasOtras: {
      B: "Invierte todos los signos: Bancos no puede ir al Debe en un pago (disminuye el activo, debe ir al Haber) y la cancelación de Proveedores no puede ir al Haber (debe ir al Debe para disminuir el pasivo).",
      C: "Usa la cuenta (665) Descuentos sobre ventas por pronto pago, que es un GASTO financiero propio de descuentos concedidos a CLIENTES. Al tratarse de un descuento OBTENIDO de un proveedor, corresponde un INGRESO financiero en (765), no un gasto en (665).",
      D: "Ignora el descuento obtenido: paga los 3.000 € íntegros desde Bancos sin reconocer el ingreso financiero de 90 €, lo que infravalora el resultado financiero del periodo y no refleja que realmente solo salieron 2.910 € del banco.",
    },
  },
  {
    id: "as020",
    modulo: "asientos",
    tema: "Devolución de mercaderías a un proveedor",
    dificultad: "básico",
    enunciado:
      "La empresa había comprado mercaderías a crédito y ahora devuelve parte de ellas al proveedor por defectos de calidad, por una base de 1.000 € + IVA 21% (210 €), reduciéndose la deuda pendiente en 1.210 €. ¿Cuál es el asiento correcto de la devolución?",
    opciones: {
      A: {
        html: tabla([
          { cuenta: "(400) Proveedores", debe: 1210 },
          { cuenta: "(608) Devoluciones de compras de mercaderías", haber: 1000 },
          { cuenta: "(472) H.P. IVA soportado", haber: 210 },
        ]),
      },
      B: {
        html: tabla([
          { cuenta: "(608) Devoluciones de compras de mercaderías", debe: 1000 },
          { cuenta: "(472) H.P. IVA soportado", debe: 210 },
          { cuenta: "(400) Proveedores", haber: 1210 },
        ]),
      },
      C: {
        html: tabla([
          { cuenta: "(400) Proveedores", debe: 1000 },
          { cuenta: "(608) Devoluciones de compras de mercaderías", haber: 1000 },
        ]),
      },
      D: {
        html: tabla([
          { cuenta: "(400) Proveedores", debe: 1210 },
          { cuenta: "(708) Devoluciones de ventas de mercaderías", haber: 1000 },
          { cuenta: "(472) H.P. IVA soportado", haber: 210 },
        ]),
      },
    },
    correcta: "A",
    explicacion:
      "Al devolver mercadería, la deuda con el proveedor disminuye: (400) Proveedores disminuye un pasivo y se registra en el Debe por el importe total devuelto con IVA (1.210 €). (608) Devoluciones de compras es una cuenta compensadora del gasto de compra y aumenta en el Haber (resta al gasto) por la base (1.000 €). El IVA soportado inicialmente deducido también se revierte, disminuyendo en el Haber de (472) por 210 €.",
    porQueNoLasOtras: {
      B: "Invierte todos los signos: la disminución de la deuda con el proveedor no puede ir al Haber (aumentaría la deuda) y la reversión de la compra y del IVA no pueden ir al Debe en una devolución.",
      C: "Omite por completo el ajuste del IVA soportado, reduciendo la deuda con el proveedor solo por la base (1.000 €) en lugar de por el importe total con IVA (1.210 €), lo que deja el asiento descuadrado con la realidad: Hacienda ya no permite deducir el IVA de la parte devuelta.",
      D: "Usa la cuenta (708) Devoluciones de ventas, que corresponde a devoluciones hechas por CLIENTES sobre VENTAS. Al ser una devolución que la propia empresa hace a un proveedor sobre una COMPRA, la cuenta correcta es (608) Devoluciones de compras.",
    },
  },
  {
    id: "as021",
    modulo: "asientos",
    tema: "Devolución de mercaderías de un cliente",
    dificultad: "básico",
    enunciado:
      "Un cliente devuelve parte de la mercadería que había comprado a crédito, por no ajustarse a lo pedido. La base de la devolución es 500 € + IVA 21% (105 €), reduciéndose su deuda pendiente en 605 €. ¿Cuál es el asiento correcto?",
    opciones: {
      A: {
        html: tabla([
          { cuenta: "(708) Devoluciones de ventas de mercaderías", debe: 500 },
          { cuenta: "(477) H.P. IVA repercutido", debe: 105 },
          { cuenta: "(430) Clientes", haber: 605 },
        ]),
      },
      B: {
        html: tabla([
          { cuenta: "(430) Clientes", debe: 605 },
          { cuenta: "(708) Devoluciones de ventas de mercaderías", haber: 500 },
          { cuenta: "(477) H.P. IVA repercutido", haber: 105 },
        ]),
      },
      C: {
        html: tabla([
          { cuenta: "(708) Devoluciones de ventas de mercaderías", debe: 500 },
          { cuenta: "(430) Clientes", haber: 500 },
        ]),
      },
      D: {
        html: tabla([
          { cuenta: "(608) Devoluciones de compras de mercaderías", debe: 500 },
          { cuenta: "(477) H.P. IVA repercutido", debe: 105 },
          { cuenta: "(430) Clientes", haber: 605 },
        ]),
      },
    },
    correcta: "A",
    explicacion:
      "La devolución de un cliente reduce el ingreso previamente reconocido: (708) Devoluciones de ventas es una cuenta compensadora del ingreso y aumenta en el Debe (resta a las ventas) por la base (500 €). El IVA repercutido que se había cargado al cliente también se revierte, disminuyendo en el Debe de (477) por 105 €. El derecho de cobro sobre el cliente disminuye en el Haber de (430) por el total (605 €).",
    porQueNoLasOtras: {
      B: "Invierte todos los signos: la reversión del ingreso y del IVA repercutido no pueden ir al Haber, y la disminución del derecho de cobro sobre el cliente no puede ir al Debe.",
      C: "Omite el ajuste del IVA repercutido, reduciendo el derecho de cobro del cliente solo por la base (500 €) en lugar de por el importe total con IVA (605 €), cuando la empresa ya no puede mantener como deuda con Hacienda el IVA de la parte devuelta.",
      D: "Usa la cuenta (608) Devoluciones de compras, que corresponde a devoluciones que la EMPRESA hace a sus PROVEEDORES sobre compras. Al ser una devolución recibida de un CLIENTE sobre una VENTA, la cuenta correcta es (708) Devoluciones de ventas.",
    },
  },
  {
    id: "as022",
    modulo: "asientos",
    tema: "Anticipo recibido de un cliente",
    dificultad: "intermedio",
    enunciado:
      "Un cliente paga por adelantado 3.000 € mediante transferencia bancaria, a cuenta de un pedido de mercaderías que la empresa le entregará el mes siguiente. ¿Cuál es el asiento correcto en el momento del cobro del anticipo?",
    opciones: {
      A: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 3000 },
          { cuenta: "(438) Anticipos de clientes", haber: 3000 },
        ]),
      },
      B: {
        html: tabla([
          { cuenta: "(438) Anticipos de clientes", debe: 3000 },
          { cuenta: "(572) Bancos", haber: 3000 },
        ]),
      },
      C: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 3000 },
          { cuenta: "(700) Ventas de mercaderías", haber: 3000 },
        ]),
      },
      D: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 3000 },
          { cuenta: "(430) Clientes", haber: 3000 },
        ]),
      },
    },
    correcta: "A",
    explicacion:
      "El cobro aumenta el activo Bancos, que se registra en el Debe (3.000 €). Como la mercadería todavía no se ha entregado, no existe todavía un ingreso ni una venta: nace una obligación de entregar el bien o devolver el dinero, que es un pasivo y se registra en el Haber de (438) Anticipos de clientes.",
    porQueNoLasOtras: {
      B: "Invierte el asiento: el cobro en Bancos no puede ir al Haber (disminuiría el activo cuando en realidad aumenta) y el anticipo recibido, que es un pasivo que nace, no puede ir al Debe.",
      C: "Reconoce el ingreso por ventas (700) antes de haber entregado la mercadería, lo que viola el principio de devengo: el ingreso solo debe reconocerse cuando se transfieren los riesgos y beneficios del bien, no cuando se recibe el dinero por adelantado.",
      D: "Usa (430) Clientes, una cuenta de ACTIVO que representa un derecho de cobro pendiente, cuando en realidad la empresa no tiene nada pendiente de cobrar: es ella quien debe entregar el bien o devolver el dinero. La cuenta correcta es la de pasivo (438) Anticipos de clientes.",
    },
  },
  {
    id: "as023",
    modulo: "asientos",
    tema: "Anticipo pagado a un proveedor",
    dificultad: "intermedio",
    enunciado:
      "La empresa paga por adelantado 2.000 € mediante transferencia bancaria a un proveedor, a cuenta de un pedido de mercaderías que recibirá el mes siguiente. ¿Cuál es el asiento correcto en el momento del pago del anticipo?",
    opciones: {
      A: {
        html: tabla([
          { cuenta: "(407) Anticipos a proveedores", debe: 2000 },
          { cuenta: "(572) Bancos", haber: 2000 },
        ]),
      },
      B: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 2000 },
          { cuenta: "(407) Anticipos a proveedores", haber: 2000 },
        ]),
      },
      C: {
        html: tabla([
          { cuenta: "(600) Compra de mercaderías", debe: 2000 },
          { cuenta: "(572) Bancos", haber: 2000 },
        ]),
      },
      D: {
        html: tabla([
          { cuenta: "(400) Proveedores", debe: 2000 },
          { cuenta: "(572) Bancos", haber: 2000 },
        ]),
      },
    },
    correcta: "A",
    explicacion:
      "El pago del anticipo no es todavía una compra, porque la mercadería no se ha recibido: nace un derecho a recibir el bien (o a que te devuelvan el dinero), que es un activo y se registra en el Debe de (407) Anticipos a proveedores. El pago disminuye el activo Bancos, en el Haber, por el mismo importe (2.000 €).",
    porQueNoLasOtras: {
      B: "Invierte el asiento: el nacimiento de un derecho (activo) no puede ir al Haber, y el pago desde Bancos, que disminuye un activo, no puede ir al Debe.",
      C: "Reconoce el gasto de compra (600) antes de haber recibido la mercadería, lo que viola el principio de devengo: el gasto se reconoce cuando se recibe el bien, no cuando se adelanta el pago.",
      D: "Usa (400) Proveedores, una cuenta de PASIVO para deudas ya existentes por compras, cuando en este caso no existe ninguna deuda: es la empresa quien tiene un derecho de cobro/entrega frente al proveedor. La cuenta correcta es la de activo (407) Anticipos a proveedores.",
    },
  },
  {
    id: "as024",
    modulo: "asientos",
    tema: "Venta de inmovilizado con pérdida",
    dificultad: "avanzado",
    enunciado:
      "La empresa vende una máquina cuyo coste de adquisición fue 20.000 € y que tiene una amortización acumulada de 14.000 €. Se vende por 4.000 €, cobrados al contado por banco. ¿Cuál es el asiento correcto de la venta?",
    opciones: {
      A: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 4000 },
          { cuenta: "(2813) Amortización acumulada de maquinaria", debe: 14000 },
          { cuenta: "(671) Pérdidas procedentes del inmovilizado material", debe: 2000 },
          { cuenta: "(213) Maquinaria", haber: 20000 },
        ]),
      },
      B: {
        html: tabla([
          { cuenta: "(213) Maquinaria", debe: 20000 },
          { cuenta: "(572) Bancos", haber: 4000 },
          { cuenta: "(2813) Amortización acumulada de maquinaria", haber: 14000 },
          { cuenta: "(671) Pérdidas procedentes del inmovilizado material", haber: 2000 },
        ]),
      },
      C: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 6000 },
          { cuenta: "(2813) Amortización acumulada de maquinaria", debe: 14000 },
          { cuenta: "(213) Maquinaria", haber: 20000 },
        ]),
      },
      D: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 4000 },
          { cuenta: "(2813) Amortización acumulada de maquinaria", debe: 14000 },
          { cuenta: "(670) Pérdidas procedentes del inmovilizado intangible", debe: 2000 },
          { cuenta: "(213) Maquinaria", haber: 20000 },
        ]),
      },
    },
    correcta: "A",
    explicacion:
      "Para dar de baja un elemento de inmovilizado hay que cancelar su coste histórico, (213) Maquinaria, en el Haber por el valor bruto (20.000 €). La amortización acumulada que tenía, (2813), también se da de baja y se registra en el Debe (14.000 €), ya que es una cuenta compensadora de activo. El cobro real aumenta Bancos en el Debe (4.000 €). El valor contable neto era 20.000 − 14.000 = 6.000 €; al venderse por solo 4.000 €, se produce una pérdida de 2.000 € que se registra en el Debe de (671) para que el asiento cuadre.",
    porQueNoLasOtras: {
      B: "Invierte completamente el asiento: la baja del coste histórico del activo no puede ir al Debe (debe ir al Haber) y el cobro, la baja de la amortización y la pérdida no pueden ir al Haber.",
      C: "Registra un cobro en Bancos de 6.000 € en lugar de los 4.000 € realmente cobrados según el enunciado, evitando así reconocer la pérdida de 2.000 €. Esto no refleja la realidad del cobro ni reconoce la pérdida patrimonial sufrida en la operación.",
      D: "Usa la cuenta (670) Pérdidas procedentes del inmovilizado INTANGIBLE para una pérdida que proviene de la venta de una máquina, que es inmovilizado MATERIAL. La cuenta correcta para este tipo de pérdida es (671).",
    },
  },
  {
    id: "as025",
    modulo: "asientos",
    tema: "Ampliación de capital social",
    dificultad: "intermedio",
    enunciado:
      "Los socios de la empresa acuerdan ampliar el capital social en 50.000 €, desembolsando la totalidad mediante transferencia bancaria. ¿Cuál es el asiento correcto?",
    opciones: {
      A: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 50000 },
          { cuenta: "(100) Capital social", haber: 50000 },
        ]),
      },
      B: {
        html: tabla([
          { cuenta: "(100) Capital social", debe: 50000 },
          { cuenta: "(572) Bancos", haber: 50000 },
        ]),
      },
      C: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 50000 },
          { cuenta: "(170) Deudas a largo plazo por préstamos", haber: 50000 },
        ]),
      },
      D: {
        html: tabla([
          { cuenta: "(572) Bancos", debe: 50000 },
          { cuenta: "(129) Resultado del ejercicio", haber: 50000 },
        ]),
      },
    },
    correcta: "A",
    explicacion:
      "El desembolso de los socios aumenta el activo Bancos, que se registra en el Debe (50.000 €). Esta aportación no genera ninguna deuda ni ningún ingreso: aumenta directamente el patrimonio neto de la empresa a través de la cuenta (100) Capital social, en el Haber.",
    porQueNoLasOtras: {
      B: "Invierte el asiento: la entrada de dinero en Bancos no puede ir al Haber (disminuiría el activo) y el aumento de capital social, que incrementa el patrimonio neto, no puede ir al Debe.",
      C: "Confunde una aportación de los SOCIOS al patrimonio neto (100) con una deuda frente a un tercero (170). A diferencia de un préstamo, el capital social no genera obligación de devolución ni intereses.",
      D: "Confunde la aportación de capital de los socios con un resultado (beneficio) generado por la actividad de la empresa (129). La ampliación de capital no es un ingreso ni genera beneficio; es una aportación directa al patrimonio neto a través de (100).",
    },
  },
  {
    id: "as026",
    modulo: "asientos",
    tema: "Reparto de dividendos con cargo a reservas",
    dificultad: "avanzado",
    enunciado:
      "La junta de socios aprueba repartir un dividendo de 8.000 € con cargo a las reservas voluntarias de la empresa, quedando pendiente de pago a los socios. ¿Cuál es el asiento correcto en el momento del acuerdo?",
    opciones: {
      A: {
        html: tabla([
          { cuenta: "(113) Reservas voluntarias", debe: 8000 },
          { cuenta: "(526) Dividendo activo a pagar", haber: 8000 },
        ]),
      },
      B: {
        html: tabla([
          { cuenta: "(526) Dividendo activo a pagar", debe: 8000 },
          { cuenta: "(113) Reservas voluntarias", haber: 8000 },
        ]),
      },
      C: {
        html: tabla([
          { cuenta: "(129) Resultado del ejercicio", debe: 8000 },
          { cuenta: "(526) Dividendo activo a pagar", haber: 8000 },
        ]),
      },
      D: {
        html: tabla([
          { cuenta: "(113) Reservas voluntarias", debe: 8000 },
          { cuenta: "(572) Bancos", haber: 8000 },
        ]),
      },
    },
    correcta: "A",
    explicacion:
      "Al acordarse el reparto con cargo a reservas, estas disminuyen: (113) Reservas voluntarias es una cuenta de patrimonio neto que, al disminuir, se registra en el Debe (8.000 €). Como el pago a los socios todavía no se ha realizado, nace una deuda a corto plazo con ellos, que se registra en el Haber de (526) Dividendo activo a pagar.",
    porQueNoLasOtras: {
      B: "Invierte el asiento: la disminución de reservas (patrimonio neto) no puede ir al Haber, y el nacimiento de la deuda con los socios no puede ir al Debe.",
      C: "Usa (129) Resultado del ejercicio en lugar de (113) Reservas voluntarias. El enunciado indica expresamente que el dividendo se reparte con cargo a RESERVAS ya constituidas de ejercicios anteriores, no con cargo al resultado del ejercicio en curso (lo que correspondería, en su caso, a un dividendo a cuenta registrado en 557).",
      D: "Da por pagado el dividendo directamente desde Bancos, cuando el enunciado indica expresamente que el pago a los socios queda PENDIENTE. Mientras no se pague, la contrapartida debe ser una deuda, (526) Dividendo activo a pagar, no una salida de tesorería.",
    },
  },
  {
    id: "as027",
    modulo: "asientos",
    tema: "Retención de IRPF a un profesional",
    dificultad: "avanzado",
    enunciado:
      "La empresa recibe la factura de un profesional autónomo por servicios prestados, por una base de 1.000 € + IVA 21% (210 €), con una retención de IRPF del 15% sobre la base (150 €). El importe queda pendiente de pago. ¿Cuál es el asiento correcto de registro de la factura?",
    opciones: {
      A: {
        html: tabla([
          { cuenta: "(623) Servicios de profesionales independientes", debe: 1000 },
          { cuenta: "(472) H.P. IVA soportado", debe: 210 },
          { cuenta: "(4751) H.P. acreedora por retenciones practicadas", haber: 150 },
          { cuenta: "(410) Acreedores por prestación de servicios", haber: 1060 },
        ]),
      },
      B: {
        html: tabla([
          { cuenta: "(4751) H.P. acreedora por retenciones practicadas", debe: 150 },
          { cuenta: "(410) Acreedores por prestación de servicios", debe: 1060 },
          { cuenta: "(623) Servicios de profesionales independientes", haber: 1000 },
          { cuenta: "(472) H.P. IVA soportado", haber: 210 },
        ]),
      },
      C: {
        html: tabla([
          { cuenta: "(623) Servicios de profesionales independientes", debe: 1000 },
          { cuenta: "(472) H.P. IVA soportado", debe: 210 },
          { cuenta: "(410) Acreedores por prestación de servicios", haber: 1210 },
        ]),
      },
      D: {
        html: tabla([
          { cuenta: "(623) Servicios de profesionales independientes", debe: 1000 },
          { cuenta: "(472) H.P. IVA soportado", debe: 150 },
          { cuenta: "(4751) H.P. acreedora por retenciones practicadas", haber: 210 },
          { cuenta: "(410) Acreedores por prestación de servicios", haber: 940 },
        ]),
      },
    },
    correcta: "A",
    explicacion:
      "El gasto por el servicio recibido aumenta en el Debe de (623) por la base (1.000 €), y el IVA soportado deducible aumenta en el Debe de (472) por el 21% (210 €). De lo que la empresa debería pagar al profesional, una parte (150 €, el 15% de la base) no se le entrega a él sino que se retiene y se convierte en una deuda con Hacienda, en el Haber de (4751). El resto (1.000 + 210 − 150 = 1.060 €) es la deuda pendiente con el profesional, en el Haber de (410).",
    porQueNoLasOtras: {
      B: "Invierte todos los signos: el gasto y el IVA soportado no pueden ir al Haber, y las deudas con Hacienda y con el profesional no pueden ir al Debe en el momento de registrar la factura.",
      C: "Omite por completo la retención de IRPF: registra la deuda con el profesional por el importe íntegro con IVA (1.210 €) sin descontar los 150 € retenidos, lo que supondría no reconocer la obligación de ingresar esa retención en Hacienda.",
      D: "Intercambia los importes del IVA soportado (debería ser 210 €) y de la retención de IRPF (debería ser 150 €) entre las cuentas (472) y (4751), un error típico de confundir el porcentaje de IVA con el porcentaje de retención. El resultado está internamente cuadrado, pero las cifras asignadas a cada cuenta son incorrectas.",
    },
  },
];
