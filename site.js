(function(){
  var t=document.createElement('button'); t.id='toTop'; t.type='button'; t.setAttribute('aria-label','Remonter en haut de la page');
  t.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  document.body.appendChild(t);
  function upd(){ t.classList.toggle('show',(window.pageYOffset||document.documentElement.scrollTop)>500);
    var r=document.getElementById('resumeBar'); t.classList.toggle('lift',!!(r&&!r.hidden)); }
  window.addEventListener('scroll',upd,{passive:true}); upd();
  t.addEventListener('click',function(){ var rm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top:0,behavior:rm?'auto':'smooth'}); });
  (function(){ var box=document.getElementById('temoignages'), list=window.TEMOIGNAGES, g=document.getElementById('tmList');
    if(!box||!g||!list||!list.length) return;
    list.forEach(function(x){ if(!x||!x.texte) return; var f=document.createElement('figure'); f.className='tm';
      var p=document.createElement('p'); p.textContent='« '+x.texte+' »'; f.appendChild(p);
      var c=document.createElement('footer'); c.textContent=x.nom||''; if(x.contexte){ var sp=document.createElement('span'); sp.textContent=x.contexte; c.appendChild(sp); } f.appendChild(c); g.appendChild(f); });
    if(g.children.length) box.hidden=false; })();
  document.addEventListener('click',function(e){
    var pk=e.target.closest('[data-peek]');
    if(pk){ var d=document.createElement('div'); d.className='lbx'; d.setAttribute('role','dialog'); d.setAttribute('aria-label','Aperçu agrandi'); d.tabIndex=-1;
      var im=document.createElement('img'); im.src=pk.querySelector('img').src; im.alt=pk.querySelector('img').alt; d.appendChild(im);
      var close=function(){ d.remove(); document.removeEventListener('keydown',esc); }; var esc=function(ev){ if(ev.key==='Escape') close(); };
      d.addEventListener('click',close); document.addEventListener('keydown',esc); document.body.appendChild(d); d.focus(); }
  });
})();
