// Turns any <form data-send> into a WhatsApp or email message. No server, no data stored by us.
(function(){
  var WA='https://wa.me/2349134071813',MAIL='hello@wintechstudio.com';
  function collect(f){var lines=[f.dataset.send];f.querySelectorAll('[name]').forEach(function(el){if((el.type==='radio'||el.type==='checkbox')&&!el.checked)return;var v=(el.value||'').trim();if(!v)return;var l=el.dataset.label||el.name;lines.push(l+': '+v)});
    try{var b=localStorage.getItem('wt-brief-'+(new URLSearchParams(location.search).get('service')||''));if(b){b=JSON.parse(b);Object.keys(b).forEach(function(k){lines.push((k==='_note'?'Note':k)+': '+(Array.isArray(b[k])?b[k].join(', '):b[k]))})}}catch(e){}
    return lines.join('\n')}
  document.addEventListener('submit',function(e){var f=e.target;if(!f.matches('form[data-send]'))return;e.preventDefault();if(!f.reportValidity())return;var t=collect(f),via=(e.submitter&&e.submitter.value)||'whatsapp';
    if(window.wtSound)try{wtSound.play('click')}catch(_){}
    if(via==='email')location.href='mailto:'+MAIL+'?subject='+encodeURIComponent(f.dataset.send)+'&body='+encodeURIComponent(t);
    else window.open(WA+'?text='+encodeURIComponent(t),'_blank','noopener');
    var ok=f.querySelector('.sent');if(ok)ok.hidden=false});
})();
