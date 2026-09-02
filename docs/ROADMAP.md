# ROADMAP — Ecossistema Fiore

> Roadmap único do ecossistema. **Parte 1** é o crescimento digital da **Fiore
> Pilates** (clínica); **Parte 2** é a frente comercial da **Fiore Labs** (software,
> consultoria, experimentos). Ver [ADR 0020](adr/0020-ecossistema-fiore-e-fiore-labs.md).
>
> Plano vivo. Atualizar o status a cada entrega. Quem faz: **[M]** = Matheus/Raquel ·
> **[C]** = Claude (agente).
>
> **Fluxo de trabalho:** cada bloco vira branch + PR → verificação no preview →
> merge → check aqui. Decisões relevantes viram ADR (`docs/adr/`). Dados/mídias
> pendentes da clínica ficam em [ASSETS-NEEDED.md](ASSETS-NEEDED.md).

## Legenda

✅ feito · 🔄 em andamento · ⏳ aguardando dependência · ⬜ não iniciado

---

# Parte 1 — Fiore Pilates (clínica)

> Priorizado por **impacto × esforço**, baseado na auditoria de 2026-06-11 (SEO local,
> CRO, marca, mídia paga).

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
| 0.9 | GA4: `whatsapp_click` como **evento principal** (Admin → Exibição de dados → Eventos principais → Novo evento principal) | M | ✅ verificado 2026-09-02 (evento firando e marcado como principal) |

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

Registro histórico. A campanha e a infra no site (página `/bolao`, banner, links,
tracking, CSS) foram removidas em 2026-07-27; a página `/desafios` (item B.1b) saiu
depois, em 2026-08-25. As linhas ⬜ abaixo ficaram congeladas como estavam no
encerramento, não são pendências abertas.

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
| B.7 | Encerrar: anunciar vencedor(a), entregar prêmio, remover banner/página | M+C | ✅ (C) 2026-07-27 — infra do site (banner, links de footer/menu, página `/bolao`, tracking, CSS) removida. Anúncio do vencedor e entrega do prêmio: tarefa offline do M, fora do escopo do site |

## Fase 2 — Autoridade e superfície SEO (até 30 dias)

| # | Item | Quem | Status |
|---|------|------|--------|
| 2.1 | 4 páginas de serviço: `/pilates-pos-parto`, `/fisioterapia-pelvica`, `/pilates-idosos-reabilitacao`, `/saude-da-mulher` (Service + BreadcrumbList + FAQ schema, linguagem ética) | C | ✅ 2026-06-14 · **Atualizado 2026-09-01:** `/saude-da-mulher` fundida em `/fisioterapia-pelvica` com 301 ([ADR 0018](adr/0018-unificacao-fisioterapia-pelvica-e-saude-da-mulher.md)) |
| 2.2 | Página `/florescer` dedicada (destino de anúncios e stories; o link fixo da bio aponta para a home, [ADR 0016](adr/0016-linktree-substituido-por-link-unico-para-o-site.md)) | C | ✅ 2026-06-14 |
| 2.3 | Seção Tecnologia reescrita com o Mirae (sem vender o produto) | C+M | ✅ 2026-06-14 — mockup da marca do app (SVG sem dado real) + menção e link; print real do app fica opcional. Atualizado em 2026-08-28: mockup trocado por vídeo real (`assets/videos/mirae-tour.mp4`) e depoimento real da equipe sobre o alerta proativo de aluna sumida; o SVG do mockup foi removido do repo |
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
| 3.8 | Microsoft Clarity (heatmaps + gravação de sessão) para decidir v2 da home | C | 🔄 2026-08-29 — snippet do projeto `y9u625nnoh` no `<head>` de todas as páginas, ao lado do GA4, mergeado no PR #11 e no ar. Falta: coletar dados e integrar ao GA4 pra filtrar gravações por origem de tráfego |

## Fase 4 — AEO/GEO: aparecer nas respostas de IA (ChatGPT, Gemini, Perplexity)

> Playbook completo e passo a passo em [AEO-GEO.md](AEO-GEO.md) · porquê em [ADR 0019](adr/0019-aeo-geo-otimizacao-para-busca-generativa.md).

