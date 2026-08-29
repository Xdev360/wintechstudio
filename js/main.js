const WORK = [
  {
    id: 'wintech-ai',
    n: 'Wintech AI',
    img: 'images/wintech-ai.png',
    live: true,
    url: 'quote.html',
    dept: 'Automation & AI',
    featured: true,
    one: 'The studio’s own AI — estimate, qualify, and brief, with the same stack we build for clients.',
    problem: 'Most studios hide the number until a call. Founders want a starting range without a sales theatre.',
    built: 'An AI that reads a short brief, asks the few questions that matter, and returns a range the call can confirm.',
    outcome: 'Live. The same path as Estimate with AI on this site.'
  },
  {
    id: 'viral',
    n: 'Virelle Wellness Hub',
    img: 'images/viral-wellness.png',
    live: true,
    url: 'https://www.virellewellnesshub.com/',
    dept: 'Website, brand & AI',
    one: 'They had no website. We built the shop, the brand, customer-support AI, and an admin AI they can talk to on Telegram.',
    problem: 'A wellness shop living on social. Ads dumped people into DMs. No place to order safely, and the owner had to open a laptop to see pending orders.',
    built: 'E-commerce site, brand system, support AI on the shop, and a CRM/admin AI on Telegram — pending orders and status without opening the dashboard.',
    outcome: 'Shipped. Live at virellewellnesshub.com.'
  },
  {
    id: 'real-bonus',
    n: 'Real Bonus',
    img: 'images/real-bonus.png',
    live: false,
    dept: 'Product',
    featured: true,
    one: 'Bonus tracking and payouts in one product — no spreadsheet trail.',
    problem: 'Bonus schemes lived in chats and sheets. People could not see what they were owed, and payouts lagged.',
    built: 'A product surface for balances, rules, and payouts.',
    outcome: 'In build.'
  },
  {
    id: 'mylo',
    n: 'Mylo',
    img: 'images/mylo.png',
    live: true,
    url: 'https://mylo.vercel.app/',
    dept: 'Product & AI',
    featured: true,
    one: 'A group product AI — rooms, shared goals, and a room agent for Today commands, voice, and reminders.',
    problem: 'Groups drop the thread. Goals live in one person’s head. Nothing reminds you as the day actually happens.',
    built: 'Rooms you create or join, goals for today / week / month, shared notes, polls, and a room AI you can talk to.',
    outcome: 'Live at mylo.vercel.app.'
  },
  {
    id: 'lets-hang',
    n: 'Let’s Hang',
    img: 'images/lets-hang.png',
    live: true,
    url: 'https://letshang-henna.vercel.app/',
    dept: 'Product',
    featured: true,
    one: 'A map of people — join a plan near you, drop into live voice rooms, split the cost as a group.',
    problem: 'Friends are busy. A hang dies in a 40-message group chat. After 25, nobody knows how to make friends.',
    built: 'Map-first hangs, live voice rooms, split costs that never hold your money, and verified ID before you join. Not a dating app.',
    outcome: 'Live demo at letshang-henna.vercel.app.'
  },
  {
    id: 'cybersweep',
    n: 'Cyber Sweep',
    img: 'images/cybersweep.png',
    live: true,
    url: 'https://cybersweep.vercel.app/',
    dept: 'Product',
    featured: true,
    one: 'A pre-launch audit that reads an AI-built app in the browser, finds the holes, and hands you a prompt to fix each one.',
    problem: 'People shipping fast with AI miss secrets, stack, logic, and compliance holes — until someone else finds them.',
    built: 'Four local passes. Nothing uploaded. An app map, a fix queue, one prompt per finding, ready for Cursor.',
    outcome: 'Live at cybersweep.vercel.app. A Wintech Studio product.'
  },
  {
    id: 'clear-text',
    n: 'Cleartext',
    img: 'images/clear-text.png',
    live: true,
    url: 'https://cleartextapp.vercel.app/',
    dept: 'Product',
    featured: true,
    one: 'Your wallet shows hex. Cleartext shows a sentence — before you sign.',
    problem: 'People empty wallets by approving signing requests they cannot read. Wallets warn, then show the same two buttons.',
    built: 'A live decoder and Chrome extension that intercepts the request, translates it, and lets you reject or continue to the wallet you already use.',
    outcome: 'Live at cleartextapp.vercel.app.'
  },
  {
    id: 'lume',
    n: 'LUME Arena',
    img: 'images/lume-arena.png',
    live: false,
    dept: 'Product',
    featured: false,
    one: 'A tournament platform — brackets, entries, payouts.',
    problem: 'Competitions ran on chats and sheets. Entries got lost. Payouts were slow.',
    built: 'Brackets, entries, and payouts in one place.',
    outcome: 'In build.'
  },
  {
    id: 'goalden',
    n: 'Goalden',
    img: 'images/goalden.png',
    live: false,
    dept: 'Product',
    featured: false,
    one: 'Goal-setting as a system: structure, review loops, progress you can see.',
    problem: 'Lists do not change behaviour. People set goals and never look at them again.',
    built: 'A product with review loops and visible progress, not another checklist.',
    outcome: 'In build.'
  }
];

