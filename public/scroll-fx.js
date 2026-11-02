/* Wintech scroll motion. One small script for the whole site, driven by data attributes.
   data-parallax="0.12"      element drifts on Y against the scroll (speed x distance from viewport centre), capped by data-parallax-max (px, default 48)
   data-parallax-x="40"      element slides on X by up to +/- N px as it crosses the viewport (negative = the other way)
   data-pfx="0.06"           frame parallax: the frame stays put, its media (img/video, or [data-pfx-target]) moves up to 6% of the frame height inside it.
                             The media is scaled just enough that no edge ever shows. The frame must clip (overflow:hidden/clip).
   Only elements on screen are updated (IntersectionObserver), one rAF per frame, nothing at all with prefers-reduced-motion. */
(function () {
  if (!('IntersectionObserver' in window) || !window.requestAnimationFrame) return;
  var mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  var items = [], live = new Set(), ticking = false, vh = window.innerHeight, io;

  function collect() {
    items = [];
    document.querySelectorAll('[data-parallax],[data-parallax-x],[data-pfx]').forEach(function (el) {
      if (el.__fx) { items.push(el.__fx); return; }
      var it = { el: el };
      if (el.hasAttribute('data-pfx')) {
        it.kind = 'frame';
        it.amp = Math.min(parseFloat(el.getAttribute('data-pfx')) || 0.06, 0.15);
        var t = el.querySelectorAll('[data-pfx-target]');
        if (!t.length) t = el.querySelectorAll(':scope > img, :scope > video, :scope > picture > img, :scope img');
        it.targets = [].slice.call(t, 0, 4);
      } else if (el.hasAttribute('data-parallax-x')) {
        it.kind = 'x';
        it.range = Math.max(-120, Math.min(120, parseFloat(el.getAttribute('data-parallax-x')) || 40));
      } else {
        it.kind = 'y';
        it.speed = Math.max(-0.4, Math.min(0.4, parseFloat(el.getAttribute('data-parallax')) || 0.12));
        it.max = parseFloat(el.getAttribute('data-parallax-max')) || 48;
      }
      el.__fx = it;
      items.push(it);
    });
  }

  function update() {
    ticking = false;
    var small = window.innerWidth < 768 ? 0.6 : 1;
    live.forEach(function (it) {
      var el = it.el, r = el.getBoundingClientRect();
      // p: -1 when the element's centre is at the bottom edge of the viewport, +1 at the top edge
      var p = ((vh / 2) - (r.top + r.height / 2)) / ((vh + r.height) / 2);
      p = Math.max(-1, Math.min(1, p));
      if (it.kind === 'y') {
        var y = (r.top + r.height / 2 - vh / 2) * -it.speed * small;
        y = Math.max(-it.max, Math.min(it.max, y));
        el.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0)';
      } else if (it.kind === 'x') {
        el.style.transform = 'translate3d(' + (p * it.range * small).toFixed(1) + 'px,0,0)';
      } else {
        var amp = it.amp * small, s = 1 + amp * 2 + 0.01;
        var fy = p * amp * r.height; // never more than (s-1)/2 of the frame, so no edge shows
        it.targets.forEach(function (t) {
          // scale around the frame centre, even when the media box is larger than the frame (cropped art)
          var ox = r.width / 2 - t.offsetLeft, oy = r.height / 2 - t.offsetTop;
          t.style.transformOrigin = ox.toFixed(1) + 'px ' + oy.toFixed(1) + 'px';
          t.style.transform = 'translate3d(0,' + fy.toFixed(1) + 'px,0) scale(' + s.toFixed(3) + ')';
        });
      }
    });
  }
  function req() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }

  function reset() {
    items.forEach(function (it) {
      if (it.kind === 'frame') it.targets.forEach(function (t) { t.style.transform = ''; t.style.transformOrigin = ''; });
      else it.el.style.transform = '';
    });
  }

  function start() {
    if (io) io.disconnect();
    live.clear();
    collect();
    if (mq.matches) { reset(); return; }
    io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) live.add(e.target.__fx); else live.delete(e.target.__fx); });
      req();
    }, { rootMargin: '120px 0px 120px 0px' });
    items.forEach(function (it) { io.observe(it.el); });
  }

  window.addEventListener('scroll', req, { passive: true });
  window.addEventListener('resize', function () { vh = window.innerHeight; req(); });
  if (mq.addEventListener) mq.addEventListener('change', start);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  window.wtScrollFx = { refresh: start };
})();
