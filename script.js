let hindi=false, audioOn=false;
const weddingAudio = new Audio('music/wedding-instrumental.wav');
weddingAudio.loop = true;
weddingAudio.volume = 0.42;
function toggleSound(){
  audioOn = !audioOn;
  document.getElementById('soundBtn').textContent = audioOn ? '♫ Sound ON' : '♫ Sound OFF';
  if(audioOn){ weddingAudio.play().catch(()=>{ audioOn=false; document.getElementById('soundBtn').textContent='♫ Sound OFF'; }); }
  else { weddingAudio.pause(); }
}
document.getElementById('openInvite').onclick=()=>{document.getElementById('intro').classList.add('hide');if(!audioOn)toggleSound()};document.getElementById('againBtn').onclick=()=>{document.getElementById('intro').classList.remove('hide')};document.getElementById('fullBtn').onclick=()=>{if(!document.fullscreenElement)document.documentElement.requestFullscreen?.();else document.exitFullscreen?.()};
document.getElementById('langBtn').onclick=()=>{hindi=!hindi;document.getElementById('langBtn').textContent=hindi?'English':'हिंदी';document.querySelectorAll('[data-en]').forEach(el=>el.textContent=hindi?el.dataset.hi:el.dataset.en);document.querySelectorAll('.timebox span').forEach((el,i)=>el.textContent=hindi?['दिन','घंटे','मिनट','सेकंड'][i]:['Days','Hours','Minutes','Seconds'][i]);document.documentElement.lang=hindi?'hi':'en'};
function countdown(){let diff=new Date('2026-12-12T19:00:00+05:30')-new Date();let d=Math.max(0,diff);document.getElementById('days').textContent=Math.floor(d/86400000);document.getElementById('hours').textContent=Math.floor(d%86400000/3600000);document.getElementById('mins').textContent=Math.floor(d%3600000/60000);document.getElementById('secs').textContent=Math.floor(d%60000/1000)}countdown();setInterval(countdown,1000);
function zoom(src){document.getElementById('modalImg').src=src;document.getElementById('modal').classList.add('show')}

// Scroll reveal, falling petals, and reading progress: tuned for touch screens.
(function(){
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 document.querySelectorAll('main .section, .footer').forEach(el=>el.classList.add('reveal'));
 if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -35px 0px'});document.querySelectorAll('.reveal').forEach(el=>io.observe(el));}else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
 const progress=document.getElementById('readingProgress');function updateProgress(){let max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'}addEventListener('scroll',updateProgress,{passive:true});updateProgress();
 if(!reduce){const layer=document.getElementById('petalLayer');let count=0;function petal(){if(document.hidden||count>13)return;const el=document.createElement('i');el.className='petal';el.style.left=Math.random()*100+'%';el.style.setProperty('--drift',(Math.random()*150-75)+'px');el.style.animationDuration=(7+Math.random()*6)+'s';el.style.opacity=(.25+Math.random()*.4).toFixed(2);layer.appendChild(el);count++;el.addEventListener('animationend',()=>{el.remove();count--});}setInterval(petal,950);}
})();
