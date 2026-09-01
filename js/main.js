/* ══════════════════════════════════════════════════════════════
   Wintech Studio
   Config lives in js/config.js. Nothing below needs editing to
   change a link, an endpoint, or an email.
   ══════════════════════════════════════════════════════════════ */

const CFG = window.WINTECH || {};
const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const $ = (sel, root) => (root || document).querySelector(sel);
const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
const paint = (root) => { try { window.paintIcons && window.paintIcons(root); } catch (_) {} };

/* ─── Projects ──────────────────────────────────────────────────
   `img` is the basename in images/live/. Captures come from the
   live products themselves, not from marketing mockups.
   ────────────────────────────────────────────────────────────── */

const WORK = [
  {
    id: 'virelle',
    brand: '#1F7A4D',
    pitch: 'A wellness shop that sold entirely in Instagram DMs now has a store, a brand, and two AI systems running the floor.',
    caseUrl: 'case-virelle.html',
    n: 'Virelle Wellness Hub',
    img: 'virelle',
    dept: 'Website, brand & AI',
    year: '2025',
    live: 'https://www.virellewellnesshub.com/',
    status: 'Live',
    one: 'A wellness shop that was selling entirely through Instagram DMs now has a store, a brand, and two AI systems running the floor.',
    problem: 'Every order arrived as a direct message. Ads pushed people into an inbox that only one person could answer, so anyone who wanted to browse quietly and check out simply left. Stock questions repeated all day, and the owner had to open a laptop to find out which orders were still pending.',
    built: 'A full e-commerce store, a brand system applied across the shop and its packaging, a support AI trained on the actual product range, and an admin AI on Telegram that reports pending orders and order status on request.',
    outcome: 'Shipped and live at virellewellnesshub.com. Paid traffic now lands on a page that can take the order without anyone replying.'
  },
  {
    id: 'mylo',
    brand: '#E8B33C',
    pitch: 'A group product where the AI lives inside the room, not in a separate chat window.',
    n: 'Mylo',
    img: 'mylo',
    dept: 'Product & AI',
    year: '2025',
    live: 'https://mylo.vercel.app/',
    status: 'Live',
    one: 'A group product where the AI lives inside the room rather than in a separate chat window.',
    problem: 'Shared goals die in group chats. The plan sits in one person’s head, the thread scrolls past it, and nothing surfaces the commitment again on the day it actually matters.',
    built: 'Rooms you create or join, goals scoped to today, the week, and the month, shared notes and polls, plus a room agent that handles Today commands, voice input, and reminders for everyone in the room.',
    outcome: 'Live at mylo.vercel.app.'
  },
  {
    id: 'lets-hang',
    brand: '#7B4DFF',
    pitch: 'A map of people with a plan tonight. Joining one takes a tap instead of forty messages.',
    n: 'Let’s Hang',
    img: 'letshang',
    dept: 'Product',
    year: '2025',
    live: 'https://letshang-henna.vercel.app/',
    status: 'Live',
    one: 'A map of people with a plan tonight, built so joining one takes a tap instead of forty messages.',
    problem: 'Making plans after twenty-five is logistics. A hangout dies somewhere inside a long group chat, nobody wants to be the one chasing, and the money side gets awkward.',
    built: 'A map-first view of what is happening nearby, live voice rooms you can leave quietly, cost splitting that never holds anyone’s money, and government ID matched to a selfie before anyone joins.',
    outcome: 'Live demo at letshang-henna.vercel.app.'
  },
  {
    id: 'cleartext',
    brand: '#1F5BE8',
    pitch: 'Your wallet shows hex. Cleartext shows a sentence, before you sign.',
    caseUrl: 'case-cleartext.html',
    n: 'Cleartext',
    img: 'cleartext',
    dept: 'Product',
    year: '2025',
    live: 'https://cleartextapp.vercel.app/',
    status: 'Live',
    one: 'Your wallet shows hex. Cleartext shows a sentence, before you sign.',
    problem: 'People drain their own wallets by approving signing requests they cannot read. Existing wallets show a warning and then the same two buttons, which leaves the decision exactly where it started.',
    built: 'A live decoder plus a Chrome extension that intercepts the signing request, translates what it actually does into plain English, and lets you reject it or continue into the wallet you already use.',
    outcome: 'Live at cleartextapp.vercel.app.'
  },
  {
    id: 'cybersweep',
    brand: '#E23B3B',
    pitch: 'A pre-launch audit for AI-built apps that runs entirely in your browser. Nothing uploaded.',
    caseUrl: 'case-cybersweep.html',
    n: 'Cyber Sweep',
    img: 'cybersweep',
    dept: 'Product',
    year: '2025',
    live: 'https://cybersweep.vercel.app/',
    status: 'Live',
    one: 'A pre-launch audit for apps built fast with AI, running entirely inside the browser.',
    problem: 'Shipping quickly with AI tooling leaves exposed secrets, stack mistakes, broken logic, and compliance gaps in the codebase. Most people find out when somebody else does.',
    built: 'Four local analysis passes over the project folder, with nothing uploaded anywhere. The result is an app map, a prioritised fix queue, and one ready-to-paste prompt per finding.',
    outcome: 'Live at cybersweep.vercel.app. A Wintech Studio product.'
  },
];

const byId = (id) => WORK.find((w) => w.id === id);
const srcset = (base) => [640, 1000]
  .map((w) => `images/live/${base}-${w}.webp ${w}w`)
  .join(', ');

