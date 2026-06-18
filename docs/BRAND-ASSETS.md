# Assets de marca gerados

Catálogo dos assets visuais gerados para a Fiore (artes, cards OG, mockups e imagens
editoriais). Para assets SVG, a **fonte editável é o SVG** em `assets/brand/`; o arquivo
raster (JPG/PNG) é só a exportação final. Para editar, mexa no SVG e re-exporte.

Paleta e tipografia oficiais: ver [BRAND.md](BRAND.md). Resumo: forest `#24281D`,
sand `#F4F2E8`, cream `#FDFFF7`, olive `#5E6440`, sage `#A7AE84`, leaf `#858E5E`,
estrela `#F2C94C`. Fonte **Poppins** (com fallback de sistema na renderização).

## Catálogo

| Asset | Fonte (SVG editável) | Exportação usada | Onde aparece |
|---|---|---|---|
| Arte da Copa ("vamos desafiar você") | `assets/brand/copa-desafio.svg` (= `assets/images/copa-desafio.svg`) | `assets/images/copa-desafio.png` (1080×1350) | posts/stories; o banner da home é recriado em HTML/CSS |
| Card OG de /gestantes | `assets/brand/og-gestantes.svg` | `assets/images/og-gestantes.jpg` (1200×630) | `og:image`/`twitter:image` de `gestantes.html` |
| Mockup do app Mirae | `assets/brand/mirae-app.svg` | `assets/images/mirae-app.jpg` (523×800) | seção "Tecnologia" da home |
| PDF "Guia da Gestante Ativa" | `assets/lead-magnet/guia-gestante-ativa-bauru.html` | `assets/guia-gestante-ativa-bauru.pdf` | lead magnet (ver [LEAD-MAGNET.md](LEAD-MAGNET.md)) |
| Foto editorial de gestante no Pilates | gerada por IA, não representa aluna real | `assets/images/gestante-pilates-fiore.jpg` + WebP e 480w | páginas e blocos voltados a gestantes |

## Foto editorial de gestante

Asset gerado para reduzir repetição de fotos do espaço enquanto a sessão de fotos com
gestantes reais segue pendente no roadmap. Não deve ser usado como prova social ou como
registro de atendimento real.

Prompt-base: foto editorial realista de uma gestante adulta fazendo Pilates pré-natal
suave em estúdio boutique, luz natural, tons creme e sálvia, rosto não identificável,
sem logo, sem texto, sem equipamento hospitalar e sem pose arriscada.

## Como regerar um raster a partir do SVG

Exportação **com tamanho exato** (recomendado) usa o Chrome headless. Envolva o SVG
num HTML de margem zero e tire um screenshot do tamanho do canvas:

```sh
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
W=1200; H=630; SVG=assets/brand/og-gestantes.svg; OUT=assets/images/og-gestantes.jpg
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
