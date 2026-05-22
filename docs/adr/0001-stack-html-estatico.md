# ADR 0001 — Manter site como HTML estático puro (sem framework)

- **Status:** Aceito
- **Data:** 2026-05-22
- **Decisores:** Equipe Fiore (cliente) + desenvolvimento

## Contexto

O site original era um único `index.html` com Bootstrap + AOS, servido estaticamente
na Vercel a partir do GitHub. Não havia build, framework nem `package.json`.

O objetivo do redesign é um site **premium, rápido, com SEO forte e alta conversão**,
com página dedicada de gestantes e ~12 seções na home. Avaliamos três caminhos:

1. **Migrar para Astro** — componentes reutilizáveis, otimização de imagem, ótimo SEO.
2. **Manter HTML estático puro** — zero mudança de stack, menor risco.
3. **Next.js** — poderoso, porém overkill para um site institucional.

## Decisão

**Manter HTML estático puro.** Decisão do cliente, priorizando: simplicidade,
risco zero de quebrar o deploy atual da Vercel e ausência de cadeia de build para manter.

Para compensar a falta de "componentes" de um framework, adotamos:
- Um **design system em CSS único** (`assets/css/fiore.css`) com tokens e classes
  reutilizáveis (ver [ADR 0002](0002-remover-bootstrap-design-system-proprio.md)).
- Markup de header/footer/CTA **repetido** entre as poucas páginas (`index.html`,
  `gestantes.html`). É um custo aceitável para 2–3 páginas e mantém todo o conteúdo
  no HTML (melhor para SEO do que injeção por JS).

## Consequências

- ✅ Deploy continua trivial (arquivos estáticos), sem CI/build.
- ✅ Performance máxima: zero JS de framework, zero hidratação.
- ⚠️ Header/footer duplicados manualmente entre páginas — ao alterar, atualizar em
  todas. Se o número de páginas crescer muito, reavaliar Astro (ver "Quando revisitar").
- ⚠️ Sem checagem automática de tipos/lint; a qualidade depende de revisão manual.

## Quando revisitar

Se o site passar de ~4 páginas, ou precisar de blog/CMS, reabrir a opção **Astro**
(mesma saída estática, mas com componentes e otimização de imagem nativa).
