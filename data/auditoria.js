export const teoriaAuditoria = [
  {
    id: "omnia",
    titulo: "OMNIA",
    resumen: "Plataforma de documentación de auditoría de Deloitte basada en un enfoque de auditoría centrado en el riesgo.",
    secciones: [
      {
        subtitulo: "Qué es",
        contenido:
          "<p>OMNIA es el <strong>software/plataforma de documentación de auditoría</strong> que utiliza Deloitte a nivel global para planificar, ejecutar y documentar los trabajos de auditoría de cuentas.</p><p>Es de dominio público que se trata de una herramienta propia de la firma (metodología <strong>Deloitte Audit Approach</strong>) que estructura el trabajo siguiendo un <strong>enfoque de auditoría basado en riesgos</strong>, alineado con las normas internacionales de auditoría (NIA-ES/ISA). No es un simple archivador de papeles: organiza el expediente de auditoría por áreas, riesgos y conclusiones.</p><p>Como junior, lo relevante no es memorizar pantallas concretas, sino entender que es el <strong>soporte digital donde queda constancia de todo lo que el equipo de auditoría hace, piensa y concluye</strong>.</p>"
      },
      {
        subtitulo: "Para qué sirve",
        contenido:
          "<p>Sirve para dar <strong>soporte y trazabilidad</strong> a todo el proceso de auditoría: desde la aceptación/continuidad del cliente, la planificación y la identificación de riesgos, hasta la ejecución de los procedimientos y la emisión del informe.</p><ul><li>Permite que el equipo documente el <strong>enfoque de auditoría</strong> elegido para cada área (qué riesgos existen y qué se va a hacer para responder a ellos).</li><li>Centraliza la <strong>evidencia de auditoría</strong> obtenida (papeles de trabajo, confirmaciones, análisis, conclusiones).</li><li>Facilita la <strong>revisión jerárquica</strong> del trabajo (socio, gerente, senior) y el control de calidad interno.</li><li>Ayuda a que el trabajo quede alineado con los requisitos normativos de las NIA-ES de forma consistente en todas las oficinas de la firma.</li></ul>"
      },
      {
        subtitulo: "Cómo se utiliza dentro de un proceso de auditoría",
        contenido:
          "<p>De forma general (sin entrar en detalles operativos internos), el uso sigue la lógica del propio proceso de auditoría: se documenta la <strong>planificación</strong> (entendimiento del negocio y del control interno), la <strong>evaluación de riesgos</strong> por área o aserción, el <strong>diseño de procedimientos</strong> de auditoría (pruebas de controles y/o sustantivas) para responder a esos riesgos, y finalmente la <strong>ejecución y conclusión</strong> sobre cada área, hasta llegar a la conclusión global que sustenta el informe de auditoría.</p><p>El expediente queda organizado de manera que cualquier revisor pueda seguir el hilo entre <em>riesgo identificado → procedimiento diseñado → evidencia obtenida → conclusión alcanzada</em>.</p>"
      },
      {
        subtitulo: "Qué tipo de documentación se incorpora",
        contenido:
          "<p>En términos generales se incorpora toda la evidencia y el razonamiento profesional del equipo: memorandos de planificación, matrices de riesgos, papeles de trabajo con las pruebas realizadas (recálculos, confirmaciones, muestreos), documentación de controles internos, análisis de ratios y variaciones, y las conclusiones por área y globales.</p><p>También queda constancia de la <strong>revisión</strong> realizada por niveles superiores (comentarios, puntos abiertos, resolución de dichos puntos) antes de firmar el informe.</p>"
      },
      {
        subtitulo: "Relación con riesgos y procedimientos",
        contenido:
          "<p>OMNIA es, en esencia, el <strong>vehículo documental</strong> de la metodología de auditoría basada en riesgos (muy relacionada con GRA, ver siguiente tema): primero se identifican y valoran los riesgos de distorsión material (NIA-ES 315) y después se documenta la respuesta a esos riesgos mediante procedimientos de auditoría (NIA-ES 330).</p><p>Por eso, en una entrevista, lo más honesto y seguro es decir: <em>«OMNIA es la herramienta donde Deloitte documenta el enfoque de auditoría basado en riesgos, enlazando cada riesgo identificado con los procedimientos diseñados para responder a él y con la evidencia obtenida»</em>, sin inventar detalles de interfaz.</p>"
      }
    ],
    avisoMetodologia:
      "Nota: OMNIA y la metodología GRA son herramientas y metodología propias de Deloitte. Esta explicación es general y conceptual (qué función cumplen y su relación con las normas de auditoría NIA-ES/ISA); los detalles concretos de uso pueden variar y se conocen mejor durante el proceso de formación interno. En la entrevista es más seguro mostrar que entiendes el PROPÓSITO (documentar el enfoque de auditoría basado en riesgos) que afirmar detalles operativos muy específicos."
  },
  {
    id: "gra",
    titulo: "GRA (Guided Risk Assessment)",
    resumen: "Enfoque guiado de evaluación de riesgos que clasifica los riesgos identificados en distintos niveles para orientar la respuesta de auditoría.",
    secciones: [
      {
        subtitulo: "Qué es y para qué sirve",
        contenido:
          "<p>GRA (<em>Guided Risk Assessment</em>, evaluación de riesgos guiada) es el nombre con el que se conoce el enfoque metodológico que utiliza Deloitte para <strong>identificar, valorar y documentar los riesgos de distorsión material</strong> de forma estructurada durante la fase de planificación de la auditoría.</p><p>Su finalidad es asegurar que el equipo evalúa de manera consistente y sistemática los riesgos a nivel de estados financieros y a nivel de afirmación (existencia, integridad, valoración, etc.) para cada área significativa, en línea con lo exigido por la NIA-ES 315 (<em>Identificación y valoración de los riesgos de incorrección material</em>).</p>"
      },
      {
        subtitulo: "Documentación de riesgos",
        contenido:
          "<p>Para cada riesgo identificado se documenta, de forma general: el área o ciclo afectado (ventas, compras, nómina, etc.), la afirmación o aserción en riesgo, la causa del riesgo (por ejemplo, presión por cumplir objetivos comerciales, complejidad de una estimación contable, o posibilidad de fraude), y el nivel de riesgo asignado.</p><p>A partir de esa valoración se diseña la <strong>respuesta de auditoría</strong> (NIA-ES 330): qué naturaleza, alcance y momento tendrán los procedimientos a aplicar.</p>"
      },
      {
        subtitulo: "Niveles de riesgo: Low, Higher, Significant",
        contenido:
          "<p>De forma conceptual, los riesgos se suelen clasificar en niveles crecientes de atención:</p><ul><li><strong>Low (riesgo bajo):</strong> riesgo de distorsión material poco probable o de impacto reducido; puede requerir procedimientos sustantivos estándar, en ocasiones apoyados en procedimientos analíticos.</li><li><strong>Higher (riesgo más elevado / \"elevated\"):</strong> riesgo con mayor probabilidad o impacto potencial, que exige procedimientos más extensos o más dirigidos que en el caso de riesgo bajo.</li><li><strong>Significant (riesgo significativo):</strong> según la NIA-ES 315, es un riesgo identificado y valorado de incorrección material que, a juicio del auditor, <strong>requiere una consideración especial de auditoría</strong>. No es una etiqueta interna arbitraria, sino un concepto normativo: exige respuestas de auditoría específicamente diseñadas y no puede responderse únicamente con procedimientos analíticos sustantivos ni basarse solo en evidencia de ejercicios anteriores.</li></ul>"
      },
      {
        subtitulo: "Cómo se determina el nivel de riesgo",
        contenido:
          "<p>El auditor valora, para cada riesgo, dos dimensiones: la <strong>probabilidad</strong> de que ocurra una distorsión (ligada a la complejidad de la operación, el juicio o estimación involucrado, el historial de errores, o la posibilidad de fraude) y la <strong>magnitud del posible impacto</strong> en los estados financieros.</p><p>También se consideran factores cualitativos: operaciones inusuales o no rutinarias, estimaciones contables complejas o con alto grado de subjetividad, riesgo de fraude (NIA-ES 240) y cambios relevantes en el negocio o en el entorno regulatorio del cliente. Cuanta mayor probabilidad e impacto, y mayor subjetividad o posibilidad de manipulación, más alto será el nivel de riesgo asignado.</p>"
      },
      {
        subtitulo: "Riesgos significativos: ejemplo del ciclo de ventas",
        contenido:
          "<p>Un ejemplo clásico de riesgo significativo es el <strong>reconocimiento de ingresos</strong>, que de hecho se presume como riesgo de fraude bajo las NIA-ES salvo que el auditor concluya lo contrario.</p><p>El proceso de ventas típico funciona así: un comercial negocia y cierra una venta con el cliente; se genera un pedido que es aceptado según la política de crédito de la compañía; el almacén o el departamento de operaciones confirma la entrega del bien o la prestación del servicio; administración emite la factura con base en el pedido/albarán aceptado; y finalmente se contabiliza el ingreso cuando se transfiere el control del bien o servicio al cliente (criterio de devengo).</p><p>Los <strong>controles</strong> habituales incluyen: separación de funciones entre quien vende, quien aprueba el crédito, quien despacha la mercancía y quien factura; conciliación periódica entre pedidos, albaranes y facturas emitidas; y revisión de notas de crédito o devoluciones posteriores al cierre.</p><p>Los <strong>errores o riesgos</strong> típicos son: reconocer ingresos antes de que se haya transferido realmente el control del bien (adelantar ventas de un periodo a otro, \"channel stuffing\"), facturar ventas ficticias o sin soporte, o no dar de baja ingresos que deberían anularse por devoluciones.</p><p>Los <strong>procedimientos de auditoría</strong> típicos para responder a este riesgo significativo son: pruebas de corte (cut-off) de ventas alrededor del cierre, inspección de contratos y condiciones de entrega, confirmaciones externas de saldos de clientes, revisión de notas de crédito posteriores al cierre, y procedimientos analíticos sustantivos sobre la evolución de ventas y márgenes por cliente o línea de negocio.</p>"
      }
    ],
    avisoMetodologia:
      "Nota: OMNIA y la metodología GRA son herramientas y metodología propias de Deloitte. Esta explicación es general y conceptual (qué función cumplen y su relación con las normas de auditoría NIA-ES/ISA); los detalles concretos de uso pueden variar y se conocen mejor durante el proceso de formación interno. En la entrevista es más seguro mostrar que entiendes el PROPÓSITO (documentar el enfoque de auditoría basado en riesgos) que afirmar detalles operativos muy específicos."
  },
  {
    id: "procedimientos",
    titulo: "Procedimientos de auditoría",
    resumen: "Las técnicas básicas que utiliza el auditor para obtener evidencia suficiente y adecuada (NIA-ES 500).",
    secciones: [
      {
        subtitulo: "Inspección documental",
        contenido:
          "<p>Consiste en <strong>examinar registros o documentos</strong>, ya sean internos o externos, en soporte físico, electrónico u otro medio, o en examinar físicamente un activo.</p><p><em>Ejemplo:</em> revisar el contrato de un préstamo bancario para verificar las condiciones (tipo de interés, vencimiento, garantías) que deben estar reflejadas en la memoria de las cuentas anuales.</p>"
      },
      {
        subtitulo: "Confirmaciones externas",
        contenido:
          "<p>El auditor obtiene una <strong>manifestación directa de un tercero</strong> (normalmente por escrito), dirigida al propio auditor, sobre un dato concreto o sobre un asunto determinado, para corroborar la información registrada en la contabilidad (NIA-ES 505).</p><p><em>Ejemplo:</em> enviar una carta de confirmación de saldo a un cliente importante para verificar el importe pendiente de cobro a 31 de diciembre, o a un banco para confirmar saldos de cuentas, préstamos y avales.</p>"
      },
      {
        subtitulo: "Observación",
        contenido:
          "<p>Consiste en <strong>presenciar un proceso o procedimiento</strong> que están ejecutando otras personas, sin intervenir en él. La evidencia obtenida se limita al momento concreto en que se realiza la observación.</p><p><em>Ejemplo:</em> asistir al recuento físico de existencias (inventario) al cierre del ejercicio para observar cómo el personal del cliente realiza el conteo y aplica sus procedimientos de control.</p>"
      },
      {
        subtitulo: "Indagación",
        contenido:
          "<p>Consiste en <strong>buscar información</strong>, financiera y no financiera, de personas con conocimiento, tanto dentro como fuera de la entidad. Por sí sola rara vez proporciona evidencia suficiente, por lo que suele combinarse con otros procedimientos.</p><p><em>Ejemplo:</em> preguntar al departamento financiero sobre la existencia de litigios en curso o de contingencias no registradas, y corroborar la respuesta con la carta del asesor legal externo.</p>"
      },
      {
        subtitulo: "Recálculo",
        contenido:
          "<p>Consiste en <strong>comprobar la exactitud matemática</strong> de documentos o registros, ya sea manualmente o de forma electrónica.</p><p><em>Ejemplo:</em> recalcular la amortización de un inmovilizado material aplicando el método y el porcentaje de amortización indicados por la empresa, y comparar el resultado con el importe contabilizado.</p>"
      },
      {
        subtitulo: "Reejecución",
        contenido:
          "<p>Consiste en que el propio auditor ejecute de forma <strong>independiente procedimientos o controles</strong> que originalmente realizó el personal de la entidad como parte del control interno.</p><p><em>Ejemplo:</em> reejecutar la conciliación bancaria de un mes concreto, partiendo del extracto bancario y del libro mayor, para comprobar que el control de conciliación realizado por la empresa funciona correctamente.</p>"
      },
      {
        subtitulo: "Procedimientos analíticos",
        contenido:
          "<p>Consisten en evaluar la <strong>información financiera a través del análisis de relaciones plausibles</strong> entre datos financieros y no financieros, incluyendo la comparación de los importes registrados con expectativas desarrolladas por el auditor.</p><p><em>Ejemplo:</em> comparar el margen bruto del ejercicio actual con el de ejercicios anteriores y con la media del sector, e investigar cualquier variación inesperada.</p>"
      },
      {
        subtitulo: "Pruebas de controles",
        contenido:
          "<p>Son procedimientos diseñados para evaluar la <strong>eficacia operativa de los controles</strong> internos en la prevención, o en la detección y corrección, de incorrecciones materiales a nivel de afirmación.</p><p><em>Ejemplo:</em> verificar, mediante una muestra de facturas de compra, que todas ellas cuentan con la firma de aprobación del responsable correspondiente antes de su contabilización y pago.</p>"
      },
      {
        subtitulo: "Pruebas sustantivas",
        contenido:
          "<p>Son procedimientos diseñados para <strong>detectar incorrecciones materiales</strong> a nivel de afirmación, e incluyen tanto pruebas de detalle sobre tipos de transacciones, saldos contables e información a revelar, como procedimientos analíticos sustantivos.</p><p><em>Ejemplo:</em> seleccionar una muestra de saldos de clientes y confirmar directamente con ellos el importe pendiente de cobro, o verificar el cálculo del deterioro de un activo.</p>"
      }
    ],
    avisoMetodologia: null
  },
  {
    id: "cirbe",
    titulo: "CIRBE",
    resumen: "Central de Información de Riesgos del Banco de España: base de datos de riesgos crediticios declarados por las entidades financieras.",
    secciones: [
      {
        subtitulo: "Qué es",
        contenido:
          "<p>La CIRBE (<strong>Central de Información de Riesgos del Banco de España</strong>) es una base de datos gestionada por el Banco de España en la que las entidades financieras (bancos, cajas, cooperativas de crédito, entidades de financiación) están obligadas a declarar, con carácter mensual, los <strong>riesgos crediticios</strong> que mantienen con sus clientes.</p><p>Contiene información sobre préstamos, créditos, líneas de descuento, avales y garantías concedidas, siempre que superen determinados <strong>umbrales mínimos</strong> establecidos por la normativa (los riesgos de importe muy reducido pueden no declararse).</p>"
      },
      {
        subtitulo: "Qué información permite contrastar",
        contenido:
          "<p>Permite contrastar el <strong>endeudamiento financiero total</strong> de una empresa con entidades de crédito declarantes: importe dispuesto y disponible de préstamos y líneas de crédito, avales y garantías otorgadas a favor de terceros, y la clasificación del riesgo (por ejemplo, si está clasificado como normal, dudoso o en situación especial) según la entidad declarante.</p><p>Es muy útil para verificar que la deuda financiera registrada en el balance coincide, en términos globales, con lo declarado por las entidades financieras al Banco de España.</p>"
      },
      {
        subtitulo: "Cómo se utiliza en auditoría",
        contenido:
          "<p>El auditor puede solicitar al cliente que obtenga su informe de CIRBE (la propia empresa puede pedirlo al Banco de España) y lo utiliza como una <strong>evidencia adicional e independiente</strong> para corroborar la integridad y existencia del endeudamiento financiero declarado por la sociedad.</p><p>Se suele comparar el detalle de préstamos, créditos y avales de la CIRBE con el desglose de deuda financiera recogido en la memoria de las cuentas anuales y con las confirmaciones bancarias directas obtenidas por el auditor.</p>"
      },
      {
        subtitulo: "Utilidad para comprobar deudas financieras",
        contenido:
          "<p>Es especialmente útil para detectar <strong>deuda financiera no registrada</strong> u omitida por la empresa (por ejemplo, avales u otras financiaciones con entidades distintas de las habituales), ya que la CIRBE recoge información consolidada de todas las entidades declarantes, no solo de las que el cliente menciona.</p><p>También ayuda a verificar la <strong>integridad</strong> de los avales y garantías concedidas, que en ocasiones no quedan reflejadas en balance al ser pasivos contingentes.</p>"
      },
      {
        subtitulo: "Limitaciones",
        contenido:
          "<p>La CIRBE tiene varias limitaciones relevantes: solo recoge riesgos por encima de ciertos umbrales (operaciones muy pequeñas pueden no aparecer), la información se actualiza con cierto <strong>desfase temporal</strong> (normalmente mensual, por lo que puede no reflejar el saldo exacto a la fecha de cierre), y solo incluye riesgos declarados por entidades de crédito sujetas a esta obligación, no por otros acreedores (proveedores, financiación entre empresas del grupo, préstamos de socios, etc.).</p>"
      },
      {
        subtitulo: "Por qué NO equivale a un extracto de todas las cuentas bancarias",
        contenido:
          "<p>Es un error frecuente pensar que la CIRBE muestra los saldos de las cuentas corrientes o depósitos de una empresa: <strong>no es así</strong>. La CIRBE únicamente recoge <strong>riesgos de naturaleza crediticia</strong> (lo que el cliente debe o puede llegar a deber a la entidad: préstamos, créditos, avales), no los saldos de tesorería o depósitos que la empresa mantiene en sus cuentas bancarias.</p><p>Por tanto, para verificar el saldo de tesorería en bancos, el auditor necesita obtener <strong>confirmaciones bancarias directas</strong> (NIA-ES 505) o extractos bancarios de cada entidad, y no puede sustituir ese trabajo por la consulta de la CIRBE. Además, al tener umbrales de declaración y un desfase de actualización, la CIRBE no sustituye tampoco a la confirmación directa de la deuda financiera, sino que la complementa.</p>"
      }
    ],
    avisoMetodologia: null
  },
  {
    id: "hechos-posteriores",
    titulo: "Hechos posteriores al cierre",
    resumen: "Sucesos ocurridos entre la fecha de cierre y la fecha del informe de auditoría que pueden afectar a las cuentas anuales (NIA-ES 560).",
    secciones: [
      {
        subtitulo: "Qué son y qué periodo abarcan",
        contenido:
          "<p>Los hechos posteriores al cierre son aquellos <strong>sucesos que ocurren entre la fecha de cierre del ejercicio</strong> (por ejemplo, 31 de diciembre) <strong>y la fecha de formulación/firma del informe de auditoría</strong>, que pueden proporcionar evidencia sobre condiciones existentes a la fecha de cierre o revelar condiciones surgidas después.</p><p>La NIA-ES 560 (<em>Hechos posteriores al cierre</em>) regula la responsabilidad del auditor de obtener evidencia suficiente y adecuada sobre si esos hechos se han contabilizado o revelado correctamente en los estados financieros, dentro del periodo que va desde la fecha de los estados financieros hasta la fecha del informe de auditoría, e incluso contempla hechos descubiertos después de la fecha del informe pero antes de la publicación de las cuentas.</p>"
      },
      {
        subtitulo: "Hechos que requieren ajuste vs. hechos que requieren información en memoria",
        contenido:
          "<p>Se distinguen dos categorías:</p><ul><li><strong>Hechos que proporcionan evidencia de condiciones que ya existían en la fecha de cierre</strong> (hechos posteriores que implican ajuste): deben dar lugar a un <strong>ajuste</strong> en los importes reconocidos en los estados financieros, porque confirman una situación que ya existía al cierre.</li><li><strong>Hechos que son indicativos de condiciones surgidas después de la fecha de cierre</strong> (hechos posteriores que no implican ajuste): no se ajustan las cifras, pero si son significativos su omisión podría influir en las decisiones de los usuarios, por lo que deben <strong>revelarse en la memoria</strong> (naturaleza del hecho y una estimación de su efecto financiero, o la indicación de que no puede estimarse).</li></ul>"
      },
      {
        subtitulo: "Ejemplos prácticos",
        contenido:
          "<p>Algunos ejemplos habituales, distinguiendo el tipo de hecho:</p><ul><li><strong>Requiere ajuste:</strong> la resolución, después del cierre, de un litigio judicial que confirma que la empresa ya tenía una obligación presente a la fecha de cierre, por lo que debe registrarse o ajustarse la provisión correspondiente.</li><li><strong>Requiere ajuste:</strong> la quiebra de un cliente después del cierre que confirma que su saldo de cuentas a cobrar ya estaba deteriorado en la fecha de cierre, lo que obliga a ajustar el deterioro reconocido.</li><li><strong>Requiere información en memoria:</strong> una combinación de negocios importante (adquisición de otra empresa) realizada después del cierre, que no afecta a las cifras del ejercicio cerrado pero debe revelarse por su relevancia para los usuarios.</li><li><strong>Requiere información en memoria:</strong> una pérdida significativa de activos (por ejemplo, un incendio en una planta productiva) ocurrida después del cierre, que no existía como condición a la fecha de cierre pero es relevante para entender la situación futura de la empresa.</li><li><strong>Requiere información en memoria (o incluso afecta a la continuidad):</strong> el anuncio de un plan de reestructuración o el deterioro significativo de la situación financiera del cliente tras el cierre, que puede llegar a cuestionar la aplicación del principio de empresa en funcionamiento.</li></ul>"
      },
      {
        subtitulo: "Qué debería hacer un auditor ante cada situación",
        contenido:
          "<p>Ante un hecho que requiere ajuste, el auditor debe verificar que la empresa <strong>modifica los importes</strong> correspondientes en los estados financieros y obtener evidencia de que el ajuste refleja correctamente la condición existente al cierre.</p><p>Ante un hecho que requiere solo información en memoria, el auditor debe comprobar que la empresa <strong>incluye la revelación</strong> adecuada (naturaleza del hecho y, si es posible, una estimación de su efecto, o explicar por qué no puede estimarse).</p><p>En ambos casos, el auditor debe realizar <strong>procedimientos específicos</strong> hasta la fecha del informe (revisar actas posteriores, indagar con la dirección y los asesores legales, revisar presupuestos y previsiones, leer la prensa o comunicados relevantes) para identificar estos hechos, y si descubre un hecho posterior significativo después de haber firmado el informe pero antes de la publicación de las cuentas, debe discutirlo con la dirección y, si procede, modificar el informe.</p>"
      }
    ],
    avisoMetodologia: null
  },
  {
    id: "facturas-pendientes",
    titulo: "Facturas pendientes de recibir y de emitir",
    resumen: "Ajustes de periodificación para registrar correctamente los gastos e ingresos ya devengados pero aún no facturados.",
    secciones: [
      {
        subtitulo: "Facturas pendientes de recibir",
        contenido:
          "<p>Son <strong>gastos o compras ya devengados</strong> (el bien se ha recibido o el servicio ya se ha prestado) a la fecha de cierre, pero de los cuales el proveedor todavía no ha emitido la factura correspondiente. En el Plan General de Contabilidad español se suelen registrar en la cuenta <strong>410 (Acreedores por prestación de servicios)</strong> o, de forma más específica, en una subcuenta como la <strong>4109 (Envases y embalajes a devolver a proveedores)</strong> o, más habitualmente en la práctica, en cuentas del tipo \"provisión por facturas pendientes de recibir\" dentro del grupo 41/40.</p><p><em>Ejemplo:</em> a 31 de diciembre la empresa ha recibido un suministro eléctrico correspondiente a diciembre, pero la factura de la comercializadora no llega hasta febrero del año siguiente. Al cierre, debe estimarse y contabilizar el gasto de diciembre con cargo a la cuenta de gasto correspondiente y abono a una cuenta de acreedores por servicios pendientes de facturar.</p>"
      },
      {
        subtitulo: "Facturas pendientes de emitir",
        contenido:
          "<p>Son <strong>ventas o ingresos ya devengados</strong> (el bien se ha entregado o el servicio ya se ha prestado al cliente) a la fecha de cierre, pero la empresa todavía no ha emitido la factura correspondiente. Se registran habitualmente en la cuenta <strong>4430 (Clientes, facturas pendientes de formalizar)</strong>.</p><p><em>Ejemplo:</em> una empresa de servicios de consultoría ha prestado servicios durante diciembre a un cliente, pero por su ciclo de facturación la factura no se emite hasta enero. El ingreso correspondiente a diciembre debe reconocerse en el ejercicio cerrado (con cargo a la cuenta 4430 y abono a la cuenta de ingresos), de acuerdo con el principio de devengo.</p><p>Esto está directamente relacionado con la <strong>periodificación de ingresos</strong>: el ingreso se reconoce cuando se transfiere el control del bien o servicio al cliente, con independencia del momento en que se emita la factura.</p>"
      },
      {
        subtitulo: "Riesgos de auditoría asociados",
        contenido:
          "<p>El principal riesgo asociado es el de <strong>corte de operaciones (cut-off)</strong>: que gastos o ingresos devengados en el ejercicio queden registrados en el periodo incorrecto por no haberse facturado todavía, lo que vulneraría el principio de <strong>devengo</strong> y podría distorsionar tanto el resultado del ejercicio como los saldos de balance.</p><p>El auditor debe realizar pruebas específicas de corte: revisar albaranes, partes de entrega o informes de prestación de servicios cercanos al cierre y comprobar en qué periodo se registró el gasto o el ingreso correspondiente; revisar facturas recibidas o emitidas con posterioridad al cierre para verificar si corresponden a operaciones devengadas antes o después del cierre; y evaluar la razonabilidad de las estimaciones realizadas por la empresa para las facturas pendientes de recibir o de emitir cuyo importe exacto todavía no se conoce.</p>"
      }
    ],
    avisoMetodologia: null
  }
];

