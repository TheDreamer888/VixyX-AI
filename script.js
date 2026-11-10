(function () {
  var $ = function (id) { return document.getElementById(id); };
  var log = $('log'), form = $('form'), input = $('q');
  document.documentElement.classList.add('js');
  $('y').textContent = new Date().getFullYear();

  var nav = $('nav'), burger = $('burger'), menu = $('menu');
  window.addEventListener('scroll', function () {
    nav.classList.toggle('stuck', window.scrollY > 10);
  }, { passive: true });
  function closeMenu() {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', function () {
    var open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', function (e) { if (e.target.tagName === 'A') closeMenu(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  var pro = $('pro');
  document.querySelectorAll('.toggle button').forEach(function (b) {
    b.addEventListener('click', function () {
      document.querySelectorAll('.toggle button').forEach(function (o) {
        var on = o === b;
        o.classList.toggle('on', on);
        o.setAttribute('aria-pressed', String(on));
      });
      pro.textContent = b.getAttribute('data-p') === 'a' ? '15' : '19';
    });
  });

  var replies = [
    [/pre[cç]o|plano|custa|quanto|\bpro\b/i, 'Temos Free (0€), Pro (19€/mês, ou 15€ no plano anual) e Equipa (sob consulta). Vê a secção Preços.'],
    [/c[oó]digo|code|programa|bug/i, 'Sim! Posso escrever, explicar e depurar código em várias linguagens.'],
    [/autom/i, 'Com automações, tarefas repetitivas ficam resolvidas sem esforço.'],
    [/segur|privacid|dados/i, 'A privacidade é prioridade: os teus dados são protegidos por design.'],
    [/fazer|consegues|ajud|funcion/i, 'Converso, resumo, traduzo, escrevo, automatizo tarefas e ajudo com código.'],
    [/ol[aá]|\boi\b|hello|\bhi\b/i, 'Olá! Como posso ajudar hoje?']
  ];

  function add(text, who) {
    var d = document.createElement('div');
    d.className = 'msg ' + who;
    d.textContent = text;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
    return d;
  }

  function send(t) {
    t = t.trim();
    if (!t) return;
    add(t, 'user');
    var tp = add('', 'bot');
    tp.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
    log.scrollTop = log.scrollHeight;
    var r = 'Boa pergunta! Esta é uma demo simulada — na versão completa responderia com IA.';
    for (var i = 0; i < replies.length; i++) {
      if (replies[i][0].test(t)) { r = replies[i][1]; break; }
    }
    setTimeout(function () { tp.textContent = r; log.scrollTop = log.scrollHeight; }, 700);
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    send(input.value);
    input.value = '';
  });
  $('chips').addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') send(e.target.textContent);
  });
})();
