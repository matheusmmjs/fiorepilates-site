# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Scope

Este arquivo descreve o **site público da clínica** (`index.html`, `gestantes.html`,
páginas de serviço, `florescer.html`, `eventos.html`, `guia-gestante.html`). O repo
também guarda docs internos de estratégia do Grupo Fiore e da unidade Tech (ver
`CLAUDE.md`), que **não têm interface e ficam fora do escopo de design**.

## Stack

HTML/CSS estático puro, sem framework nem build, deploy na Vercel. Não introduzir
build sem reabrir o [ADR 0001](docs/adr/0001-stack-html-estatico.md). Design system em
`assets/css/fiore.css` (tokens no `:root` + componentes por classe). JS só em
`assets/js/fiore.js`. Clean URLs, domínio apex `fiorepilates.com.br` sem www
([ADR 0009](docs/adr/0009-urls-canonicas-dominio-apex-clean-urls.md)).

## Users

- **Primária:** gestante em Bauru e região procurando Pilates seguro e acolhedor para a
  gravidez. Chega pelo Google ("pilates gestante bauru"), Instagram, indicação de
  obstetra/doula ou boca a boca. Quer saber se é seguro, quando começar, quanto custa, e
  falar rápido com alguém pelo WhatsApp.
- **Secundárias:** mulher no pós-parto ou cuidando da saúde da mulher (fisioterapia
  pélvica, dores, postura, bem-estar); pessoa idosa ou em reabilitação; obstetras e
  doulas de Bauru como parceiros de indicação.

## Product Purpose

Site institucional premium e mobile-first que transmite a sensação-alvo **"aqui eu vou
ser cuidada de verdade"**, com SEO local forte e alta conversão para o WhatsApp. Sucesso
= a visitante toca em **"Agendar avaliação inicial"** e chega no WhatsApp com a mensagem
certa por intenção; secundariamente, ser citado por buscadores e assistentes de IA em
consultas locais (ver [docs/AEO-GEO.md](docs/AEO-GEO.md)).

## Positioning

Quatro diferenças que um concorrente não copiaria com verdade, e que todo trabalho
futuro deve preservar:

1. **Especialização real em gestantes.** Fisioterapeuta especializada, aula
   individualizada e adaptada a cada trimestre, do pré-natal ao pós-parto. Não é
   "Pilates que também atende gestante".
2. **Tecnologia própria (Mirae).** App próprio de acompanhamento da aluna (evolução,
   alerta proativo de aluna sumida), feito pela unidade Tech do grupo. Cuidado somado a
   tecnologia. O Mirae **não é vendido no site da clínica**, só fortalece a marca
   ([ADR 0015](docs/adr/0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)).
3. **Ecossistema de cuidado (Programa Florescer).** Pilates, fisioterapia pélvica e
   terapias manuais integrados num só plano, montado na avaliação inicial.
4. **Acolhimento como método.** Ambiente, voz humana, linguagem ética sem promessa
   médica, prova social só real. O nome "Fiore" (flor, em italiano) vem do jardim da avó
   da fundadora.

## Operating Context

- **Conversão pelo WhatsApp** (`wa.me/5514996598955`) com mensagens pré-preenchidas e
  URL-encoded por intenção (tabela em [docs/CONTENT-SEO.md](docs/CONTENT-SEO.md)).
- **Avaliação inicial paga** é a porta de entrada (para gestante: R$ 150, presencial,
  com anamnese e testes, análise em PDF, valor abatido no plano). Cada modalidade tem o
  seu valor; o site só divulga o da gestante.
- **Não há aula experimental.** A experiência começa na avaliação inicial.
- Header, footer, WhatsApp flutuante e barra mobile são **duplicados** entre as páginas;
  ao editar um, replicar em todos.
- Analytics: GA4 (`G-GN6B6NJNKL`, evento `whatsapp_click` por seção de CTA) e Microsoft
  Clarity.
- Presença de apoio: Instagram `@pilatesfiore`, TikTok, Facebook, matéria na TV TEM
  (`/eventos`), Perfil da Empresa no Google (5,0 · 45 avaliações).

## Capabilities and Constraints

