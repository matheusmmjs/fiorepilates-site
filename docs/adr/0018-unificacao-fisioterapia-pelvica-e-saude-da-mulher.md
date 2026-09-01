# ADR 0018 — Unificação de "Fisioterapia pélvica" e "Saúde da mulher" numa página só

Data: 2026-09-01 · Status: aceito

## Contexto

O site tinha duas páginas de serviço com proposta muito próxima:

- `/fisioterapia-pelvica` — cuidado com o assoalho pélvico na gestação, no pós-parto
  e na saúde da mulher.
- `/saude-da-mulher` — Pilates individualizado para força, postura, bem-estar e
  qualidade de vida em todas as fases.

Numa revisão de conteúdo (feedback externo enviado por WhatsApp, set/2026), a leitura
foi direta: "fisioterapia pélvica e saúde da mulher é a mesma coisa, unificar". As duas
páginas competiam entre si por atenção no menu de Serviços e por termos de busca
parecidos, sem um recorte claro para o visitante.

## Decisão

Unificar numa página só, mantida em **`/fisioterapia-pelvica`**:

- A URL `/fisioterapia-pelvica` sobrevive (é a busca local mais forte e específica,
  "fisioterapia pélvica Bauru"; slug com a palavra-chave).
- `/saude-da-mulher` passa a **redirect 301** para `/fisioterapia-pelvica`
  (`vercel.json`, incluindo `/saude-da-mulher.html`).
- `saude-da-mulher.html` foi removido do repo.
- A página unificada foi retitulada para "Fisioterapia pélvica e saúde da mulher" e
  absorveu o conteúdo da outra: hero, uma seção "Saúde da mulher, cuidar de você em
  todas as fases" com os 6 cards de benefício, e duas perguntas no FAQ (visível +
  JSON-LD). Nada de conteúdo útil se perdeu no merge.
- Menu não muda (as duas páginas nunca estiveram no `nav`, só nos cards de
  `/#servicos` e no rodapé). Card de serviço da home e coluna "Cuidados" do rodapé
  das 8 páginas passaram a um item único: "Fisioterapia pélvica e saúde da mulher".
- `sitemap.xml` perde a entrada `/saude-da-mulher`.

## Consequências

- Menos canibalização de SEO e uma mensagem mais clara no menu de Serviços.
- O 301 preserva a autoridade que `/saude-da-mulher` tiver acumulado. Acompanhar no
  Search Console a reindexação e eventuais 404 de links externos antigos.
- `docs/ROADMAP.md` (item 2.1) cita `/saude-da-mulher` como entrega histórica; fica
  como registro, sem efeito no site.
- Se no futuro "saúde da mulher" ganhar escopo próprio (ex.: linha de conteúdo, blog),
  reabrir esta decisão.
