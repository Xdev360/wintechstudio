// Wintech UI sounds: synthesised with Web Audio, no audio files. Off until the visitor turns it on.
// Soft and tactile: a muted "tap" on clicks, a quiet lift when something opens. No hover sounds.
(function(){
  var KEY='wt-sound',ctx=null,master=null,on=false;
  try{on=localStorage.getItem(KEY)==='on'}catch(e){}
  function ac(){if(!ctx){var A=window.AudioContext||window.webkitAudioContext;if(!A)return null;ctx=new A();master=ctx.createGain();master.gain.value=0.55;var lp=ctx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=3200;master.connect(lp).connect(ctx.destination)}if(ctx.state==='suspended')ctx.resume();return ctx}
  function body(f1,f2,dur,vol,delay){var c=ac();if(!c)return;var t=c.currentTime+(delay||0),o=c.createOscillator(),g=c.createGain();o.type='sine';o.frequency.setValueAtTime(f1,t);o.frequency.exponentialRampToValueAtTime(f2,t+dur);g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+0.004);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);o.connect(g).connect(master);o.start(t);o.stop(t+dur+0.02)}
  function grain(vol,freq,delay){var c=ac();if(!c)return;var t=c.currentTime+(delay||0),len=Math.floor(c.sampleRate*0.008),b=c.createBuffer(1,len,c.sampleRate),d=b.getChannelData(0);for(var i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,4);var s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=b;f.type='bandpass';f.frequency.value=freq;f.Q.value=1.2;g.gain.value=vol;s.connect(f).connect(g).connect(master);s.start(t)}
  var S={
    tap:function(){grain(0.18,1800);body(240,120,0.06,0.09)},
    open:function(){grain(0.1,2400);body(420,560,0.09,0.035)},
    close:function(){grain(0.1,1600);body(520,380,0.08,0.03)},
    toggleOn:function(){body(440,440,0.12,0.04);body(660,660,0.14,0.035,0.08)}
  };
  function play(n){if(on&&S[n])S[n]()}
  window.wtSound={play:function(n){play(n==='click'?'tap':n)},isOn:function(){return on},set:function(v){on=v;try{localStorage.setItem(KEY,v?'on':'off')}catch(e){};document.documentElement.dataset.sound=v?'on':'off';if(v)S.toggleOn()}};
  document.documentElement.dataset.sound=on?'on':'off';
  document.addEventListener('click',function(e){var el=e.target.closest('a,button,summary,.btn,.opt,.chip');if(!el||el.id==='sound-toggle')return;if(el.tagName==='SUMMARY'){play(el.parentElement.open?'close':'open')}else play('tap')});
  document.addEventListener('DOMContentLoaded',function(){var b=document.getElementById('sound-toggle');if(!b)return;b.setAttribute('aria-pressed',String(on));b.addEventListener('click',function(){window.wtSound.set(!on);b.setAttribute('aria-pressed',String(on))})});
})();
