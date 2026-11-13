const tg=window.Telegram&&window.Telegram.WebApp;if(tg){tg.ready();tg.expand()}
const P=[['Дима','Нап',31,12],['Иван','Нап',23,9],['Влад','Защ',14,3],['Саша','Пол',11,8],['Ион','Защ',9,2],['Артём','Нап',8,4],['Макс','Защ',6,5],['Серёжа','Защ',4,1],['Олег','Врт',2,0],['Женя','Врт',1,0]];
const F=[['Основное поле','ул. Примерная, 1'],['Запасное поле','ул. Тестовая, 5']];
const S={tab:'home',go:8,me:0,per:0,pos:'Нап',g:23,mvp:-1,v:[6,3,1],t:null,f:0,add:0,adm:0,hp:0,rl:0,vw:'Иван',rn:1,d:{d:'2026-11-14',t:'12:00'}};
const TR=[20,50,100,200],RL={'Дима':'adm','Саша':'hlp'},RN={adm:'Админ',hlp:'Помощник'},AV={},AB={'Дима':'Играю с 2015. Бью штрафные.','Влад':'Защитник. Не пройдёшь.'},RQ=[['Дима',2],['Саша',1]];
const C={'Нап':['rgba(226,75,74,.16)','#E24B4A'],'Защ':['rgba(55,138,221,.16)','#378ADD'],'Пол':['rgba(99,153,34,.2)','#6FA82A'],'Врт':['rgba(239,159,39,.2)','#C98410']};
const L={home:'Главная',table:'Таблица',teams:'Команды',me:'Профиль'};
const I={home:'<path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10"/>',table:'<path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 0 1-10 0zM7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/>',teams:'<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-4 3-6 7-6s7 2 7 6M17 5a3 3 0 0 1 0 6M18 14c2.5.5 4 2 4 5"/>',me:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>'};
const ic=k=>`<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${I[k]}</svg>`;
const cup=(c,s)=>`<svg width="${s}" height="${s}" style="color:${c};flex-shrink:0"><use href="#tr"/></svg>`;
const pl=p=>`<span class="pl" style="background:${C[p][0]};color:${C[p][1]}">${p}</span>`;
const ini=n=>n.slice(0,2).toUpperCase();
const ava=n=>AV[n]?`<img src="${AV[n]}" alt="" style="width:100%;height:100%;object-fit:cover">`:ini(n);
const iso=x=>x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0');
const fd=()=>new Date(S.d.d+'T12:00').toLocaleDateString('ru-RU',{weekday:'short',day:'numeric',month:'long'});
const dl=()=>{const n=Math.round((new Date(S.d.d+'T12:00')-new Date(new Date().toDateString()+' 12:00'))/864e5);return n<=0?'сегодня':n==1?'завтра':'через '+n+' дн.'};
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const gl=n=>{const a=n%100,b=n%10;return n+(a>10&&a<15?' голов':b==1?' гол':b>1&&b<5?' гола':' голов')};

const home=()=>{const n=S.go+S.me,k=10-n,nt=TR.find(t=>t>S.g)||TR[3]+100;
return `<div class="row"><div><p class="mu">Привет,</p><h2>Иван</h2></div><button data-a="tab" data-v="me" class="av" style="width:38px;height:38px;border:2px solid var(--ac)" aria-label="Мой профиль">${ava('Иван')}</button></div>
<div class="hero"><div class="row"><b>Следующий матч</b><span class="chip">${dl()}</span></div><div class="big">${S.d.t}</div><p>${fd()} · ${esc(F[S.f][0])}</p>
<div class="segs">${Array.from({length:10},(_,i)=>`<i class="sg${i<n?' f':''}"></i>`).join('')}</div>
<p style="margin:0 0 12px">${k>0?`Идут ${n}, нужно ещё ${k}`:`Состав готов: идут ${n}`}</p>
<button class="cta" data-a="vote">${S.me?'Ты идёшь · отменить':'Иду на игру'}</button></div>
<div class="cd"><div class="row"><p class="mu">Где играем</p><button data-a="role" class="mu" style="text-decoration:underline">${['Режим игрока','Режим помощника','Режим админа'][S.rl]}</button></div>${S.adm?'':`<b style="font-weight:500;font-size:16px">${esc(F[S.f][0])}</b>`}<select data-a="fld" class="sel" aria-label="Поле"${S.adm?'':' hidden'}>${F.map((f,i)=>`<option value="${i}"${i==S.f?' selected':''}>${esc(f[0])}</option>`).join('')}</select>${F[S.f][2]?`<img src="${F[S.f][2]}" alt="Фото поля" style="display:block;width:100%;height:130px;object-fit:cover;border-radius:12px;margin:8px 0 0">`:''}<p class="mu" style="margin:6px 0 10px">${esc(F[S.f][1])||'Адрес не указан'}</p>${S.adm?`<div class="g3" style="margin-bottom:8px"><button class="cd" data-a="edit" style="background:var(--bg);font-size:13px">Изменить</button><button class="cd" data-a="add" style="background:var(--bg);font-size:13px">Новое</button><button class="cd" data-a="del" style="background:var(--bg);font-size:13px">Удалить</button></div><div class="g2" style="margin-bottom:8px"><button class="cd" data-a="wd" data-v="6" style="background:var(--bg);font-size:13px">Ближайшая суббота</button><button class="cd" data-a="wd" data-v="0" style="background:var(--bg);font-size:13px">Ближайшее воскресенье</button><input type="date" id="dd" class="sel" value="${S.d.d}" aria-label="Дата"><input type="time" id="dt" class="sel" value="${S.d.t}" aria-label="Время"></div>`:''}<div class="g2b" style="grid-template-columns:1fr"><a data-a="map" href="https://yandex.ru/maps/?text=${encodeURIComponent(F[S.f][1]||F[S.f][0])}" target="_blank" rel="noopener" style="display:flex;align-items:center;justify-content:center;height:48px;border-radius:16px;text-decoration:none;background:var(--ac);color:var(--on);font-weight:500;font-size:13px">Яндекс Карты</a></div>${S.adm&&S.add?`<div style="margin-top:10px;display:grid;gap:8px"><p class="mu">${S.add==2?'Изменить поле':'Новое поле'}</p><input id="fn" class="sel" placeholder="Название поля" value="${S.add==2?esc(F[S.f][0]):''}"><input id="fa" class="sel" placeholder="Адрес с городом" value="${S.add==2?esc(F[S.f][1]):''}"><label class="cd" style="background:var(--bg);text-align:center;cursor:pointer;font-size:13px">Фото поля (из галереи)<input id="fp" type="file" accept="image/*" hidden></label><img id="fpv" alt="Предпросмотр фото" ${S.add==2&&F[S.f][2]?`src="${F[S.f][2]}"`:'hidden'} style="width:100%;height:110px;object-fit:cover;border-radius:12px"><button class="cd" data-a="save" style="background:var(--ac);color:var(--on);font-weight:500;height:44px">Сохранить</button><button class="cd" data-a="cancel" style="height:40px;color:var(--mu)">Отмена</button></div>`:''}</div>
<div class="cd"><b style="font-weight:500">Забил? Отправь заявку админу</b><div class="row" style="margin-top:10px"><div style="display:flex;align-items:center;gap:14px"><button class="cd" data-a="rn" data-v="-1" aria-label="Меньше" style="width:40px;height:40px;padding:0;background:var(--bg);font-size:18px">−</button><b style="font-size:22px;font-weight:500;min-width:20px;text-align:center">${S.rn}</b><button class="cd" data-a="rn" data-v="1" aria-label="Больше" style="width:40px;height:40px;padding:0;background:var(--bg);font-size:18px">+</button></div><button class="cd" data-a="rq" style="background:var(--ac);color:var(--on);font-weight:500;height:40px;padding:0 18px">Отправить</button></div></div>
${S.hp?`<div class="cd"><b style="font-weight:500">Заявки на голы (${RQ.length})</b>${RQ.length?RQ.map((r,i)=>`<div class="li"><span>${esc(r[0])} · ${gl(r[1])}</span><button data-a="ok1" data-v="${i}" class="pl" style="background:var(--ac);color:var(--on);padding:7px 12px;font-weight:500">Принять</button><button data-a="no1" data-v="${i}" class="pl" style="background:var(--ln);padding:7px 12px">Нет</button></div>`).join(''):'<p class="mu" style="margin-top:6px">Новых заявок нет</p>'}</div>`:''}
<div class="g3"><div class="cd"><b>${S.g}</b><p class="mu">Голы</p></div><div class="cd"><b>15</b><p class="mu">Матчи</p></div><div class="cd"><b>4</b><p class="mu">Серия</p></div></div>
<button class="cd row" data-a="res" style="text-align:left"><div><p class="mu">Прошлый матч</p><b style="font-size:15px;font-weight:500">Белые 7 : 5 Синие</b></div><span class="mu">Итоги ›</span></button>
<button class="cd row" data-a="tab" data-v="me" style="justify-content:flex-start;gap:12px;text-align:left">${cup('#F5B83D',34)}<div><b style="font-weight:500">Следующий кубок: ${nt} голов</b><p class="mu">Осталось забить ${nt-S.g}</p></div></button>`};

const mult=[1,.3,1.8];
const tbl=()=>{const T=P.map(p=>[p[0],p[1],Math.round((p[0]=='Иван'?S.g:p[2])*mult[S.per])]).sort((a,b)=>b[2]-a[2]);
const pod=[1,0,2].map(i=>{const p=T[i];return `<div data-a="pf" data-v="${p[0]}" style="cursor:pointer"><div class="av" style="margin:0 auto 4px;${i?'':'border:2px solid #F5B83D'}">${ava(p[0])}</div><span style="font-size:12px">${p[0]}</span><u style="height:${[88,64,44][i]}px;${i?'':'background:var(--ac);color:var(--on)'}">${p[2]}</u></div>`}).join('');
return `<div class="row"><h1>Таблица</h1><span class="chip" style="background:var(--ac);color:var(--on)">Ты на ${T.findIndex(p=>p[0]=='Иван')+1} месте</span></div>
<div class="seg">${['Сезон','Месяц','Всё время'].map((t,i)=>`<button data-a="per" data-v="${i}" class="${S.per==i?'on':''}">${t}</button>`).join('')}</div>
<div class="pod">${pod}</div>
<div class="cd">${T.slice(3,8).map((p,i)=>`<div class="li" data-a="pf" data-v="${p[0]}" style="cursor:pointer"><span class="mu" style="flex:0 0 14px">${i+4}</span><div class="av">${ava(p[0])}</div><span>${p[0]}<br>${pl(p[1])}</span><b>${p[2]}</b></div>`).join('')}</div>`};

const shuf=()=>{const g=P.filter(p=>p[1]=='Врт'),r=P.filter(p=>p[1]!='Врт').sort(()=>Math.random()-.5);S.t=[[g[0],...r.slice(0,4)],[g[1],...r.slice(4)]]};
const tm=()=>{if(!S.t)shuf();const[A,B]=S.t,s=l=>l.reduce((x,p)=>x+p[2]+p[3],0),a=s(A),b=s(B),pa=Math.round(a*100/(a+b));
const col=(n,l,c)=>`<div class="cd"><div class="row" style="justify-content:flex-start;margin-bottom:4px"><i style="width:10px;height:10px;border-radius:50%;background:${c}"></i><b style="font-weight:500">${n}</b></div>${l.map(p=>`<div class="li" data-a="pf" data-v="${p[0]}" style="cursor:pointer"><div class="av">${ava(p[0])}</div><span>${p[0]}</span>${pl(p[1])}</div>`).join('')}</div>`;
return `<div><h1>Команды</h1><p class="mu">${fd()} · 5 на 5</p></div>
<div class="g2">${col('Белые',A,'var(--tx)')}${col('Синие',B,'#378ADD')}</div>
<div class="cd"><div class="row" style="margin-bottom:6px"><span>Баланс сил</span><span class="mu">${pa}% на ${100-pa}%</span></div><div style="display:flex;height:8px;gap:2px"><div style="width:${pa}%;background:var(--tx);border-radius:4px"></div><div style="width:${100-pa}%;background:#378ADD;border-radius:4px"></div></div></div>
<div class="g2b"><button class="cd" data-a="shuf">Перемешать</button><button class="cd" data-a="ok" style="background:var(--ac);color:var(--on);font-weight:500">Подтвердить</button></div>`};

const me=()=>{const n=S.vw,own=n=='Иван',pp=P.find(p=>p[0]==n),g=own?S.g:pp[2],nt=TR.find(t=>t>g)||TR[3]+100,lv=['Новичок','Бронза','Серебро','Золото','Кристалл'][TR.filter(t=>g>=t).length],K=['#BA7517','#B4B2A9','#F5B83D','#5DA8F0'];
return `<div style="text-align:center"><div style="position:relative;width:96px;height:96px;margin:0 auto"><svg width="96" height="96" viewBox="0 0 96 96"><circle cx="48" cy="48" r="43" fill="none" stroke-width="5" style="stroke:var(--ln)"/><circle cx="48" cy="48" r="43" fill="none" stroke-width="5" stroke-linecap="round" style="stroke:#F5B83D" stroke-dasharray="${(270.2*g/nt).toFixed(1)} 270.2" transform="rotate(-90 48 48)"/></svg><div class="av" style="position:absolute;inset:9px;width:auto;height:auto;font-size:26px">${ava(n)}</div></div><h1 style="margin-top:8px">${esc(n)}</h1><p class="mu">${lv}${RL[n]?' · '+RN[RL[n]]:''}</p>${AB[n]?`<p style="margin:8px 0 0;font-size:13px">${esc(AB[n])}</p>`:''}</div>
<div class="g4"${own?'':' style="display:none"'}>${['Врт','Защ','Пол','Нап'].map(p=>`<button class="cd" data-a="pos" data-v="${p}" style="padding:9px 0;font-size:13px;${S.pos==p?'background:var(--ac);color:var(--on);font-weight:500':'color:var(--mu)'}">${p}</button>`).join('')}</div>
<div class="g3"><div class="cd"><b>${g}</b><p class="mu">Голы</p></div><div class="cd"><b>${own?9:pp[3]}</b><p class="mu">Ассисты</p></div><div class="cd"><b>3</b><p class="mu">MVP</p></div></div>
<div class="cd"><p style="margin:0 0 8px;font-weight:500">Кубки за голы</p><div class="g4" style="text-align:center">${TR.map((t,i)=>`<div style="display:flex;flex-direction:column;align-items:center">${cup(g>=t?K[i]:'var(--ln)',40)}<p class="mu">${t}</p></div>`).join('')}</div></div>
${own?`<div class="cd" style="display:grid;gap:8px"><label class="cd" style="background:var(--bg);text-align:center;cursor:pointer;font-size:13px">Сменить аватарку<input id="ap" type="file" accept="image/*" hidden></label><textarea id="ab" class="sel" rows="3" maxlength="140" placeholder="Напиши о себе" style="height:auto;padding:10px 12px">${esc(AB[n]||'')}</textarea><button class="cd" data-a="sab" style="background:var(--ac);color:var(--on);font-weight:500">Сохранить</button></div><button class="cd" data-a="goal" style="height:48px;color:var(--mu)">+5 голов (демо)</button>`:''}${S.adm&&!own?`<button class="cd" data-a="hlp" data-v="${esc(n)}" style="height:48px;font-weight:500">${RL[n]=='hlp'?'Снять с должности помощника':'Назначить помощником'}</button>`:''}`};

const res=()=>{const s=S.v.reduce((a,b)=>a+b);
return `<div class="row"><button data-a="tab" data-v="home" class="mu" style="font-size:14px">‹ Назад</button><span class="mu">Вс, 8 ноября</span></div><h1>Итоги матча</h1>
<div class="hero" style="text-align:center"><div class="row" style="font-weight:500"><span>Белые</span><span>Синие</span></div><div class="big" style="font-size:52px;margin:4px 0 0">7 : 5</div></div>
<div class="cd"><p style="margin:0 0 4px;font-weight:500">Кто забил</p>${[['Дима',3],['Иван',2],['Саша',2],['Влад',1]].map(x=>`<div class="li" data-a="pf" data-v="${x[0]}" style="cursor:pointer"><div class="av">${ava(x[0])}</div><span>${x[0]}</span><b>${gl(x[1])}</b></div>`).join('')}</div>
<div class="cd"><p style="margin:0 0 10px;font-weight:500">Кто лучший игрок матча</p>${['Дима','Иван','Влад'].map((n,i)=>`<button data-a="mvp" data-v="${i}" style="display:block;width:100%;text-align:left;margin-bottom:10px"><div class="row" style="font-size:13px;margin-bottom:3px"><span>${n}${S.mvp==i?' · твой голос':''}</span><span class="mu">${S.v[i]}</span></div><div class="bar"><i style="width:${S.v[i]*100/s}%"></i></div></button>`).join('')}</div>`};

const tabs=()=>`<nav class="tb"><div>${Object.keys(L).map(k=>`<button data-a="tab" data-v="${k}" aria-label="${L[k]}" class="${S.tab==k||(S.tab=='res'&&k=='home')?'on':''}">${ic(k)}</button>`).join('')}</div></nav>`;
const app=document.getElementById('app');
const R=top=>{app.innerHTML=({home,table:tbl,teams:tm,me,res})[S.tab]()+tabs();if(top)window.scrollTo(0,0)};
let tt;const T=m=>{clearTimeout(tt);const o=document.querySelector('.toast');if(o)o.remove();const d=document.createElement('div');d.className='toast';d.textContent=m;document.body.append(d);tt=setTimeout(()=>d.remove(),2200)};
document.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,v=b.dataset.v;if(a=='fld')return;if(a=='map'){if(tg&&tg.openLink){e.preventDefault();tg.openLink(b.href)}return}let top=0;
if(a=='tab'){S.tab=v;if(v=='me')S.vw='Иван';top=1}
else if(a=='res'){S.tab='res';top=1}
else if(a=='vote'){S.me=1-S.me;T(S.me?'Ты записан на игру':'Запись отменена')}
else if(a=='per')S.per=+v;
else if(a=='shuf')shuf();
else if(a=='ok')T('Составы отправлены в чат');
else if(a=='add'){S.add=S.add==1?0:1;S.ph=''}
else if(a=='edit'){S.add=S.add==2?0:2;S.ph=''}
else if(a=='cancel'){S.add=0;S.ph=''}
else if(a=='del'){if(F.length<2){T('Нужно оставить хотя бы одно поле');return}F.splice(S.f,1);S.f=0;S.add=0;T('Поле удалено')}
else if(a=='role'){S.rl=(S.rl+1)%3;S.adm=+(S.rl==2);S.hp=+(S.rl>0);S.add=0;RL['Иван']=['','hlp','adm'][S.rl];T(['Режим игрока','Режим помощника: принимает голы','Режим админа: всё, включая поле'][S.rl])}
else if(a=='save'){const n=document.getElementById('fn').value.trim(),ad=document.getElementById('fa').value.trim();if(!n){T('Введи название поля');return}if(S.add==2){F[S.f]=[n,ad,S.ph||F[S.f][2]];T('Поле обновлено')}else{F.push([n,ad,S.ph]);S.f=F.length-1;T('Поле добавлено')}S.add=0;S.ph=''}
else if(a=='pos')S.pos=v;
else if(a=='goal'){const o=S.g;S.g+=5;const c=TR.find(t=>o<t&&S.g>=t);if(c)T('Новый кубок: '+c+' голов')}
else if(a=='rn')S.rn=Math.max(1,Math.min(20,S.rn+ +v));
else if(a=='rq'){RQ.push(['Иван',S.rn]);S.rn=1;T('Заявка отправлена админу')}
else if(a=='ok1'){const r=RQ.splice(+v,1)[0],p=P.find(x=>x[0]==r[0]);p[2]+=r[1];if(r[0]=='Иван'){const o=S.g;S.g+=r[1];const c=TR.find(t=>o<t&&S.g>=t);T(c?'Новый кубок: '+c+' голов':'Голы засчитаны')}else T('Голы засчитаны: '+r[0])}
else if(a=='no1'){RQ.splice(+v,1);T('Заявка отклонена')}
else if(a=='hlp'){RL[v]=RL[v]=='hlp'?'':'hlp';T(RL[v]?v+' теперь помощник':'Должность снята')}
else if(a=='sab'){AB['Иван']=document.getElementById('ab').value.trim();T('Профиль сохранён')}
else if(a=='pf'){S.vw=v;S.tab='me';top=1}
else if(a=='wd'){const x=new Date();x.setDate(x.getDate()+((+v-x.getDay()+7)%7||7));S.d.d=iso(x)}
else if(a=='mvp'){const i=+v;if(S.mvp>=0)S.v[S.mvp]--;if(S.mvp==i)S.mvp=-1;else{S.mvp=i;S.v[i]++}}
R(top)});
document.addEventListener('change',e=>{
if(e.target.dataset.a=='fld'){S.f=+e.target.value;S.add=0;R(0)}
if(e.target.id=='dd'&&e.target.value){S.d.d=e.target.value;R(0)}
if(e.target.id=='dt'&&e.target.value){S.d.t=e.target.value;R(0)}
if(e.target.id=='ap'){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,256/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);AV['Иван']=c.toDataURL('image/jpeg',.85);R(0)};im.src=r.result};r.readAsDataURL(f)}
if(e.target.id=='fp'){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,640/im.width),c=document.createElement('canvas');c.width=im.width*k;c.height=im.height*k;c.getContext('2d').drawImage(im,0,0,c.width,c.height);S.ph=c.toDataURL('image/jpeg',.8);const pv=document.getElementById('fpv');if(pv){pv.src=S.ph;pv.hidden=false}};im.src=r.result};r.readAsDataURL(f)}
});
R(1);
