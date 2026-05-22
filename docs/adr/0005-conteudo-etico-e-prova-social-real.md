# ADR 0005 — Conteúdo ético (gestantes) e prova social real

- **Status:** Aceito
- **Data:** 2026-05-22

## Contexto

A Fiore atua na saúde da mulher e gestação. Promessas médicas e avaliações falsas são
antiéticas e arriscadas (legalmente e para reputação/SEO — o Google penaliza markup de
review falso). O cliente foi explícito: **não inventar avaliações nem fazer promessas**.

## Decisão

**Linguagem ética para gestantes.** Evitar promessas de resultado; usar formulações como
"pode ajudar", "contribui", "com acompanhamento adequado", "respeitando cada fase".
Incluir o aviso recorrente: *"As aulas não substituem orientação médica. Inicie com a
liberação do seu obstetra."*

**Prova social apenas real.** Os depoimentos usados são trechos de **avaliações públicas
reais** (já presentes no site antigo / perfil do Google), com nomes preservados e
marcados como "avaliações públicas de alunas". Não criamos depoimentos.

**Sem nota/contagem fabricada.** Em vez de um número falso, mostramos 5 estrelas + link
"Avaliações reais no Google" para o perfil. O schema `AggregateRating` fica **fora** até
o cliente fornecer a **nota média e o número real** de avaliações — aí ativamos o
display numérico e o markup correspondente.

## Consequências

- ✅ Conformidade ética/legal e proteção da reputação.
- ✅ Confiança real, sem risco de penalização por dados estruturados falsos.
- ⚠️ Pendência com o cliente: fornecer nota e nº de avaliações do Google para ativar
  `AggregateRating` (ver [ASSETS-NEEDED.md](../ASSETS-NEEDED.md)).
