const questions = [
  { text: "Quando algo parece errado, prefiro investigar a esperar que outra pessoa resolva.", trait: "confronto", reverse: false },
  { text: "Antes de entrar em um lugar desconhecido, observo saídas e possíveis riscos.", trait: "planejamento", reverse: false },
  { text: "Mesmo sob pressão, me preocupo em não deixar ninguém para trás.", trait: "cuidado", reverse: false },
  { text: "Consigo transformar objetos comuns em soluções quando um plano falha.", trait: "improviso", reverse: false },
  { text: "Uma derrota me faz querer tentar de novo, mesmo quando estou exausto(a).", trait: "persistencia", reverse: false },
  { text: "Uso o humor para aliviar a tensão quando tudo dá errado.", trait: "humor", reverse: false },
  { text: "Diante de uma ameaça, minha primeira reação é me esconder e esperar.", trait: "confronto", reverse: true },
  { text: "Costumo agir antes de pensar nas consequências.", trait: "planejamento", reverse: true },
  { text: "Se alguém do grupo se atrasa, sigo em frente sem olhar para trás.", trait: "cuidado", reverse: true },
  { text: "Fico paralisado(a) quando preciso mudar de plano de repente.", trait: "improviso", reverse: true },
  { text: "Quando uma tentativa falha, acho melhor desistir logo.", trait: "persistencia", reverse: true },
  { text: "Mesmo em situações absurdas, raramente consigo rir de mim mesmo(a).", trait: "humor", reverse: true },
  { text: "Se alguém que amo está em perigo, enfrento o medo para ajudar.", trait: "confronto", reverse: false },
  { text: "Gosto de juntar pistas antes de decidir em quem confiar.", trait: "planejamento", reverse: false },
  { text: "Em uma crise, tento manter o grupo unido.", trait: "cuidado", reverse: false },
  { text: "Sou bom(boa) em encontrar uma saída que ninguém tinha percebido.", trait: "improviso", reverse: false },
  { text: "Continuo procurando uma solução mesmo quando todos acham que acabou.", trait: "persistencia", reverse: false },
  { text: "Um comentário irônico na hora certa me ajuda a seguir em frente.", trait: "humor", reverse: false },
  { text: "Se encontro uma porta trancada, quero descobrir o que há do outro lado.", trait: "curiosidade", reverse: false },
  { text: "Quando alguém diz que está tudo bem, ainda procuro sinais de perigo.", trait: "desconfianca", reverse: false },
  { text: "Prefiro não saber a origem de um barulho estranho.", trait: "curiosidade", reverse: true },
  { text: "Costumo confiar rapidamente em pessoas que acabei de conhecer.", trait: "desconfianca", reverse: true },
  { text: "Mesmo com medo, quero entender por que coisas estranhas estão acontecendo.", trait: "curiosidade", reverse: false },
  { text: "Antes de aceitar ajuda, tento descobrir o que a outra pessoa ganha com isso.", trait: "desconfianca", reverse: false },
  { text: "Eu me colocaria em perigo para dar ao grupo uma chance de escapar.", trait: "sacrificio", reverse: false },
  { text: "Em uma crise, minha própria segurança vem sempre em primeiro lugar.", trait: "sacrificio", reverse: true },
  { text: "Se alguém precisasse ficar para trás, eu consideraria assumir esse papel.", trait: "sacrificio", reverse: false },
  { text: "Em uma situação caótica, gosto de assumir o controle das decisões.", trait: "controle", reverse: false },
  { text: "Se meu plano encontra resistência, tento conduzir as pessoas para que ele continue funcionando.", trait: "controle", reverse: false },
  { text: "Prefiro acompanhar as decisões do grupo a determinar o rumo dos acontecimentos.", trait: "controle", reverse: true },
  { text: "Ao chegar a um lugar desconhecido, reparo nas saídas antes de me acomodar.", survival: true, risk: "ambiente", reverse: false },
  { text: "Se o grupo escuta um barulho estranho, separar-se parece a forma mais rápida de investigar.", survival: true, risk: "separacao", reverse: true },
  { text: "Quando o sinal está ruim, economizo bateria e aviso alguém sobre minha localização.", survival: true, risk: "comunicacao", reverse: false },
  { text: "Eu abriria a porta para uma pessoa pedindo ajuda, mesmo sem conseguir confirmar quem ela é.", survival: true, risk: "confianca", reverse: true },
  { text: "Depois de escapar de um perigo imediato, eu voltaria para buscar um objeto importante.", survival: true, risk: "retorno", reverse: true },
  { text: "Se percebo sinais reais de perigo, aviso o grupo mesmo correndo o risco de parecer exagerado(a).", survival: true, risk: "alerta", reverse: false },
  { text: "Durante uma fuga, prefiro um caminho conhecido e iluminado a um atalho escuro.", survival: true, risk: "rota", reverse: false },
  { text: "Quando tudo parece ter acabado, ainda verifico se o ambiente está realmente seguro.", survival: true, risk: "vigilancia", reverse: false }
];