/* ─── Calendly, year, page chrome ───────────────────────────── */

(function wireConfig() {
  $$('[data-cal]').forEach((el) => {
    if (!CFG.CALENDLY) { el.setAttribute('href', 'contact.html'); return; }
    el.setAttribute('href', CFG.CALENDLY);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener');
  });
  $$('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });

  const slot = $('[data-slot]');
  if (slot) {
    if (CFG.NEXT_START) slot.querySelector('[data-slot-text]').textContent = CFG.NEXT_START;
    else slot.remove();
  }
})();

(function markNav() {
  const page = document.body.dataset.page;
  $$('[data-nav]').forEach((el) => {
    if (el.dataset.nav === page) el.setAttribute('aria-current', 'page');
    else el.removeAttribute('aria-current');
  });
})();

(function navScroll() {
  const nav = $('#site-nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* ─── Mobile navigation ─────────────────────────────────────── */

const burger = $('#burger');
const navlinks = $('#navlinks');

let dim = $('#navdim');
if (!dim) {
  dim = document.createElement('div');
  dim.id = 'navdim';
  dim.className = 'nav__dim';
  dim.setAttribute('aria-hidden', 'true');
  document.body.appendChild(dim);
}
if (burger) burger.innerHTML = '<span></span>'.repeat(9);

const isMobileNav = () => window.matchMedia('(max-width:960px)').matches;

function placeNav() {
  if (!navlinks) return;
  const bar = $('.nav__bar', $('#site-nav'));
  const end = bar && $('.nav__end', bar);
  if (isMobileNav()) {
    if (navlinks.parentElement !== document.body) document.body.appendChild(navlinks);
  } else if (bar && end && navlinks.parentElement !== bar) {
    bar.insertBefore(navlinks, end);
  }
}
placeNav();
window.addEventListener('resize', placeNav);

const TOP_ICONS = { work: 'layers', services: 'bot', about: 'user' };
const ABOUT_ICONS = { 'the studio': 'user', 'how we work': 'route', 'who it’s for': 'users' };

function buildMobileSubs() {
  if (!navlinks) return;
  $$('.nav__drop', navlinks).forEach((drop) => {
    if ($('.nav__acc', drop)) return;
    const mega = $('.mega', drop);
    if (!mega) return;

    const acc = document.createElement('div');
    acc.className = 'nav__acc';

    $$('a', mega).forEach((a) => {
      const item = document.createElement('a');
      item.href = a.getAttribute('href') || '#';
      const bold = $('b', a);
      const label = (bold ? bold.textContent : a.textContent).replace(/\s+/g, ' ').trim();
      const thumb = $('img', a);
      const marker = a.querySelector('[data-lucide], [data-i]');

      if (thumb) {
        const img = thumb.cloneNode(true);
        img.className = 'nav__acc-thumb';
        img.removeAttribute('width');
        img.removeAttribute('height');
        img.alt = '';
        item.appendChild(img);
      } else {
        const i = document.createElement('i');
        i.className = 'nav__acc-ico';
        const named = marker
          ? (marker.getAttribute('data-lucide') || marker.getAttribute('data-i'))
          : ABOUT_ICONS[label.toLowerCase()] || 'arrow-right';
        i.setAttribute('data-lucide', named);
        item.appendChild(i);
      }

      const span = document.createElement('span');
      span.textContent = label;
      item.appendChild(span);
      acc.appendChild(item);
    });

    drop.appendChild(acc);
  });
}
buildMobileSubs();

function paintNavIcons() {
  if (!navlinks) return;
  $$('.nav__drop > .nav__link', navlinks).forEach((el) => {
    if ($('.nav__ico', el)) return;
    const i = document.createElement('i');
    i.className = 'nav__ico';
    i.setAttribute('data-lucide', TOP_ICONS[el.dataset.nav] || 'arrow-right');
    el.prepend(i);
  });
  $$('.nav__mobile > .nav__link', navlinks).forEach((el) => {
    if ($('.nav__ico', el)) return;
    const href = el.getAttribute('href') || '';
    const i = document.createElement('i');
    i.className = 'nav__ico';
    i.setAttribute('data-lucide', href.includes('quote') ? 'sparkles' : 'mail');
    el.prepend(i);
  });
  paint(navlinks);
}
paintNavIcons();

function setMenu(open) {
  placeNav();
  navlinks && navlinks.classList.toggle('open', open);
  burger && burger.classList.toggle('is-open', open);
  burger && burger.setAttribute('aria-expanded', String(open));
  burger && burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('nav-open', open);
  dim.classList.toggle('is-on', open);
  if (!open) $$('.nav__drop', navlinks).forEach((d) => d.classList.remove('is-open'));
  if (open) paint(navlinks);
}

burger && burger.addEventListener('click', () => setMenu(!navlinks.classList.contains('open')));
dim.addEventListener('click', () => setMenu(false));

navlinks && navlinks.addEventListener('click', (e) => {
  if (isMobileNav()) {
    const dropLink = e.target.closest('.nav__drop > .nav__link');
    if (dropLink) {
      e.preventDefault();
      const drop = dropLink.closest('.nav__drop');
      const wasOpen = drop.classList.contains('is-open');
      $$('.nav__drop', navlinks).forEach((d) => d.classList.remove('is-open'));
      if (!wasOpen) drop.classList.add('is-open');
      return;
    }
  }
  if (e.target.closest('a')) setMenu(false);
});

/* ─── Staggered reveals ─────────────────────────────────────── */

const GROUPS = [
  '.feature-grid > *', '.work-grid > *', '.how-grid > *', '.svc-bento > *',
  '.offer > li', '.svc-hub > a', '.team > *', '.faq__item', '.case',
  '.index__row', '.split > *', '.beats > *',
  '.proof__item', '.cs-body', '.cat__item', '.cs-next > a'
];

(function reveals() {
  if (!document.documentElement.classList.contains('js')) return;

  const singles = $$('.sec__head, .offer-head, .price-line, .more, .hero__copy, .hero__stage, .foot__cta .wrap');
  singles.forEach((el) => el.classList.add('reveal'));

  GROUPS.forEach((sel) => {
    $$(sel).forEach((el, i) => {
      el.classList.add('reveal');
      el.style.setProperty('--d', `${Math.min(i, 7) * 70}ms`);
    });
  });

  const targets = $$('.reveal');
  if (!('IntersectionObserver' in window) || REDUCED) {
    targets.forEach((el) => el.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      io.unobserve(en.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

  targets.forEach((el) => io.observe(el));

  /* Anything already above the fold when JS runs should not wait. */
  requestAnimationFrame(() => {
    targets.forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('in');
    });
  });

  /* Safety net. Content is hidden by default, so if the observer is
     throttled, the tab is backgrounded, or anything else goes wrong,
     everything becomes visible anyway. Nothing stays blank. */
  setTimeout(() => targets.forEach((el) => el.classList.add('in')), 2500);
})();

/* ─── FAQ ───────────────────────────────────────────────────── */

document.addEventListener('click', (e) => {
  const q = e.target.closest('.faq__q');
  if (!q) return;
  const list = q.closest('.faq');
  const isOpen = q.getAttribute('aria-expanded') === 'true';

  $$('.faq__q', list).forEach((b) => {
    b.setAttribute('aria-expanded', 'false');
    const panel = document.getElementById(b.getAttribute('aria-controls'));
    panel && panel.classList.remove('open');
  });

  if (!isOpen) {
    q.setAttribute('aria-expanded', 'true');
    const panel = document.getElementById(q.getAttribute('aria-controls'));
    panel && panel.classList.add('open');
  }
});

/* ─── Project panel (deep-linkable) ─────────────────────────── */

const sheet = $('#sheet');
const sheetBody = $('#sheet-body');
let lastFocus = null;

function openProject(id, push) {
  const w = byId(id);
  if (!w || !sheet || !sheetBody) return;

  lastFocus = document.activeElement;
  setMenu(false);

  const external = w.live && /^https?:/i.test(w.live);
  const liveLabel = external ? 'Open the live site' : 'Open it';

  sheetBody.innerHTML = `
    <div class="sheet__shot">
      <img src="images/live/${w.img}-1000.webp"
           srcset="${srcset(w.img)}" sizes="(max-width:620px) 100vw, 580px"
           alt="${w.n}" width="1000" height="625" decoding="async">
    </div>
    <div class="sheet__body">
      <h2 id="sheet-title">${w.n}</h2>
      <p class="sheet__lead">${w.one}</p>
      <div class="sheet__meta">
        <span class="tag${w.status === 'Live' ? ' tag--live' : ''}">${w.status}</span>
        <span class="dept">${w.dept}</span>
        <span class="dept">${w.year}</span>
      </div>
      <div class="sheet__block"><b>The problem</b><p>${w.problem}</p></div>
      <div class="sheet__block"><b>What we built</b><p>${w.built}</p></div>
      <div class="sheet__block"><b>Where it stands</b><p>${w.outcome}</p></div>
      <div class="sheet__actions">
        ${w.caseUrl ? `<a class="btn" href="${w.caseUrl}"><span>Read the case study</span><i data-lucide="arrow-right"></i></a>` : ''}
        ${w.live ? `<a class="btn${w.caseUrl ? ' btn--ghost' : ''}" href="${w.live}"${external ? ' target="_blank" rel="noopener"' : ''}><span>${liveLabel}</span><i data-lucide="${external ? 'arrow-up-right' : 'arrow-right'}"></i></a>` : ''}
      </div>
    </div>`;

  paint(sheetBody);
  sheet.hidden = false;
  document.body.classList.add('sheet-open');
  const close = $('#sheet-close');
  close && close.focus();

  if (push && history.replaceState) history.replaceState(null, '', `#${id}`);
}

function closeSheet(clearHash) {
  if (!sheet || sheet.hidden) return;
  sheet.hidden = true;
  document.body.classList.remove('sheet-open');
  if (clearHash && history.replaceState) {
    history.replaceState(null, '', location.pathname + location.search);
  }
  lastFocus && lastFocus.focus && lastFocus.focus();
}

$('#sheet-close') && $('#sheet-close').addEventListener('click', () => closeSheet(true));
sheet && sheet.addEventListener('click', (e) => { if (e.target === sheet) closeSheet(true); });

document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-project]');
  if (!trigger) return;
  e.preventDefault();
  openProject(trigger.dataset.project, true);
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  if (sheet && !sheet.hidden) { closeSheet(true); return; }
  if (navlinks && navlinks.classList.contains('open')) setMenu(false);
});

/* Open straight from a shared URL: work.html#mylo */
(function fromHash() {
  const id = location.hash.replace('#', '');
  if (id && byId(id)) setTimeout(() => openProject(id, false), 60);
})();
window.addEventListener('hashchange', () => {
  const id = location.hash.replace('#', '');
  if (id && byId(id)) openProject(id, false);
});

/* ─── Work index: cursor preview ────────────────────────────── */

(function peek() {
  const rows = $$('.index__row');
  if (!rows.length || REDUCED || window.matchMedia('(hover:none)').matches) return;

  const el = document.createElement('div');
  el.className = 'peek';
  el.setAttribute('aria-hidden', 'true');
  el.innerHTML = '<img alt="" decoding="async">';
  document.body.appendChild(el);
  const img = $('img', el);

  let raf = null, x = 0, y = 0;
  const move = () => { el.style.transform = `translate(${x}px, ${y}px) translate(-50%,-50%) scale(1)`; raf = null; };

  rows.forEach((row) => {
    row.addEventListener('mouseenter', () => {
      const w = byId(row.dataset.project || row.dataset.peek);
      if (!w) return;
      img.src = `images/live/${w.img}-640.webp`;
      el.classList.add('is-on');
    });
    row.addEventListener('mouseleave', () => el.classList.remove('is-on'));
  });

  window.addEventListener('mousemove', (e) => {
    x = e.clientX + 150;
    y = e.clientY;
    if (x > window.innerWidth - 160) x = e.clientX - 150;
    if (!raf) raf = requestAnimationFrame(move);
  }, { passive: true });
})();

/* ─── Estimator ─────────────────────────────────────────────────
   With CFG.AI_ENDPOINT blank the local ruleset answers instantly.
   Set the endpoint and the same answers are POSTed to your model.
   ────────────────────────────────────────────────────────────── */

const NEED = [
  { id: 'auto', l: 'Automation / AI' },
  { id: 'app', l: 'Product, app, or fast MVP' },
  { id: 'web', l: 'A website' },
  { id: 'brand', l: 'Brand identity' },
  { id: 'growth', l: 'Growth & content' },
  { id: 'unsure', l: 'Not sure yet' }
];
const STAGE = [
  { id: 'est', l: 'Established business' },
  { id: 'pre', l: 'Founder, pre-funding' },
  { id: 'post', l: 'Founder, post-funding' },
  { id: 'idea', l: 'Just an idea' }
];
const WHEN = [
  { id: 'now', l: 'As soon as possible' },
  { id: 'month', l: 'In the next month' },
  { id: 'later', l: 'Just exploring' }
];

const RULES = {
  auto:   { lo: 8,  hi: 18, w: '6 to 10 weeks',  bits: ['A support or qualification agent trained on your range', 'The rules that decide what it escalates', 'A path from answer to booking or order'] },
  app:    { lo: 12, hi: 24, w: '6 to 12 weeks',  bits: ['Product scope on a single page', 'A working slice shipped every week', 'Handover your team can operate'] },
  web:    { lo: 5,  hi: 9,  w: '3 to 4 weeks',   bits: ['Story and structure before design', 'Design and build', 'SEO groundwork and a clear path to order'] },
  brand:  { lo: 5,  hi: 10, w: '3 to 5 weeks',   bits: ['Mark, type, and colour', 'A system tight enough for someone else to apply', 'Applied to the surfaces you actually use'] },
  growth: { lo: 4,  hi: 8,  w: 'Retainer, or 4 weeks', bits: ['A content system with owners and cadence', 'A month of production you can publish', 'A destination the traffic can act on'] },
  unsure: { lo: 6,  hi: 12, w: 'Starts with a diagnostic week', bits: ['We find where the money leaks first', 'Then recommend the one piece that moves it', 'You decide whether to continue'] }
};

function localEstimate(a) {
  const base = RULES[a.need] || { lo: 6, hi: 12, w: 'Confirmed on the call', bits: ['A clear recommendation', 'A number that holds'] };
  let { lo, hi, w } = base;
  if (a.stage === 'idea') { lo = Math.max(4, lo - 2); hi = Math.max(lo + 3, hi - 3); w = 'We would start smaller than a full system'; }
  if (a.stage === 'est') hi += 2;
  if (a.when === 'later') w += ', no rush';
  return { low: lo, high: hi, timeline: w, includes: base.bits, note: '' };
}

async function getEstimate(answers) {
  if (!CFG.AI_ENDPOINT) return localEstimate(answers);
  const res = await fetch(CFG.AI_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(answers)
  });
  if (!res.ok) throw new Error(`Estimator returned ${res.status}`);
  const data = await res.json();
  return {
    low: data.low, high: data.high,
    timeline: data.timeline || '',
    includes: Array.isArray(data.includes) ? data.includes : [],
    note: data.note || ''
  };
}

const quoteApp = $('#quote-app');
if (quoteApp) {
  const answers = { step: 0, need: null, stage: null, when: null, brief: '' };
  const host = $('#quote-step');
  const bar = $('#quote-progress');
  const esc = (s) => s.replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

  const options = (name, items, picked) =>
    `<div class="opts">${items.map((i) => `
      <label class="opt"><input type="radio" name="${name}" value="${i.id}"${picked === i.id ? ' checked' : ''}><span>${i.l}</span></label>
    `).join('')}</div>`;

  const nav = (backable, label, ready) => `
    <div class="quote__nav">
      ${backable ? '<button class="btn btn--ghost" id="q-back"><span>Back</span></button>' : ''}
      <button class="btn" id="q-next"${ready ? '' : ' disabled'}><span>${label}</span></button>
    </div>`;

  function render() {
    bar.innerHTML = Array.from({ length: 4 }, (_, i) => {
      const cls = i < answers.step ? 'on' : (i === answers.step ? 'now' : '');
      return `<i class="${cls}"></i>`;
    }).join('');

    if (answers.step === 0) {
      host.innerHTML = `<div class="quote__step"><p class="q-title">What do you need?</p>
        ${options('need', NEED, answers.need)}${nav(false, 'Continue', answers.need)}</div>`;
    } else if (answers.step === 1) {
      host.innerHTML = `<div class="quote__step"><p class="q-title">Where is the business right now?</p>
        ${options('stage', STAGE, answers.stage)}${nav(true, 'Continue', answers.stage)}</div>`;
    } else if (answers.step === 2) {
      host.innerHTML = `<div class="quote__step"><p class="q-title">When do you want to start?</p>
        ${options('when', WHEN, answers.when)}${nav(true, 'Continue', answers.when)}</div>`;
    } else if (answers.step === 3) {
      host.innerHTML = `<div class="quote__step"><p class="q-title">What is slowing you down?</p>
        <textarea class="textarea" id="q-brief" placeholder="One sentence is enough.">${esc(answers.brief)}</textarea>
        ${nav(true, 'Get the range', true)}</div>`;
    } else {
      showResult();
    }
  }

  async function showResult() {
    const waiting = Boolean(CFG.AI_ENDPOINT);
    if (waiting) host.innerHTML = '<div class="quote__step"><p class="meta" role="status">Reading your brief…</p></div>';

    let e;
    try {
      e = await getEstimate({ need: answers.need, stage: answers.stage, when: answers.when, brief: answers.brief });
    } catch (err) {
      e = localEstimate(answers);
      e.note = 'Estimated from our standard ranges.';
    }

    host.innerHTML = `<div class="quote__step"><div class="quote__result">
      <p class="meta">Starting range${e.timeline ? ` · ${e.timeline}` : ''}</p>
      <p class="quote__price">$${e.low}K – $${e.high}K</p>
      <p class="quote__note">This is a starting number based on what you told us. The call either confirms it or tells you we are the wrong studio for this.</p>
      ${e.includes.length ? `<ul class="quote__bits">${e.includes.map((b) => `<li>${b}</li>`).join('')}</ul>` : ''}
      ${e.note ? `<p class="quote__note">${e.note}</p>` : ''}
      ${answers.brief ? `<p class="quote__note">You said: “${esc(answers.brief)}”</p>` : ''}
      <div class="hero__actions" style="justify-content:flex-start">
        <a class="btn" data-cal href="${CFG.CALENDLY || 'contact.html'}"${CFG.CALENDLY ? ' target="_blank" rel="noopener"' : ''}><span>Book a call</span></a>
        <a class="btn btn--ghost" href="contact.html"><span>Send a brief</span></a>
        <button class="btn btn--ghost" id="q-reset"><span>Start over</span></button>
      </div>
    </div></div>`;
    paint(host);
  }

  quoteApp.addEventListener('change', (e) => {
    const t = e.target;
    if (t.name && Object.prototype.hasOwnProperty.call(answers, t.name)) answers[t.name] = t.value;
    const next = $('#q-next');
    if (next) next.disabled = false;
  });

  quoteApp.addEventListener('click', (e) => {
    if (e.target.closest('#q-next')) {
      if (answers.step === 3) answers.brief = ($('#q-brief') || {}).value?.trim() || '';
      answers.step = Math.min(4, answers.step + 1);
      render();
    }
    if (e.target.closest('#q-back')) { answers.step = Math.max(0, answers.step - 1); render(); }
    if (e.target.closest('#q-reset')) {
      Object.assign(answers, { step: 0, need: null, stage: null, when: null, brief: '' });
      render();
    }
  });

  render();
}

/* ─── Contact form ──────────────────────────────────────────── */

const form = $('#contact-form');
if (form) {
  const note = $('#formnote');
  const button = $('#submit');

  const setNote = (msg, kind) => {
    if (!note) return;
    note.textContent = msg;
    note.className = 'form__note' + (kind ? ` is-${kind}` : '');
  };

  const validate = () => {
    const checks = [
      ['f-name', 'e-name', 'Add your name.'],
      ['f-email', 'e-email', 'Add an email we can reply to.'],
      ['f-brief', 'e-brief', 'Tell us what you are trying to fix.']
    ];
    let ok = true, first = null;

    checks.forEach(([fieldId, errId, msg]) => {
      const el = document.getElementById(fieldId);
      const err = document.getElementById(errId);
      if (!el || !err) return;
      const empty = !el.value.trim();
      const badEmail = el.type === 'email' && el.value.trim() && !/^\S+@\S+\.\S+$/.test(el.value);
      const bad = empty || badEmail;
      err.textContent = bad ? (badEmail ? 'That email does not look right.' : msg) : '';
      el.setAttribute('aria-invalid', String(bad));
      if (bad && !first) first = el;
      if (bad) ok = false;
    });

    if (!ok) first && first.focus();
    return ok;
  };

  const collect = () => {
    const data = Object.fromEntries(new FormData(form).entries());
    data.need = $$('input[name="need"]:checked', form).map((i) => i.value).join(', ');
    data.page = location.href;
    return data;
  };

  const asText = (d) => [
    `Name: ${d.name || ''}`,
    `Email: ${d.email || ''}`,
    `Business: ${d.business || ''}`,
    `Needs: ${d.need || ''}`,
    `Stage: ${d.stage || ''}`,
    `Budget: ${d.budget || ''}`,
    `Found us via: ${d.source || ''}`,
    '',
    d.brief || ''
  ].join('\n');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validate()) { setNote('Fix the fields above, then send.', 'err'); return; }

    const data = collect();

    if (CFG.FORM_ENDPOINT) {
      button.setAttribute('aria-busy', 'true');
      setNote('Sending…');
      try {
        const res = await fetch(CFG.FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data)
        });
        if (!res.ok) throw new Error(res.status);
        form.reset();
        setNote('Brief received. We reply within 24 hours.', 'ok');
      } catch (err) {
        setNote('That did not send. Email us directly, or book a call above.', 'err');
      } finally {
        button.removeAttribute('aria-busy');
      }
      return;
    }

    if (CFG.EMAIL) {
      const subject = encodeURIComponent(`Brief from ${data.name || 'the website'}`);
      window.location.href = `mailto:${CFG.EMAIL}?subject=${subject}&body=${encodeURIComponent(asText(data))}`;
      setNote('Opening your mail app with the brief filled in.', 'ok');
      return;
    }

    console.warn('[Wintech] Set FORM_ENDPOINT or EMAIL in js/config.js so this form can send.');
    setNote('We could not send that from here. Book a call above and we will pick it up there.', 'err');
  });
}

