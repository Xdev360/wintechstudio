// Wintech UI sounds: synthesised with Web Audio, no audio files. Off until the visitor turns it on.
(function(){
  var KEY='wt-sound',ctx=null,on=false;
  try{on=localStorage.getItem(KEY)==='on'}catch(e){}
  function ac(){if(!ctx){var A=window.AudioContext||window.webkitAudioContext;if(!A)return null;ctx=new A()}if(ctx.state==='suspended')ctx.resume();return ctx}
  function tone(f1,f2,dur,vol,type){var c=ac();if(!c)return;var t=c.currentTime,o=c.createOscillator(),g=c.createGain();o.type=type||'sine';o.frequency.setValueAtTime(f1,t);o.frequency.exponentialRampToValueAtTime(f2,t+dur);g.gain.setValueAtTime(0.0001,t);g.gain.exponentialRampToValueAtTime(vol,t+0.005);g.gain.exponentialRampToValueAtTime(0.0001,t+dur);o.connect(g).connect(c.destination);o.start(t);o.stop(t+dur+0.02)}
  function tick(){var c=ac();if(!c)return;var t=c.currentTime,len=Math.floor(c.sampleRate*0.012),b=c.createBuffer(1,len,c.sampleRate),d=b.getChannelData(0);for(var i=0;i<len;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/len,3);var s=c.createBufferSource(),f=c.createBiquadFilter(),g=c.createGain();s.buffer=b;f.type='highpass';f.frequency.value=2200;g.gain.value=0.08;s.connect(f).connect(g).connect(c.destination);s.start(t)}
  var S={hover:function(){tick()},click:function(){tone(820,520,0.09,0.06,'triangle')},open:function(){tone(520,780,0.12,0.05,'sine')},close:function(){tone(700,420,0.12,0.05,'sine')},toggleOn:function(){tone(600,900,0.1,0.06,'sine');setTimeout(function(){tone(900,1200,0.08,0.04,'sine')},70)}};
  function play(n){if(on&&S[n])S[n]()}
  window.wtSound={play:play,isOn:function(){return on},set:function(v){on=v;try{localStorage.setItem(KEY,v?'on':'off')}catch(e){};document.documentElement.dataset.sound=v?'on':'off';if(v)S.toggleOn()}};
  document.documentElement.dataset.sound=on?'on':'off';
  var last=0;
  document.addEventListener('pointerover',function(e){if(e.pointerType!=='mouse')return;var el=e.target.closest('a,button,summary,.btn');if(!el||el.contains(e.relatedTarget))return;var n=performance.now();if(n-last<60)return;last=n;play('hover')});
  document.addEventListener('click',function(e){var el=e.target.closest('a,button,summary,.btn');if(!el||el.id==='sound-toggle')return;if(el.tagName==='SUMMARY'){var d=el.parentElement;play(d.open?'close':'open')}else play('click')});
  document.addEventListener('DOMContentLoaded',function(){var b=document.getElementById('sound-toggle');if(!b)return;b.setAttribute('aria-pressed',String(on));b.addEventListener('click',function(){window.wtSound.set(!on);b.setAttribute('aria-pressed',String(on))})});
})();
