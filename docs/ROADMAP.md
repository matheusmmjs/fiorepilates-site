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

## Campanha — Bolão da Copa 2026 (junho–julho, encerrada em 2026-07-27)

| # | Item | Quem | Status |
|---|------|------|--------|
| B.1 | Página `/bolao` + banner grande na home + links de footer + evento GA4 `bolao_click` | C | ✅ 2026-06-12 |
| B.1b | **Desafios Fiore** virou programa permanente: página `/desafios` (desafio da vez: Copa 2026) | C | ✅ 2026-06-12 → ❌ removido em 2026-08-25, decisão de manter o site enxuto (sem conteúdo pra manter vivo) |
| B.1c | Pontuação simplificada: placar cravado = 1 pt (desempate: campeão → data de envio) | C | ✅ 2026-06-12 |
| B.1d | Estúdio: montar os 3 envelopes (iniciante/intermediário/avançado) com exercícios seguros e fotogênicos | M | ⬜ |
| B.2 | Criar Google Form e mandar o iframe de embed | M | ✅ 2026-06-12 |
| B.3 | Embedar o form na página (sai o fallback de WhatsApp) | C | ✅ 2026-06-12 |
| B.4 | Lançar: WhatsApp para alunas + stories/post no Instagram | M | ⬜ 13/06 de manhã |
| B.5 | Apurar ranking + divulgar após cada jogo do Brasil (13/06 · 19/06 · 24/06 · mata-mata) | M | ⬜ recorrente |
| B.6 | Convidar leads (não-alunas com consentimento) para avaliação após a fase de grupos | M | ⬜ ~25/06 |
| B.7 | Encerrar: anunciar vencedor(a), entregar prêmio, remover banner/página | M+C | ✅ (C) 2026-07-27 — banner, links de footer/menu, página `/bolao`, tracking e CSS removidos; falta M anunciar vencedor(a) |

## Fase 2 — Autoridade e superfície SEO (até 30 dias)

