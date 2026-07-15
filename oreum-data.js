/* ===== 오름 2026 · 공유 데이터 (홈·강좌·강사 페이지 공유) ===== */

// ▼▼▼ 사전등록 구글폼 링크 ▼▼▼
window.OREUM_FORM_URL = "https://forms.gle/rXrF8pKKrhbzo64V8";


// --- 강사진 ---
window.TEACHERS = [
  { key:'gagyeong', name:'가경 T', role:'원장', head:true, short:'메가 출제 · 평가원 6회 만점',
    photo:'assets/profile-gagyeong.png',
    desc:'메가스터디 수능 국어 모의고사를 출제하는 출제자 겸 강사. 국어국문학 전공, 10년 이상 현장 강의. 평가원의 출제 경향을 읽는 눈을 학생에게 이식합니다.' },
  { key:'eungyu', name:'은규 T', role:'부원장', short:'고1·고2 내신 · 문법 집중', photo:'assets/t-eungyu.jpg',
    desc:'군포·산본·용호·흥진 등 다수 학교의 고1·고2 내신을 전담. 비내신 기간 문법·모의고사 집중으로 기본기를 다집니다.' },
  { key:'jiyeon', name:'지연 T', role:'고등부', short:'수리고 · 모의고사 집중', photo:'assets/t-jiyeon.jpg',
    desc:'외부지문 출제 비중이 높은 수리고 내신을 전담. 매주 과제·복습시험 반복과 모의고사 집중으로 실전 감각을 배양합니다.' },
  { key:'yedam', name:'예담 T', role:'고등부', short:'군포중앙·산본·용호 내신', photo:'assets/t-yedam.jpg',
    desc:'군포중앙·산본·용호고 고1 내신을 전담. 학교 진도에 맞춘 전략적 학습과 고난도 문법 대비를 진행합니다.' },
  { key:'woncheol', name:'양원철 T', role:'논술', short:'수시 약술형 논술 대비', photo:'assets/t-woncheol.jpg',
    desc:'수시 전형을 위한 약술형 논술 과정을 담당. EBS 교재와 자체 콘텐츠로 약술형 논술을 철벽 대비합니다.' },
  { key:'haesol', name:'해솔 T', role:'중등부', short:'중2·중3 기본기~심화', photo:'assets/t-haesol.jpg',
    desc:'중2·중3 정규반을 전담. 기본기부터 심화까지 다지고, 내신 대비 별도 클리닉으로 관리합니다.' },
];

// --- 네이버 플레이스 후기 ---
window.REVIEWS = [
  {n:"seo****",d:"5.15",h:0,b:"선생님이 수업 넘 잘하시고 학생들도 잘 챙겨주셔서 여기 다닌 이후로 성적이 완전 많이 올랐어요!",k:["선생님이 열정적이에요","수업이 체계적이에요"]},
  {n:"im****",d:"5.2",h:0,b:"선생님이 열정적으로 봐주십니다. 성적쑥쑥🌸 국어 성적이 오름🔥🔥",k:["선생님 실력이 좋아요","면학 분위기가 좋아요"]},
  {n:"cpa****",d:"5.2",h:0,b:"너무 좋아요!! 선생님이 너무 열정적이세요 ~~",k:["맞춤 지도를 잘해줘요","선생님이 열정적이에요"]},
  {n:"sus****",d:"5.2",h:0,b:"산본에 있는데도 평촌에서 수업 들으러 왔습니다! 독서 지문 읽을 때, 문학 갈래별 행동 강령을 잘 정립해주셔서 좋았어요. 내신 클리닉·숙제검사도 꼼꼼합니다.",k:["수업이 체계적이에요","선생님 실력이 좋아요"]},
  {n:"둠칫****",d:"5.2",h:0,b:"열심히 잘 가르쳐주십니다.",k:["맞춤 지도를 잘해줘요","학생과 소통을 잘해요"]},
  {n:"haa****",d:"5.2",h:0,b:"학생 이해력에 맞게 하나하나 자세히 설명해주셔서 좋아요!! 수능 대비뿐 아니라 학교별 내신 대비까지 꼼꼼히 챙겨주십니다☺️",k:["맞춤 지도를 잘해줘요","학생 관리가 철저해요"]},
  {n:"유섭****",d:"5.2",h:0,b:"내신부터 수능까지 다 챙겨주시고 정말 잘 가르쳐주셔서 좋아요!! 덕분에 성적이 많이 올랐습니다😀",k:["선생님이 열정적이에요","선생님 실력이 좋아요"]},
  {n:"jin****",d:"5.1",h:0,b:"선생님께서 재미있게 수업해주셔서 너무 좋아요🥰",k:["수업이 체계적이에요","자습하기 좋아요"]},
  {n:"os****",d:"5.1",h:0,b:"국어 푸는 방법을 잡아 성적을 올렸어요. 자료도 많이 주십니다! 1학년 이후로 못 받던 내신 1등급을, 오름 국어학원 다니고 높은 등수로 다시 받았어요!",k:["수업이 체계적이에요","선생님 실력이 좋아요"]},
  {n:"하니****",d:"4.24",h:1,b:"선생님들께서 열정적이고 체계적·구체적으로 잘 알려주십니다! 과천에서 거리가 먼데도 이동시간이 아깝지 않을 만큼 만족스러운 강의력. 국어 가뿐하게, 경쾌하게! 언제나 오름입니다",k:["맞춤 지도를 잘해줘요","시설이 깔끔해요"]}
];