| # | Item | Quem | Status |
|---|------|------|--------|
| 4.1 | Schema do negócio enriquecido: `@type` + `Physiotherapy`, `@id` único, `knowsAbout`, `image[]`, `slogan`, `makesOffer` com URL; `provider` das páginas de serviço via `@id` | C | ✅ 2026-09-01 |
| 4.2 | FAQ expandido com perguntas de intenção real (preço, 1º trimestre, liberação médica, individual vs grupo, "só gestantes?", "dói?"), resposta direta na 1ª frase | C | ✅ 2026-09-01 |
| 4.3 | `/llms.txt` mínimo + `robots.txt` liberando robôs de IA | C | ✅ 2026-09-01 |
| 4.4 | **Bing Webmaster Tools** (destrava ChatGPT Search e Copilot): importado do Search Console via Chrome MCP; `fiorepilates.com.br` + `mirae.fiorepilates.com.br` cadastrados, sitemap importado (processando) | C+M | ✅ 2026-09-02 |
| 4.5 | **GBP completo:** categorias, serviços com descrição, 15–20 fotos, descrição de 750 caracteres, atributos. Q&A saiu (descontinuado pelo Google). Ver checklist no AEO-GEO.md | M | ✅ 2026-09-02 — nome/categoria/marcador/CEP/descrição/serviços/fotos feitos. "Aulas on-line" e autoavaliação: dono optou por manter (risco registrado) |
| 4.6 | Auditoria do GBP (Chrome MCP): achados e punch-list em [AEO-GEO.md](AEO-GEO.md). CEP 17012-621 alinhado (confirmado pelo dono). Reverificação 2026-09-02: punch-list aplicado | C (auditoria) + M (GBP) | ✅ 2026-09-02 |
| 4.7 | Cadastro em diretórios/portais: Doctoralia (perfil da Raquel), guia de Bauru, portal de saúde da mulher; garantir URL pública da matéria da TV TEM | M | ⬜ |
| 4.8 | Medição mensal: perguntar a ChatGPT/Gemini/Perplexity pelas 3 consultas-alvo e anotar se a Fiore aparece | M | ⬜ recorrente |
| 4.9 | Revisão GSC + GA4 (2026-09-02): tudo saudável (sem ação manual/segurança, sitemap processado, structured data ok, GA4 coletando, `whatsapp_click` = conversão). Detalhes em [AEO-GEO.md](AEO-GEO.md). `fiorepilatesbr@gmail.com` adicionado ao GSC (Total) e ao GA4 (Administrador) | C | ✅ 2026-09-02 |

## Cadências contínuas (não têm "fim")

- **GBP:** 1 post + 3 fotos/semana; responder 100% das avaliações citando o serviço.
- **AEO/GEO:** toda página nova segue o checklist de schema do [AEO-GEO.md](AEO-GEO.md); teste mensal das 3 consultas-alvo nas IAs.
- **Instagram:** meta de 4–5 posts/semana (2 Reels educativos, 1 prova social, 1 bastidor, 1 CTA) segue valendo, mas o real em 2026-08-26 é ~0,7 posts/semana (56 posts nos últimos ~18 meses) — bem abaixo de concorrentes de Bauru como Espaço Bambu (223 posts) e Instituto Renove (1.461 posts). Ver [BENCHMARKING.md](BENCHMARKING.md).
- **Avaliações:** acompanhar fluxo NPS→Google no Mirae; pedir review pós-sessão sistematicamente (Fiore tem 45 reviews com nota 5.0, Quality Pilates tem 132 com a mesma nota — é volume, não qualidade, que falta. Ver [BENCHMARKING.md](BENCHMARKING.md)).
- **Métricas (mensal):** conversões `whatsapp_click` por seção (GA4), posição no Local Pack para "pilates gestantes bauru" e "pilates bauru", páginas indexadas (Search Console).
- **Benchmarking:** revisitar [BENCHMARKING.md](BENCHMARKING.md) a cada poucos meses pra medir se a distância de concorrentes locais/EUA aumentou ou diminuiu.

## Princípios da clínica (não negociar)

1. **Linguagem ética com gestantes** — sem promessa médica ([ADR 0005](adr/0005-conteudo-etico-e-prova-social-real.md)).
2. **Prova social só real** — nunca inventar avaliações ou números.
3. **Mirae fortalece a marca, não é vendido no site da clínica (B2C).** A venda B2B
   acontece nas superfícies da Fiore Labs (oferta em [tech/OFERTA.md](tech/OFERTA.md)).
   Nota: o Mirae fica em `mirae.fiorepilates.com.br` enquanto a Fiore for o único
   tenant; o gatilho para domínio próprio é o 2º tenant pagante
   ([ADR 0015](adr/0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)).
