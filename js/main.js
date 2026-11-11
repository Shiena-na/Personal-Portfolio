const IMG={
 "portrait": "assets/images/hero-portrait.jpg",
 "about": "assets/images/about-portrait.jpg",
 "sjasq": "assets/images/project-sjasq-receipt.jpg",
 "sti": "assets/images/project-sti-library.jpg",
 "poster": "assets/images/project-sti-poster.jpg"
};
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
$$('[data-img]').forEach(i=>i.src=IMG[i.dataset.img]);
$('#yr').textContent=new Date().getFullYear();

/* skills: edit here */
const ICON={
 code:'<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
 server:'<rect x="2" y="3" width="20" height="8" rx="2"/><rect x="2" y="13" width="20" height="8" rx="2"/><path d="M6 7h.01M6 17h.01"/>',
 db:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
 pen:'<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.6 7.6"/><circle cx="11" cy="11" r="2"/>',
 tool:'<path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>',
 mon:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>'};
const SKILLS=[
{t:"Frontend",i:"code",s:["HTML","CSS","JavaScript","React","Responsive Web Design"],u:"SJASQ Receipt Generator, Ibaan MPS admin page"},
{t:"Backend",i:"server",s:["Java","Spring Boot","REST APIs","C#"],u:"Employee Bid Assignment API, STI Library System"},
{t:"Database",i:"db",s:["PostgreSQL","SQL Server","MySQL","pgAdmin","SQL Server Management Studio"],u:"Bid API (PostgreSQL), STI Library (SQL Server)"},
{t:"UI/UX & Design",i:"pen",s:["Figma","Wireframing","Prototyping","User Interface Design","User Experience Design"]},
{t:"Tools",i:"tool",s:["Git & GitHub","Visual Studio","VS Code","IntelliJ IDEA","Microsoft Office","Postman"]},
{t:"IT Support",i:"mon",s:["End-User Support","PC Troubleshooting","Printer Troubleshooting","SAP S/4HANA"],u:"IT internship at Ibaan Municipal Police Station"}];
$('#skg').innerHTML=SKILLS.map(g=>`<article class="card sk rv"><div class="ico"><svg class="ic" viewBox="0 0 24 24">${ICON[g.i]}</svg></div><div><h3>${g.t}</h3><div class="pills">${g.s.map(x=>`<span>${x}</span>`).join('')}</div>${g.u?`<p class="used"><b>Used in:</b> ${g.u}</p>`:''}</div></article>`).join('');
$('#checks').innerHTML=["Web Development","Backend Development","Database Management","UI/UX Design","IT Support","AI & Emerging Tech","Collaboration","Always Learning"].map(x=>`<li><i><svg class="ic" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg></i>${x}</li>`).join('');

/* nav */
$('#bg').onclick=e=>{const o=$('#menu').classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)};
$$('#menu a').forEach(a=>a.onclick=()=>$('#menu').classList.remove('open'));
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)$$('#menu a').forEach(a=>a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
$$('main section').forEach(s=>so.observe(s));
/* reveal */
const ro=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');ro.unobserve(e.target)}}),{threshold:.12});
$$('.rv').forEach(x=>ro.observe(x));
/* rotating role */
const RO=['Aspiring Developer','Backend Builder','Database Enthusiast','UI/UX Minded'];let ri=0,rc=0,rd=0;const rot=$('#rot');
function rt(){const w=RO[ri];rc+=rd?-1:1;rot.textContent=w.slice(0,rc);let d=rd?35:75;if(!rd&&rc===w.length){rd=1;d=1700}else if(rd&&rc===0){rd=0;ri=(ri+1)%RO.length;d=350}setTimeout(rt,d)}
if(!rm){rot.textContent='';rt()}
/* lightbox */
const lb=$('#lb');$$('[data-lb]').forEach(b=>b.onclick=()=>{const k=b.dataset.lb;$('img',lb).src=IMG[k];lb.classList.toggle('tall',k==='poster');lb.classList.add('on');$('button',lb).focus()});
const cl=()=>lb.classList.remove('on');lb.onclick=cl;addEventListener('keydown',e=>{if(e.key==='Escape')cl()});

/* contact form: FormSubmit by default (confirm the activation email once); optional Web3Forms key */
const W3F={key:''};
const TO='gawiranshiena@gmail.com';
const gm=v=>'https://mail.google.com/mail/?view=cm&fs=1&to='+TO+'&su='+encodeURIComponent(v.subject||'Hello Shiena')+'&body='+encodeURIComponent((v.message||'')+'\n\n- '+(v.name||'')+(v.email?' ('+v.email+')':''));
const f=$('#cf'),fs=$('#fs'),sb=$('#sb'),t0=Date.now();
const say=(c,t)=>{fs.className='show '+c;fs.textContent=t};
const fallback=(v,t)=>{say('bad',t+' ');const a=document.createElement('a');a.href=gm(v);a.target='_blank';a.rel='noopener';a.textContent='Send it with Gmail instead';a.style.textDecoration='underline';fs.appendChild(a)};
f.onsubmit=async e=>{e.preventDefault();const v=Object.fromEntries(new FormData(f)),er={};
if(!v.name.trim())er.name='Please enter your name.';if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))er.email='Please enter a valid email.';if(!v.subject.trim())er.subject='Please enter a subject.';if(v.message.trim().length<10)er.message='Please write at least 10 characters.';
['name','email','subject','message'].forEach(k=>$('#e-'+k).textContent=er[k]||'');if(Object.keys(er).length)return;
if(v.botcheck||Date.now()-t0<3000){say('bad','Blocked by spam protection. Please wait a moment and try again.');return}
sb.disabled=true;sb.textContent='Sending…';say('','Sending your message…');
try{let ok=false,msg='';
if(W3F.key){const fd=new FormData(f);fd.append('access_key',W3F.key);fd.append('from_name','Portfolio');const r=await fetch('https://api.web3forms.com/submit',{method:'POST',body:fd,headers:{Accept:'application/json'}}),j=await r.json();ok=r.ok&&j.success;msg=j.message}
else{const r=await fetch('https://formsubmit.co/ajax/'+TO,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({name:v.name,email:v.email,subject:v.subject,message:v.message,_subject:'Portfolio: '+v.subject,_replyto:v.email,_template:'table',_captcha:'false'})}),j=await r.json();ok=r.ok&&(j.success===true||j.success==='true');msg=j.message}
if(ok){say('ok','Thank you! Your message was sent. I will reply to your email soon.');f.reset()}else fallback(v,msg||'The message could not be sent.')}
catch(x){fallback(v,'Network error.')}
finally{sb.disabled=false;sb.textContent='Send Message'}};
