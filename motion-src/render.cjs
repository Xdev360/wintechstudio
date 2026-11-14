// usage: node render.js <dir> <seconds> <out-frames-dir> [fps] [onlyTimes comma]
const { chromium } = require('playwright');
const [dir,secs,out,fpsArg,only]=process.argv.slice(2);const fps=+(fpsArg||30);
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1312,height:984},deviceScaleFactor:1});
await p.goto('file://'+require('path').resolve(dir,'index.html'));await p.waitForTimeout(800);
const sz=await p.evaluate(()=>{const r=document.getElementById('stage').getBoundingClientRect();return {width:Math.ceil(r.width),height:Math.ceil(r.height)}});
if(sz.width>1312||sz.height>984){await p.setViewportSize(sz);await p.waitForTimeout(300);}
require('fs').mkdirSync(out,{recursive:true});
const el=await p.$('#stage');
const times= only? only.split(',').map(Number) : [...Array(Math.round(secs*fps)).keys()].map(i=>i/fps);
let i=0;for(const t of times){await p.evaluate(t=>window.render(t),t);
 await el.screenshot({path:`${out}/f${String(i).padStart(4,'0')}.png`});i++;}
await b.close();})();