| # | Item | Quem | Status |
|---|------|------|--------|
| 2.1 | 4 páginas de serviço: `/pilates-pos-parto`, `/fisioterapia-pelvica`, `/pilates-idosos-reabilitacao`, `/saude-da-mulher` (Service + BreadcrumbList + FAQ schema, linguagem ética) | C | ✅ 2026-06-14 |
| 2.2 | Página `/florescer` dedicada (destino de anúncios e stories; o link fixo da bio aponta para a home, [ADR 0016](adr/0016-linktree-substituido-por-link-unico-para-o-site.md)) | C | ✅ 2026-06-14 |
| 2.3 | Seção Tecnologia reescrita com o Mirae (sem vender o produto) | C+M | ✅ 2026-06-14 — mockup da marca do app (`assets/brand/mirae-app.svg`, sem dado real) + menção e link; print real do app fica opcional. Atualizado em 2026-08-28: mockup trocado por vídeo real (`assets/videos/mirae-tour.mp4`) e depoimento real da equipe sobre o alerta proativo de aluna sumida |
| 2.4 | Sessão de fotos profissional: gestantes reais em aula (autorização!), equipe, aparelhos, 2–3 fotos paisagem | M | ⬜ |
| 2.5 | GBP completo: serviços cadastrados, categorias, Q&A semeado, 1 post + 3 fotos/semana | M | ⬜ |
| 2.6 | Motor de avaliações: NPS do Mirae → link de avaliação Google (meta: 8–10/mês) | M | ⏳ 1.3 |
| 2.7 | Pixel Meta + públicos (visitantes /gestantes, engajadores IG) | C+M | ⬜ |
| 2.8 | Lead magnet "Guia da Gestante Ativa em Bauru" (PDF via WhatsApp) — PDF + página `/guia-gestante` + captação por WhatsApp + promo em `/gestantes` ([LEAD-MAGNET.md](LEAD-MAGNET.md)) | C+M | ✅ (C) 2026-06-18 — conteúdo inicial revisado, falta divulgar |
| 2.9 | Selo de convênios (Wellhub, TotalPass, Namu Pass) no rodapé das 9 páginas, linkando pras páginas reais de parceria (confirmadas por busca) em vez de menção solta em texto | C | ✅ 2026-08-29 |
| 2.10 | Migrar Linktree → link único da bio para a home com `utm_source=instagram&utm_medium=bio` ([ADR 0016](adr/0016-linktree-substituido-por-link-unico-para-o-site.md)) | M (C: ADR + auditoria) | ✅ (M) 2026-08-29 bio trocada; Linktree mantido no ar como órfão, decisão do dono |
| 2.11 | Página `/privacidade` cobrindo GA4 e Microsoft Clarity (o que é coletado, gravação de sessão, base legal, contato), link no rodapé das páginas. Público sensível (gestantes) e hoje o site não tem política nem aviso de cookies | C | ⬜ (levantado na review do PR #11) |

## Fase 3 — Aquisição e escala (até 90 dias)

| # | Item | Quem | Status |
|---|------|------|--------|
| 3.1 | Meta Ads: campanha de mensagens (gestantes Bauru +10 km) + remarketing | M (C: estrutura) | ⏳ 2.7 |
| 3.2 | Google Ads: pesquisa gestantes/pilates/marca, raio 8–10 km, extensão de local | M (C: estrutura) | ⏳ 0.9 + ~15 conversões/mês |
| 3.3 | Blog estático (reabrir [ADR 0001](adr/0001-stack-html-estatico.md) → Astro) — 2 artigos/mês long-tail | C | ⬜ |
| 3.4 | Parcerias: 10 obstetras/doulas de Bauru + Curso de Gestantes Unimed | M | ⬜ |
| 3.5 | PR local: pauta no Social Bauru (história da marca + tecnologia própria) | M | 🔄 2026-08-28 — saiu na TV TEM (não Social Bauru), cobertura publicada em `/eventos` + selo "Como visto na TV TEM" na home; ainda sem cobertura em veículo escrito local (JCNet e afins verificados em 2026-08-29, nada publicado, recheck em alguns dias) |
| 3.6 | Café da manhã com gestantes como funil mensal (inscrição rastreada) | M | ⬜ |
| 3.7 | Programa de indicação operado pelo Mirae | M | ⬜ |
| 3.8 | Microsoft Clarity (heatmaps + gravação de sessão) para decidir v2 da home | C | 🔄 2026-08-29 — snippet do projeto `y9u625nnoh` no `<head>` de todas as páginas, ao lado do GA4 (no PR, falta merge). Depois de coletar: integrar ao GA4 pra filtrar gravações por origem de tráfego |

## Cadências contínuas (não têm "fim")

- **GBP:** 1 post + 3 fotos/semana; responder 100% das avaliações citando o serviço.
- **Instagram:** meta de 4–5 posts/semana (2 Reels educativos, 1 prova social, 1 bastidor, 1 CTA) segue valendo, mas o real em 2026-08-26 é ~0,7 posts/semana (56 posts nos últimos ~18 meses) — bem abaixo de concorrentes de Bauru como Espaço Bambu (223 posts) e Instituto Renove (1.461 posts). Ver [BENCHMARKING.md](BENCHMARKING.md).
- **Avaliações:** acompanhar fluxo NPS→Google no Mirae; pedir review pós-sessão sistematicamente (Fiore tem 45 reviews com nota 5.0, Quality Pilates tem 132 com a mesma nota — é volume, não qualidade, que falta. Ver [BENCHMARKING.md](BENCHMARKING.md)).
- **Métricas (mensal):** conversões `whatsapp_click` por seção (GA4), posição no Local Pack para "pilates gestantes bauru" e "pilates bauru", páginas indexadas (Search Console).
- **Benchmarking:** revisitar [BENCHMARKING.md](BENCHMARKING.md) a cada poucos meses pra medir se a distância de concorrentes locais/EUA aumentou ou diminuiu.

## Princípios (não negociar)

1. **Linguagem ética com gestantes** — sem promessa médica ([ADR 0005](adr/0005-conteudo-etico-e-prova-social-real.md)).
2. **Prova social só real** — nunca inventar avaliações ou números.
3. **Mirae fortalece a marca, não é vendido no site da clínica (B2C).** A venda B2B
   acontece na landing do Mirae (oferta em [tech/OFERTA.md](tech/OFERTA.md)). Nota: o
   Mirae fica em `mirae.fiorepilates.com.br` enquanto a Fiore for o único tenant; o
   gatilho para domínio próprio é o 2º tenant pagante
   ([ADR 0015](adr/0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)).
4. **NAP idêntico** em site, GBP e redes.
5. **Nada de Ads sem conversão instrumentada** (por isso 0.9 vem antes de 3.1/3.2).
