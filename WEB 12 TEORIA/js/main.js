/* ══════════════════════════════════════
   Manual Web · Estructuras de Datos
   main.js — Scripts compartidos
   ══════════════════════════════════════ */

// ── Custom cursor
(function initCursor() {
  const cur  = document.getElementById('cursor');
  const ring = document.getElementById('cursor-ring');
  if (!cur || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px';
    cur.style.top  = my + 'px';
  });

  (function animRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a, button, .reto-card, .doc-card, .example-block').forEach(el => {
    el.addEventListener('mouseenter', () => cur.style.transform = 'translate(-50%,-50%) scale(2)');
    el.addEventListener('mouseleave', () => cur.style.transform = 'translate(-50%,-50%) scale(1)');
  });
})();

// ── Tab navigation
(function initTabs() {
  const buttons = document.querySelectorAll('.tab-btn');
  const panels  = document.querySelectorAll('.tab-content');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      buttons.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');

      // Reset animation on newly shown cards
      panel.querySelectorAll('[style*="animation"]').forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; // reflow
        el.style.animation = '';
      });
    });
  });
})();

// ── Escape HTML helper (used inline in tema pages if needed)
function escHtml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}
