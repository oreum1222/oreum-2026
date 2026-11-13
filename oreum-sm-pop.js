/* [오름] 국어 — 겨울 강의 찾기 안내 팝업 (예비 고2)
   - 홈 진입 시 하루 한 번, 원고지 인트로가 끝난 뒤 표시 (localStorage finderpop_2027w)
   - 이 팝업이 뜨는 날은 성과 팝업이 양보한다
   - ?smpop=1 이면 항상 표시(검수용) */
(function () {
  var force = /[?&]smpop=1/.test(location.search);
  var LS_KEY = 'finderpop_2027w';
  var today = new Date().toISOString().slice(0, 10);
  try {
    if (!force && localStorage.getItem(LS_KEY) === today) return;
    sessionStorage.setItem('oreumSmPopActive', '1'); // 성과 팝업 양보 신호
  } catch (e) {}

  var css = [
    '.sm-ov{position:fixed;inset:0;z-index:9991;background:rgb(8 20 13/.58);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:14px;opacity:0;transition:opacity .4s;}',
    '.sm-ov.on{opacity:1;}',
    '.sm-card{position:relative;width:min(94vw,500px);background:linear-gradient(180deg,#f3faf5,#ffffff 45%);border:1px solid rgb(var(--c-secondary)/.35);border-radius:24px;overflow:hidden;box-shadow:0 46px 110px rgb(5 16 10/.5);padding:40px 34px 30px;text-align:center;font-family:"Hahmlet","Noto Serif KR",serif;}',
    '.sm-card::before{content:"";position:absolute;left:0;right:0;top:0;height:7px;background:rgb(var(--c-secondary));}',
    '.sm-ev{font-size:16px;font-weight:700;letter-spacing:.04em;color:rgb(var(--c-secondary));}',
    '.sm-title{font-size:30px;font-weight:700;color:#152a1e;line-height:1.4;margin-top:14px;}',
    '.sm-title em{font-style:normal;color:rgb(var(--c-secondary));}',
    '.sm-sub{margin-top:14px;font-size:15.5px;color:#4a5e52;line-height:1.7;font-family:"Noto Sans KR",sans-serif;}',
    '.sm-steps{display:flex;justify-content:center;gap:8px;margin-top:18px;font-family:"Noto Sans KR",sans-serif;flex-wrap:wrap;}',
    '.sm-steps span{font-size:13.5px;font-weight:700;color:#2c5141;background:rgb(var(--c-secondary)/.1);border:1px solid rgb(var(--c-secondary)/.28);padding:7px 13px;border-radius:999px;}',
    '.sm-btns{display:flex;gap:10px;margin-top:22px;}',
    '.sm-btn{flex:1;font-size:16.5px;font-weight:700;padding:15px 10px;border-radius:13px;text-decoration:none;font-family:"Noto Sans KR",sans-serif;border:1.5px solid rgb(var(--c-secondary)/.45);color:rgb(var(--c-secondary));background:#fff;cursor:pointer;}',
    '.sm-btn-main{background:rgb(var(--c-secondary));color:#fff;border-color:rgb(var(--c-secondary));animation:smPulse 2.1s ease-out infinite;}',
    '@keyframes smPulse{0%{box-shadow:0 0 0 0 rgb(var(--c-secondary)/.45)}70%{box-shadow:0 0 0 14px rgb(var(--c-secondary)/0)}100%{box-shadow:0 0 0 0 rgb(var(--c-secondary)/0)}}',
    '.sm-today{margin-top:12px;background:none;border:none;font-size:12.5px;color:#8a9c90;cursor:pointer;font-family:"Noto Sans KR",sans-serif;padding:4px;}',
    '.sm-x{position:absolute;top:14px;right:14px;width:36px;height:36px;border-radius:50%;border:1px solid rgb(var(--c-secondary)/.3);background:#fff;color:#4a5e52;font-size:15px;cursor:pointer;line-height:1;}',
    '.sm-card>*{opacity:0;transform:translateY(18px);}',
    '.sm-card.on>*{animation:smIn .5s cubic-bezier(.22,1,.36,1) both;}',
    '.sm-card.on>*:nth-child(2){animation-delay:.08s}.sm-card.on>*:nth-child(3){animation-delay:.18s}',
    '.sm-card.on>*:nth-child(4){animation-delay:.28s}.sm-card.on>*:nth-child(5){animation-delay:.38s}',
    '.sm-card.on>*:nth-child(6){animation-delay:.48s}.sm-card.on>*:nth-child(7){animation-delay:.56s}',
    '@keyframes smIn{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}',
    '@media(prefers-reduced-motion:reduce){.sm-card>*{opacity:1;transform:none;animation:none!important}.sm-btn-main{animation:none;}}'
  ].join('');

  function remember() {
    try { localStorage.setItem(LS_KEY, today); } catch (e) {}
  }
  function track(n) { if (window.gtag) window.gtag('event', n); }

  function start() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var ov = document.createElement('div'); ov.className = 'sm-ov';
    ov.innerHTML = '<div class="sm-card">' +
      '<button class="sm-x" aria-label="닫기">✕</button>' +
      '<div class="sm-ev">[ 예비 고2 학부모님께 ]</div>' +
      '<div class="sm-title">우리 아이에게 필요한<br><em>겨울 강의</em>, 1분이면<br>찾을 수 있습니다</div>' +
      '<div class="sm-sub">간단한 질문을 하나씩 따라 내려오시면<br>겨울에 무엇을 준비하면 좋을지 나옵니다.</div>' +
      '<div class="sm-steps"><span>수능 준비</span><span>1학기 과목</span><span>개념 점검</span></div>' +
      '<div class="sm-btns"><a class="sm-btn sm-btn-main" href="finder.html" data-sm-go>강의 찾기 시작 →</a>' +
      '<button class="sm-btn" data-sm-close>다음에 볼게요</button></div>' +
      '<button class="sm-today" data-sm-today>오늘 하루 그만 보기</button>' +
      '</div>';
    document.body.appendChild(ov);
    track('finderpop_open');
    var card = ov.querySelector('.sm-card');
    function close() {
      ov.style.opacity = '0';
      setTimeout(function () { ov.remove(); st.remove(); }, 420);
    }
    ov.querySelector('.sm-x').addEventListener('click', close);
    ov.addEventListener('click', function (e) {
      if (e.target.closest('[data-sm-go]')) { remember(); track('finderpop_go'); return; }
      if (e.target.closest('[data-sm-today]')) { remember(); track('finderpop_dismiss'); close(); return; }
      if (e.target.closest('[data-sm-close]')) { close(); return; }
      if (e.target === ov) close();
    });
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });
    requestAnimationFrame(function () {
      ov.classList.add('on');
      setTimeout(function () { card.classList.add('on'); }, 120);
    });
    if (force) card.classList.add('on');
  }

  function waitIntro() {
    var oi = document.getElementById('oi');
    if (!oi) { setTimeout(start, 500); return; }
    var iv = setInterval(function () {
      if (!document.getElementById('oi')) { clearInterval(iv); setTimeout(start, 400); }
    }, 300);
  }
  function boot() {
    if (force) { var oi = document.getElementById('oi'); if (oi) oi.remove(); start(); return; }
    waitIntro();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