// --- 여름특강 시간표 ---
// {d:요일, t:강사, subj:과목, s:시작, e:종료, wk:주차(선택), paid:유료단과(선택)}
window.SST_DATA = [
  {d:"월", t:"지연T", subj:"문학 심화",   s:"10:00", e:"13:30", paid:true, p:"7/20~8/10 · 4주"},
  {d:"월", t:"지연T", subj:"독해 쌩기초", s:"18:00", e:"21:30", paid:true, p:"7/20~8/10 · 4주"},
  {d:"수", t:"예담T", subj:"고전문학",   s:"10:00", e:"13:00", p:"7/15~8/12 · 4주"},
  {d:"수", t:"가경T", subj:"현대문법",   s:"10:00", e:"13:30", p:"7/22~8/12 · 4주"},
  {d:"수", t:"가경T", subj:"고전문법",   s:"14:00", e:"17:30", p:"7/22~8/12 · 4주"},
  {d:"수", t:"예담T", subj:"고전문법",   s:"18:00", e:"21:30", p:"8주"},
  {d:"목", t:"해솔T", subj:"문학개념어", s:"13:30", e:"16:30", p:"7주", mid:true},
  {d:"목", t:"해솔T", subj:"문학개념어", s:"17:00", e:"20:00", p:"7주", mid:true},
  {d:"금", t:"은규T", subj:"문학개념어", s:"10:00", e:"13:00", p:"7/17~8/7 · 4주"},
  {d:"금", t:"은규T", subj:"고전문학",   s:"14:00", e:"17:00", p:"7/17~8/7 · 4주"},
  {d:"금", t:"은규T", subj:"고전문학",   s:"18:00", e:"21:00", p:"7/17~8/7 · 4주"},
  {d:"토", t:"은규T", subj:"고전문법",   s:"10:00", e:"13:30", p:"7/11~8/29 · 8주"},
  {d:"토", t:"예담T", subj:"고전문법",   s:"10:00", e:"13:30", p:"7/11~8/29 · 8주"},
  {d:"토", t:"은규T", subj:"고전문법",   s:"14:00", e:"17:30", p:"7/11~8/29 · 8주"},
  {d:"토", t:"은규T", subj:"현대문법",   s:"18:00", e:"21:30", p:"7/11~8/29 · 8주"},
  {d:"일", t:"지연T", subj:"고전문학",   s:"10:00", e:"13:00", p:"7/12~8/16 · 6주"},
  {d:"일", t:"은규T", subj:"독해기초",   s:"10:00", e:"13:00", p:"7/12~8/16 · 6주"},
  {d:"일", t:"원철T", subj:"약술논술",   s:"13:00", e:"16:00", weekly:true, p:"매주 입반 · 상시 등록"},
  {d:"일", t:"은규T", subj:"독해심화",   s:"14:00", e:"17:00", p:"7/12~8/16 · 6주"},
  {d:"일", t:"지연T", subj:"현대문법",   s:"18:00", e:"21:30", p:"7/12~8/16 · 6주"}
];
// 요일별 기간·안내 (개강~종강, 헤더에 표시)
window.SST_PERIODS = {
  "월":"유료 단과 · 오름패스 별도 · 7/20~8/10 · 4주",
  "수":"수업별 기간 상이 · 카드 확인",
  "목":"중등부 · 7주",
  "금":"7/17~8/7 · 4주",
  "토":"7/11~8/29 · 8주",
  "일":"7/12~8/16 · 6주 · 약술 매주입반"
};