/* ─── Page transitions ──────────────────────────────────────── */

(function transitions() {
  if (REDUCED || !document.documentElement.classList.contains('js')) return;

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    if (a.target === '_blank' || a.hasAttribute('download') || a.hasAttribute('data-project')) return;

    const href = a.getAttribute('href') || '';
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    if (url.pathname === location.pathname) return;

    e.preventDefault();
    document.documentElement.classList.add('is-leaving');
    setTimeout(() => { location.href = a.href; }, 210);
  });

  /* Restore from bfcache without a stuck fade. */
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) document.documentElement.classList.remove('is-leaving');
  });
})();

paint();

/* ─── Booking-button labels ─────────────────────────────────────
   One place decides whether it says 25-min, 30-min, or nothing.
   ────────────────────────────────────────────────────────────── */

(function callLength() {
  const m = CFG.CALL_MINUTES;
  if (!m) return;
  $$('[data-cal-label]').forEach((el) => { el.textContent = `Book a ${m}-min call`; });
  $$('[data-cal-mins]').forEach((el) => { el.textContent = String(m); });
})();

/* ─── Wintech AI ────────────────────────────────────────────────
   A launcher on every page plus an inline panel where a page
   embeds one. Runs on CFG.AI_ENDPOINT when set, and on the
   scripted answers in config until then.
   ────────────────────────────────────────────────────────────── */