const traitNames = {
  confronto: "Coragem para enfrentar",
  planejamento: "Planejamento",
  cuidado: "Proteção do grupo",
  improviso: "Improviso",
  persistencia: "Persistência",
  humor: "Humor sob pressão",
  curiosidade: "Curiosidade",
  desconfianca: "Desconfiança",
  sacrificio: "Espírito de sacrifício",
  controle: "Controle da situação"
};

const archetypes = [
  { name: "Sobrevivente final", subtitle: "A PESSOA QUE ENFRENTA A ÚLTIMA CENA", caption: "ATÉ O ÚLTIMO CRÉDITO", symbol: "✦", color: "#715058", reference: "Sidney Prescott · Pânico (1996)", profile: { confronto: .88, planejamento: .82, cuidado: .74, improviso: .75, persistencia: .97, humor: .27, curiosidade: .64, desconfianca: .83, sacrificio: .63, controle: .68 }, description: "Você percebe o perigo, aprende com cada erro e encontra forças para chegar ao confronto final. Sua história não depende de estar sem medo: depende de continuar agindo quando todos os planos falham." },
  { name: "Investigador(a)", subtitle: "A PESSOA QUE JUNTA AS PISTAS", caption: "A VERDADE TEM UM PREÇO", symbol: "⌕", color: "#56616b", reference: "Gale Weathers · Pânico (1996)", profile: { confronto: .62, planejamento: .96, cuidado: .59, improviso: .78, persistencia: .86, humor: .22, curiosidade: .95, desconfianca: .75, sacrificio: .45, controle: .72 }, description: "Você repara no detalhe que ninguém viu e sabe que a resposta pode estar escondida no lugar mais improvável. Sua curiosidade vem com método: antes de correr, você tenta entender o que está acontecendo." },
  { name: "Protetor(a)", subtitle: "A PESSOA QUE NÃO ABANDONA O GRUPO", caption: "NINGUÉM FICA PARA TRÁS", symbol: "✚", color: "#5b6654", reference: "Evelyn Abbott · Um Lugar Silencioso (2018)", profile: { confronto: .91, planejamento: .71, cuidado: .98, improviso: .66, persistencia: .88, humor: .25, curiosidade: .57, desconfianca: .65, sacrificio: .78, controle: .61 }, description: "Quando a ameaça chega, você pensa primeiro em quem precisa de ajuda. É a pessoa que segura a porta, organiza a fuga e volta para buscar quem ficou. Sua coragem aparece no cuidado com os outros." },
  { name: "Cético(a)", subtitle: "A PESSOA QUE PROCURA UMA EXPLICAÇÃO", caption: "DEVE HAVER UMA EXPLICAÇÃO", symbol: "—", color: "#5e5b68", reference: "Micah Sloat · Atividade Paranormal (2007)", profile: { confronto: .39, planejamento: .79, cuidado: .49, improviso: .42, persistencia: .57, humor: .28, curiosidade: .33, desconfianca: .25, sacrificio: .34, controle: .51 }, description: "Você prefere uma explicação concreta a uma teoria assustadora. Essa calma pode impedir o grupo de entrar em pânico, embora às vezes o filme insista em provar que nem tudo cabe na lógica." },
  { name: "Alívio cômico", subtitle: "A PESSOA QUE QUEBRA A TENSÃO", caption: "RI PARA NÃO GRITAR", symbol: "☺", color: "#776044", reference: "Marty Mikalski · O Segredo da Cabana (2011)", profile: { confronto: .48, planejamento: .39, cuidado: .82, improviso: .77, persistencia: .62, humor: .99, curiosidade: .67, desconfianca: .42, sacrificio: .56, controle: .31 }, description: "Você encontra uma piada até no pior momento. Seu humor ajuda o grupo a respirar e sua criatividade aparece quando as soluções sérias acabam. Por trás das brincadeiras, há alguém que se importa." },
  { name: "Curioso(a) imprudente", subtitle: "A PESSOA QUE ABRE A PORTA PROIBIDA", caption: "NÃO ENTRE AÍ", symbol: "?", color: "#795444", reference: "Darry Jenner · Olhos Famintos (2001)", profile: { confronto: .76, planejamento: .23, cuidado: .45, improviso: .82, persistencia: .59, humor: .65, curiosidade: .98, desconfianca: .19, sacrificio: .32, controle: .44 }, description: "Você ouve um barulho no porão e quer saber de onde veio. Sua ousadia move a história e revela coisas que todos preferiam ignorar. Talvez fosse prudente avisar alguém antes de abrir a próxima porta." },
  { name: "Figura suspeita", subtitle: "A PESSOA QUE SABE MAIS DO QUE CONTA", caption: "NEM TODO SEGREDO É SEGURO", symbol: "◈", color: "#74424c", reference: "Crazy Ralph · Sexta-Feira 13 (1980)", profile: { confronto: .54, planejamento: .62, cuidado: .35, improviso: .57, persistencia: .69, humor: .22, curiosidade: .70, desconfianca: .96, sacrificio: .22, controle: .48 }, description: "Você observa, calcula e raramente mostra todas as cartas. Ninguém sabe se seus segredos vão salvar o grupo ou complicar ainda mais a noite. Em um filme de terror, sua entrada em cena mudaria o rumo da história." },
  { name: "Primeira vítima", subtitle: "A PESSOA QUE INAUGURA O MISTÉRIO", caption: "O FILME COMEÇA AGORA", symbol: "×", color: "#69525d", reference: "Casey Becker · Pânico (1996)", profile: { confronto: .29, planejamento: .22, cuidado: .62, improviso: .36, persistencia: .28, humor: .49, curiosidade: .75, desconfianca: .12, sacrificio: .37, controle: .18 }, description: "Você confia nas pessoas, segue uma pista intrigante e acaba no centro da cena que dá início ao mistério. Seu papel é inesquecível: é quando o público percebe que as regras daquela noite mudaram." },
  { name: "Sacrifício heroico", subtitle: "A PESSOA QUE GARANTE A FUGA DO GRUPO", caption: "CORRAM. EU GANHO TEMPO.", symbol: "†", color: "#6d4b42", reference: "Lee Abbott · Um Lugar Silencioso (2018)", profile: { confronto: .94, planejamento: .68, cuidado: .97, improviso: .61, persistencia: .72, humor: .12, curiosidade: .42, desconfianca: .61, sacrificio: .99, controle: .52 }, description: "Você chega longe, entende o tamanho da ameaça e toma a decisão que permite aos outros continuar. Sua morte seria uma escolha consciente e decisiva, daquelas que mudam o grupo e ficam com o público depois dos créditos." },
  { name: "Assassino(a)", subtitle: "A PESSOA QUE CONTROLA O PESADELO", caption: "A AMEAÇA ESTAVA NO ELENCO", symbol: "▲", color: "#782d35", reference: "Billy Loomis · Pânico (1996)", profile: { confronto: .93, planejamento: .92, cuidado: .08, improviso: .78, persistencia: .94, humor: .32, curiosidade: .55, desconfianca: .88, sacrificio: .05, controle: .99 }, description: "Você ocuparia o centro oculto da história: paciente, controlador(a) e sempre alguns passos à frente. Seu perfil combina confronto, planejamento e persistência, com pouca disposição para colocar as necessidades do grupo acima do próprio objetivo." }
];