// --- 정규반 강좌 (학교별) ---
window.COURSES = [
  { school:"고3 정규반", grade:3, teacher:"가경 T", textbook:"평가원 기출 + EBS 교재 + 국어 콘텐츠 다수 활용", features:["수능 대비 커리큘럼 진행","내신 대비 별도 클리닉"], schedules:[{day:"금",time:"19:00 - 22:00",status:"open"},{day:"토",time:"09:00 - 12:00",status:"open"}] },
  { school:"군포고", grade:1, teacher:"은규 T", textbook:"공통국어 비상(박)", features:["학교 진도 맞춤 내신 대비","비내신 기간 문법 집중"], schedules:[{day:"토",time:"12:00 - 15:00",status:"open"},{day:"토",time:"14:00 - 17:00",status:"open"}] },
  { school:"군포중앙고", grade:1, teacher:"예담 T", textbook:"공통국어 비상(강)", features:["학교 진도 맞춤 내신 대비","비내신 기간 모의고사 집중"], schedules:[{day:"일",time:"10:00 - 13:00",status:"open"}] },
  { school:"산본고", grade:1, teacher:"은규 T", textbook:"공통국어 비상(박)", features:["학교 진도 맞춤 내신 대비","고난도 문법 집중 대비"], schedules:[{day:"목",time:"19:00 - 22:00",status:"open"},{day:"금",time:"19:00 - 22:00",status:"open"}] },
  { school:"산본고", grade:1, teacher:"예담 T", textbook:"공통국어 비상(박)", features:["학교 진도 맞춤 내신 대비","고난도 문법 집중 대비"], schedules:[{day:"토",time:"10:00 - 13:00",status:"open"},{day:"일",time:"18:00 - 21:00",status:"open"}] },
  { school:"수리고", grade:1, teacher:"지연 T", textbook:"공통국어 창비", features:["학교 진도 맞춤 내신 대비","비내신 기간 모의고사 집중"], schedules:[{day:"수",time:"17:00 - 20:00",status:"open"},{day:"일",time:"11:00 - 14:00",status:"open"}] },
  { school:"용호고", grade:1, teacher:"예담 T", textbook:"공통국어 미래엔", features:["학교 진도 맞춤 내신 대비","비내신 기간 모의고사 집중"], schedules:[{day:"일",time:"14:00 - 17:00",status:"open"}] },
  { school:"흥진고", grade:1, teacher:"은규 T", textbook:"공통국어 비상(강)", features:["학교 진도 맞춤 내신 대비","비내신 기간 모의고사 집중"], schedules:[{day:"토",time:"10:00 - 13:00",status:"open"}] },
  { school:"군포고", grade:2, teacher:"은규 T", textbook:"공통국어 지학사", features:["학교 진도 맞춤 내신 대비","비내신 기간 모의고사 집중"], schedules:[{day:"토",time:"17:00 - 20:00",status:"open"},{day:"일",time:"14:00 - 17:00",status:"open"}] },
  { school:"군포중앙고", grade:2, teacher:"은규 T", textbook:"문학/독서 비상(강)", features:["학교 진도 맞춤 내신 대비","비내신 기간 모의고사 집중"], schedules:[{day:"토",time:"19:00 - 22:00",status:"open"}] },
  { school:"산본고", grade:2, teacher:"은규 T", textbook:"문학/독서 학교 교과서", features:["학교 진도 맞춤 내신 대비","고전 문학 외부지문 대비"], schedules:[{day:"수",time:"17:00 - 20:00",status:"open"},{day:"일",time:"19:00 - 22:00",status:"open"}] },
  { school:"수리고", grade:2, teacher:"지연 T", textbook:"문학/독서 미래엔", features:["학교 진도 맞춤 내신 대비","수시와 정시 동시 대비"], schedules:[{day:"수",time:"19:00 - 22:00",status:"open"},{day:"일",time:"18:00 - 21:00",status:"open"}] },
  { school:"용호고", grade:2, teacher:"은규 T", textbook:"공통국어 비상(강)", features:["학교 진도 맞춤 내신 대비","비내신 기간 모의고사 집중"], schedules:[{day:"일",time:"12:00 - 15:00",status:"open"}] },
  { school:"흥진고", grade:2, teacher:"은규 T", textbook:"문학/독서 비상(강)", features:["학교 진도 맞춤 내신 대비","비내신 기간 모의고사 집중"], schedules:[{day:"일",time:"10:00 - 13:00",status:"open"}] },
  { school:"약술형 논술", grade:3, teacher:"양원철 T", textbook:"EBS 교재 + 약술형 논술 콘텐츠 다수 활용", features:["수시 전형 준비","약술형 논술 철벽 대비"], schedules:[{day:"일",time:"13:00 - 16:00",status:"open"}] },
  { school:"중2 정규반", grade:-2, teacher:"해솔 T", textbook:"중등 정규 과정 교재 + 학교별 교과서", features:["기본기부터 심화까지 학습","내신 대비 별도 클리닉"], schedules:[{day:"월",time:"17:00 - 20:00",status:"open"},{day:"토",time:"14:00 - 17:00",status:"open"}] },
  { school:"중3 정규반", grade:-3, teacher:"해솔 T", textbook:"중등 정규 과정 교재 + 학교별 교과서", features:["기본기부터 심화까지 학습","내신 대비 별도 클리닉"], schedules:[{day:"토",time:"10:00 - 13:00",status:"open"}] }
];