const AI = (() => {
  const state = { messages: [], busy: false, opened: false };

  const SUGGESTIONS = [
    'What would this cost?',
    'How long does it take?',
    'What can the AI actually do?',
    'Show me something you built'
  ];

  function scripted(text) {
    const q = text.toLowerCase();
    const table = CFG.AI_ANSWERS || [];
    let best = null, bestHits = 0;
    table.forEach(([keys, reply]) => {
      const hits = keys.filter((k) => q.includes(k)).length;
      if (hits > bestHits) { bestHits = hits; best = reply; }
    });
    if (best) return best;
    return 'I can talk through pricing, timelines, what the AI layer does, or the five products we have live.\n\nFor anything specific to your business, a call is faster than I am. Book one below and you will get a real scope either way.';
  }

  async function ask(text) {
    state.messages.push({ role: 'user', content: text });
    render();
    state.busy = true;
    render();

    if (!CFG.AI_ENDPOINT) {
      await new Promise((r) => setTimeout(r, 260));
      state.messages.push({ role: 'assistant', content: scripted(text) });
      state.busy = false;
      render();
      return;
    }

    try {
      const res = await fetch(CFG.AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: state.messages })
      });
      if (!res.ok) throw new Error(res.status);

      const type = res.headers.get('content-type') || '';
      if (type.includes('application/json')) {
        const data = await res.json();
        state.messages.push({ role: 'assistant', content: data.reply || '' });
        state.busy = false;
        render();
      } else {
        const reader = res.body.getReader();
        const dec = new TextDecoder();
        const msg = { role: 'assistant', content: '' };
        state.messages.push(msg);
        state.busy = false;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          msg.content += dec.decode(value, { stream: true });
          render();
        }
        render();
      }
    } catch (err) {
      /* Endpoint missing, key unset, or network down. Answer from the
         scripted table instead of showing the visitor an error. */
      state.busy = false;
      state.messages.push({ role: 'assistant', content: scripted(text) });
      render();
    }
  }

  const esc = (s) => String(s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const para = (s) => esc(s).split('\n\n').map((p) => `<p>${p.replace(/\n/g, '<br>')}</p>`).join('');

  function render() {
    $$('[data-ai-log]').forEach((log) => {
      log.innerHTML = state.messages.map((m) => `
        <div class="ai__msg ai__msg--${m.role}">
          ${m.role === 'assistant' ? '<span class="ai__av" aria-hidden="true"></span>' : ''}
          <div class="ai__bubble">${para(m.content)}</div>
        </div>`).join('')
        + (state.busy ? `
        <div class="ai__msg ai__msg--assistant">
          <span class="ai__av" aria-hidden="true"></span>
          <div class="ai__bubble ai__bubble--wait"><i></i><i></i><i></i></div>
        </div>` : '');
      log.scrollTop = log.scrollHeight;
    });
    $$('[data-ai-suggest]').forEach((el) => {
      el.hidden = state.messages.length > 0;
    });
    $$('[data-ai-send]').forEach((b) => { b.disabled = state.busy; });
  }

  function shell(variant) {
    return `
      <div class="ai__head">
        <span class="ai__av ai__av--lg" aria-hidden="true"></span>
        <div>
          <p class="ai__name">${esc(CFG.AI_NAME || 'Wintech AI')}</p>
          <p class="ai__status"><span class="dot"></span>Ask about scope, price, or fit</p>
        </div>
        ${variant === 'dock' ? '<button class="ai__x" data-ai-close aria-label="Close assistant"><i data-lucide="x"></i></button>' : ''}
      </div>
      <div class="ai__log" data-ai-log role="log" aria-live="polite"></div>
      <div class="ai__suggest" data-ai-suggest>
        <p class="ai__greet">${esc(CFG.AI_GREETING || '')}</p>
        ${SUGGESTIONS.map((s) => `<button class="ai__chip" data-ai-q="${esc(s)}">${esc(s)}</button>`).join('')}
      </div>
      <form class="ai__bar" data-ai-form>
        <input class="ai__input" data-ai-input placeholder="Ask about scope, price, or timeline" aria-label="Message ${esc(CFG.AI_NAME || 'Wintech AI')}" autocomplete="off">
        <button class="ai__send" type="submit" data-ai-send aria-label="Send"><i data-lucide="arrow-up-right"></i></button>
      </form>
      <p class="ai__foot">Straight answers beat a sales call. <a data-cal href="${CFG.CALENDLY || 'contact.html'}"${CFG.CALENDLY ? ' target="_blank" rel="noopener"' : ''}>Book one anyway</a></p>`;
  }

  function wire(root) {
    const form = $('[data-ai-form]', root);
    const input = $('[data-ai-input]', root);
    form && form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = input.value.trim();
      if (!v || state.busy) return;
      input.value = '';
      ask(v);
    });
    $$('[data-ai-q]', root).forEach((b) => {
      b.addEventListener('click', () => { if (!state.busy) ask(b.dataset.aiQ); });
    });
    paint(root);
  }

  function mountInline() {
    const host = $('[data-ai-inline]');
    if (!host) return;
    host.innerHTML = shell('inline');
    host.classList.add('ai');
    wire(host);
  }

  function mountDock() {
    if ($('#ai-dock')) return;

    const launcher = document.createElement('button');
    launcher.className = 'ai-launch';
    launcher.id = 'ai-launch';
    launcher.type = 'button';
    launcher.setAttribute('aria-label', `Open ${CFG.AI_NAME || 'Wintech AI'}`);
    launcher.innerHTML = `<span class="ai-launch__mark" aria-hidden="true"></span><span class="ai-launch__txt">Ask ${esc(CFG.AI_NAME || 'Wintech AI')}</span>`;

    const dock = document.createElement('div');
    dock.className = 'ai ai--dock';
    dock.id = 'ai-dock';
    dock.hidden = true;
    dock.innerHTML = shell('dock');

    document.body.append(launcher, dock);
    wire(dock);

    const toggle = (open) => {
      dock.hidden = !open;
      launcher.classList.toggle('is-hidden', open);
      if (open) {
        state.opened = true;
        requestAnimationFrame(() => $('[data-ai-input]', dock).focus());
      }
    };
    launcher.addEventListener('click', () => toggle(true));
    $('[data-ai-close]', dock).addEventListener('click', () => { toggle(false); launcher.focus(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !dock.hidden) { toggle(false); launcher.focus(); }
    });
  }

  return { mountInline, mountDock, ask, render };
})();

