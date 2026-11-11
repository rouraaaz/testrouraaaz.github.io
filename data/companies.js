// Datos de empresas ficticias para práctica de entrevista técnica (Audit & Assurance).
// Cada empresa incluye balance, PYG, preguntas tipo test, preguntas abiertas y riesgos detectables.
// IMPORTANTE: totalActivo, totalPasivoPN y los subtotales del PYG (margenBruto, ebitda, ebit, rai,
// beneficioNeto) se calculan en código a partir de estos campos; no están precalculados aquí.

export const companies = [
  {
    id: "industria-manufactura",
    sector: "Industria / Manufacturing",
    nombre: "Ferromec Industrial, S.A.",
    descripcion:
      "Fabricante de componentes metálicos y piezas mecanizadas para los sectores de automoción y maquinaria industrial. Vende principalmente a fabricantes de equipo original (OEM) mediante contratos de suministro recurrente. Sector caracterizado por márgenes ajustados, alta inversión en inmovilizado productivo y necesidad de mantener existencias para garantizar el nivel de servicio al cliente.",
    balance: {
      activo: {
        inmovilizadoMaterial: 3200000,
        inmovilizadoIntangible: 100000,
        existencias: 1450000,
        clientes: 1550000,
        otrosDeudores: 150000,
        efectivo: 300000
      },
      patrimonioNetoPasivo: {
        capitalSocial: 1000000,
        reservas: 850000,
        resultadoEjercicio: 367500,
        deudasLPlazo: 1800000,
        deudasCPlazo: 900000,
        proveedores: 1400000,
        acreedores: 300000,
        otrosPasivos: 132500
      }
    },
    pyg: {
      ventas: 8500000,
      aprovisionamientos: -5100000,
      variacionExistencias: 50000,
      gastosPersonal: -1600000,
      otrosGastosExplotacion: -900000,
      amortizaciones: -320000,
      gastosFinancieros: -140000,
      impuesto: -122500
    },
    preguntasTest: [
      {
        enunciado:
          "¿Cuál de las siguientes afirmaciones describe mejor la posición de liquidez de Ferromec Industrial?",
        opciones: {
          A: "El ratio de liquidez corriente es inferior a 1, lo que indica insolvencia técnica a corto plazo.",
          B: "El ratio de liquidez corriente es de aproximadamente 1,26, pero el ratio de liquidez inmediata (sin existencias) cae a 0,73, lo que indica que la liquidez depende en buena medida de la rotación de existencias.",
          C: "La empresa no tiene activo corriente suficiente para cubrir ni la mitad del pasivo corriente.",
          D: "El efectivo disponible por sí solo cubre todo el pasivo corriente."
        },
        correcta: "B",
        explicacion:
          "Activo corriente = 3.450.000 € y pasivo corriente = 2.732.500 €, lo que da un ratio de liquidez corriente de 1,26. Si excluimos existencias (1.450.000 €), el activo corriente ajustado es 2.000.000 €, y el quick ratio baja a 0,73, mostrando dependencia de la venta de inventario para atender los pagos a corto plazo."
      },
      {
        enunciado: "Respecto al nivel de endeudamiento de la empresa, ¿cuál de las siguientes opciones es correcta?",
        opciones: {
          A: "El pasivo total representa aproximadamente el 67% del activo total, con un ratio deuda/patrimonio neto de alrededor de 2,04.",
          B: "La empresa está prácticamente libre de deuda financiera.",
          C: "El patrimonio neto supera al pasivo total, por lo que el endeudamiento es bajo.",
          D: "La deuda a corto plazo supera a la deuda a largo plazo."
        },
        correcta: "A",
        explicacion:
          "Pasivo total = 1.800.000 + 900.000 + 1.400.000 + 300.000 + 132.500 = 4.532.500 €, sobre un activo total de 6.750.000 €, es decir, el 67,1%. El patrimonio neto es 2.217.500 €, por lo que el ratio deuda/PN es 4.532.500/2.217.500 ≈ 2,04. Además, la deuda a largo plazo (1.800.000) supera a la de corto plazo (900.000), así que D es incorrecta."
      },
      {
        enunciado: "¿Cómo calificarías la rentabilidad de Ferromec Industrial en este ejercicio?",
        opciones: {
          A: "La empresa tiene pérdidas en el ejercicio.",
          B: "El margen neto sobre ventas es de aproximadamente el 4,3% y el ROE es de aproximadamente el 16,6%, por lo que la empresa es rentable, aunque con un margen ajustado típico del sector industrial.",
          C: "El margen bruto es negativo, lo que indica que la empresa vende por debajo de su coste de producción.",
          D: "El EBITDA es negativo."
        },
        correcta: "B",
        explicacion:
          "Beneficio neto = 367.500 € sobre ventas de 8.500.000 € implica un margen neto del 4,3%. ROE = 367.500/2.217.500 (patrimonio neto) ≈ 16,6%. El margen bruto (3.450.000 €, 40,6% sobre ventas) y el EBITDA (950.000 €) son ambos positivos."
      },
      {
        enunciado: "Sobre el fondo de maniobra (working capital) de la empresa, ¿qué se puede afirmar?",
        opciones: {
          A: "El fondo de maniobra es negativo, lo que indica riesgo de insolvencia técnica inmediata.",
          B: "El fondo de maniobra es positivo (activo corriente mayor que pasivo corriente), pero su margen es relativamente ajustado dado el peso de existencias y clientes en el activo corriente.",
          C: "La empresa no tiene pasivo corriente.",
          D: "El fondo de maniobra es igual al patrimonio neto."
        },
        correcta: "B",
        explicacion:
          "Fondo de maniobra = Activo corriente (3.450.000) − Pasivo corriente (2.732.500) = 717.500 €, positivo pero ajustado en relación al volumen de existencias (1.450.000) y clientes (1.550.000), que concentran la mayor parte del activo corriente."
      }
    ],
    preguntasAbiertas: [
      {
        pregunta: "¿Qué tipo de negocio tiene esta empresa y cuál es su principal fuente de ingresos?",
        puntosClave: [
          "Fabricante industrial (componentes metálicos/mecanizados) que vende a OEM de automoción y maquinaria",
          "Ingresos recurrentes vía contratos de suministro, no ventas puntuales",
          "Modelo B2B con dependencia de pocos clientes grandes, típico del sector"
        ]
      },
      {
        pregunta: "¿Tiene una posición de liquidez sólida?",
        puntosClave: [
          "Current ratio ≈ 1,26, aceptable pero no holgado",
          "Quick ratio ≈ 0,73 (sin existencias), muestra dependencia de vender inventario",
          "La liquidez es moderada, no claramente sólida"
        ]
      },
      {
        pregunta: "¿Está muy endeudada?",
        puntosClave: [
          "Pasivo/Activo ≈ 67%, nivel de apalancamiento elevado",
          "Ratio deuda/PN ≈ 2,04",
          "Deuda mayoritariamente a largo plazo, lo que mitiga algo el riesgo de refinanciación inmediata"
        ]
      },
      {
        pregunta: "¿Es rentable?",
        puntosClave: [
          "Margen neto ≈ 4,3%, ROE ≈ 16,6%",
          "Márgenes ajustados pero habituales en industria manufacturera",
          "EBITDA positivo (950.000 €), negocio operativamente sano"
        ]
      },
      {
        pregunta: "¿Tiene problemas de Working Capital?",
        puntosClave: [
          "Fondo de maniobra positivo (717.500 €) pero ajustado",
          "Existencias y clientes representan gran parte del activo corriente",
          "Riesgo si se ralentiza el cobro o la rotación de inventario"
        ]
      },
      {
        pregunta: "¿Qué partidas te llaman la atención y por qué?",
        puntosClave: [
          "Existencias elevadas (1.450.000 €) en relación al coste de ventas",
          "Clientes (1.550.000 €) representan más del 18% de las ventas anuales",
          "Deuda financiera total significativa (2.700.000 €) frente al tamaño de la empresa"
        ]
      },
      {
        pregunta: "¿Qué posibles riesgos identificarías como auditor?",
        puntosClave: [
          "Riesgo de valoración/obsolescencia de existencias",
          "Riesgo de incobrabilidad en clientes concentrados",
          "Riesgo de incumplimiento de covenants por el alto apalancamiento"
        ]
      },
      {
        pregunta: "¿Qué partidas investigarías con mayor profundidad?",
        puntosClave: [
          "Composición y antigüedad de existencias (materias primas vs. producto terminado)",
          "Antigüedad de saldos de clientes y concentración por cliente",
          "Condiciones y covenants de la deuda a largo plazo"
        ]
      },
      {
        pregunta: "¿Qué ratios calcularías en primer lugar para esta empresa y por qué?",
        puntosClave: [
          "Current ratio y quick ratio, por el peso de las existencias",
          "Ratio de endeudamiento (Pasivo/Activo y deuda/PN)",
          "Rotación de existencias y periodo medio de cobro, claves en industria"
        ]
      },
      {
        pregunta: "¿Qué posibles errores contables podrían existir dado el perfil de esta empresa?",
        puntosClave: [
          "Sobrevaloración de existencias obsoletas o de lenta rotación",
          "Reconocimiento de ingresos antes de la entrega/aceptación por el OEM",
          "Capitalización incorrecta de costes que deberían ser gasto del ejercicio"
        ]
      }
    ],
    riesgosDetectables: [
      {
        anomalia:
          "Las existencias (1.450.000 €) suponen más del 28% del coste de aprovisionamientos anual, lo que implica una rotación relativamente lenta de inventario.",
        riesgoAuditoria: "Riesgo de sobrevaloración de existencias por obsolescencia o lenta rotación no provisionada.",
        procedimiento:
          "Revisar el listado de existencias por antigüedad, analizar la rotación por referencia y verificar la existencia de provisiones por deterioro adecuadas; asistir a un recuento físico."
      },
      {
        anomalia:
          "Los saldos de clientes (1.550.000 €) representan cerca de 67 días de venta, un plazo de cobro relativamente largo para el sector.",
        riesgoAuditoria: "Riesgo de incobrabilidad o de saldos de clientes no depurados/incorrectamente valorados.",
        procedimiento:
          "Enviar confirmaciones de saldos a los principales clientes, revisar el detalle de antigüedad de saldos (aging) y evaluar la suficiencia de la provisión por insolvencias."
      },
      {
        anomalia:
          "El nivel de endeudamiento financiero total (2.700.000 €) representa más del 120% del patrimonio neto.",
        riesgoAuditoria: "Riesgo de incumplimiento de covenants financieros y de clasificación incorrecta entre deuda corriente y no corriente.",
        procedimiento:
          "Revisar los contratos de financiación, comprobar el cumplimiento de covenants a la fecha de cierre y verificar la correcta clasificación de vencimientos a corto y largo plazo."
      }
    ]
  },

  {
    id: "retail-distribucion",
    sector: "Retail / Distribución comercial",
    nombre: "Distrialia Retail, S.L.",
    descripcion:
      "Cadena de tiendas y plataforma de distribución de productos de electrónica de consumo y electrodomésticos. Opera con márgenes comerciales reducidos y alta rotación de producto, compensando el margen unitario bajo con volumen. El negocio depende en gran medida de la gestión eficiente del inventario y de la financiación de proveedores.",
    balance: {
      activo: {
        inmovilizadoMaterial: 1800000,
        inmovilizadoIntangible: 40000,
        existencias: 2200000,
        clientes: 900000,
        otrosDeudores: 80000,
        efectivo: 250000
      },
      patrimonioNetoPasivo: {
        capitalSocial: 600000,
        reservas: 500000,
        resultadoEjercicio: 142500,
        deudasLPlazo: 900000,
        deudasCPlazo: 1200000,
        proveedores: 1600000,
        acreedores: 250000,
        otrosPasivos: 77500
      }
    },
    pyg: {
      ventas: 12000000,
      aprovisionamientos: -9600000,
      variacionExistencias: -30000,
      gastosPersonal: -1100000,
      otrosGastosExplotacion: -850000,
      amortizaciones: -140000,
      gastosFinancieros: -90000,
      impuesto: -47500
    },
    preguntasTest: [
      {
        enunciado: "¿Cuál de las siguientes afirmaciones sobre la liquidez de Distrialia Retail es correcta?",
        opciones: {
          A: "El current ratio es de aproximadamente 1,10 y el quick ratio (sin existencias) cae hasta aproximadamente 0,39, lo que indica una liquidez muy ajustada que depende casi por completo de vender el inventario.",
          B: "El quick ratio es superior a 1, por lo que la empresa tiene liquidez inmediata sobrada.",
          C: "El activo corriente es inferior al pasivo corriente, situación de insolvencia técnica.",
          D: "La empresa no tiene deuda a corto plazo."
        },
        correcta: "A",
        explicacion:
          "Activo corriente = 3.430.000 € y pasivo corriente = 3.127.500 €, dando un current ratio de 1,10. Excluyendo existencias (2.200.000 €), el activo corriente ajustado es solo 1.230.000 €, resultando en un quick ratio de 0,39, señal de liquidez muy dependiente de la venta de stock."
      },
      {
        enunciado: "¿Qué puede decirse sobre el endeudamiento de la empresa?",
        opciones: {
          A: "El pasivo total representa aproximadamente el 76% del activo total y es más de 3 veces el patrimonio neto, un nivel de apalancamiento elevado.",
          B: "La empresa financia su actividad casi exclusivamente con fondos propios.",
          C: "No existe deuda financiera a corto plazo.",
          D: "El patrimonio neto es mayor que el pasivo total."
        },
        correcta: "A",
        explicacion:
          "Pasivo total = 900.000 + 1.200.000 + 1.600.000 + 250.000 + 77.500 = 4.027.500 €, frente a un activo total de 5.270.000 € (76,4%) y un patrimonio neto de 1.242.500 € (ratio deuda/PN ≈ 3,24)."
      },
      {
        enunciado: "¿Cómo es la rentabilidad del negocio?",
        opciones: {
          A: "El margen neto sobre ventas es de aproximadamente el 1,2%, coherente con un margen bruto reducido (≈19,75%) típico del retail de alto volumen y bajo margen unitario.",
          B: "El margen neto es superior al 20%.",
          C: "La empresa genera pérdidas en el ejercicio.",
          D: "El margen bruto es negativo."
        },
        correcta: "A",
        explicacion:
          "Beneficio neto = 142.500 € sobre ventas de 12.000.000 € = 1,19% de margen neto. El margen bruto es 2.370.000 € (19,75% sobre ventas), típico de un negocio de distribución con alta rotación y bajo margen unitario."
      },
      {
        enunciado: "Sobre el fondo de maniobra y la gestión del circulante, ¿qué es más preciso?",
        opciones: {
          A: "El fondo de maniobra es positivo pero muy ajustado (≈302.500 €), y la empresa depende de la financiación de proveedores (1.600.000 €) y de deuda a corto plazo (1.200.000 €) para sostener un inventario elevado.",
          B: "La empresa no tiene financiación de proveedores.",
          C: "El fondo de maniobra es negativo.",
          D: "Las existencias son prácticamente nulas."
        },
        correcta: "A",
        explicacion:
          "Fondo de maniobra = 3.430.000 − 3.127.500 = 302.500 €, positivo pero muy ajustado para un activo corriente dominado por existencias (2.200.000 €), que se financian en buena parte con proveedores y deuda a corto plazo."
      }
    ],
    preguntasAbiertas: [
      {
        pregunta: "¿Qué tipo de negocio tiene esta empresa y cuál es su principal fuente de ingresos?",
        puntosClave: [
          "Distribución/retail de electrónica y electrodomésticos",
          "Modelo de alto volumen y margen unitario bajo",
          "Ingresos por venta de producto, con fuerte dependencia de la rotación de inventario"
        ]
      },
      {
        pregunta: "¿Tiene una posición de liquidez sólida?",
        puntosClave: [
          "Current ratio ≈ 1,10, muy ajustado",
          "Quick ratio ≈ 0,39, liquidez inmediata muy débil",
          "La liquidez depende casi por completo de vender existencias, no es sólida"
        ]
      },
      {
        pregunta: "¿Está muy endeudada?",
        puntosClave: [
          "Pasivo/Activo ≈ 76%, nivel alto",
          "Deuda/PN ≈ 3,24, apalancamiento elevado",
          "Combinación de deuda financiera a corto plazo (1.200.000 €) y proveedores (1.600.000 €) relevante"
        ]
      },
      {
        pregunta: "¿Es rentable?",
        puntosClave: [
          "Margen neto muy bajo (≈1,2%), típico del sector",
          "Margen bruto ajustado (≈19,75%)",
          "Rentabilidad positiva pero con escaso margen de maniobra ante caídas de ventas"
        ]
      },
      {
        pregunta: "¿Tiene problemas de Working Capital?",
        puntosClave: [
          "Fondo de maniobra positivo pero muy pequeño en relación al tamaño del balance",
          "Alta dependencia de proveedores y deuda a corto plazo para financiar existencias",
          "Riesgo real de tensión de tesorería ante cualquier retraso en ventas o cobros"
        ]
      },
      {
        pregunta: "¿Qué partidas te llaman la atención y por qué?",
        puntosClave: [
          "Existencias muy elevadas (2.200.000 €) en relación a ventas y a aprovisionamientos",
          "Deuda a corto plazo (1.200.000 €) alta en relación al activo corriente",
          "Proveedores (1.600.000 €) como principal fuente de financiación del circulante"
        ]
      },
      {
        pregunta: "¿Qué posibles riesgos identificarías como auditor?",
        puntosClave: [
          "Riesgo de liquidez / going concern ajustado",
          "Riesgo de obsolescencia o deterioro de existencias (tecnología con rápida depreciación)",
          "Riesgo de incumplimiento de pago a proveedores o de refinanciación de deuda a corto plazo"
        ]
      },
      {
        pregunta: "¿Qué partidas investigarías con mayor profundidad?",
        puntosClave: [
          "Antigüedad y rotación de existencias por categoría de producto",
          "Condiciones de la deuda a corto plazo (vencimientos, covenants, renovación)",
          "Términos de pago y concentración de proveedores"
        ]
      },
      {
        pregunta: "¿Qué ratios calcularías en primer lugar para esta empresa y por qué?",
        puntosClave: [
          "Current ratio y quick ratio, por la fragilidad de liquidez evidente",
          "Rotación de existencias y días de inventario (DIO)",
          "Ratio de endeudamiento y cobertura de intereses"
        ]
      },
      {
        pregunta: "¿Qué posibles errores contables podrían existir dado el perfil de esta empresa?",
        puntosClave: [
          "Falta de provisión por obsolescencia de existencias tecnológicas",
          "Clasificación incorrecta de deuda a corto/largo plazo para mejorar ratios",
          "Reconocimiento anticipado de ventas o descuentos a proveedores no registrados correctamente"
        ]
      }
    ],
    riesgosDetectables: [
      {
        anomalia:
          "El quick ratio (liquidez inmediata sin existencias) es de solo 0,39, muy por debajo de 1, mientras el current ratio apenas supera 1 (1,10).",
        riesgoAuditoria: "Riesgo de liquidez / continuidad del negocio (going concern) si las ventas o la rotación de inventario se ralentizan.",
        procedimiento:
          "Analizar las proyecciones de tesorería de la dirección, revisar la disponibilidad de líneas de crédito no utilizadas y evaluar la razonabilidad de las hipótesis de ventas futuras."
      },
      {
        anomalia:
          "Las existencias (2.200.000 €) equivalen a más de 83 días de coste de ventas, un nivel elevado para un negocio de distribución de electrónica, sector con rápida obsolescencia tecnológica.",
        riesgoAuditoria: "Riesgo de sobrevaloración de existencias por falta de deterioro en producto obsoleto o de difícil venta.",
        procedimiento:
          "Revisar el inventario por antigüedad y rotación, analizar ventas posteriores al cierre (post year-end) y verificar la política de provisión por obsolescencia."
      },
      {
        anomalia:
          "La deuda a corto plazo (1.200.000 €) es muy elevada en relación con el efectivo disponible (250.000 €) y se combina con un saldo de proveedores también alto (1.600.000 €).",
        riesgoAuditoria: "Riesgo de incumplimiento de pagos a corto plazo y de clasificación incorrecta de vencimientos de deuda.",
        procedimiento:
          "Verificar los calendarios de vencimiento de la deuda a corto plazo, confirmar saldos con las principales entidades financieras y revisar si existe refinanciación acordada con posterioridad al cierre."
      }
    ]
  },

  {
    id: "tecnologia-software",
    sector: "Tecnología / Software",
    nombre: "Nebulix Software Solutions, S.L.",
    descripcion:
      "Empresa de software como servicio (SaaS) que desarrolla y comercializa una plataforma de gestión empresarial en la nube, facturada mediante suscripciones anuales a clientes corporativos. El negocio se caracteriza por márgenes brutos muy altos, fuerte peso del gasto de personal (desarrollo) y activos intangibles relevantes por la capitalización de costes de desarrollo de software.",
    balance: {
      activo: {
        inmovilizadoMaterial: 180000,
        inmovilizadoIntangible: 950000,
        existencias: 0,
        clientes: 980000,
        otrosDeudores: 70000,
        efectivo: 620000
      },
      patrimonioNetoPasivo: {
        capitalSocial: 300000,
        reservas: 600000,
        resultadoEjercicio: 337500,
        deudasLPlazo: 500000,
        deudasCPlazo: 200000,
        proveedores: 300000,
        acreedores: 250000,
        otrosPasivos: 312500
      }
    },
    pyg: {
      ventas: 4200000,
      aprovisionamientos: -350000,
      variacionExistencias: 0,
      gastosPersonal: -2400000,
      otrosGastosExplotacion: -700000,
      amortizaciones: -280000,
      gastosFinancieros: -20000,
      impuesto: -112500
    },
    preguntasTest: [
      {
        enunciado: "¿Cuál de las siguientes afirmaciones sobre la liquidez de Nebulix es correcta?",
        opciones: {
          A: "El current ratio es de aproximadamente 1,57, una posición de liquidez cómoda, reforzada por una posición de caja relevante (620.000 €).",
          B: "La empresa tiene activo corriente inferior al pasivo corriente.",
          C: "El efectivo es prácticamente nulo.",
          D: "La empresa depende de existencias para su liquidez."
        },
        correcta: "A",
        explicacion:
          "Activo corriente = 1.670.000 € y pasivo corriente = 1.062.500 €, dando un current ratio de 1,57. Al no haber existencias, la liquidez es más fiable que en negocios con inventario, y además hay una caja sólida de 620.000 €."
      },
      {
        enunciado: "Sobre el endeudamiento de la empresa, ¿qué afirmación es correcta?",
        opciones: {
          A: "El pasivo total representa aproximadamente el 56% del activo total, un nivel moderado, con un componente relevante de ingresos diferidos/periodificaciones dentro de 'otros pasivos'.",
          B: "La empresa no tiene ningún pasivo.",
          C: "La deuda financiera a largo plazo es superior al total del activo.",
          D: "El patrimonio neto es negativo."
        },
        correcta: "A",
        explicacion:
          "Pasivo total = 500.000 + 200.000 + 300.000 + 250.000 + 312.500 = 1.562.500 €, sobre un activo total de 2.800.000 € (55,8%). En un modelo SaaS, buena parte de 'otrosPasivos' puede corresponder a ingresos diferidos por suscripciones facturadas por anticipado."
      },
      {
        enunciado: "¿Cómo es la rentabilidad de Nebulix?",
        opciones: {
          A: "El margen bruto es muy alto (≈91,7%) por la naturaleza del software, el margen neto es de aproximadamente el 8% y el ROE ronda el 27%, reflejando un negocio escalable y rentable.",
          B: "El margen bruto es similar al de un negocio industrial (≈40%).",
          C: "La empresa tiene pérdidas netas.",
          D: "El EBITDA es negativo."
        },
        correcta: "A",
        explicacion:
          "Margen bruto = 3.850.000/4.200.000 ≈ 91,7%. Beneficio neto = 337.500 € → margen neto ≈ 8,04% sobre ventas. ROE = 337.500/1.237.500 (PN) ≈ 27,3%, cifras propias de un negocio de software escalable con alto apalancamiento operativo en personal."
      },
      {
        enunciado: "¿Qué puede decirse sobre el activo intangible de la empresa?",
        opciones: {
          A: "El inmovilizado intangible (950.000 €) representa más de un tercio del activo total, lo que sugiere capitalización relevante de costes de desarrollo de software, una partida que requiere especial atención en auditoría.",
          B: "La empresa no tiene activos intangibles.",
          C: "El inmovilizado material es la partida más relevante del activo.",
          D: "Los intangibles representan menos del 1% del activo total."
        },
        correcta: "A",
        explicacion:
          "Inmovilizado intangible = 950.000 € sobre un activo total de 2.800.000 € = 33,9%. En empresas SaaS, esto suele corresponder a desarrollo de software capitalizado, cuya correcta activación (cumplimiento de criterios NIC 38 / PGC) y amortización requieren revisión específica."
      }
    ],
    preguntasAbiertas: [
      {
        pregunta: "¿Qué tipo de negocio tiene esta empresa y cuál es su principal fuente de ingresos?",
        puntosClave: [
          "Software como servicio (SaaS), plataforma de gestión empresarial en la nube",
          "Ingresos por suscripción anual a clientes corporativos",
          "Modelo escalable con bajo coste marginal de aprovisionamiento"
        ]
      },
      {
        pregunta: "¿Tiene una posición de liquidez sólida?",
        puntosClave: [
          "Current ratio ≈ 1,57, cómodo",
          "Buena posición de caja (620.000 €)",
          "Ausencia de existencias reduce el riesgo de iliquidez por inventario"
        ]
      },
      {
        pregunta: "¿Está muy endeudada?",
        puntosClave: [
          "Pasivo/Activo ≈ 56%, nivel moderado",
          "Deuda financiera (LP+CP) relativamente baja en términos absolutos",
          "Parte del pasivo puede ser ingresos diferidos, no deuda financiera real"
        ]
      },
      {
        pregunta: "¿Es rentable?",
        puntosClave: [
          "Margen bruto muy alto (≈92%), propio del software",
          "Margen neto ≈ 8% y ROE ≈ 27%, rentabilidad atractiva",
          "El gasto de personal es la principal palanca de coste"
        ]
      },
      {
        pregunta: "¿Tiene problemas de Working Capital?",
        puntosClave: [
          "Fondo de maniobra positivo (≈607.500 €)",
          "Sin existencias, el circulante depende de clientes y de ingresos diferidos",
          "Posición de circulante cómoda en general"
        ]
      },
      {
        pregunta: "¿Qué partidas te llaman la atención y por qué?",
        puntosClave: [
          "Inmovilizado intangible elevado (950.000 €, 34% del activo) por capitalización de desarrollo",
          "Clientes (980.000 €) con un plazo de cobro de unos 85 días, relevante para B2B",
          "Otros pasivos (312.500 €) posiblemente ligados a ingresos diferidos por suscripciones"
        ]
      },
      {
        pregunta: "¿Qué posibles riesgos identificarías como auditor?",
        puntosClave: [
          "Riesgo de capitalización indebida de gastos de desarrollo que no cumplen criterios de activo",
          "Riesgo de reconocimiento de ingresos incorrecto en suscripciones (periodificación)",
          "Riesgo de deterioro no registrado del intangible si el producto queda obsoleto"
        ]
      },
      {
        pregunta: "¿Qué partidas investigarías con mayor profundidad?",
        puntosClave: [
          "Política de capitalización de costes de desarrollo de software y su amortización",
          "Reconocimiento de ingresos por suscripción e ingresos diferidos asociados",
          "Antigüedad y concentración de los saldos de clientes"
        ]
      },
      {
        pregunta: "¿Qué ratios calcularías en primer lugar para esta empresa y por qué?",
        puntosClave: [
          "Margen bruto y EBITDA, para evaluar la escalabilidad del modelo",
          "Peso del intangible sobre el activo total",
          "Días de cobro de clientes (DSO) y ratio de liquidez"
        ]
      },
      {
        pregunta: "¿Qué posibles errores contables podrían existir dado el perfil de esta empresa?",
        puntosClave: [
          "Capitalización de gastos de desarrollo que deberían reconocerse como gasto del ejercicio",
          "Reconocimiento anticipado de ingresos de suscripciones plurianuales",
          "Amortización del intangible calculada con una vida útil inadecuada"
        ]
      }
    ],
    riesgosDetectables: [
      {
        anomalia:
          "El inmovilizado intangible (950.000 €) supone cerca del 34% del activo total y proviene, presumiblemente, de la capitalización de costes de desarrollo de software.",
        riesgoAuditoria: "Riesgo de que se hayan capitalizado costes que no cumplen los criterios para reconocerse como activo (deberían ser gasto del ejercicio), inflando el resultado.",
        procedimiento:
          "Revisar el detalle de los proyectos capitalizados, verificar el cumplimiento de los criterios de activación (viabilidad técnica, intención de uso/venta, fiabilidad de la medición de costes) y comprobar la vida útil de amortización aplicada."
      },
      {
        anomalia:
          "'Otros pasivos' (312.500 €) representa una partida relevante que, en un negocio de suscripción anual, puede corresponder en gran parte a ingresos diferidos por facturación anticipada.",
        riesgoAuditoria: "Riesgo de reconocimiento de ingresos anticipado o incorrecto si no se periodifican adecuadamente las suscripciones facturadas por anticipado.",
        procedimiento:
          "Analizar el detalle de ingresos diferidos por contrato, conciliar con la facturación emitida y verificar que el reconocimiento de ingresos sigue el patrón de prestación del servicio (devengo)."
      }
    ]
  },

  {
    id: "construccion-inmobiliario",
    sector: "Construcción / Inmobiliario",
    nombre: "Construcciones Vallmar, S.A.",
    descripcion:
      "Empresa constructora dedicada a la ejecución de obra civil y promociones residenciales, con proyectos de duración plurianual facturados mediante certificaciones de obra. El sector se caracteriza por una elevada inversión en inmovilizado (maquinaria y terrenos), un fuerte uso de financiación ajena para sostener los proyectos en curso y plazos de cobro largos frente a clientes públicos y privados.",
    balance: {
      activo: {
        inmovilizadoMaterial: 6500000,
        inmovilizadoIntangible: 60000,
        existencias: 4200000,
        clientes: 2800000,
        otrosDeudores: 300000,
        efectivo: 400000
      },
      patrimonioNetoPasivo: {
        capitalSocial: 1500000,
        reservas: 1200000,
        resultadoEjercicio: 540000,
        deudasLPlazo: 5800000,
        deudasCPlazo: 2200000,
        proveedores: 2300000,
        acreedores: 500000,
        otrosPasivos: 220000
      }
    },
    pyg: {
      ventas: 15000000,
      aprovisionamientos: -11250000,
      variacionExistencias: 200000,
      gastosPersonal: -1400000,
      otrosGastosExplotacion: -900000,
      amortizaciones: -450000,
      gastosFinancieros: -480000,
      impuesto: -180000
    },
    preguntasTest: [
      {
        enunciado: "¿Cuál de las siguientes afirmaciones sobre la liquidez de Construcciones Vallmar es correcta?",
        opciones: {
          A: "El current ratio es de aproximadamente 1,48, aceptable en apariencia, pero el quick ratio (sin existencias/obra en curso) cae hasta aproximadamente 0,67, mostrando dependencia de la obra en curso y de los cobros a clientes.",
          B: "El activo corriente es inferior al pasivo corriente.",
          C: "La empresa no tiene existencias.",
          D: "El efectivo cubre por sí solo todo el pasivo corriente."
        },
        correcta: "A",
        explicacion:
          "Activo corriente = 7.700.000 € y pasivo corriente = 5.220.000 €, dando un current ratio de 1,48. Excluyendo existencias (obra en curso, 4.200.000 €), el activo corriente ajustado es 3.500.000 €, resultando en un quick ratio de 0,67."
      },
      {
        enunciado: "Respecto al nivel de endeudamiento, ¿qué afirmación es correcta?",
        opciones: {
          A: "El pasivo total representa aproximadamente el 77% del activo total y es más de 3,4 veces el patrimonio neto, un apalancamiento muy elevado típico de proyectos de construcción financiados con deuda.",
          B: "La empresa no tiene deuda financiera a largo plazo.",
          C: "El patrimonio neto supera ampliamente al pasivo total.",
          D: "La deuda a corto plazo es mayor que la deuda a largo plazo."
        },
        correcta: "A",
        explicacion:
          "Pasivo total = 5.800.000 + 2.200.000 + 2.300.000 + 500.000 + 220.000 = 11.020.000 €, sobre un activo total de 14.260.000 € (77,3%). El patrimonio neto es 3.240.000 €, con un ratio deuda/PN ≈ 3,40. La deuda a largo plazo (5.800.000) es mayor que la de corto plazo (2.200.000)."
      },
      {
        enunciado: "¿Cómo es la cobertura de los gastos financieros con el resultado operativo?",
        opciones: {
          A: "El EBIT (1.200.000 €) cubre los gastos financieros (480.000 €) algo más de 2,5 veces, una cobertura moderada dado el elevado nivel de deuda.",
          B: "Los gastos financieros superan al EBIT, por lo que no hay cobertura.",
          C: "La empresa no tiene gastos financieros.",
          D: "El EBITDA es inferior a los gastos financieros."
        },
        correcta: "A",
        explicacion:
          "EBIT = EBITDA (1.650.000) + amortizaciones (−450.000) = 1.200.000 €. La cobertura de intereses = 1.200.000/480.000 ≈ 2,5x, un nivel moderado que deja poco margen ante subidas de tipos de interés o caídas de actividad."
      },
      {
        enunciado: "¿Qué puede decirse de la rentabilidad del ejercicio?",
        opciones: {
          A: "El margen neto es de aproximadamente el 3,6% y el ROE de aproximadamente el 16,7%, resultado positivo pero con un margen reducido en relación al elevado riesgo financiero asumido.",
          B: "La empresa tiene pérdidas en el ejercicio.",
          C: "El margen bruto es negativo.",
          D: "El ROE es superior al 100%."
        },
        correcta: "A",
        explicacion:
          "Beneficio neto = 540.000 € sobre ventas de 15.000.000 € = 3,6% de margen neto. ROE = 540.000/3.240.000 (PN) ≈ 16,7%. Es un resultado positivo pero modesto en relación con el riesgo financiero derivado del alto apalancamiento."
      }
    ],
    preguntasAbiertas: [
      {
        pregunta: "¿Qué tipo de negocio tiene esta empresa y cuál es su principal fuente de ingresos?",
        puntosClave: [
          "Constructora de obra civil y promociones residenciales",
          "Ingresos por certificaciones de obra en proyectos plurianuales",
          "Dependencia de grandes proyectos y de clientes públicos/privados"
        ]
      },
      {
        pregunta: "¿Tiene una posición de liquidez sólida?",
        puntosClave: [
          "Current ratio ≈ 1,48, aparentemente razonable",
          "Quick ratio ≈ 0,67, liquidez débil sin la obra en curso",
          "Liquidez dependiente del avance y cobro de las obras"
        ]
      },
      {
        pregunta: "¿Está muy endeudada?",
        puntosClave: [
          "Pasivo/Activo ≈ 77%, muy elevado",
          "Deuda/PN ≈ 3,4, apalancamiento alto",
          "Cobertura de intereses moderada (≈2,5x)"
        ]
      },
      {
        pregunta: "¿Es rentable?",
        puntosClave: [
          "Margen neto ≈ 3,6%, modesto para el riesgo asumido",
          "ROE ≈ 16,7%, aceptable gracias al apalancamiento",
          "Resultado positivo pero sensible a variaciones de costes o tipos de interés"
        ]
      },
      {
        pregunta: "¿Tiene problemas de Working Capital?",
        puntosClave: [
          "Fondo de maniobra positivo (2.480.000 €) en términos absolutos",
          "Fuerte peso de obra en curso y clientes en el activo corriente",
          "Riesgo de desajuste temporal entre cobros de certificaciones y pagos a subcontratistas"
        ]
      },
      {
        pregunta: "¿Qué partidas te llaman la atención y por qué?",
        puntosClave: [
          "Existencias/obra en curso muy elevadas (4.200.000 €)",
          "Clientes (2.800.000 €) con plazos de cobro largos, típico de certificaciones de obra",
          "Deuda financiera total muy elevada (8.000.000 €) y gastos financieros significativos (480.000 €)"
        ]
      },
      {
        pregunta: "¿Qué posibles riesgos identificarías como auditor?",
        puntosClave: [
          "Riesgo de valoración de obra en curso (grado de avance, costes estimados a terminación)",
          "Riesgo de incumplimiento de covenants financieros por el elevado apalancamiento",
          "Riesgo de incobrabilidad o retraso en certificaciones de clientes públicos"
        ]
      },
      {
        pregunta: "¿Qué partidas investigarías con mayor profundidad?",
        puntosClave: [
          "Método de reconocimiento de ingresos por grado de avance de obra",
          "Valoración de existencias/obra en curso y provisiones por pérdidas en contratos",
          "Condiciones, vencimientos y covenants de la deuda financiera a largo plazo"
        ]
      },
      {
        pregunta: "¿Qué ratios calcularías en primer lugar para esta empresa y por qué?",
        puntosClave: [
          "Ratio de endeudamiento y cobertura de intereses, por el alto apalancamiento",
          "Current ratio y quick ratio, para evaluar la liquidez real",
          "Margen bruto por proyecto/contrato, clave en construcción"
        ]
      },
      {
        pregunta: "¿Qué posibles errores contables podrían existir dado el perfil de esta empresa?",
        puntosClave: [
          "Estimación incorrecta del grado de avance de obra, afectando al reconocimiento de ingresos",
          "Falta de provisión por pérdidas esperadas en contratos onerosos",
          "Clasificación incorrecta de deuda entre corto y largo plazo"
        ]
      }
    ],
    riesgosDetectables: [
      {
        anomalia:
          "El pasivo total equivale al 77% del activo y a 3,4 veces el patrimonio neto, con gastos financieros de 480.000 € que absorben el 40% del EBIT (cobertura de intereses de solo 2,5x).",
        riesgoAuditoria: "Riesgo de incumplimiento de covenants financieros y de tensión financiera ante una subida de tipos o retraso en cobros.",
        procedimiento:
          "Revisar los contratos de financiación y sus covenants, obtener confirmaciones bancarias, y evaluar la capacidad de generación de caja frente al servicio de la deuda (análisis de sensibilidad)."
      },
      {
        anomalia:
          "Las existencias (obra en curso, 4.200.000 €) representan una parte muy significativa del activo y dependen de estimaciones de costes a terminación que son altamente subjetivas.",
        riesgoAuditoria: "Riesgo de valoración incorrecta de la obra en curso por errores en la estimación del grado de avance o de los costes totales del proyecto.",
        procedimiento:
          "Revisar los presupuestos de obra frente a costes reales incurridos, contrastar el grado de avance con certificaciones aprobadas por el cliente y verificar la existencia de provisiones por pérdidas en contratos deficitarios."
      },
      {
        anomalia:
          "Los saldos de clientes (2.800.000 €) corresponden en gran parte a certificaciones de obra pendientes de cobro, con plazos de cobro característicamente largos en el sector.",
        riesgoAuditoria: "Riesgo de incobrabilidad o de certificaciones no aceptadas/discutidas por el cliente que sobrevaloren el activo.",
        procedimiento:
          "Revisar la antigüedad de las certificaciones pendientes, confirmar directamente con los clientes el estado de aceptación y evaluar la necesidad de provisión por litigios o retenciones en garantía."
      }
    ]
  },

  {
    id: "servicios-consultoria",
    sector: "Servicios / Consultoría",
    nombre: "Veridian Consulting Group, S.L.",
    descripcion:
      "Firma de consultoría estratégica y de gestión que presta servicios profesionales a clientes corporativos mediante proyectos facturados por tiempo y materiales o a precio cerrado. El negocio tiene una estructura de activos muy ligera (pocos activos materiales), un fuerte peso del gasto de personal como principal coste, y una exposición relevante en clientes por los plazos de facturación y cobro de los proyectos.",
    balance: {
      activo: {
        inmovilizadoMaterial: 150000,
        inmovilizadoIntangible: 50000,
        existencias: 0,
        clientes: 1600000,
        otrosDeudores: 100000,
        efectivo: 350000
      },
      patrimonioNetoPasivo: {
        capitalSocial: 200000,
        reservas: 450000,
        resultadoEjercicio: 330000,
        deudasLPlazo: 250000,
        deudasCPlazo: 150000,
        proveedores: 500000,
        acreedores: 300000,
        otrosPasivos: 70000
      }
    },
    pyg: {
      ventas: 6000000,
      aprovisionamientos: -600000,
      variacionExistencias: 0,
      gastosPersonal: -4200000,
      otrosGastosExplotacion: -650000,
      amortizaciones: -80000,
      gastosFinancieros: -30000,
      impuesto: -110000
    },
    preguntasTest: [
      {
        enunciado: "¿Cuál de las siguientes afirmaciones sobre la liquidez de Veridian Consulting es correcta?",
        opciones: {
          A: "El current ratio es de aproximadamente 2,01, una posición de liquidez cómoda, especialmente relevante al no existir existencias que distorsionen el ratio.",
          B: "El activo corriente es inferior al pasivo corriente.",
          C: "La empresa depende de existencias para su liquidez.",
          D: "El efectivo es la única partida del activo corriente."
        },
        correcta: "A",
        explicacion:
          "Activo corriente = 2.050.000 € y pasivo corriente = 1.020.000 €, dando un current ratio de 2,01. Al no haber existencias, el quick ratio coincide con el current ratio, reflejando una liquidez sólida."
      },
      {
        enunciado: "¿Qué puede decirse del saldo de clientes de la empresa?",
        opciones: {
          A: "Los clientes (1.600.000 €) equivalen a aproximadamente 97 días de ventas, un plazo de cobro elevado que, junto con el peso que representan sobre el activo total (≈71%), merece atención especial.",
          B: "Los clientes representan menos del 5% del activo total.",
          C: "El plazo medio de cobro es de apenas 10 días.",
          D: "La empresa no tiene saldo de clientes."
        },
        correcta: "A",
        explicacion:
          "DSO = 1.600.000/6.000.000 × 365 ≈ 97 días. Además, clientes representa 1.600.000/2.250.000 ≈ 71% del activo total, una concentración muy elevada típica de consultoría pero que exige revisar antigüedad y riesgo de cobro."
      },
      {
        enunciado: "Sobre la estructura de costes y la rentabilidad, ¿qué es correcto?",
        opciones: {
          A: "El gasto de personal (4.200.000 €) representa el 70% de las ventas, reflejando el modelo de negocio basado en horas de profesionales, y aun así la empresa logra un margen neto ≈5,5% y un ROE ≈33,7%.",
          B: "El gasto de personal es irrelevante en esta empresa.",
          C: "La empresa tiene pérdidas netas.",
          D: "El margen bruto es inferior al 50%."
        },
        correcta: "A",
        explicacion:
          "Gastos de personal/ventas = 4.200.000/6.000.000 = 70%, coherente con un negocio de servicios profesionales. Beneficio neto = 330.000 € → margen neto ≈5,5%. ROE = 330.000/980.000 (PN) ≈33,7%, muy elevado por la ligereza de activos del negocio."
      },
      {
        enunciado: "¿Está muy endeudada la empresa?",
        opciones: {
          A: "El pasivo total representa aproximadamente el 56% del activo, un nivel moderado, compuesto principalmente por proveedores y acreedores operativos más que por deuda financiera.",
          B: "La empresa no tiene ningún pasivo.",
          C: "La deuda financiera a largo plazo supera al activo total.",
          D: "El patrimonio neto es negativo."
        },
        correcta: "A",
        explicacion:
          "Pasivo total = 250.000 + 150.000 + 500.000 + 300.000 + 70.000 = 1.270.000 €, sobre un activo total de 2.250.000 € (56,4%). La deuda financiera (LP+CP = 400.000 €) es moderada; el grueso del pasivo son proveedores y acreedores operativos."
      }
    ],
    preguntasAbiertas: [
      {
        pregunta: "¿Qué tipo de negocio tiene esta empresa y cuál es su principal fuente de ingresos?",
        puntosClave: [
          "Consultoría estratégica/de gestión, servicios profesionales",
          "Ingresos por proyectos facturados por tiempo y materiales o a precio cerrado",
          "Modelo intensivo en personal, con pocos activos materiales"
        ]
      },
      {
        pregunta: "¿Tiene una posición de liquidez sólida?",
        puntosClave: [
          "Current ratio ≈ 2,01, sólida",
          "Sin existencias que distorsionen el ratio",
          "Buena posición de caja (350.000 €)"
        ]
      },
      {
        pregunta: "¿Está muy endeudada?",
        puntosClave: [
          "Pasivo/Activo ≈ 56%, moderado",
          "Deuda financiera baja en términos absolutos (400.000 €)",
          "El pasivo es mayoritariamente operativo (proveedores/acreedores), no financiero"
        ]
      },
      {
        pregunta: "¿Es rentable?",
        puntosClave: [
          "Margen neto ≈5,5%, razonable para el sector",
          "ROE muy elevado (≈33,7%) por la baja base de activos",
          "Alta dependencia del coste de personal como palanca de rentabilidad"
        ]
      },
      {
        pregunta: "¿Tiene problemas de Working Capital?",
        puntosClave: [
          "Fondo de maniobra positivo y amplio (≈1.030.000 €)",
          "Pero muy concentrado en el saldo de clientes, con cobro lento",
          "Riesgo de tensión si se retrasan los cobros a clientes"
        ]
      },
      {
        pregunta: "¿Qué partidas te llaman la atención y por qué?",
        puntosClave: [
          "Clientes (1.600.000 €) con un plazo de cobro de unos 97 días y un 71% del activo total",
          "Gasto de personal muy elevado (4.200.000 €, 70% de ventas)",
          "Activos materiales e intangibles muy reducidos, coherente con el modelo de servicios"
        ]
      },
      {
        pregunta: "¿Qué posibles riesgos identificarías como auditor?",
        puntosClave: [
          "Riesgo de incobrabilidad o de trabajo en curso no facturado incluido indebidamente en clientes",
          "Riesgo de reconocimiento de ingresos en proyectos a precio cerrado (grado de avance)",
          "Riesgo de concentración de ingresos en pocos clientes/proyectos clave"
        ]
      },
      {
        pregunta: "¿Qué partidas investigarías con mayor profundidad?",
        puntosClave: [
          "Antigüedad y composición del saldo de clientes (facturado vs. trabajo en curso no facturado)",
          "Reconocimiento de ingresos en proyectos a precio cerrado o con hitos",
          "Concentración de clientes y dependencia de los principales contratos"
        ]
      },
      {
        pregunta: "¿Qué ratios calcularías en primer lugar para esta empresa y por qué?",
        puntosClave: [
          "Días de cobro de clientes (DSO), por el peso y plazo elevado de este saldo",
          "Gasto de personal sobre ventas, clave en modelos de servicios profesionales",
          "ROE y margen neto, para evaluar la rentabilidad sobre una base de activos reducida"
        ]
      },
      {
        pregunta: "¿Qué posibles errores contables podrían existir dado el perfil de esta empresa?",
        puntosClave: [
          "Reconocimiento incorrecto de ingresos en proyectos con hitos o a precio cerrado",
          "Trabajo en curso no facturado registrado o valorado incorrectamente",
          "Falta de provisión por insolvencias en clientes con cobro muy dilatado"
        ]
      }
    ],
    riesgosDetectables: [
      {
        anomalia:
          "El saldo de clientes (1.600.000 €) equivale a unos 97 días de venta y representa el 71% del activo total, un plazo de cobro y una concentración muy elevados para el tamaño de la empresa.",
        riesgoAuditoria: "Riesgo de incobrabilidad, de inclusión de trabajo en curso no facturado dentro de clientes, o de falta de provisión por insolvencias.",
        procedimiento:
          "Obtener el detalle de antigüedad de saldos (aging) de clientes, enviar confirmaciones a los principales clientes y revisar los cobros posteriores al cierre para validar la recuperabilidad del saldo."
      },
      {
        anomalia:
          "El gasto de personal (4.200.000 €) representa el 70% de las ventas, un porcentaje muy elevado que deja un margen operativo reducido ante cualquier caída de facturación o de tarifas.",
        riesgoAuditoria: "Riesgo de que una caída de ingresos erosione rápidamente la rentabilidad, y riesgo de periodificación incorrecta de bonus o incentivos variables al personal.",
        procedimiento:
          "Revisar el cálculo y la periodificación de bonus/incentivos variables a cierre de ejercicio, analizar la utilización facturable del personal (tasa de ocupación) y contrastar con la evolución de la cartera de proyectos."
      }
    ]
  }
];
