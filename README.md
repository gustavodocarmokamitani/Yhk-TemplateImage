# Yhk Template Image

Template de site para álbum de fotos de viagem (Next.js). Tem três lugares
diferentes na página onde entram imagens, e cada um funciona de um jeito. Por
padrão o repositório não vem com fotos reais — hero marquee e story section já
vêm com fotos genéricas do Unsplash como placeholder, e a galeria principal cai
automaticamente num fallback parecido quando não há álbum importado.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Onde entram as fotos

### 1. Galeria principal (a grade de fotos abaixo dos filtros)

Vem de um álbum importado, não de arquivos soltos no repositório:

```bash
node scripts/ingest-album.mjs     # converte as fotos (Takeout) em JPEG/MP4 + manifest.json
node scripts/geocode-manifest.mjs # opcional: adiciona a cidade de cada foto
```

Isso lê `ALBUM_SOURCE_DIR` e grava em `ALBUM_MEDIA_DIR` (configure os dois no
`.env.local`, veja `.env.example`). Em desenvolvimento local isso já é
suficiente para a galeria aparecer. Para publicar em produção (Vercel), as
fotos precisam subir para um bucket R2 — o passo a passo completo está no
[`README-R2.md`](./README-R2.md).

Enquanto não houver um álbum importado, a galeria mostra fotos genéricas do
Unsplash automaticamente (`FALLBACK_PHOTOS` em `src/app/page.tsx`) — não
precisa editar nada para isso, é só o comportamento até existir um manifest
real.

### 2. Hero marquee (as duas fileiras de fotos correndo no topo)

Lista fixa em `src/data/hero-tiles.ts`, sem depender do álbum importado. Hoje
está preenchida com fotos genéricas do Unsplash. Para trocar por fotos suas:

1. Recorte as imagens e coloque em `public/hero-tiles/`.
2. Edite `heroTiles` em `src/data/hero-tiles.ts`, apontando `src` para
   `/hero-tiles/<arquivo>` (em vez da URL do Unsplash) e ajustando `width`/
   `height` para a proporção real de cada imagem.

### 3. Story section (os capítulos com texto de um lado e fotos do outro)

Capítulos ficam em `src/data/story.ts`, mas cada um referencia `photoIds` que
precisam existir no manifest do álbum (ou seja, depende do passo 1 já ter
sido feito). Enquanto `storyChapters` estiver vazio — como vem por padrão —
a página usa dois capítulos de exemplo com fotos genéricas do Unsplash
(`FALLBACK_STORY_CHAPTERS` em `src/app/page.tsx`), só para a seção não ficar
em branco.

Para usar fotos reais:

1. Importe o álbum (passo 1) e, se quiser, rode `geocode-manifest.mjs`.
2. Abra `src/data/album-manifest.json` (ou o `manifest.json` gerado
   localmente) e anote os `id` das fotos que quer usar em cada capítulo.
3. Preencha `storyChapters` em `src/data/story.ts` com título, texto e os
   `photoIds` escolhidos. Assim que houver ao menos um capítulo com fotos
   válidas, o fallback genérico some sozinho.

## Publicando em produção

Fotos e vídeos não cabem no bundle da Vercel — o fluxo de publicação para o
Cloudflare R2 está detalhado em [`README-R2.md`](./README-R2.md).
