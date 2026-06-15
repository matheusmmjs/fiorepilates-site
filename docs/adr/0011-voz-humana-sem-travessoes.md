# ADR 0011 — Voz humana: sem travessões (—) no conteúdo

Data: 2026-06-14 · Status: aceito

## Contexto

O travessão (—) usado como conector de frase virou um "sinal" de texto gerado por IA.
O cliente sentiu que isso deixava a escrita do site com cara de robô e pediu uma voz
mais humana em **todas** as páginas.

## Decisão

Não usar travessão (—) nem meia-risca (–) como pontuação de frase no conteúdo voltado
ao público (texto visível, `<title>`, meta description, Open Graph/Twitter, JSON-LD,
`alt`, e também no PDF do lead magnet).

No lugar, usar pontuação natural conforme o caso:

- vírgula para apostos e pausas curtas;
- ponto final para separar ideias;
- "e", "que", "como", parênteses ou dois-pontos quando encaixar melhor;
- em títulos, usar "|" como separador (ex.: `Página | Fiore Pilates`).

Hífen em palavras compostas continua normal (pós-parto, pré-natal, bem-estar, 4-82).

## Como manter

- Antes de publicar conteúdo, conferir: `grep -n "—\|–" *.html`.
- O `·` (ponto médio) é permitido em rótulos curtos (rodapé, eyebrows), mas não como
  muleta no lugar do travessão em frases.
- Escrever como uma pessoa falaria: frases curtas, calorosas, benefício antes de
  característica (ver [CONTENT-SEO.md](../CONTENT-SEO.md) → Tom de voz).

## Consequências

Texto mais humano e alinhado à marca. Exige atenção de qualquer agente/colaborador ao
gerar conteúdo novo — por isso a regra também está em `CLAUDE.md`/`AGENTS.md`.