window.STATUS_MAP = { open:{text:"모집 중",cls:"status-open"}, closing:{text:"마감 임박",cls:"status-closing"}, closed:{text:"마감",cls:"status-closed"} };

/* ===== 공유 렌더 헬퍼 ===== */
window.OREUM = {
  // 상단 공지바 + nav + 테마토글 주입
  shell: function(active){
    var notice = document.getElementById('notice-bar');
    if(notice){
      var msg = '[오름] 국어 · 2026 1학기 정규반 접수 중 &nbsp;·&nbsp; 학교별 맞춤 내신 대비 &nbsp;·&nbsp; 2027학년도 6월 평가원 총평 공개';
      notice.innerHTML = '<div class="nb-inner"><span class="nb-ico"><span class="material-symbols-outlined text-[18px]">campaign</span></span>'
        + '<span class="nb-vp"><span class="nb-track">'+msg+' &nbsp;&nbsp;&nbsp;&nbsp; '+msg+'</span></span>'
        + '<button class="nb-close" aria-label="공지 닫기" onclick="document.getElementById(\'notice-bar\').remove()"><span class="material-symbols-outlined text-[18px]">close</span></button></div>';
    }
    // 테마 토글 버튼
    var nav=document.querySelector('nav'); if(nav){
      var kakao=nav.querySelector('a[href*="pf.kakao.com"]');
      var light=document.documentElement.classList.contains('light');
      var btn=document.createElement('button');btn.id='theme-toggle';btn.title='다크/라이트 전환';
      btn.className='h-10 w-10 rounded-lg border border-outline-variant text-on-surface-variant hover:text-secondary hover:border-secondary transition-colors flex items-center justify-center shrink-0';
      btn.innerHTML='<span class="material-symbols-outlined text-[20px]" id="theme-icon">'+(light?'dark_mode':'light_mode')+'</span>';
      btn.onclick=window.OREUM.toggleTheme;
      if(kakao&&kakao.parentElement){kakao.parentElement.insertBefore(btn,kakao);}else{nav.appendChild(btn);}
    }
    window.OREUM.regPopup();
  },
  regPopup: function(){
    if(document.getElementById('regPop'))return;
    var url=window.OREUM_FORM_URL||'http://pf.kakao.com/_ksxaCn/chat';
    var ov=document.createElement('div');ov.className='rp-ov';ov.id='regPop';
    ov.innerHTML='<div class="rp-card">'
      +'<button class="rp-close" aria-label="닫기" onclick="OREUM.closePop()"><span class="material-symbols-outlined text-[20px]">close</span></button>'
      +'<span class="rp-badge"><span class="material-symbols-outlined text-[15px]">wb_sunny</span>2026 여름방학 특강</span>'
      +'<div class="rp-h">지금 <b>사전등록</b>하고<br>우선 상담받으세요</div>'
      +'<div class="rp-sub">선착순 마감 · 사전등록하시면 학교·학년별 반 배정과 상담을 먼저 안내해 드립니다.</div>'
      +'<div class="rp-list">'
      +'<div class="rp-li"><span class="material-symbols-outlined">check_circle</span>학교·학년별 맞춤 반 우선 배정</div>'
      +'<div class="rp-li"><span class="material-symbols-outlined">check_circle</span>여름특강 시간표 · 상담 우선 안내</div>'
      +'<div class="rp-li"><span class="material-symbols-outlined">check_circle</span>1분이면 끝나는 간단 등록</div>'
      +'</div>'
      +'<a class="rp-cta" href="'+url+'" target="_blank" rel="noopener" onclick="OREUM.closePop()">사전등록 하러 가기 <span class="material-symbols-outlined text-[19px]">arrow_forward</span></a>'
      +'<button class="rp-later" onclick="OREUM.closePop()">다음에 볼게요</button>'
      +'</div>';
    ov.addEventListener('click',function(e){if(e.target===ov)window.OREUM.closePop();});
    document.body.appendChild(ov);
    try{if(sessionStorage.getItem('oreum-reg-pop'))return;}catch(e){}
    setTimeout(function(){ov.classList.add('show');},1000);
  },
  closePop: function(){var ov=document.getElementById('regPop');if(ov)ov.classList.remove('show');try{sessionStorage.setItem('oreum-reg-pop','1');}catch(e){}},
  toggleTheme: function(){var d=document.documentElement,light=d.classList.toggle('light');d.classList.toggle('dark',!light);try{localStorage.setItem('oreum-theme',light?'light':'dark');}catch(e){}var ic=document.getElementById('theme-icon');if(ic)ic.textContent=light?'dark_mode':'light_mode';var m=document.querySelector('meta[name=theme-color]');if(m)m.content=light?'#f6faf7':'#090d0b';},
  reveal: function(){
    var els=[].slice.call(document.querySelectorAll('.fi'));
    if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion:reduce)').matches){els.forEach(function(e){e.classList.add('v');});return;}
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('v');io.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px -4% 0px'});
    els.forEach(function(e){io.observe(e);});
    setTimeout(function(){els.forEach(function(e){if(!e.classList.contains('v'))e.classList.add('v');});},2200);
  },
  reviews: function(id){
    var track=document.getElementById(id); if(!track)return;
    function card(r){var c=document.createElement("div");c.className="rev-card";
      c.innerHTML='<div class="rtop"><span class="rnick">'+r.n+'</span>'+(r.h?'<span class="rheart">♥ 가경T</span>':'')+'<span class="rdate">'+r.d+'</span></div>'
        +'<div class="rbody">'+r.b+'</div><div class="rkw">'+r.k.map(function(x){return '<span>'+x+'</span>';}).join('')+'</div>';return c;}
    window.REVIEWS.forEach(function(r){track.appendChild(card(r));});
    window.REVIEWS.forEach(function(r){track.appendChild(card(r));});
  },
  youtube: function(id){
    var ids=["1s62A28kxVY","It2uv0BDeo0","Yh_aN69q4Q0","ZDsA-YnVXkI"];
    var play='<span class="yt-play"><svg viewBox="0 0 68 48" aria-hidden="true"><path d="M66.5 7.7a8 8 0 0 0-5.6-5.7C56 0 34 0 34 0S12 0 7.1 2a8 8 0 0 0-5.6 5.7A83 83 0 0 0 0 24a83 83 0 0 0 1.5 16.3 8 8 0 0 0 5.6 5.7C12 48 34 48 34 48s22 0 26.9-2a8 8 0 0 0 5.6-5.7A83 83 0 0 0 68 24a83 83 0 0 0-1.5-16.3z" fill="#f00"/><path d="M27 34l18-10-18-10z" fill="#fff"/></svg></span>';
    var g=document.getElementById(id); if(!g)return;
    ids.forEach(function(vid,i){var c=document.createElement("div");c.className="yt-card";
      c.innerHTML='<img src="https://i.ytimg.com/vi/'+vid+'/maxresdefault.jpg" onerror="this.onerror=null;this.src=\'https://i.ytimg.com/vi/'+vid+'/hqdefault.jpg\'" loading="lazy" alt="오름 국어 영상 '+(i+1)+'">'+play;
      c.addEventListener("click",function(){c.innerHTML='<iframe src="https://www.youtube.com/embed/'+vid+'?autoplay=1&rel=0" title="오름 국어 영상" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>';});
      g.appendChild(c);});
  },
  summer: function(gridId){
    var data=window.SST_DATA, periods=window.SST_PERIODS||{};
    var toMin=function(t){var p=t.split(":");return (+p[0])*60+(+p[1]);};
    var fmtT=function(s,e){return ((toMin(e)-toMin(s))/60)+"T";};
    var whenLabel=function(p){
      if(!p)return "개강일 문의";
      if(p.indexOf("~")>-1){var seg=p.split("·").map(function(x){return x.trim();});var rg=seg[0].split("~");var extra=seg.slice(1).join(" · ");return "개강 <b>"+rg[0]+"</b> · 종강 <b>"+rg[1]+"</b>"+(extra?"<br>"+extra:"");}
      return p;
    };
    var cal='<svg class="si-cal" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>';
    var days=["월","수","목","금","토","일"]; var grid=document.getElementById(gridId); if(!grid)return;
    grid.classList.add("si-grid");
    days.forEach(function(day){
      var items=data.filter(function(d){return d.d===day;}).sort(function(a,b){return toMin(a.s)-toMin(b.s);});
      if(!items.length)return;
      var wknd=(day==="토"||day==="일");
      var head='<div class="si-dh'+(wknd?" wknd":"")+'"><span class="si-dname">'+day+'요일</span><span class="si-dcnt">'+items.length+'</span></div>';
      var per=periods[day]?'<div class="si-period">'+periods[day]+'</div>':'';
      var slots=[], idx={};
      items.forEach(function(d){var key=d.s+"–"+d.e;if(idx[key]===undefined){idx[key]=slots.length;slots.push({s:d.s,e:d.e,list:[]});}slots[idx[key]].list.push(d);});
      var bodyHtml=slots.map(function(sl){
        var blocks=sl.list.map(function(d){
          var badges='';
          if(d.mid)badges+='<span class="si-badge si-mid">중등</span>';
          if(d.paid)badges+='<span class="si-badge si-paid">유료 단과</span>';
          if(d.weekly)badges+='<span class="si-badge si-weekly">매주 입반</span>';
          return '<div class="si-block" tabindex="0">'+cal
            +'<div class="si-subj">'+d.subj+'<span class="si-t">'+fmtT(sl.s,sl.e)+'</span></div>'
            +'<div class="si-tch">'+d.t+badges+'</div>'
            +'<div class="si-when">'+whenLabel(d.p)+'</div>'
            +'</div>';
        }).join("");
        return '<div class="si-slot"><div class="si-time">'+sl.s+'–'+sl.e+'</div><div class="si-blocks">'+blocks+'</div></div>';
      }).join("");
      grid.insertAdjacentHTML('beforeend','<div class="si-day">'+head+per+bodyHtml+'</div>');
    });
    grid.addEventListener("click",function(e){var b=e.target.closest(".si-block");var open=b&&b.classList.contains("show");grid.querySelectorAll(".si-block.show").forEach(function(x){x.classList.remove("show");});if(b&&!open)b.classList.add("show");});
  },
  courseCard: function(c){
    var st=window.STATUS_MAP;
    var gradeLabel=c.grade<0?'':c.grade===3?'':c.grade+'학년';
    var gradeBadge=gradeLabel?'<span class="card-grade">'+gradeLabel+'</span>':'';
    return '<div class="course-card crd-hover"><div class="card-main">'
      +'<div class="card-header"><div style="display:flex;align-items:center;gap:10px"><span class="card-school-name">'+c.school+'</span>'+gradeBadge+'</div></div>'
      +'<div class="card-meta">'
      +'<div class="card-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>'+c.teacher+'</div>'
      +'<div class="card-meta-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'+c.textbook+'</div></div>'
      +'<div class="card-features"><span class="feature-tag naesin">'+c.features[0]+'</span><span class="feature-tag focus">'+c.features[1]+'</span></div>'
      +'<div class="card-schedules">'+c.schedules.map(function(s){return '<div class="schedule-chip'+(s.status==='closed'?' chip-closed':'')+'"><span class="schedule-day">'+s.day+'</span><span class="schedule-time">'+s.time+'</span><span class="status-badge '+st[s.status].cls+'">'+st[s.status].text+'</span></div>';}).join("")+'</div>'
      +'</div></div>';
  }
};
