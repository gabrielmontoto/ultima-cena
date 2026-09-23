# Última Cena

Teste de entretenimento para descobrir qual arquétipo de filme de terror combina com suas escolhas e se você sobreviveria à história. São 38 afirmações, dez arquétipos possíveis, um índice de sobrevivência independente e nenhuma dependência externa.

## Rodar localmente

Abra `index.html` no navegador. As respostas ficam salvas apenas no armazenamento local do navegador para permitir continuar o teste depois.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub e envie os arquivos desta pasta para a raiz dele.
2. Em **Settings → Pages → Build and deployment**, selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/(root)`, depois clique em **Save**.
4. O endereço será `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`.

O teste roda inteiramente no navegador, sem servidor ou banco de dados. A pontuação compara a média das respostas em dez traços com perfis fictícios definidos em `app.js`. Os resultados incluem sobrevivente final, investigador(a), protetor(a), cético(a), alívio cômico, curioso(a) imprudente, figura suspeita, primeira vítima, sacrifício heroico e assassino(a). Cada resultado também mostra um personagem conhecido como referência. É uma brincadeira, não uma avaliação psicológica. Os textos e visuais deste projeto são originais.

Cada traço recebe uma pontuação entre 0 e 1 a partir de três afirmações. Perguntas invertidas têm a escala revertida. O resultado é o arquétipo cujo perfil tem a menor distância quadrática em relação às dez médias calculadas. O arquétipo assassino(a) favorece confronto, planejamento, persistência, desconfiança e controle; cuidado e espírito de sacrifício têm valores baixos nesse perfil.

O índice de sobrevivência usa oito perguntas específicas de decisão para 70% da nota. Os 30% restantes consideram planejamento, improviso, persistência, desconfiança, cuidado e um nível equilibrado de confronto. O valor é convertido para uma escala de 18% a 92%, evitando resultados com certeza absoluta. As faixas mostram se a pessoa sobreviveria, sobreviveria por pouco, viraria a morte boba do meio do filme ou seria a primeira morte, sem chegar aos créditos iniciais.

Quando o resultado indica morte, o teste também monta uma cena final coerente com o arquétipo. Cada arquétipo possui três cenas possíveis, escolhidas conforme os pontos mais fracos nas decisões de sobrevivência: leitura do ambiente, separação do grupo, comunicação, confiança, retorno ao perigo, alerta, escolha de rota e vigilância.
