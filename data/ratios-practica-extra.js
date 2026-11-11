// Ejercicios de práctica adicionales del simulador de ratios (continuación de ratiosPractica en ratios.js).
// Mismo formato y criterios que ratiosPractica: usa 365 días para DSO/DPO/DIO, magnitudes medias cuando se indica,
// y explica en "porQueNoLasOtras" el error de cálculo típico detrás de cada opción incorrecta.

export const ratiosPracticaExtra = [
  {
    id: "rp011",
    modulo: "ratios",
    ratio: "cash-ratio",
    tema: "Cash Ratio",
    dificultad: "básico",
    enunciado:
      "Una empresa presenta: Efectivo y equivalentes: 240.000 €. Activo corriente total: 800.000 €. Pasivo corriente: 600.000 €. ¿Cuál es su Cash Ratio?",
    opciones: { A: "0,30", B: "0,40", C: "1,33", D: "2,50" },
    correcta: "B",
    explicacion: "Cash Ratio = Efectivo y equivalentes / Pasivo Corriente = 240.000 / 600.000 = 0,40.",
    porQueNoLasOtras: {
      A: "Resulta de dividir el efectivo entre el activo corriente total (240.000 / 800.000), no entre el pasivo corriente.",
      C: "Corresponde al Current Ratio (Activo Corriente / Pasivo Corriente = 800.000 / 600.000 ≈ 1,33), confundiendo el numerador.",
      D: "Es el ratio invertido (Pasivo Corriente / Efectivo = 600.000 / 240.000 = 2,50).",
    },
  },
  {
    id: "rp012",
    modulo: "ratios",
    ratio: "roa",
    tema: "ROA",
    dificultad: "avanzado",
    enunciado:
      "Una empresa tiene un EBIT de 522.000 €. Su activo total fue de 3.800.000 € a inicio de año y de 4.600.000 € a cierre de año. ¿Cuál es su ROA usando el activo medio (redondeado a una décima)?",
    opciones: { A: "11,3%", B: "13,7%", C: "12,4%", D: "6,2%" },
    correcta: "C",
    explicacion:
      "Activo medio = (3.800.000 + 4.600.000) / 2 = 4.200.000 €. ROA = EBIT / Activo Total Medio = 522.000 / 4.200.000 = 0,1243 → 12,4%.",
    porQueNoLasOtras: {
      A: "Resulta de dividir el EBIT entre el activo final (4.600.000 €) en lugar del activo medio: 522.000/4.600.000 ≈ 11,3%.",
      B: "Resulta de dividir el EBIT entre el activo inicial (3.800.000 €) en lugar del activo medio: 522.000/3.800.000 ≈ 13,7%.",
      D: "Resulta de olvidar dividir entre 2 la suma de activo inicial y final: 522.000 / 8.400.000 ≈ 6,2%.",
    },
  },
  {
    id: "rp013",
    modulo: "ratios",
    ratio: "ros",
    tema: "ROS",
    dificultad: "intermedio",
    enunciado:
      "Una empresa presenta: EBIT: 630.000 €. Beneficio neto: 280.000 €. Coste de ventas: 2.100.000 €. Ventas: 3.500.000 €. ¿Cuál es su ROS (Return on Sales)?",
    opciones: { A: "8%", B: "18%", C: "40%", D: "30%" },
    correcta: "B",
    explicacion: "ROS = EBIT / Ventas = 630.000 / 3.500.000 = 0,18 → 18%.",
    porQueNoLasOtras: {
      A: "Es el Margen Neto (Beneficio Neto / Ventas = 280.000/3.500.000 = 8%), confundiendo EBIT con Beneficio Neto en el numerador.",
      C: "Es el margen bruto ((Ventas − Coste de Ventas) / Ventas = (3.500.000−2.100.000)/3.500.000 = 40%), una fórmula distinta al ROS.",
      D: "Resulta de dividir el EBIT entre el Coste de Ventas en lugar de entre las Ventas: 630.000/2.100.000 = 30%.",
    },
  },
  {
    id: "rp014",
    modulo: "ratios",
    ratio: "margen-neto",
    tema: "Margen Neto",
    dificultad: "básico",
    enunciado:
      "Una empresa presenta: EBIT: 340.000 €. Beneficio antes de impuestos: 325.000 €. Beneficio neto: 260.000 €. Ventas: 2.000.000 €. ¿Cuál es su Margen Neto?",
    opciones: { A: "17%", B: "13%", C: "16,3%", D: "76,5%" },
    correcta: "B",
    explicacion: "Margen Neto = Beneficio Neto / Ventas = 260.000 / 2.000.000 = 0,13 → 13%.",
    porQueNoLasOtras: {
      A: "Es el ROS (EBIT / Ventas = 340.000/2.000.000 = 17%), usando el EBIT en vez del beneficio neto.",
      C: "Resulta de usar el beneficio antes de impuestos en lugar del beneficio neto: 325.000/2.000.000 = 16,25% ≈ 16,3%.",
      D: "Resulta de dividir el beneficio neto entre el EBIT en vez de entre las ventas: 260.000/340.000 ≈ 76,5%.",
    },
  },
  {
    id: "rp015",
    modulo: "ratios",
    ratio: "rotacion-activos",
    tema: "Rotación de Activos",
    dificultad: "intermedio",
    enunciado:
      "Una empresa tiene unas ventas de 4.950.000 €. Su activo total fue de 3.000.000 € a inicio de año y de 3.600.000 € a cierre de año. ¿Cuál es su Rotación de Activos usando el activo medio?",
    opciones: { A: "1,38", B: "1,65", C: "1,50", D: "0,75" },
    correcta: "C",
    explicacion:
      "Activo medio = (3.000.000 + 3.600.000) / 2 = 3.300.000 €. Rotación de Activos = Ventas / Activo Total Medio = 4.950.000 / 3.300.000 = 1,50 veces.",
    porQueNoLasOtras: {
      A: "Resulta de usar el activo final (3.600.000 €) en vez del activo medio: 4.950.000/3.600.000 ≈ 1,38.",
      B: "Resulta de usar el activo inicial (3.000.000 €) en vez del activo medio: 4.950.000/3.000.000 = 1,65.",
      D: "Resulta de olvidar dividir entre 2 la suma de activo inicial y final: 4.950.000 / 6.600.000 = 0,75.",
    },
  },
  {
    id: "rp016",
    modulo: "ratios",
    ratio: "dpo",
    tema: "DPO",
    dificultad: "avanzado",
    enunciado:
      "Una empresa tenía un saldo de proveedores de 380.000 € a inicio de año y de 420.000 € a cierre de año. Sus compras totales del ejercicio fueron de 3.650.000 €, de las cuales el 80% se realizaron a crédito. ¿Cuál es su DPO (usando el saldo medio de proveedores y las compras a crédito, con 365 días)?",
    opciones: { A: "52,5 días", B: "47,5 días", C: "40 días", D: "50 días" },
    correcta: "D",
    explicacion:
      "Proveedores medios = (380.000 + 420.000) / 2 = 400.000 €. Compras a crédito = 0,80 × 3.650.000 = 2.920.000 €. DPO = (400.000 / 2.920.000) × 365 = 50 días.",
    porQueNoLasOtras: {
      A: "Resulta de usar el saldo de proveedores final (420.000 €) en vez del medio: (420.000/2.920.000) × 365 = 52,5 días.",
      B: "Resulta de usar el saldo de proveedores inicial (380.000 €) en vez del medio: (380.000/2.920.000) × 365 = 47,5 días.",
      C: "Resulta de usar las compras totales (3.650.000 €) en vez de solo las compras a crédito: (400.000/3.650.000) × 365 = 40 días.",
    },
  },
  {
    id: "rp017",
    modulo: "ratios",
    ratio: "autonomia-financiera",
    tema: "Autonomía Financiera",
    dificultad: "intermedio",
    enunciado:
      "Una empresa tiene un Activo total de 2.500.000 € y un Pasivo total de 1.625.000 €. ¿Cuál es su Autonomía Financiera?",
    opciones: { A: "65%", B: "35%", C: "165%", D: "153,8%" },
    correcta: "B",
    explicacion:
      "Patrimonio Neto = Activo Total − Pasivo Total = 2.500.000 − 1.625.000 = 875.000 €. Autonomía Financiera = Patrimonio Neto / Activo Total = 875.000 / 2.500.000 = 0,35 → 35%.",
    porQueNoLasOtras: {
      A: "Es el Debt Ratio (Pasivo Total / Activo Total = 1.625.000/2.500.000 = 65%), el ratio complementario.",
      C: "Resulta de sumar el pasivo al activo en vez de restarlo al calcular el patrimonio neto: (2.500.000+1.625.000)/2.500.000 = 165%.",
      D: "Resulta de invertir la fórmula (Activo Total / Pasivo Total) en lugar de calcular el patrimonio neto: 2.500.000/1.625.000 ≈ 153,8%.",
    },
  },
  {
    id: "rp018",
    modulo: "ratios",
    ratio: "working-capital",
    tema: "Working Capital",
    dificultad: "básico",
    enunciado:
      "El activo corriente de una empresa está compuesto por: Existencias 220.000 €, Clientes 340.000 €, Efectivo 95.000 €. Su pasivo corriente está compuesto por: Proveedores 310.000 €, Deuda a corto plazo 150.000 €. ¿Cuál es su Working Capital (Fondo de Maniobra)?",
    opciones: { A: "-195.000 €", B: "195.000 €", C: "1.115.000 €", D: "250.000 €" },
    correcta: "B",
    explicacion:
      "Activo corriente = 220.000 + 340.000 + 95.000 = 655.000 €. Pasivo corriente = 310.000 + 150.000 = 460.000 €. Working Capital = 655.000 − 460.000 = 195.000 €.",
    porQueNoLasOtras: {
      A: "Resulta de invertir el signo, restando el activo corriente del pasivo corriente (460.000 − 655.000 = −195.000).",
      C: "Resulta de sumar el activo corriente y el pasivo corriente en vez de restarlos (655.000 + 460.000 = 1.115.000).",
      D: "Resulta de olvidar el efectivo en el activo corriente y la deuda a corto plazo en el pasivo corriente: (220.000+340.000) − 310.000 = 250.000.",
    },
  },
  {
    id: "rp019",
    modulo: "ratios",
    ratio: "quick-ratio",
    tema: "Quick Ratio",
    dificultad: "avanzado",
    enunciado:
      "El activo corriente de una empresa está compuesto por: Existencias 180.000 €, Clientes 260.000 €, Efectivo 60.000 €. Su pasivo corriente es de 400.000 €. ¿Cuál es su Quick Ratio?",
    opciones: { A: "1,25", B: "0,6", C: "0,8", D: "0,15" },
    correcta: "C",
    explicacion:
      "Activo corriente total = 180.000 + 260.000 + 60.000 = 500.000 €. Quick Ratio = (Activo Corriente − Existencias) / Pasivo Corriente = (500.000 − 180.000) / 400.000 = 320.000 / 400.000 = 0,8.",
    porQueNoLasOtras: {
      A: "Es el Current Ratio, sin restar las existencias: 500.000/400.000 = 1,25.",
      B: "Resulta de restar los Clientes en lugar de las Existencias: (500.000−260.000)/400.000 = 0,6.",
      D: "Es el Cash Ratio (solo efectivo): 60.000/400.000 = 0,15.",
    },
  },
  {
    id: "rp020",
    modulo: "ratios",
    ratio: "current-ratio",
    tema: "Current Ratio",
    dificultad: "intermedio",
    enunciado:
      "Una empresa tiene un Activo corriente de 720.000 €. Su Pasivo total es de 950.000 €, de los cuales 550.000 € corresponden a deuda a largo plazo (el resto es pasivo corriente). ¿Cuál es su Current Ratio?",
    opciones: { A: "0,76", B: "1,31", C: "0,56", D: "1,8" },
    correcta: "D",
    explicacion:
      "Pasivo corriente = Pasivo Total − Deuda a Largo Plazo = 950.000 − 550.000 = 400.000 €. Current Ratio = Activo Corriente / Pasivo Corriente = 720.000 / 400.000 = 1,8.",
    porQueNoLasOtras: {
      A: "Resulta de usar el pasivo total (950.000 €) en vez del pasivo corriente: 720.000/950.000 ≈ 0,76.",
      B: "Resulta de confundir la deuda a largo plazo (550.000 €) con el pasivo corriente: 720.000/550.000 ≈ 1,31.",
      C: "Resulta de invertir numerador y denominador: 400.000/720.000 ≈ 0,56.",
    },
  },
];
