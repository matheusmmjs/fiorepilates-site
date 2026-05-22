# ADR 0003 — Página dedicada de gestantes + bloco na home

- **Status:** Aceito
- **Data:** 2026-05-22

## Contexto

O **maior diferencial** da Fiore é o Pilates para gestantes (posicionamento do PDF
interno: "os profissionais que mais cuidam de gestantes em Bauru"). No site antigo,
isso aparecia diluído em 3 cards. Queremos rankear para termos como
"Pilates para gestantes em Bauru" e converter esse público com conteúdo dedicado —
**sem** parecer que atendemos apenas gestantes.

## Decisão

Criar **`gestantes.html`**, página dedicada com URL própria, focada em SEO e conversão
para gestantes (segurança, acolhimento, como o Pilates pode ajudar, Programa Florescer,
como começar, depoimentos de gestantes, FAQ específico, CTA).

Na **home**, manter um **bloco de destaque** de gestantes (`#gestantes`) que leva à
página dedicada, e manter uma seção de **serviços** que mostra os demais públicos
(saúde da mulher, dores/postura, idosos/reabilitação) — equilibrando o posicionamento.

## Consequências

- ✅ URL dedicada com `<h1>`, conteúdo e dados estruturados (`Service`, `FAQPage`,
  `BreadcrumbList`) voltados ao termo-alvo.
- ✅ Home comunica amplitude (todos os públicos) sem perder o foco em gestantes.
- ⚠️ Conteúdo de gestantes existe em dois lugares (bloco + página): manter a mensagem
  coerente entre eles.
