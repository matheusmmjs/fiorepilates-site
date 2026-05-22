# ADR 0007 — Fidelidade ao manual da marca: Poppins, logo oficial, sem dourado

- **Status:** Aceito
- **Data:** 2026-05-22
- **Substitui:** [ADR 0006](0006-tipografia-fraunces-inter.md)

## Contexto

Após a primeira versão do redesign, o cliente enviou os **arquivos oficiais da marca**:
o manual **"BRAND & DESIGN - FIORE.pdf"** (42 páginas), os **vetores do logo** (SVG) e a
**tipografia oficial**. O manual define com clareza a identidade visual — que diverge de
algumas escolhas iniciais (feitas sem esse material).

Pontos do manual:
- **Tipografia: Poppins.** "Limpa, suave e moderna… formas arredondadas e bem definidas…
  sem perder a sofisticação." Ou seja, uma **sans geométrica**, explicitamente **não** uma serifa.
- **Cores:** escala de **verdes + creme + quase-preto**. A página "Cores" **não inclui
  dourado** (o "dourado" citado no deck de estratégia não aparece no manual visual).
- **Logo:** símbolo (folha/flor) + wordmark "fiore" geométrico, com lockups e versões de cor
  por fundo. Há SVGs oficiais.
- **Tom de voz:** humano, acolhedor, claro e leve — **não** técnico/seco (o manual dá
  exemplos de "como falamos / como não falamos").

## Decisão

Alinhar o site ao manual:
1. **Tipografia → Poppins** (auto-hospedada, pesos 200–600, latin + latin-ext), substituindo
   Fraunces + Inter. Remoção dos arquivos dessas fontes.
2. **Logo oficial:** usar os SVGs enviados — lockup horizontal no header (wordmark escuro
   em fundo claro), variante de wordmark creme (`fiore-logo-light.svg`) no rodapé escuro, e
   símbolo (`fiore-simbolo.svg`) em favicon e detalhes. Removidos os SVGs antigos.
3. **Sem dourado:** o accent passa a ser um **olive** escuro (`#5E6440`) para texto/linhas
   (contraste AA) e **sálvia clara** (`#A7AE84`) sobre fundos escuros. Tokens `--gold/--gold-soft`
   mantiveram o **nome** (para não reescrever usos), mas agora têm **valores verdes**.
4. **Tom:** copy revisada para o registro humano/acolhedor do manual.

## Consequências

- ✅ Identidade do site fiel ao manual oficial.
- ✅ Tipografia única (Poppins) simplifica o sistema.
- ⚠️ Os nomes de token `--gold/--gold-soft` agora contêm verdes — pode confundir; renomear
  no futuro se houver tempo (custo baixo, cosmético).
- ⚠️ Se o cliente quiser de fato um **dourado** (como no deck de estratégia), basta ajustar
  os tokens — decisão fácil de reverter.
