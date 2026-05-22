# CLAUDE.md — contexto para agentes

Site institucional do **Fiore Pilates** (Bauru/SP) — Pilates especializado em
**gestantes** e saúde da mulher. Objetivo: site premium, mobile-first, SEO local forte,
alta conversão para WhatsApp. Sensação-alvo: *"aqui eu vou ser cuidada de verdade."*

## Antes de mexer, leia

- `docs/SPEC.md` — o que o site é e exige.
- `docs/BRAND.md` — marca, paleta, voz (base do PDF interno).
- `docs/CONTENT-SEO.md` — conteúdo, CTAs, SEO.
- `docs/adr/` — **o porquê** das decisões. Ao decidir algo relevante, adicione um ADR.

## Stack e regras

- **HTML estático puro**, sem framework/build. Páginas: `index.html`, `gestantes.html`.
  Deploy estático na Vercel. Não introduzir build sem reabrir [ADR 0001](docs/adr/0001-stack-html-estatico.md).
- Estilo: design system em `assets/css/fiore.css` (tokens no `:root` + componentes por classe).
  **Não** reintroduzir Bootstrap. JS só em `assets/js/fiore.js`.
- **Header/footer/WhatsApp flutuante/barra mobile são duplicados** entre páginas —
  ao editar, replicar em todas.
- Fonte auto-hospedada **Poppins** (oficial) em `assets/fonts/`. Adicionar peso = novo
  `@font-face` + arquivo. Não reintroduzir Fraunces/Inter (ver [ADR 0007](docs/adr/0007-fidelidade-manual-marca-poppins.md)).

## Conteúdo (cuidado)

- **Gestantes:** linguagem ética, sem promessa médica ("pode ajudar", "contribui",
  "com acompanhamento adequado", "respeitando cada fase") + aviso de não substituir
  orientação médica. Ver [ADR 0005](docs/adr/0005-conteudo-etico-e-prova-social-real.md).
- **Prova social só real.** Não inventar avaliações. `AggregateRating` só com nota/nº
  reais do Google (pendente — ver `docs/ASSETS-NEEDED.md`).
- **NAP** (R. Baltazar Rodrigues, 4-82, Jardim Planalto, Bauru/SP · (14) 99659-8955)
  deve ser idêntico em site, JSON-LD, Google e redes.

## CTAs / WhatsApp

Número: `wa.me/5514996598955`. CTA primário: "Agendar avaliação inicial". Mensagens
pré-preenchidas (URL-encoded) por intenção — ver tabela em `docs/CONTENT-SEO.md`.

## Verificação

Servir estático (`python3 -m http.server`) e conferir: render das 2 páginas, links e
CTAs do WhatsApp, layout mobile, mapa, JSON-LD válido. Não quebrar o deploy.