AI.mountInline();
AI.mountDock();
AI.render();

/* Re-point any Calendly links the assistant injected. */
$$('[data-cal]').forEach((el) => {
  if (!CFG.CALENDLY) return;
  el.setAttribute('href', CFG.CALENDLY);
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener');
});


/* ─── Section 2: the three explainers, drawn not described ────── */

(function explainers() {
  const hosts = $$('[data-viz]');
  if (!hosts.length) return;

  const play = (el) => {
    el.classList.add('go');
    if (el.dataset.viz === 'leak') {
      const bars = $$('.viz-flow__fill', el);
      bars.forEach((b, n) => setTimeout(() => b.classList.add('go'), 180 + n * 260));
    }
    if (el.dataset.viz === 'shift') {
      const lines = $$('.viz-chat__line', el);
      lines.forEach((l, n) => setTimeout(() => l.classList.add('go'), 200 + n * 620));
    }
    if (el.dataset.viz === 'earn') {
      const n = $('[data-count]', el);
      if (!n) return;
      const target = Number(n.dataset.count);
      const t0 = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - t0) / 1200);
        const eased = 1 - Math.pow(1 - p, 3);
        n.textContent = Math.round(target * eased);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  };

  if (!('IntersectionObserver' in window) || REDUCED) { hosts.forEach(play); return; }
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    play(e.target);
    io.unobserve(e.target);
  }), { threshold: 0.4 });
  hosts.forEach((h) => io.observe(h));
})();

