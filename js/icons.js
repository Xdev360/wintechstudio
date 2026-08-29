/* Lucide paths, inlined — no CDN. Paints [data-lucide] and [data-i]. */
(function () {
  const S = 'fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"';
  const svg = (d) => `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" ${S} aria-hidden="true">${d}</svg>`;

  const ICONS = {
    'chevron-down': svg('<path d="m6 9 6 6 6-6"/>'),
    menu: svg('<path d="M4 5h16M4 12h16M4 19h16"/>'),
    plus: svg('<path d="M5 12h14M12 5v14"/>'),
    x: svg('<path d="M18 6 6 18M6 6l12 12"/>'),
    'arrow-right': svg('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    bot: svg('<path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M2 14h2M20 14h2M9 13v2M15 13v2"/>'),
    'app-window': svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="M10 4v4M2 8h20M6 4v4"/>'),
    monitor: svg('<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'),
    palette: svg('<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.9 0 1.8-.1 2.5-.3 1.1-.4 1.3-1.6.4-2.2-.6-.4-.9-1-.9-1.7 0-1.1.9-2 2-2h2.8c1.5 0 2.7-1.2 2.7-2.8C21.5 6.2 17.2 2 12 2z"/>'),
    'trending-up': svg('<path d="M16 7h5v5"/><path d="m22 7-8.5 8.5-5-5L2 17"/>'),
    zap: svg('<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>'),
    user: svg('<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>'),
    users: svg('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>'),
    mail: svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 7L2 7"/>'),
    sparkles: svg('<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/><circle cx="12" cy="12" r="2.2"/>'),
    layers: svg('<path d="m12 2 9 4.5-9 4.5L3 6.5 12 2z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 17.5 9 4.5 9-4.5"/>'),
    send: svg('<path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/>'),
    headphones: svg('<path d="M3 14v3a2 2 0 0 0 2 2h1v-7H5a2 2 0 0 0-2 2zM19 12h-1v7h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z"/><path d="M4 14a8 8 0 0 1 16 0"/>'),
    'map-pin': svg('<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>'),
    calendar: svg('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>'),
    message: svg('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>')
  };

  window.paintIcons = function (root) {
    (root || document).querySelectorAll('[data-lucide], [data-i]').forEach((el) => {
      const name = el.getAttribute('data-i') || el.getAttribute('data-lucide');
      const markup = ICONS[name];
      if (!markup) return;
      el.innerHTML = markup;
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.paintIcons());
  } else {
    window.paintIcons();
  }
})();
