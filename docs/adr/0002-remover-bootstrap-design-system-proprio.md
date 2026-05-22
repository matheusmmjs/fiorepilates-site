# ADR 0002 — Remover Bootstrap e criar design system próprio

- **Status:** Aceito
- **Data:** 2026-05-22

## Contexto

O site herdou um tema **Bootstrap** (`assets/css/theme.css`, ~9.900 linhas) cujas
cores eram preto (`#151515`), cinza e **laranja** (`#fd7e14`). Isso **brigava com a
identidade da marca** (verde sálvia, verde profundo, creme e dourado — ver
[BRAND.md](../BRAND.md)). Manter o tema significaria sobrescrever centenas de regras
e ainda carregar CSS quase todo sem uso.

## Decisão

Substituir o Bootstrap por um **design system próprio e enxuto** em
`assets/css/fiore.css`, com:

- **Tokens** (CSS custom properties) para cores, tipografia, espaçamento, sombras e
  raios — fonte única de verdade da marca.
- **Componentes** reutilizáveis por classe: `.btn`, `.card`, `.eyebrow`, `.split`,
  `.pillars`, `.steps`, `.review`, `.faq`, `.wa-float`, etc.
- **Tipografia fluida** com `clamp()` (mobile-first, sem media queries por tamanho).
- JS próprio mínimo (`assets/js/fiore.js`) substituindo Bootstrap JS + AOS.

Arquivos removidos: `theme.css`, `theme.min.css`, `bootstrap.*`, `aos.*`.

## Consequências

- ✅ CSS específico da marca, leve e legível; performance e controle visual muito maiores.
- ✅ Sem dependências externas de UI.
- ⚠️ Não temos mais o grid/utilitários do Bootstrap; novos componentes seguem o padrão
  do `fiore.css` (documentado nele por seções comentadas).