/* ─── Work marquee ──────────────────────────────────────────────
   One line: each project's logo beside its name, drifting left.
   Hover freezes the row, tints the lockup in that project's brand
   colour, and raises a note. Clicking opens the live product.
   ────────────────────────────────────────────────────────────── */

(function workMarquee() {
  const row = $('[data-marquee-row]');
  if (!row) return;

  const item = (w) => `
    <a class="mq__item" href="${w.live}" target="_blank" rel="noopener"
       style="--brand:${w.brand}" data-mq="${w.id}">
      <span class="mq__logo" style="--mark:url('/images/logos/${w.id}.svg')" aria-hidden="true"></span>
      <span class="sr-only">${w.n}</span>
    </a>
    <span class="mq__sep" aria-hidden="true">/</span>`;

  const once = WORK.map(item).join('');
  row.innerHTML = once + once;          // duplicated for a seamless loop

  /* The note lives on <body>, not inside the row, so the marquee's
     overflow can never clip it. One element, moved to whichever
     lockup is hovered. */
  const note = document.createElement('div');
  note.className = 'mq__note';
  note.setAttribute('role', 'note');
  document.body.appendChild(note);

  const wrap = $('[data-marquee]');
  let open = null;

  const place = (el) => {
    const r = el.getBoundingClientRect();
    const nw = note.offsetWidth;
    let x = r.left + r.width / 2 - nw / 2;
    x = Math.max(14, Math.min(x, window.innerWidth - nw - 14));
    note.style.left = `${x}px`;
    note.style.top = `${r.top + window.scrollY - note.offsetHeight - 16}px`;
  };

  const show = (el) => {
    const w = byId(el.dataset.mq);
    if (!w) return;
    if (open) open.classList.remove('is-on');
    open = el;
    el.classList.add('is-on');
    wrap.classList.add('is-held');
    note.innerHTML = `<span class="mq__note-txt">${w.pitch}</span>
      <span class="mq__note-go">Open the live product <i data-lucide="arrow-up-right"></i></span>`;
    paint(note);
    note.classList.add('is-on');
    place(el);
  };

  const hide = () => {
    if (open) open.classList.remove('is-on');
    open = null;
    wrap.classList.remove('is-held');
    note.classList.remove('is-on');
  };

  $$('.mq__item', row).forEach((el) => {
    el.addEventListener('mouseenter', () => show(el));
    el.addEventListener('focus', () => show(el));
    el.addEventListener('mouseleave', hide);
    el.addEventListener('blur', hide);
  });

  window.addEventListener('scroll', () => { if (open) place(open); }, { passive: true });
  window.addEventListener('resize', () => { if (open) place(open); });
})();

