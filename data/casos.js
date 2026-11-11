export const casos = [
  {
    id: "caso-01",
    titulo: "Incremento de ventas desproporcionado respecto a clientes",
    situacion: "Durante la auditoría de Tecnolux, S.A. (fabricante de componentes electrónicos) observas que las ventas del ejercicio 2025 han aumentado un 40% respecto a 2024, mientras que el saldo de la cuenta 430 (Clientes) ha aumentado un 80% en el mismo periodo. El periodo medio de cobro (DSO) histórico de la empresa era de 45 días y este año se sitúa en 78 días. El director financiero explica que se trata de 'un efecto puntual de fin de año'.",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?"
    ],
    solucion: {
      problema: "El saldo de clientes crece el doble que las ventas y el DSO se ha disparado de 45 a 78 días, lo que indica que algo no cuadra: o se están contabilizando ventas que no corresponden al ejercicio (o que no son reales), o los clientes no están pagando y existe un problema de cobrabilidad no reconocido.",
      riesgo: "Riesgo de sobrevaloración de ingresos y de clientes: posible reconocimiento anticipado o ficticio de ventas (channel stuffing, facturación a clientes sin pedido firme, ventas con derecho de devolución no contabilizado) y/o riesgo de que el saldo de clientes incluya importes incobrables sin el deterioro correspondiente.",
      partidaAfectada: "Cuenta 700 (Ventas de mercaderías), cuenta 430 (Clientes por ventas y prestaciones de servicios) y, en su caso, cuenta 490/694 (Deterioro de valor de créditos por operaciones comerciales).",
      documentacion: "Listado detallado de facturas de los últimos dos-tres meses del ejercicio con fecha, cliente e importe; albaranes de entrega y documentos de transporte; contratos de venta y condiciones comerciales (incluyendo cláusulas de devolución); desglose de la antigüedad de saldos (aging) de clientes; extractos de cobros posteriores al cierre.",
      procedimiento: "Pruebas de corte (cut-off) de ventas seleccionando una muestra de facturas emitidas en los últimos 15-30 días del ejercicio y verificando la fecha real de entrega/transferencia de riesgos; confirmaciones externas de saldos a clientes conforme a NIA-ES 505 (circularización); procedimiento analítico sustantivo comparando el DSO del ejercicio actual vs anterior y vs sector (NIA-ES 520); revisión de cobros posteriores al cierre para verificar la realidad y cobrabilidad de los saldos.",
      conclusion: "Si la circularización y la revisión de cobros posteriores no confirman los saldos o evidencian facturación anticipada, se concluiría que existe una incorrección material por sobrevaloración de ingresos/clientes, proponiendo el ajuste correspondiente (reversión de ventas mal cortadas y/o registro de deterioro) y documentando el hallazgo para la carta de recomendaciones."
    }
  },
  {
    id: "caso-02",
    titulo: "Volumen elevado de existencias obsoletas en almacén",
    situacion: "En la auditoría de Moda Ibérica, S.L. (distribuidora textil) el inventario a 31/12/2025 asciende a 3,2 millones de euros, un 25% más que el ejercicio anterior, mientras que las ventas se han mantenido estables. Durante la toma de inventario físico observas que una parte significativa de las prendas (estimada en 480.000 euros) corresponde a colecciones de temporadas de hace más de dos años, con rotación prácticamente nula en los últimos 12 meses. La empresa no ha registrado ningún deterioro de existencias en los últimos tres ejercicios.",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?"
    ],
    solucion: {
      problema: "El inventario crece sin que crezcan las ventas y existe un volumen relevante de existencias de baja o nula rotación que probablemente tengan un valor de mercado inferior a su coste, sin que la empresa haya reconocido deterioro alguno en varios ejercicios, lo que es una señal de alerta de falta de prudencia valorativa.",
      riesgo: "Riesgo de sobrevaloración de existencias: las prendas obsoletas pueden estar contabilizadas a coste de adquisición cuando su valor neto realizable (precio de venta estimado menos costes de venta) es inferior, incumpliendo el principio de prudencia (NRV 10 Existencias del PGC).",
      partidaAfectada: "Cuenta 300/310 (Existencias de mercaderías/materias primas) y cuenta 693/393 (Deterioro de valor de las existencias).",
      documentacion: "Informe de rotación de inventario por referencia y antigüedad (ageing de stock); listado de ventas posteriores al cierre de estas referencias y precios de venta aplicados; política de rebajas/liquidación de la compañía; actas de la toma física de inventario; informes de gestión interna sobre stock obsoleto.",
      procedimiento: "Análisis de rotación de existencias y cálculo de antigüedad por referencia; revisión del valor neto realizable comparando coste contable con precios de venta reales posteriores al cierre (NRV 10); indagación con el área comercial sobre previsiones de venta de estas referencias; recálculo de un posible deterioro y verificación de la razonabilidad de la provisión existente (si la hay).",
      conclusion: "Si el valor neto realizable de las referencias obsoletas es inferior a su coste, se debe proponer el registro de un deterioro de existencias por la diferencia, lo que supondría una incorrección material a ajustar antes de la emisión del informe, y se dejaría constancia en la carta de recomendaciones de la ausencia de una política formal de deterioro de stock."
    }
  },
  {
    id: "caso-03",
    titulo: "Proveedores pendientes de contabilizar al cierre del ejercicio",
    situacion: "En la auditoría de Construcciones Rivera, S.A. revisas las facturas de proveedores recibidas en enero de 2026 y detectas tres facturas, por un importe total de 95.000 euros, correspondientes a mercancías recibidas en diciembre de 2025 (según albaranes firmados el 18, 22 y 29 de diciembre) pero que no han sido registradas como gasto/pasivo a 31/12/2025. El departamento de contabilidad indica que 'se registran cuando llega la factura, no cuando llega la mercancía'.",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?"
    ],
    solucion: {
      problema: "La empresa está aplicando un criterio de registro incorrecto (fecha de factura en lugar de fecha de recepción/devengo), lo que provoca que compras y pasivos correspondientes a diciembre de 2025 no estén reflejados en las cuentas de ese ejercicio, infravalorando el pasivo y el gasto del periodo.",
      riesgo: "Riesgo de infravaloración del pasivo (cuenta 400/410) y del gasto por compras/servicios del ejercicio, por un corte de pasivo incorrecto; riesgo de que existan más partidas similares no detectadas (facturas pendientes de recibir).",
      partidaAfectada: "Cuenta 400 (Proveedores) o 410 (Acreedores por prestación de servicios), cuenta 600/601 (Compras) y, en su defecto, cuenta 410.00/\"Proveedores, facturas pendientes de recibir o de formalizar\".",
      documentacion: "Listado completo de albaranes de recepción de diciembre sin factura asociada; facturas recibidas en enero y febrero de 2026 con su fecha de albarán; extracto de la cuenta de proveedores; contratos u órdenes de compra relacionadas; manual de procedimientos de cierre contable de la empresa.",
      procedimiento: "Prueba de corte de pasivo (liability cut-off) revisando una muestra de facturas recibidas con posterioridad al cierre y verificando la fecha real de recepción de la mercancía/servicio (NIA-ES 330); búsqueda de pasivos no registrados (search for unrecorded liabilities) ampliando la muestra a pagos y facturas de los dos-tres meses posteriores al cierre; recálculo del ajuste necesario por periodificación.",
      conclusion: "Procede proponer un ajuste de reclasificación/periodificación para reconocer el gasto y el pasivo de las tres facturas identificadas en el ejercicio 2025, y extender la prueba a una muestra mayor para evaluar si existen más partidas pendientes de registrar, dado que el criterio aplicado por la empresa es incorrecto y sistemático."
    }
  },
  {
    id: "caso-04",
    titulo: "Ventas registradas antes de la entrega física de los productos",
    situacion: "En la auditoría de Maquinaria Industrial del Sur, S.A. detectas que, de una muestra de 20 facturas emitidas en los últimos diez días de diciembre de 2025 (por un total de 620.000 euros), 6 facturas (210.000 euros) tienen fecha de albarán de enero de 2026, es decir, la mercancía se entregó al cliente ya en el ejercicio siguiente. El contrato de venta establece que la transferencia de riesgos y beneficios se produce en el momento de la entrega en las instalaciones del cliente (condición DAP).",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?"
    ],
    solucion: {
      problema: "Se han registrado como venta del ejercicio 2025 operaciones en las que, según las condiciones contractuales (DAP), la transferencia de riesgos y beneficios -y por tanto el momento de reconocimiento del ingreso- no se produce hasta la entrega en enero de 2026, lo que supone un reconocimiento anticipado de ingresos.",
      riesgo: "Riesgo de sobrevaloración de ingresos (cut-off error) por reconocer ventas antes de cumplirse los criterios de transferencia de control/riesgos y beneficios establecidos en el marco normativo (NRV 14 del PGC / criterios de reconocimiento de ingresos), afectando también a clientes y existencias.",
      partidaAfectada: "Cuenta 700 (Ventas), cuenta 430 (Clientes) y cuenta 300/310 (Existencias), que deberían seguir reconocidas como stock propio hasta la entrega.",
      documentacion: "Contratos de venta con condiciones de entrega (Incoterms); albaranes de entrega firmados por el cliente con fecha real; documentos de transporte (CMR, partes de transportista); correspondencia con el cliente sobre la fecha de recepción; política de reconocimiento de ingresos de la compañía.",
      procedimiento: "Prueba de corte de ventas (sales cut-off) comparando fecha de factura con fecha de albarán/documento de transporte para una muestra ampliada alrededor del cierre (NIA-ES 330); confirmación con el cliente de la fecha real de recepción si existe duda; recálculo del efecto en resultado y en existencias de las operaciones mal cortadas.",
      conclusion: "Las 6 facturas por 210.000 euros deben revertirse del ejercicio 2025 y reconocerse en 2026, reclasificando la mercancía correspondiente de nuevo como existencia a 31/12/2025; se trata de una incorrección material si supera el umbral de materialidad fijado y debe comunicarse a la dirección para su corrección."
    }
  },
  {
    id: "caso-05",
    titulo: "Préstamo bancario mal clasificado entre corto y largo plazo",
    situacion: "En la auditoría de Agroindustrias Levante, S.A. revisas el contrato de un préstamo bancario con saldo vivo a 31/12/2025 de 1.800.000 euros, con cuadro de amortización que establece el pago de 300.000 euros en los próximos 12 meses. La totalidad del saldo (1.800.000 euros) está registrada en la cuenta 171 (Deudas a largo plazo con entidades de crédito), sin reclasificar la parte corriente. El ratio de liquidez de la empresa, calculado con esta clasificación, es de 1,15.",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?"
    ],
    solucion: {
      problema: "No se ha reclasificado a corto plazo la parte del préstamo que vence dentro de los próximos 12 meses (300.000 euros), incumpliendo el criterio de clasificación corriente/no corriente del balance, lo que distorsiona los ratios de liquidez y solvencia de la compañía.",
      riesgo: "Riesgo de clasificación incorrecta del pasivo financiero, que infla artificialmente el fondo de maniobra y los ratios de liquidez presentados a terceros (bancos, accionistas), pudiendo además afectar al cumplimiento de covenants financieros si los hubiera.",
      partidaAfectada: "Cuenta 171 (Deudas a largo plazo con entidades de crédito) y cuenta 520 (Deudas a corto plazo con entidades de crédito).",
      documentacion: "Contrato de préstamo y cuadro de amortización detallado; confirmación bancaria de saldos y condiciones (circularización); covenants financieros asociados al préstamo si existen; estado de flujos de efectivo y conciliación de la deuda financiera.",
      procedimiento: "Revisión de los contratos de financiación y recálculo de la porción corriente según el cuadro de amortización (NIA-ES 500, evidencia suficiente y adecuada); confirmación externa de saldos y condiciones con la entidad financiera (NIA-ES 505); recálculo de los ratios de liquidez con la reclasificación correcta para evaluar el impacto en la imagen fiel.",
      conclusion: "Procede proponer la reclasificación de 300.000 euros de la cuenta 171 a la cuenta 520 (deuda a corto plazo); si la dirección no corrige el ajuste y es material, debería evaluarse su efecto en el informe de auditoría y comunicarlo expresamente, dado el impacto en la presentación de la liquidez de la empresa."
    }
  },
  {
    id: "caso-06",
    titulo: "Diferencia relevante entre el saldo contable de bancos y el extracto bancario",
    situacion: "En la auditoría de Distribuciones Norte, S.L. la conciliación bancaria a 31/12/2025 muestra un saldo según libros de 450.000 euros en la cuenta corriente principal, mientras que el extracto bancario refleja 395.000 euros, una diferencia de 55.000 euros. La conciliación aportada por la empresa explica la diferencia como 'cheques pendientes de cobro', pero al revisar el detalle solo identifican 12.000 euros de cheques en circulación, quedando 43.000 euros sin justificar.",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?"
    ],
    solucion: {
      problema: "Existe una diferencia de 43.000 euros entre el saldo contable y el extracto bancario que no está justificada por las partidas habituales de conciliación (cheques en circulación, transferencias en tránsito), lo que constituye una señal de alerta de posible error contable o, en un escenario más grave, de apropiación indebida de fondos.",
      riesgo: "Riesgo de error o fraude en el área de tesorería: posible registro incorrecto de cobros/pagos, duplicidad de apuntes, o malversación de fondos si no existe una explicación legítima para la diferencia; riesgo de control interno débil en el proceso de conciliación bancaria.",
      partidaAfectada: "Cuenta 572 (Bancos, cuentas corrientes) y las cuentas de contrapartida de los movimientos no identificados (clientes, proveedores, gastos).",
      documentacion: "Extractos bancarios completos del ejercicio y de los meses posteriores al cierre; conciliaciones bancarias mensuales de todo el año; detalle de todos los movimientos (cargos y abonos) de la cuenta en diciembre y enero; confirmación bancaria directa del saldo (NIA-ES 505); autorizaciones y firmas de pagos relevantes.",
      procedimiento: "Confirmación bancaria externa directa con la entidad financiera sobre el saldo a 31/12 (NIA-ES 505); revisión exhaustiva de la conciliación bancaria partida por partida, verificando cada cheque y transferencia pendiente contra el extracto de enero; indagación con el personal de tesorería y, si procede, ampliación de procedimientos ante indicios de fraude (NIA-ES 240).",
      conclusion: "Mientras no se identifique el origen de los 43.000 euros no conciliados, no puede concluirse sobre la razonabilidad del saldo de tesorería; se debe escalar el hallazgo al socio del encargo dada la posible implicación de fraude, y documentar formalmente las gestiones realizadas conforme a NIA-ES 240."
    }
  },
  {
    id: "caso-07",
    titulo: "Caída significativa del margen bruto respecto al ejercicio anterior",
    situacion: "En la auditoría de Metalúrgica Castilla, S.A. el margen bruto (ventas menos coste de ventas) ha caído del 32% en 2024 al 21% en 2025, pese a que las ventas en euros han crecido un 5%. La dirección atribuye la caída al 'aumento del precio de las materias primas', pero no dispone de un análisis cuantitativo que lo soporte. El inventario final de materias primas y producto en curso ha aumentado notablemente respecto al ejercicio anterior.",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?"
    ],
    solucion: {
      problema: "Una caída de 11 puntos porcentuales en el margen bruto es muy significativa y la explicación de la dirección no está cuantificada ni soportada; además, el incremento simultáneo de inventarios de materias primas y producto en curso sugiere que podría haber un error en la valoración de existencias (costes mal imputados, no absorción correcta de costes indirectos) en lugar de, o además de, un efecto real de precios.",
      riesgo: "Riesgo de error en la determinación del coste de ventas y en la valoración de existencias (NRV 10): posible infravaloración de costes de producción trasladada a inventario en lugar de a resultado (gastos capitalizados indebidamente), o riesgo de que el margen real sea aún peor por errores de corte de compras o ventas.",
      partidaAfectada: "Cuenta 600/601 (Compras), cuenta 710/713 (Variación de existencias), cuenta 300/310/330 (Existencias) y, en última instancia, el margen bruto en la cuenta de pérdidas y ganancias.",
      documentacion: "Informe de costes estándar vs costes reales por producto; evolución mensual de precios de las principales materias primas (facturas de compra); escandallos de producto; detalle de la composición del inventario final por tipo (materia prima, curso, producto terminado); políticas de imputación de costes indirectos de fabricación.",
      procedimiento: "Procedimientos analíticos sustantivos desagregando el margen por línea de producto o mes para localizar dónde se origina la caída (NIA-ES 520); recálculo del coste unitario de los principales productos comparando periodos; pruebas de valoración de existencias verificando la correcta imputación de costes directos e indirectos; indagación con producción sobre cambios en procesos o mix de ventas.",
      conclusion: "Si el análisis desagregado muestra que la caída de margen no se explica solo por precios de materias primas sino por una imputación incorrecta de costes a inventario, se debe cuantificar el ajuste necesario en el coste de ventas y existencias; en caso de no obtener evidencia suficiente, se debería considerar una limitación al alcance sobre esta área."
    }
  },
  {
    id: "caso-08",
    titulo: "Clientes con saldos antiguos sin deteriorar",
    situacion: "En la auditoría de Servicios Logísticos Atlántico, S.A. el aging de la cuenta 430 (Clientes) a 31/12/2025 muestra que 180.000 euros de un total de 1.100.000 euros tienen una antigüedad superior a 12 meses, y 65.000 euros de ese importe corresponden a un único cliente en situación de concurso de acreedores conocida desde octubre de 2025. La empresa no ha registrado ningún deterioro de créditos comerciales en el ejercicio ni en el anterior.",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?"
    ],
    solucion: {
      problema: "Existen saldos de clientes con antigüedad superior a 12 meses, incluyendo un cliente en concurso de acreedores desde hace meses, sin que la empresa haya registrado ningún deterioro, lo que vulnera el principio de prudencia y el reconocimiento oportuno de pérdidas por insolvencia.",
      riesgo: "Riesgo de sobrevaloración del saldo de clientes por ausencia de deterioro de créditos comerciales de dudoso cobro (NRV 9 del PGC - Instrumentos financieros), especialmente relevante en el caso del cliente en concurso, cuyo importe es prácticamente incobrable.",
      partidaAfectada: "Cuenta 430 (Clientes), cuenta 436 (Clientes de dudoso cobro) y cuenta 490/694 (Deterioro de valor de créditos por operaciones comerciales).",
      documentacion: "Informe de antigüedad de saldos (aging) detallado por cliente; documentación del procedimiento concursal del cliente afectado (auto de declaración de concurso, informe de la administración concursal); historial de cobros y gestiones de recobro de los saldos antiguos; política de deterioro de clientes de la empresa (si existe).",
      procedimiento: "Revisión individualizada de los saldos de mayor antigüedad y de los clientes con indicios de insolvencia (NIA-ES 540 estimaciones contables); confirmación o indagación sobre la situación legal del cliente en concurso; análisis de cobros posteriores al cierre; recálculo de un deterioro razonable aplicando un criterio de antigüedad o de análisis individualizado según el riesgo de crédito.",
      conclusion: "Procede proponer el registro de un deterioro por, al menos, los 65.000 euros del cliente en concurso (altamente probable su incobrabilidad) y evaluar individualmente el resto de saldos antiguos; la falta de una política de deterioro es una debilidad de control interno a reportar en la carta de recomendaciones."
    }
  },
  {
    id: "caso-09",
    titulo: "Gastos del ejercicio siguiente registrados en el ejercicio actual",
    situacion: "En la auditoría de Consultoría Empresarial Ibérica, S.L. revisas la cuenta de primas de seguros y detectas una factura de 36.000 euros correspondiente a una póliza de responsabilidad civil con cobertura del 1 de octubre de 2025 al 30 de septiembre de 2026, contabilizada íntegramente como gasto del ejercicio 2025 en el momento del pago. No se ha realizado ningún apunte de periodificación. Un análisis preliminar identifica otras tres facturas similares (alquileres y seguros) con un efecto conjunto estimado de 58.000 euros.",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?"
    ],
    solucion: {
      problema: "La empresa registra el gasto en el momento del pago en lugar de imputarlo al periodo al que corresponde según el principio de devengo, por lo que una parte sustancial del gasto (9 de los 12 meses de cobertura de la póliza corresponden a 2026) está indebidamente registrada en el ejercicio 2025, sobrevalorando el gasto de este ejercicio e infravalorando el del siguiente.",
      riesgo: "Riesgo de incorrecta periodificación de gastos (incumplimiento del principio de devengo), que infravalora el resultado del ejercicio actual y lo sobrevalora en el ejercicio siguiente; si el patrón se repite de forma sistemática en otras partidas, el riesgo es de naturaleza más amplia en el área de gastos.",
      partidaAfectada: "Cuenta 625 (Primas de seguros) u otras cuentas de gasto afectadas (621 Arrendamientos) y cuenta 480 (Gastos anticipados / periodificaciones de activo).",
      documentacion: "Facturas y contratos/pólizas con el periodo de cobertura o vigencia indicado; listado de pagos anticipados del ejercicio por tipo de gasto; detalle de la cuenta de periodificaciones de ejercicios anteriores para evaluar consistencia; política contable de la empresa sobre periodificación.",
      procedimiento: "Revisión analítica de las principales cuentas de gasto recurrente (seguros, alquileres, mantenimientos) identificando pagos con periodo de cobertura que exceda el ejercicio; recálculo de la parte del gasto que corresponde a 2026 y del ajuste de periodificación necesario; ampliación de la muestra a otras partidas de naturaleza similar para cuantificar el efecto total.",
      conclusion: "Procede proponer un ajuste de periodificación por los 58.000 euros identificados, reclasificando la parte correspondiente a 2026 de gasto a la cuenta 480 (gastos anticipados); dado que el error parece sistemático, se recomienda a la empresa implementar un procedimiento de periodificación mensual como mejora de control interno."
    }
  },
  {
    id: "caso-10",
    titulo: "Demanda judicial recibida después del cierre del ejercicio",
    situacion: "El informe de auditoría de Químicas del Ebro, S.A. está previsto para firmarse el 15 de marzo de 2026, correspondiente al ejercicio cerrado a 31/12/2025. El 20 de febrero de 2026 la empresa recibe una demanda de un antiguo cliente reclamando 420.000 euros por supuestos defectos en un producto suministrado en noviembre de 2025. El departamento jurídico interno considera que la probabilidad de pérdida es 'posible pero no probable', y no se ha registrado ninguna provisión ni se ha informado en la memoria.",
    preguntasGuia: [
      "¿Cuál es el problema o la señal de alerta en esta situación?",
      "¿Qué riesgo de auditoría existe?",
      "¿Qué partida o partidas contables están afectadas?",
      "¿Qué documentación solicitarías para investigarlo?",
      "¿Qué procedimiento de auditoría aplicarías?",
      "¿Qué conclusión preliminar sacarías?"
    ],
    solucion: {
      problema: "Se trata de un hecho posterior al cierre pero anterior a la fecha de emisión del informe de auditoría, relacionado con un hecho (suministro del producto defectuoso) que ya existía a 31/12/2025, por lo que debe evaluarse su tratamiento contable y su adecuada información en las cuentas anuales de 2025, no de 2026.",
      riesgo: "Riesgo de que no se reconozca correctamente un pasivo contingente o una provisión, y de que la memoria no incluya la información requerida sobre hechos posteriores y contingencias, afectando a la imagen fiel de las cuentas anuales de 2025.",
      partidaAfectada: "Memoria de las cuentas anuales (apartado de hechos posteriores y contingencias) y, en su caso, cuenta 142/5240 (Provisión para otras responsabilidades) y cuenta 679 (Gastos excepcionales) si la probabilidad de pérdida se reevaluase como probable.",
      documentacion: "Copia de la demanda y documentación del procedimiento judicial; informe del asesor jurídico (interno o externo) sobre la probabilidad de éxito y cuantía estimada de la reclamación; correspondencia relacionada con el suministro del producto en noviembre de 2025; carta de manifestaciones de la dirección y carta a los abogados (NIA-ES 501).",
      procedimiento: "Revisión de hechos posteriores hasta la fecha de emisión del informe conforme a NIA-ES 560; solicitud de carta de confirmación a los abogados de la compañía sobre litigios en curso (NIA-ES 501); evaluación de la clasificación de la contingencia como remota, posible o probable según NRV 15 del PGC (NIC 37); valoración de si la información en la memoria es suficiente dado que el hecho que origina la demanda es anterior al cierre.",
      conclusion: "Al tratarse de un hecho posterior que confirma una condición existente a la fecha de cierre y cuya probabilidad de pérdida se califica como posible (no probable), no procede registrar una provisión, pero sí es obligatorio incluir en la memoria de 2025 la información sobre el pasivo contingente; si la dirección no amplía la información en la memoria, debería evaluarse el efecto sobre el informe de auditoría."
    }
  }
];
