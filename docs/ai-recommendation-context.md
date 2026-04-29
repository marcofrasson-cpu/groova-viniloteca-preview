# Contexto para recomendacoes assistidas por IA

O Groova ainda usa apenas o algoritmo local do `app.js`. A funcao
`buildRecommendationContextForAI(collection, profile, candidates, feedback)` prepara um payload limpo para uma futura camada de IA, sem chamar API externa.

Ela nao:

- chama OpenAI, Anthropic, Gemini ou qualquer outro provedor;
- usa chave de API;
- altera `localStorage`;
- cria backend;
- envia dados para fora do navegador.

## Objetivo

A funcao transforma a colecao e o ranking local em um contexto controlado para que, no futuro, uma IA possa escrever explicacoes melhores, revisar a curadoria ou sugerir ajustes no Radar da estante.

O algoritmo local continua sendo a fonte principal de verdade.

## Como usar futuramente

Exemplo dentro do app:

```js
const profile = buildTasteProfile(state.collection);
const aiContext = buildRecommendationContextForAI(
  state.collection,
  profile,
  recommendationPool,
  state.recommendationFeedback
);
```

Esse `aiContext` poderia ser enviado futuramente para uma rota segura de backend, por exemplo:

```js
// Exemplo futuro, nao implementado hoje.
// await fetch("/api/recommendations/curate", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(aiContext)
// });
```

## Estrutura do payload

O payload inclui:

- `collectionSummary`: total de discos, nota media, genero forte, decada dominante e diagnostico curatorial.
- `knownCollectionAlbums`: lista sanitizada dos discos cadastrados.
- `knownCollectionAlbumKeys`: chaves dos discos realmente existentes na colecao.
- `topAnchorAlbums`: discos ancora calculados pelo algoritmo local.
- `strongSignals`: generos, estilos, decadas e artistas fortes.
- `gaps`: lacunas obvias, adjacentes e exploratorias.
- `rankedCandidates`: candidatos ja ranqueados pelo algoritmo local.
- `recentFeedback`: feedback recente do usuario.
- `safetyInstructions`: regras para impedir que a IA invente discos da colecao.

## Dados intencionalmente excluidos

Para manter o contexto limpo, a funcao nao inclui:

- preco;
- local de compra;
- URL de compra;
- ids internos do formulario;
- datas internas de cadastro;
- dados pessoais fora do gosto musical.

## Regras de seguranca para a IA futura

A camada futura deve seguir estas regras:

1. Nao inventar discos da colecao.
2. Citar como influencia apenas discos presentes em `knownCollectionAlbums` ou `topAnchorAlbums`.
3. Nao afirmar que um candidato ja pertence a colecao se a chave nao existir em `knownCollectionAlbumKeys`.
4. Usar `rankedCandidates` como fonte primaria de recomendacoes.
5. Tratar informacoes ausentes como desconhecidas.
6. Respeitar feedback negativo, especialmente `not-for-me` e `owned`.

## Papel da IA

Uma IA futura deve atuar como camada de linguagem e curadoria, nao como substituta do algoritmo local.

Uso recomendado:

- melhorar o texto de "Por que combina";
- transformar sinais tecnicos em explicacao humana;
- revisar se a lista esta repetitiva;
- sugerir novas anotacoes para candidatos;
- propor lacunas musicais que ainda nao estao no `recommendationPool`.

Uso nao recomendado:

- decidir sozinha o que esta na colecao;
- ignorar feedback do usuario;
- recomendar discos fora dos candidatos locais sem uma etapa separada de validacao;
- receber dados de compra ou dados pessoais.
