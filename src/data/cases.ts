// Case studies, copy read from Figma "Website · v5" (C1..C7 and W1 · Work).
// Each case carries its own chapters. A chapter visual is either a raster slot that still has to be
// exported from Figma (kind 'todo', rendered as a sized placeholder with data-todo-image) or a small
// UI block rebuilt in HTML (kind 'swatches').
import tileData from './case-tiles.json';

export type Visual =
  | { kind: 'todo'; id: string; w: number; h: number; label: string; bg?: string }
  | { kind: 'swatches'; id: string; items: { name: string; hex: string; ink: string }[]; bg?: string };
export type Chapter = { n: string; title: string; lead: string; body: string; list?: [string, string][]; visuals?: Visual[] };
export type Tile = [file: string, w: number, h: number];
export type Case = {
  slug: string; name: string; kind: 'Client project' | 'Our own product';
  tag: 'Our product' | 'Client' | 'Concept'; year: string;
  cardLine: string; cardServices: string[]; filters: string[]; coverId: string;
  headline: string; line: string; intro: string; status: string; url?: string;
  stats: [string, string][]; did: string[];
  theme: 'dark' | 'light'; grad: [string, string]; icon?: string; iconTodo?: string;
  film: { title: string; lead: string; body: string; w: number; h: number; label: string };
  chapters: Chapter[];
  want: { label: string; href: string };
  services: string[];
  // Testimonial slot: leave out until a real, approved quote exists. Never invent one.
  // testimonial?: { quote: string; name: string; role: string; avatar?: string };
};

const brandApp = { label: 'Start a brief: Brand + App', href: '/services/apps#brief' };
const brandOnly = { label: 'Start a brief: Brand', href: '/services/brand#brief' };
const brandWeb = { label: 'Start a brief: Brand + Website', href: '/services/websites#brief' };
const brandChars = { label: 'Start a brief: Brand + Characters', href: '/services/brand#brief' };
const todo = (id: string, h: number, label: string, bg?: string, w = 1280): Visual => ({ kind: 'todo', id, w, h, label, bg });

