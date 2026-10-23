/* [오름] 국어 — 2026 2학기 중간고사 성과 팝업 (프레지식 자동 재생, 학부모 가독 중심)
   - 홈 진입 시 세션당 1회, 원고지 인트로가 끝난 뒤 자동 재생
   - 장당 5초 안팎의 느긋한 진행, 마지막 장은 머무름(닫기 전까지)
   - 학교명을 대제목으로, 초대형 카운트업 숫자 + 도장·막대·기둥 모션 그래픽
   - 클릭 = 다음 장, X·건너뛰기·배경 = 닫기
   - ?sgpop=0 항상 전체 재생, ?sgpop=N N번 장면 정지(시안용) */
(function () {
  var qs = location.search;
  var forceM = qs.match(/[?&]sgpop=(\d+)/);
  var force = !!forceM;
  var holdAt = forceM ? parseInt(forceM[1], 10) : 0;
  try {
    if (!force && sessionStorage.getItem('oreumSgPopSeen')) return;
  } catch (e) {}

  var CAMW = 780, CAMH = 560;
  var SLIDES = [
    { x: 0, y: 0, r: 0, dk: 0, dur: 3000, html:
      '<div class="sg-eyebrow">[ 2026 2학기 중간고사 ]</div>' +
      '<div class="sg-big">결과로<br>말씀드립니다</div>' +
      '<div class="sg-sub">군포 산본 6개교, 오름 재원생의 이번 시험 성적입니다</div>' },
    { x: 1150, y: -380, r: 6, dk: 1, dur: 5200, html:
      '<div class="sg-school">군포고 국어</div>' +
      '<div class="sg-numrow"><span class="sg-num"><span data-count="100" data-dec="0">100</span>점</span>' +
      '<span class="sg-stamp">전교<br>유일</span></div>' +
      '<div class="sg-pair"><span>1학년 전교 단 1명</span><span>2학년 전교 단 1명</span></div>' +
      '<div class="sg-sub"><b>그 두 명이 모두 오름 재원생입니다</b></div>' },
    { x: 2100, y: 420, r: -7, dk: 0, dur: 5200, html:
      '<div class="sg-school">산본고 1학년</div>' +
      '<div class="sg-num sm"><span data-count="22.5" data-dec="1">22.5</span>%가 1등급</div>' +
      '<div class="sg-bars">' +
      '<div class="sg-brow"><span class="sg-blab">보통 1등급 비율</span><span class="sg-btrack"><i class="b1"></i></span><span class="sg-bval">10%</span></div>' +
      '<div class="sg-brow"><span class="sg-blab">오름 재원생</span><span class="sg-btrack"><i class="b2"></i></span><span class="sg-bval hl">22.5%</span></div>' +
      '</div>' +
      '<div class="sg-sub"><b>네 명 중 한 명꼴로 1등급입니다</b></div>' },
    { x: 950, y: 1250, r: 5, dk: 1, dur: 5200, html:
      '<div class="sg-school">수리고 1학년</div>' +
      '<div class="sg-num sm"><em>+<span data-count="53.4" data-dec="1">53.4</span>점</em> 상승</div>' +
      '<div class="sg-cols"><div class="sg-col"><i class="c1"></i><b>22.5점</b><span>지난 시험</span></div>' +
      '<div class="sg-arrow">→</div>' +
      '<div class="sg-col"><i class="c2"></i><b>75.9점</b><span>이번 시험</span></div></div>' +
      '<div class="sg-sub">42.8점 상승, 20~30점 상승 학생도 여럿입니다</div>' },
    { x: -320, y: 900, r: -5, dk: 0, dur: 0, html:
      '<div class="sg-eyebrow">[ 다음 시험 ]</div>' +
      '<div class="sg-big mid">다음 주인공은<br>지금 시작하는 학생입니다</div>' +
      '<div class="sg-btns"><a href="courses.html" class="sg-btn sg-btn-main">강좌 보기</a>' +
      '<a href="#contact" class="sg-btn" data-sg-close>상담 문의</a></div>' }
  ];

  var css = [
    '.sg-ov{position:fixed;inset:0;z-index:9990;background:rgb(8 20 13/.58);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:12px;opacity:0;transition:opacity .4s;}',
    '.sg-ov.on{opacity:1;}',
    '.sg-card{position:relative;width:min(96vw,760px);height:min(84vh,580px);background:#eef5f0;border:1px solid rgb(var(--c-secondary)/.35);border-radius:24px;overflow:hidden;box-shadow:0 46px 110px rgb(5 16 10/.5);}',
    '.sg-cam{position:absolute;inset:0;}',
    '.sg-stage{position:absolute;left:0;top:0;width:0;height:0;transition:transform 1.05s cubic-bezier(.7,.02,.22,1);will-change:transform;}',
    '.sg-floor{position:absolute;left:-2200px;top:-2000px;width:6600px;height:5800px;' +
      'background-image:linear-gradient(rgb(var(--c-secondary)/.13) 2px,transparent 2px),linear-gradient(90deg,rgb(var(--c-secondary)/.13) 2px,transparent 2px);' +
      'background-size:110px 110px;}',
    '.sg-slide{position:absolute;width:' + CAMW + 'px;height:' + CAMH + 'px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:16px;padding:0 46px;box-sizing:border-box;' +
      'background:#ffffff;border:2px solid rgb(var(--c-secondary)/.4);border-radius:30px;box-shadow:0 30px 70px rgb(10 30 18/.16);font-family:"Hahmlet","Noto Serif KR",serif;}',
    '.sg-slide.dk{background:linear-gradient(170deg,#123524,#0c2418);border-color:rgb(var(--c-secondary)/.6);}',
    '.sg-slide.dk .sg-big,.sg-slide.dk .sg-num,.sg-slide.dk .sg-school{color:#f2f8f3;}',
    '.sg-slide.dk .sg-school{border-color:#7deeb2aa;}',
    '.sg-slide.dk .sg-sub{color:#b9cfc0;}',
    '.sg-slide.dk .sg-sub b{color:#ffffff;}',
    '.sg-slide.dk .sg-num em,.sg-slide.dk .sg-num [data-count]{color:#7deeb2;}',
    '.sg-eyebrow{font-size:20px;font-weight:700;letter-spacing:.04em;color:rgb(var(--c-secondary));}',
    '.sg-school{font-size:44px;font-weight:900;color:#152a1e;letter-spacing:-.01em;border-bottom:4px solid rgb(var(--c-secondary)/.6);padding-bottom:8px;}',
    '.sg-big{font-size:58px;font-weight:700;line-height:1.26;color:#152a1e;}',
    '.sg-big.mid{font-size:44px;}',
    '.sg-numrow{display:flex;align-items:center;gap:26px;}',
    '.sg-num{font-size:118px;font-weight:900;line-height:1.05;color:#152a1e;}',
    '.sg-num.sm{font-size:70px;}',
    '.sg-num [data-count]{color:rgb(var(--c-secondary));}',
    '.sg-num em{font-style:normal;color:rgb(var(--c-secondary));}',
    '.sg-stamp{display:flex;align-items:center;justify-content:center;width:112px;height:112px;border-radius:50%;' +
      'border:5px double #e4b24c;color:#e4b24c;font-size:27px;font-weight:900;line-height:1.15;transform:rotate(-14deg);}',
    '.sg-slide.on .sg-stamp{animation:sgStamp .45s cubic-bezier(.2,1,.4,1) .9s both;}',
    '@keyframes sgStamp{from{opacity:0;transform:rotate(-14deg) scale(2.4)}to{opacity:1;transform:rotate(-14deg) scale(1)}}',
    '.sg-pair{display:flex;gap:14px;font-family:"Noto Sans KR",sans-serif;}',
    '.sg-pair span{font-size:20px;font-weight:700;color:#dff5e8;background:rgb(255 255 255/.1);border:1px solid rgb(255 255 255/.22);padding:9px 20px;border-radius:12px;}',
    '.sg-sub{font-size:24px;line-height:1.55;color:#4a5e52;font-family:"Noto Sans KR",sans-serif;}',
    '.sg-sub b{color:#152a1e;font-weight:700;}',
    '.sg-bars{width:100%;display:flex;flex-direction:column;gap:13px;font-family:"Noto Sans KR",sans-serif;margin:4px 0;}',
    '.sg-brow{display:grid;grid-template-columns:150px 1fr 76px;align-items:center;gap:12px;}',
    '.sg-blab{font-size:19px;font-weight:600;color:#4a5e52;text-align:right;}',
    '.sg-btrack{display:block;height:30px;background:rgb(var(--c-secondary)/.12);border-radius:8px;overflow:hidden;}',
    '.sg-btrack i{display:block;height:100%;width:0;border-radius:8px;transition:width 1.1s cubic-bezier(.3,.9,.3,1) .8s;}',
    '.sg-btrack .b1{background:#b9cfc0;}',
    '.sg-btrack .b2{background:rgb(var(--c-secondary));transition-delay:1.15s;}',
    '.sg-slide.on .b1{width:36%;}',
    '.sg-slide.on .b2{width:81%;}',
    '.sg-bval{font-size:21px;font-weight:800;color:#4a5e52;text-align:left;}',
    '.sg-bval.hl{color:rgb(var(--c-secondary));}',
    '.sg-cols{display:flex;align-items:flex-end;gap:26px;height:170px;font-family:"Noto Sans KR",sans-serif;}',
    '.sg-col{display:flex;flex-direction:column;align-items:center;gap:6px;justify-content:flex-end;height:100%;}',
    '.sg-col i{display:block;width:92px;border-radius:10px 10px 4px 4px;height:0;transition:height 1s cubic-bezier(.3,.9,.3,1) .8s;}',
    '.sg-col .c1{background:#46604f;}',
    '.sg-col .c2{background:#7deeb2;transition-delay:1.15s;}',
    '.sg-slide.on .c1{height:34px;}',
    '.sg-slide.on .c2{height:118px;}',
    '.sg-col b{font-size:22px;color:#f2f8f3;}',
    '.sg-col span{font-size:16px;color:#b9cfc0;}',
    '.sg-arrow{font-size:44px;color:#7deeb2;padding-bottom:58px;}',
    '.sg-btns{display:flex;gap:14px;margin-top:8px;}',
    '.sg-btn{font-size:24px;font-weight:700;padding:17px 38px;border-radius:15px;border:2px solid rgb(var(--c-secondary)/.5);color:rgb(var(--c-secondary));text-decoration:none;background:#fff;font-family:"Noto Sans KR",sans-serif;}',
    '.sg-btn-main{background:rgb(var(--c-secondary));color:#fff;border-color:rgb(var(--c-secondary));}',
    '.sg-slide>*{opacity:0;transform:translateY(24px);}',
    '.sg-slide.on>*{animation:sgIn .55s cubic-bezier(.22,1,.36,1) both;}',
    '.sg-slide.on>*:nth-child(1){animation-delay:.1s}.sg-slide.on>*:nth-child(2){animation-delay:.3s}',
    '.sg-slide.on>*:nth-child(3){animation-delay:.55s}.sg-slide.on>*:nth-child(4){animation-delay:.8s}',
    '.sg-slide.on>*:nth-child(5){animation-delay:1s}',
    '@keyframes sgIn{from{opacity:0;transform:translateY(24px) scale(.97)}to{opacity:1;transform:none}}',
    '.sg-x{position:absolute;top:12px;right:12px;z-index:5;width:40px;height:40px;border-radius:50%;border:1px solid rgb(255 255 255/.4);background:rgb(10 26 16/.35);color:#fff;font-size:17px;cursor:pointer;line-height:1;backdrop-filter:blur(2px);}',
    '.sg-skip{position:absolute;left:14px;bottom:12px;z-index:5;font-size:13px;color:#52695c;background:rgb(255 255 255/.75);border:none;border-radius:99px;cursor:pointer;padding:6px 13px;}',
    '.sg-bar{position:absolute;left:0;right:0;bottom:0;height:5px;z-index:5;background:rgb(var(--c-secondary)/.15);}',
    '.sg-bar i{display:block;height:100%;width:0;background:rgb(var(--c-secondary));}',
    '.sg-dots{position:absolute;right:16px;bottom:14px;display:flex;gap:7px;z-index:5;}',
    '.sg-dot{width:8px;height:8px;border-radius:50%;background:rgb(var(--c-secondary)/.25);transition:all .3s;}',
    '.sg-dot.on{background:rgb(var(--c-secondary));width:22px;border-radius:99px;}',
    '@media(max-width:560px){.sg-card{height:min(76vh,520px);border-radius:18px;}}'
  ].join('');

  function start() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var ov = document.createElement('div'); ov.className = 'sg-ov';
    ov.innerHTML = '<div class="sg-card"><div class="sg-cam"><div class="sg-stage"><div class="sg-floor"></div></div></div>' +
      '<button class="sg-x" aria-label="닫기">✕</button>' +
      '<div class="sg-dots"></div><button class="sg-skip">건너뛰기</button>' +
      '<div class="sg-bar"><i></i></div></div>';
    var stage = ov.querySelector('.sg-stage');
    var dots = ov.querySelector('.sg-dots');
    var bar = ov.querySelector('.sg-bar i');
    var els = [];
    SLIDES.forEach(function (s) {
      var d = document.createElement('div');
      d.className = 'sg-slide' + (s.dk ? ' dk' : '');
      d.style.left = s.x + 'px'; d.style.top = s.y + 'px';
      d.style.transform = 'rotate(' + s.r + 'deg)';
      d.innerHTML = s.html;
      stage.appendChild(d); els.push(d);
      var dot = document.createElement('span'); dot.className = 'sg-dot'; dots.appendChild(dot);
    });
    document.body.appendChild(ov);
    try { if (!force) sessionStorage.setItem('oreumSgPopSeen', '1'); } catch (e) {}

    var card = ov.querySelector('.sg-card');
    var idx = -1, timer = null, done = false, barRaf = null;

    function countUp(slide) {
      [].forEach.call(slide.querySelectorAll('[data-count]'), function (el) {
        var target = parseFloat(el.getAttribute('data-count'));
        var dec = parseInt(el.getAttribute('data-dec') || '0', 10);
        var t0 = performance.now(), D = 1100;
        cancelAnimationFrame(el.__raf);
        (function tick(now) {
          var p = Math.min(1, (now - t0) / D);
          var e = 1 - Math.pow(1 - p, 3);
          el.textContent = (target * e).toFixed(dec);
          if (p < 1) el.__raf = requestAnimationFrame(tick);
        })(t0);
      });
    }
    function camTo(i, instant) {
      var s = SLIDES[i];
      var cw = card.clientWidth, ch = card.clientHeight;
      var sc = Math.min(cw / CAMW, ch / CAMH) * 1.02;
      var cx = s.x + CAMW / 2, cy = s.y + CAMH / 2;
      if (instant) stage.style.transition = 'none';
      stage.style.transform =
        'translate(' + cw / 2 + 'px,' + ch / 2 + 'px) scale(' + sc + ') rotate(' + (-s.r) + 'deg) translate(' + (-cx) + 'px,' + (-cy) + 'px)';
      if (instant) { void stage.offsetWidth; stage.style.transition = ''; }
      [].forEach.call(dots.children, function (d, k) { d.className = 'sg-dot' + (k === i ? ' on' : ''); });
    }
    function runBar(ms) {
      cancelAnimationFrame(barRaf);
      if (!ms) { bar.style.width = '100%'; return; }
      var t0 = performance.now();
      (function tick(now) {
        var p = Math.min(1, (now - t0) / ms);
        bar.style.width = (p * 100) + '%';
        if (p < 1 && !done) barRaf = requestAnimationFrame(tick);
      })(t0);
    }
    function go(i, instant) {
      if (done) return;
      if (i >= SLIDES.length) { close(); return; }
      if (idx >= 0) els[idx].classList.remove('on');
      idx = i; camTo(i, instant);
      var delay = instant ? 60 : 460;
      setTimeout(function () {
        if (done || idx !== i) return;
        els[i].classList.add('on');
        if (!holdAt) countUp(els[i]);
      }, delay);
      clearTimeout(timer);
      var ms = SLIDES[i].dur;
      runBar(ms);
      if (!holdAt && ms) timer = setTimeout(function () { go(idx + 1); }, ms);
    }
    function close() {
      if (done) return; done = true;
      clearTimeout(timer); cancelAnimationFrame(barRaf);
      ov.style.opacity = '0';
      setTimeout(function () { ov.remove(); st.remove(); }, 420);
    }
    ov.querySelector('.sg-x').addEventListener('click', close);
    ov.querySelector('.sg-skip').addEventListener('click', close);
    ov.addEventListener('click', function (e) {
      if (e.target.closest('[data-sg-close]')) { close(); return; }
      if (e.target.closest('a,button')) return;
      if (e.target === ov) { close(); return; }
      if (idx === SLIDES.length - 1) return;
      go(idx + 1);
    });
    window.addEventListener('resize', function () { if (!done && idx >= 0) camTo(idx, true); });

    if (holdAt) {
      var dbg = document.createElement('style');
      dbg.textContent = '.sg-ov{transition:none;opacity:1}.sg-slide>*{opacity:1!important;transform:none!important;animation:none!important}' +
        '.sg-slide .sg-stamp{animation:none!important;opacity:1!important;transform:rotate(-14deg)!important}' +
        '.sg-slide.on .b1{transition:none;width:36%}.sg-slide.on .b2{transition:none;width:81%}' +
        '.sg-slide.on .c1{transition:none;height:34px}.sg-slide.on .c2{transition:none;height:118px}';
      document.head.appendChild(dbg);
      [].forEach.call(ov.querySelectorAll('[data-count]'), function (el) {
        el.textContent = parseFloat(el.getAttribute('data-count')).toFixed(parseInt(el.getAttribute('data-dec') || '0', 10));
      });
    }
    camTo(0, true);
    requestAnimationFrame(function () { ov.classList.add('on'); });
    if (holdAt) { go(Math.min(holdAt, SLIDES.length) - 1, holdAt === 1); }
    else { setTimeout(function () { go(0, true); }, 150); }
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
