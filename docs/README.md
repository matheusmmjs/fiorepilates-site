# Documentação — Fiore Pilates

Documentação do site da Fiore: o que foi feito, **por que** e como manter.

## Índice

- **[SPEC.md](SPEC.md)** — especificação do site (objetivo, stack, estrutura, requisitos).
- **[BRAND.md](BRAND.md)** — identidade da marca aplicada no site: propósito, paleta, voz.
- **[brand-manual.md](brand-manual.md)** — transcrição completa do manual oficial "BRAND & DESIGN" (para não perder nada).
- **[CONTENT-SEO.md](CONTENT-SEO.md)** — estratégia de conteúdo, CTAs e SEO (keywords, dados estruturados).
- **[ASSETS-NEEDED.md](ASSETS-NEEDED.md)** — mídias e dados que ainda precisamos do cliente.
- **[ROADMAP.md](ROADMAP.md)** — plano de crescimento digital priorizado (fases, status, quem faz o quê).
- **[BOLAO.md](BOLAO.md)** — runbook da campanha Bolão da Copa 2026 (mecânica, form, apuração).
- **[DESAFIOS.md](DESAFIOS.md)** — runbook do programa contínuo de Desafios Fiore (página `/desafios`).
- **[COMO-PUBLICAR-EVENTO.md](COMO-PUBLICAR-EVENTO.md)** — fluxo para adicionar eventos na página `/eventos`.

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
- [0012 · Página temporária de aniversário para tablet na recepção](adr/0012-pagina-temporaria-aniversario-tablet.md)
- [0013 · Grupo Fiore como branded house com 3 unidades](adr/0013-grupo-fiore-arquitetura-de-marca.md)
- [0014 · Fronteira de repositórios: fiorepilates-site e mirae-local](adr/0014-fronteira-repos-fiorepilates-site-e-mirae-local.md)
- [0015 · Unidade Tech: oferta comercial e regra de domínio](adr/0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)

## Como adicionar um ADR

Crie `adr/NNNN-titulo.md` com: Status, Data, Contexto, Decisão, Consequências.
Numere em sequência e linke aqui.
