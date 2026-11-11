// Registro central que combina todos los bancos de preguntas tipo test
// (test general, auditoría, asientos) para estadísticas globales y repaso de errores.
import { getErrorKeys, makeKey } from "../storage.js";

let cache = null;

export async function cargarTodoElBanco() {
  if (cache) return cache;
  const [{ questions }, { auditoriaQuiz }, { asientosQuiz }] = await Promise.all([
    import("../../data/questions.js"),
    import("../../data/auditoria.js"),
    import("../../data/asientos.js"),
  ]);
  cache = [...questions, ...auditoriaQuiz, ...asientosQuiz];
  return cache;
}

export async function obtenerPreguntasFalladas(moduloFiltro) {
  const banco = await cargarTodoElBanco();
  const errorKeys = new Set(getErrorKeys(moduloFiltro));
  return banco.filter((q) => errorKeys.has(makeKey(q.modulo, q.id)));
}

export async function obtenerPorTemasDebiles(temas, limite) {
  const banco = await cargarTodoElBanco();
  const temasSet = new Set(temas);
  const filtradas = banco.filter((q) => temasSet.has(q.tema));
  return filtradas.slice(0, limite);
}
