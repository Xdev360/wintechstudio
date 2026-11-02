// Wintech UI sounds: synthesised with Web Audio, no audio files. Off until the visitor turns it on.
// Soft and tactile: a muted "tap" on clicks, a quiet lift when something opens. No hover sounds.
(function(){
  var KEY='wt-sound',ctx=null,master=null,on=false;
  try{on=localStorage.getItem(KEY)==='on'}catch(e){}
  function ac(){if(!ctx){var A=window.AudioContext||window.webkitAudioContext;if(!A)return null;ctx=new A();master=ctx.createGain();master.gain.value=0.55;var lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=3200;master.connect(lp).connect(ctx.destination)}if(ctx.state==='suspended')ctx.resume();return ctx}
  function body(f1,f2,dur,vol,delay){var c=ac();if(!c)return;var t=c.currentTime+(delay||0),o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.setValueAtTime(f1,t);o.frequency.exponentialRampToValueAtTime(f2,t+dur);g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+0.004);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);o.connect(g).connect(master);o.start(t);o.stop(t+dur+0.02)}
  function grain(vol,freq,delay){var c=ac();if(!c)return;var t=c.currentTime+(delay||0),len=Math.floor(c.sampleRate*0.008),b=c.createBuffer(1,len,c.sampleRate),d=b.getChannelData(0);for(var i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,4);var s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=b;f.type='bandpass';f.frequency.value=freq;f.Q.value=1.2;g.gain.value=vol;s.connect(f).connect(g).connect(master);s.start(t)}
  function noise(dur,vol,f1,f2,delay){var c=ac();if(!c)return;var t=c.currentTime+(delay||0),len=Math.floor(c.sampleRate*dur),b=c.createBuffer(1,len,c.sampleRate),d=b.getChannelData(0);for(var i=0;i<len;i++)d[i]=(Math.random()*2-1);var s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=b;f.type='bandpass';f.Q.value=0.9;f.frequency.setValueAtTime(f1,t);f.frequency.exponentialRampToValueAtTime(f2,t+dur);g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+dur*0.35);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);s.connect(f).connect(g).connect(master);s.start(t);s.stop(t+dur+0.02)}
  function tone(f,dur,vol,delay,type){var c=ac();if(!c)return;var t=c.currentTime+(delay||0),o=c.createOscillator(),g=c.createGain();o.type=type||'sine';o.frequency.value=f;g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+0.006);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);o.connect(g).connect(master);o.start(t);o.stop(t+dur+0.02)}
  // Each kind of interaction has its own sound, all quiet and short.
  var S={
    tap:function(){grain(0.16,1800);body(240,120,0.06,0.08)},                      // buttons
    link:function(){grain(0.09,3000);body(900,700,0.03,0.025)},                    // text links and nav
    cta:function(){tone(660,0.16,0.035);tone(990,0.22,0.03,0.07)},                 // Book a call and primary buttons
    open:function(){grain(0.08,2400);body(380,620,0.11,0.035)},                     // accordion / FAQ opens
    close:function(){grain(0.08,1500);body(560,340,0.09,0.028)},                    // accordion / FAQ closes
    menuOpen:function(){noise(0.16,0.05,700,2600)},                                 // mega menu, mobile menu, AI sheet
    menuClose:function(){noise(0.14,0.04,2400,600)},
    select:function(){tone(520,0.07,0.04,0,'triangle');grain(0.06,2600)},          // chips, tabs, filters, toggles
    theme:function(){tone(392,0.12,0.03);tone(523,0.16,0.03,0.06)},                // light / dark
    toggleOn:function(){body(440,440,0.12,0.04);body(660,660,0.14,0.035,0.08)}     // sound switched on
  };
  function play(n){if(on&&S[n])S[n]()}
  window.wtSound={play:function(n){play(n==='click'?'tap':n)},isOn:function(){return on},set:function(v){on=v;try{localStorage.setItem(KEY,v?'on':'off')}catch(e){};document.documentElement.dataset.sound=v?'on':'off';if(v)S.toggleOn()}};
  document.documentElement.dataset.sound=on?'on':'off';
  document.addEventListener('click',function(e){var el=e.target.closest('a,button,summary,label,.btn,.opt,.chip,[role="tab"]');if(!el||el.id==='sound-toggle')return;
    if(el.tagName==='SUMMARY'){play(el.parentElement.open?'close':'open');return}
    if(el.matches('#theme-toggle,[data-theme-toggle],.theme')){play('theme');return}
    if(el.hasAttribute('aria-expanded')||el.hasAttribute('data-ask')||el.matches('.burger,[aria-controls]')){play(el.getAttribute('aria-expanded')==='false'?'menuClose':'menuOpen');return}
    if(el.matches('[role="tab"],.chip,.opt,label,[aria-pressed],[data-filter]')){play('select');return}
    if(el.matches('.btn-primary,.primary,.h-btn.primary,[href="/book"],[href^="/book?"]')){play('cta');return}
    if(el.tagName==='A'&&!el.matches('.btn,.h-btn')){play('link');return}
    play('tap')});
  document.addEventListener('DOMContentLoaded',function(){var b=document.getElementById('sound-toggle');if(!b)return;b.setAttribute('aria-pressed',String(on));b.addEventListener('click',function(){window.wtSound.set(!on);b.setAttribute('aria-pressed',String(on))})});
})();
