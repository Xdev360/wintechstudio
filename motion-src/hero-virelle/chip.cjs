const { chromium } = require('playwright');
const [text,fs,wt,out]=process.argv.slice(2);
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1400,height:400}});
const html=(`<html><head><style>@font-face{font-family:F;src:url(file://${__dirname}/../../node_modules/@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2) format('woff2');font-weight:100 900}
html,body{margin:0;background:transparent}
#w{position:absolute;left:0;top:0;padding:40px 80px 120px 80px}
#c{display:inline-flex;align-items:center;height:108px;box-sizing:border-box;padding:0 45px 0 43px;border-radius:54px;background:#fff;box-shadow:0 22px 50px rgba(30,60,45,.16),0 4px 10px rgba(30,60,45,.05);font:${wt} ${fs}px/1 F;color:#151A17;letter-spacing:0;white-space:nowrap}
#d{width:20px;height:20px;border-radius:50%;background:#E99B1C;margin-right:${'DOTGAP'}px}
</style></head><body><div id="w"><div id="c"><span id="d"></span><span id="t">${text}</span></div></div></body></html>`.replace('DOTGAP',process.env.GAP||27));
require('fs').writeFileSync(require('os').tmpdir()+'/chip.html',html);await p.goto('file://'+require('os').tmpdir()+'/chip.html');
await p.evaluate(()=>document.fonts.ready);
const r=await p.evaluate(()=>{const c=document.getElementById('c').getBoundingClientRect();const t=document.getElementById('t').getBoundingClientRect();return {cw:c.width,tw:t.width,cx:c.x,cy:c.y}});
console.log(JSON.stringify(r));
const w=await p.$('#w'); await w.screenshot({path:out,omitBackground:true}); await b.close();})();
