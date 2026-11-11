const rutas = {
  dashboard: () => import("./modules/dashboard.js"),
  test: () => import("./modules/test.js"),
  ratios: () => import("./modules/ratios.js"),
  balances: () => import("./modules/balances.js"),
  asientos: () => import("./modules/asientos.js"),
  auditoria: () => import("./modules/auditoria.js"),
  casos: () => import("./modules/casos.js"),
  perfil: () => import("./modules/perfil.js"),
  guia: () => import("./modules/guia.js"),
};

const main = document.getElementById("app-main");
const navItems = Array.from(document.querySelectorAll(".nav-item"));

function marcarActivo(ruta) {
  navItems.forEach((btn) => btn.classList.toggle("activo", btn.dataset.ruta === ruta));
}

export async function navegar(ruta, params = {}) {
  const [base, query] = ruta.split("?");
  if (!rutas[base]) {
    location.hash = "#/dashboard";
    return;
  }
  const queryParams = {};
  if (query) {
    new URLSearchParams(query).forEach((v, k) => (queryParams[k] = v));
  }
  const finalParams = { ...queryParams, ...params };
  marcarActivo(base);
  main.innerHTML = '<p style="color:#5b6775">Cargando…</p>';
  try {
    const mod = await rutas[base]();
    main.innerHTML = "";
    await mod.render(main, finalParams, navegar);
  } catch (err) {
    console.error(err);
    main.innerHTML = `<div class="card"><h2>Error al cargar el módulo</h2><p>${err.message || err}</p></div>`;
  }
}

navItems.forEach((btn) => {
  btn.addEventListener("click", () => {
    location.hash = `#/${btn.dataset.ruta}`;
  });
});

function manejarHash() {
  const hash = location.hash.replace(/^#\//, "") || "dashboard";
  navegar(hash);
}

window.addEventListener("hashchange", manejarHash);
manejarHash();