/* ─── Calendly inline embed ─────────────────────────────────────
   Loads only on a page that asks for it, so no third-party script
   runs anywhere else on the site.
   ────────────────────────────────────────────────────────────── */

(function calendlyEmbed() {
  const host = $('[data-calendly]');
  if (!host) return;

  if (!CFG.CALENDLY) {
    host.innerHTML = '<p class="meta">Booking link not configured yet.</p>';
    return;
  }

  const url = new URL(CFG.CALENDLY);
  url.searchParams.set('hide_gdpr_banner', '1');
  url.searchParams.set('hide_landing_page_details', '1');
  url.searchParams.set('hide_event_type_details', '1');

  host.innerHTML = `
    <div class="book__skel" data-cal-skel>
      <span class="book__spin" aria-hidden="true"></span>
      <p class="meta">Loading available times…</p>
    </div>
    <div class="calendly-inline-widget"
         data-url="${url.toString()}"
         style="min-width:320px;height:700px"></div>
    <noscript><p class="meta">Enable JavaScript, or <a class="text-link" href="${CFG.CALENDLY}" target="_blank" rel="noopener">open the calendar in a new tab</a>.</p></noscript>`;

  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'https://assets.calendly.com/assets/external/widget.css';
  document.head.appendChild(css);

  const s = document.createElement('script');
  s.src = 'https://assets.calendly.com/assets/external/widget.js';
  s.async = true;
  s.onload = () => {
    const skel = $('[data-cal-skel]', host);
    /* Calendly paints into the div itself; give it a beat, then drop ours. */
    setTimeout(() => skel && skel.remove(), 900);
  };
  s.onerror = () => {
    host.innerHTML = `<div class="book__fallback">
      <p class="meta">The calendar could not load here.</p>
      <a class="btn" href="${CFG.CALENDLY}" target="_blank" rel="noopener"><span>Open the calendar</span><i data-lucide="arrow-up-right"></i></a>
    </div>`;
    paint(host);
  };
  document.head.appendChild(s);
})();

/* ─── Service illustrations: draw once, then rest ────────────── */

(function illustrations() {
  const els = $$('.ill');
  if (!els.length) return;
  if (!('IntersectionObserver' in window) || REDUCED) { els.forEach((e) => e.classList.add('go')); return; }
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('go');
    io.unobserve(e.target);
  }), { threshold: 0.35 });
  els.forEach((e) => io.observe(e));

  /* Safety net: these illustrations start at opacity 0, so a throttled
     or never-fired observer would leave them blank. */
  setTimeout(() => els.forEach((e) => e.classList.add('go')), 2500);
})();

/* ─── Proof counters ────────────────────────────────────────── */

(function counters() {
  const els = $$('[data-count-to]');
  if (!els.length) return;
  const run = (el) => {
    const target = Number(el.dataset.countTo);
    if (!Number.isFinite(target)) return;
    if (REDUCED) { el.textContent = String(target); return; }
    const t0 = performance.now();
    const step = (now) => {
      const p = Math.min(1, (now - t0) / 900);
      el.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (!('IntersectionObserver' in window)) { els.forEach(run); return; }
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return;
    run(e.target); io.unobserve(e.target);
  }), { threshold: 0.6 });
  els.forEach((e) => io.observe(e));
})();
