# Como publicar um evento na página /eventos

> Fluxo combinado (2026-06-12): **quem escreve não precisa ser dev** — manda o material
> pronto para o Matheus, que publica via PR. Cada evento é um bloco HTML padronizado
> em `eventos.html` (template comentado no topo da lista de eventos).

## 1. O que quem escreve precisa mandar (WhatsApp/e-mail para o Matheus)

- **Título do evento** (curto — ex.: "Café da manhã com as gestantes · 3ª edição").
- **Mês/ano** (vira a etiqueta do bloco).
- **Texto de 2 a 4 frases** — tom da Fiore: acolhedor, leve, sem promessa médica
  (ver [BRAND.md](BRAND.md) e [ADR 0005](adr/0005-conteudo-etico-e-prova-social-real.md)).
- **1 foto** (de preferência vertical, boa luz) **ou** 1 vídeo curto.
  ⚠️ Com **autorização de imagem** de quem aparece.
- Opcional: 1 depoimento de participante (nome + frase).

## 2. O que o Matheus faz (5 minutos)

1. **Foto:** salvar em `assets/images/eventos/` como `aaaa-mm-nome-curto.jpg`.
   Otimizar antes (618px de largura basta):
   `npx sharp-cli -i original.jpg -o assets/images/eventos/2026-06-exemplo.jpg -q 78 resize 618`
   **Vídeo:** H.264 em `assets/videos/` (se vier HEVC do iPhone:
   `ffmpeg -i in.mov -vf "scale=720:-2" -c:v libx264 -crf 26 -pix_fmt yuv420p -c:a aac -movflags +faststart out.mp4`).
2. Em `eventos.html`, copiar o **bloco TEMPLATE** (comentário no topo da lista) e colar
   logo após o comentário — **mais recente primeiro**.
3. Preencher etiqueta, título, texto e o caminho da mídia (com `alt` descritivo).
4. Alternar o fundo (`section` ↔ `section bg-sand`) e a direção (`split` ↔ `split reverse`)
   em relação ao bloco anterior, para o zigue-zague visual.
5. Atualizar o `lastmod` de `/eventos` no `sitemap.xml`.
6. Conferir local (`npx serve`) → commit → PR → merge.

## 3. Regras de conteúdo

- Prova social **só real**; fotos **só com autorização**.
- NAP e tom de voz da marca sempre; nada de promessa de resultado clínico.
- Depoimentos de eventos podem usar o bloco `.reviews`/`.review` (copiar da home).

## Futuro

Quando o volume crescer (ex.: 10+ eventos), reavaliar gerar a página a partir de
Markdown/dados (reabre [ADR 0001](adr/0001-stack-html-estatico.md) — Astro), para que
quem escreve publique sem mexer em HTML.
