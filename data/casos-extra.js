// Casos prácticos adicionales (ampliación del Módulo 6).
export const casosExtra = [
  {
    id: "caso-11",
    titulo: "Capitalización indebida de gastos de reparación como inmovilizado",
    situacion:
      "Durante la revisión del inmovilizado material de Talleres Monzón, S.A., observas que la empresa ha registrado 85.000 € en la cuenta (213) Maquinaria correspondientes a una reparación de una prensa industrial ya existente. Al revisar la factura del proveedor, el concepto es 'reparación de avería en sistema hidráulico y sustitución de piezas desgastadas', sin que la vida útil ni la capacidad productiva de la máquina se vean incrementadas.",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?",
    ],
    solucion: {
      problema:
        "Se ha capitalizado como mayor valor del inmovilizado (213) un gasto que, por su naturaleza (reparación de una avería, sin mejora de capacidad ni alargamiento de la vida útil), debería haberse reconocido como gasto del ejercicio (cuenta 622 Reparaciones y conservación).",
      riesgo:
        "Riesgo de sobrevaloración del activo y, en consecuencia, de infravaloración del gasto del ejercicio y sobrevaloración del beneficio. También se amortizaría un importe que en realidad era un gasto ya consumido, distorsionando varios ejercicios futuros.",
      partidaAfectada: "(213) Maquinaria, (681) Amortización del inmovilizado material (futuros ejercicios) y (622) Reparaciones y conservación (infravalorada este ejercicio).",
      documentacion:
        "Factura original del proveedor con el detalle técnico del trabajo realizado, informe técnico o del departamento de mantenimiento sobre el alcance de la intervención, política contable de capitalización de la empresa (criterio de activar vs. gastar), y comparación con reparaciones similares de ejercicios anteriores.",
      procedimiento:
        "Inspección documental de la factura y de cualquier informe técnico; indagación con el responsable de mantenimiento sobre el alcance real del trabajo; recálculo del efecto en el resultado si el importe se reclasificara a gasto; revisión de la política contable de capitalización de la NRV 2ª del PGC (criterios de activación: solo se capitalizan ampliaciones, mejoras o sustituciones que aumenten la capacidad, productividad o alarguen la vida útil).",
      conclusion:
        "Si se confirma que es una reparación de mantenimiento ordinario, se debe proponer un ajuste de reclasificación: dar de baja los 85.000 € de (213) y reconocerlos como gasto (622) del ejercicio, revirtiendo también cualquier amortización ya registrada sobre ese importe.",
    },
  },
  {
    id: "caso-12",
    titulo: "Saldos de IVA compensados indebidamente entre clientes y proveedores",
    situacion:
      "En Comercial Aurigo, S.L., detectas que la empresa presenta en el balance una única cuenta neta de '(4700) Hacienda Pública, deudora/acreedora' por 12.000 € a cobrar, resultado de compensar un saldo de (472) IVA soportado de 38.000 € con un saldo de (477) IVA repercutido de 50.000 €, sin desglosar ambas cuentas en la contabilidad ni documentar la liquidación trimestral correspondiente.",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?",
    ],
    solucion: {
      problema:
        "La empresa compensa directamente IVA soportado y repercutido en una única cuenta sin pasar por el proceso formal de liquidación trimestral (modelo 303) ni mantener el desglose de ambas cuentas, lo que dificulta comprobar que la cifra neta es correcta y que coincide con lo efectivamente declarado a la Agencia Tributaria.",
      riesgo:
        "Riesgo de que la cuota de IVA a pagar o a compensar esté mal calculada (por ejemplo, por no incluir determinadas operaciones, aplicar mal la prorrata, o no ajustar el IVA de operaciones intracomunitarias), y riesgo de incumplimiento de obligaciones fiscales formales no detectado por falta de trazabilidad contable.",
      partidaAfectada: "(472) H.P. IVA soportado, (477) H.P. IVA repercutido, (4750) H.P. acreedora por IVA / (4700) H.P. deudora por IVA.",
      documentacion:
        "Modelos 303 (autoliquidaciones trimestrales) y 390 (resumen anual) presentados, mayor contable detallado de las cuentas 472 y 477 por trimestre, conciliación entre el IVA contable y el IVA declarado.",
      procedimiento:
        "Recálculo de la liquidación de IVA de cada trimestre a partir del libro registro de facturas emitidas y recibidas; conciliación entre el saldo contable neto y el importe realmente declarado en los modelos 303/390; inspección de que las cuentas 472 y 477 se liquidan correctamente (NRV e instrucciones del PGC sobre cuentas de Hacienda Pública).",
      conclusion:
        "Se debe solicitar a la empresa el desglose completo y la conciliación con los modelos fiscales presentados. Si las cifras declaradas no coinciden con el saldo contable neto, existe un riesgo de incorrección que debe cuantificarse y, en su caso, proponerse el ajuste correspondiente.",
    },
  },
  {
    id: "caso-13",
    titulo: "Operación con empresa vinculada no revelada en la memoria",
    situacion:
      "Durante la auditoría de Grupo Nordesa, S.L., identificas una venta de mercaderías por 220.000 € a 'Distribuciones Hermanos Nordesa, S.L.', cuyo administrador único resulta ser el hermano del administrador de la sociedad auditada. La venta se realizó a un precio un 30% inferior al precio medio aplicado a otros clientes de similar volumen, y la operación no aparece mencionada en la memoria de las cuentas anuales como operación con partes vinculadas.",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?",
    ],
    solucion: {
      problema:
        "Existe una operación significativa con una parte vinculada (empresa administrada por un familiar directo del administrador) realizada en condiciones distintas a las de mercado, que no ha sido identificada ni revelada en la memoria, incumpliendo el deber de información sobre operaciones con partes vinculadas del PGC.",
      riesgo:
        "Riesgo de que los estados financieros no reflejen fielmente la realidad económica de la operación (posible transferencia de valor fuera de condiciones de mercado) y riesgo de incumplimiento normativo por omisión de información obligatoria en la memoria, lo que además puede ser indicio de un riesgo de fraude o de gestión en beneficio de intereses personales del administrador.",
      partidaAfectada: "(700) Ventas de mercaderías, (430) Clientes, y la nota de la memoria sobre operaciones con partes vinculadas.",
      documentacion:
        "Listado de clientes con posibles vínculos societarios o familiares con los administradores, contrato o factura de la operación, comparación de precios con otras operaciones similares de la empresa, registro mercantil de 'Distribuciones Hermanos Nordesa, S.L.' para confirmar la administración y posible vinculación.",
      procedimiento:
        "Indagación con la dirección sobre la existencia de partes vinculadas; procedimientos analíticos comparando el precio de esta venta con el precio medio de ventas a clientes de volumen similar; inspección del registro mercantil y de la estructura societaria del grupo familiar; revisión de la integridad de la relación de partes vinculadas declarada por la dirección (NIA-ES 550 Partes vinculadas).",
      conclusion:
        "Se debe proponer a la dirección que revele esta operación en la memoria conforme a la normativa, documentando su naturaleza y condiciones, y valorar si la diferencia de precio frente a mercado debería ajustarse o, al menos, cuantificarse y explicarse adecuadamente como información adicional.",
    },
  },
];