const deathScenarios = {
  "Sobrevivente final": [
    { risks: ["retorno", "vigilancia", "ambiente"], title: "Você volta para conferir se acabou mesmo", description: "Depois de uma fuga quase perfeita, você retorna ao lugar onde tudo aconteceu para confirmar a morte da ameaça. O corpo sumiu, a música volta e sua sequência termina ali." },
    { risks: ["separacao", "rota", "alerta"], title: "Você tenta resolver a última parte sozinho(a)", description: "Você encontra uma saída para todos, mas decide cobrir o caminho sem companhia. A ameaça conhece um atalho e transforma seu gesto corajoso na última surpresa do filme." },
    { risks: ["confianca", "comunicacao"], title: "Você confia no sobrevivente errado", description: "Alguém aparece oferecendo ajuda e conhece detalhes demais sobre a noite. Quando você percebe que a pessoa fazia parte do plano, já entregou sua única forma de defesa." }
  ],
  "Investigador(a)": [
    { risks: ["ambiente", "separacao", "retorno"], title: "A pista perfeita estava no porão", description: "Você encontra a prova capaz de explicar tudo e desce sozinho(a) para buscá-la. A pista era verdadeira; o problema era quem estava esperando ao lado dela." },
    { risks: ["comunicacao", "vigilancia", "alerta"], title: "Você para para registrar a descoberta", description: "Em vez de fugir, você tenta fotografar e enviar a prova definitiva. A mensagem fica presa em “enviando” enquanto a ameaça aparece no reflexo da tela." },
    { risks: ["confianca", "rota"], title: "Sua fonte anônima marca o último encontro", description: "Uma pessoa promete todas as respostas em um lugar isolado. Você chega com perguntas excelentes e descobre tarde demais que a fonte era também a resposta." }
  ],
  "Protetor(a)": [
    { risks: ["retorno", "alerta", "separacao"], title: "Você volta para buscar quem ficou", description: "O grupo já estava seguro, mas você escuta alguém pedindo ajuda e retorna. A voz era uma armadilha, e seu impulso de proteger coloca você diretamente no caminho da ameaça." },
    { risks: ["vigilancia", "rota", "ambiente"], title: "Você segura a porta por tempo demais", description: "Todos conseguem passar enquanto você mantém a passagem aberta. Você espera só mais um segundo pela última pessoa, e esse segundo é exatamente o que a ameaça precisava." },
    { risks: ["confianca", "comunicacao"], title: "Você acolhe alguém que não deveria estar ali", description: "Você oferece abrigo a uma figura aparentemente ferida. Quando o grupo percebe que deixou o perigo entrar, você já está perto demais para fechar a porta." }
  ],
  "Cético(a)": [
    { risks: ["ambiente", "vigilancia", "alerta"], title: "Você vai provar que era só o encanamento", description: "Cansado(a) do pânico do grupo, você segue o barulho para demonstrar que existe uma explicação simples. Existe uma explicação, mas ela tem uma arma e estava esperando no escuro." },
    { risks: ["confianca", "comunicacao"], title: "Você abre a porta para encerrar a discussão", description: "A pessoa do lado de fora parece perfeitamente normal. Você abre a porta para mostrar que todos estão exagerando e consegue provar apenas que o medo do grupo fazia sentido." },
    { risks: ["rota", "separacao", "retorno"], title: "Seu atalho era estatisticamente razoável", description: "Você escolhe a rota mais curta e descarta os avisos como superstição. O cálculo estava correto; o mapa é que não mostrava o que vivia naquele caminho." }
  ],
  "Alívio cômico": [
    { risks: ["alerta", "comunicacao", "ambiente"], title: "Sua última piada chama atenção demais", description: "Você quebra o silêncio com a melhor frase da noite. O grupo ri, a ameaça escuta e sua saída de cena ganha uma ironia que ninguém queria presenciar." },
    { risks: ["separacao", "retorno", "rota"], title: "Você sai sozinho(a) por uma coisa completamente dispensável", description: "No meio da fuga, você percebe que deixou o celular, a bebida ou outro item para trás. A busca dura pouco e rende a cena que o público sabia que viria." },
    { risks: ["confianca", "vigilancia"], title: "Você acha que o assassino é alguém fantasiado", description: "Você elogia a fantasia e faz uma brincadeira antes de perceber que ninguém ali está numa festa. A piada funciona; infelizmente, só para o público." }
  ],
  "Curioso(a) imprudente": [
    { risks: ["ambiente", "retorno", "vigilancia"], title: "Você mexe no objeto que dizia “não toque”", description: "O aviso parecia dramático demais para ser levado a sério. Você abre, aperta ou lê a coisa proibida e descobre por que ninguém havia retirado a placa." },
    { risks: ["rota", "separacao", "comunicacao"], title: "Você entra no túnel para ver onde ele termina", description: "O caminho estreito parece uma descoberta incrível e você decide explorá-lo sem avisar o grupo. Ele realmente leva a algum lugar, só não existe caminho de volta." },
    { risks: ["confianca", "alerta"], title: "Você segue a voz que conhece seu nome", description: "Uma voz familiar chama de dentro da casa abandonada. Você entra para descobrir quem é e encontra algo que aprendeu a imitar pessoas muito antes de conhecer você." }
  ],
  "Figura suspeita": [
    { risks: ["comunicacao", "alerta", "ambiente"], title: "Seus avisos misteriosos fazem o grupo trancar você para fora", description: "Você tenta alertar todo mundo usando frases vagas e desaparecendo nas sombras. Quando finalmente decide explicar, ninguém abre a porta e a ameaça já está atrás de você." },
    { risks: ["vigilancia", "retorno", "rota"], title: "Você guarda a informação decisiva até tarde demais", description: "Você conhecia uma passagem segura, mas esperou o momento certo para revelar. Quando resolve contar, a passagem já está bloqueada e você é a única pessoa do lado errado." },
    { risks: ["confianca", "separacao"], title: "Seu contato secreto trabalha para o outro lado", description: "Você marca um encontro longe do grupo para trocar informações. A pessoa aparece no horário, confirma todas as suas suspeitas e elimina a única testemunha." }
  ],
  "Primeira vítima": [
    { risks: ["confianca", "comunicacao", "alerta"], title: "Você continua a conversa com a pessoa errada", description: "Uma ligação estranha começa quase divertida. Você demora demais para desligar e percebe que quem está falando consegue ver cada movimento dentro da casa." },
    { risks: ["ambiente", "separacao", "vigilancia"], title: "Você investiga o barulho sem acender a luz", description: "O som vem do cômodo ao lado e parece simples demais para acordar alguém. Você entra sozinho(a), a porta fecha e o título do filme aparece logo depois." },
    { risks: ["retorno", "rota"], title: "Você volta para buscar as chaves", description: "Você já estava do lado de fora quando percebe que deixou as chaves sobre a mesa. São poucos passos até a casa e exatamente o tempo necessário para abrir o filme com impacto." }
  ],
  "Sacrifício heroico": [
    { risks: ["retorno", "separacao", "vigilancia"], title: "Você fica segurando a passagem", description: "Você mantém a porta aberta até a última pessoa escapar e sabe que não haverá tempo para atravessar. O grupo sobrevive porque você decidiu transformar segundos em uma despedida." },
    { risks: ["alerta", "rota", "ambiente"], title: "Você atrai a ameaça para longe do grupo", description: "Sem outra saída, você faz barulho e corre na direção oposta. O plano funciona perfeitamente para todos, menos para a pessoa que precisou executá-lo." },
    { risks: ["comunicacao", "confianca"], title: "Você entrega sua única proteção para outra pessoa", description: "Alguém precisa mais da arma, da lanterna ou do último lugar no veículo. Você entrega o recurso, fica para trás e garante que a história dos outros continue." }
  ],
  "Assassino(a)": [
    { risks: ["vigilancia", "alerta", "retorno"], title: "Seu monólogo dá tempo para a vítima reagir", description: "Com tudo sob controle, você decide explicar cada detalhe do plano. Enquanto aprecia a própria revelação, alguém alcança uma arma improvisada e muda o final." },
    { risks: ["rota", "ambiente", "separacao"], title: "Você persegue a vítima pelo atalho errado", description: "Você abandona o plano para terminar a perseguição rapidamente. A vítima conhece melhor o lugar, prepara uma armadilha simples e transforma o caçador em cena final." },
    { risks: ["confianca", "comunicacao"], title: "Seu cúmplice decide ficar com todo o crédito", description: "Você confia que a parceria vai durar até o fim. Na hora da revelação, seu cúmplice percebe que uma pessoa a menos significa uma versão mais conveniente da história." }
  ]
};

