import { recordAttempt } from "./storage.js";

export function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, v);
  }
  for (const c of [].concat(children)) {
    if (c == null) continue;
    node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  }
  return node;
}

export function formatEUR(n) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

export function formatNum(n, dec = 2) {
  return new Intl.NumberFormat("es-ES", { minimumFractionDigits: dec, maximumFractionDigits: dec }).format(n);
}

export function badgeDificultad(dificultad) {
  const map = { "básico": "badge-basico", intermedio: "badge-intermedio", avanzado: "badge-avanzado" };
  return el("span", { class: `badge ${map[dificultad] || "badge-intermedio"}` }, dificultad || "intermedio");
}

export function progressBar(pct, extraClass = "") {
  const wrap = el("div", { class: `progress-bar ${extraClass}` });
  const fill = el("div", { class: "progress-fill" });
  fill.style.width = `${Math.max(0, Math.min(100, pct))}%`;
  if (pct >= 85) fill.classList.add("fill-muybueno");
  else if (pct >= 70) fill.classList.add("fill-bueno");
  else if (pct >= 50) fill.classList.add("fill-basico");
  else fill.classList.add("fill-bajo");
  wrap.appendChild(fill);
  return wrap;
}

/**
 * Renderiza una pregunta tipo test genérica (A/B/C/D) con corrección inmediata.
 * question: { id, modulo, tema, dificultad, enunciado, opciones:{A,B,C,D}, correcta, explicacion, porQueNoLasOtras }
 * opts: { modoExamen: bool (oculta feedback hasta el final), onAnswered: (correct)=>{}, mostrarTema: bool }
 */
export function renderMCQ(container, question, opts = {}) {
  container.innerHTML = "";
  const startTs = Date.now();
  const card = el("div", { class: "mcq-card" });

  const head = el("div", { class: "mcq-head" });
  if (opts.mostrarTema !== false) head.appendChild(el("span", { class: "tema-tag" }, question.tema || ""));
  head.appendChild(badgeDificultad(question.dificultad));
  card.appendChild(head);

  card.appendChild(el("div", { class: "mcq-enunciado", html: question.enunciado }));

  const opcionesWrap = el("div", { class: "mcq-opciones" });
  let respondido = false;

  const letras = Object.keys(question.opciones);
  const botones = {};

  letras.forEach((letra) => {
    const valor = question.opciones[letra];
    const esHtml = typeof valor === "object" && valor.html;
    const btn = el("button", { class: "mcq-opcion", type: "button" });
    btn.appendChild(el("span", { class: "mcq-letra" }, letra));
    const contenido = el("span", { class: "mcq-texto" });
    if (esHtml) contenido.innerHTML = valor.html;
    else contenido.textContent = valor;
    btn.appendChild(contenido);
    botones[letra] = btn;

    btn.addEventListener("click", () => {
      if (respondido && opts.modoExamen !== true) return;
      if (respondido) return;
      respondido = true;
      const esCorrecta = letra === question.correcta;
      const timeMs = Date.now() - startTs;

      recordAttempt({ modulo: question.modulo, id: question.id, tema: question.tema, correct: esCorrecta, timeMs });

      if (opts.modoExamen) {
        Object.values(botones).forEach((b) => b.classList.add("deshabilitado"));
        btn.classList.add("seleccionada");
        if (typeof opts.onAnswered === "function") opts.onAnswered(esCorrecta, letra);
        return;
      }

      letras.forEach((l) => {
        botones[l].classList.add("deshabilitado");
        if (l === question.correcta) botones[l].classList.add("correcta");
        else if (l === letra) botones[l].classList.add("incorrecta");
      });

      card.appendChild(renderFeedback(question, esCorrecta, letra));
      if (typeof opts.onAnswered === "function") opts.onAnswered(esCorrecta, letra);
    });

    opcionesWrap.appendChild(btn);
  });

  card.appendChild(opcionesWrap);
  container.appendChild(card);
  return card;
}

export function renderFeedback(question, esCorrecta, letraElegida) {
  const box = el("div", { class: `feedback-box ${esCorrecta ? "feedback-correcta" : "feedback-incorrecta"}` });
  box.appendChild(
    el("div", { class: "feedback-titulo" }, esCorrecta ? "✓ ¡Correcto!" : `✗ Incorrecto. La respuesta correcta es ${question.correcta}.`)
  );
  box.appendChild(el("p", { class: "feedback-explicacion" }, question.explicacion));

  if (question.porQueNoLasOtras) {
    const detalle = el("div", { class: "feedback-otras" });
    detalle.appendChild(el("p", { class: "feedback-otras-titulo" }, "Por qué las otras opciones no son correctas:"));
    const lista = el("ul");
    Object.entries(question.porQueNoLasOtras).forEach(([letra, texto]) => {
      lista.appendChild(el("li", {}, [el("strong", {}, `${letra}. `), texto]));
    });
    detalle.appendChild(lista);
    box.appendChild(detalle);
  }
  return box;
}

export function navegacionPreguntas({ onPrev, onNext, disablePrev, disableNext, indice, totalPreguntas }) {
  const nav = el("div", { class: "nav-preguntas" });
  const prevBtn = el("button", { class: "btn btn-secundario", disabled: disablePrev ? "disabled" : null, onclick: onPrev }, "← Anterior");
  const contador = el("span", { class: "contador-preguntas" }, `${indice + 1} / ${totalPreguntas}`);
  const nextBtn = el("button", { class: "btn btn-primario", disabled: disableNext ? "disabled" : null, onclick: onNext }, "Siguiente →");
  if (disablePrev) prevBtn.setAttribute("disabled", "disabled");
  if (disableNext) nextBtn.setAttribute("disabled", "disabled");
  nav.appendChild(prevBtn);
  nav.appendChild(contador);
  nav.appendChild(nextBtn);
  return nav;
}

export function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