4. **NAP idêntico** em site, GBP e redes.
5. **Nada de Ads sem conversão instrumentada** (por isso 0.9 vem antes de 3.1/3.2).

---

# Parte 2 — Fiore Labs (software, consultoria, experimentos)

> Frente comercial da Fiore Labs: consultoria, primeiros casos e escala do SaaS.
> **Não** é roadmap de produto do Mirae; esse vive no repositório `mirae-local`.
> Criado em 2026-07-07. Oferta detalhada em [tech/OFERTA.md](tech/OFERTA.md).

## Rock atual (definido 2026-08-19)

A Fiore Labs tem 4 frentes de produto rodando ao mesmo tempo, gente demais pra
1 pessoa (Matheus) e agentes de IA sustentarem em paralelo sem travar. Rock de 90 dias
(até ~nov/2026), decidido em sessão de planejamento com Claude:

- **Mirae (Rock #1).** Já maduro (produção interna desde mai/2026), nunca vendido pra
  fora. Foco: converter em piloto externo pago (gatilho da Fase L2, abaixo).
- **Baru** (white-label Nextcloud, repo `nextcloud-demo`, sem domínio próprio ainda) e
  **Firme** (SaaS de gestão, repo `firme`, piloto pago Paulo/marcenaria, R$490
  implantação + R$39,90/mês, provisório) seguem em movimento próprio, não competem
  pelo Rock e só pedem resposta quando o cliente pede algo.
- **Pastelaria** (repo `pastelari`, "fornadas" a R$2.900/unidade, provisório) e o site
  institucional `fiorelabs.com.br` (portfólio GitHub + WhatsApp + Stripe Payment Link
  pra Baru/Firme/mentoria) ficam **depois** do Rock, sem prazo fechado.
- Motivo declarado: pressão de caixa agora. Caixa de curto prazo vem de Baru (demo
  19/08, apresentada pelo Joab) e Firme (resposta do Paulo até 21/08), não do Mirae.
  O ciclo de venda de SaaS é mais longo, por isso ele é aposta estruturada, não a
  fonte de caixa imediata.

## Fase L1: consultoria como cunha (caixa agora)

| # | Item | Status |
|---|------|--------|
| L1.1 | Formalizar a oferta de consultoria/implantação (escopo padrão, proposta modelo) | ⬜ |
| L1.2 | Fechar os primeiros projetos de consultoria com clínicas/estúdios de Pilates | ⬜ |
| L1.3 | Documentar o processo de implantação a partir dos primeiros projetos | ⬜ |

Objetivo da fase: gerar caixa com projeto fechado e aprender o processo de
implantação com clientes reais, usando a Fiore como operação de referência.

## Fase L2: primeiros casos do SaaS

| # | Item | Status |
|---|------|--------|
| L2.1 | Converter projetos de consultoria em tenants do Mirae SaaS | ⬜ |
| L2.2 | Primeiro tenant pagante além da Fiore | ⬜ |
| L2.3 | Empacotar o case "Mirae by Fiore" (a clínica como cliente-zero) | ⬜ |
| L2.4 | **Gatilho de domínio:** com o 2º tenant pagante, reabrir a decisão de domínio próprio do Mirae ([ADR 0015](adr/0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)) | ⏳ L2.2 |

Objetivo da fase: provar que o Mirae vende para fora da Fiore e transformar a
clínica em case.

## Fase L3: escala do SaaS

| # | Item | Status |
|---|------|--------|
| L3.1 | Receita recorrente como centro da unidade; consultoria vira acelerador de onboarding | ⬜ |
| L3.2 | Canais de aquisição B2B recorrentes (indicação entre clínicas, conteúdo, parcerias) | ⬜ |

## Princípios da Fiore Labs (não negociar)

1. **Venda vertical:** clínicas e estúdios de Pilates são a cunha de tração, mesmo com
   nomes de módulo horizontais (ver [GRUPO-FIORE.md](company/GRUPO-FIORE.md)).
2. **O Mirae não é vendido no site da clínica:** a venda B2B acontece nas superfícies
   da Fiore Labs (princípio 3 da Parte 1).
3. **Preço canônico do Mirae SaaS fica na landing:** nenhum doc deste repo replica os
   números publicados de assinatura do Mirae (mensal, anual, trial), que mudam e são
   voltados ao cliente. Não impede anotar termos de negócio interno (piloto, projeto
   fechado) de produtos sem landing canônica, marcados como provisórios.
4. **Produto se decide no `mirae-local`:** aqui só entra o que é comercial.
