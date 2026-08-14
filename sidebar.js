// Barra lateral compartida — inyecta el menú en <div id="sidebar-placeholder"></div>
// y marca como activo el link de la página actual.
//
// A diferencia de una versión anterior, este script NO usa fetch(): el HTML
// del menú vive directamente en esta constante. Por eso funciona en
// cualquier contexto — abriendo el archivo con doble clic, en una vista
// previa, o ya publicado en GitHub Pages — sin necesitar un servidor HTTP.
//
// Para editar el menú (agregar, quitar o reordenar links), se edita
// SOLO este archivo — todas las páginas se actualizan automáticamente.

(function () {
  const SIDEBAR_HTML = `
<nav class="site-sidebar">
  <a href="index.html" data-page="index.html" title="Inicio">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/></svg>
    <span>Inicio</span>
  </a>
  <a href="belbin_test.html" data-page="belbin_test.html" title="Test de Roles de Equipo (Belbin)">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    <span>Roles</span>
  </a>
  <a href="constructor_objetivos.html" data-page="constructor_objetivos.html" title="Constructor de Objetivos">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    <span>Objetivos</span>
  </a>
  <a href="plan_trabajo.html" data-page="plan_trabajo.html" title="Constructor de Plan de Trabajo">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    <span>Plan</span>
  </a>
  <a href="contrato_equipo.html" data-page="contrato_equipo.html" title="Contrato de Equipo">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    <span>Contrato</span>
  </a>
  <a href="tuckman.html" data-page="tuckman.html" title="Etapas de Equipo (Tuckman)">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
    <span>Etapas</span>
  </a>
  <a href="ficha_avance.html" data-page="ficha_avance.html" title="Ficha de Avance Interactiva">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    <span>Avance</span>
  </a>
  <a href="https://www.16personalities.com/es" target="_blank" rel="noopener noreferrer" title="16Personalities (recurso externo)">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
    <span>16P</span>
  </a>
</nav>
`;

  function initSidebar() {
    const placeholder = document.getElementById('sidebar-placeholder');
    if (!placeholder) return;

    placeholder.outerHTML = SIDEBAR_HTML;

    const currentPage = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.site-sidebar a[data-page]').forEach((link) => {
      if (link.dataset.page === currentPage) {
        link.classList.add('active');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSidebar);
  } else {
    initSidebar();
  }
})();