const storageKey = "ultima-cena-respostas-v4";
const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const result = document.querySelector("#result");
const answers = readSavedAnswers();
let current = 0;
let resultArchetype = null;

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#duration").textContent = `${questions.length} afirmações · cerca de 6 minutos`;
document.querySelector("#progress").setAttribute("aria-valuemax", questions.length);
document.querySelector("#start-button").addEventListener("click", () => {
  const firstBlank = answers.findIndex(answer => answer === null);
  current = firstBlank === -1 ? 0 : firstBlank;
  showSection(quiz);
  renderQuestion();
});
document.querySelector("#back-button").addEventListener("click", () => {
  if (current === 0) return;
  current -= 1;
  renderQuestion();
});
document.querySelector("#next-button").addEventListener("click", nextQuestion);
document.querySelector("#restart-button").addEventListener("click", () => {
  answers.fill(null);
  saveAnswers();
  current = 0;
  resultArchetype = null;
  document.querySelector("#share-status").textContent = "";
  showSection(intro);
});
document.querySelector("#share-button").addEventListener("click", shareResult);

function readSavedAnswers() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(saved) && saved.length === questions.length) {
      return saved.map(value => Number.isInteger(value) && value >= 1 && value <= 5 ? value : null);
    }
  } catch { /* O teste ainda funciona quando o armazenamento está indisponível. */ }
  return Array(questions.length).fill(null);
}

