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
  { text: "Prefiro acompanhar as decisões do grupo a determinar o rumo dos acontecimentos.", trait: "controle", reverse: true }
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

const storageKey = "ultima-cena-respostas-v3";
const intro = document.querySelector("#intro");
const quiz = document.querySelector("#quiz");
const result = document.querySelector("#result");
const answers = readSavedAnswers();
let current = 0;
let resultArchetype = null;

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#duration").textContent = `${questions.length} afirmações · cerca de 5 minutos`;
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
  document.querySelector("#question-kicker").textContent = `CENA ${String(current + 1).padStart(2, "0")}`;
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
    const value = (answers[index] - 1) / 4;
    totals[question.trait].push(question.reverse ? 1 - value : value);
  });
  return Object.fromEntries(Object.entries(totals).map(([trait, values]) => [trait, values.reduce((sum, value) => sum + value, 0) / values.length]));
}

function rankArchetypes(traits) {
  return archetypes.map(archetype => ({
    archetype,
    distance: Object.keys(traits).reduce((sum, trait) => sum + (traits[trait] - archetype.profile[trait]) ** 2, 0)
  })).sort((a, b) => a.distance - b.distance);
}

function renderResult() {
  const traits = calculateTraits();
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
  const text = `No teste Última Cena, meu papel no filme de terror seria ${resultArchetype.name}. Qual seria o seu?`;
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
