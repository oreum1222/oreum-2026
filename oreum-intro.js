/* [오름] 국어 첫 화면 원고지 인트로
   원고지 칸이 그려짐 → "성적이 오름, 자신감이 오름 / 방법의 옳음, 선택의 옳음" → [오름] 국어 → 홈으로
   - 세션당 1회(같은 탭에서 다시 안 뜸), 주소에 ?intro=1 이면 항상 재생
   - 클릭·탭·아무 키나 누르면 건너뜀, 움직임 줄이기 설정이면 재생 안 함 */
(function () {
  var force = /[?&]intro=1/.test(location.search);
  try {
    if (!force && sessionStorage.getItem('oreumIntroSeen')) return;
    if (!force && window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    sessionStorage.setItem('oreumIntroSeen', '1');
  } catch (e) {}

  var css = [
    '#oi{position:fixed;inset:0;z-index:9999;background:rgb(var(--c-background));display:flex;flex-direction:column;align-items:center;justify-content:center;transition:transform .7s cubic-bezier(.7,0,.2,1),opacity .7s;font-family:"Noto Serif KR",serif;}',
    '#oi.out{transform:translateY(-100%);}',
    '#oi .glow{position:absolute;width:70vmax;height:70vmax;border-radius:50%;background:radial-gradient(circle,rgb(var(--c-secondary)/.10),transparent 65%);pointer-events:none;}',
    '#oi .sheet{display:grid;gap:0;row-gap:var(--rg);transition:opacity .4s;position:relative;}',
    '#oi .row{display:grid;grid-template-columns:repeat(var(--cols),var(--cs));position:relative;}',
    '#oi .row::before,#oi .row::after{content:"";position:absolute;left:0;right:0;height:1px;background:rgb(var(--c-secondary)/.55);transform:scaleX(0);transform-origin:left;transition:transform .7s cubic-bezier(.6,0,.2,1);}',
    '#oi .row::before{top:0}#oi .row::after{bottom:0}',
    '#oi.drawn .row::before,#oi.drawn .row::after{transform:scaleX(1);}',
    '#oi .c{width:var(--cs);height:var(--cs);border-left:1px solid rgb(var(--c-secondary)/.35);display:flex;align-items:center;justify-content:center;font-size:calc(var(--cs)*.56);font-weight:700;color:rgb(var(--c-on-surface));opacity:0;transform:scaleY(.2);transition:opacity .35s,transform .35s;}',
    '#oi .c:last-child{border-right:1px solid rgb(var(--c-secondary)/.35);}',
    '#oi.drawn .c{opacity:1;transform:none;}',
    '#oi .c span{display:inline-block;line-height:1;}',
    '#oi .c.pop span{animation:oiPop .32s ease-out;}',
    '#oi .c.hl{background:rgb(var(--c-secondary)/.14);color:rgb(var(--c-secondary));}',
    '#oi .c.scr{color:rgb(var(--c-secondary)/.6);}',
    '@keyframes oiPop{0%{transform:scale(1.6);opacity:0}60%{transform:scale(.92);opacity:1}100%{transform:scale(1)}}',
    '#oi .logo{position:absolute;font-size:clamp(34px,7vw,64px);font-weight:700;color:rgb(var(--c-on-surface));opacity:0;transform:translateY(12px);transition:opacity .5s,transform .5s;letter-spacing:-.01em;}',
    '#oi .logo em{font-style:normal;color:rgb(var(--c-secondary));}',
    '#oi .logo small{display:block;text-align:center;font-family:"Noto Sans KR",sans-serif;font-weight:500;font-size:clamp(12px,1.6vw,15px);color:rgb(var(--c-on-surface-variant));margin-top:12px;letter-spacing:.2em;}',
    '#oi.logo-on .logo{opacity:1;transform:none;}',
    '#oi .skip{position:absolute;right:20px;bottom:calc(20px + env(safe-area-inset-bottom,0px));font-family:"Noto Sans KR",sans-serif;font-size:13px;color:rgb(var(--c-on-surface-variant));background:transparent;border:1px solid rgb(var(--c-outline-variant));border-radius:999px;padding:7px 14px;cursor:pointer;}',
    '#oi .skip:hover{color:rgb(var(--c-secondary));border-color:rgb(var(--c-secondary)/.5);}'
  ].join('');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var wide = window.innerWidth >= 720;
  var COLS = wide ? 16 : 8;
  var LINES = wide
    ? ['성적이 오름, 자신감이 오름', '방법의 옳음, 선택의 옳음']
    : ['성적이 오름,', '자신감이 오름', '방법의 옳음,', '선택의 옳음'];
  var ROWS = wide ? 4 : 6;
  var START = wide ? 1 : 1;              // 문구 첫 줄이 들어갈 행
  var WORD_ROW = wide ? 1 : 2;           // 독서·문학… 들어갈 행
  var cs = Math.floor(Math.min(wide ? 54 : 46, (window.innerWidth - 40) / COLS));

  var root = document.createElement('div');
  root.id = 'oi';
  root.setAttribute('aria-hidden', 'true');
  root.style.setProperty('--cols', COLS);
  root.style.setProperty('--cs', cs + 'px');
  root.style.setProperty('--rg', Math.round(cs * 0.28) + 'px');
  root.innerHTML = '<div class="glow"></div><div class="sheet"></div>' +
    '<div class="logo"><em>[오름]</em> 국어<small>군포 산본 국어 전문</small></div>' +
    '<button class="skip" type="button">건너뛰기</button>';
  var sheet = root.querySelector('.sheet');
  var grid = [];
  for (var r = 0; r < ROWS; r++) {
    var row = document.createElement('div'); row.className = 'row'; grid.push([]);
    for (var c = 0; c < COLS; c++) {
      var cell = document.createElement('div'); cell.className = 'c';
      cell.style.transitionDelay = ((r * 70) + (c * 28)) + 'ms';
      cell.innerHTML = '<span></span>';
      row.appendChild(cell); grid[r].push(cell);
    }
    row.style.setProperty('--d', r);
    sheet.appendChild(row);
  }
  document.body.appendChild(root);
  var prevOverflow = document.documentElement.style.overflow;
  document.documentElement.style.overflow = 'hidden';

  var timers = [], done = false;
  function at(ms, fn) { timers.push(setTimeout(fn, ms)); }
  function put(cell, ch, cls) {
    cell.className = 'c' + (cls ? ' ' + cls : '');
    cell.firstChild.textContent = ch;
  }
  function clearAll() { grid.forEach(function (row) { row.forEach(function (cl) { put(cl, ''); cl.style.transitionDelay = '0ms'; }); }); }
  var POOL = '가나다라마바사아자차카타파하국어독서문학언매화작수능글말뜻';
  function scramble(cell, ch, cls, dur) {
    var n = 0, steps = Math.max(2, Math.round(dur / 45));
    var iv = setInterval(function () {
      n++;
      if (n >= steps) { clearInterval(iv); put(cell, ch, (cls ? cls + ' ' : '') + 'pop'); return; }
      put(cell, POOL.charAt(Math.floor(Math.random() * POOL.length)), 'scr');
    }, 45);
    timers.push(iv);
  }
  function word(w, rowIdx) {
    var row = grid[rowIdx], s = Math.floor((COLS - w.length) / 2);
    row.forEach(function (cl) { put(cl, ''); });
    for (var i = 0; i < w.length; i++) scramble(row[s + i], w.charAt(i), 'hl', 140);
  }
  function typeLine(text, rowIdx, t0, step) {
    var row = grid[rowIdx], s = Math.floor((COLS - text.length) / 2);
    var hlIdx = {};
    ['오름', '옳음'].forEach(function (k) {
      var p = text.indexOf(k);
      while (p > -1) { hlIdx[p] = hlIdx[p + 1] = 1; p = text.indexOf(k, p + 1); }
    });
    for (var i = 0; i < text.length; i++) (function (i) {
      at(t0 + i * step, function () { put(row[s + i], text.charAt(i) === ' ' ? '' : text.charAt(i), (hlIdx[i] ? 'hl ' : '') + 'pop'); });
    })(i);
    return t0 + text.length * step;
  }
  function finish() {
    if (done) return; done = true;
    timers.forEach(function (t) { clearTimeout(t); clearInterval(t); });
    root.classList.add('out');
    setTimeout(function () {
      root.remove(); st.remove();
      document.documentElement.style.overflow = prevOverflow;
    }, 750);
  }

  // 타임라인 — 탭이 화면에 보일 때 시작(숨은 탭은 rAF가 멈춰 원고지가 안 그려짐)
  var started = false;
  function start() {
    if (started || done) return; started = true;
    var dn = false;
    function draw() { if (dn) return; dn = true; root.classList.add('drawn'); }
    requestAnimationFrame(function () { requestAnimationFrame(draw); });
    at(150, draw); // rAF가 밀리는 환경 폴백
    var t = 1250;
    LINES.forEach(function (ln, i) { t = typeLine(ln, START + i, t, 62) + (wide ? 260 : 150); });
    t += 900;
    at(t, function () { sheet.style.opacity = '0'; });
    at(t + 300, function () { root.classList.add('logo-on'); });
    at(t + 1500, finish);
  }
  if (document.visibilityState === 'hidden') {
    document.addEventListener('visibilitychange', function vh() {
      if (document.visibilityState === 'visible') { document.removeEventListener('visibilitychange', vh); start(); }
    });
  } else { start(); }

  root.addEventListener('click', finish);
  window.addEventListener('keydown', function k() { finish(); window.removeEventListener('keydown', k); });
})();
