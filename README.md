# Fiore Pilates

Site institucional do **Fiore Pilates** — estúdio de Pilates em Bauru/SP especializado
em **gestantes** e saúde da mulher. *Floresça com leveza e bem-estar.*

🌐 Produção: https://www.fiorepilates.com.br · Deploy: Vercel (estático, a partir do GitHub).

## Stack

- **HTML estático puro** (sem framework/build) — `index.html`, `gestantes.html`.
- **CSS** próprio: `assets/css/fiore.css` (design system da marca).
- **JS** mínimo: `assets/js/fiore.js` (nav, scroll, reveal, FAQ).
- **Fontes** auto-hospedadas: Fraunces (títulos) + Inter (texto) em `assets/fonts/`.
- **SEO:** `robots.txt`, `sitemap.xml`, `site.webmanifest`, JSON-LD nas páginas, `vercel.json`.

> Por que esta stack e estas decisões? Veja **[docs/](docs/README.md)** (SPEC, BRAND,
> CONTENT-SEO e os ADRs explicam o **porquê** de cada escolha).

## Rodar localmente

É um site estático — qualquer servidor HTTP serve. Ex.:

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

> Use um servidor (não abra o arquivo via `file://`) para que caminhos e o mapa
> funcionem corretamente.

## Estrutura

```
index.html            # Home premium
gestantes.html        # Página dedicada (Pilates para gestantes)
robots.txt · sitemap.xml · site.webmanifest · vercel.json
assets/
  css/fiore.css       # design system (tokens + componentes)
  js/fiore.js         # interações
  fonts/              # Fraunces + Inter (woff2/woff)
  images/             # logos, favicons, foto do espaço, og-image
docs/                 # SPEC, BRAND, CONTENT-SEO, ASSETS-NEEDED, ADRs
```

## Manutenção (importante)

- Header, footer, WhatsApp flutuante e barra mobile são **repetidos** em cada `.html`.
  Ao alterar, atualize em **todas** as páginas (ver [ADR 0001](docs/adr/0001-stack-html-estatico.md)).
- Cores/tipografia/espaçamentos vêm dos **tokens** no topo de `assets/css/fiore.css`.
- Mantenha o **NAP** (nome, endereço, telefone) idêntico aqui, no Google e nas redes.
- Conteúdo de gestantes: **linguagem ética** (ver [ADR 0005](docs/adr/0005-conteudo-etico-e-prova-social-real.md)).

## Pendências

Mídias e dados reais do cliente: ver **[docs/ASSETS-NEEDED.md](docs/ASSETS-NEEDED.md)**.

## Contato

WhatsApp: (14) 99659-8955 · Instagram: [@pilatesfiore](https://www.instagram.com/pilatesfiore/)