function saveAnswers() {
  try { localStorage.setItem(storageKey, JSON.stringify(answers)); } catch { /* Armazenamento opcional. */ }
}

function showSection(section) {
  for (const item of [intro, quiz, result]) item.classList.toggle("hidden", item !== section);
  section.scrollIntoView({ block: "start", behavior: "smooth" });
}

function renderQuestion() {
  const question = questions[current];
  document.querySelector("#question-counter").textContent = `${String(current + 1).padStart(2, "0")} / ${String(questions.length).padStart(2, "0")}`;
  const survivalPosition = questions.slice(0, current + 1).filter(item => item.survival).length;
  document.querySelector("#question-kicker").textContent = question.survival
    ? `PROTOCOLO DE SOBREVIVÊNCIA · ${String(survivalPosition).padStart(2, "0")} / 08`
    : `CENA ${String(current + 1).padStart(2, "0")}`;
  document.querySelector("#question-title").textContent = question.text;
  document.querySelector("#progress").setAttribute("aria-valuenow", current);
  document.querySelector("#progress-fill").style.width = `${(current / questions.length) * 100}%`;
  document.querySelector("#back-button").disabled = current === 0;
  document.querySelector("#next-button").innerHTML = current === questions.length - 1 ? 'VER RESULTADO <span aria-hidden="true">↗</span>' : 'PRÓXIMA <span aria-hidden="true">→</span>';
  document.querySelector("#validation").hidden = true;
  const scale = document.querySelector("#scale");
  scale.replaceChildren();
  for (let value = 1; value <= 5; value += 1) {
    const label = document.createElement("label");
    label.className = "scale-option";
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "answer";
    radio.value = String(value);
    radio.checked = answers[current] === value;
    radio.setAttribute("aria-label", `${value} de 5`);
    radio.addEventListener("change", () => {
      answers[current] = value;
      saveAnswers();
      document.querySelector("#validation").hidden = true;
    });
    const number = document.createElement("span");
    number.textContent = String(value);
    label.append(radio, number);
    scale.append(label);
  }
}