- Páginas 100% estáticas, sem estado de servidor. Interações leves em `fiore.js`
  (menu mobile, reveal on scroll, FAQ `<details>`, tracking de CTA).
- Fonte **Poppins** auto-hospedada em `assets/fonts/`. Adicionar peso = novo `@font-face`
  + arquivo. Não reintroduzir Fraunces/Inter
  ([ADR 0007](docs/adr/0007-fidelidade-manual-marca-poppins.md)).
- Não reintroduzir Bootstrap nem bibliotecas de animação
  ([ADR 0002](docs/adr/0002-remover-bootstrap-design-system-proprio.md)).
- Vídeos auto-hospedados H.264 ([ADR 0010](docs/adr/0010-videos-autohospedados-h264.md)).
- JSON-LD em todas as páginas (`HealthAndBeautyBusiness` + `Physiotherapy` com `@id`
  único na home; `Service` + `BreadcrumbList` + `FAQPage` nas demais). Ver
  [ADR 0004](docs/adr/0004-seo-tecnico-dados-estruturados.md) e
  [ADR 0019](docs/adr/0019-aeo-geo-otimizacao-para-busca-generativa.md).
- Pendente de produto: página `/privacidade` cobrindo GA4 e Clarity (ROADMAP 2.11).

## Brand Commitments

- **Voz humana, sem travessão.** Nunca usar travessão (—) nem meia-risca (–) como
  pontuação de frase em qualquer texto visível, `<title>`, metas, OG, JSON-LD, `alt` ou
  PDF. Usar vírgula, ponto, "e"/"que" ou "|" em títulos. Hífen de palavra composta é
  normal. Ver [ADR 0011](docs/adr/0011-voz-humana-sem-travessoes.md).
- **Enxuto, limpo, elegante e simples.** Copy e UI curtas; cortar ~30% do rascunho; não
  listar tudo que um serviço inclui.
- **Linguagem ética com gestantes**, sem promessa médica: "pode ajudar", "contribui",
  "com acompanhamento adequado", "respeitando cada fase", mais o aviso "Inicie sempre com
  a liberação do seu médico". Ver [ADR 0005](docs/adr/0005-conteudo-etico-e-prova-social-real.md).
- **Prova social só real.** Nunca inventar avaliações, números ou depoimentos.
  `AggregateRating` só com nota e nº reais do Google.
- **NAP idêntico** em site, Google Perfil da Empresa, Instagram e Facebook.
- Marca base no manual interno: paleta sage/forest/cream/gold, Poppins, símbolo da folha.
  Ver [docs/BRAND.md](docs/BRAND.md) e [docs/brand-manual.md](docs/brand-manual.md).

## Evidence on Hand

- **Real:** nota 5,0 com 45 avaliações no Google; 6 depoimentos reais de alunas na home
  (trechos de avaliações públicas); matéria na TV TEM (cobertura em `/eventos`); vídeo
  real do app Mirae e depoimento real da equipe sobre o alerta de aluna sumida; fotos
  reais do espaço em `assets/images/espaco-*.jpg` e `pilates-aula.jpg`.
- **Não fabricar:** avaliações, notas, números de alunas, e **fotos de gestantes reais
  em aula** (ainda não existem; a home usa foto do espaço no lugar). Pendências de mídia
  e dados em [docs/ASSETS-NEEDED.md](docs/ASSETS-NEEDED.md).

## Product Principles

1. Linguagem ética com gestantes, sem promessa médica.
2. Prova social só real, nunca inventar avaliações ou números.
3. O Mirae fortalece a marca; não é vendido no site da clínica (B2C).
4. NAP idêntico em site, GBP e redes.
5. Nada de mídia paga sem conversão instrumentada.
6. Manter o site enxuto: só o que dá pra manter vivo (ex.: página de campanha some quando
   a campanha acaba).

## Accessibility & Inclusion

- Público sensível (gestantes): clareza, acolhimento e zero alarmismo no tom.
- Skip-link para o conteúdo e `aria-*` na navegação já presentes; manter em qualquer
  página nova.
- Alvos de toque confortáveis no mobile; a barra fixa de CTA no rodapé mobile não pode
  cobrir conteúdo essencial.
