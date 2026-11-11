// Gestión de progreso en localStorage. Sin backend: todo el estado vive en el navegador.
const KEY = "deloitte_prep_state_v1";

function defaultState() {
  return {
    attempts: [],       // { key, modulo, tema, correct, timeMs, ts }
    errorKeys: [],       // claves (modulo::id) actualmente falladas (último intento incorrecto)
    interviewAnswers: {},// { questionKey: { texto, ts } }
    casosVisitados: {},   // { casoId: true }
  };
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    const parsed = JSON.parse(raw);
    return { ...defaultState(), ...parsed };
  } catch (e) {
    return defaultState();
  }
}

function save(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch (e) {
    // almacenamiento lleno o no disponible: se ignora, la app sigue funcionando en memoria
  }
}

let state = load();

export function makeKey(modulo, id) {
  return `${modulo}::${id}`;
}

export function recordAttempt({ modulo, id, tema, correct, timeMs }) {
  const key = makeKey(modulo, id);
  state.attempts.push({ key, modulo, tema: tema || "General", correct: !!correct, timeMs: timeMs || 0, ts: Date.now() });
  if (state.attempts.length > 3000) state.attempts = state.attempts.slice(-3000);

  const idx = state.errorKeys.indexOf(key);
  if (correct) {
    if (idx !== -1) state.errorKeys.splice(idx, 1);
  } else {
    if (idx === -1) state.errorKeys.push(key);
  }
  save(state);
}

export function getErrorKeys(moduloFiltro) {
  if (!moduloFiltro) return [...state.errorKeys];
  return state.errorKeys.filter((k) => k.startsWith(moduloFiltro + "::"));
}

export function isErrorKey(modulo, id) {
  return state.errorKeys.includes(makeKey(modulo, id));
}

export function saveInterviewAnswer(modulo, id, texto) {
  const key = makeKey(modulo, id);
  state.interviewAnswers[key] = { texto, ts: Date.now() };
  save(state);
}

export function getInterviewAnswer(modulo, id) {
  return state.interviewAnswers[makeKey(modulo, id)] || null;
}

export function markCasoVisitado(casoId) {
  state.casosVisitados[casoId] = true;
  save(state);
}

export function getStats() {
  const attempts = state.attempts;
  const total = attempts.length;
  const correct = attempts.filter((a) => a.correct).length;
  const pctAciertos = total ? Math.round((correct / total) * 100) : 0;
  const tiempos = attempts.filter((a) => a.timeMs > 0).map((a) => a.timeMs);
  const tiempoMedioSeg = tiempos.length
    ? Math.round(tiempos.reduce((a, b) => a + b, 0) / tiempos.length / 1000)
    : 0;

  const porTema = {};
  for (const a of attempts) {
    if (!porTema[a.tema]) porTema[a.tema] = { total: 0, correct: 0 };
    porTema[a.tema].total++;
    if (a.correct) porTema[a.tema].correct++;
  }
  const temasOrdenados = Object.entries(porTema)
    .map(([tema, v]) => ({ tema, total: v.total, correct: v.correct, pct: Math.round((v.correct / v.total) * 100) }))
    .sort((a, b) => a.pct - b.pct);

  const porModulo = {};
  for (const a of attempts) {
    if (!porModulo[a.modulo]) porModulo[a.modulo] = { total: 0, correct: 0 };
    porModulo[a.modulo].total++;
    if (a.correct) porModulo[a.modulo].correct++;
  }

  const ultimos = attempts.slice(-10).reverse();

  return {
    total,
    correct,
    incorrect: total - correct,
    pctAciertos,
    tiempoMedioSeg,
    temasOrdenados,
    temasDebiles: temasOrdenados.filter((t) => t.total >= 2 && t.pct < 70).slice(0, 5),
    temasFuertes: temasOrdenados.filter((t) => t.total >= 2 && t.pct >= 85).slice(0, 5),
    porModulo,
    ultimos,
    errorCount: state.errorKeys.length,
  };
}

export function scoreLabel(pct) {
  if (pct >= 85) return { texto: "Muy buen nivel", clase: "nivel-muy-bueno" };
  if (pct >= 70) return { texto: "Buen nivel", clase: "nivel-bueno" };
  if (pct >= 50) return { texto: "Nivel básico", clase: "nivel-basico" };
  return { texto: "Necesitas mejorar", clase: "nivel-bajo" };
}

export function clearProgress() {
  state = defaultState();
  save(state);
}