const NEED = [
  {id:'auto',l:'Automation / AI'},{id:'app',l:'Product, app, or fast MVP'},{id:'web',l:'A website'},
  {id:'brand',l:'Brand identity'},{id:'growth',l:'Growth & content'},{id:'unsure',l:'Not sure yet'}
];
const STAGE = [
  {id:'est',l:'Established business'},{id:'pre',l:'Founder, pre-funding'},
  {id:'post',l:'Founder, post-funding'},{id:'idea',l:'Just an idea'}
];
const WHEN = [
  {id:'now',l:'As soon as possible'},{id:'month',l:'In the next month'},{id:'later',l:'Just exploring'}
];

function icons(){
  try { window.paintIcons && window.paintIcons(); }
  catch (err) { console.warn('Icons unavailable', err); }
}

/* Current page in the nav */
(function markNav(){
  const page = document.body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(el => {
    if (el.dataset.nav === page) el.setAttribute('aria-current', 'page');
    else el.removeAttribute('aria-current');
  });
})();

/* Scroll: transparent → blur */
(function navScroll(){
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

/* Dropdowns: hover on desktop (CSS) */
(function mega(){
  document.querySelectorAll('.nav__drop').forEach(drop => {
    drop.addEventListener('mouseenter', () => icons());
  });
})();

const burger = document.getElementById('burger');
const navlinks = document.getElementById('navlinks');
let dim = document.getElementById('navdim');
if (!dim) {
  dim = document.createElement('div');
  dim.id = 'navdim';
  dim.className = 'nav__dim';
  dim.setAttribute('aria-hidden', 'true');
  document.body.appendChild(dim);
}
if (burger) burger.innerHTML = '<span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>';
function isMobileNav(){ return window.matchMedia('(max-width:960px)').matches; }
function placeNav(){
  if (!navlinks) return;
  const nav = document.getElementById('site-nav');
  const bar = nav?.querySelector('.nav__bar');
  const end = bar?.querySelector('.nav__end');
  if (isMobileNav()) {
    if (navlinks.parentElement !== document.body) document.body.appendChild(navlinks);
  } else if (bar && end && navlinks.parentElement !== bar) {
    bar.insertBefore(navlinks, end);
  }
}
placeNav();
window.addEventListener('resize', placeNav);
const ABOUT_ICONS = {
  'the studio': 'user',
  'team': 'users',
  'how we work': 'layers'
};
function buildMobileSubs(){
  if (!navlinks) return;
  navlinks.querySelectorAll('.nav__drop').forEach(drop => {
    if (drop.querySelector('.nav__acc')) return;
    const mega = drop.querySelector('.mega');
    if (!mega) return;
    const acc = document.createElement('div');
    acc.className = 'nav__acc';
    mega.querySelectorAll('a').forEach(a => {
      const item = document.createElement('a');
      item.href = a.getAttribute('href') || '#';
      const label = (a.querySelector('b') ? a.querySelector('b').textContent : a.textContent).replace(/\s+/g, ' ').trim();
      const lucide = a.querySelector('[data-lucide], [data-i]');
      const thumb = a.querySelector('img');
      if (thumb) {
        const img = thumb.cloneNode(true);
        img.className = 'nav__acc-thumb';
        img.alt = '';
        item.appendChild(img);
      } else {
        const i = document.createElement('i');
        i.className = 'nav__acc-ico';
        const named = lucide
          ? (lucide.getAttribute('data-lucide') || lucide.getAttribute('data-i'))
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
function paintNavIcons(){
  if (!navlinks) return;
  const TOP = { work: 'layers', services: 'bot', about: 'user' };
  navlinks.querySelectorAll('.nav__drop > .nav__link').forEach(el => {
    if (el.querySelector('.nav__ico')) return;
    const i = document.createElement('i');
    i.className = 'nav__ico';
    i.setAttribute('data-lucide', TOP[el.dataset.nav] || 'arrow-right');
    el.prepend(i);
  });
  navlinks.querySelectorAll('.nav__mobile > .nav__link').forEach(el => {
    if (el.querySelector('.nav__ico')) return;
    const href = el.getAttribute('href') || '';
    const i = document.createElement('i');
    i.className = 'nav__ico';
    i.setAttribute('data-lucide', href.includes('quote') ? 'sparkles' : 'mail');
    el.prepend(i);
  });
  icons();
}
paintNavIcons();
function setMenu(open){
  placeNav();
  navlinks?.classList.toggle('open', open);
  burger?.classList.toggle('is-open', open);
  burger?.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('nav-open', open);
  dim.classList.toggle('is-on', open);
  dim.setAttribute('aria-hidden', String(!open));
  if (!open) navlinks?.querySelectorAll('.nav__drop').forEach(d => d.classList.remove('is-open'));
  if (open) icons();
}
burger?.addEventListener('click', () => setMenu(!navlinks.classList.contains('open')));
navlinks?.addEventListener('click', e => {
  if (isMobileNav()) {
    const dropLink = e.target.closest('.nav__drop > .nav__link');
    if (dropLink) {
      e.preventDefault();
      const drop = dropLink.closest('.nav__drop');
      const open = drop.classList.contains('is-open');
      navlinks.querySelectorAll('.nav__drop').forEach(d => d.classList.remove('is-open'));
      if (!open) drop.classList.add('is-open');
      return;
    }
  }
  if (e.target.closest('a')) setMenu(false);
});
dim.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (sheet && !sheet.hidden) { closeSheet(); return; }
  if (navlinks?.classList.contains('open')) setMenu(false);
});

/* FAQ */
document.addEventListener('click', e => {
  const q = e.target.closest('.faq__q');
  if (!q) return;
  const wrap = q.closest('.faq');
  const open = q.getAttribute('aria-expanded') === 'true';
  wrap.querySelectorAll('.faq__q').forEach(b => {
    b.setAttribute('aria-expanded', 'false');
    document.getElementById(b.getAttribute('aria-controls'))?.classList.remove('open');
  });
  if (!open) {
    q.setAttribute('aria-expanded', 'true');
    document.getElementById(q.getAttribute('aria-controls'))?.classList.add('open');
  }
});

/* Project sheet */
const sheet = document.getElementById('sheet');
const sheetBody = document.getElementById('sheet-body');
function openProject(id){
  const w = WORK.find(x => x.id === id);
  if (!w || !sheet || !sheetBody) return;
  setMenu(false);
  const shot = w.img
    ? `<div class="sheet__shot"><img src="${w.img}" alt="${w.n}"></div>`
    : `<div class="sheet__shot sheet__shot--blank">${w.n}</div>`;
  const ext = w.url && /^https?:/i.test(w.url);
  sheetBody.innerHTML = `
    ${shot}
    <h2 id="sheet-title">${w.n}</h2>
    <p>${w.one}</p>
    <p><b>The problem.</b> ${w.problem}</p>
    <p><b>What we built.</b> ${w.built}</p>
    <p><b>Where it stands.</b> ${w.outcome}</p>
    <p class="dept">${w.dept}</p>
    <div style="margin-top:20px;display:flex;gap:8px;flex-wrap:wrap">
      ${w.url ? `<a class="btn" href="${w.url}"${ext ? ' target="_blank" rel="noopener"' : ''}>${ext ? 'Open live site' : 'Open'}</a>` : ''}
      <a class="btn${w.url ? ' btn--ghost' : ''}" href="contact.html">Book a call</a>
    </div>`;
  sheet.hidden = false;
  document.body.classList.add('sheet-open');
  icons();
}
function closeSheet(){
  if (!sheet) return;
  sheet.hidden = true;
  document.body.classList.remove('sheet-open');
}
document.getElementById('sheet-close')?.addEventListener('click', closeSheet);
sheet?.addEventListener('click', e => { if (e.target === sheet) closeSheet(); });
document.addEventListener('click', e => {
  const b = e.target.closest('[data-project]');
  if (b) { e.preventDefault(); openProject(b.dataset.project); }
});

/* Quote estimator */
const quote = { step: 0, need: null, stage: null, when: null, brief: '' };

function estimate(){
  const base = {
    auto:{lo:8,hi:18,w:'6–10 weeks',bits:['WhatsApp or web agent','Qualification rules','A quote or booking path']},
    app:{lo:12,hi:24,w:'6–12 weeks',bits:['Product scope on one page','Weekly shipped slices','Handover your team can run']},
    web:{lo:5,hi:9,w:'3–4 weeks',bits:['Story and structure','Design and build','A path to a conversation']},
    brand:{lo:5,hi:10,w:'3–5 weeks',bits:['Mark and type','A small system, not a logo dump','Applied to the surfaces that matter']},
    growth:{lo:4,hi:8,w:'Retainer or 4 weeks',bits:['A content system','A month of production','A way to keep it going']},
    unsure:{lo:6,hi:12,w:'Starts with a diagnose week',bits:['We find the leak first','Then recommend one piece','You decide whether to continue']}
  }[quote.need] || {lo:6,hi:12,w:'After a call',bits:['A clear recommendation','A number that does not move later']};
  let {lo,hi,w,bits} = base;
  if (quote.stage === 'idea') { lo = Math.max(4, lo - 2); hi = Math.max(lo + 3, hi - 3); w = 'We’d start smaller than a full system'; }
  if (quote.stage === 'est') { hi += 2; }
  if (quote.when === 'later') { w += ' · no rush'; }
  return {lo,hi,w,bits};
}

function opts(name, items, picked){
  return `<div class="opts">${items.map(i => `
    <label class="opt"><input type="radio" name="${name}" value="${i.id}" ${picked === i.id ? 'checked' : ''}><span>${i.l}</span></label>
  `).join('')}</div>`;
}

function renderQuote(){
  const host = document.getElementById('quote-step');
  const bar = document.getElementById('quote-progress');
  if (!host || !bar) return;
  bar.innerHTML = Array.from({ length: 4 }, (_, i) => `<i class="${i < quote.step ? 'on' : ''}"></i>`).join('');

  if (quote.step === 0) {
    host.innerHTML = `<p class="q-title">What do you need?</p>${opts('need', NEED, quote.need)}
      <div class="quote__nav"><button class="btn" id="q-next" ${quote.need ? '' : 'disabled'}>Continue</button></div>`;
  } else if (quote.step === 1) {
    host.innerHTML = `<p class="q-title">Where is the business right now?</p>${opts('stage', STAGE, quote.stage)}
      <div class="quote__nav"><button class="btn btn--ghost" id="q-back">Back</button>
      <button class="btn" id="q-next" ${quote.stage ? '' : 'disabled'}>Continue</button></div>`;
  } else if (quote.step === 2) {
    host.innerHTML = `<p class="q-title">When do you want to start?</p>${opts('when', WHEN, quote.when)}
      <div class="quote__nav"><button class="btn btn--ghost" id="q-back">Back</button>
      <button class="btn" id="q-next" ${quote.when ? '' : 'disabled'}>Continue</button></div>`;
  } else if (quote.step === 3) {
    host.innerHTML = `<p class="q-title">What’s slowing you down?</p>
      <textarea class="textarea" id="q-brief" placeholder="A sentence is enough.">${quote.brief}</textarea>
      <div class="quote__nav"><button class="btn btn--ghost" id="q-back">Back</button>
      <button class="btn" id="q-next">Get the range</button></div>`;
  } else if (quote.step === 4) {
    host.innerHTML = `<p class="quote__think">Reading your answers…</p>`;
    setTimeout(() => {
      const e = estimate();
      host.innerHTML = `<div class="quote__result">
        <p class="meta">Starting range · ${e.w}</p>
        <p class="quote__price">$${e.lo}K – $${e.hi}K</p>
        <p class="quote__note">A starting number from what you told us. The call confirms it — or we tell you we’re not the right studio.</p>
        <ul class="quote__bits">${e.bits.map(b => `<li>— ${b}</li>`).join('')}</ul>
        ${quote.brief ? `<p class="quote__note">You said: “${quote.brief.replace(/[<>]/g, '')}”</p>` : ''}
        <div class="hero__actions">
          <a class="btn" href="contact.html">Send a brief</a>
          <button class="btn btn--ghost" id="q-reset">Start over</button>
        </div>
      </div>`;
    }, 900);
  }
}

const quoteApp = document.getElementById('quote-app');
if (quoteApp) {
  renderQuote();
  quoteApp.addEventListener('change', e => {
    const t = e.target;
    if (t.name === 'need') quote.need = t.value;
    if (t.name === 'stage') quote.stage = t.value;
    if (t.name === 'when') quote.when = t.value;
    const next = document.getElementById('q-next');
    if (next) next.disabled = false;
  });
  quoteApp.addEventListener('click', e => {
    if (e.target.id === 'q-next') {
      if (quote.step === 3) quote.brief = (document.getElementById('q-brief')?.value || '').trim();
      quote.step = Math.min(4, quote.step + 1);
      renderQuote();
    }
    if (e.target.id === 'q-back') { quote.step = Math.max(0, quote.step - 1); renderQuote(); }
    if (e.target.id === 'q-reset') { quote.step = 0; quote.need = quote.stage = quote.when = null; quote.brief = ''; renderQuote(); }
  });
}

document.getElementById('submit')?.addEventListener('click', () => {
  const checks = [
    ['f-name', 'e-name', 'Add your name.'],
    ['f-email', 'e-email', 'Add an email we can reply to.'],
    ['f-brief', 'e-brief', 'Tell us what you’re trying to fix.']
  ];
  let ok = true, first = null;
  checks.forEach(([f, e, msg]) => {
    const el = document.getElementById(f), err = document.getElementById(e);
    if (!el || !err) return;
    const bad = !el.value.trim() || (el.type === 'email' && !/^\S+@\S+\.\S+$/.test(el.value));
    err.textContent = bad ? (el.type === 'email' && el.value.trim() ? 'That email doesn’t look right.' : msg) : '';
    el.setAttribute('aria-invalid', String(bad));
    if (bad) { ok = false; if (!first) first = el; }
  });
  const note = document.getElementById('formnote');
  if (!ok) { first?.focus(); if (note) note.textContent = 'Fix the fields above, then send.'; return; }
  if (note) note.textContent = 'Looks right — nothing was sent yet. Wire this to your endpoint before launch.';
});

let io;
function observeReveals(){
  document.querySelectorAll('.sec, .proof, .hero__copy').forEach(r => r.classList.add('reveal'));
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(r => r.classList.add('in'));
    return;
  }
  if (io) io.disconnect();
  io = new IntersectionObserver(es => es.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
  }), { rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.reveal').forEach(r => io.observe(r));
}

observeReveals();
icons();

/* Hero word flips — kicker + headline */
(function flipWords(){
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function cycle(el, words, every){
    if (!el || reduced) return;
    let i = 0;
    setInterval(() => {
      el.classList.add('is-out');
      setTimeout(() => {
        i = (i + 1) % words.length;
        el.textContent = words[i];
        el.classList.remove('is-out');
        el.classList.add('is-in');
        setTimeout(() => el.classList.remove('is-in'), 400);
      }, 280);
    }, every);
  }
  cycle(document.getElementById('flip-kicker'), ['Design', 'Product', 'AI'], 2600);
  cycle(document.getElementById('flip-word'), ['move faster.', 'earn more.', 'hire less.'], 2800);
})();