function nextQuestion() {
  if (answers[current] === null) {
    document.querySelector("#validation").hidden = false;
    document.querySelector("#scale input").focus();
    return;
  }
  if (current < questions.length - 1) {
    current += 1;
    renderQuestion();
    document.querySelector("#question-title").focus({ preventScroll: true });
  } else {
    renderResult();
  }
}

function calculateTraits() {
  const totals = Object.fromEntries(Object.keys(traitNames).map(trait => [trait, []]));
  questions.forEach((question, index) => {
    if (!question.trait) return;
    const value = (answers[index] - 1) / 4;
    totals[question.trait].push(question.reverse ? 1 - value : value);
  });
  return Object.fromEntries(Object.entries(totals).map(([trait, values]) => [trait, values.reduce((sum, value) => sum + value, 0) / values.length]));
}

function calculateSurvival(traits) {
  const decisionScores = questions.flatMap((question, index) => {
    if (!question.survival) return [];
    const value = (answers[index] - 1) / 4;
    return [{ risk: question.risk, value: question.reverse ? 1 - value : value }];
  });
  const decisions = decisionScores.reduce((sum, item) => sum + item.value, 0) / decisionScores.length;
  const risks = [...decisionScores].sort((a, b) => a.value - b.value).map(item => item.risk);
  const confrontationBalance = Math.max(0, 1 - Math.abs(traits.confronto - .65) / .65);
  const readiness =
    decisions * .70 +
    traits.planejamento * .08 +
    traits.improviso * .07 +
    traits.persistencia * .06 +
    traits.desconfianca * .04 +
    traits.cuidado * .03 +
    confrontationBalance * .02;
  const percentage = Math.round(18 + readiness * 74);

  if (percentage >= 75) return { percentage, risks, level: "high", title: "Você sobreviveria", description: "Você combina cautela, leitura do ambiente e boas decisões sob pressão. Ainda levaria alguns sustos, mas tem grandes chances de chegar aos créditos." };
  if (percentage >= 55) return { percentage, risks, level: "medium", title: "Você sobreviveria por pouco", description: "Seu instinto funciona, mas algumas escolhas colocariam você perto demais do perigo. Você chegaria à última cena com algumas histórias difíceis de explicar." };
  if (percentage >= 38) return { percentage, risks, level: "low", title: "Você vira a morte boba do meio do filme", description: "Você escapa das primeiras ameaças e começa a acreditar que entendeu as regras. É uma boa participação, encerrada por uma decisão que faria todo o cinema gritar com a tela." };
  return { percentage, risks, level: "critical", title: "Você não chega nem aos créditos iniciais", description: "Suas escolhas têm energia de primeira morte do filme: rápidas, fatais e responsáveis por mostrar ao público que o perigo é real." };
}

