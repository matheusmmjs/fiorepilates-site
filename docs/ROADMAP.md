# ROADMAP — Crescimento digital da Fiore

> Plano vivo, priorizado por **impacto × esforço**, baseado na auditoria de 2026-06-11
> (SEO local, CRO, marca, mídia paga). Atualizar o status aqui a cada entrega.
> Quem faz: **[M]** = Matheus/Raquel · **[C]** = Claude (agente).
>
> **Fluxo de trabalho:** cada bloco vira branch + PR → verificação no preview →
> merge → check aqui. Decisões relevantes viram ADR (`docs/adr/`). Dados/mídias
> pendentes ficam em [ASSETS-NEEDED.md](ASSETS-NEEDED.md). Tasks detalhadas na
> task list da sessão do Claude.

## Legenda

✅ feito · 🔄 em andamento · ⏳ aguardando dependência · ⬜ não iniciado

---

## Fase 0 — Fundação técnica (concluída em 2026-06-12)

| # | Item | Quem | Status |
|---|------|------|--------|
| 0.1 | Domínio canônico apex + www → 308 ([ADR 0009](adr/0009-urls-canonicas-dominio-apex-clean-urls.md)) | M | ✅ verificado em produção |
| 0.2 | Clean URLs (`/gestantes`) + canonical/sitemap/links | C | ✅ no [PR #2](https://github.com/matheusmmjs/fiorepilates-site/pull/2) |
| 0.3 | Eventos GA4 `whatsapp_click`/`phone_click` | C | ✅ no PR #2 |
| 0.4 | Favicon raiz (1,2 KB) + limpeza de 2,6 MB de imagens | C | ✅ no PR #2 |
| 0.5 | Hero WebP + `srcset` (239 KB → 74 KB mobile) | C | ✅ no PR #2 |
| 0.6 | Search Console verificado + sitemap enviado/processado (2 páginas) | M | ✅ 2026-05-27 |
| 0.7 | GA4 ↔ Search Console vinculados | M | ✅ |
| 0.8 | **Mergear PR #2** | M | 🔄 aberto, pronto |
| 0.9 | GA4: `whatsapp_click` como **evento principal** (Admin → Exibição de dados → Eventos principais → Novo evento principal) | M | ⬜ |

## Fase 1 — Quick wins de conteúdo (semanas 1–2)

| # | Item | Quem | Status |
|---|------|------|--------|
| 1.1 | ~~Vídeos no YouTube~~ → transcodificados localmente (H.264) e auto-hospedados ([ADR 0010](adr/0010-videos-autohospedados-h264.md)); migração p/ YouTube vira issue | C | ✅ 2026-06-12 |
| 1.2 | Vídeos no site: Florescer (#florescer), café da manhã (#eventos), massoterapia (nova seção #toque) | C | ✅ 2026-06-12 |
| 1.3 | Enviar: link curto de avaliação GBP + URL Maps, lat/long, foto da Andressa (CREFITO dispensado pelo cliente) | M | ✅ 2026-06-14 |
| 1.4 | Aplicar no site: `geo` no schema, `sameAs` GBP/Maps, link direto de avaliações, CNPJ/razão social, TikTok/Facebook, app Mirae | C | ✅ 2026-06-14 |
| 1.5 | OG image própria para /gestantes | C | ✅ 2026-06-14 (card 1200×630 da marca, `og-gestantes.jpg`; foto-paisagem real fica opcional p/ depois) |
| 1.6 | Página `/eventos` (comunidade): café da manhã + Unimed, com template e runbook [COMO-PUBLICAR-EVENTO.md](COMO-PUBLICAR-EVENTO.md) | C | ✅ 2026-06-12 |
| 1.7 | Enviar fotos reais dos eventos (Unimed, cafés) + depoimentos de participantes para enriquecer `/eventos` | M | ⬜ |
| 1.8 | Navegação: `/eventos` e `/desafios` no header de todas as páginas (antes só no rodapé) + `/bolao` no menu mobile; fotos reais do estúdio; equipe (Jamile out, pasta `team/`); arte da Copa | C | ✅ 2026-06-14 |

## Campanha — Bolão da Copa 2026 (junho–julho) · [BOLAO.md](BOLAO.md)

| # | Item | Quem | Status |
|---|------|------|--------|
| B.1 | Página `/bolao` + banner grande na home + links de footer + evento GA4 `bolao_click` | C | ✅ 2026-06-12 |
| B.1b | **Desafios Fiore** virou programa permanente: página `/desafios` (desafio da vez: Copa 2026) + runbook [DESAFIOS.md](DESAFIOS.md) | C | ✅ 2026-06-12 |
| B.1c | Pontuação simplificada: placar cravado = 1 pt (desempate: campeão → data de envio) | C | ✅ 2026-06-12 |
| B.1d | Estúdio: montar os 3 envelopes (iniciante/intermediário/avançado) com exercícios seguros e fotogênicos | M | ⬜ |
| B.2 | Criar Google Form (estrutura no BOLAO.md) e mandar o iframe de embed | M | ✅ 2026-06-12 |
| B.3 | Embedar o form na página (sai o fallback de WhatsApp) | C | ✅ 2026-06-12 |
| B.4 | Lançar: WhatsApp para alunas + stories/post no Instagram | M | ⬜ 13/06 de manhã |
| B.5 | Apurar ranking + divulgar após cada jogo do Brasil (13/06 · 19/06 · 24/06 · mata-mata) | M | ⬜ recorrente |
| B.6 | Convidar leads (não-alunas com consentimento) para avaliação após a fase de grupos | M | ⬜ ~25/06 |
| B.7 | Encerrar: anunciar vencedor(a), entregar prêmio, remover banner/página | M+C | ⬜ pós-final (19/07) |

## Fase 2 — Autoridade e superfície SEO (até 30 dias)

| # | Item | Quem | Status |
|---|------|------|--------|
| 2.1 | 4 páginas de serviço: `/pilates-pos-parto`, `/fisioterapia-pelvica`, `/pilates-idosos-reabilitacao`, `/saude-da-mulher` (Service + BreadcrumbList + FAQ schema, linguagem ética) | C | ✅ 2026-06-14 |
| 2.2 | Página `/florescer` dedicada (destino de anúncios e bio do Instagram) | C | ✅ 2026-06-14 |
| 2.3 | Seção Tecnologia reescrita com prints do Mirae (sem vender o produto) | C+M | 🔄 menção + link ao Mirae no ar; faltam os prints do app (M) |
| 2.4 | Sessão de fotos profissional: gestantes reais em aula (autorização!), equipe, aparelhos, 2–3 fotos paisagem | M | ⬜ |
| 2.5 | GBP completo: serviços cadastrados, categorias, Q&A semeado, 1 post + 3 fotos/semana | M | ⬜ |
| 2.6 | Motor de avaliações: NPS do Mirae → link de avaliação Google (meta: 8–10/mês) | M | ⏳ 1.3 |
| 2.7 | Pixel Meta + públicos (visitantes /gestantes, engajadores IG) | C+M | ⬜ |
| 2.8 | Lead magnet "Guia da Gestante Ativa em Bauru" (PDF via WhatsApp) — PDF + página `/guia-gestante` + captação por WhatsApp + promo em `/gestantes` ([LEAD-MAGNET.md](LEAD-MAGNET.md)) | C+M | ✅ (C) 2026-06-14 — falta o cliente revisar o conteúdo e divulgar |

## Fase 3 — Aquisição e escala (até 90 dias)

| # | Item | Quem | Status |
|---|------|------|--------|
| 3.1 | Meta Ads: campanha de mensagens (gestantes Bauru +10 km) + remarketing | M (C: estrutura) | ⏳ 2.7 |
| 3.2 | Google Ads: pesquisa gestantes/pilates/marca, raio 8–10 km, extensão de local | M (C: estrutura) | ⏳ 0.9 + ~15 conversões/mês |
| 3.3 | Blog estático (reabrir [ADR 0001](adr/0001-stack-html-estatico.md) → Astro) — 2 artigos/mês long-tail | C | ⬜ |
| 3.4 | Parcerias: 10 obstetras/doulas de Bauru + Curso de Gestantes Unimed | M | ⬜ |
| 3.5 | PR local: pauta no Social Bauru (história da marca + tecnologia própria) | M | ⬜ |
| 3.6 | Café da manhã com gestantes como funil mensal (inscrição rastreada) | M | ⬜ |
| 3.7 | Programa de indicação operado pelo Mirae | M | ⬜ |
| 3.8 | Microsoft Clarity (heatmaps) para decidir v2 da home | C | ⬜ |

## Cadências contínuas (não têm "fim")

- **GBP:** 1 post + 3 fotos/semana; responder 100% das avaliações citando o serviço.
- **Instagram:** 4–5 posts/semana (2 Reels educativos, 1 prova social, 1 bastidor, 1 CTA) — estratégia completa na auditoria.
- **Avaliações:** acompanhar fluxo NPS→Google no Mirae.
- **Métricas (mensal):** conversões `whatsapp_click` por seção (GA4), posição no Local Pack para "pilates gestantes bauru" e "pilates bauru", páginas indexadas (Search Console).

## Princípios (não negociar)

1. **Linguagem ética com gestantes** — sem promessa médica ([ADR 0005](adr/0005-conteudo-etico-e-prova-social-real.md)).
2. **Prova social só real** — nunca inventar avaliações ou números.
3. **Mirae fortalece a marca, não é vendido no site da Fiore.**
4. **NAP idêntico** em site, GBP e redes.
5. **Nada de Ads sem conversão instrumentada** (por isso 0.9 vem antes de 3.1/3.2).
