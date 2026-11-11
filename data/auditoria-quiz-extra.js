export const auditoriaQuizExtra = [
  {
    id: "aud026",
    modulo: "auditoria",
    tema: "Procedimientos de auditoría",
    dificultad: "basico",
    enunciado:
      "Durante la auditoría de un préstamo bancario, el auditor revisa el contrato firmado para verificar el tipo de interés, el vencimiento y las garantías pactadas. ¿Qué procedimiento de auditoría es este?",
    opciones: {
      A: "Inspección documental",
      B: "Confirmación externa",
      C: "Indagación",
      D: "Procedimiento analítico"
    },
    correcta: "A",
    explicacion:
      "La inspección documental consiste en examinar registros o documentos, internos o externos, para obtener evidencia; revisar el contrato de un préstamo encaja directamente en esta definición (NIA-ES 500).",
    porQueNoLasOtras: {
      B: "La confirmación externa exige una manifestación directa de un tercero dirigida al propio auditor (por ejemplo, una carta del banco), no la simple revisión de un documento ya en poder del cliente.",
      C: "La indagación consiste en formular preguntas a personas con conocimiento, no en examinar un documento.",
      D: "Los procedimientos analíticos se basan en relaciones entre datos financieros y no financieros, no en la revisión de un contrato concreto."
    }
  },
  {
    id: "aud027",
    modulo: "auditoria",
    tema: "Procedimientos de auditoría",
    dificultad: "intermedio",
    enunciado:
      "El auditor pregunta al departamento financiero si existen litigios en curso no registrados, y después corrobora la respuesta con la carta del asesor legal externo. ¿Por qué no basta con la respuesta del departamento financiero?",
    opciones: {
      A: "Porque la indagación, por sí sola, rara vez proporciona evidencia de auditoría suficiente y suele combinarse con otros procedimientos",
      B: "Porque las respuestas del departamento financiero nunca pueden utilizarse como evidencia",
      C: "Porque la indagación solo es válida si se realiza por escrito y de forma notarial",
      D: "Porque el departamento financiero no forma parte de la entidad auditada"
    },
    correcta: "A",
    explicacion:
      "La indagación por sí sola rara vez proporciona evidencia suficiente, por lo que debe combinarse con otros procedimientos (en este caso, corroborarla con la carta del asesor legal externo).",
    porQueNoLasOtras: {
      B: "La indagación sí es una fuente válida de evidencia, solo que habitualmente insuficiente por sí sola.",
      C: "La indagación puede ser oral o escrita; no se exige ningún requisito de notarización.",
      D: "El departamento financiero sí forma parte de la entidad auditada; de hecho, por eso su respuesta se considera evidencia interna que conviene corroborar con una fuente externa."
    }
  },
  {
    id: "aud028",
    modulo: "auditoria",
    tema: "Procedimientos de auditoría",
    dificultad: "avanzado",
    enunciado:
      "La NIA-ES 500 exige que el auditor obtenga evidencia de auditoría 'suficiente y adecuada'. ¿A qué se refiere cada uno de estos dos términos?",
    opciones: {
      A: "'Suficiente' se refiere a la cantidad de evidencia necesaria y 'adecuada' a su calidad (fiabilidad y relevancia)",
      B: "'Suficiente' y 'adecuada' son sinónimos y ambos se refieren únicamente a la cantidad de papeles de trabajo archivados",
      C: "'Suficiente' se refiere a que el cliente esté conforme con el trabajo y 'adecuada' a que el informe se entregue a tiempo",
      D: "'Suficiente' se refiere a la opinión del socio y 'adecuada' a la del gerente"
    },
    correcta: "A",
    explicacion:
      "La NIA-ES 500 distingue la suficiencia (medida cuantitativa: cantidad de evidencia) de la adecuación (medida cualitativa: calidad, es decir, su fiabilidad y relevancia para soportar las conclusiones).",
    porQueNoLasOtras: {
      B: "No son sinónimos: uno mide cantidad y otro calidad, y ninguno depende del volumen de papeles archivados sino de la evidencia obtenida.",
      C: "La conformidad del cliente o la puntualidad de la entrega no son los conceptos que definen estos términos en la NIA-ES 500.",
      D: "Ambos términos se refieren a características de la evidencia de auditoría, no a opiniones jerárquicas dentro del equipo."
    }
  },
  {
    id: "aud029",
    modulo: "auditoria",
    tema: "GRA",
    dificultad: "intermedio",
    enunciado:
      "Dentro del enfoque GRA, ¿cuál es la diferencia principal entre un riesgo clasificado como 'Low' y uno clasificado como 'Higher'?",
    opciones: {
      A: "Un riesgo 'Higher' tiene mayor probabilidad o impacto potencial que uno 'Low', por lo que exige procedimientos más extensos o más dirigidos",
      B: "Un riesgo 'Low' siempre requiere más horas de trabajo que uno 'Higher'",
      C: "Un riesgo 'Higher' solo puede existir en empresas cotizadas",
      D: "No existe ninguna diferencia práctica entre ambos niveles"
    },
    correcta: "A",
    explicacion:
      "Conceptualmente, un riesgo 'Higher' implica mayor probabilidad y/o impacto potencial que uno 'Low', lo que lleva a diseñar procedimientos de auditoría más extensos o más dirigidos para responder a él.",
    porQueNoLasOtras: {
      B: "Es al contrario: un riesgo de mayor nivel (Higher) suele requerir más horas y procedimientos más extensos, no uno de riesgo bajo.",
      C: "La clasificación de riesgos por niveles aplica a cualquier entidad auditada, no solo a las cotizadas.",
      D: "Sí existe diferencia práctica: el nivel de riesgo determina la naturaleza y extensión de la respuesta de auditoría."
    }
  },
  {
    id: "aud030",
    modulo: "auditoria",
    tema: "GRA",
    dificultad: "intermedio",
    enunciado:
      "Una vez que el enfoque GRA asigna un nivel de riesgo a un área o aserción concreta, ¿qué determina principalmente ese nivel de riesgo según la NIA-ES 330?",
    opciones: {
      A: "La naturaleza, el alcance (extensión) y el momento de los procedimientos de auditoría que se van a aplicar para responder a ese riesgo",
      B: "El importe de los honorarios de auditoría a facturar al cliente",
      C: "El número de socios que deben firmar el informe",
      D: "El idioma en que se redacta el informe de auditoría"
    },
    correcta: "A",
    explicacion:
      "La NIA-ES 330 ('Respuestas del auditor a los riesgos valorados') establece que la respuesta de auditoría (naturaleza, alcance/extensión y momento de los procedimientos) debe diseñarse en función del nivel de riesgo valorado para cada área o aserción.",
    porQueNoLasOtras: {
      B: "Los honorarios pueden verse influidos indirectamente por la carga de trabajo, pero no es lo que determina la NIA-ES 330 a partir del nivel de riesgo.",
      C: "El número de socios firmantes no depende del nivel de riesgo de un área concreta.",
      D: "El idioma del informe no tiene relación con la valoración de riesgos ni con la NIA-ES 330."
    }
  },
  {
    id: "aud031",
    modulo: "auditoria",
    tema: "Hechos posteriores",
    dificultad: "avanzado",
    enunciado:
      "Después del cierre del ejercicio, pero antes de firmar el informe, el auditor conoce que el principal cliente de la sociedad auditada ha entrado en concurso de acreedores, lo que compromete gravemente los cobros futuros y la propia viabilidad de la entidad auditada. ¿Qué debe hacer el auditor, además de valorar si procede un ajuste o una revelación en memoria?",
    opciones: {
      A: "Evaluar el posible efecto de este hecho sobre la aplicación del principio de empresa en funcionamiento",
      B: "Ignorarlo, porque los hechos posteriores nunca afectan a la continuidad de la empresa",
      C: "Limitarse a comunicarlo verbalmente al cliente sin ninguna valoración adicional",
      D: "Esperar a que se publique la información en prensa antes de analizarlo"
    },
    correcta: "A",
    explicacion:
      "Un hecho posterior de esta magnitud no se limita a un simple ajuste o revelación puntual: puede cuestionar la capacidad de la entidad para continuar como empresa en funcionamiento, por lo que el auditor debe evaluar expresamente ese efecto, en línea con la NIA-ES 570 y la NIA-ES 560.",
    porQueNoLasOtras: {
      B: "Es justamente lo contrario: ciertos hechos posteriores, por su gravedad, pueden cuestionar directamente la continuidad de la empresa.",
      C: "La valoración debe quedar documentada y fundamentada técnicamente, no limitarse a un comentario verbal.",
      D: "El auditor debe analizar el hecho en cuanto tiene conocimiento de él, sin esperar a que trascienda públicamente en prensa."
    }
  },
  {
    id: "aud032",
    modulo: "auditoria",
    tema: "Hechos posteriores",
    dificultad: "intermedio",
    enunciado:
      "¿Cuál de las siguientes NO es una actuación adecuada del auditor para identificar hechos posteriores hasta la fecha del informe de auditoría?",
    opciones: {
      A: "Confiar únicamente en que la dirección le comunique de forma voluntaria cualquier hecho relevante, sin realizar ningún procedimiento adicional",
      B: "Revisar las actas de reuniones del consejo o de los órganos de gobierno posteriores al cierre",
      C: "Indagar con la dirección y los asesores legales sobre litigios, contingencias o hechos relevantes",
      D: "Leer la prensa o comunicados relevantes publicados tras el cierre"
    },
    correcta: "A",
    explicacion:
      "La NIA-ES 560 exige que el auditor realice procedimientos específicos y activos (revisión de actas, indagaciones, lectura de prensa, etc.) para identificar hechos posteriores; no es suficiente depender pasivamente de que la dirección informe por iniciativa propia.",
    porQueNoLasOtras: {
      B: "Revisar las actas posteriores al cierre es uno de los procedimientos habituales exigidos por la NIA-ES 560.",
      C: "Indagar con la dirección y los asesores legales es un procedimiento específico y necesario.",
      D: "Leer la prensa o comunicados relevantes es también un procedimiento habitual para detectar hechos posteriores significativos."
    }
  },
  {
    id: "aud033",
    modulo: "auditoria",
    tema: "CIRBE",
    dificultad: "intermedio",
    enunciado:
      "Además del importe dispuesto de préstamos y créditos, ¿qué otro tipo de información relevante para el auditor recoge habitualmente la CIRBE?",
    opciones: {
      A: "Los avales y garantías concedidos a favor de terceros, y la clasificación del riesgo (por ejemplo, normal o dudoso) según la entidad declarante",
      B: "El saldo de caja y de las cuentas corrientes de la empresa",
      C: "El detalle de las nóminas del personal de la empresa",
      D: "El valor contable de las existencias en almacén"
    },
    correcta: "A",
    explicacion:
      "La CIRBE recoge también avales y garantías otorgadas a terceros, así como la clasificación del riesgo asignada por cada entidad declarante (normal, dudoso, etc.), lo que resulta útil para detectar pasivos contingentes no registrados.",
    porQueNoLasOtras: {
      B: "La CIRBE no recoge saldos de tesorería ni de cuentas corrientes, solo riesgos de naturaleza crediticia.",
      C: "Las nóminas del personal no tienen relación con la información que declaran las entidades financieras a la CIRBE.",
      D: "El valor de las existencias en almacén no es información que gestionen las entidades financieras declarantes a la CIRBE."
    }
  },
  {
    id: "aud034",
    modulo: "auditoria",
    tema: "Facturas pendientes",
    dificultad: "basico",
    enunciado:
      "¿En qué cuenta del PGC español se registran habitualmente las facturas pendientes de recibir por servicios ya prestados al cierre del ejercicio?",
    opciones: {
      A: "410 (Acreedores por prestación de servicios), o una subcuenta de provisión por servicios pendientes de facturar",
      B: "4430 (Clientes, facturas pendientes de formalizar)",
      C: "572 (Bancos e instituciones de crédito)",
      D: "700 (Ventas de mercaderías)"
    },
    correcta: "A",
    explicacion:
      "Las facturas pendientes de recibir (gastos ya devengados cuya factura del proveedor aún no ha llegado) se registran habitualmente en la cuenta 410 o en subcuentas de provisión dentro del grupo 40/41.",
    porQueNoLasOtras: {
      B: "La cuenta 4430 corresponde a las facturas pendientes de emitir por la propia empresa (ingresos), no a los gastos recibidos de proveedores.",
      C: "La cuenta 572 es de tesorería en bancos, sin relación con la periodificación de gastos.",
      D: "La cuenta 700 registra ventas de mercaderías, no la periodificación de un gasto pendiente de facturar."
    }
  },
  {
    id: "aud035",
    modulo: "auditoria",
    tema: "OMNIA",
    dificultad: "intermedio",
    enunciado:
      "¿Cuál de las siguientes afirmaciones describe mejor la relación entre OMNIA y la metodología GRA?",
    opciones: {
      A: "OMNIA es el soporte documental donde queda registrado el proceso de evaluación de riesgos propio de GRA y la respuesta de auditoría diseñada para cada riesgo identificado",
      B: "GRA es un módulo contable dentro de OMNIA que calcula automáticamente la cifra de materialidad sin intervención del equipo",
      C: "OMNIA sustituye por completo a GRA una vez finalizada la fase de planificación de la auditoría",
      D: "GRA es simplemente la versión en inglés de OMNIA, sin ninguna diferencia de contenido entre ambos"
    },
    correcta: "A",
    explicacion:
      "OMNIA es la plataforma documental y GRA es el enfoque metodológico de evaluación de riesgos; están estrechamente relacionados porque OMNIA es donde se documenta el proceso GRA (riesgo identificado → procedimiento diseñado → evidencia → conclusión), sin que esto implique detalles operativos internos no públicos.",
    porQueNoLasOtras: {
      B: "GRA es un enfoque metodológico de evaluación de riesgos, no un módulo de cálculo automático de materialidad dentro de OMNIA.",
      C: "OMNIA no sustituye a GRA: la evaluación de riesgos (GRA) sigue siendo relevante durante toda la auditoría, incluida la ejecución, no solo en la planificación.",
      D: "OMNIA y GRA son conceptos distintos (una herramienta/plataforma y un enfoque metodológico de evaluación de riesgos), no equivalentes traducidos entre idiomas."
    }
  }
];
