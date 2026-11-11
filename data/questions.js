// Banco de preguntas tipo test para práctica de entrevista técnica junior de Audit & Assurance.
// Terminología basada en el Plan General de Contabilidad (PGC) español (RD 1514/2007 y modificaciones).
// Cada pregunta indica la cuenta/número del PGC cuando es relevante. Se menciona NIIF solo para contraste.

export const questions = [
  {
    id: "q001",
    modulo: "test",
    tema: "Activo corriente y no corriente",
    dificultad: "básico",
    enunciado:
      "¿Cuál de las siguientes partidas se clasifica como activo corriente en el balance según el PGC?",
    opciones: {
      A: "Maquinaria industrial (cuenta 213)",
      B: "Existencias de mercaderías (cuenta 300)",
      C: "Aplicaciones informáticas (cuenta 206)",
      D: "Inversiones en terrenos (cuenta 210)"
    },
    correcta: "B",
    explicacion:
      "El activo corriente incluye los elementos que la empresa espera realizar, vender o consumir en su ciclo normal de explotación (habitualmente 12 meses), como ocurre con las existencias. El resto de opciones corresponden a inmovilizado, es decir, a activo no corriente, destinado a permanecer en la empresa de forma duradera.",
    porQueNoLasOtras: {
      A: "Es inmovilizado material, un elemento productivo de uso duradero, por lo que es activo no corriente.",
      C: "Es inmovilizado intangible (software), destinado a usarse durante varios ejercicios, no a venderse en el ciclo de explotación.",
      D: "Es inmovilizado, una inversión a largo plazo, no un elemento destinado a realizarse a corto plazo."
    }
  },
  {
    id: "q002",
    modulo: "test",
    tema: "Activo corriente y no corriente",
    dificultad: "intermedio",
    enunciado:
      "Respecto a la clasificación del activo en el balance, ¿qué criterio determina si una partida es corriente o no corriente según el PGC?",
    opciones: {
      A: "El importe de la partida, siendo corriente solo si supera cierto umbral económico",
      B: "Que se espere realizar, vender o consumir dentro del ciclo normal de explotación o en los 12 meses siguientes a la fecha de cierre",
      C: "Que la partida genere ingresos financieros",
      D: "Que la partida esté valorada a valor razonable"
    },
    correcta: "B",
    explicacion:
      "El criterio de clasificación corriente/no corriente se basa en la expectativa de realización temporal: si se espera convertir en efectivo, vender o consumir dentro del ciclo normal de explotación o en 12 meses, es corriente; en caso contrario, es no corriente. Es independiente del importe o del criterio de valoración aplicado.",
    porQueNoLasOtras: {
      A: "El PGC no fija ningún umbral de importe para decidir la clasificación corriente/no corriente.",
      C: "La naturaleza financiera de los ingresos que genera un activo no determina su clasificación temporal en el balance.",
      D: "El criterio de valoración (coste histórico, valor razonable, etc.) es una cuestión distinta e independiente de la clasificación temporal."
    }
  },
  {
    id: "q003",
    modulo: "test",
    tema: "Activo corriente y no corriente",
    dificultad: "avanzado",
    enunciado:
      "Una empresa tiene una inversión financiera a largo plazo (acciones de otra sociedad) y decide, antes del cierre del ejercicio, venderla en los próximos 3 meses porque necesita liquidez. ¿Cómo debe presentarse esa inversión en el balance de cierre?",
    opciones: {
      A: "Se mantiene como activo no corriente porque originalmente se adquirió con intención de permanencia",
      B: "Se reclasifica a corto plazo, dentro del activo corriente, porque a la fecha de cierre se espera su realización en menos de 12 meses",
      C: "Se da de baja del balance inmediatamente, aunque todavía no se haya vendido",
      D: "Se reclasifica como existencias, al tratarse de un activo destinado a la venta"
    },
    correcta: "B",
    explicacion:
      "La clasificación corriente/no corriente depende de la expectativa de realización vigente a la fecha de cierre, no de la intención con la que originalmente se adquirió el activo. Si antes del cierre ya existe la decisión firme de venderla en menos de 12 meses, procede reclasificarla a corto plazo.",
    porQueNoLasOtras: {
      A: "Mantener la clasificación original ignoraría que la expectativa de realización ha cambiado antes del cierre del ejercicio.",
      C: "El activo no se da de baja hasta que se produce la venta efectiva; mientras tanto sigue reconocido en el balance.",
      D: "Las inversiones financieras no se convierten en existencias salvo que la actividad habitual de la empresa sea la compraventa de valores."
    }
  },
  {
    id: "q004",
    modulo: "test",
    tema: "Pasivo corriente y no corriente",
    dificultad: "básico",
    enunciado: "¿Cuál de las siguientes es una característica del pasivo no corriente?",
    opciones: {
      A: "Incluye las deudas que vencen dentro de los 12 meses siguientes al cierre",
      B: "Incluye las deudas con vencimiento superior a 12 meses, como los préstamos a largo plazo",
      C: "Incluye únicamente el capital social",
      D: "Incluye los proveedores comerciales habituales"
    },
    correcta: "B",
    explicacion:
      "El pasivo no corriente agrupa las obligaciones cuyo vencimiento es superior a 12 meses desde la fecha de cierre, como los préstamos bancarios a largo plazo. El pasivo corriente, en cambio, recoge las deudas que vencen en el corto plazo.",
    porQueNoLasOtras: {
      A: "Esa descripción corresponde al pasivo corriente, no al no corriente.",
      C: "El capital social forma parte del patrimonio neto, no es una deuda ni pertenece al pasivo.",
      D: "Los proveedores comerciales habituales suponen una deuda a corto plazo y se clasifican como pasivo corriente."
    }
  },
  {
    id: "q005",
    modulo: "test",
    tema: "Pasivo corriente y no corriente",
    dificultad: "intermedio",
    enunciado:
      "Una empresa tiene un préstamo bancario a 3 años. A la fecha de cierre, la cuota de principal que vence dentro de los próximos 12 meses asciende a 20.000€, y el resto del principal (80.000€) vence después. ¿Cómo debe presentarse este préstamo en el balance?",
    opciones: {
      A: "Los 100.000€ como pasivo no corriente, por ser un préstamo a largo plazo en origen",
      B: "20.000€ como pasivo corriente y 80.000€ como pasivo no corriente",
      C: "Los 100.000€ como pasivo corriente",
      D: "80.000€ como pasivo corriente y 20.000€ como pasivo no corriente"
    },
    correcta: "B",
    explicacion:
      "Aunque el préstamo nació a largo plazo, cada cierre de ejercicio exige reclasificar la parte del principal que va a vencer dentro de los próximos 12 meses como pasivo corriente, dejando el resto como pasivo no corriente. Esta reclasificación periódica es habitual en deudas financieras a plazos.",
    porQueNoLasOtras: {
      A: "Mantener todo como no corriente ignora que una parte del principal vencerá dentro de los próximos 12 meses.",
      C: "Clasificar todo como corriente ignora que la mayor parte de la deuda vence después de 12 meses.",
      D: "Invierte los importes: confunde la parte que vence antes (20.000€) con la que vence después (80.000€)."
    }
  },
  {
    id: "q006",
    modulo: "test",
    tema: "Pasivo corriente y no corriente",
    dificultad: "avanzado",
    enunciado:
      "Una sociedad incumple, al cierre del ejercicio, una cláusula (covenant) de un préstamo a largo plazo que da derecho al banco a exigir el reembolso inmediato. Antes de la formulación de las cuentas anuales, el banco no ha renunciado a ese derecho. ¿Cómo debe clasificarse la deuda?",
    opciones: {
      A: "Como pasivo no corriente, porque el vencimiento contractual original es a largo plazo",
      B: "Como pasivo corriente en su totalidad, porque la entidad no tiene el derecho incondicional de diferir el pago más de 12 meses desde la fecha de cierre",
      C: "Se divide proporcionalmente entre pasivo corriente y no corriente según el tiempo transcurrido",
      D: "No se reclasifica porque es un hecho posterior al cierre que no afecta a las cuentas de ese ejercicio"
    },
    correcta: "B",
    explicacion:
      "Cuando a la fecha de cierre el acreedor tiene el derecho exigible de reclamar el pago inmediato por incumplimiento de una cláusula, y no se ha obtenido una dispensa (waiver) antes de la formulación de las cuentas, la totalidad de la deuda debe clasificarse como corriente, con independencia de su vencimiento contractual original.",
    porQueNoLasOtras: {
      A: "El vencimiento contractual original pierde relevancia cuando el acreedor adquiere el derecho a exigir el pago inmediato por el incumplimiento.",
      C: "No existe un prorrateo entre corriente y no corriente en este supuesto; se reclasifica la totalidad de la deuda.",
      D: "El incumplimiento del covenant se produjo antes o en la propia fecha de cierre, por lo que afecta directamente a la clasificación en el balance de ese ejercicio, no es un hecho posterior ajeno a él."
    }
  },
  {
    id: "q007",
    modulo: "test",
    tema: "Patrimonio neto",
    dificultad: "básico",
    enunciado: "¿Qué partida NO forma parte del patrimonio neto de una empresa?",
    opciones: {
      A: "Capital social",
      B: "Reservas",
      C: "Resultado del ejercicio",
      D: "Deudas a largo plazo con entidades de crédito"
    },
    correcta: "D",
    explicacion:
      "El patrimonio neto está formado por los fondos propios de la empresa: aportaciones de los socios (capital social), beneficios acumulados no distribuidos (reservas) y el resultado del propio ejercicio. Las deudas con entidades de crédito son una fuente de financiación ajena y se clasifican como pasivo, no como patrimonio neto.",
    porQueNoLasOtras: {
      A: "El capital social es la aportación de los socios a la sociedad y forma parte de los fondos propios (patrimonio neto).",
      B: "Las reservas son beneficios de ejercicios anteriores no repartidos, y forman parte del patrimonio neto.",
      C: "El resultado del ejercicio, positivo o negativo, se integra en el patrimonio neto hasta que se aplica (reparto o compensación)."
    }
  },
  {
    id: "q008",
    modulo: "test",
    tema: "Patrimonio neto",
    dificultad: "intermedio",
    enunciado:
      "Si el patrimonio neto de una sociedad de responsabilidad limitada se reduce por pérdidas hasta ser inferior a la mitad del capital social, ¿qué consecuencia prevé la normativa mercantil española?",
    opciones: {
      A: "Ninguna, es una situación habitual sin efectos legales relevantes",
      B: "Los administradores deben convocar la junta general para disolver la sociedad o adoptar medidas que restablezcan el equilibrio patrimonial (por ejemplo, aumento o reducción de capital)",
      C: "La empresa debe repartir dividendos para compensar la situación",
      D: "Se amplía automáticamente el capital social sin necesidad de acuerdo social"
    },
    correcta: "B",
    explicacion:
      "La Ley de Sociedades de Capital establece como causa legal de disolución que el patrimonio neto quede reducido por debajo de la mitad del capital social, salvo que se aumente o reduzca en la medida suficiente. Los administradores tienen la obligación de convocar junta en un plazo determinado para abordar la situación.",
    porQueNoLasOtras: {
      A: "Es una causa legal de disolución con obligaciones concretas para los administradores, no una situación sin consecuencias.",
      C: "Repartir dividendos en esa situación agravaría el desequilibrio patrimonial, en lugar de corregirlo.",
      D: "No existe ninguna ampliación de capital automática; cualquier operación de capital requiere un acuerdo social formal."
    }
  },
  {
    id: "q009",
    modulo: "test",
    tema: "Patrimonio neto",
    dificultad: "avanzado",
    enunciado:
      "Una sociedad registra una subvención de capital no reintegrable recibida de la Administración para financiar la compra de un activo. Antes de su imputación a resultados, ¿dónde se refleja contablemente ese importe?",
    opciones: {
      A: "Directamente como ingreso en la cuenta de pérdidas y ganancias del ejercicio en que se cobra",
      B: "Como ajustes por cambios de valor dentro del patrimonio neto",
      C: "Como subvenciones, donaciones y legados recibidos, dentro del patrimonio neto, imputándose a resultados a medida que se amortiza el activo financiado o se cumplen las condiciones asociadas",
      D: "Como un pasivo corriente hasta que se gasta el importe recibido"
    },
    correcta: "C",
    explicacion:
      "Según el PGC, las subvenciones de capital no reintegrables se reconocen inicialmente en una partida específica del patrimonio neto (grupo 13) y se van imputando a la cuenta de pérdidas y ganancias de forma correlacionada con la amortización del activo que financian o con el cumplimiento de las condiciones establecidas.",
    porQueNoLasOtras: {
      A: "Imputar todo el ingreso de golpe al cobrarla incumpliría el devengo, ya que la subvención se asocia a un activo que se consume a lo largo de varios ejercicios.",
      B: "Los ajustes por cambios de valor son una partida distinta de patrimonio neto, relacionada con determinados activos financieros, no con subvenciones de capital.",
      D: "No es un pasivo; el PGC le da un tratamiento específico y transitorio dentro del patrimonio neto, no de la deuda."
    }
  },
  {
    id: "q010",
    modulo: "test",
    tema: "Ingresos y gastos (criterio de devengo)",
    dificultad: "básico",
    enunciado: "Según el principio de devengo, los ingresos y gastos se imputan en función de...",
    opciones: {
      A: "El momento en que se cobra o se paga en efectivo",
      B: "La corriente real de bienes y servicios que representan, con independencia del momento en que se produce la corriente monetaria o financiera derivada de ellos",
      C: "El ejercicio en que se emite la factura, exclusivamente",
      D: "El criterio que resulte fiscalmente más ventajoso para la empresa"
    },
    correcta: "B",
    explicacion:
      "El devengo es un principio contable obligatorio que exige reconocer ingresos y gastos cuando se produce la corriente real de bienes y servicios (es decir, cuando económicamente ocurren), y no cuando se cobra o se paga. Es la base sobre la que se construye toda la contabilidad del PGC.",
    porQueNoLasOtras: {
      A: "Eso describe el criterio de caja, que el PGC no utiliza como criterio general de imputación.",
      C: "La fecha de la factura es un soporte documental, pero el devengo económico puede producirse en un momento distinto al de su emisión.",
      D: "La contabilidad financiera se rige por la imagen fiel y el devengo, no por la conveniencia fiscal de la empresa."
    }
  },
  {
    id: "q011",
    modulo: "test",
    tema: "Ingresos y gastos (criterio de devengo)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa presta un servicio de mantenimiento durante diciembre de 20X1, pero no emite la factura hasta enero de 20X2. ¿En qué ejercicio debe reconocer el ingreso?",
    opciones: {
      A: "En 20X2, cuando se emite la factura",
      B: "En 20X1, cuando se presta el servicio, con independencia de la fecha de facturación",
      C: "Se puede elegir el ejercicio que más convenga a la empresa",
      D: "No se reconoce ningún ingreso hasta que el cliente pague"
    },
    correcta: "B",
    explicacion:
      "El devengo exige reconocer el ingreso cuando se presta efectivamente el servicio, con independencia del momento en que se facture o se cobre. Como el servicio se prestó en diciembre de 20X1, el ingreso corresponde a ese ejercicio.",
    porQueNoLasOtras: {
      A: "Confunde el momento del devengo del ingreso (la prestación del servicio) con el de su facturación, que puede ser posterior.",
      C: "No existe libertad de elección; el devengo es un principio contable obligatorio, no una opción discrecional.",
      D: "Confunde devengo con cobro; el reconocimiento del ingreso no depende de que el cliente haya pagado."
    }
  },
  {
    id: "q012",
    modulo: "test",
    tema: "Ingresos y gastos (criterio de devengo)",
    dificultad: "avanzado",
    enunciado:
      "Una empresa de telecomunicaciones cobra por adelantado, el 1 de octubre de 20X1, una cuota anual de mantenimiento de 1.200€ que cubre el periodo de octubre de 20X1 a septiembre de 20X2. ¿Qué importe debe reconocer como ingreso en el ejercicio 20X1 (que cierra a 31 de diciembre)?",
    opciones: {
      A: "1.200€, el importe total cobrado",
      B: "0€, porque el servicio aún no ha terminado de prestarse en su totalidad",
      C: "300€, correspondientes a los 3 meses transcurridos (octubre, noviembre y diciembre), periodificando los 900€ restantes como ingreso anticipado",
      D: "600€, la mitad del importe total cobrado"
    },
    correcta: "C",
    explicacion:
      "La cuota cubre 12 meses (100€/mes). A 31 de diciembre de 20X1 han transcurrido 3 meses del periodo cubierto (octubre, noviembre y diciembre), por lo que solo 300€ corresponden al devengo de 20X1; los 900€ restantes deben periodificarse como ingreso anticipado (cuenta 485) hasta que se devenguen en 20X2.",
    porQueNoLasOtras: {
      A: "Imputar todo el cobro al ejercicio en que se recibe incumple el principio de devengo, ya que la mayor parte del servicio se presta en 20X2.",
      B: "Ignora que una parte del servicio (los meses de octubre a diciembre) sí se ha prestado durante 20X1 y debe reconocerse como ingreso.",
      D: "No corresponde a ningún criterio temporal correcto de reparto; es un prorrateo arbitrario que no refleja los meses realmente transcurridos."
    }
  },
  {
    id: "q013",
    modulo: "test",
    tema: "Balance de situación (estructura y lógica)",
    dificultad: "básico",
    enunciado: "¿Cuál es la ecuación fundamental que debe cumplir siempre el balance de situación?",
    opciones: {
      A: "Activo = Pasivo corriente",
      B: "Activo = Pasivo + Patrimonio Neto",
      C: "Activo corriente = Pasivo corriente",
      D: "Ingresos = Gastos"
    },
    correcta: "B",
    explicacion:
      "El balance de situación refleja en todo momento la identidad contable Activo = Pasivo + Patrimonio Neto: todo lo que la empresa posee (activo) está financiado, bien con recursos propios (patrimonio neto), bien con recursos ajenos (pasivo). Esta igualdad debe cumplirse siempre, cuadre a cuadre.",
    porQueNoLasOtras: {
      A: "Solo relaciona el activo con una parte del pasivo, ignorando el pasivo no corriente y el patrimonio neto.",
      C: "Esa igualdad no es una identidad contable obligatoria; de hecho, el fondo de maniobra (la diferencia entre ambas) puede ser positivo, negativo o nulo.",
      D: "Esa relación corresponde a la lógica de la cuenta de pérdidas y ganancias (cuando el resultado es cero), no a la del balance."
    }
  },
  {
    id: "q014",
    modulo: "test",
    tema: "Balance de situación (estructura y lógica)",
    dificultad: "intermedio",
    enunciado:
      "En el modelo de balance del PGC, las masas patrimoniales del activo se ordenan habitualmente de...",
    opciones: {
      A: "Mayor a menor liquidez, empezando por el efectivo y terminando por el activo no corriente",
      B: "Menor a mayor liquidez, empezando por el activo no corriente y terminando por el efectivo",
      C: "Alfabéticamente según el nombre de la cuenta",
      D: "Según el importe de cada partida, de mayor a menor"
    },
    correcta: "B",
    explicacion:
      "El balance del PGC ordena el activo de menor a mayor liquidez: primero el activo no corriente (inmovilizado, el menos líquido) y, dentro del activo corriente, de las existencias hacia el efectivo (el más líquido), que aparece en último lugar.",
    porQueNoLasOtras: {
      A: "Invierte el criterio real: el PGC ordena de menor a mayor liquidez, no al revés.",
      C: "El orden de presentación sigue un criterio económico de liquidez, no un criterio alfabético.",
      D: "El importe de cada partida no determina su posición en el modelo normalizado de balance."
    }
  },
  {
    id: "q015",
    modulo: "test",
    tema: "Balance de situación (estructura y lógica)",
    dificultad: "avanzado",
    enunciado:
      "Una empresa tiene activo no corriente de 500.000€, activo corriente de 200.000€, patrimonio neto de 300.000€ y pasivo no corriente de 250.000€. ¿Cuál es el importe del pasivo corriente?",
    opciones: {
      A: "150.000€",
      B: "450.000€",
      C: "50.000€",
      D: "700.000€"
    },
    correcta: "A",
    explicacion:
      "El activo total es 500.000€ + 200.000€ = 700.000€. Por la identidad del balance, Activo = Patrimonio Neto + Pasivo no corriente + Pasivo corriente, por lo que el pasivo corriente es 700.000€ − 300.000€ − 250.000€ = 150.000€.",
    porQueNoLasOtras: {
      B: "Resulta de sumar el patrimonio neto y el pasivo no corriente en lugar de restarlos del activo total.",
      C: "Es el resultado de un error aritmético al calcular la diferencia entre las magnitudes dadas.",
      D: "Corresponde al activo total menos el patrimonio neto, sin descontar también el pasivo no corriente."
    }
  },
  {
    id: "q016",
    modulo: "test",
    tema: "Cuenta de pérdidas y ganancias (P&L): EBITDA, EBIT, margen bruto",
    dificultad: "básico",
    enunciado: "¿Qué significa el acrónimo EBITDA?",
    opciones: {
      A: "Earnings Before Interest, Taxes, Depreciation and Amortization (resultado antes de intereses, impuestos, depreciaciones y amortizaciones)",
      B: "Earnings Before Income, Tax, Dividends and Assets",
      C: "Equity Before Interest and Taxes",
      D: "Resultado neto después de impuestos"
    },
    correcta: "A",
    explicacion:
      "El EBITDA es el resultado de explotación antes de restar las amortizaciones y depreciaciones, los intereses y los impuestos. Es un indicador muy utilizado porque aproxima la capacidad de generación de caja operativa del negocio, al excluir partidas no monetarias (amortización) y de financiación/fiscalidad.",
    porQueNoLasOtras: {
      B: "No corresponde a ningún acrónimo contable reconocido ni a una magnitud financiera estándar.",
      C: "Mezcla el concepto de \"equity\" (patrimonio) con el de \"earnings\" (resultado), que son magnitudes distintas.",
      D: "Eso describe el resultado neto, una magnitud muy posterior en la cascada de resultados, no el EBITDA."
    }
  },
  {
    id: "q017",
    modulo: "test",
    tema: "Cuenta de pérdidas y ganancias (P&L): EBITDA, EBIT, margen bruto",
    dificultad: "intermedio",
    enunciado: "Partiendo del EBITDA, ¿qué hay que restar para llegar al EBIT (resultado de explotación)?",
    opciones: {
      A: "Los gastos financieros",
      B: "El impuesto sobre beneficios",
      C: "Las amortizaciones y depreciaciones del inmovilizado",
      D: "Los dividendos pagados a los accionistas"
    },
    correcta: "C",
    explicacion:
      "El EBIT se obtiene restando al EBITDA las amortizaciones y depreciaciones del periodo, ya que estas sí forman parte del resultado de explotación (aunque no supongan salida de caja). Después del EBIT se restan los gastos financieros y, finalmente, el impuesto sobre beneficios para llegar al resultado neto.",
    porQueNoLasOtras: {
      A: "Los gastos financieros se restan en un paso posterior, para pasar del EBIT al resultado antes de impuestos.",
      B: "El impuesto sobre beneficios se resta al final de la cascada, después del resultado financiero, no para obtener el EBIT.",
      D: "Los dividendos no son un gasto de la cuenta de pérdidas y ganancias, sino una aplicación del resultado ya obtenido."
    }
  },
  {
    id: "q018",
    modulo: "test",
    tema: "Cuenta de pérdidas y ganancias (P&L): EBITDA, EBIT, margen bruto",
    dificultad: "intermedio",
    enunciado: "El margen bruto de una empresa se calcula, con carácter general, como...",
    opciones: {
      A: "Ventas menos coste de las ventas (o coste de la mercancía vendida), en relación con las ventas",
      B: "Resultado neto dividido entre las ventas",
      C: "EBITDA dividido entre el activo total",
      D: "Beneficio neto menos gastos financieros"
    },
    correcta: "A",
    explicacion:
      "El margen bruto mide la rentabilidad directamente ligada a la actividad de venta, antes de considerar otros gastos de estructura: se calcula como ventas menos el coste de las ventas (coste de la mercancía o producto vendido), habitualmente expresado en porcentaje sobre las ventas.",
    porQueNoLasOtras: {
      B: "Esa es la definición del margen neto (sobre ventas), un concepto distinto y posterior al margen bruto.",
      C: "Esa relación se aproximaría más a un ratio de rentabilidad sobre activos (ROA), no al margen bruto.",
      D: "Esa combinación de magnitudes no corresponde a ningún ratio estándar de rentabilidad reconocido."
    }
  },
  {
    id: "q019",
    modulo: "test",
    tema: "Cuenta de pérdidas y ganancias (P&L): EBITDA, EBIT, margen bruto",
    dificultad: "avanzado",
    enunciado:
      "Una empresa presenta los siguientes datos del ejercicio: Ventas 1.000.000€, Coste de ventas 600.000€, Gastos de personal 150.000€, Otros gastos de explotación 50.000€, Amortización 80.000€, Gastos financieros 30.000€ e Impuesto sobre beneficios 42.000€. ¿Cuál es el EBITDA?",
    opciones: {
      A: "1.000.000€",
      B: "200.000€",
      C: "120.000€",
      D: "48.000€"
    },
    correcta: "B",
    explicacion:
      "El EBITDA se calcula antes de restar la amortización: 1.000.000€ − 600.000€ − 150.000€ − 50.000€ = 200.000€. La amortización (80.000€) se resta después para obtener el EBIT, y los gastos financieros e impuestos se restan en pasos posteriores.",
    porQueNoLasOtras: {
      A: "Es la cifra de ventas, sin descontar ningún coste ni gasto de explotación.",
      C: "Corresponde al EBIT (200.000€ − 80.000€ de amortización), que es un paso posterior al EBITDA, no el EBITDA en sí.",
      D: "Corresponde al resultado neto final (120.000€ − 30.000€ − 42.000€), después de restar gastos financieros e impuestos."
    }
  },
  {
    id: "q020",
    modulo: "test",
    tema: "Principio de devengo",
    dificultad: "básico",
    enunciado: "El principio de devengo implica que el resultado del ejercicio se determina por...",
    opciones: {
      A: "La diferencia entre los cobros y los pagos del periodo",
      B: "La diferencia entre los ingresos y los gastos devengados, con independencia del momento de su cobro o pago",
      C: "El saldo de la cuenta de caja (572 Bancos) al cierre del ejercicio",
      D: "El valor de mercado de los activos de la empresa"
    },
    correcta: "B",
    explicacion:
      "El devengo es el principio que rige la determinación del resultado contable: los ingresos y gastos se reconocen cuando se producen económicamente, no cuando se cobran o se pagan. Por eso el resultado contable puede diferir, y de hecho suele diferir, de la variación de la tesorería del periodo.",
    porQueNoLasOtras: {
      A: "Eso describe el criterio de caja, que no es el que utiliza el PGC para determinar el resultado del ejercicio.",
      C: "El saldo de la cuenta de bancos refleja la posición de tesorería, no el resultado contable del ejercicio.",
      D: "La valoración de los activos a precio de mercado no determina, por sí sola, el resultado del ejercicio."
    }
  },
  {
    id: "q021",
    modulo: "test",
    tema: "Principio de devengo",
    dificultad: "intermedio",
    enunciado:
      "Una empresa paga en diciembre de 20X1 una prima de seguro que cubre el periodo de diciembre de 20X1 a noviembre de 20X2. Según el principio de devengo, ¿qué parte de ese gasto corresponde al ejercicio 20X1?",
    opciones: {
      A: "El importe total pagado",
      B: "Ninguna parte; todo corresponde a 20X2",
      C: "Solo la parte proporcional al mes de diciembre de 20X1, periodificando el resto como gasto anticipado (activo)",
      D: "La mitad del importe, repartido a partes iguales entre los dos ejercicios"
    },
    correcta: "C",
    explicacion:
      "La póliza cubre 12 meses; a 31 de diciembre de 20X1 solo ha transcurrido 1 mes de cobertura. Por tanto, solo esa parte proporcional es gasto de 20X1; el resto debe periodificarse como gasto anticipado (cuenta 480) y reconocerse como gasto en los meses correspondientes de 20X2.",
    porQueNoLasOtras: {
      A: "Imputaría al ejercicio del pago todo el gasto, ignorando que la cobertura del seguro se extiende mayoritariamente a 20X2.",
      B: "Ignora que el mes de diciembre de 20X1 sí está cubierto por la póliza y, por tanto, sí genera gasto en ese ejercicio.",
      D: "No corresponde a ningún criterio proporcional real, ya que el periodo cubierto no se reparte al 50% entre ambos ejercicios (1 mes frente a 11 meses)."
    }
  },
  {
    id: "q022",
    modulo: "test",
    tema: "Principio de devengo",
    dificultad: "avanzado",
    enunciado:
      "¿En qué se diferencia el principio de devengo del criterio de caja a efectos de la determinación del resultado contable en el PGC?",
    opciones: {
      A: "No existe diferencia; ambos criterios producen siempre el mismo resultado",
      B: "El devengo reconoce ingresos y gastos cuando se producen económicamente, mientras que el criterio de caja los reconoce cuando hay cobro o pago; el PGC exige el devengo como principio contable obligatorio",
      C: "El criterio de caja es el obligatorio en el PGC, y el devengo es meramente orientativo",
      D: "El devengo solo se aplica a los ingresos, no a los gastos"
    },
    correcta: "B",
    explicacion:
      "El marco conceptual del PGC establece el devengo como uno de sus principios contables obligatorios: ingresos y gastos se imputan al ejercicio en que ocurren económicamente, con independencia de cuándo se cobran o pagan. El criterio de caja, propio de otros contextos (por ejemplo, ciertos regímenes fiscales), no es el criterio general en contabilidad financiera.",
    porQueNoLasOtras: {
      A: "Ambos criterios pueden diferir de forma relevante siempre que exista un desfase temporal entre la operación económica y su cobro o pago.",
      C: "Es justo al contrario: el devengo es el principio obligatorio en el PGC; el criterio de caja no es aplicable salvo excepciones fiscales específicas.",
      D: "El devengo se aplica simétricamente tanto a los ingresos como a los gastos, sin distinción."
    }
  },
  {
    id: "q023",
    modulo: "test",
    tema: "Principio de prudencia",
    dificultad: "básico",
    enunciado: "El principio de prudencia establece que...",
    opciones: {
      A: "Deben contabilizarse todos los beneficios, realizados o no, al cierre del ejercicio",
      B: "Únicamente deben contabilizarse los beneficios realizados a la fecha de cierre, mientras que los riesgos previsibles y las pérdidas, aun siendo eventuales, deben reconocerse en cuanto se conozcan",
      C: "No deben contabilizarse nunca las pérdidas hasta que se materialicen por completo",
      D: "Deben infravalorarse sistemáticamente todos los activos de la empresa"
    },
    correcta: "B",
    explicacion:
      "La prudencia exige un tratamiento asimétrico: los beneficios solo se reconocen cuando se han realizado efectivamente, mientras que las pérdidas y riesgos previsibles deben contabilizarse en cuanto se tiene conocimiento de ellos, aunque su importe final sea todavía incierto.",
    porQueNoLasOtras: {
      A: "Contradice directamente el principio, que exige no anticipar beneficios que todavía no se han realizado.",
      C: "Exige justamente lo contrario: anticipar las pérdidas previsibles tan pronto como se conocen, no esperar a que se materialicen por completo.",
      D: "La prudencia no equivale a infravalorar deliberadamente los activos; una infravaloración sistemática distorsionaría igualmente la imagen fiel."
    }
  },
  {
    id: "q024",
    modulo: "test",
    tema: "Principio de prudencia",
    dificultad: "intermedio",
    enunciado:
      "Una empresa tiene un cliente en concurso de acreedores del que es muy probable que no recupere la deuda. Según el principio de prudencia, ¿qué debe hacer?",
    opciones: {
      A: "Esperar a que se resuelva el concurso para registrar cualquier efecto contable",
      B: "Dotar una provisión por deterioro de valor de créditos por operaciones comerciales (cuenta 490/694) por el importe que se estime no recuperable",
      C: "Dar de baja al cliente directamente, sin reconocer ningún gasto",
      D: "No hacer nada hasta el cierre del ejercicio siguiente"
    },
    correcta: "B",
    explicacion:
      "Cuando existe evidencia objetiva de que es probable que no se recupere un crédito comercial, la empresa debe dotar un deterioro de valor con cargo a la cuenta 694 y abono a la cuenta correctora 490, por la estimación de la pérdida, sin esperar a la resolución definitiva del proceso concursal.",
    porQueNoLasOtras: {
      A: "Esperar a la resolución del concurso incumple la prudencia, que exige anticipar la pérdida previsible en cuanto se conoce el riesgo.",
      C: "Dar de baja el activo sin reconocer el correspondiente gasto por deterioro sería contablemente incorrecto y además no refleja la situación real mientras el crédito sigue existiendo.",
      D: "Retrasar el reconocimiento hasta el ejercicio siguiente incumple tanto el devengo como la prudencia."
    }
  },
  {
    id: "q025",
    modulo: "test",
    tema: "Principio de prudencia",
    dificultad: "avanzado",
    enunciado:
      "En el marco conceptual actual del PGC (tras la reforma de 2007), ¿cómo se relaciona el principio de prudencia con el resto de principios contables?",
    opciones: {
      A: "Sigue siendo el principio jerárquicamente superior a todos los demás en caso de conflicto",
      B: "Ha pasado a tener el mismo rango que los demás principios contables, sin primar sobre ellos salvo en casos de conflicto, donde debe prevalecer el que mejor conduzca a la imagen fiel",
      C: "Ha sido eliminado por completo del marco conceptual español",
      D: "Solo se aplica a las empresas que cotizan en bolsa"
    },
    correcta: "B",
    explicacion:
      "El PGC de 1990 otorgaba a la prudencia primacía sobre el resto de principios en caso de conflicto. El PGC de 2007 (RD 1514/2007), influido por el marco conceptual de las NIIF, eliminó esa jerarquía: hoy la prudencia es uno más de los principios contables, y en caso de conflicto debe prevalecer el criterio que mejor conduzca a la imagen fiel.",
    porQueNoLasOtras: {
      A: "Esa primacía jerárquica existía en el PGC de 1990, pero fue eliminada por el PGC vigente de 2007.",
      C: "El principio de prudencia sigue recogido en el marco conceptual del PGC vigente, aunque sin la primacía que tenía antes.",
      D: "Se aplica a todas las empresas que utilizan el PGC, no solo a las cotizadas (que, además, aplican NIIF-UE en sus cuentas consolidadas)."
    }
  },
  {
    id: "q026",
    modulo: "test",
    tema: "Amortizaciones (diferencia con depreciación de valor, método lineal)",
    dificultad: "básico",
    enunciado: "La amortización del inmovilizado refleja contablemente...",
    opciones: {
      A: "La pérdida de valor de mercado de un activo por causas coyunturales",
      B: "La distribución sistemática del coste de un activo a lo largo de su vida útil, por su depreciación funcional o por el uso",
      C: "Un pago en efectivo que realiza la empresa cada año",
      D: "El valor de venta estimado del activo al final de su vida útil"
    },
    correcta: "B",
    explicacion:
      "La amortización no mide pérdidas de valor coyunturales ni implica un desembolso de caja; es un gasto contable que distribuye de forma sistemática y racional el coste de un activo a lo largo de los ejercicios en los que se espera que genere ingresos (su vida útil).",
    porQueNoLasOtras: {
      A: "Eso describe más bien el concepto de deterioro de valor, no el de amortización, que es sistemática y prevista.",
      C: "La amortización es un gasto contable (no monetario); no implica un pago en efectivo en el momento de su registro.",
      D: "Eso describe el valor residual, un dato que se utiliza para calcular la base amortizable, no la amortización en sí misma."
    }
  },
  {
    id: "q027",
    modulo: "test",
    tema: "Amortizaciones (diferencia con depreciación de valor, método lineal)",
    dificultad: "intermedio",
    enunciado:
      "¿Cuál es la principal diferencia entre la amortización y el deterioro de valor de un activo no corriente?",
    opciones: {
      A: "No hay diferencia; son sinónimos contables",
      B: "La amortización refleja la depreciación sistemática y prevista por el uso o la obsolescencia a lo largo de la vida útil, mientras que el deterioro refleja una pérdida de valor adicional, no prevista, cuando el valor en libros supera al valor recuperable",
      C: "El deterioro solo se aplica a existencias, nunca al inmovilizado",
      D: "La amortización solo se contabiliza al final de la vida útil del activo"
    },
    correcta: "B",
    explicacion:
      "La amortización es un gasto periódico y planificado que anticipa el consumo esperado del activo. El deterioro, en cambio, surge cuando aparece una circunstancia imprevista (una caída de la demanda, una obsolescencia tecnológica repentina, etc.) que hace que el valor en libros supere al valor recuperable, y exige un ajuste adicional e inmediato.",
    porQueNoLasOtras: {
      A: "Son conceptos y gastos distintos (cuentas del grupo 68 frente al grupo 69), con lógicas de reconocimiento diferentes.",
      C: "El deterioro también se aplica al inmovilizado material e intangible, a los créditos comerciales y a inversiones financieras, no solo a existencias.",
      D: "La amortización se contabiliza de forma periódica (habitualmente cada ejercicio), no únicamente al final de la vida útil del activo."
    }
  },
  {
    id: "q028",
    modulo: "test",
    tema: "Amortizaciones (diferencia con depreciación de valor, método lineal)",
    dificultad: "avanzado",
    enunciado:
      "Una empresa adquiere una máquina por 50.000€, con un valor residual estimado de 5.000€ y una vida útil de 9 años. Aplicando el método lineal, ¿cuál es la cuota de amortización anual?",
    opciones: {
      A: "5.555,56€",
      B: "5.000€",
      C: "5.625€",
      D: "50.000€"
    },
    correcta: "B",
    explicacion:
      "En el método lineal, la base amortizable es el coste menos el valor residual: 50.000€ − 5.000€ = 45.000€. Dividiendo entre la vida útil (9 años), la cuota anual es 45.000€ / 9 = 5.000€ constantes cada ejercicio.",
    porQueNoLasOtras: {
      A: "Resulta de dividir el coste total (50.000€) entre los 9 años sin restar antes el valor residual de la base amortizable.",
      C: "Utiliza un número de años incorrecto en el divisor (8 en lugar de 9), lo que infla artificialmente la cuota anual.",
      D: "No corresponde al método lineal, que reparte el coste a lo largo de toda la vida útil, no lo imputa íntegramente en un solo ejercicio."
    }
  },
  {
    id: "q029",
    modulo: "test",
    tema: "Provisiones (diferencia con pasivos contingentes)",
    dificultad: "básico",
    enunciado: "Una provisión, a diferencia de un pasivo contingente, se caracteriza por...",
    opciones: {
      A: "Ser siempre de cuantía y vencimiento exactos y conocidos",
      B: "Existir una obligación presente (legal o implícita) cuya cuantía o vencimiento es incierto, siendo probable que su liquidación origine una salida de recursos que puede estimarse de forma fiable, por lo que SÍ se registra contablemente",
      C: "No tener nunca efecto en la cuenta de pérdidas y ganancias",
      D: "Ser siempre de naturaleza fiscal"
    },
    correcta: "B",
    explicacion:
      "Una provisión se registra cuando existe una obligación presente, es probable (no solo posible) que genere una salida de recursos, y su importe puede estimarse con fiabilidad, aunque exista incertidumbre sobre la cuantía exacta o el momento del pago. Un pasivo contingente, en cambio, no cumple el requisito de probabilidad y solo se informa en la memoria.",
    porQueNoLasOtras: {
      A: "Esa certeza en cuantía y vencimiento es más propia de una deuda cierta (pasivo) que de una provisión, que por definición conlleva incertidumbre.",
      C: "Las provisiones sí generan un gasto en la cuenta de pérdidas y ganancias en el momento de su dotación.",
      D: "Las provisiones pueden originarse por múltiples causas (litigios, garantías, reestructuraciones, etc.), no exclusivamente fiscales."
    }
  },
  {
    id: "q030",
    modulo: "test",
    tema: "Provisiones (diferencia con pasivos contingentes)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa tiene una demanda judicial en curso. Sus asesores legales estiman que es solo \"posible\", pero no probable, que la empresa tenga que pagar una indemnización. ¿Cómo debe tratarse esta situación contablemente?",
    opciones: {
      A: "Se dota una provisión por el importe total reclamado en la demanda",
      B: "No se registra ninguna provisión; se informa en la memoria como pasivo contingente, ya que la salida de recursos no se considera probable (aunque sí posible)",
      C: "Se reconoce directamente como una pérdida en la cuenta de pérdidas y ganancias",
      D: "Se compensa automáticamente con el activo de la empresa"
    },
    correcta: "B",
    explicacion:
      "Dotar una provisión exige que la salida de recursos sea probable, no simplemente posible. Cuando el riesgo existe pero no alcanza ese umbral de probabilidad, se trata de un pasivo contingente que no se registra en el balance, aunque sí debe revelarse información sobre él en la memoria.",
    porQueNoLasOtras: {
      A: "Dotar una provisión en este caso sería excesivo, ya que no se cumple el requisito de probabilidad exigido para su registro.",
      C: "Reconocer una pérdida directa adelantaría el reconocimiento de un hecho que ni siquiera alcanza el umbral de probabilidad necesario para provisionar.",
      D: "No existe ninguna compensación automática entre el activo de la empresa y un riesgo meramente posible."
    }
  },
  {
    id: "q031",
    modulo: "test",
    tema: "Provisiones (diferencia con pasivos contingentes)",
    dificultad: "intermedio",
    enunciado:
      "¿Qué diferencia existe entre una provisión y un pasivo por ajuste de periodificación (por ejemplo, un gasto devengado pendiente de pago)?",
    opciones: {
      A: "Ninguna; ambos conceptos son idénticos y se registran de la misma forma",
      B: "En la provisión existe incertidumbre relevante sobre el importe exacto o el momento de la salida de recursos; en el ajuste por periodificación (p. ej. un gasto a pagar) tanto la existencia de la obligación como su importe son ciertos o fácilmente determinables, y solo falta recibir la factura o el documento soporte",
      C: "Las provisiones nunca pueden referirse a gastos ya devengados",
      D: "Los ajustes por periodificación siempre son a largo plazo"
    },
    correcta: "B",
    explicacion:
      "La clave está en el grado de incertidumbre: una provisión implica dudas relevantes sobre el importe final o el momento del pago (por ejemplo, el resultado de un litigio), mientras que un gasto a pagar por periodificación ya tiene un importe prácticamente cierto, pendiente solo de formalización documental.",
    porQueNoLasOtras: {
      A: "Son figuras distintas: la provisión implica incertidumbre relevante, mientras que el gasto a pagar tiene un importe prácticamente cierto desde el principio.",
      C: "Las provisiones sí pueden referirse a obligaciones ya devengadas pero de cuantía incierta, como una garantía de posventa concedida a clientes.",
      D: "Los ajustes por periodificación suelen ser de corto plazo, al referirse normalmente a gastos o ingresos del propio ejercicio en curso."
    }
  },
  {
    id: "q032",
    modulo: "test",
    tema: "Deterioros (de clientes, de existencias, de inmovilizado)",
    dificultad: "básico",
    enunciado: "El deterioro de valor de un activo se reconoce cuando...",
    opciones: {
      A: "El valor contable del activo es inferior a su valor de mercado",
      B: "El valor contable (en libros) del activo supera su valor recuperable (el mayor entre su valor razonable menos costes de venta y su valor en uso)",
      C: "El activo ha sido totalmente amortizado",
      D: "El activo se ha vendido con pérdidas"
    },
    correcta: "B",
    explicacion:
      "El deterioro se reconoce cuando el valor en libros de un activo excede su valor recuperable, entendido como el mayor entre lo que se obtendría por su venta (menos costes de venta) y el valor de los flujos de efectivo que se espera generar con su uso continuado.",
    porQueNoLasOtras: {
      A: "Si el valor contable es inferior al de mercado no hay deterioro; en todo caso existiría una plusvalía latente que, por prudencia, no se reconoce.",
      C: "La amortización total de un activo no implica por sí misma que exista deterioro; son conceptos distintos y pueden coexistir o no.",
      D: "La venta con pérdidas es un hecho que se produce al dar de baja el activo; el deterioro, en cambio, se reconoce mientras el activo permanece en el balance."
    }
  },
  {
    id: "q033",
    modulo: "test",
    tema: "Deterioros (de clientes, de existencias, de inmovilizado)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa tiene existencias cuyo coste de adquisición fue de 100.000€, pero debido a obsolescencia tecnológica su valor neto realizable estimado es de 70.000€. ¿Qué debe hacer la empresa según el principio de prudencia?",
    opciones: {
      A: "Mantener las existencias valoradas a su coste de adquisición de 100.000€",
      B: "Dotar una corrección valorativa (deterioro) por 30.000€, ajustando el valor de las existencias a su valor neto realizable y reconociendo el correspondiente gasto",
      C: "Vender inmediatamente las existencias al precio que sea posible obtener",
      D: "Esperar al cierre del ejercicio siguiente para realizar cualquier ajuste"
    },
    correcta: "B",
    explicacion:
      "El PGC exige valorar las existencias al menor entre su coste y su valor neto realizable. Cuando este último (70.000€) es inferior al coste (100.000€), debe dotarse una corrección valorativa por la diferencia (30.000€), reconociendo el gasto correspondiente en el ejercicio en que se detecta la pérdida de valor.",
    porQueNoLasOtras: {
      A: "Mantener el coste original sobrevaloraría el activo, incumpliendo la regla de valorar al menor entre coste y valor neto realizable.",
      C: "La venta forzosa inmediata no es la respuesta contable al problema de valoración; el ajuste debe hacerse mediante el deterioro.",
      D: "El deterioro debe reconocerse en el ejercicio en que se conoce la pérdida de valor, no demorarse al ejercicio siguiente."
    }
  },
  {
    id: "q034",
    modulo: "test",
    tema: "Deterioros (de clientes, de existencias, de inmovilizado)",
    dificultad: "avanzado",
    enunciado:
      "Una empresa tiene un saldo de clientes de 50.000€ correspondiente a una factura vencida hace 8 meses, sin garantía y sin reclamación judicial iniciada, y la dirección considera razonablemente probable el impago. ¿Qué asiento refleja correctamente la dotación del deterioro?",
    opciones: {
      A: "Debe (430) Clientes / Haber (490) Deterioro de valor de créditos por operaciones comerciales",
      B: "Debe (694) Pérdidas por deterioro de créditos por operaciones comerciales / Haber (490) Deterioro de valor de créditos por operaciones comerciales",
      C: "Debe (430) Clientes / Haber (700) Ventas de mercaderías",
      D: "Debe (490) Deterioro de valor de créditos por operaciones comerciales / Haber (694) Pérdidas por deterioro de créditos por operaciones comerciales"
    },
    correcta: "B",
    explicacion:
      "La dotación del deterioro de un crédito comercial se registra cargando la cuenta de gasto 694 (Pérdidas por deterioro de créditos por operaciones comerciales) y abonando la cuenta correctora de activo 490 (Deterioro de valor de créditos por operaciones comerciales), que minora el saldo de clientes en el balance sin modificar directamente la cuenta 430.",
    porQueNoLasOtras: {
      A: "No refleja el reconocimiento del gasto por deterioro; además invertiría el sentido habitual del saldo de la cuenta de clientes.",
      C: "No guarda relación con el reconocimiento del deterioro; mezcla la operación con una cuenta de ingresos por ventas.",
      D: "Invierte el debe y el haber del asiento correcto, lo que revertiría una dotación de deterioro en lugar de registrarla."
    }
  },
  {
    id: "q035",
    modulo: "test",
    tema: "Periodificaciones (activas y pasivas)",
    dificultad: "básico",
    enunciado: "Las periodificaciones contables tienen como finalidad...",
    opciones: {
      A: "Corregir errores contables de ejercicios anteriores",
      B: "Imputar los ingresos y gastos al ejercicio en que realmente se devengan, ajustando los desajustes temporales entre el cobro/pago y el reconocimiento contable",
      C: "Valorar los activos a su valor de mercado",
      D: "Calcular el importe del impuesto sobre beneficios"
    },
    correcta: "B",
    explicacion:
      "Las periodificaciones (activas y pasivas) son ajustes recurrentes al cierre del ejercicio que permiten respetar el principio de devengo cuando el cobro o el pago de una operación no coincide en el tiempo con el periodo al que realmente corresponde el ingreso o el gasto.",
    porQueNoLasOtras: {
      A: "Las periodificaciones no son correcciones de errores; son ajustes habituales derivados de la propia naturaleza del devengo, no de equivocaciones.",
      C: "No tienen relación con la valoración a valor razonable, sino con la correcta imputación temporal de ingresos y gastos.",
      D: "El cálculo del impuesto sobre beneficios es un proceso distinto, aunque también relacionado, en última instancia, con el devengo."
    }
  },
  {
    id: "q036",
    modulo: "test",
    tema: "Periodificaciones (activas y pasivas)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa paga el 1 de noviembre de 20X1 el alquiler de un local correspondiente a los meses de noviembre de 20X1 a abril de 20X2 (6 meses), por un total de 6.000€. Al cierre del ejercicio 20X1 (31 de diciembre), ¿qué cuenta de periodificación activa debe utilizar para reflejar la parte no devengada?",
    opciones: {
      A: "480 Gastos anticipados, por 4.000€ (correspondientes a los 4 meses de 20X2 todavía no transcurridos)",
      B: "485 Ingresos anticipados, por 4.000€",
      C: "410 Acreedores por prestaciones de servicios, por 6.000€",
      D: "400 Proveedores, por 2.000€"
    },
    correcta: "A",
    explicacion:
      "El alquiler cubre 6 meses (1.000€/mes). A 31 de diciembre de 20X1 han transcurrido 2 meses (noviembre y diciembre), por lo que los 4 meses restantes de 20X2 (4.000€) deben periodificarse como gasto anticipado, en la cuenta 480, hasta que se devenguen en el ejercicio siguiente.",
    porQueNoLasOtras: {
      B: "La cuenta 485 (ingresos anticipados) es una periodificación pasiva aplicable a quien cobra, no a quien paga el alquiler.",
      C: "Esa cuenta refleja una deuda por servicios recibidos pendientes de pago, no una periodificación de un gasto que ya se ha pagado.",
      D: "La cuenta 400 corresponde a deudas comerciales con proveedores de existencias; además, el importe indicado no corresponde al cálculo correcto de la periodificación."
    }
  },
  {
    id: "q037",
    modulo: "test",
    tema: "Periodificaciones (activas y pasivas)",
    dificultad: "avanzado",
    enunciado:
      "Una inmobiliaria cobra por adelantado, el 1 de septiembre de 20X1, un alquiler de un local correspondiente a los 12 meses siguientes, por importe de 24.000€. Al cierre del ejercicio 20X1, ¿qué importe debe figurar en la cuenta 485 \"Ingresos anticipados\" (periodificación pasiva)?",
    opciones: {
      A: "24.000€, el importe total cobrado",
      B: "0€, porque ya se ha cobrado la totalidad del importe",
      C: "16.000€, correspondientes a los 8 meses de 20X2 todavía no devengados (enero a agosto de 20X2)",
      D: "8.000€, correspondientes a los meses ya devengados de 20X1"
    },
    correcta: "C",
    explicacion:
      "El alquiler cubre 12 meses a razón de 2.000€/mes. De septiembre a diciembre de 20X1 (4 meses) el ingreso ya está devengado (8.000€); los 8 meses restantes, de enero a agosto de 20X2, todavía no se han devengado y deben periodificarse como ingreso anticipado en la cuenta 485 por 16.000€.",
    porQueNoLasOtras: {
      A: "Imputaría al ejercicio 20X1 la totalidad del cobro, cuando la mayor parte del periodo cubierto corresponde en realidad a 20X2.",
      B: "Ignora que la mayor parte del periodo cubierto por el cobro (8 de los 12 meses) corresponde todavía al ejercicio 20X2.",
      D: "8.000€ es precisamente la parte YA devengada en 20X1, que debe reconocerse como ingreso del ejercicio, no como importe pendiente de periodificar."
    }
  },
  {
    id: "q038",
    modulo: "test",
    tema: "Facturas pendientes de recibir (cuenta 4109/410)",
    dificultad: "intermedio",
    enunciado:
      "La cuenta 410 \"Acreedores por prestaciones de servicios\" (o su subcuenta 4109, \"Facturas pendientes de recibir\") se utiliza para reflejar...",
    opciones: {
      A: "Facturas ya recibidas y contabilizadas de proveedores de mercaderías",
      B: "Gastos o servicios ya recibidos al cierre del ejercicio, de los que todavía no se ha recibido la factura del proveedor",
      C: "Cobros anticipados de clientes",
      D: "El IVA soportado en las compras de la empresa"
    },
    correcta: "B",
    explicacion:
      "La cuenta 4109 recoge el pasivo derivado de bienes o servicios ya recibidos (y, por tanto, ya devengados como gasto) al cierre del ejercicio, pero de los que todavía no se dispone de la factura del proveedor, cumpliendo así el principio de devengo aunque falte el soporte documental definitivo.",
    porQueNoLasOtras: {
      A: "Las facturas ya recibidas de proveedores de mercaderías se registran en la cuenta 400 Proveedores, no en la 410/4109.",
      C: "Los cobros anticipados de clientes se reflejan mediante periodificaciones pasivas (por ejemplo, cuenta 438 o 485), no en la cuenta 410.",
      D: "El IVA soportado se registra en la cuenta 472, con independencia de si se ha recibido o no la factura del proveedor."
    }
  },
  {
    id: "q039",
    modulo: "test",
    tema: "Facturas pendientes de recibir (cuenta 4109/410)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa recibe en diciembre de 20X1 un servicio de asesoría que todavía no ha sido facturado por el proveedor al cierre del ejercicio, por un importe estimado de 5.000€ más IVA. ¿Cómo debe contabilizarse este gasto al cierre del ejercicio?",
    opciones: {
      A: "No se contabiliza nada hasta recibir la factura, por aplicación del principio de prudencia",
      B: "Se contabiliza el gasto por 5.000€, con cargo a la cuenta de gasto correspondiente y abono a la cuenta 4109 \"Facturas pendientes de recibir\", sin registrar el IVA hasta la recepción de la factura",
      C: "Se contabiliza el gasto por el importe total incluyendo el IVA, con abono a la cuenta 472 IVA soportado",
      D: "Se contabiliza como un ingreso anticipado"
    },
    correcta: "B",
    explicacion:
      "El devengo exige reconocer el gasto en el ejercicio en que se recibe el servicio, aunque falte la factura, mediante la cuenta 4109. Sin embargo, el IVA soportado no puede registrarse ni deducirse sin factura, ya que esta es un requisito formal imprescindible para su deducción, por lo que el IVA se contabiliza cuando se reciba el documento.",
    porQueNoLasOtras: {
      A: "No contabilizar el gasto incumpliría el principio de devengo, que exige reconocerlo en el ejercicio en que se recibe el servicio, con independencia de la recepción de la factura.",
      C: "El IVA soportado no puede registrarse ni deducirse sin la factura, al ser esta un requisito formal para su deducción; anotarlo sin factura sería incorrecto.",
      D: "Esto describe un concepto de periodificación pasiva de ingresos, que no es aplicable a un gasto propio todavía pendiente de facturar."
    }
  },
  {
    id: "q040",
    modulo: "test",
    tema: "Facturas pendientes de emitir (cuenta 4430/700 con periodificación)",
    dificultad: "intermedio",
    enunciado:
      "La cuenta 4430 \"Clientes, facturas pendientes de formalizar\" se utiliza cuando...",
    opciones: {
      A: "Un cliente ha pagado por adelantado un servicio que todavía no se ha prestado",
      B: "La empresa ha entregado el bien o prestado el servicio al cliente, pero todavía no ha emitido la factura correspondiente al cierre del ejercicio",
      C: "Un cliente no ha pagado una factura ya emitida",
      D: "Se concede un descuento comercial a un cliente"
    },
    correcta: "B",
    explicacion:
      "La cuenta 4430 refleja el derecho de cobro surgido cuando la venta o el servicio ya se ha devengado (entrega del bien o prestación efectiva) pero todavía no se ha formalizado la factura al cliente al cierre del ejercicio, permitiendo reconocer el ingreso correspondiente conforme al devengo.",
    porQueNoLasOtras: {
      A: "Ese supuesto corresponde a una periodificación pasiva de ingresos (anticipo de clientes), no a una venta ya devengada pendiente de facturar.",
      C: "Esa situación de impago de una factura ya emitida se refleja en la cuenta 430 Clientes, no en la 4430.",
      D: "El descuento comercial se registra, en su caso, como una minoración del ingreso, sin relación directa con la falta de emisión de la factura."
    }
  },
  {
    id: "q041",
    modulo: "test",
    tema: "Facturas pendientes de emitir (cuenta 4430/700 con periodificación)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa ha entregado mercancía a un cliente por valor de 10.000€ en diciembre de 20X1, pero por un retraso administrativo no emite la factura hasta enero de 20X2. Según el principio de devengo, ¿en qué ejercicio debe reconocerse el ingreso por esta venta?",
    opciones: {
      A: "En 20X2, cuando se emite la factura",
      B: "En 20X1, contabilizando el ingreso en la cuenta 700 (Ventas) con cargo a la cuenta 4430, al haberse devengado la venta con la entrega de la mercancía",
      C: "Se puede repartir el ingreso entre ambos ejercicios de forma discrecional",
      D: "No se reconoce el ingreso hasta que el cliente efectúe el pago"
    },
    correcta: "B",
    explicacion:
      "La venta se devenga con la transmisión del bien al cliente, que tuvo lugar en diciembre de 20X1. El retraso administrativo en la emisión de la factura no cambia ese momento de devengo: el ingreso se reconoce en 20X1, utilizando la cuenta 4430 como contrapartida transitoria hasta que se formalice la factura.",
    porQueNoLasOtras: {
      A: "Retrasar el ingreso hasta la fecha de emisión de la factura incumple el devengo, ya que la venta (entrega del bien) ya se produjo en 20X1.",
      C: "No existe ningún criterio que permita repartir de forma discrecional un ingreso que ya se ha devengado íntegramente en un momento concreto.",
      D: "Confunde devengo con cobro; el ingreso se reconoce con la transmisión del bien, no con el pago por parte del cliente."
    }
  },
  {
    id: "q042",
    modulo: "test",
    tema: "IVA soportado e IVA repercutido (472, 477, liquidación)",
    dificultad: "básico",
    enunciado: "El IVA soportado en las compras se registra en la cuenta...",
    opciones: {
      A: "477 Hacienda Pública, IVA repercutido",
      B: "472 Hacienda Pública, IVA soportado",
      C: "430 Clientes",
      D: "400 Proveedores"
    },
    correcta: "B",
    explicacion:
      "La cuenta 472 registra el IVA que la empresa soporta (paga) en sus compras de bienes y servicios, y que, si es deducible, podrá compensar frente al IVA repercutido en sus ventas en la correspondiente liquidación periódica con la Hacienda Pública.",
    porQueNoLasOtras: {
      A: "La cuenta 477 refleja el IVA que la empresa repercute (cobra) en sus ventas a clientes, no el que soporta en sus compras.",
      C: "La cuenta 430 refleja los saldos a cobrar de clientes por ventas, no está destinada a registrar el IVA.",
      D: "La cuenta 400 refleja la deuda comercial con proveedores en su conjunto, no el IVA de forma independiente y específica."
    }
  },
  {
    id: "q043",
    modulo: "test",
    tema: "IVA soportado e IVA repercutido (472, 477, liquidación)",
    dificultad: "intermedio",
    enunciado:
      "Si el IVA repercutido (cuenta 477) de un periodo es de 21.000€ y el IVA soportado deducible (cuenta 472) es de 15.000€, ¿cuál es el resultado de la liquidación con Hacienda?",
    opciones: {
      A: "Se genera un crédito a favor de la empresa de 36.000€",
      B: "La empresa debe ingresar 6.000€ a Hacienda",
      C: "Hacienda debe devolver 6.000€ a la empresa",
      D: "No hay liquidación; los importes se compensan directamente con los clientes"
    },
    correcta: "B",
    explicacion:
      "La liquidación periódica del IVA consiste en restar al IVA repercutido el IVA soportado deducible: 21.000€ − 15.000€ = 6.000€. Como el repercutido es mayor, el resultado es a ingresar: la empresa debe pagar esa diferencia a la Hacienda Pública.",
    porQueNoLasOtras: {
      A: "Suma ambos importes en lugar de restarlos, lo que no corresponde a la mecánica real de la liquidación del IVA.",
      C: "Invierte el sentido de la liquidación: cuando el IVA repercutido supera al soportado, es la empresa quien debe pagar, no Hacienda quien devuelve.",
      D: "La liquidación del IVA se realiza frente a la Hacienda Pública; no se compensa con los saldos pendientes de los clientes."
    }
  },
  {
    id: "q044",
    modulo: "test",
    tema: "IVA soportado e IVA repercutido (472, 477, liquidación)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa en régimen general de IVA soporta en un trimestre 50.000€ de IVA soportado deducible y repercute únicamente 30.000€ de IVA en sus ventas. ¿Qué ocurre con la diferencia de 20.000€?",
    opciones: {
      A: "Se pierde, ya que el IVA soportado no deducido en el propio periodo no puede compensarse ni devolverse",
      B: "Se genera un saldo a compensar en declaraciones futuras o, en su caso, a solicitar su devolución según el procedimiento establecido, dado que el IVA soportado deducible supera al repercutido",
      C: "Se contabiliza directamente como un gasto en la cuenta de pérdidas y ganancias",
      D: "Se traslada automáticamente al ejercicio siguiente como un incremento del precio de venta"
    },
    correcta: "B",
    explicacion:
      "Cuando el IVA soportado deducible supera al repercutido en un periodo de liquidación, la diferencia no se pierde: genera un saldo a favor de la empresa que puede compensarse en liquidaciones posteriores o, cumpliendo los requisitos, solicitarse su devolución a la Hacienda Pública.",
    porQueNoLasOtras: {
      A: "El IVA soportado deducible no se pierde en ningún caso; da derecho a compensación en periodos futuros o a devolución.",
      C: "El IVA deducible no constituye un gasto para la empresa (es, en general, neutral), por lo que no debe registrarse como tal en la cuenta de pérdidas y ganancias.",
      D: "El IVA no se traslada como un ajuste de los precios de venta; sigue un procedimiento tributario específico de compensación o devolución."
    }
  },
  {
    id: "q045",
    modulo: "test",
    tema: "Hechos posteriores al cierre (de ajuste vs de información)",
    dificultad: "básico",
    enunciado: "Un hecho posterior al cierre del ejercicio \"de ajuste\" es aquel que...",
    opciones: {
      A: "Pone de manifiesto condiciones que ya existían en la fecha de cierre, por lo que obliga a modificar las cuentas anuales antes de su formulación",
      B: "Nunca afecta a las cuentas anuales; solo se menciona en el informe de gestión",
      C: "Siempre implica una ampliación de capital",
      D: "Solo puede producirse en empresas que cotizan en bolsa"
    },
    correcta: "A",
    explicacion:
      "Los hechos posteriores de ajuste son aquellos que aportan evidencia adicional sobre condiciones que ya existían a la fecha de cierre; por ello, obligan a modificar los importes reconocidos en las cuentas anuales antes de su formulación, a diferencia de los hechos de mera información, que solo se revelan en la memoria.",
    porQueNoLasOtras: {
      B: "Los hechos de ajuste sí afectan a las cuentas anuales, modificando los importes ya reconocidos, no solo al informe de gestión.",
      C: "No tiene relación necesaria con operaciones de capital; puede tratarse de cualquier tipo de hecho que confirme una condición existente al cierre.",
      D: "El concepto se aplica a cualquier empresa que formule cuentas anuales conforme al PGC, no solo a las cotizadas en bolsa."
    }
  },
  {
    id: "q046",
    modulo: "test",
    tema: "Hechos posteriores al cierre (de ajuste vs de información)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa cierra su ejercicio a 31 de diciembre de 20X1. En febrero de 20X2, antes de la formulación de las cuentas, un cliente que a 31 de diciembre ya mostraba signos claros de insolvencia entra en concurso de acreedores. ¿Cómo debe tratarse este hecho?",
    opciones: {
      A: "Como un hecho posterior de mera información en la memoria, sin afectar a las cuentas de 20X1",
      B: "Como un hecho posterior de ajuste, ya que confirma una condición (la insolvencia) que ya existía a la fecha de cierre, debiendo ajustarse el deterioro del crédito en las cuentas de 20X1",
      C: "Se registra como un gasto extraordinario únicamente en el ejercicio 20X2",
      D: "No se puede dar ningún tratamiento porque el ejercicio 20X1 ya está cerrado"
    },
    correcta: "B",
    explicacion:
      "Dado que los signos de insolvencia ya eran claros antes del cierre del ejercicio, la entrada en concurso en 20X2 confirma una condición que ya existía a 31 de diciembre de 20X1. Es, por tanto, un hecho posterior de ajuste que obliga a revisar y, en su caso, reforzar el deterioro del crédito en las cuentas de 20X1.",
    porQueNoLasOtras: {
      A: "No es un hecho meramente informativo, porque la causa que lo origina (la insolvencia) ya existía antes del cierre, lo que obliga a ajustar las cuentas de 20X1.",
      C: "Imputarlo solo a 20X2 ignoraría que la causa del deterioro (la situación de insolvencia) ya existía al cierre de 20X1.",
      D: "Las cuentas anuales pueden y deben ajustarse antes de su formulación definitiva cuando aparece información relevante sobre hechos anteriores al cierre."
    }
  },
  {
    id: "q047",
    modulo: "test",
    tema: "Fondo de maniobra / Working Capital",
    dificultad: "básico",
    enunciado: "El fondo de maniobra (working capital) se calcula como...",
    opciones: {
      A: "Activo no corriente menos pasivo no corriente",
      B: "Activo corriente menos pasivo corriente",
      C: "Patrimonio neto menos pasivo total",
      D: "Activo total menos pasivo total"
    },
    correcta: "B",
    explicacion:
      "El fondo de maniobra mide la holgura financiera a corto plazo de la empresa: es la diferencia entre el activo corriente (lo que se espera convertir en liquidez a corto plazo) y el pasivo corriente (lo que hay que pagar a corto plazo). Un fondo de maniobra positivo indica, en principio, capacidad para atender las obligaciones a corto plazo.",
    porQueNoLasOtras: {
      A: "Esa diferencia entre masas a largo plazo no corresponde al concepto de fondo de maniobra, que es una magnitud específicamente de corto plazo.",
      C: "Esa resta no tiene una interpretación financiera estándar relevante en el análisis del fondo de maniobra.",
      D: "Esa diferencia equivale, por la propia ecuación del balance, al patrimonio neto, no al fondo de maniobra."
    }
  },
  {
    id: "q048",
    modulo: "test",
    tema: "Fondo de maniobra / Working Capital",
    dificultad: "intermedio",
    enunciado:
      "Una empresa tiene activo corriente de 180.000€ y pasivo corriente de 220.000€. ¿Qué indica su fondo de maniobra?",
    opciones: {
      A: "Un fondo de maniobra positivo de 40.000€, lo que indica una posición financiera a corto plazo saneada",
      B: "Un fondo de maniobra negativo de 40.000€, lo que puede indicar dificultades para atender sus obligaciones de pago a corto plazo con sus activos corrientes",
      C: "Un fondo de maniobra de 400.000€",
      D: "El fondo de maniobra no se puede calcular con estos datos"
    },
    correcta: "B",
    explicacion:
      "El fondo de maniobra es 180.000€ − 220.000€ = −40.000€. Un resultado negativo significa que el pasivo corriente supera al activo corriente, lo que puede ser una señal de alerta sobre la capacidad de la empresa para atender sus pagos a corto plazo, aunque conviene analizarlo junto con el sector y el ciclo de caja de la empresa.",
    porQueNoLasOtras: {
      A: "Invierte el signo del resultado real: el pasivo corriente (220.000€) supera al activo corriente (180.000€), por lo que el fondo de maniobra es negativo, no positivo.",
      C: "Suma los importes en lugar de restarlos, lo que no corresponde al cálculo correcto del fondo de maniobra.",
      D: "Con estos dos datos (activo corriente y pasivo corriente) el fondo de maniobra se puede calcular directamente mediante su diferencia."
    }
  },
  {
    id: "q049",
    modulo: "test",
    tema: "Fondo de maniobra / Working Capital",
    dificultad: "avanzado",
    enunciado:
      "Una empresa tiene un fondo de maniobra negativo de forma recurrente, pero no tiene problemas de liquidez. ¿En qué tipo de negocio es más habitual observar esta situación sin que sea necesariamente preocupante?",
    opciones: {
      A: "En empresas industriales con largos ciclos de fabricación y almacenamiento de existencias",
      B: "En negocios con alta rotación y cobro al contado a clientes, pero con pago aplazado a proveedores (como supermercados o grandes superficies), donde el ciclo de caja es muy corto o incluso negativo",
      C: "En empresas que no tienen ningún proveedor",
      D: "Es imposible tener fondo de maniobra negativo sin tener problemas de liquidez"
    },
    correcta: "B",
    explicacion:
      "En negocios de alta rotación donde se cobra al contado a los clientes pero se paga de forma aplazada a los proveedores, la empresa financia buena parte de su circulante con la propia financiación espontánea de sus proveedores, pudiendo operar con normalidad incluso con un fondo de maniobra negativo de forma estructural.",
    porQueNoLasOtras: {
      A: "Las empresas industriales con ciclos largos de fabricación y almacenamiento suelen necesitar, al contrario, un fondo de maniobra positivo elevado para financiar existencias y clientes.",
      C: "Una empresa sin proveedores tendría, si acaso, menos pasivo corriente, lo que dificultaría presentar un fondo de maniobra negativo.",
      D: "No es imposible: un ciclo de caja muy corto o negativo (cobrar antes de pagar) permite operar con normalidad incluso con fondo de maniobra negativo."
    }
  },
  {
    id: "q050",
    modulo: "test",
    tema: "Diferencias entre beneficio y flujo de caja (por qué una empresa rentable puede tener problemas de caja)",
    dificultad: "intermedio",
    enunciado:
      "¿Por qué una empresa puede ser rentable (tener beneficios) y, al mismo tiempo, tener problemas de tesorería?",
    opciones: {
      A: "Es imposible: si hay beneficio contable, siempre hay caja suficiente",
      B: "Porque el beneficio se determina por el criterio de devengo (ingresos y gastos reconocidos, no necesariamente cobrados o pagados), mientras que la tesorería depende de los cobros y pagos reales; por ejemplo, puede haber ventas devengadas pero todavía no cobradas, o inversiones que no son gasto del ejercicio",
      C: "Porque el beneficio siempre coincide exactamente con la variación de la tesorería del periodo",
      D: "Solo puede ocurrir si la empresa comete fraude contable"
    },
    correcta: "B",
    explicacion:
      "El beneficio contable y la variación de tesorería son magnitudes distintas: el primero se calcula por devengo, mientras que la segunda refleja los movimientos reales de cobro y pago. Una empresa puede tener beneficios altos pero con ventas a crédito aún sin cobrar, o estar realizando inversiones (que no son gasto del ejercicio) que consumen caja, generando tensiones de tesorería pese a ser rentable.",
    porQueNoLasOtras: {
      A: "Esta afirmación confunde resultado contable con tesorería, dos magnitudes que pueden diferir de forma significativa y perfectamente legítima.",
      C: "El beneficio coincide con la variación de tesorería solo en casos muy excepcionales; normalmente difieren por el devengo, las inversiones y la financiación.",
      D: "El desfase entre beneficio y caja es una situación habitual y legítima en la gestión empresarial, no implica necesariamente ningún fraude contable."
    }
  },
  {
    id: "q051",
    modulo: "test",
    tema: "Diferencias entre beneficio y flujo de caja (por qué una empresa rentable puede tener problemas de caja)",
    dificultad: "avanzado",
    enunciado:
      "Una empresa que crece rápidamente en ventas suele experimentar tensiones de tesorería a pesar de ser rentable. ¿Cuál es la causa típica de este fenómeno?",
    opciones: {
      A: "El crecimiento de las ventas siempre reduce las necesidades de circulante de la empresa",
      B: "El incremento de ventas a crédito aumenta el saldo de clientes (cuenta 430) y, a menudo, también las existencias necesarias para atender la mayor demanda, lo que incrementa las necesidades de fondo de maniobra por encima de la caja que el propio crecimiento genera",
      C: "El crecimiento de ventas siempre implica mayores amortizaciones",
      D: "Este fenómeno solo ocurre en empresas con pérdidas"
    },
    correcta: "B",
    explicacion:
      "Cuando una empresa crece rápidamente, suele necesitar financiar más clientes (ventas a crédito todavía no cobradas) y más existencias para atender la mayor demanda, lo que incrementa sus necesidades de fondo de maniobra. Si esa necesidad crece más rápido que la generación de caja del propio negocio, aparecen tensiones de tesorería pese a que la empresa sea rentable (fenómeno conocido como \"overtrading\").",
    porQueNoLasOtras: {
      A: "Es justamente lo contrario: un mayor volumen de ventas a crédito suele aumentar, no reducir, las necesidades de financiación del circulante.",
      C: "El crecimiento de ventas no está necesariamente ligado a un aumento proporcional de las amortizaciones, que dependen del inmovilizado, no directamente del volumen de ventas.",
      D: "El fenómeno descrito (crecer y consumir caja) es típico precisamente de empresas rentables en expansión, no de empresas con pérdidas."
    }
  },
  {
    id: "q052",
    modulo: "test",
    tema: "Existencias (valoración, método FIFO/PMP, obsolescencia)",
    dificultad: "básico",
    enunciado: "Según el PGC, las existencias deben valorarse, con carácter general, a...",
    opciones: {
      A: "Valor de mercado siempre",
      B: "El menor de su coste de adquisición o producción y su valor neto realizable",
      C: "Valor razonable con cambios imputados directamente al patrimonio neto",
      D: "El precio de venta estimado más el margen comercial habitual"
    },
    correcta: "B",
    explicacion:
      "El PGC establece, por aplicación del principio de prudencia, que las existencias se valoren al menor de su coste (de adquisición o producción) y su valor neto realizable, evitando así sobrevalorar el activo cuando su valor de realización haya caído por debajo del coste.",
    porQueNoLasOtras: {
      A: "El PGC no utiliza el valor de mercado como criterio general de valoración de las existencias.",
      C: "El valor razonable con cambios en patrimonio neto es un criterio aplicable a ciertos instrumentos financieros, no al criterio general de valoración de existencias.",
      D: "Ese criterio invertiría el sentido conservador de la valoración, sobrevalorando el activo si el margen comercial fuera positivo."
    }
  },
  {
    id: "q053",
    modulo: "test",
    tema: "Existencias (valoración, método FIFO/PMP, obsolescencia)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa utiliza el método del Precio Medio Ponderado (PMP) para valorar sus existencias. Compra 100 unidades a 10€/unidad y, después, 100 unidades más a 14€/unidad. ¿Cuál es el coste unitario medio ponderado tras ambas compras?",
    opciones: {
      A: "10€/unidad",
      B: "14€/unidad",
      C: "12€/unidad",
      D: "24€/unidad"
    },
    correcta: "C",
    explicacion:
      "El PMP se calcula dividiendo el coste total de las unidades disponibles entre el número total de unidades: (100 × 10€ + 100 × 14€) / (100 + 100) = (1.000€ + 1.400€) / 200 = 2.400€ / 200 = 12€/unidad.",
    porQueNoLasOtras: {
      A: "Corresponde únicamente al precio de la primera compra, ignorando la segunda compra realizada a un precio distinto.",
      B: "Corresponde únicamente al precio de la segunda compra, ignorando la primera compra realizada a un precio distinto.",
      D: "Es la suma de ambos precios unitarios (10€ + 14€), no su promedio ponderado por el número de unidades."
    }
  },
  {
    id: "q054",
    modulo: "test",
    tema: "Existencias (valoración, método FIFO/PMP, obsolescencia)",
    dificultad: "avanzado",
    enunciado:
      "¿Cuál es la diferencia principal entre los métodos FIFO (First In, First Out) y el Precio Medio Ponderado (PMP) para la valoración de las salidas de existencias?",
    opciones: {
      A: "No existe diferencia; ambos métodos producen siempre exactamente el mismo resultado",
      B: "En FIFO se considera que las primeras unidades en entrar son las primeras en salir, valorando las existencias finales a los precios más recientes; en PMP las salidas se valoran a un coste medio que se recalcula con cada nueva entrada, por lo que el valor de las existencias finales suele ser menos sensible a variaciones puntuales de precio",
      C: "El PMP solo puede aplicarse en empresas de servicios, que no tienen existencias físicas",
      D: "FIFO solo es un método válido para empresas del sector industrial"
    },
    correcta: "B",
    explicacion:
      "FIFO asume que las unidades más antiguas se consumen primero, dejando las existencias finales valoradas a los costes más recientes. El PMP, en cambio, recalcula un coste medio ponderado cada vez que entran nuevas unidades, suavizando el efecto de las variaciones puntuales de precio tanto en el coste de ventas como en el valor de las existencias finales.",
    porQueNoLasOtras: {
      A: "En entornos de precios variables, ambos métodos producen valoraciones distintas tanto del coste de ventas como de las existencias finales.",
      C: "El PMP es un método de valoración de existencias físicas; no tiene sentido aplicarlo en empresas de servicios que, por definición, no tienen existencias de ese tipo.",
      D: "FIFO es aplicable a cualquier empresa con existencias que lo adopte como criterio de valoración, no es exclusivo del sector industrial."
    }
  },
  {
    id: "q055",
    modulo: "test",
    tema: "Clientes y proveedores (gestión del circulante)",
    dificultad: "básico",
    enunciado: "El plazo medio de cobro a clientes (PMC) mide...",
    opciones: {
      A: "El tiempo medio que tarda la empresa en pagar a sus proveedores",
      B: "El tiempo medio que tarda la empresa en cobrar de sus clientes desde que se realiza la venta",
      C: "El tiempo medio de rotación de las existencias en el almacén",
      D: "El tiempo medio de vida útil de los activos de la empresa"
    },
    correcta: "B",
    explicacion:
      "El plazo medio de cobro es un ratio de gestión del circulante que indica, en promedio, cuántos días tarda la empresa en convertir en efectivo las ventas realizadas a crédito, es decir, el tiempo que el saldo de clientes permanece pendiente de cobro.",
    porQueNoLasOtras: {
      A: "Eso corresponde al plazo medio de pago a proveedores (PMP), el ratio inverso dentro del análisis del circulante.",
      C: "La rotación de existencias es un ratio distinto, relacionado con la gestión del almacén, no con el saldo de clientes.",
      D: "La vida útil de los activos no tiene relación con la gestión del circulante de clientes."
    }
  },
  {
    id: "q056",
    modulo: "test",
    tema: "Clientes y proveedores (gestión del circulante)",
    dificultad: "intermedio",
    enunciado:
      "Si una empresa alarga el plazo medio de pago a sus proveedores sin alterar sus condiciones de cobro a clientes ni su rotación de existencias, ¿qué efecto tiene esto, en principio, sobre sus necesidades de financiación del circulante?",
    opciones: {
      A: "Aumentan, porque pagar más tarde siempre perjudica a la empresa",
      B: "Disminuyen, porque la empresa dispone durante más tiempo de la financiación que le conceden sus proveedores, reduciendo sus necesidades de fondo de maniobra",
      C: "No tienen ningún efecto sobre las necesidades de financiación",
      D: "Solo afecta al resultado contable, no a la tesorería de la empresa"
    },
    correcta: "B",
    explicacion:
      "Los proveedores son una fuente de financiación espontánea del circulante. Alargar su plazo de pago, dentro de límites razonables y sin incumplir los acuerdos contractuales, permite a la empresa disponer durante más tiempo de esos recursos, reduciendo sus necesidades de financiación a corto plazo.",
    porQueNoLasOtras: {
      A: "Alargar el pago a proveedores, dentro de límites razonables, reduce las necesidades de financiación de la empresa, no las aumenta.",
      C: "Sí tiene un efecto directo sobre el fondo de maniobra y la tesorería disponible de la empresa.",
      D: "El efecto es fundamentalmente de tesorería y financiación del circulante, no del resultado contable, salvo efectos indirectos como posibles intereses de demora."
    }
  },
  {
    id: "q057",
    modulo: "test",
    tema: "Clientes y proveedores (gestión del circulante)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa reduce drásticamente los plazos de pago a sus proveedores para aprovechar descuentos por pago anticipado, pero no ajusta su política de cobro a clientes. ¿Qué riesgo financiero puede generar esta decisión si no se gestiona adecuadamente?",
    opciones: {
      A: "Ninguno; los descuentos por pago anticipado siempre compensan cualquier efecto financiero derivado",
      B: "Puede generar un desajuste temporal de tesorería, ya que la empresa paga antes a proveedores sin cobrar antes de sus clientes, aumentando sus necesidades de financiación del circulante a corto plazo",
      C: "Reduce automáticamente el fondo de maniobra de la empresa a cero",
      D: "Mejora automáticamente el EBITDA de la empresa"
    },
    correcta: "B",
    explicacion:
      "Si la empresa adelanta sus pagos a proveedores sin acortar también el plazo de cobro a clientes, se produce un desajuste temporal: sale caja antes de que entre, lo que incrementa las necesidades de financiación del circulante a corto plazo, aunque el ahorro por el descuento comercial pueda, en algunos casos, compensar ese coste financiero adicional.",
    porQueNoLasOtras: {
      A: "El ahorro del descuento financiero obtenido debe compararse con el coste de financiar el adelanto del pago; no compensa automáticamente en todos los casos.",
      C: "No existe tal efecto automático sobre el fondo de maniobra, que depende de múltiples partidas del balance, no solo del plazo de pago a proveedores.",
      D: "El EBITDA no se ve afectado por el momento en que se paga a los proveedores, al ser una magnitud calculada por devengo, no por tesorería."
    }
  },
  {
    id: "q058",
    modulo: "test",
    tema: "Deudas financieras (corto vs largo plazo, clasificación correcta)",
    dificultad: "básico",
    enunciado:
      "Una deuda con una entidad de crédito cuyo vencimiento es a 5 años desde su concesión se clasifica, en el momento inicial, como...",
    opciones: {
      A: "Pasivo corriente en su totalidad",
      B: "Pasivo no corriente en su totalidad, al vencer en un plazo superior a 12 meses",
      C: "Patrimonio neto",
      D: "Activo no corriente"
    },
    correcta: "B",
    explicacion:
      "Dado que el vencimiento de la deuda es superior a 12 meses desde su concesión, se clasifica inicialmente en su totalidad como pasivo no corriente, sin perjuicio de que en ejercicios posteriores deba reclasificarse la parte que vaya venciendo dentro de los siguientes 12 meses.",
    porQueNoLasOtras: {
      A: "Clasificarla como corriente en su totalidad ignoraría que su vencimiento supera ampliamente los 12 meses desde su concesión.",
      C: "Una deuda financiera es una obligación frente a terceros (pasivo); no forma parte de los fondos propios de la empresa (patrimonio neto).",
      D: "Una deuda constituye una fuente de financiación (pasivo), no un empleo de fondos (activo)."
    }
  },
  {
    id: "q059",
    modulo: "test",
    tema: "Deudas financieras (corto vs largo plazo, clasificación correcta)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa tiene una póliza de crédito (cuenta de crédito) con un límite concedido de 100.000€, de la cual tiene dispuestos 60.000€ al cierre del ejercicio. ¿Cómo debe reflejarse en el balance?",
    opciones: {
      A: "Los 100.000€ como pasivo corriente, por el límite total concedido en la póliza",
      B: "Los 60.000€ efectivamente dispuestos, como deuda con entidades de crédito a corto plazo (pasivo corriente); el resto (40.000€) no dispuesto no se registra como pasivo",
      C: "Los 100.000€ como activo de la empresa",
      D: "No se registra nada hasta que se agote por completo el límite de la póliza"
    },
    correcta: "B",
    explicacion:
      "En el balance solo debe reconocerse como pasivo el importe efectivamente dispuesto de la póliza de crédito (60.000€), ya que es ese importe el que genera una obligación real de devolución. El límite no dispuesto (40.000€) no constituye una deuda actual, sin perjuicio de que se informe de él en la memoria.",
    porQueNoLasOtras: {
      A: "Solo debe reconocerse como pasivo el importe efectivamente utilizado, no el límite máximo concedido, que es simplemente información a revelar en la memoria.",
      C: "Una póliza de crédito es una fuente de financiación (pasivo) para la empresa, no un activo que esta posea.",
      D: "La parte ya dispuesta genera una obligación de devolución desde el momento en que se utiliza, y debe registrarse entonces, no al agotar el límite total."
    }
  },
  {
    id: "q060",
    modulo: "test",
    tema: "Deudas financieras (corto vs largo plazo, clasificación correcta)",
    dificultad: "avanzado",
    enunciado:
      "Una empresa refinancia, después del cierre del ejercicio pero antes de la fecha de formulación de las cuentas anuales, una deuda que a 31 de diciembre vencía dentro de los 12 meses siguientes, transformándola en una deuda a largo plazo mediante un acuerdo firme con la entidad financiera. ¿Cómo debe clasificarse esa deuda en el balance a la fecha de cierre?",
    opciones: {
      A: "Como pasivo corriente, porque a la fecha de cierre el vencimiento original era a corto plazo, y el acuerdo de refinanciación es un hecho posterior que no cambia la clasificación en el balance de ese cierre",
      B: "Como pasivo no corriente, porque ya se conoce con certeza, antes de formular las cuentas, que la deuda ha sido refinanciada",
      C: "Se divide proporcionalmente entre pasivo corriente y no corriente según la fecha de la refinanciación",
      D: "Se da de baja del balance, ya que la deuda original ha quedado sustituida por el nuevo acuerdo"
    },
    correcta: "A",
    explicacion:
      "La clasificación corriente/no corriente depende de los derechos y condiciones existentes en la propia fecha de cierre. Si a 31 de diciembre la empresa no tenía todavía el derecho incondicional de diferir el pago más de 12 meses, la deuda se clasifica como corriente en ese balance, aunque posteriormente, antes de formular las cuentas, se haya firmado la refinanciación; este hecho posterior se trata como de mera información en la memoria, sin alterar la clasificación en el balance de cierre.",
    porQueNoLasOtras: {
      B: "El derecho a diferir el pago a largo plazo debe existir en la propia fecha de cierre; no basta con que se obtenga después, aunque sea antes de formular las cuentas anuales.",
      C: "No existe ningún prorrateo entre corriente y no corriente en este supuesto; la clasificación se determina por la situación existente a la fecha de cierre.",
      D: "La deuda sigue existiendo en el balance; el hecho posterior no implica su baja, y solo afecta, en su caso, a la información que debe revelarse en la memoria."
    }
  }
];
