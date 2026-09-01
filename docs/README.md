# Documentação — Fiore Pilates

Documentação do site da Fiore: o que foi feito, **por que** e como manter.

## Índice

- **[SPEC.md](SPEC.md)** — especificação do site (objetivo, stack, estrutura, requisitos).
- **[BRAND.md](BRAND.md)** — identidade da marca: propósito, posicionamento, paleta, tipografia, voz. Consolida os dois materiais oficiais (apresentação de estratégia + manual "BRAND & DESIGN").
- **[CONTENT-SEO.md](CONTENT-SEO.md)** — estratégia de conteúdo, CTAs e SEO (keywords, dados estruturados).
- **[ASSETS-NEEDED.md](ASSETS-NEEDED.md)** — mídias e dados que ainda precisamos do cliente.
- **[ROADMAP.md](ROADMAP.md)** — roadmap único do ecossistema: Parte 1 crescimento digital da clínica (fases, status, Bolão da Copa 2026), Parte 2 frente comercial da Fiore Labs.
- **[BENCHMARKING.md](BENCHMARKING.md)** — comparação com concorrentes de Bauru e referência dos EUA (dados reais via Apify/Firecrawl), atualizar a cada poucos meses.
- **[COMO-PUBLICAR-EVENTO.md](COMO-PUBLICAR-EVENTO.md)** — fluxo para adicionar eventos na página `/eventos`.

## Ecossistema Fiore e Fiore Labs

Hub de estratégia do ecossistema e da camada comercial da Fiore Labs, além do site da clínica:

- **[company/GRUPO-FIORE.md](company/GRUPO-FIORE.md)**: arquitetura de marca (Fiore Pilates + Fiore Labs), os 2 mundos de cliente e a fronteira de repositórios.
- **[tech/OFERTA.md](tech/OFERTA.md)**: oferta comercial da Fiore Labs (SKUs, ICP, posicionamento "Mirae by Fiore").
- Roadmap comercial da Fiore Labs: Parte 2 do [ROADMAP.md](ROADMAP.md).

## Decisões de arquitetura (ADRs)

Registros do **porquê** de cada decisão importante:

- [0001 · Manter HTML estático puro](adr/0001-stack-html-estatico.md)
- [0002 · Remover Bootstrap, design system próprio](adr/0002-remover-bootstrap-design-system-proprio.md)
- [0003 · Página dedicada de gestantes + bloco na home](adr/0003-pagina-dedicada-gestantes.md)
- [0004 · SEO técnico e dados estruturados](adr/0004-seo-tecnico-dados-estruturados.md)
- [0005 · Conteúdo ético e prova social real](adr/0005-conteudo-etico-e-prova-social-real.md)
- [0006 · Tipografia Fraunces + Inter](adr/0006-tipografia-fraunces-inter.md) *(substituído pelo 0007)*
- [0007 · Fidelidade ao manual: Poppins, logo oficial, sem dourado](adr/0007-fidelidade-manual-marca-poppins.md)
- [0008 · Mídia: vídeos (HEVC) e fotos da equipe](adr/0008-midia-videos-fotos.md)
- [0009 · URLs canônicas: domínio apex + clean URLs](adr/0009-urls-canonicas-dominio-apex-clean-urls.md)
- [0010 · Vídeos auto-hospedados em H.264 (transitório)](adr/0010-videos-autohospedados-h264.md)
- [0011 · Voz humana, sem travessões](adr/0011-voz-humana-sem-travessoes.md)
- [0012 · Página temporária de aniversário para tablet na recepção](adr/0012-pagina-temporaria-aniversario-tablet.md) *(encerrada, página removida em 2026-08-25)*
- [0013 · Grupo Fiore como branded house com 3 unidades](adr/0013-grupo-fiore-arquitetura-de-marca.md) *(substituído pelo 0020)*
- [0014 · Fronteira de repositórios: fiorepilates-site e mirae-local](adr/0014-fronteira-repos-fiorepilates-site-e-mirae-local.md)
- [0015 · Oferta comercial da Fiore Labs e regra de domínio](adr/0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)
- [0016 · Linktree substituído por link único da bio para o site](adr/0016-linktree-substituido-por-link-unico-para-o-site.md)
- [0017 · Florescer Empresas: linha B2B2C de Pilates na gestação](adr/0017-florescer-empresas-modelo-b2b2c.md)
- [0020 · Ecossistema Fiore: Fiore Pilates e Fiore Labs](adr/0020-ecossistema-fiore-e-fiore-labs.md) *(substitui o 0013; 0018 e 0019 em outro branch)*

## Como adicionar um ADR

Crie `adr/NNNN-titulo.md` com: Status, Data, Contexto, Decisão, Consequências.
Numere em sequência e linke aqui.