export const cases: Case[] = [
  {
    slug: 'mylo', name: 'Mylo', kind: 'Our own product', tag: 'Our product', year: '2026',
    cardLine: 'Goals, systems and private rooms. Brand, character, app and website.', cardServices: ['Branding', 'Apps', 'Websites', 'Motion'], filters: ['Branding', 'Apps', 'Websites', 'Motion'], coverId: '802:1365',
    headline: 'Designing Mylo, where getting things done feels like a game',
    line: 'A productivity app with games, friends and rewards built in.',
    intro: 'Mylo is our own product: a productivity app with games, friends and rewards built in. We designed the brand, the characters, the iOS and Android app in light and dark, the desktop app, the admin panel and the website.',
    status: 'Launching December 2026 at staymylo.com. The app, website and admin are designed and built.', url: 'https://staymylo.com',
    stats: [['598 app screens', '299 screens, each one designed in light and dark'], ['22 desktop screens', '10 desktop app screens and 12 admin panel screens'], ['14 mini apps', 'Focus, games, pets, journal and more, inside one app']],
    did: ['Brand identity', 'Character design', 'Mobile app', 'Desktop app', 'Admin panel', 'Website', 'Motion'],
    theme: 'dark', grad: ['#f4f4f5', '#52525b'], icon: '/images/cases/icon-mylo.svg',
    film: { title: 'Film', lead: 'Three phones, three sides of Mylo.', body: 'Chess with a friend, a pet egg hatching and a home being built. The homepage film sums up the app in sixteen seconds.', w: 1360, h: 765, label: 'Mylo · homepage film · 0:16' },
    chapters: [
      { n: '02', title: 'The challenge', lead: 'Most productivity apps are built for one person, and most people stop opening them within a week.', body: 'Mylo had to make planning feel social and rewarding without turning work into noise. One app needed to hold a day plan, focus sessions, games with friends, rewards and a home that grows.',
        list: [['Planning feels like homework', 'Lists and timers work, but nothing makes you want to come back tomorrow.'], ['Progress is invisible', 'Finishing a task gives you a tick and nothing else.'], ['Friends live in other apps', 'Accountability works better together, but productivity tools stay solo.']] },
      { n: '03', title: 'How it started', lead: 'We started with a roadmap, not a screen.', body: 'The roadmap set out how people level up, from Kindle to Prestige, and which features unlock along the way. Every screen after that had a place on the map.', visuals: [todo('953:30409', 868, 'Figma roadmap board')] },
      { n: '04', title: 'Finding the visual direction', lead: 'Black and ash, with one white character.', body: 'We kept the palette quiet so the games, rewards and characters carry the colour. Mylo, the character, gives every empty state and celebration a face.', visuals: [todo('953:31743', 722, 'Brand system: tokens, type scale, characters and badges')] },
      { n: '05', title: 'Getting things done', lead: 'The productivity side is a calm plan for the day.', body: 'Today shows what matters, Focus runs the session, Mylo AI turns a messy list into a plan, and Perfect day rewards a day finished well.', visuals: [todo('953:32113', 636, 'Today, Focus, Mylo AI, Tick and Perfect day screens')] },
      { n: '06', title: 'The game side', lead: 'Mylo is more than a planner. It is the place, the game, the everything.', body: 'Finished tasks earn coins and keys. Friends play chess and party games, open chests, raise pets and build a home together.', visuals: [todo('953:32730', 1000, 'Games, rewards and home screens')] },
      { n: '07', title: 'Rooms, desktop and admin', lead: 'Rooms keep friends accountable, and the desktop app keeps the plan open while you work.', body: 'The admin panel lets the team run rewards, content, releases and the waitlist without touching code.', visuals: [todo('953:36944', 1190, 'Desktop Today, admin dashboard, rooms and room chat')] },
      { n: '08', title: 'The website', lead: 'One page that explains the idea and gets people ready for launch.', body: 'Built in black and ash like the app, with the film up top and each side of Mylo explained in turn.', visuals: [todo('953:37748', 1000, 'Website on desktop and mobile')] },
    ],
    want: brandChars, services: ['brand', 'apps', 'motion'],
  },
  {
    slug: 'virelle', name: 'Virelle Wellness', kind: 'Client project', tag: 'Client', year: '2026',
    cardLine: 'The shop that was living in an Instagram inbox. Rebrand, store and assistant.', cardServices: ['Branding', 'Websites', 'Motion'], filters: ['Branding', 'Websites', 'Motion'], coverId: '880:12840',
    headline: 'Designing Virelle Wellness, imported wellness you can trust',
    line: 'Brand, store, packaging seal and launch content.',
    intro: 'Client project. We designed the brand, the website, the packaging seal, the social content system and the homepage film.',
    status: 'Launching November 2026 at virellewellnesshub.com. The brand, the store and the launch videos are done.',
    stats: [['39 brand slides', 'Brand Guideline 2.0, from mark to packaging'], ['24 social posts', 'Three concepts explored, one chosen'], ['72 calendar designs', 'September and November content calendars']],
    did: ['Brand identity', 'Website', 'Packaging', 'Social content', 'Motion'],
    theme: 'light', grad: ['#029368', '#ec9700'], icon: '/images/cases/icon-virelle.svg',
    film: { title: 'Film', lead: 'The homepage film: original, sealed, dated.', body: 'The film that plays on the Wintech homepage: the store opens, the products line up and the order is placed. Built in Figma Motion.', w: 1360, h: 935, label: '0:13 · homepage film · Figma Motion' },
    chapters: [
      { n: '02', title: 'The challenge', lead: 'Sell imported wellness online in a market that expects fakes.', body: 'Shoppers in Lagos worry about counterfeit and expired products, and most stores give them nothing to check.',
        list: [['Fear of fakes', 'Shoppers worry imported products are counterfeit or expired.'], ['Nothing to check', 'Most online stores give no proof before you pay.'], ['Trust at the door', 'The order has to arrive looking as genuine as the promise.']] },
      { n: '03', title: 'How it started', lead: 'A brand guideline first, then a content system built on top of it.', body: 'Three social directions were explored side by side in Figma. One was chosen and became the monthly calendars.', visuals: [todo('953:95829', 910, 'Figma file: three social concepts', '#e9e9e9')] },
      { n: '04', title: 'Finding the visual direction', lead: 'A leaf, a seal and a promise kept.', body: 'The leaf mark repeats as a quiet pattern and the printed seal closes every order, on a forest to mint palette with one marigold accent.', visuals: [todo('953:96579', 849, 'Brand system: mark, seal, palette and packaging', '#0b2b21')] },
      { n: '05', title: 'The website', lead: 'Original wellness, delivered.', body: 'Proof comes first: US-sourced, sealed, delivered, with the expiry date on every listing across supplements, skincare, wholefoods and fragrance.', visuals: [todo('953:96952', 657, 'Homepage', '#d2f4db'), todo('953:97038', 620, 'Product cards', '#f4f6f3')] },
      { n: '06', title: 'The content system', lead: 'Green Glass: deep green, frosted panels and real people.', body: 'It runs as carousels, reel covers and WhatsApp Business content, planned month by month.', visuals: [todo('953:97063', 1000, 'All social posts', '#0b2b21')] },
    ],
    want: brandWeb, services: ['brand', 'websites', 'motion'],
  },
  {
    slug: 'manzeelatur-ridho', name: 'Manzeelatur Ridho', kind: 'Client project', tag: 'Client', year: '2026',
    cardLine: "Arabic and the Qur'an, live from home. Brand, learning app and website.", cardServices: ['Branding', 'Apps', 'Websites', 'Motion'], filters: ['Branding', 'Apps', 'Websites', 'Motion'], coverId: '880:12876',
    headline: 'Designing Manzeelatur Ridho, an online madrasah for families',
    line: 'A learning app for children and adults, with a parent space and an ustadh panel.',
    intro: 'Client project. We designed the brand, a learning app for children and adults, a parent space, a desktop web app, the ustadh and admin panel, the website and the brand film.',
    status: 'Designed. The brand, app, desktop web, admin panel and website are with the client for approval before launch.',
    stats: [['118 mobile screens', 'Child and adult app, lessons and seven games'], ['68 desktop screens', 'Desktop web app and the ustadh and admin panel'], ['11 brand slides', 'Logo, colour, type, social and mockups']],
    did: ['Brand identity', 'Product planning', 'Mobile app', 'Web app', 'Admin panel', 'Website', 'Motion'],
    theme: 'light', grad: ['#2a4bd7', '#e3a93b'], iconTodo: '950:1686',
    film: { title: 'Film', lead: 'The brand film: a seal, a lamp and a midnight sky.', body: 'The short film that opens the brand. The seal draws in, the name appears, then the colours, type and social system follow. Built in Figma Motion.', w: 1360, h: 765, label: '0:34 · brand film · Figma Motion' },
    chapters: [
      { n: '02', title: 'The challenge', lead: 'Children in the UK, families from Nigeria. English comes first, Arabic is new, and time is short between school and bed.', body: 'The parent pays and needs to see it working, and both a seven year old and an eleven year old had to feel it was made for them.',
        list: [['Two very different learners', 'Big audio buttons and tracing for the youngest, levels and a fair league for older children.'], ['A parent who pays', 'Progress, homework, booking and billing in one place, behind a PIN.'], ['One ustadh, many students', 'In phase one the founder is the teacher and the admin, so his panel had to do everything.']] },
      { n: '03', title: 'How it started', lead: 'It started with one ustadh. Phase one is the founder and his students, with classes on WhatsApp or Google Meet and everything else in the app.', body: 'So we planned the product phase by phase in Figma before drawing a single screen.', visuals: [todo('922:85281', 818, 'Figma planning file: roadmap, build map, content map and app structure', '#e9e9e9')] },
      { n: '04', title: 'Finding the visual direction', lead: 'Calm like a classroom, light like a game.', body: 'One task per screen, gold only for wins, and Arabic always the biggest thing on screen. The brand grew from the same idea: a seal, a lamp and a midnight sky.', visuals: [todo('922:85659', 790, 'Brand system: cover, logo, colour and typography', '#141a3d')] },
      { n: '05', title: 'The child app', lead: 'Four tabs for children, and every lesson runs the same loop: listen, try, play, earn a star.', body: 'Over 60 mobile screens cover onboarding, placement, eight learning areas and seven games.', visuals: [todo('922:86354', 1000, 'All child app screens', '#e3e9ff')] },
      { n: '06', title: 'Parents, desktop and the ustadh', lead: 'One product, four doors: the child, the parent, the adult learner and the ustadh.', body: 'Parents follow progress, book classes and pay behind a PIN. Children and adults also learn on desktop, and the ustadh runs students, classes, homework and payments from one panel.', visuals: [todo('944:576', 1188, 'Desktop Today, ustadh dashboard, parent home and weekly report', '#141a3d')] },
      { n: '07', title: 'The website', lead: "Learn Arabic and the Qur'an, live from home.", body: 'The site explains the method, the plans and the ustadh in the same calm voice as the app.', visuals: [todo('922:90848', 1000, 'Website on desktop and mobile', '#f8f6f0')] },
    ],
    want: brandApp, services: ['brand', 'apps', 'motion'],
  },
  {
    slug: 'tobel-pearls', name: 'Tobel Pearls', kind: 'Client project', tag: 'Client', year: '2026',
    cardLine: 'A 55-page brand system for a Lagos clearing company.', cardServices: ['Branding', 'Websites'], filters: ['Branding', 'Websites'], coverId: '880:12895',
    headline: 'Designing Tobel Pearls, a brand that looks as fast as five days',
    line: 'Strategy, identity and a 55-page guideline for a Lagos clearing company.',
    intro: 'Client project. Tobel Pearls clears air and sea freight through Apapa, Tin Can Island and MMA in Lagos, with a hard promise: five days, maximum. We turned a strong mark and scattered materials into one brand system, from strategy to the side of a truck.',
    status: 'Delivered. The strategy, the identity system and the 55-page guideline with shared Figma styles are with the client.',
    stats: [['55-page guideline', 'Strategy, voice, identity and applications in one guide'], ['30+ touchpoints', 'Fleet, signage, stationery, packaging, digital and print'], ['12 chapters', 'From strategy to print, every decision written down']],
    did: ['Brand strategy', 'Tone of voice', 'Identity system', 'Brand guideline', 'Fleet and signage', 'Stationery', 'Packaging', 'Social'],
    theme: 'light', grad: ['#007dfe', '#f2751f'], icon: '/images/cases/icon-tobel-pearls.svg',
    film: { title: 'The guide', lead: 'Fifty-five pages. As many on real life as on rules.', body: 'Twelve chapters, from strategy and voice to fleet, signage and print, handed over with shared text and colour styles in Figma.', w: 1360, h: 817, label: 'Tobel Pearls · brand style guide v2.0 · 55 pages' },
    chapters: [
      { n: '02', title: 'What we inherited', lead: 'A strong mark, saying four different things.', body: 'Before designing anything, we audited every touchpoint: the logo files, the site prototype, the company profile, the stationery and the social posts. The mark was good. The system around it did not exist.',
        list: [['Two spellings in circulation', '"Tobel Pearl" in the company profile, "Tobel Pearls" on the logo and the site.'], ['Nine colours, no roles', 'Two competing blues, a lime with no job, and orange used everywhere.'], ['Four competing slogans', 'Every piece of material described the company differently.']] },
      { n: '03', title: 'The insight', lead: '"Demurrage is not a shipping cost. It is a paperwork cost."', body: 'Every extra day at Apapa is a day someone filed too late. If Tobel Pearls wins on paperwork, the identity has to look like the most organised paperwork in the port. From there: one positioning line, one promise, five days.', visuals: [todo('953:87206', 869, 'Figma strategy pages', '#f4f4f5')] },
      { n: '04', title: 'The mark, read slowly', lead: 'Two strokes. Three letters. One road. Two ways to travel.', body: 'The top stroke is the crossbar of the T and the body is the P. Flip it and it becomes the b. Tilt it and the strokes become wings for air freight; level it out and it swims for sea.', visuals: [todo('953:87463', 833, 'Logo meaning, construction, variations and colour versions', '#f4f4f5')] },
      { n: '05', title: 'Colour with a job, a voice with rules', lead: 'Nine colours became a hierarchy.', body: 'Tobel Blue leads, Deep Navy carries authority, Signal Orange appears once per layout and Hi-Vis Lime lives on the yard only. The voice sounds like the person who already has your documents: specific, calm and plain.', visuals: [todo('953:87760', 833, 'Primary colours, colour ratio, voice principles and type hierarchy', '#f4f4f5')] },
      { n: '06', title: 'Paperwork is the product', lead: 'A billboard that drives past the terminal every day.', body: 'Fleet, signage, stationery, packaging and social, all tested at real size. The page-frame rules and crop marks from the guide run through every sheet, so every piece reads as part of one system.', visuals: [todo('953:88037', 940, 'Applications: fleet, signage, stationery, packaging and social', '#f4f4f5')] },
    ],
    want: brandOnly, services: ['brand'],
  },
  {
    slug: 'lets-hang', name: "Let's Hang", kind: 'Our own product', tag: 'Our product', year: '2026',
    cardLine: 'Nigeria is outside tonight. A map-first app for group plans.', cardServices: ['Apps'], filters: ['Apps'], coverId: '880:12966',
    headline: "Designing Let's Hang, a map of people going out tonight",
    line: 'A map-first app for going out with strangers in Nigeria.',
    intro: "Our own product. Let's Hang is a map-first app for going out with strangers in Nigeria. We designed the product and the brand, then built a clickable demo, a waitlist site and a one-page pitch.",
    status: 'Designed and built by Wintech. The clickable demo and the waitlist site are live at letshang-henna.vercel.app.', url: 'https://letshang-henna.vercel.app',
    stats: [['14 app screens', 'A clickable demo that runs in a phone browser'], ['13 site sections', 'The waitlist site, in light and dark, desktop and phone'], ['1 pitch page', 'The problem, the model and the budget on one page']],
    did: ['Product strategy', 'Brand identity', 'Mobile app', 'UX/UI design', 'Waitlist site', 'Pitch page', 'Front-end'],
    theme: 'light', grad: ['#834dfb', '#f0e100'], icon: '/images/cases/icon-lets-hang.svg',
    film: { title: 'Live demo', lead: 'Tap through it on your phone, no sign-up needed.', body: 'The demo runs in a phone browser and the landing page collects the waitlist. Both are live at letshang-henna.vercel.app.', w: 1360, h: 765, label: "Let's Hang · clickable demo · live" },
    chapters: [
      { n: '02', title: 'The problem', lead: 'Everybody wants to go out. Almost nobody actually goes.', body: "Let's Hang isn't replacing WhatsApp. It is for the night you want to do something and don't have anyone to do it with.",
        list: [['No crew, no plan', 'Your social life depends on friends who are free on the same night. New in town, or just quiet? You stay in.'], ['The 40-message group chat', "Plans die in threads: who's coming, where, what time, who's paying. By Friday nobody remembers."], ['Money makes it awkward', 'Someone fronts the pitch or the boat, then spends a week chasing transfers.']] },
      { n: '03', title: 'A map of people, not listings', lead: 'Every pin is someone with a plan, and you see how many spots are left before you ask.', body: 'You join a person with a plan, not a poster. Every join is a request: the host approves, then you see the meeting point and land in the group chat with everyone already there.', visuals: [todo('953:81669', 676, 'The map, Peek, The hang and Start a hang screens', '#f5f3ff')] },
      { n: '04', title: "Split it, don't chase it", lead: 'Every time somebody joins, everybody else pays less.', body: 'The cost divides itself and the money goes to the venue, never the host. Partner venues give groups a discount, and payouts are held until 48 hours after the event.', visuals: [todo('953:81688', 676, 'Group, Wallet, Checkout and Tickets screens', '#f4f4f5')] },
      { n: '05', title: 'Rooms, and strangers you can trust', lead: "Some nights you don't want a plan. You just want voices.", body: 'Live rooms you can drop into and leave without explaining yourself, and one tap turns a room into a pin on the map. Government ID is matched to a selfie before you join anything, and pins land on public venues, never homes.', visuals: [todo('953:81707', 1000, 'Rooms and trust screens', '#f5f3ff')] },
      { n: '06', title: 'Electric violet, turbo yellow', lead: 'Light by default, with a deep haiti for night rooms.', body: 'Yellow is saved for anything live. One typeface, DM Sans, in three weights.', visuals: [todo('953:81757', 565, 'Logo and map pins', '#f4f4f5'), { kind: 'swatches', id: '953:82039', bg: '#f4f4f5', items: [{ name: 'Electric Violet', hex: '#834DFB', ink: '#ffffff' }, { name: 'Turbo', hex: '#F0E100', ink: '#1b1033' }, { name: 'Haiti', hex: '#1B1033', ink: '#ffffff' }, { name: 'Blue Chalk', hex: '#F5F3FF', ink: '#1b1033' }, { name: 'Violet soft', hex: '#EFE9FF', ink: '#1b1033' }] }] },
      { n: '07', title: 'The waitlist site and the pitch', lead: 'A landing page with one job: get people excited enough to leave an email.', body: 'Floating cards on a dotted grid, a mini UI inside every feature card, light and dark, desktop and phone. A one-page pitch sits behind it for anyone who wants the numbers.', visuals: [todo('953:82061', 845, 'Waitlist site and pitch page', '#f5f3ff'), todo('953:82066', 680, 'Waitlist site on phone', '#f4f4f5')] },
    ],
    want: brandApp, services: ['apps', 'brand', 'websites'],
  },
  {
    slug: 'cardiorisk', name: 'CardioRisk', kind: 'Client project', tag: 'Client', year: '2026',
    cardLine: 'Heart risk, made readable. A health AI product.', cardServices: ['Apps'], filters: ['Apps'], coverId: '880:13903',
    headline: 'Designing CardioRisk, a heart risk score anyone can read',
    line: 'A redesign that makes a 10-year heart risk score explainable.',
    intro: "Client project. CardioRisk estimates a person's 10-year risk of heart disease from 15 routine readings, with a model trained on the Framingham Heart Study. We audited the working app, then redesigned the brand, the website and the app so a clinician can trust the result and explain it.",
    status: "Designed. A redesign of the brand, website and app. The risk bands still need a clinician's sign-off.",
    stats: [['14 guideline slides', 'Logo, colour, type, imagery, risk and interface'], ['7 app screens', '3 desktop and 4 mobile, from assessment to history'], ['1 website', 'A home page that explains before it asks']],
    did: ['Product audit', 'Brand identity', 'Brand guideline', 'Website', 'Web app', 'Mobile app', 'Data visualisation'],
    theme: 'light', grad: ['#161718', '#e5383b'], icon: '/images/cases/icon-cardiorisk.svg',
    film: { title: 'The redesign', lead: 'From a final year project to a tool a clinician would trust.', body: 'The original app worked: an XGBoost model that estimates 10-year heart disease risk from 15 inputs. We redesigned everything around one question: what does this number mean?', w: 1360, h: 765, label: 'CardioRisk · website · home' },
    chapters: [
      { n: '02', title: 'What we found', lead: 'The model worked. Nobody could read the result.', body: 'We audited the Flask app line by line before designing anything. Some problems were design, some were logic, and we wrote both down for the developer.',
        list: [['A school project, not a product', 'The home page led with "Final Year Project" and "Download Project Doc".'], ['A bare percentage', 'The result was a number and "Recommended to change Life style", with no context and no next step.'], ['Bands that disagree', 'The code labelled 30% to 50% as Low. We proposed three clear bands, to be confirmed with a clinician.']] },
      { n: '03', title: 'How it started', lead: 'Every finding on one Figma page.', body: 'What the product does, the data it takes, what it gives back, the problems found, the new flow and the risk bands, before a single screen.', visuals: [todo('952:23349', 596, 'Figma audit board', '#f4f4f5')] },
      { n: '04', title: 'Grey to think, red to act', lead: 'A heart in four parts: personal, medical, lifestyle and clinical.', body: 'The red part of the mark is the clinical step, where the numbers decide. Everything else stays grey, so red always means act. One typeface, Geist, with Geist Mono for units and numbers.', visuals: [todo('952:23399', 495, 'Brand guideline: logo, colour, typography and risk', '#f4f4f5')] },
      { n: '05', title: 'One track, three bands', lead: 'The result answers what the number means and what to do next.', body: 'Four short steps with exact clinical values and normal ranges shown inline, then a risk gauge with clear bands, the top factors as simple bars and a printable report. History keeps past assessments a tap away.', visuals: [todo('952:23532', 1197, 'App on desktop and mobile: result and clinical step', '#f4f4f5')] },
      { n: '06', title: 'The website', lead: 'A landing page that explains before it asks.', body: 'What it does, how accurate it is, how it works and who it is for, then a clear way into the assessment.', visuals: [todo('952:23894', 1568, 'Website on desktop', '#f4f4f5')] },
    ],
    want: brandApp, services: ['apps', 'brand', 'websites'],
  },
  {
    slug: 'virtual-trades', name: 'Virtual Trades', kind: 'Client project', tag: 'Client', year: '2026',
    cardLine: 'Gift cards and crypto in, naira out. Brand, app, website and film.', cardServices: ['Branding', 'Apps', 'Websites', 'Motion'], filters: ['Branding', 'Apps', 'Websites', 'Motion'], coverId: '902:920',
    headline: 'Designing Virtual Trades, a calm way to sell gift cards for naira',
    line: 'Brand, app in dark and light, website and homepage film.',
    intro: 'Client project. Virtual Trades lets people sell and buy gift cards, buy, sell and swap crypto, and withdraw to Nigerian banks. We designed the brand, the app in dark and light, the website, the social posts, the illustrations and the homepage film.',
    status: 'Designed. The brand, the app in dark and light, the website and the social posts are complete.',
    stats: [['26 app screens', 'Every flow, in dark and light'], ['15 brand slides', 'Logo, colour, type, illustration and voice'], ['5 social posts', 'Plus 7 illustrations for web and social']],
    did: ['Brand identity', 'Mobile app', 'Website', 'Social', 'Illustration', 'Motion'],
    theme: 'dark', grad: ['#9160df', '#b99cff'], icon: '/images/cases/icon-virtual-trades.svg',
    film: { title: 'Film', lead: 'The homepage film: rates you can see, in sixteen seconds.', body: 'The app opens, the rates move and the payout lands. Built in Figma Motion.', w: 1360, h: 935, label: '0:16 · homepage film · Figma Motion' },
    chapters: [
      { n: '02', title: 'The challenge', lead: 'Selling a gift card for naira usually means sending codes into a chat, waiting, and hoping the rate holds.', body: 'People could not see the price up front or where their card was, and every quiet minute felt like a risk. The product had to earn trust in the first minute and keep it until the money landed.',
        list: [['No price up front', 'The rate usually appears only after the card is sent.'], ['No sight of the card', 'Nobody can tell if a card is verifying, stuck or rejected.'], ['Trust breaks on delay', 'Every silent minute makes people assume the worst.']] },
      { n: '03', title: 'How it started', lead: 'We mapped every flow end to end before any visual design.', body: 'Sell, track, get paid, buy, swap, withdraw and get help. The dark app came first, then a light mode was built from the same components. The brand, the app, the website and social all live in one Figma file.', visuals: [todo('955:106119', 763, 'Figma app file: thirteen flows', '#1e1e1e')] },
      { n: '04', title: 'Finding the visual direction', lead: 'A split V for value that moves both ways.', body: 'Three cut strokes form the mark: what you hold, what you get, and the step between them. Near black and one violet carry the system, with diagonal light instead of glow, Sora for the wordmark and Plus Jakarta Sans in the app.', visuals: [todo('955:107088', 860, 'Brand system: hero lockup, logo, colour and typography')] },
      { n: '05', title: 'Sell a card, get paid', lead: 'The quote comes before the upload, and the payout is the moment of trust.', body: 'Choose a card, see the naira value straight away, upload, then watch it move from submitted to verifying to paid. If a card fails, the app says why and what to do next.', visuals: [todo('955:107185', 636, 'Choose, Quote, Status, Paid and Not verified screens')] },
      { n: '06', title: 'Buy, swap, hold and get help', lead: 'Gift cards and crypto in one wallet, with support tied to the card in question.', body: 'Buy cards for top brands, swap between USDT, BTC and ETH, follow live rates and withdraw to a bank in a few taps. Support chat opens with the transaction already attached, so nobody has to explain twice.', visuals: [todo('955:107412', 636, 'Buy card, Swap, Rates, Wallet and Support screens')] },
      { n: '07', title: 'Dark and light', lead: 'One component set, two modes.', body: 'Every screen exists in dark and light, so people can use the app the way they like and the brand still holds.', visuals: [todo('955:108017', 1000, 'Every screen in dark and light')] },
      { n: '08', title: 'The website', lead: 'Rates, steps and the people behind it, in the same calm dark voice.', body: 'The site carries the same diagonal light, real logos for every supported card, illustrated people and a live rates table.', visuals: [todo('955:109675', 1312, 'Website on desktop and mobile')] },
    ],
    want: brandApp, services: ['brand', 'apps', 'motion'],
  },
];

// Work index order (W1 · Work grid).
export const workOrder = ['mylo', 'virtual-trades', 'virelle', 'manzeelatur-ridho', 'tobel-pearls', 'lets-hang', 'cardiorisk'];

// PXDX masonry tiles, cropped from grid-<slug>.webp into public/images/cases/tiles/. Three columns (352, 544, 352).
export const tiles = tileData as Record<string, Tile[][]>;

// Motion pieces: not rendered on /work until the videos exist. Kept for when they do.
export const motionPieces = [
  { name: 'inDrive', sub: 'Spec ad · Feel the Fairness', time: '0:30' },
  { name: 'Lagos Life', sub: 'Explainer · browser game', time: '0:30' },
  { name: 'Life of the Party', sub: 'Launch film · 3D rave app', time: '0:30' },
  { name: 'Miol Luxe', sub: 'Spec ad · personal shopper', time: '0:30' },
];
