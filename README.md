# Última Cena

Teste de entretenimento para descobrir qual arquétipo de filme de terror combina com suas escolhas. São 30 afirmações, dez resultados possíveis e nenhuma dependência externa.

## Rodar localmente

Abra `index.html` no navegador. As respostas ficam salvas apenas no armazenamento local do navegador para permitir continuar o teste depois.

## Publicar no GitHub Pages

1. Crie um repositório público no GitHub e envie os arquivos desta pasta para a raiz dele.
2. Em **Settings → Pages → Build and deployment**, selecione **Deploy from a branch**.
3. Escolha a branch `main` e a pasta `/(root)`, depois clique em **Save**.
4. O endereço será `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`.

O teste roda inteiramente no navegador, sem servidor ou banco de dados. A pontuação compara a média das respostas em dez traços com perfis fictícios definidos em `app.js`. Os resultados incluem sobrevivente final, investigador(a), protetor(a), cético(a), alívio cômico, curioso(a) imprudente, figura suspeita, primeira vítima, sacrifício heroico e assassino(a). Cada resultado também mostra um personagem conhecido como referência. É uma brincadeira, não uma avaliação psicológica. Os textos e visuais deste projeto são originais.

Cada traço recebe uma pontuação entre 0 e 1 a partir de três afirmações. Perguntas invertidas têm a escala revertida. O resultado é o arquétipo cujo perfil tem a menor distância quadrática em relação às dez médias calculadas. O arquétipo assassino(a) favorece confronto, planejamento, persistência, desconfiança e controle; cuidado e espírito de sacrifício têm valores baixos nesse perfil.
