# ADR 0006 — Tipografia: Fraunces (display) + Inter (texto), auto-hospedadas

- **Status:** Aceito
- **Data:** 2026-05-22

## Contexto

A estética da marca é "delicada, suave, elegante, sofisticada, acolhedora" (PDF interno).
A Inter (já presente) é excelente para texto/UI, mas é uma sans neutra — falta o caráter
editorial e humano para os títulos de um site premium de bem-estar/maternidade.

## Decisão

- **Display/títulos:** **Fraunces** — serifa "old-style" quente e suave, com ótica
  variável, transmitindo elegância e acolhimento.
- **Texto/UI:** **Inter** (mantida).
- **Auto-hospedagem** das duas (woff2 em `assets/fonts/`), seguindo o padrão que já
  existia para a Inter. Fraunces é fonte variável: um único arquivo cobre os pesos
  300–600 (latin) + um para latin-ext (acentos do português). `font-display: swap` e
  `preload` dos arquivos críticos para o LCP.

## Consequências

- ✅ Performance e privacidade (sem requisições ao Google Fonts em runtime).
- ✅ Identidade tipográfica premium e coerente com a marca.
- ⚠️ Pesos da Inter reduzidos ao que o site usa (300/400/500/700); demais arquivos
  foram removidos. Ao usar um novo peso, adicionar o `@font-face` e o arquivo.
