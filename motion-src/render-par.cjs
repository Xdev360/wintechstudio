// Parallel frame renderer: node render-par.cjs <dir> <seconds> <outdir> <fps> <workers>
const { chromium } = require('playwright');const path=require('path'),fs=require('fs');
const [dir,secs,out,fpsA,wA]=process.argv.slice(2);const fps=+fpsA,W=+(wA||4);const N=Math.round(secs*fps);
fs.mkdirSync(out,{recursive:true});
(async()=>{const b=await chromium.launch();
async function worker(k){const p=await b.newPage({viewport:{width:1920,height:1920},deviceScaleFactor:1});
 await p.goto('file://'+path.resolve(dir,'index.html'));await p.waitForTimeout(1500);
 const sz=await p.evaluate(()=>{const r=document.getElementById('stage').getBoundingClientRect();return {width:Math.ceil(r.width),height:Math.ceil(r.height)}});await p.setViewportSize(sz);await p.waitForTimeout(300);
 const el=await p.$('#stage');
 for(let i=k;i<N;i+=W){await p.evaluate(t=>window.render(t),i/fps);await el.screenshot({path:`${out}/f${String(i).padStart(5,'0')}.png`});}}
await Promise.all([...Array(W).keys()].map(worker));await b.close();})();
