(function () {
  var log = document.getElementById('log');
  var form = document.getElementById('form');
  var input = document.getElementById('q');
  document.getElementById('y').textContent = new Date().getFullYear();

  var replies = [
    [/pre[cç]o|plano|custa|\bpro\b/i, 'Temos Free (0€), Pro (19€/mês) e Equipa (sob consulta). Vê a secção Preços.'],
    [/c[oó]digo|code|programa|bug/i, 'Posso escrever, explicar e depurar código em várias linguagens.'],
    [/autom/i, 'Com automações, tarefas repetitivas ficam resolvidas sem esforço.'],
    [/segur|privacid|dados/i, 'A privacidade é prioridade: os teus dados são protegidos por design.'],
    [/ol[aá]|\boi\b|hello|\bhi\b/i, 'Olá! Como posso ajudar hoje?']
  ];

  function add(text, who) {
    var d = document.createElement('div');
    d.className = 'msg ' + who;
    d.textContent = text;
    log.appendChild(d);
    log.scrollTop = log.scrollHeight;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var t = input.value.trim();
    if (!t) return;
    add(t, 'user');
    input.value = '';
    var r = 'Boa pergunta! Esta é uma demo simulada — na versão completa responderia com IA.';
    for (var i = 0; i < replies.length; i++) {
      if (replies[i][0].test(t)) { r = replies[i][1]; break; }
    }
    setTimeout(function () { add(r, 'bot'); }, 500);
  });
})();