export const auditoriaQuiz = [
  {
    id: "aud001",
    modulo: "auditoria",
    tema: "OMNIA",
    dificultad: "intermedio",
    enunciado: "¿Qué es OMNIA en el contexto de Deloitte?",
    opciones: {
      A: "La plataforma/software de documentación de auditoría que usa Deloitte, basada en un enfoque de auditoría centrado en el riesgo",
      B: "Una norma internacional de auditoría (NIA-ES) sobre evidencia de auditoría",
      C: "El nombre del software de contabilidad que usan los clientes de Deloitte",
      D: "Un tipo de informe de auditoría con salvedades"
    },
    correcta: "A",
    explicacion:
      "OMNIA es la herramienta/plataforma propia de Deloitte para planificar, ejecutar y documentar el trabajo de auditoría siguiendo un enfoque basado en riesgos, alineado con las NIA-ES.",
    porQueNoLasOtras: {
      B: "Las NIA-ES son normas emitidas por organismos reguladores/profesionales, no una herramienta interna de Deloitte.",
      C: "OMNIA es una herramienta del auditor, no un software de contabilidad del cliente.",
      D: "Un informe con salvedades es un tipo de opinión de auditoría, no tiene relación directa con OMNIA."
    }
  },
  {
    id: "aud002",
    modulo: "auditoria",
    tema: "OMNIA",
    dificultad: "basico",
    enunciado: "¿Cuál de las siguientes afirmaciones sobre OMNIA es la más correcta y prudente para responder en una entrevista?",
    opciones: {
      A: "Es el vehículo documental donde se enlaza cada riesgo identificado con los procedimientos diseñados y la evidencia obtenida, sin que haga falta describir pantallas o menús concretos",
      B: "Es un algoritmo de inteligencia artificial que decide automáticamente la opinión de auditoría",
      C: "Es un programa público que cualquier empresa puede descargar para auditarse a sí misma",
      D: "Sustituye por completo el juicio profesional del auditor"
    },
    correcta: "A",
    explicacion:
      "Lo honesto y seguro en una entrevista es centrarse en el propósito de OMNIA (documentar el enfoque de auditoría basado en riesgos) sin inventar detalles operativos internos que no son de dominio público.",
    porQueNoLasOtras: {
      B: "OMNIA es una herramienta de documentación, no una IA que decide la opinión de auditoría.",
      C: "No es un software público de autoauditoría; es una herramienta interna de la firma.",
      D: "La herramienta apoya el trabajo, pero el juicio profesional del auditor sigue siendo imprescindible."
    }
  },
  {
    id: "aud003",
    modulo: "auditoria",
    tema: "GRA",
    dificultad: "intermedio",
    enunciado: "¿Qué significa que un riesgo esté clasificado como 'Significant Risk' según la NIA-ES 315?",
    opciones: {
      A: "Es un riesgo de incorrección material que, a juicio del auditor, requiere una consideración especial de auditoría",
      B: "Es un riesgo que se puede ignorar porque es poco frecuente",
      C: "Es un riesgo que solo afecta a empresas cotizadas",
      D: "Es un riesgo que automáticamente implica una opinión con salvedades"
    },
    correcta: "A",
    explicacion:
      "La NIA-ES 315 define el riesgo significativo como aquel que, por su naturaleza o magnitud, requiere una atención especial por parte del auditor y una respuesta de auditoría específicamente diseñada.",
    porQueNoLasOtras: {
      B: "Todo lo contrario: un riesgo significativo exige mayor atención, no menos.",
      C: "El concepto de riesgo significativo aplica a cualquier entidad auditada, cotizada o no.",
      D: "Un riesgo significativo exige procedimientos adicionales, pero no determina por sí mismo el tipo de opinión."
    }
  },
  {
    id: "aud004",
    modulo: "auditoria",
    tema: "GRA",
    dificultad: "intermedio",
    enunciado: "Ante un riesgo clasificado como 'Significant Risk', ¿qué NO puede hacer el auditor según la NIA-ES?",
    opciones: {
      A: "Responder únicamente con procedimientos analíticos sustantivos, sin ninguna prueba de detalle",
      B: "Diseñar procedimientos sustantivos específicos adicionales",
      C: "Obtener un mayor entendimiento de los controles relacionados con ese riesgo",
      D: "Documentar de forma reforzada la respuesta de auditoría diseñada"
    },
    correcta: "A",
    explicacion:
      "La NIA-ES 315 establece que, si el auditor ha determinado que existe un riesgo significativo, no debe responder únicamente con procedimientos analíticos sustantivos; se requieren procedimientos sustantivos específicamente diseñados, que a menudo incluyen pruebas de detalle.",
    porQueNoLasOtras: {
      B: "Es precisamente lo que se exige: procedimientos sustantivos adicionales y específicamente diseñados.",
      C: "Obtener un mejor entendimiento de los controles relacionados es una respuesta adecuada ante un riesgo significativo.",
      D: "La documentación reforzada es coherente con el tratamiento que exige un riesgo significativo."
    }
  },
  {
    id: "aud005",
    modulo: "auditoria",
    tema: "GRA",
    dificultad: "basico",
    enunciado: "En el ejemplo del ciclo de ventas, ¿por qué el reconocimiento de ingresos suele considerarse un riesgo significativo?",
    opciones: {
      A: "Porque las NIA-ES presumen que existe riesgo de fraude en el reconocimiento de ingresos, salvo que el auditor concluya lo contrario",
      B: "Porque las ventas nunca se pueden auditar",
      C: "Porque siempre implica errores matemáticos en las facturas",
      D: "Porque solo afecta a empresas que venden al contado"
    },
    correcta: "A",
    explicacion:
      "Las NIA-ES (en línea con la NIA-ES 240 sobre fraude) parten de la presunción de que existe riesgo de fraude en el reconocimiento de ingresos, lo que habitualmente lo convierte en un riesgo significativo que requiere procedimientos específicos.",
    porQueNoLasOtras: {
      B: "Las ventas sí se auditan; de hecho es una de las áreas más relevantes de cualquier auditoría.",
      C: "El riesgo no se limita a errores matemáticos, sino a la posibilidad de manipulación en el momento y la forma de reconocer el ingreso.",
      D: "El riesgo de reconocimiento de ingresos aplica a cualquier modelo de venta, al contado o a crédito."
    }
  },
  {
    id: "aud006",
    modulo: "auditoria",
    tema: "GRA",
    dificultad: "intermedio",
    enunciado: "¿Cuál de los siguientes NO es un control típico dentro del ciclo de ventas para mitigar el riesgo de reconocimiento de ingresos?",
    opciones: {
      A: "Que la misma persona negocie la venta, apruebe el crédito y emita la factura sin ninguna revisión adicional",
      B: "Separación de funciones entre venta, aprobación de crédito, despacho y facturación",
      C: "Conciliación periódica entre pedidos, albaranes y facturas emitidas",
      D: "Revisión de notas de crédito y devoluciones posteriores al cierre"
    },
    correcta: "A",
    explicacion:
      "Concentrar todas esas funciones en una sola persona sin revisión elimina la separación de funciones, lo que constituye una debilidad de control, no un control mitigante.",
    porQueNoLasOtras: {
      B: "La separación de funciones es precisamente uno de los controles clave en el ciclo de ventas.",
      C: "Conciliar pedidos, albaranes y facturas es un control habitual para detectar incoherencias.",
      D: "Revisar notas de crédito posteriores al cierre ayuda a detectar ventas que deberían anularse o ajustarse."
    }
  },
  {
    id: "aud007",
    modulo: "auditoria",
    tema: "Procedimientos de auditoría",
    dificultad: "basico",
    enunciado: "Enviar una carta a un banco para confirmar el saldo de una cuenta corriente es un ejemplo de:",
    opciones: {
      A: "Confirmación externa",
      B: "Observación",
      C: "Indagación",
      D: "Recálculo"
    },
    correcta: "A",
    explicacion:
      "Es una confirmación externa (NIA-ES 505): una manifestación directa de un tercero dirigida al auditor sobre un dato concreto, como el saldo bancario.",
    porQueNoLasOtras: {
      B: "La observación consiste en presenciar un proceso en ejecución, no en recibir una respuesta escrita de un tercero.",
      C: "La indagación es preguntar a personas dentro o fuera de la entidad, de forma más general y no necesariamente por escrito al auditor.",
      D: "El recálculo consiste en verificar la exactitud matemática de un cálculo, no en obtener una confirmación de un tercero."
    }
  },
  {
    id: "aud008",
    modulo: "auditoria",
    tema: "Procedimientos de auditoría",
    dificultad: "basico",
    enunciado: "Asistir al recuento físico de existencias del cliente al cierre del ejercicio es un ejemplo de:",
    opciones: {
      A: "Observación",
      B: "Reejecución",
      C: "Confirmación externa",
      D: "Procedimiento analítico"
    },
    correcta: "A",
    explicacion:
      "Presenciar cómo el personal del cliente realiza el conteo físico de inventario es un ejemplo clásico de observación.",
    porQueNoLasOtras: {
      B: "La reejecución implica que el propio auditor repita un control o cálculo, no que observe a otros haciéndolo.",
      C: "La confirmación externa requiere una manifestación de un tercero dirigida al auditor, no una presencia física en un proceso.",
      D: "Los procedimientos analíticos se basan en el análisis de relaciones entre datos, no en presenciar un proceso."
    }
  },
  {
    id: "aud009",
    modulo: "auditoria",
    tema: "Procedimientos de auditoría",
    dificultad: "intermedio",
    enunciado: "El auditor repite, de forma independiente, la conciliación bancaria que ya había realizado el cliente, para comprobar que el control funciona. Esto es:",
    opciones: {
      A: "Reejecución",
      B: "Inspección documental",
      C: "Indagación",
      D: "Confirmación externa"
    },
    correcta: "A",
    explicacion:
      "La reejecución consiste en que el auditor ejecute de manera independiente procedimientos o controles que originalmente formaban parte del control interno de la entidad.",
    porQueNoLasOtras: {
      B: "La inspección documental es examinar registros o documentos, no repetir el cálculo o control en sí.",
      C: "La indagación es formular preguntas, no repetir un procedimiento.",
      D: "La confirmación externa requiere la respuesta de un tercero ajeno a la entidad, no una repetición interna del auditor."
    }
  },
  {
    id: "aud010",
    modulo: "auditoria",
    tema: "Procedimientos de auditoría",
    dificultad: "intermedio",
    enunciado: "Comparar el margen bruto del ejercicio actual con el de ejercicios anteriores y con la media del sector, investigando variaciones inesperadas, es un ejemplo de:",
    opciones: {
      A: "Procedimiento analítico",
      B: "Prueba de controles",
      C: "Observación",
      D: "Recálculo"
    },
    correcta: "A",
    explicacion:
      "Los procedimientos analíticos evalúan información financiera mediante el análisis de relaciones plausibles entre datos, comparando con expectativas del auditor (comparaciones históricas, sectoriales, etc.).",
    porQueNoLasOtras: {
      B: "Las pruebas de controles evalúan la eficacia operativa de controles internos concretos, no comparaciones de ratios.",
      C: "La observación implica presenciar un proceso en curso, no analizar cifras.",
      D: "El recálculo verifica la exactitud matemática de un cálculo concreto, no compara tendencias o ratios."
    }
  },
  {
    id: "aud011",
    modulo: "auditoria",
    tema: "Procedimientos de auditoría",
    dificultad: "intermedio",
    enunciado: "¿Cuál es la diferencia principal entre una prueba de controles y una prueba sustantiva?",
    opciones: {
      A: "La prueba de controles evalúa la eficacia operativa de los controles internos, mientras que la prueba sustantiva busca detectar directamente incorrecciones materiales en saldos o transacciones",
      B: "No hay diferencia, son sinónimos",
      C: "La prueba de controles solo se aplica a empresas cotizadas",
      D: "La prueba sustantiva solo se puede aplicar si existen controles internos débiles"
    },
    correcta: "A",
    explicacion:
      "Las pruebas de controles verifican que un control funciona como se espera; las pruebas sustantivas buscan detectar incorrecciones materiales directamente en los saldos, transacciones o desgloses.",
    porQueNoLasOtras: {
      B: "Son conceptos distintos con objetivos diferentes dentro de la NIA-ES 330.",
      C: "Las pruebas de controles pueden aplicarse a cualquier tipo de entidad, no solo a cotizadas.",
      D: "Las pruebas sustantivas siempre se realizan en mayor o menor medida, independientemente de la fortaleza del control interno."
    }
  },
  {
    id: "aud012",
    modulo: "auditoria",
    tema: "CIRBE",
    dificultad: "basico",
    enunciado: "¿Qué es la CIRBE?",
    opciones: {
      A: "Una base de datos del Banco de España donde las entidades financieras declaran los riesgos crediticios de sus clientes",
      B: "Un extracto bancario que muestra todos los movimientos de las cuentas corrientes de una empresa",
      C: "Un informe de auditoría emitido por el Banco de España",
      D: "Un registro público de facturas emitidas por las empresas"
    },
    correcta: "A",
    explicacion:
      "La CIRBE (Central de Información de Riesgos del Banco de España) recoge los riesgos crediticios (préstamos, créditos, avales) que las entidades financieras declarantes mantienen con sus clientes.",
    porQueNoLasOtras: {
      B: "La CIRBE no muestra movimientos ni saldos de cuentas corrientes o depósitos.",
      C: "El Banco de España gestiona la CIRBE, pero no es un informe de auditoría.",
      D: "La CIRBE no recoge facturas comerciales, sino riesgos crediticios con entidades financieras."
    }
  },
  {
    id: "aud013",
    modulo: "auditoria",
    tema: "CIRBE",
    dificultad: "intermedio",
    enunciado: "¿Por qué la CIRBE NO equivale a un extracto de todas las cuentas bancarias de una empresa?",
    opciones: {
      A: "Porque solo recoge riesgos crediticios declarados (préstamos, créditos, avales) por encima de ciertos umbrales, no saldos de cuentas corrientes o depósitos",
      B: "Porque la CIRBE solo existe para personas físicas, no para empresas",
      C: "Porque la CIRBE se actualiza en tiempo real y los extractos bancarios no",
      D: "Porque la CIRBE la elabora cada banco de forma independiente sin supervisión"
    },
    correcta: "A",
    explicacion:
      "La CIRBE recoge riesgos de naturaleza crediticia declarados por las entidades por encima de determinados umbrales, no los saldos de tesorería o depósitos de la empresa.",
    porQueNoLasOtras: {
      B: "La CIRBE aplica tanto a personas físicas como a empresas que mantengan riesgos declarables.",
      C: "Es justo al contrario: la CIRBE tiene un desfase de actualización (normalmente mensual), mientras que un extracto bancario refleja movimientos con mayor inmediatez.",
      D: "La CIRBE es gestionada de forma centralizada por el Banco de España a partir de declaraciones normalizadas de las entidades, no de forma independiente y sin supervisión."
    }
  },
  {
    id: "aud014",
    modulo: "auditoria",
    tema: "CIRBE",
    dificultad: "intermedio",
    enunciado: "¿Para qué resulta especialmente útil la CIRBE en un trabajo de auditoría?",
    opciones: {
      A: "Para detectar deuda financiera o avales no registrados u omitidos por la empresa, al recoger información consolidada de varias entidades",
      B: "Para verificar el saldo exacto de caja a 31 de diciembre",
      C: "Para sustituir por completo la confirmación bancaria directa",
      D: "Para calcular el deterioro de existencias"
    },
    correcta: "A",
    explicacion:
      "Al consolidar información de distintas entidades declarantes, la CIRBE ayuda a detectar financiación o avales que la empresa no haya revelado al auditor.",
    porQueNoLasOtras: {
      B: "La CIRBE no recoge saldos de caja ni de cuentas corrientes.",
      C: "La CIRBE complementa, pero no sustituye, a la confirmación bancaria directa, por sus umbrales y desfase temporal.",
      D: "El deterioro de existencias no tiene relación con la información que recoge la CIRBE."
    }
  },
  {
    id: "aud015",
    modulo: "auditoria",
    tema: "Hechos posteriores",
    dificultad: "basico",
    enunciado: "¿Qué periodo abarcan los 'hechos posteriores al cierre' según la NIA-ES 560?",
    opciones: {
      A: "Desde la fecha de cierre de los estados financieros hasta la fecha de formulación/firma del informe de auditoría",
      B: "Solo el día siguiente al cierre del ejercicio",
      C: "Desde el inicio del ejercicio hasta su cierre",
      D: "Desde la firma del informe hasta la junta general de accionistas"
    },
    correcta: "A",
    explicacion:
      "La NIA-ES 560 se refiere al periodo comprendido entre la fecha de los estados financieros y la fecha del informe de auditoría (y, en determinados casos, hasta la fecha de publicación de las cuentas).",
    porQueNoLasOtras: {
      B: "El periodo no se limita a un único día, sino que abarca todo el tiempo hasta la firma del informe.",
      C: "Ese periodo corresponde al propio ejercicio auditado, no a los hechos posteriores al cierre.",
      D: "Aunque existen hechos descubiertos después de la firma del informe, el periodo principal de la NIA-ES 560 es hasta la fecha del informe, no hasta la junta general."
    }
  },
  {
    id: "aud016",
    modulo: "auditoria",
    tema: "Hechos posteriores",
    dificultad: "intermedio",
    enunciado: "La quiebra de un cliente después del cierre, que confirma que su saldo ya estaba deteriorado a 31 de diciembre, es un ejemplo de:",
    opciones: {
      A: "Hecho posterior que requiere ajuste en los estados financieros",
      B: "Hecho posterior que solo requiere información en memoria",
      C: "Un hecho que no afecta en absoluto a las cuentas anuales",
      D: "Un cambio de criterio contable voluntario"
    },
    correcta: "A",
    explicacion:
      "Confirma una condición que ya existía a la fecha de cierre (el deterioro del saldo del cliente), por lo que debe ajustarse el deterioro reconocido en los estados financieros.",
    porQueNoLasOtras: {
      B: "No basta con revelarlo en memoria: al confirmar una condición existente al cierre, corresponde ajustar la cifra.",
      C: "El hecho sí afecta a las cuentas anuales, ya que pone en duda la recuperabilidad del saldo a cobrar.",
      D: "No se trata de un cambio de criterio contable, sino de evidencia adicional sobre una condición ya existente al cierre."
    }
  },
  {
    id: "aud017",
    modulo: "auditoria",
    tema: "Hechos posteriores",
    dificultad: "intermedio",
    enunciado: "Una adquisición importante de otra empresa (combinación de negocios) realizada después del cierre, que no existía como condición en la fecha de cierre, debería tratarse como:",
    opciones: {
      A: "Hecho posterior que requiere información en memoria, sin ajustar las cifras del ejercicio cerrado",
      B: "Hecho posterior que requiere ajustar directamente el balance del ejercicio cerrado",
      C: "Un hecho irrelevante que nunca debe mencionarse",
      D: "Un error contable del ejercicio anterior"
    },
    correcta: "A",
    explicacion:
      "Al tratarse de una condición surgida después del cierre (no existía a 31 de diciembre), no procede ajustar las cifras del ejercicio cerrado, pero por su relevancia debe revelarse en la memoria.",
    porQueNoLasOtras: {
      B: "No corresponde ajustar el balance ya cerrado, porque la condición no existía en la fecha de cierre.",
      C: "Por su relevancia para los usuarios de las cuentas, debe revelarse y no puede omitirse.",
      D: "No es un error del ejercicio anterior, sino un hecho nuevo producido después del cierre."
    }
  },
  {
    id: "aud018",
    modulo: "auditoria",
    tema: "Hechos posteriores",
    dificultad: "intermedio",
    enunciado: "Si el auditor descubre un hecho posterior significativo DESPUÉS de haber firmado el informe de auditoría, pero ANTES de que se publiquen las cuentas anuales, ¿qué debería hacer?",
    opciones: {
      A: "Discutirlo con la dirección y, si procede, modificar el informe de auditoría",
      B: "No hacer nada, porque el informe ya está firmado y no se puede modificar",
      C: "Esperar a la auditoría del año siguiente para tratarlo",
      D: "Informar únicamente al cliente de forma verbal sin ninguna actuación adicional"
    },
    correcta: "A",
    explicacion:
      "La NIA-ES 560 contempla expresamente esta situación: el auditor debe discutir el asunto con la dirección y, si resulta necesario, tomar las medidas adecuadas, incluida la posible modificación del informe antes de la publicación de las cuentas.",
    porQueNoLasOtras: {
      B: "El informe sí puede y debe revisarse si el hecho es suficientemente significativo y las cuentas aún no se han publicado.",
      C: "Esperar al ejercicio siguiente dejaría sin corregir un hecho que afecta a las cuentas ya cerradas y aún no publicadas.",
      D: "La actuación del auditor debe quedar documentada y, si procede, formalizada, no basta con una comunicación verbal."
    }
  },
  {
    id: "aud019",
    modulo: "auditoria",
    tema: "Facturas pendientes",
    dificultad: "basico",
    enunciado: "Una empresa ha recibido un suministro eléctrico de diciembre, pero la factura de la comercializadora llega en febrero del año siguiente. ¿Cómo se denomina este concepto contable?",
    opciones: {
      A: "Factura pendiente de recibir",
      B: "Factura pendiente de emitir",
      C: "Hecho posterior al cierre que requiere ajuste",
      D: "Pasivo contingente"
    },
    correcta: "A",
    explicacion:
      "Es un gasto ya devengado (el servicio ya se ha consumido) del que todavía no se ha recibido la factura del proveedor: una factura pendiente de recibir.",
    porQueNoLasOtras: {
      B: "Una factura pendiente de emitir se refiere a ventas o ingresos de la propia empresa, no a gastos recibidos de un proveedor.",
      C: "No es un hecho posterior al cierre, sino una periodificación de gasto dentro del propio ejercicio.",
      D: "Un pasivo contingente depende de un suceso futuro incierto; aquí el gasto ya es cierto y devengado, solo falta la factura."
    }
  },
  {
    id: "aud020",
    modulo: "auditoria",
    tema: "Facturas pendientes",
    dificultad: "basico",
    enunciado: "¿En qué cuenta contable del PGC español se registran habitualmente las facturas pendientes de emitir?",
    opciones: {
      A: "4430 (Clientes, facturas pendientes de formalizar)",
      B: "410 (Acreedores por prestación de servicios)",
      C: "572 (Bancos e instituciones de crédito)",
      D: "300 (Mercaderías)"
    },
    correcta: "A",
    explicacion:
      "La cuenta 4430 recoge los ingresos ya devengados por ventas o servicios prestados cuya factura todavía no se ha emitido formalmente al cliente.",
    porQueNoLasOtras: {
      B: "La cuenta 410 se asocia a acreedores por servicios recibidos (facturas pendientes de recibir), no a ingresos propios.",
      C: "La cuenta 572 corresponde a tesorería en bancos, sin relación con la periodificación de ingresos.",
      D: "La cuenta 300 corresponde a existencias de mercaderías, no a periodificación de ingresos."
    }
  },
  {
    id: "aud021",
    modulo: "auditoria",
    tema: "Facturas pendientes",
    dificultad: "intermedio",
    enunciado: "¿Cuál es el principal riesgo de auditoría asociado a las facturas pendientes de recibir y de emitir?",
    opciones: {
      A: "El riesgo de corte de operaciones (cut-off), registrando el gasto o el ingreso en un periodo distinto al que realmente corresponde",
      B: "El riesgo de que la empresa pague dos veces la misma factura",
      C: "El riesgo de que el banco rechace una transferencia",
      D: "El riesgo de pérdida física de las existencias en almacén"
    },
    correcta: "A",
    explicacion:
      "El riesgo principal es el de corte (cut-off): que un gasto o ingreso devengado se registre en un periodo incorrecto, vulnerando el principio de devengo.",
    porQueNoLasOtras: {
      B: "El doble pago de una factura es un riesgo operativo, no el riesgo característico de esta periodificación.",
      C: "El rechazo de una transferencia bancaria no guarda relación directa con este tipo de periodificación.",
      D: "La pérdida física de existencias es un riesgo distinto, relacionado con el inventario, no con la periodificación de gastos/ingresos devengados."
    }
  },
  {
    id: "aud022",
    modulo: "auditoria",
    tema: "Facturas pendientes",
    dificultad: "intermedio",
    enunciado: "¿Qué procedimiento de auditoría es más adecuado para comprobar el correcto corte de ventas e ingresos pendientes de facturar alrededor del cierre?",
    opciones: {
      A: "Revisar albaranes o informes de prestación de servicios cercanos al cierre y verificar en qué periodo se registró el ingreso correspondiente",
      B: "Observar el recuento físico de inventario del año siguiente",
      C: "Confirmar con el banco el saldo de la cuenta corriente",
      D: "Recalcular la amortización del inmovilizado material"
    },
    correcta: "A",
    explicacion:
      "La prueba de corte revisa documentos de entrega o prestación de servicios próximos al cierre para verificar que el ingreso se registró en el periodo correcto según el principio de devengo.",
    porQueNoLasOtras: {
      B: "El recuento físico de inventario se centra en existencias, no en el corte de ingresos por servicios o ventas pendientes de facturar.",
      C: "La confirmación de saldo bancario no aporta evidencia sobre el corte de ingresos por ventas o servicios.",
      D: "El recálculo de amortización no tiene relación con el corte de ingresos o facturación pendiente."
    }
  },
  {
    id: "aud023",
    modulo: "auditoria",
    tema: "GRA",
    dificultad: "basico",
    enunciado: "Según el enfoque GRA, ¿qué factores influyen principalmente en el nivel de riesgo asignado a un área concreta?",
    opciones: {
      A: "La probabilidad de que ocurra una distorsión y la magnitud del impacto potencial en los estados financieros",
      B: "Únicamente el tamaño físico de las instalaciones del cliente",
      C: "El número de empleados del departamento de auditoría interna",
      D: "El color corporativo de la empresa auditada"
    },
    correcta: "A",
    explicacion:
      "El nivel de riesgo se determina combinando la probabilidad de que exista una incorrección material y la magnitud de su posible impacto, junto con factores cualitativos como la subjetividad o el riesgo de fraude.",
    porQueNoLasOtras: {
      B: "El tamaño físico de las instalaciones no es, por sí mismo, un factor determinante del riesgo de incorrección material.",
      C: "El número de empleados de auditoría interna puede ser relevante para el control interno, pero no es el factor principal en la valoración GRA.",
      D: "Aspectos como el color corporativo no tienen ninguna relación con la valoración de riesgos de auditoría."
    }
  },
  {
    id: "aud024",
    modulo: "auditoria",
    tema: "Procedimientos de auditoría",
    dificultad: "basico",
    enunciado: "Recalcular la amortización de un inmovilizado material aplicando el método y porcentaje indicados por la empresa es un ejemplo de:",
    opciones: {
      A: "Recálculo",
      B: "Reejecución",
      C: "Observación",
      D: "Indagación"
    },
    correcta: "A",
    explicacion:
      "El recálculo consiste en comprobar la exactitud matemática de un importe, como repetir el cálculo de la amortización aplicando el método declarado por la empresa.",
    porQueNoLasOtras: {
      B: "La reejecución implica repetir de forma independiente un control o procedimiento completo del cliente, no solo una comprobación matemática puntual.",
      C: "La observación consiste en presenciar un proceso en ejecución, no en comprobar cálculos.",
      D: "La indagación consiste en preguntar a personas, no en verificar cálculos matemáticos."
    }
  },
  {
    id: "aud025",
    modulo: "auditoria",
    tema: "CIRBE",
    dificultad: "basico",
    enunciado: "¿Qué tipo de entidades están obligadas a declarar información a la CIRBE?",
    opciones: {
      A: "Las entidades financieras (bancos, cajas, cooperativas de crédito y entidades de financiación) por encima de determinados umbrales",
      B: "Todos los proveedores comerciales de la empresa auditada",
      C: "Únicamente las sociedades cotizadas en bolsa",
      D: "Los propios auditores de cuentas"
    },
    correcta: "A",
    explicacion:
      "Las entidades de crédito y de financiación son las obligadas a declarar al Banco de España los riesgos crediticios que mantienen con sus clientes, siempre que superen ciertos umbrales.",
    porQueNoLasOtras: {
      B: "Los proveedores comerciales no declaran información a la CIRBE; esta recoge riesgos crediticios con entidades financieras.",
      C: "La obligación de declarar a la CIRBE recae en las entidades financieras, no depende de que el cliente esté o no cotizado.",
      D: "Los auditores de cuentas consultan la información de la CIRBE, pero no son quienes la declaran."
    }
  }
];
