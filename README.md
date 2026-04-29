# Groova

Groova e um aplicativo web estatico para catalogar discos de vinil, registrar escutas, organizar compras futuras, receber recomendacoes e acompanhar novidades do universo analogico.

O projeto nao usa React, Vite, Next nem etapa de build. Ele roda diretamente com:

- `index.html`
- `styles.css`
- `app.js`

Os dados do usuario ficam salvos no `localStorage` do navegador. Em deploy publico, cada navegador/dispositivo tera seu proprio armazenamento local.

## Como abrir localmente

Voce pode abrir o arquivo diretamente:

```bash
open index.html
```

Para testar como site estatico, rode um servidor local dentro da pasta do projeto:

```bash
cd "/Users/marcoaureliofrasson/Desktop/Dominacao mundial/viniloteca"
python3 -m http.server 4173
```

Depois acesse:

```text
http://localhost:4173/
http://localhost:4173/#recommendations
```

## Estrutura

```text
viniloteca/
  index.html
  styles.css
  app.js
  README.md
  docs/
    ai-recommendation-context.md
```

Os caminhos principais ja estao prontos para deploy:

- CSS: `./styles.css`
- JavaScript: `./app.js`
- Icones: `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`
- Rotas internas: `#collection`, `#recommendations`, `#community`, `#news`, `#insights`

Como as telas usam hash na URL, GitHub Pages e Vercel funcionam sem configuracao especial de rotas.

## Melhor estrategia de deploy

Para este projeto, a melhor estrategia e publicar como site estatico.

Use GitHub Pages se quiser uma opcao simples e gratuita direto do repositorio.

Use Vercel se quiser preview automatico, URL rapida e deploy mais facil via painel.

Nao e necessario criar `vercel.json`, workflow do GitHub Actions ou script de build para a estrutura atual.

## Deploy no Vercel

### Pelo painel

1. Entre em [vercel.com](https://vercel.com/).
2. Clique em `Add New...` > `Project`.
3. Importe o repositorio do Groova.
4. Em `Root Directory`, selecione `viniloteca` se o repositorio tiver uma pasta acima dela.
5. Em `Framework Preset`, escolha `Other`.
6. Deixe `Build Command` vazio.
7. Deixe `Output Directory` vazio.
8. Clique em `Deploy`.

### Pela linha de comando

```bash
cd "/Users/marcoaureliofrasson/Desktop/Dominacao mundial/viniloteca"
npx vercel
```

Para publicar em producao:

```bash
npx vercel --prod
```

Na primeira vez, o Vercel vai pedir login e confirmar algumas opcoes. Use:

- Framework: `Other`
- Build Command: vazio
- Output Directory: vazio
- Public Directory: `./`

## Deploy no GitHub Pages

O caminho mais simples e transformar a pasta `viniloteca` na raiz do repositorio.

```bash
cd "/Users/marcoaureliofrasson/Desktop/Dominacao mundial/viniloteca"
git init
git add .
git commit -m "Publica Groova"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/groova.git
git push -u origin main
```

Depois, no GitHub:

1. Abra o repositorio.
2. Va em `Settings`.
3. Clique em `Pages`.
4. Em `Build and deployment`, escolha `Deploy from a branch`.
5. Em `Branch`, selecione `main`.
6. Em pasta, selecione `/root`.
7. Clique em `Save`.

O GitHub vai gerar um link parecido com:

```text
https://SEU_USUARIO.github.io/groova/
```

Os links com hash funcionam diretamente:

```text
https://SEU_USUARIO.github.io/groova/#recommendations
```

## Checklist antes de publicar

Rode estes comandos:

```bash
cd "/Users/marcoaureliofrasson/Desktop/Dominacao mundial/viniloteca"
node --check app.js
python3 -m http.server 4173
```

Abra no navegador:

```text
http://localhost:4173/
http://localhost:4173/#collection
http://localhost:4173/#recommendations
http://localhost:4173/#community
http://localhost:4173/#news
http://localhost:4173/#insights
```

Confirme:

- A pagina carrega sem tela branca.
- A navegacao por abas funciona.
- `#recommendations` abre direto na aba de recomendacoes.
- O console do navegador nao mostra erro critico.
- O `localStorage` continua preservando a colecao no mesmo navegador.

## Arquitetura social local

A comunidade do Groova ainda e local/simulada. Ela usa objetos de repositorio em `app.js` para separar armazenamento, regra de negocio e renderizacao:

- `CollectionRepository`: leitura/salvamento da colecao e backups locais.
- `RecommendationRepository`: wishlist/radar e feedback do Radar da estante.
- `SocialRepository`: perfil, configuracoes sociais, colecionadores demo, posts, reacoes, follows e matches.

Hoje esses repositorios usam `localStorage`. A ideia e manter a mesma interface e trocar a implementacao por chamadas HTTP quando houver backend.

Chaves principais de `localStorage`:

- `viniloteca.collection.v1`: discos cadastrados pelo usuario.
- `viniloteca.collection.backups.v1`: backups locais da colecao.
- `viniloteca.profile.v1`: perfil legado para compatibilidade.
- `groova.socialState.v1`: estado social consolidado.
- `viniloteca.socialFeed.v1`: feed legado para compatibilidade.
- `viniloteca.following.v1`: follows legados para compatibilidade.
- `groova.wishlist.v1`: radar/wishlist.
- `groova.recommendationFeedback.v1`: feedback das recomendacoes.
- `viniloteca.coverCache.v1`: cache local de capas.

Endpoints conceituais para uma futura API:

- `GET /profile`
- `PUT /profile`
- `GET /feed`
- `POST /posts`
- `POST /posts/:id/reactions`
- `GET /collectors/matches`
- `GET /albums/:id/social`
- `POST /follows`
- `GET /compare/:collectorId`

Para migrar para backend, mantenha as assinaturas dos repositorios e substitua apenas o corpo das funcoes de persistencia. A colecao deve ser migrada com backup antes de qualquer sincronizacao remota.

## Observacoes importantes

- O app depende do CDN do Lucide para renderizar icones. Se esse CDN ficar indisponivel, o app continua carregando, mas os icones podem nao aparecer.
- A atualizacao de novidades usa feeds externos e proxy publico; se uma fonte bloquear a requisicao, o app mantem a selecao salva/local.
- Como os dados ficam em `localStorage`, publicar o site nao cria login nem banco de dados compartilhado entre usuarios.
- A preparacao para uma camada futura de IA esta documentada em `docs/ai-recommendation-context.md`. Hoje ela apenas monta um payload local; nao chama API externa nem usa chave de API.
