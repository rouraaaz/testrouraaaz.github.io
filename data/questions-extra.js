// Banco de preguntas tipo test adicionales para práctica de entrevista técnica junior de Audit & Assurance.
// Continúa la numeración de data/questions.js (q001-q060) a partir de q061.
// Terminología basada en el Plan General de Contabilidad (PGC) español (RD 1514/2007 y modificaciones).
// Cada pregunta indica la cuenta/número del PGC cuando es relevante. Se menciona NIIF solo para contraste.

export const questionsExtra = [
  {
    id: "q061",
    modulo: "test",
    tema: "Activo corriente y no corriente",
    dificultad: "básico",
    enunciado:
      "¿Cuál de las siguientes partidas se clasifica como activo no corriente en el balance según el PGC?",
    opciones: {
      A: "Clientes por ventas de mercaderías (cuenta 430)",
      B: "Inversiones financieras a corto plazo (cuenta 540)",
      C: "Terrenos y construcciones afectos a la actividad (cuentas 210/211)",
      D: "Tesorería en bancos (cuenta 572)"
    },
    correcta: "C",
    explicacion:
      "Los terrenos y construcciones afectos a la actividad son inmovilizado material destinado a permanecer de forma duradera en la empresa, por lo que se clasifican como activo no corriente. El resto de partidas son elementos que se esperan convertir en liquidez a corto plazo.",
    porQueNoLasOtras: {
      A: "El saldo de clientes es un derecho de cobro del ciclo normal de explotación, que se espera cobrar a corto plazo, por lo que es activo corriente.",
      B: "Las inversiones financieras a corto plazo se clasifican, por definición, como activo corriente, al esperarse su realización en menos de 12 meses.",
      D: "La tesorería en bancos es el activo más líquido de todos y siempre se clasifica como activo corriente."
    }
  },
  {
    id: "q062",
    modulo: "test",
    tema: "Activo corriente y no corriente",
    dificultad: "intermedio",
    enunciado:
      "Una empresa concede un préstamo a otra sociedad del grupo, con vencimiento a 18 meses desde la fecha de cierre del balance. ¿Cómo debe clasificarse ese crédito?",
    opciones: {
      A: "Como activo corriente en su totalidad, por tratarse de una operación entre empresas del grupo",
      B: "Como activo no corriente, ya que su vencimiento es superior a 12 meses desde la fecha de cierre",
      C: "Como una partida de patrimonio neto",
      D: "Se compensa automáticamente con cualquier deuda que el grupo tenga con la empresa"
    },
    correcta: "B",
    explicacion:
      "El criterio de clasificación corriente/no corriente depende de la expectativa de realización a 12 meses desde el cierre, con independencia de que la contraparte sea una empresa del grupo. Al vencer en 18 meses, el crédito se clasifica como activo no corriente.",
    porQueNoLasOtras: {
      A: "El hecho de ser una operación intragrupo no altera el criterio temporal de clasificación; lo relevante es el vencimiento real del crédito.",
      C: "Se trata de un derecho de cobro (activo), no de una aportación de los socios ni de un elemento del patrimonio neto.",
      D: "No existe una compensación automática entre activo y pasivo; solo procede compensar partidas cuando se cumplen requisitos legales y contractuales específicos."
    }
  },
  {
    id: "q063",
    modulo: "test",
    tema: "Pasivo corriente y no corriente",
    dificultad: "básico",
    enunciado: "¿Cuál de las siguientes partidas se clasifica, con carácter general, como pasivo corriente?",
    opciones: {
      A: "Un préstamo hipotecario a 15 años recién concedido",
      B: "La remuneración pendiente de pago al personal del propio mes (cuenta 465)",
      C: "Una provisión para reestructuración cuyo desembolso se espera dentro de 3 años",
      D: "El capital social"
    },
    correcta: "B",
    explicacion:
      "Las remuneraciones pendientes de pago al personal del propio mes vencen a muy corto plazo, por lo que se clasifican como pasivo corriente. El resto de partidas corresponden a pasivo no corriente o, en el caso del capital social, a patrimonio neto.",
    porQueNoLasOtras: {
      A: "Un préstamo recién concedido a 15 años vence muy por encima de los 12 meses, por lo que se clasifica como pasivo no corriente.",
      C: "Si el desembolso se espera dentro de 3 años, la provisión se clasifica como pasivo no corriente, no corriente.",
      D: "El capital social forma parte del patrimonio neto, no es una deuda ni pertenece al pasivo."
    }
  },
  {
    id: "q064",
    modulo: "test",
    tema: "Pasivo corriente y no corriente",
    dificultad: "avanzado",
    enunciado:
      "Una empresa tiene un pasivo por impuesto diferido (cuenta 479) asociado a una diferencia temporaria que se espera revierta a lo largo de los próximos 5 ejercicios. ¿Cómo debe clasificarse este pasivo en el balance según el PGC?",
    opciones: {
      A: "Siempre como pasivo corriente, porque las deudas con la Hacienda Pública son siempre a corto plazo",
      B: "Como pasivo no corriente, ya que el PGC exige presentar los pasivos por impuesto diferido como no corrientes con independencia del calendario concreto de reversión de la diferencia temporaria",
      C: "Se reparte proporcionalmente entre pasivo corriente y no corriente según el calendario previsto de reversión",
      D: "No se registra ningún pasivo hasta que efectivamente se liquide el impuesto correspondiente"
    },
    correcta: "B",
    explicacion:
      "El PGC establece, en su norma de registro y valoración sobre impuesto sobre beneficios, que los activos y pasivos por impuesto diferido se clasifiquen siempre como no corrientes, independientemente de la fecha prevista de reversión de las diferencias temporarias que los originan.",
    porQueNoLasOtras: {
      A: "Es precisamente al contrario: el PGC exige clasificar estos pasivos como no corrientes, no como corrientes.",
      C: "No existe ningún reparto proporcional entre masas; el pasivo por impuesto diferido se clasifica en bloque como no corriente.",
      D: "El pasivo por impuesto diferido se reconoce en el momento en que surge la diferencia temporaria que lo origina, no cuando se liquida efectivamente el impuesto."
    }
  },
  {
    id: "q065",
    modulo: "test",
    tema: "Patrimonio neto",
    dificultad: "intermedio",
    enunciado:
      "Una sociedad anónima adquiere acciones propias (autocartera) por un importe de 50.000€. ¿Cómo debe reflejarse esta operación en sus cuentas anuales?",
    opciones: {
      A: "Como un activo financiero, valorado a valor razonable",
      B: "Minorando el patrimonio neto mediante una cuenta compensadora (como la 109 Acciones o participaciones propias), sin reconocer ningún activo por la adquisición",
      C: "Como un gasto en la cuenta de pérdidas y ganancias del ejercicio",
      D: "Como un pasivo financiero por el importe pagado"
    },
    correcta: "B",
    explicacion:
      "La adquisición de acciones o participaciones propias nunca se reconoce como un activo; el PGC exige registrarla minorando directamente el patrimonio neto, mediante una cuenta compensadora específica, hasta que las acciones se enajenen o se amorticen.",
    porQueNoLasOtras: {
      A: "Reconocer la autocartera como un activo financiero contradice la regla específica del PGC, que exige tratarla como una minoración del patrimonio neto.",
      C: "La adquisición de acciones propias no constituye un gasto del ejercicio; es una operación sobre el propio patrimonio de la sociedad.",
      D: "La compra de autocartera no genera una obligación de pago a terceros; es la propia sociedad quien adquiere sus títulos a sus accionistas."
    }
  },
  {
    id: "q066",
    modulo: "test",
    tema: "Patrimonio neto",
    dificultad: "avanzado",
    enunciado:
      "Al cierre del ejercicio, una empresa valora una cartera de activos financieros disponibles para la venta y registra una plusvalía no realizada de 10.000€. Según el PGC, ¿dónde se refleja esa plusvalía antes de su realización efectiva?",
    opciones: {
      A: "Directamente en la cuenta de pérdidas y ganancias, como un ingreso financiero del ejercicio",
      B: "En el patrimonio neto, dentro de \"Ajustes por cambios de valor\", hasta que el activo se enajene, se deteriore o se reclasifique, momento en el que se traspasa a la cuenta de pérdidas y ganancias",
      C: "En reservas voluntarias, incrementando directamente el capital social",
      D: "No se registra ningún importe, al tratarse de una plusvalía todavía no realizada"
    },
    correcta: "B",
    explicacion:
      "La regla específica de valoración de los activos financieros disponibles para la venta exige reconocer los cambios de valor razonable transitoriamente en el patrimonio neto, en la partida de ajustes por cambios de valor, traspasándolos a resultados solo cuando el activo se da de baja, se deteriora o se reclasifica.",
    porQueNoLasOtras: {
      A: "Imputar la plusvalía directamente a resultados incumpliría la regla específica de estos activos, que exige su reconocimiento transitorio en patrimonio neto.",
      C: "La plusvalía no se traspasa a reservas voluntarias ni afecta en ningún caso al importe del capital social de la sociedad.",
      D: "La plusvalía sí se registra, aplicando el criterio de valor razonable con cambios en patrimonio neto, aunque todavía no afecte al resultado del ejercicio."
    }
  },
  {
    id: "q067",
    modulo: "test",
    tema: "Ingresos y gastos (criterio de devengo)",
    dificultad: "básico",
    enunciado:
      "Una empresa compra mercaderías a crédito el 20 de diciembre de 20X1, pagaderas a 60 días. ¿En qué momento debe reconocer el gasto correspondiente a esa compra?",
    opciones: {
      A: "Cuando efectivamente pague al proveedor, dentro de los 60 días siguientes",
      B: "Cuando recibe la mercancía, en diciembre de 20X1, con independencia del momento en que la pague",
      C: "Cuando revenda la mercancía a sus clientes",
      D: "Al cierre del ejercicio siguiente, para simplificar la gestión administrativa"
    },
    correcta: "B",
    explicacion:
      "El devengo exige reconocer la compra cuando se recibe la mercancía, con independencia de cuándo se pague al proveedor. La recepción, en diciembre de 20X1, es el momento que determina la imputación temporal de la operación.",
    porQueNoLasOtras: {
      A: "Esperar al pago efectivo correspondería al criterio de caja, que no es el utilizado por el PGC para la imputación temporal de operaciones.",
      C: "La recepción de la mercancía, no su reventa posterior, es lo que determina el devengo de la compra en sí misma.",
      D: "Retrasar el reconocimiento al ejercicio siguiente incumpliría el devengo, ya que la operación ya se produjo en diciembre de 20X1."
    }
  },
  {
    id: "q068",
    modulo: "test",
    tema: "Ingresos y gastos (criterio de devengo)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa concede a un cliente un descuento por volumen de compras (rappel), que se liquidará al finalizar el año natural en función de las compras acumuladas. A 31 de diciembre, el descuento todavía no se ha abonado, pero su importe (180€) puede estimarse con fiabilidad a partir de las compras ya realizadas en el ejercicio. ¿Qué debe hacer la empresa vendedora?",
    opciones: {
      A: "No reconocer nada hasta que se liquide efectivamente el descuento en el ejercicio siguiente",
      B: "Reconocer el gasto por el descuento (minorando el ingreso por ventas, por ejemplo mediante la cuenta 709 \"Rappels sobre ventas\") en el propio ejercicio, aunque el pago se produzca después",
      C: "Reconocerlo como un gasto financiero del ejercicio",
      D: "Esperar a que el cliente lo reclame formalmente para registrar cualquier importe"
    },
    correcta: "B",
    explicacion:
      "El derecho del cliente al rappel se devenga a medida que realiza las compras del ejercicio. Si al cierre puede estimarse con fiabilidad, debe reconocerse ya en ese ejercicio, minorando el ingreso por ventas, con independencia del momento en que se liquide.",
    porQueNoLasOtras: {
      A: "Esperar a la liquidación incumple el devengo, ya que la obligación con el cliente ya existe y es estimable al cierre del ejercicio.",
      C: "El rappel sobre ventas es una minoración de los ingresos comerciales (grupo 7), no un gasto de naturaleza financiera.",
      D: "El devengo no exige que el cliente reclame nada; basta con que la obligación exista y pueda estimarse con fiabilidad al cierre."
    }
  },
  {
    id: "q069",
    modulo: "test",
    tema: "Balance de situación (estructura y lógica)",
    dificultad: "básico",
    enunciado: "En el modelo de balance del PGC, ¿cómo se ordenan las masas patrimoniales del pasivo y patrimonio neto?",
    opciones: {
      A: "De menor a mayor exigibilidad, empezando por el patrimonio neto (no exigible) y terminando por el pasivo corriente (el más exigible, a corto plazo)",
      B: "De mayor a menor exigibilidad, empezando por el pasivo corriente y terminando por el patrimonio neto",
      C: "Alfabéticamente, según el nombre de cada partida",
      D: "Según el tipo de interés asociado a cada deuda"
    },
    correcta: "A",
    explicacion:
      "El balance del PGC presenta primero el patrimonio neto, que no es exigible por terceros, seguido del pasivo no corriente y, en último lugar, el pasivo corriente, que es la masa más exigible al vencer a corto plazo. El criterio de ordenación es, por tanto, de menor a mayor exigibilidad.",
    porQueNoLasOtras: {
      B: "Invierte el criterio real de ordenación del modelo normalizado, que va de menor a mayor exigibilidad, no al revés.",
      C: "El orden de presentación responde a una lógica económica de exigibilidad, no a un criterio alfabético.",
      D: "El tipo de interés de cada deuda no determina en ningún caso la posición de las partidas en el modelo de balance."
    }
  },
  {
    id: "q070",
    modulo: "test",
    tema: "Balance de situación (estructura y lógica)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa presenta patrimonio neto de 400.000€, pasivo no corriente de 150.000€ y pasivo corriente de 100.000€. Si su activo no corriente es de 350.000€, ¿cuál es el importe de su activo corriente?",
    opciones: {
      A: "300.000€",
      B: "200.000€",
      C: "150.000€",
      D: "1.000.000€"
    },
    correcta: "A",
    explicacion:
      "El activo total equivale a la suma de patrimonio neto más pasivo no corriente más pasivo corriente: 400.000€ + 150.000€ + 100.000€ = 650.000€. Restando el activo no corriente (350.000€), el activo corriente es 650.000€ − 350.000€ = 300.000€.",
    porQueNoLasOtras: {
      B: "Resulta de olvidar sumar el pasivo corriente (100.000€) al calcular el pasivo total antes de restar el activo no corriente.",
      C: "Resulta de olvidar sumar el pasivo no corriente (150.000€) al calcular el pasivo total antes de restar el activo no corriente.",
      D: "Resulta de sumar el activo no corriente al total de patrimonio neto y pasivo, en lugar de restarlo, lo que invierte la operación correcta."
    }
  },
  {
    id: "q071",
    modulo: "test",
    tema: "Cuenta de pérdidas y ganancias (P&L): EBITDA, EBIT, margen bruto",
    dificultad: "básico",
    enunciado:
      "¿Cuál de las siguientes magnitudes se calcula en primer lugar, situándose jerárquicamente más arriba, en la cascada habitual de resultados de la cuenta de pérdidas y ganancias?",
    opciones: {
      A: "Resultado neto del ejercicio",
      B: "EBITDA",
      C: "Resultado financiero",
      D: "Resultado antes de impuestos"
    },
    correcta: "B",
    explicacion:
      "El EBITDA es una de las primeras magnitudes de la cascada de resultados, calculado antes de restar amortizaciones, intereses e impuestos. A partir de él se obtienen, en pasos sucesivos, el EBIT, el resultado financiero, el resultado antes de impuestos y, finalmente, el resultado neto.",
    porQueNoLasOtras: {
      A: "El resultado neto es la última magnitud de la cascada, obtenida después de restar el impuesto sobre beneficios.",
      C: "El resultado financiero se obtiene después del EBIT, restando los gastos e ingresos financieros, un paso posterior al EBITDA.",
      D: "El resultado antes de impuestos se calcula después del EBIT y del resultado financiero, justo antes del resultado neto."
    }
  },
  {
    id: "q072",
    modulo: "test",
    tema: "Cuenta de pérdidas y ganancias (P&L): EBITDA, EBIT, margen bruto",
    dificultad: "intermedio",
    enunciado:
      "Dos empresas del mismo sector tienen exactamente el mismo EBITDA, pero la Empresa X tiene mucha más deuda financiera que la Empresa Y. ¿En qué magnitud de la cascada de resultados se reflejará principalmente esta diferencia?",
    opciones: {
      A: "En el EBITDA, que será distinto en ambas empresas por su diferente nivel de endeudamiento",
      B: "En el resultado financiero y, en consecuencia, en el resultado antes de impuestos y en el resultado neto, que serán peores en la Empresa X por sus mayores gastos financieros",
      C: "En el margen bruto de ambas empresas",
      D: "En el EBIT, que recoge directamente los gastos financieros de cada empresa"
    },
    correcta: "B",
    explicacion:
      "El EBITDA se calcula antes de los gastos financieros, por lo que no refleja la diferencia de endeudamiento entre ambas empresas. Esa diferencia aparece más abajo en la cascada, en el resultado financiero, y de ahí se traslada al resultado antes de impuestos y al resultado neto.",
    porQueNoLasOtras: {
      A: "El EBITDA es, precisamente, idéntico en ambas empresas, ya que se calcula antes de considerar los gastos financieros derivados de la deuda.",
      C: "El margen bruto se calcula incluso antes que el EBITDA y no recoge en absoluto la estructura de financiación de la empresa.",
      D: "El EBIT, igual que el EBITDA, se obtiene antes de restar los gastos financieros, por lo que tampoco refleja esa diferencia entre ambas empresas."
    }
  },
  {
    id: "q073",
    modulo: "test",
    tema: "Cuenta de pérdidas y ganancias (P&L): EBITDA, EBIT, margen bruto",
    dificultad: "avanzado",
    enunciado:
      "Una empresa presenta Ventas de 500.000€, margen bruto del 40% sobre ventas, gastos de personal de 90.000€, otros gastos de explotación de 30.000€ y amortización de 40.000€. ¿Cuál es su EBIT?",
    opciones: {
      A: "40.000€",
      B: "80.000€",
      C: "120.000€",
      D: "200.000€"
    },
    correcta: "A",
    explicacion:
      "El margen bruto es el 40% de 500.000€ = 200.000€. El EBITDA se obtiene restando a esa cifra los gastos de personal y otros gastos de explotación: 200.000€ − 90.000€ − 30.000€ = 80.000€. Finalmente, el EBIT resulta de restar la amortización al EBITDA: 80.000€ − 40.000€ = 40.000€.",
    porQueNoLasOtras: {
      B: "Corresponde al EBITDA, calculado antes de restar la amortización, un paso anterior al EBIT que pide la pregunta.",
      C: "Resulta de olvidar restar los gastos de personal del margen bruto antes de calcular el resto de magnitudes de la cascada.",
      D: "Es el margen bruto de la empresa, sin descontar ningún gasto de estructura ni la amortización del ejercicio."
    }
  },
  {
    id: "q074",
    modulo: "test",
    tema: "Principio de devengo",
    dificultad: "intermedio",
    enunciado:
      "Una empresa constructora reconoce el ingreso de un contrato de construcción a largo plazo en función del grado de avance de la obra, en lugar de esperar a su entrega final. ¿Qué principio contable justifica principalmente este tratamiento?",
    opciones: {
      A: "El principio de prudencia, que exige reconocer el ingreso lo antes posible",
      B: "El principio de devengo, porque el ingreso se va generando económicamente a medida que avanza la ejecución del contrato, con independencia del momento de facturación o cobro",
      C: "El principio de uniformidad",
      D: "El principio de importancia relativa (materialidad)"
    },
    correcta: "B",
    explicacion:
      "El reconocimiento por grado de avance refleja que el ingreso se va devengando económicamente a medida que se ejecuta la obra, con independencia de cuándo se facture o se cobre al cliente, lo que es una aplicación directa del principio de devengo.",
    porQueNoLasOtras: {
      A: "La prudencia no exige anticipar ingresos; de hecho, limita su reconocimiento a los ya efectivamente realizados.",
      C: "El principio de uniformidad exige mantener los mismos criterios de un ejercicio a otro, pero no es el que justifica, por sí mismo, el método de reconocimiento por grado de avance.",
      D: "La importancia relativa se refiere a la relevancia cuantitativa o cualitativa de una partida, no al momento en que debe reconocerse el ingreso."
    }
  },
  {
    id: "q075",
    modulo: "test",
    tema: "Principio de devengo",
    dificultad: "avanzado",
    enunciado:
      "Una empresa vende una máquina con una garantía comercial de 2 años incluida en el precio de venta. Según el principio de devengo, ¿cómo debe tratarse el coste esperado de las reparaciones cubiertas por esa garantía?",
    opciones: {
      A: "Se reconoce como gasto únicamente cuando se produce cada reparación efectiva, sin anticipar ningún importe",
      B: "Se estima el coste esperado de la garantía y se dota una provisión en el mismo ejercicio en que se reconoce el ingreso por la venta, correlacionando el gasto con el ingreso que lo origina",
      C: "Se imputa como un gasto financiero en el momento del cobro de la venta",
      D: "No se reconoce ningún gasto, al formar la garantía parte del propio precio de venta pactado"
    },
    correcta: "B",
    explicacion:
      "La garantía comercial concedida al vender el producto genera una obligación probable de incurrir en costes futuros. El devengo exige estimar y provisionar ese coste en el mismo ejercicio en que se reconoce el ingreso por la venta, para correlacionar correctamente ingresos y gastos.",
    porQueNoLasOtras: {
      A: "Esperar a cada reparación efectiva retrasaría indebidamente el reconocimiento del gasto, rompiendo la correlación que exige el devengo entre el ingreso y el gasto asociado.",
      C: "El coste de la garantía no tiene naturaleza financiera; es un gasto de explotación ligado a la obligación comercial asumida con la venta.",
      D: "La garantía sí genera una obligación probable de incurrir en costes futuros, que debe provisionarse, con independencia de que esté incluida en el precio de venta."
    }
  },
  {
    id: "q076",
    modulo: "test",
    tema: "Principio de prudencia",
    dificultad: "básico",
    enunciado: "¿Cuál de las siguientes situaciones ilustra correctamente la aplicación del principio de prudencia?",
    opciones: {
      A: "Reconocer un ingreso por una venta futura todavía no producida, porque se considera muy probable que se realice",
      B: "Dotar una provisión por un litigio en curso cuando se estima probable perderlo, aunque el importe final todavía sea incierto",
      C: "Valorar un inmovilizado material a su valor de mercado, cuando este es superior a su coste, reconociendo la plusvalía en la cuenta de pérdidas y ganancias",
      D: "No amortizar un activo mientras no presente signos de deterioro"
    },
    correcta: "B",
    explicacion:
      "La prudencia exige anticipar las pérdidas y riesgos probables en cuanto se conocen, aunque su importe final sea incierto, como ocurre al dotar una provisión por un litigio cuya pérdida se estima probable.",
    porQueNoLasOtras: {
      A: "Anticipar un ingreso todavía no realizado contradice directamente el principio de prudencia, que exige no reconocer beneficios no realizados.",
      C: "Reconocer plusvalías no realizadas en la cuenta de pérdidas y ganancias contradice la prudencia, que impide anticipar beneficios no efectivamente obtenidos.",
      D: "Confunde amortización (gasto sistemático por el uso o la obsolescencia) con deterioro (pérdida adicional de valor); no amortizar un activo incumple el devengo, no es una aplicación de la prudencia."
    }
  },
  {
    id: "q077",
    modulo: "test",
    tema: "Principio de prudencia",
    dificultad: "intermedio",
    enunciado:
      "Una empresa fabrica un producto cuyo coste de producción es de 80€/unidad, pero, debido a una caída del precio de mercado, el precio de venta estimado menos los costes necesarios para completar la venta asciende a 65€/unidad. Según el principio de prudencia, ¿a qué importe deben valorarse esas existencias al cierre del ejercicio?",
    opciones: {
      A: "A 80€/unidad, su coste de producción",
      B: "A 65€/unidad, dotando la correspondiente corrección valorativa por la diferencia con el coste, al ser el valor neto realizable inferior al coste de producción",
      C: "A 72,50€/unidad, la media aritmética entre ambos importes",
      D: "Al precio de venta estimado, sin descontar los costes necesarios para completar la venta"
    },
    correcta: "B",
    explicacion:
      "El PGC exige valorar las existencias al menor entre su coste y su valor neto realizable. Como este último (65€/unidad) es inferior al coste (80€/unidad), debe dotarse una corrección valorativa por la diferencia, en aplicación del principio de prudencia.",
    porQueNoLasOtras: {
      A: "Mantener el coste de producción sobrevaloraría el activo, ignorando que su valor neto realizable es inferior al cierre del ejercicio.",
      C: "Promediar ambos importes no corresponde a ningún criterio de valoración de existencias reconocido por el PGC.",
      D: "Ignorar los costes necesarios para completar la venta no corresponde a la definición correcta de valor neto realizable, que sí los descuenta."
    }
  },
  {
    id: "q078",
    modulo: "test",
    tema: "Amortizaciones (diferencia con depreciación de valor, método lineal)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa adquiere, el 1 de julio de 20X1, una máquina por 36.000€, con una vida útil estimada de 6 años y sin valor residual, aplicando el método lineal. ¿Cuál es la cuota de amortización que debe reconocer en el ejercicio 20X1 (que cierra a 31 de diciembre)?",
    opciones: {
      A: "6.000€",
      B: "3.000€",
      C: "36.000€",
      D: "1.000€"
    },
    correcta: "B",
    explicacion:
      "La cuota anual completa es 36.000€ / 6 años = 6.000€/año. Como la máquina solo ha estado en funcionamiento durante 6 meses de 20X1 (de julio a diciembre), debe prorratearse: 6.000€ × (6/12) = 3.000€.",
    porQueNoLasOtras: {
      A: "Corresponde a la cuota anual completa, sin prorratear por los 6 meses en que el activo ha estado realmente en funcionamiento durante 20X1.",
      C: "Imputaría la totalidad del coste del activo en un único ejercicio, lo que no corresponde en absoluto al método lineal de amortización.",
      D: "No corresponde a ningún cálculo correcto a partir de los datos de coste, vida útil y periodo de uso proporcionados."
    }
  },
  {
    id: "q079",
    modulo: "test",
    tema: "Amortizaciones (diferencia con depreciación de valor, método lineal)",
    dificultad: "avanzado",
    enunciado:
      "Una empresa amortiza un elemento de transporte aplicando un método de amortización degresiva, en el que la cuota se calcula sobre un valor contable que disminuye cada año. En comparación con el método lineal, ¿qué efecto tiene este método sobre el gasto por amortización a lo largo de la vida útil del activo?",
    opciones: {
      A: "Genera cuotas de amortización idénticas en todos los ejercicios, igual que el método lineal",
      B: "Genera cuotas de amortización decrecientes, mayores en los primeros ejercicios y menores en los últimos",
      C: "Genera cuotas de amortización crecientes, menores en los primeros ejercicios y mayores en los últimos",
      D: "Impide reconocer ninguna amortización hasta el último año de la vida útil del activo"
    },
    correcta: "B",
    explicacion:
      "Los métodos de amortización degresiva (como el de porcentaje constante sobre un valor contable decreciente) concentran una mayor parte del gasto en los primeros ejercicios de vida del activo, reduciéndose progresivamente en los ejercicios siguientes.",
    porQueNoLasOtras: {
      A: "Esa característica de cuotas constantes es precisamente la del método lineal, no la del método degresivo descrito.",
      C: "Describe el efecto contrario al que realmente produce este método, que genera cuotas decrecientes, no crecientes.",
      D: "El método degresivo reconoce amortización desde el primer ejercicio de vida del activo, de forma más intensa al principio, no solo al final."
    }
  },
  {
    id: "q080",
    modulo: "test",
    tema: "Provisiones (diferencia con pasivos contingentes)",
    dificultad: "básico",
    enunciado: "¿Cuál de los siguientes requisitos es necesario para que una empresa deba dotar una provisión según el PGC?",
    opciones: {
      A: "Que exista una obligación presente, que sea probable la salida de recursos para liquidarla y que su importe pueda estimarse de forma fiable",
      B: "Que la empresa tenga la mera intención de incurrir en un gasto futuro",
      C: "Que el riesgo esté cubierto por una compañía de seguros",
      D: "Que el importe de la obligación sea exactamente conocido desde el primer momento"
    },
    correcta: "A",
    explicacion:
      "El PGC exige tres requisitos acumulativos para dotar una provisión: que exista una obligación presente (legal o implícita), que sea probable que su liquidación origine una salida de recursos, y que el importe pueda estimarse con fiabilidad, aunque no sea exacto.",
    porQueNoLasOtras: {
      B: "Una mera intención o expectativa de gasto futuro, sin que exista todavía una obligación presente, no es suficiente para dotar una provisión.",
      C: "Que el riesgo esté asegurado no es, en sí mismo, un requisito para provisionar; de hecho, si el seguro cubre el riesgo, la obligación neta para la empresa podría no existir o ser distinta.",
      D: "Es precisamente lo contrario: la provisión se caracteriza por la incertidumbre sobre su importe exacto, que se estima, no se conoce con precisión desde el principio."
    }
  },
  {
    id: "q081",
    modulo: "test",
    tema: "Provisiones (diferencia con pasivos contingentes)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa fabricante concede garantías comerciales a sus clientes y, basándose en su experiencia histórica, estima que un 2% de sus ventas anuales generará costes de reparación en garantía. ¿Cómo debe reflejar contablemente esta obligación?",
    opciones: {
      A: "No reconoce nada hasta que un cliente reclame efectivamente una reparación concreta",
      B: "Dota una provisión para garantías, estimada a partir de la experiencia histórica, en el mismo ejercicio en que se registran las ventas que generan esa obligación",
      C: "Reconoce el gasto solo cuando repara efectivamente un producto, con cargo directo a tesorería",
      D: "Reduce directamente el importe de las ventas reconocidas en el ejercicio"
    },
    correcta: "B",
    explicacion:
      "La experiencia histórica permite estimar con fiabilidad la obligación de garantía asociada a las ventas del ejercicio. Por tanto, debe dotarse una provisión en el mismo ejercicio en que se reconocen esas ventas, en aplicación del devengo y de la prudencia.",
    porQueNoLasOtras: {
      A: "Esperar a la reclamación efectiva incumple la obligación de reconocer la provisión cuando ya es probable y estimable con los datos históricos disponibles.",
      C: "Imputar el gasto solo al reparar cada unidad retrasa indebidamente el reconocimiento de una obligación que ya era probable en el momento de la venta.",
      D: "La garantía no es una minoración del ingreso por ventas, sino un gasto de explotación distinto, ligado a la obligación futura de reparación."
    }
  },
  {
    id: "q082",
    modulo: "test",
    tema: "Deterioros (de clientes, de existencias, de inmovilizado)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa posee un inmovilizado material con un valor en libros de 200.000€. Al cierre del ejercicio estima que su valor razonable menos los costes de venta es de 150.000€ y que su valor en uso (valor actual de los flujos de caja futuros que generará) es de 170.000€. ¿Qué importe de deterioro debe reconocer?",
    opciones: {
      A: "50.000€",
      B: "30.000€",
      C: "0€, porque el valor en uso supera al valor razonable menos costes de venta",
      D: "20.000€"
    },
    correcta: "B",
    explicacion:
      "El valor recuperable es el mayor entre el valor razonable menos costes de venta (150.000€) y el valor en uso (170.000€), es decir, 170.000€. El deterioro es la diferencia entre el valor en libros y el valor recuperable: 200.000€ − 170.000€ = 30.000€.",
    porQueNoLasOtras: {
      A: "Resulta de comparar el valor en libros con el valor razonable menos costes de venta (150.000€), en lugar de con el valor recuperable correcto (el mayor de los dos, 170.000€).",
      C: "Ignora que, aunque el valor en uso sea el mayor de los dos valores, sigue siendo inferior al valor en libros, por lo que sí existe deterioro.",
      D: "No corresponde a ningún cálculo correcto a partir de los datos de valor en libros, valor razonable y valor en uso proporcionados."
    }
  },
  {
    id: "q083",
    modulo: "test",
    tema: "Deterioros (de clientes, de existencias, de inmovilizado)",
    dificultad: "avanzado",
    enunciado:
      "Una empresa dotó en el ejercicio 20X1 un deterioro de valor de 40.000€ sobre un inmovilizado material. En 20X2, debido a una mejora de las circunstancias, el valor recuperable del activo aumenta y supera su valor en libros (ya deteriorado). ¿Qué debe hacer la empresa, dentro de los límites que establece el PGC?",
    opciones: {
      A: "Mantener el deterioro indefinidamente, ya que las correcciones valorativas por deterioro nunca pueden revertirse",
      B: "Revertir el deterioro hasta el límite del valor en libros que el activo habría tenido, neto de la amortización que le hubiera correspondido de no haberse reconocido el deterioro en su día, imputando el ingreso correspondiente en la cuenta de pérdidas y ganancias",
      C: "Revertir el deterioro sin ningún límite, hasta alcanzar el nuevo valor recuperable, aunque sea superior al coste original del activo",
      D: "Revertir el deterioro directamente contra reservas, sin que afecte al resultado del ejercicio"
    },
    correcta: "B",
    explicacion:
      "El PGC permite revertir el deterioro del inmovilizado material cuando las circunstancias que lo originaron han cambiado, pero fija un límite: la reversión no puede superar el valor en libros que el activo habría tenido, neto de la amortización correspondiente, de no haberse deteriorado nunca.",
    porQueNoLasOtras: {
      A: "El PGC sí permite revertir el deterioro del inmovilizado material cuando las circunstancias que lo motivaron han dejado de existir o se han atenuado, a diferencia de lo que ocurre con el fondo de comercio.",
      C: "La reversión tiene un límite expreso: nunca puede superar el valor que el activo habría tenido, neto de amortización, si no se hubiera deteriorado.",
      D: "La reversión del deterioro se reconoce como un ingreso en la cuenta de pérdidas y ganancias del ejercicio, no directamente contra reservas."
    }
  },
  {
    id: "q084",
    modulo: "test",
    tema: "Periodificaciones (activas y pasivas)",
    dificultad: "básico",
    enunciado: "¿Cuál de las siguientes situaciones corresponde a una periodificación activa (gasto anticipado)?",
    opciones: {
      A: "Una empresa cobra por adelantado una cuota de suscripción anual a sus clientes",
      B: "Una empresa paga en diciembre una prima de seguro que cubre también varios meses del ejercicio siguiente",
      C: "Una empresa recibe un servicio ya prestado por un proveedor, pendiente todavía de la factura",
      D: "Una empresa concede un préstamo a largo plazo a otra sociedad"
    },
    correcta: "B",
    explicacion:
      "Cuando una empresa paga por adelantado un gasto que cubre, en parte, periodos futuros, la parte no devengada debe periodificarse como gasto anticipado (activo), reconociéndose como gasto a medida que transcurre el periodo cubierto.",
    porQueNoLasOtras: {
      A: "Ese caso corresponde a una periodificación pasiva (ingreso anticipado), al ser la propia empresa quien cobra por adelantado, no quien paga.",
      C: "Ese supuesto corresponde a una factura pendiente de recibir (cuenta 4109), no a la periodificación de un gasto ya pagado por adelantado.",
      D: "La concesión de un préstamo a largo plazo es una operación de inversión financiera, sin relación con la periodificación de gastos o ingresos."
    }
  },
  {
    id: "q085",
    modulo: "test",
    tema: "Periodificaciones (activas y pasivas)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa contrata y paga por adelantado, el 1 de octubre de 20X1, una campaña de publicidad que se ejecutará de forma uniforme entre octubre de 20X1 y marzo de 20X2 (6 meses), por un importe total de 12.000€. ¿Qué importe debe figurar como \"Gastos anticipados\" (periodificación activa) al cierre del ejercicio 20X1?",
    opciones: {
      A: "12.000€, el importe total pagado",
      B: "6.000€, correspondientes a los 3 meses de 20X2 todavía no transcurridos (enero, febrero y marzo)",
      C: "0€, porque el pago ya se realizó íntegramente en 20X1",
      D: "9.000€"
    },
    correcta: "B",
    explicacion:
      "La campaña cubre 6 meses a razón de 2.000€/mes. De octubre a diciembre de 20X1 (3 meses) ya se ha devengado el gasto (6.000€); los 3 meses restantes de 20X2 (enero a marzo) todavía no se han devengado y deben periodificarse como gasto anticipado por 6.000€.",
    porQueNoLasOtras: {
      A: "Imputaría como gasto anticipado la totalidad del importe pagado, ignorando que la mitad del servicio ya se ha consumido durante 20X1.",
      C: "Ignora que una parte relevante del servicio contratado (los 3 meses de 20X2) todavía no se ha ejecutado al cierre del ejercicio.",
      D: "No corresponde al reparto proporcional correcto entre los 3 meses ya transcurridos y los 3 meses todavía pendientes de la campaña."
    }
  },
  {
    id: "q086",
    modulo: "test",
    tema: "Facturas pendientes de recibir (cuenta 4109/410)",
    dificultad: "básico",
    enunciado: "¿Qué diferencia principal existe entre la cuenta 400 \"Proveedores\" y la cuenta 4109 \"Facturas pendientes de recibir\"?",
    opciones: {
      A: "No hay ninguna diferencia; ambas se utilizan indistintamente para cualquier deuda comercial",
      B: "La cuenta 400 registra deudas por compras o servicios ya facturados por el proveedor, mientras que la 4109 registra compras o servicios ya recibidos al cierre del ejercicio, pero de los que todavía no se dispone de la factura correspondiente",
      C: "La cuenta 400 solo se utiliza para proveedores extranjeros",
      D: "La cuenta 4109 solo se utiliza para registrar anticipos entregados a proveedores"
    },
    correcta: "B",
    explicacion:
      "La cuenta 400 recoge deudas comerciales ya formalizadas mediante factura, mientras que la cuenta 4109 permite reconocer el gasto o la compra ya recibidos al cierre, respetando el devengo, aunque todavía falte el documento (factura) del proveedor.",
    porQueNoLasOtras: {
      A: "Son cuentas distintas que reflejan una situación documental diferente (factura recibida o no); no son intercambiables entre sí.",
      C: "La cuenta 400 se utiliza para proveedores en general, nacionales o extranjeros, sin que exista esa distinción geográfica.",
      D: "Los anticipos entregados a proveedores se registran en cuentas específicas del grupo 40 (como la 407), no en la 4109, que recoge gastos ya recibidos sin factura."
    }
  },
  {
    id: "q087",
    modulo: "test",
    tema: "Facturas pendientes de recibir (cuenta 4109/410)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa recibe en diciembre de 20X1 el suministro eléctrico correspondiente a ese mes, pero la compañía suministradora no emite la factura hasta mediados de enero de 20X2, por un importe estimado de 2.000€ más IVA. Al cierre de 20X1, ¿qué asiento refleja correctamente el registro de este gasto devengado?",
    opciones: {
      A: "Debe (628) Suministros, por 2.420€ (incluyendo el IVA) / Haber (4109) Facturas pendientes de recibir",
      B: "Debe (628) Suministros, por 2.000€ / Haber (4109) Facturas pendientes de recibir, sin registrar todavía el IVA, pendiente de la recepción de la factura",
      C: "Debe (4109) Facturas pendientes de recibir / Haber (628) Suministros",
      D: "No se registra ningún asiento hasta recibir la factura, por aplicación del principio de prudencia"
    },
    correcta: "B",
    explicacion:
      "El gasto por el suministro ya consumido debe reconocerse en 20X1 por su importe sin IVA, con cargo a la cuenta de gasto correspondiente y abono a la cuenta 4109. El IVA soportado no puede registrarse ni deducirse sin factura, al ser esta un requisito formal imprescindible.",
    porQueNoLasOtras: {
      A: "Incluir el IVA en el asiento de devengo sería incorrecto, ya que el IVA soportado no puede registrarse ni deducirse sin la factura correspondiente.",
      C: "Invierte el debe y el haber del asiento correcto, lo que no refleja el reconocimiento de un gasto, sino, en su caso, su anulación.",
      D: "No registrar nada incumpliría el principio de devengo, que exige reconocer el gasto en el ejercicio en que se recibe el suministro, con independencia de la factura."
    }
  },
  {
    id: "q088",
    modulo: "test",
    tema: "Facturas pendientes de emitir (cuenta 4430/700 con periodificación)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa de consultoría presta un servicio a un cliente en diciembre de 20X1, pero debido a un acuerdo de facturación mensual consolidada no emite la factura correspondiente hasta enero de 20X2, por importe de 8.000€ más IVA. ¿Cómo debe tratarse el IVA repercutido de esta operación al cierre del ejercicio 20X1?",
    opciones: {
      A: "Se registra el IVA repercutido en la cuenta 477 ya en 20X1, junto con el reconocimiento del ingreso",
      B: "No se registra el IVA repercutido en 20X1, ya que su devengo (y la obligación de repercutirlo) sigue sus propias reglas, ligadas a la emisión de la factura o al plazo legal para expedirla, mientras que el ingreso contable sí se reconoce en 20X1 por el servicio ya prestado",
      C: "El IVA no se repercute nunca en operaciones realizadas entre empresas",
      D: "El ingreso contable tampoco se reconoce en 20X1, igual que ocurre con el IVA"
    },
    correcta: "B",
    explicacion:
      "El devengo contable del ingreso (ligado a la prestación efectiva del servicio) y el devengo del IVA (ligado, con carácter general, a la expedición de la factura o a su plazo legal) siguen reglas distintas, por lo que el ingreso se reconoce en 20X1 sin que ello implique registrar también el IVA repercutido en ese ejercicio.",
    porQueNoLasOtras: {
      A: "El IVA sigue sus propias reglas de devengo, distintas de las del devengo contable del ingreso, por lo que no debe registrarse conjuntamente con este sin más.",
      C: "El IVA se repercute, con carácter general, en las operaciones sujetas y no exentas, también entre empresas (operaciones B2B).",
      D: "El ingreso contable sí debe reconocerse en 20X1, conforme al devengo, aunque el IVA siga sus propias reglas de devengo, distintas de las contables."
    }
  },
  {
    id: "q089",
    modulo: "test",
    tema: "Facturas pendientes de emitir (cuenta 4430/700 con periodificación)",
    dificultad: "avanzado",
    enunciado:
      "Al cierre del ejercicio, una empresa constructora ha completado el 30% de una obra bajo un contrato valorado en 1.000.000€, reconociendo el ingreso correspondiente por el grado de avance, aunque todavía no ha emitido ninguna factura al cliente. ¿Qué cuenta debe utilizar como contrapartida del ingreso reconocido, a falta de facturación?",
    opciones: {
      A: "430 Clientes, como si la factura ya se hubiera emitido al cliente",
      B: "4430 Clientes, facturas pendientes de formalizar, reflejando el derecho de cobro surgido por el servicio ya prestado (el avance de obra) pendiente de facturar",
      C: "477 Hacienda Pública, IVA repercutido",
      D: "485 Ingresos anticipados"
    },
    correcta: "B",
    explicacion:
      "La cuenta 4430 refleja el derecho de cobro derivado de un ingreso ya devengado (por el grado de avance de la obra) que todavía no se ha formalizado mediante factura, permitiendo reconocer correctamente el ingreso conforme al devengo.",
    porQueNoLasOtras: {
      A: "La cuenta 430 se reserva para créditos ya formalizados mediante factura; mientras no se facture, procede utilizar la cuenta específica 4430.",
      C: "El IVA repercutido no es la contrapartida del ingreso reconocido por devengo contable, sino una cuenta ligada al devengo específico y propio del impuesto.",
      D: "La cuenta 485 (ingresos anticipados) es una periodificación pasiva para cobros ya recibidos pendientes de devengar, situación contraria a la descrita, en la que el servicio ya se ha devengado pero no se ha cobrado ni facturado."
    }
  },
  {
    id: "q090",
    modulo: "test",
    tema: "IVA soportado e IVA repercutido (472, 477, liquidación)",
    dificultad: "básico",
    enunciado: "El IVA repercutido a los clientes en las ventas se registra en la cuenta...",
    opciones: {
      A: "472 Hacienda Pública, IVA soportado",
      B: "477 Hacienda Pública, IVA repercutido",
      C: "430 Clientes",
      D: "600 Compras de mercaderías"
    },
    correcta: "B",
    explicacion:
      "La cuenta 477 recoge el IVA que la empresa repercute (cobra) a sus clientes en sus ventas, que posteriormente se liquida con la Hacienda Pública deduciendo el IVA soportado deducible.",
    porQueNoLasOtras: {
      A: "La cuenta 472 refleja el IVA que la empresa soporta en sus compras, no el que repercute en sus ventas a clientes.",
      C: "La cuenta 430 refleja el derecho de cobro total frente al cliente, incluido el IVA, pero no desglosa de forma específica el IVA repercutido en sí mismo.",
      D: "La cuenta 600 registra el coste de las mercaderías adquiridas por la empresa, sin ninguna relación con el IVA de sus ventas."
    }
  },
  {
    id: "q091",
    modulo: "test",
    tema: "IVA soportado e IVA repercutido (472, 477, liquidación)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa adquiere un inmovilizado material de uso exclusivo en su actividad, sujeta a IVA, por 20.000€ más 4.200€ de IVA (21%). Suponiendo que el IVA es totalmente deducible, ¿cómo debe contabilizarse la adquisición?",
    opciones: {
      A: "Se registra el inmovilizado por 24.200€, incluyendo el importe del IVA en su valor contable",
      B: "Se registra el inmovilizado por 20.000€ y el IVA soportado deducible de 4.200€ de forma separada en la cuenta 472, sin que el IVA forme parte del valor del activo",
      C: "El IVA se registra directamente como un gasto del ejercicio en la cuenta de pérdidas y ganancias",
      D: "El IVA se registra como un ingreso financiero del ejercicio"
    },
    correcta: "B",
    explicacion:
      "Cuando el IVA soportado es deducible, no forma parte del valor del activo adquirido, ya que no constituye un coste definitivo para la empresa; se registra de forma separada en la cuenta 472, como un derecho frente a la Hacienda Pública.",
    porQueNoLasOtras: {
      A: "Incluir el IVA deducible en el valor del activo sobrevaloraría el inmovilizado, ya que ese importe no supone un coste definitivo para la empresa.",
      C: "El IVA deducible no es un gasto de la cuenta de pérdidas y ganancias; se registra como un activo frente a la Hacienda Pública hasta su compensación en la liquidación periódica.",
      D: "El IVA soportado deducible no constituye en ningún caso un ingreso para la empresa que lo soporta."
    }
  },
  {
    id: "q092",
    modulo: "test",
    tema: "IVA soportado e IVA repercutido (472, 477, liquidación)",
    dificultad: "avanzado",
    enunciado:
      "Una empresa adquiere un vehículo de uso mixto (profesional y particular) y, conforme a la normativa del IVA, solo puede deducirse el 50% del IVA soportado en la compra. El precio del vehículo es de 30.000€ más 6.300€ de IVA (21%). ¿Cómo debe tratarse contablemente la parte del IVA no deducible (3.150€)?",
    opciones: {
      A: "Se registra íntegramente en la cuenta 472 como IVA soportado deducible",
      B: "Se incorpora al valor de adquisición del inmovilizado (vehículo), ya que la parte de IVA no deducible constituye un mayor coste del activo para la empresa",
      C: "Se registra como un gasto financiero del ejercicio",
      D: "Se solicita directamente su devolución a la Hacienda Pública, al margen de la liquidación periódica de IVA"
    },
    correcta: "B",
    explicacion:
      "La parte del IVA que no resulta deducible, al no poder compensarse ni recuperarse frente a la Hacienda Pública, constituye un mayor coste del activo adquirido y debe incorporarse a su valor de adquisición.",
    porQueNoLasOtras: {
      A: "Solo la parte efectivamente deducible (en este caso, el 50% del IVA soportado) puede registrarse en la cuenta 472 como IVA soportado deducible.",
      C: "El IVA no deducible no tiene naturaleza de gasto financiero; forma parte del coste del elemento de inmovilizado adquirido.",
      D: "El IVA no deducible no es recuperable frente a la Hacienda Pública, ni mediante la liquidación periódica ni por ninguna vía de devolución directa."
    }
  },
  {
    id: "q093",
    modulo: "test",
    tema: "Hechos posteriores al cierre (de ajuste vs de información)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa cierra su ejercicio a 31 de diciembre de 20X1. En marzo de 20X2, antes de la formulación de las cuentas, se produce un incendio fortuito en una de sus naves industriales, destruyendo parte de sus existencias, sin que existiera ningún indicio de ese riesgo antes del cierre. ¿Cómo debe tratarse este hecho?",
    opciones: {
      A: "Como un hecho posterior de ajuste, modificando el valor de las existencias en las cuentas de 20X1",
      B: "Como un hecho posterior de mera información, que se revela en la memoria de las cuentas anuales de 20X1 sin modificar los importes ya reconocidos, dado que la causa (el incendio) es posterior al cierre y no existía a esa fecha",
      C: "No se informa de nada en las cuentas anuales, al haber ocurrido después del cierre del ejercicio",
      D: "Se registra como una pérdida en el propio ejercicio 20X1, imputándola directamente a reservas"
    },
    correcta: "B",
    explicacion:
      "Al no existir indicios del riesgo antes del cierre, el incendio no confirma ninguna condición previa, sino que es un hecho nuevo surgido después de la fecha de cierre. Por tanto, es un hecho posterior de mera información, que no modifica las cuentas de 20X1 pero debe revelarse en la memoria si es relevante.",
    porQueNoLasOtras: {
      A: "No es un hecho de ajuste, porque su causa (el incendio) no existía ni era previsible a la fecha de cierre; por tanto, no debe modificar los importes de 20X1.",
      C: "Aunque no modifique las cuentas, un hecho posterior significativo como este debe revelarse en la memoria si resulta relevante para la comprensión de la situación de la empresa.",
      D: "No corresponde registrar la pérdida en el ejercicio 20X1 ni imputarla a reservas, ya que el hecho es posterior al cierre y ajeno a las condiciones existentes en esa fecha."
    }
  },
  {
    id: "q094",
    modulo: "test",
    tema: "Hechos posteriores al cierre (de ajuste vs de información)",
    dificultad: "avanzado",
    enunciado:
      "Entre la fecha de cierre y la fecha de formulación de las cuentas anuales, los administradores de una sociedad deciden iniciar un proceso de liquidación de la empresa, al no existir ya ninguna alternativa viable de continuidad. ¿Qué efecto tiene este hecho posterior sobre las cuentas anuales del ejercicio que se cierra?",
    opciones: {
      A: "Ninguno; se limita a mencionarse en la memoria como hecho posterior, sin ningún otro efecto",
      B: "Obliga a replantear la aplicación del principio de empresa en funcionamiento y, en consecuencia, a valorar los activos y pasivos conforme a criterios distintos (valores de liquidación) en las propias cuentas del ejercicio que se cierra, aunque la decisión se haya tomado después del cierre",
      C: "Solo afecta a las cuentas del ejercicio siguiente, nunca a las del ejercicio ya cerrado",
      D: "No tiene ningún efecto contable, al tratarse de una decisión de gestión y no de un hecho contable en sí mismo"
    },
    correcta: "B",
    explicacion:
      "La pérdida del principio de empresa en funcionamiento es un hecho posterior de especial relevancia que cuestiona la base misma sobre la que se han preparado los criterios de valoración, por lo que exige revisar esos criterios en las propias cuentas del ejercicio que se cierra, no limitarse a mencionarlo en la memoria.",
    porQueNoLasOtras: {
      A: "La pérdida del principio de empresa en funcionamiento exige revisar los criterios de valoración aplicados en las propias cuentas del ejercicio cerrado, no solo mencionarlo en la memoria.",
      C: "Precisamente porque afecta a la validez del principio de empresa en funcionamiento, sus efectos alcanzan a las cuentas del ejercicio que se está formulando, no solo a las futuras.",
      D: "Es un hecho con relevancia contable directa, ya que cuestiona la base misma (empresa en funcionamiento) sobre la que se han preparado los criterios de valoración de las cuentas."
    }
  },
  {
    id: "q095",
    modulo: "test",
    tema: "Fondo de maniobra / Working Capital",
    dificultad: "básico",
    enunciado: "Si el activo corriente de una empresa es exactamente igual a su pasivo corriente, su fondo de maniobra es...",
    opciones: {
      A: "Positivo",
      B: "Negativo",
      C: "Igual a cero",
      D: "Igual al patrimonio neto de la empresa"
    },
    correcta: "C",
    explicacion:
      "El fondo de maniobra se calcula como activo corriente menos pasivo corriente. Si ambas magnitudes son iguales, su diferencia es cero, lo que indica que el activo corriente cubre exactamente las obligaciones a corto plazo, sin margen adicional.",
    porQueNoLasOtras: {
      A: "Un fondo de maniobra positivo exigiría que el activo corriente fuese superior al pasivo corriente, no igual a él.",
      B: "Un fondo de maniobra negativo exigiría que el pasivo corriente fuese superior al activo corriente, no igual a él.",
      D: "El fondo de maniobra se calcula a partir de las masas corrientes del balance, sin relación directa y necesaria con el importe del patrimonio neto."
    }
  },
  {
    id: "q096",
    modulo: "test",
    tema: "Fondo de maniobra / Working Capital",
    dificultad: "intermedio",
    enunciado:
      "Una empresa decide financiar la compra de una nueva maquinaria (activo no corriente) íntegramente con un préstamo bancario a corto plazo (pasivo corriente). ¿Qué efecto tiene esta decisión sobre su fondo de maniobra?",
    opciones: {
      A: "No tiene ningún efecto sobre el fondo de maniobra de la empresa",
      B: "Empeora (reduce) el fondo de maniobra, ya que aumenta el pasivo corriente sin que aumente el activo corriente, lo que puede generar un desequilibrio al financiar un activo a largo plazo con recursos exigibles a corto plazo",
      C: "Mejora (aumenta) el fondo de maniobra de la empresa",
      D: "El fondo de maniobra solo se vería afectado si el préstamo fuese a largo plazo"
    },
    correcta: "B",
    explicacion:
      "Al tratarse de un préstamo a corto plazo, su importe se clasifica como pasivo corriente, mientras que la maquinaria adquirida se clasifica como activo no corriente. El pasivo corriente aumenta sin que lo haga el activo corriente, lo que reduce el fondo de maniobra y puede generar un desequilibrio financiero.",
    porQueNoLasOtras: {
      A: "Sí tiene un efecto directo, ya que la decisión modifica una de las dos masas que componen el fondo de maniobra (el pasivo corriente).",
      C: "Es el efecto contrario al real: el fondo de maniobra se reduce, no mejora, al aumentar el pasivo corriente sin ninguna contrapartida en el activo corriente.",
      D: "Es precisamente lo contrario: si el préstamo fuese a largo plazo, no afectaría al pasivo corriente y el fondo de maniobra no se vería perjudicado; el problema surge justamente porque es a corto plazo."
    }
  },
  {
    id: "q097",
    modulo: "test",
    tema: "Diferencias entre beneficio y flujo de caja (por qué una empresa rentable puede tener problemas de caja)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa reconoce en su cuenta de pérdidas y ganancias un gasto de 50.000€ por amortización del inmovilizado. ¿Qué efecto tiene este gasto sobre la tesorería del ejercicio en que se reconoce?",
    opciones: {
      A: "Reduce la tesorería en 50.000€, igual que cualquier otro gasto del ejercicio",
      B: "No tiene ningún efecto directo sobre la tesorería del ejercicio, ya que la amortización es un gasto contable que no implica una salida de caja en el momento de su reconocimiento",
      C: "Aumenta la tesorería de la empresa en 50.000€",
      D: "Solo afecta a la tesorería si la empresa tiene pérdidas en el ejercicio"
    },
    correcta: "B",
    explicacion:
      "La amortización es un gasto no monetario: el desembolso de caja asociado al activo ya se produjo (o se producirá, según su forma de pago) en el momento de su adquisición, no en el momento en que se reconoce el gasto por amortización en cada ejercicio.",
    porQueNoLasOtras: {
      A: "A diferencia de otros gastos (como los de personal o los suministros), la amortización no implica una salida de caja en el ejercicio en que se reconoce.",
      C: "La amortización no genera ninguna entrada de caja; es un gasto contable, no un ingreso para la empresa.",
      D: "El carácter no monetario de la amortización es independiente de que la empresa obtenga beneficios o pérdidas en el ejercicio."
    }
  },
  {
    id: "q098",
    modulo: "test",
    tema: "Diferencias entre beneficio y flujo de caja (por qué una empresa rentable puede tener problemas de caja)",
    dificultad: "avanzado",
    enunciado:
      "Una empresa presenta un resultado neto positivo de 100.000€ en el ejercicio. Durante ese mismo ejercicio, su saldo de clientes aumenta en 60.000€, su saldo de existencias aumenta en 30.000€ y su saldo de proveedores aumenta en 20.000€, sin que se hayan producido otras variaciones relevantes de circulante ni inversiones. ¿Cuál es, aproximadamente, el flujo de caja generado por las operaciones del ejercicio?",
    opciones: {
      A: "30.000€",
      B: "100.000€",
      C: "210.000€",
      D: "−10.000€"
    },
    correcta: "A",
    explicacion:
      "Partiendo del resultado neto (100.000€), se restan los aumentos de clientes y existencias, que consumen tesorería (60.000€ y 30.000€), y se suma el aumento de proveedores, que la libera (20.000€): 100.000€ − 60.000€ − 30.000€ + 20.000€ = 30.000€.",
    porQueNoLasOtras: {
      B: "Coincide con el resultado neto, pero ignora el efecto de los aumentos de clientes y existencias (que consumen caja) y del aumento de proveedores (que la libera).",
      C: "Resulta de sumar todas las variaciones entre sí, en lugar de restar los aumentos de activos corrientes (clientes y existencias), que consumen tesorería.",
      D: "No corresponde al cálculo correcto; subestima el flujo de caja generado al no partir adecuadamente del resultado neto positivo del ejercicio."
    }
  },
  {
    id: "q099",
    modulo: "test",
    tema: "Existencias (valoración, método FIFO/PMP, obsolescencia)",
    dificultad: "básico",
    enunciado:
      "¿En qué cuenta del grupo 3 del PGC se registran, con carácter general, las existencias de mercaderías adquiridas para su venta sin transformación?",
    opciones: {
      A: "300 Mercaderías",
      B: "601 Compras de materias primas",
      C: "430 Clientes",
      D: "570 Caja, euros"
    },
    correcta: "A",
    explicacion:
      "La cuenta 300 \"Mercaderías\", dentro del grupo 3 (existencias), recoge el valor de los bienes adquiridos por la empresa para su venta posterior sin someterlos a ningún proceso de transformación.",
    porQueNoLasOtras: {
      B: "La cuenta 601 pertenece al grupo 6 (compras y gastos) y refleja el gasto por la compra de materias primas, no el saldo de existencias del grupo 3.",
      C: "La cuenta 430 refleja el derecho de cobro frente a clientes, sin ninguna relación con la valoración de las existencias de la empresa.",
      D: "La cuenta 570 refleja la tesorería en efectivo de la empresa, sin ninguna relación con las existencias que posee."
    }
  },
  {
    id: "q100",
    modulo: "test",
    tema: "Existencias (valoración, método FIFO/PMP, obsolescencia)",
    dificultad: "intermedio",
    enunciado:
      "Al cierre del ejercicio, una empresa compara el valor contable de sus existencias (100.000€, a coste) con su valor neto realizable (95.000€) y dota la correspondiente corrección valorativa. En el ejercicio siguiente, debido a una recuperación del mercado, el valor neto realizable vuelve a superar el coste original. ¿Qué debe hacer la empresa con la corrección valorativa dotada el ejercicio anterior?",
    opciones: {
      A: "Mantenerla indefinidamente, ya que las correcciones de valor de las existencias nunca pueden revertirse",
      B: "Revertirla, reconociendo un ingreso hasta el límite del coste original, ya que las circunstancias que motivaron la corrección han dejado de existir",
      C: "Trasladarla directamente a reservas, sin que afecte al resultado del ejercicio",
      D: "Aumentarla, duplicando el importe inicialmente dotado"
    },
    correcta: "B",
    explicacion:
      "A diferencia de otras partidas (como el fondo de comercio), las correcciones valorativas de existencias sí pueden revertirse cuando las circunstancias que las originaron desaparecen, reconociendo el correspondiente ingreso, con el límite del coste original de las existencias.",
    porQueNoLasOtras: {
      A: "El PGC sí permite revertir las correcciones valorativas de existencias cuando desaparecen las circunstancias que las motivaron.",
      C: "La reversión se reconoce como un ingreso en la cuenta de pérdidas y ganancias del ejercicio, no se traslada directamente a reservas.",
      D: "No hay ningún motivo para aumentar la corrección valorativa cuando la situación de mercado ha mejorado; al contrario, procede reducirla o revertirla."
    }
  },
  {
    id: "q101",
    modulo: "test",
    tema: "Existencias (valoración, método FIFO/PMP, obsolescencia)",
    dificultad: "avanzado",
    enunciado:
      "Una empresa utiliza el método FIFO para valorar sus existencias. Compra 50 unidades a 8€/unidad y, posteriormente, 50 unidades más a 12€/unidad. Al cierre del ejercicio, tras haber vendido 60 unidades, quedan 40 unidades en el almacén. ¿A qué coste unitario deben valorarse esas 40 unidades existentes según FIFO?",
    opciones: {
      A: "8€/unidad",
      B: "12€/unidad, ya que las primeras 50 unidades compradas (a 8€) se consideran vendidas en primer lugar, quedando en almacén unidades de la compra más reciente",
      C: "10€/unidad, el promedio simple de ambos precios unitarios",
      D: "20€/unidad, la suma de ambos precios unitarios"
    },
    correcta: "B",
    explicacion:
      "Según FIFO, las primeras unidades en entrar son las primeras en salir: de las 60 unidades vendidas, las primeras 50 corresponden a la primera compra (a 8€) y las 10 restantes a la segunda compra (a 12€). Las 40 unidades que quedan en almacén pertenecen, por tanto, íntegramente a la compra más reciente, a 12€/unidad.",
    porQueNoLasOtras: {
      A: "Aplicaría el precio de la primera compra a unidades que, según la lógica FIFO, ya se han vendido en su totalidad (las 50 primeras unidades).",
      C: "El promedio simple corresponde a una lógica distinta (más próxima, aunque no idéntica, al Precio Medio Ponderado), no al método FIFO.",
      D: "Sumar ambos precios unitarios no corresponde a ningún criterio de valoración de existencias reconocido por el PGC."
    }
  },
  {
    id: "q102",
    modulo: "test",
    tema: "Clientes y proveedores (gestión del circulante)",
    dificultad: "básico",
    enunciado: "El plazo medio de pago a proveedores (PMP) mide...",
    opciones: {
      A: "El tiempo medio que tarda la empresa en cobrar de sus clientes",
      B: "El tiempo medio que tarda la empresa en pagar a sus proveedores desde que recibe la mercancía o el servicio",
      C: "El tiempo medio de permanencia de las existencias en el almacén",
      D: "El tiempo medio de vida útil de las deudas financieras de la empresa"
    },
    correcta: "B",
    explicacion:
      "El plazo medio de pago a proveedores es un ratio de gestión del circulante que indica, en promedio, cuántos días tarda la empresa en pagar las compras o servicios recibidos a crédito de sus proveedores.",
    porQueNoLasOtras: {
      A: "Eso corresponde al plazo medio de cobro a clientes (PMC), el ratio inverso dentro del análisis del circulante.",
      C: "Ese concepto corresponde a la rotación o al periodo medio de almacenamiento de existencias, no al plazo de pago a proveedores.",
      D: "La vida útil o el plazo de las deudas financieras es un concepto distinto, relacionado con la financiación a largo plazo, no con el circulante comercial de proveedores."
    }
  },
  {
    id: "q103",
    modulo: "test",
    tema: "Clientes y proveedores (gestión del circulante)",
    dificultad: "intermedio",
    enunciado:
      "Una empresa detecta que su plazo medio de cobro a clientes se ha incrementado notablemente respecto al ejercicio anterior, sin que haya modificado su política comercial de forma deliberada. ¿Qué riesgo contable y financiero puede estar asociado a este incremento?",
    opciones: {
      A: "Ninguno; un mayor plazo de cobro es siempre positivo para la empresa",
      B: "Puede indicar un deterioro en la calidad de la cartera de clientes (mayor riesgo de impago), lo que debería llevar a revisar la necesidad de dotar correcciones valorativas por deterioro de créditos comerciales, además de tensionar la tesorería",
      C: "Mejora automáticamente el fondo de maniobra de la empresa",
      D: "Reduce automáticamente el EBITDA de la empresa"
    },
    correcta: "B",
    explicacion:
      "Un alargamiento no deseado del plazo de cobro suele ser una señal de alerta: puede anticipar problemas de recuperación de los créditos comerciales, lo que obliga a revisar si procede dotar correcciones valorativas por deterioro, además de generar tensiones adicionales de tesorería.",
    porQueNoLasOtras: {
      A: "Un alargamiento no deseado del plazo de cobro suele ser una señal de alerta, no un hecho positivo, ya que retrasa la conversión de ventas en caja y puede anticipar problemas de cobro.",
      C: "Aunque el saldo de clientes (activo corriente) aumente, ese incremento no constituye en sí mismo una mejora real de la posición financiera, sino un síntoma de peor gestión del circulante o de mayor riesgo de impago.",
      D: "El EBITDA se calcula por devengo y no se ve directamente afectado por el momento en que efectivamente se cobra a los clientes."
    }
  },
  {
    id: "q104",
    modulo: "test",
    tema: "Deudas financieras (corto vs largo plazo, clasificación correcta)",
    dificultad: "básico",
    enunciado: "¿Cuál de las siguientes partidas corresponde a una deuda financiera de la empresa?",
    opciones: {
      A: "Un préstamo concedido por una entidad de crédito",
      B: "El saldo pendiente de pago a los proveedores habituales de mercaderías",
      C: "El IVA repercutido pendiente de liquidar con Hacienda",
      D: "Los salarios pendientes de pago al personal del propio mes"
    },
    correcta: "A",
    explicacion:
      "Un préstamo concedido por una entidad de crédito constituye una deuda de naturaleza financiera, al proceder de una operación de financiación con una entidad bancaria o similar, a diferencia de las deudas comerciales, fiscales o laborales.",
    porQueNoLasOtras: {
      B: "La deuda con proveedores habituales es una deuda comercial u operativa, ligada al tráfico ordinario del negocio, no una deuda financiera con entidades de crédito.",
      C: "El IVA pendiente de liquidar con Hacienda es una deuda de naturaleza fiscal frente a la Administración, no una deuda financiera.",
      D: "Las remuneraciones pendientes al personal constituyen una deuda de naturaleza laboral, no financiera."
    }
  },
  {
    id: "q105",
    modulo: "test",
    tema: "Deudas financieras (corto vs largo plazo, clasificación correcta)",
    dificultad: "avanzado",
    enunciado:
      "Una empresa emite un empréstito de obligaciones con una prima de reembolso (es decir, el importe a devolver a los obligacionistas al vencimiento es superior al importe nominal recibido en la emisión). ¿Cómo debe tratarse contablemente esa prima de reembolso a lo largo de la vida del empréstito?",
    opciones: {
      A: "Se reconoce íntegramente como gasto financiero en el propio ejercicio de la emisión",
      B: "Se imputa como gasto financiero de forma sistemática a lo largo de la vida del empréstito, aplicando el método del tipo de interés efectivo, de manera que el pasivo se va incrementando hasta alcanzar el importe de reembolso al vencimiento",
      C: "No se contabiliza nada hasta el momento del reembolso final del empréstito",
      D: "Se registra directamente como una reducción del patrimonio neto en el momento de la emisión"
    },
    correcta: "B",
    explicacion:
      "La prima de reembolso constituye un mayor coste financiero de la deuda, que debe distribuirse a lo largo de toda la vida del empréstito mediante el método del tipo de interés efectivo, incrementando progresivamente el valor en libros del pasivo hasta igualar el importe de reembolso al vencimiento.",
    porQueNoLasOtras: {
      A: "Imputar toda la prima como gasto en el ejercicio de la emisión incumpliría el devengo, ya que ese mayor coste financiero corresponde a toda la vida del empréstito, no solo al primer ejercicio.",
      C: "No contabilizar nada hasta el vencimiento incumpliría el devengo del gasto financiero asociado a la prima, que se va generando a lo largo de toda la vida del título.",
      D: "La prima de reembolso es un mayor coste financiero de la deuda, no una operación que afecte directamente al patrimonio neto de la empresa."
    }
  }
];