function selectDeathScenario(archetype, risks) {
  const options = deathScenarios[archetype.name];
  return options.map((scene, sceneIndex) => ({
    scene,
    score: scene.risks.reduce((total, risk) => {
      const position = risks.indexOf(risk);
      return total + (position === -1 ? 0 : risks.length - position);
    }, 0) - sceneIndex * .001
  })).sort((a, b) => b.score - a.score)[0].scene;
}

function rankArchetypes(traits) {
  return archetypes.map(archetype => ({
    archetype,
    distance: Object.keys(traits).reduce((sum, trait) => sum + (traits[trait] - archetype.profile[trait]) ** 2, 0)
  })).sort((a, b) => a.distance - b.distance);
}

function renderResult() {
  const traits = calculateTraits();
  const survival = calculateSurvival(traits);
  const ranking = rankArchetypes(traits);
  resultArchetype = ranking[0].archetype;
  document.querySelector("#result-title").textContent = resultArchetype.name;
  document.querySelector("#result-film").textContent = resultArchetype.subtitle;
  document.querySelector("#result-description").textContent = resultArchetype.description;
  document.querySelector("#result-reference").textContent = resultArchetype.reference;
  document.querySelector("#result-index").textContent = `ARQUIVO CONCLUÍDO / ${questions.length} DE ${questions.length}`;
  document.querySelector("#result-number").textContent = String(archetypes.indexOf(resultArchetype) + 1).padStart(2, "0") + " / " + String(archetypes.length).padStart(2, "0");
  document.querySelector("#result-symbol").textContent = resultArchetype.symbol;
  document.querySelector("#result-poster-caption").textContent = resultArchetype.caption;
  document.querySelector("#result-poster").style.background = `radial-gradient(circle at 50% 45%, ${resultArchetype.color}, #19141b 72%)`;
  const survivalCard = document.querySelector("#survival-card");
  survivalCard.dataset.level = survival.level;
  document.querySelector("#survival-score").textContent = `${survival.percentage}%`;
  document.querySelector("#survival-title").textContent = survival.title;
  document.querySelector("#survival-description").textContent = survival.description;
  document.querySelector("#survival-fill").style.width = `${survival.percentage}%`;
  const deathCard = document.querySelector("#death-card");
  const hasDeathScene = survival.level === "low" || survival.level === "critical";
  deathCard.classList.toggle("hidden", !hasDeathScene);
  if (hasDeathScene) {
    const death = selectDeathScenario(resultArchetype, survival.risks);
    document.querySelector("#death-timing").textContent = survival.level === "critical" ? "SUA CENA FINAL · ANTES DOS CRÉDITOS" : "SUA CENA FINAL · NO MEIO DO FILME";
    document.querySelector("#death-title").textContent = death.title;
    document.querySelector("#death-description").textContent = death.description;
  }
  const tags = document.querySelector("#trait-tags");
  tags.replaceChildren();
  Object.entries(traits).sort((a, b) => b[1] - a[1]).slice(0, 3).forEach(([trait]) => {
    const tag = document.createElement("span");
    tag.textContent = traitNames[trait];
    tags.append(tag);
  });
  const runner = document.querySelector("#runner-up");
  runner.replaceChildren();
  const label = document.createElement("span");
  label.textContent = "OUTROS PAPÉIS PRÓXIMOS DO SEU PERFIL";
  const names = document.createElement("strong");
  names.textContent = `${ranking[1].archetype.name}  ·  ${ranking[2].archetype.name}`;
  runner.append(label, names);
  document.querySelector("#progress").setAttribute("aria-valuenow", questions.length);
  showSection(result);
}

async function shareResult() {
  if (!resultArchetype) return;
  const survivalResult = document.querySelector("#survival-title").textContent.toLowerCase();
  const survivalScore = document.querySelector("#survival-score").textContent;
  const deathCard = document.querySelector("#death-card");
  const deathDetail = deathCard.classList.contains("hidden") ? "" : ` Minha cena final: ${document.querySelector("#death-title").textContent}.`;
  const text = `No teste Última Cena, meu papel seria ${resultArchetype.name} e o veredito foi: ${survivalResult} (${survivalScore}).${deathDetail} Qual seria o seu?`;
  const data = { title: "Última Cena — seu papel no filme de terror", text, url: location.href };
  const status = document.querySelector("#share-status");
  try {
    if (navigator.share) {
      await navigator.share(data);
      status.textContent = "Resultado compartilhado.";
    } else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(`${text} ${location.href}`);
      status.textContent = "Texto e link copiados.";
    } else {
      status.textContent = `${text} ${location.href}`;
    }
  } catch (error) {
    if (error.name !== "AbortError") status.textContent = `${text} ${location.href}`;
  }
}
