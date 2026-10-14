# Assets de marca gerados

Catálogo dos assets visuais gerados para a Fiore (artes, cards OG, mockups e imagens
editoriais). Para assets SVG, a **fonte editável é o SVG** em `assets/brand/`; o arquivo
raster (JPG/PNG) é só a exportação final. Para editar, mexa no SVG e re-exporte.

Os **cards OG** (1200×630) têm como fonte editável um HTML por página em `assets/brand/og/`
(layout dividido: painel quase-preto ou névoa com logo oficial, rótulo, título em Poppins Light
e foto à direita). Para regerar todos: `sh assets/brand/og/render.sh` (aceita slugs como
argumento; usa Chrome headless e Pillow, JPG progressivo abaixo de 105 KB). A Poppins vem do
pacote da designer em `~/Downloads/Fiore Pilates 2/Tipografia/Poppins/` (caminho `file://` no
`@font-face` de cada HTML; ajuste se mudar de máquina).

Paleta, tipografia e logo são **premissa**: ver o padrão em [BRAND.md](BRAND.md) e o
[ADR 0023](adr/0023-padrao-de-marca-premissa.md). Resumo: `#21231E #5C633E #868F5E #B2BC7D
#CCD4A1 #ECF0CF` + as do logo `#24281D #858E5E #181917 #FDFFF7`; fonte **Poppins**. Artes
antigas com bege ou amarelo devem ser ajustadas na próxima edição.

## Catálogo

| Asset | Fonte (SVG editável) | Exportação usada | Onde aparece |
|---|---|---|---|
| Card OG Home ("Floresça com leveza.", foto `v2/hero-recanto-tall.jpg`) | `assets/brand/og/og-image.html` | `assets/images/og-image.jpg` (1200×630, < 105 KB) | `og:image`/`twitter:image` de `index.html` |
| Card OG /gestantes ("Pilates para gestantes em Bauru", foto `v2/poster-loop-gestante-reformer.jpg`) | `assets/brand/og/og-gestantes.html` | `assets/images/og-gestantes.jpg` (1200×630, < 105 KB) | `og:image`/`twitter:image` de `gestantes.html` |
| Card OG /florescer ("Programa Florescer", foto `poster-florescer.jpg`) | `assets/brand/og/og-florescer.html` | `assets/images/og-florescer.jpg` (1200×630, < 105 KB) | `og:image`/`twitter:image` de `florescer.html` |
| Card OG /pilates-pos-parto ("Pilates pós-parto em Bauru", foto `v2/recanto-sofa.jpg`) | `assets/brand/og/og-pos-parto.html` | `assets/images/og-pos-parto.jpg` (1200×630, < 105 KB) | `og:image`/`twitter:image` de `pilates-pos-parto.html` |
| Card OG /fisioterapia-pelvica ("Fisioterapia pélvica em Bauru", foto `v2/detalhe-bolas.jpg`) | `assets/brand/og/og-fisioterapia-pelvica.html` | `assets/images/og-fisioterapia-pelvica.jpg` (1200×630, < 105 KB) | `og:image`/`twitter:image` de `fisioterapia-pelvica.html` |
| Card OG /pilates-idosos-reabilitacao ("Pilates para idosos e reabilitação", foto `v2/cadillac.jpg`) | `assets/brand/og/og-idosos-reabilitacao.html` | `assets/images/og-idosos-reabilitacao.jpg` (1200×630, < 105 KB) | `og:image`/`twitter:image` de `pilates-idosos-reabilitacao.html` |
| Card OG /eventos ("Eventos e comunidade", foto `eventos/2026-02-cafe-gestantes-2a-edicao.jpg`) | `assets/brand/og/og-eventos.html` | `assets/images/og-eventos.jpg` (1200×630, < 105 KB) | `og:image`/`twitter:image` de `eventos.html` |
| Card OG /guia-gestante ("Guia da Gestante Ativa", foto `v2/raquel-retrato.jpg`) | `assets/brand/og/og-guia-gestante.html` | `assets/images/og-guia-gestante.jpg` (1200×630, < 105 KB) | `og:image`/`twitter:image` de `guia-gestante.html` |
| Card OG /conteudos ("Guias de saúde da mulher", foto `v2/jardim.jpg`) | `assets/brand/og/og-conteudos.html` | `assets/images/og-conteudos.jpg` (1200×630, < 105 KB) | `og:image`/`twitter:image` de página de conteúdos |
| PDF "Guia da Gestante Ativa" | `assets/lead-magnet/guia-gestante-ativa-bauru.html` | `assets/guia-gestante-ativa-bauru.pdf` | lead magnet (ver [LEAD-MAGNET.md](LEAD-MAGNET.md)) |
## Foto de gestante (removida)

A foto editorial gerada por IA (`gestante-pilates-fiore.*`) foi **removida do repo** em
2026-09-01: soava artificial e um revisor externo apontou. As páginas e blocos voltados
a gestantes voltaram a usar fotos reais do espaço (`pilates-aula.*`, `espaco-recanto.*`).
A foto de gestante real em aula continua pendente (sessão de fotos, ROADMAP 2.4); quando
existir, entra nos heróis de `index.html` (bloco #gestantes), `gestantes.html` e
`guia-gestante.html`.

## Como regerar um raster a partir do SVG

Para SVGs (os cards OG usam `render.sh`, acima), a exportação **com tamanho exato** usa o Chrome headless. Envolva o SVG
num HTML de margem zero e tire um screenshot do tamanho do canvas:

```sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
W=1200; H=630; SVG=assets/brand/<arte>.svg; OUT=assets/images/<arte>.jpg
printf '<!doctype html><meta charset="utf-8"><style>*{margin:0;padding:0}html,body{width:%spx;height:%spx;overflow:hidden}</style>' "$W" "$H" > /tmp/wrap.html
cat "$SVG" >> /tmp/wrap.html
"$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
  --window-size=$W,$H --screenshot=/tmp/shot.png "file:///tmp/wrap.html" 2>/dev/null
sips -s format jpeg -s formatOptions 84 -Z $W /tmp/shot.png --out "$OUT"
```

- `--force-device-scale-factor=2` gera em 2× (nítido em telas retina); o `sips -Z`
  no fim reduz para a largura final.
- Para PDF (o guia), trocar o screenshot por `--print-to-pdf` (ver [LEAD-MAGNET.md](LEAD-MAGNET.md)).
- Alternativa rápida sem tamanho exato: `qlmanage -t -s <larg> -o /tmp <arquivo>.svg`
  (bom para preview; o Chrome dá o tamanho certo).

## Convenções (não esquecer)

- **Sem dado real de aluna/paciente** em mockups (privacidade/LGPD). Usar nomes e
  números fictícios (ex.: "Marina", "12 aulas").
- **Sem travessão (—)** nos textos das artes (ver [ADR 0011](adr/0011-voz-humana-sem-travessoes.md)).
- Cores sempre da paleta da marca; Poppins como família de fonte.
- O Mirae **fortalece a marca, não é vendido** no site (mostrar pela ótica da aluna,
  não como produto à venda).
- Editou o SVG? Re-exporte o raster e confirme no preview antes de commitar.
