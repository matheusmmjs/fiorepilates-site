# Especificação do Site — Fiore Pilates

## Objetivo

Tornar o site da Fiore uma referência premium em Pilates para gestantes e cuidado
feminino em Bauru. Deve transmitir: *"aqui eu vou ser cuidada de verdade."*

Metas mensuráveis (proxies):
- Aumentar contatos qualificados via **WhatsApp** (avaliação inicial / gestantes / dúvidas).
- Rankear localmente para "Pilates em Bauru" e "Pilates para gestantes em Bauru".
- Lighthouse alto (Performance/SEO/Best Practices/Acessibilidade), mobile-first.

## Stack

HTML estático puro + CSS próprio (`assets/css/fiore.css`) + JS mínimo
(`assets/js/fiore.js`). Fontes auto-hospedadas. Deploy estático na Vercel.
Sem build/framework — ver [ADR 0001](adr/0001-stack-html-estatico.md).

## Páginas

| Rota | Arquivo | Objetivo |
|------|---------|----------|
| `/` | `index.html` | Home premium, visão geral + conversão |
| `/gestantes` | `gestantes.html` | SEO + conversão para gestantes (diferencial nº1) |

URLs limpas (`cleanUrls` na Vercel) e domínio apex sem www — ver [ADR 0009](adr/0009-urls-canonicas-dominio-apex-clean-urls.md).

## Estrutura da Home

1. **Header** fixo (nav + CTA "Agendar avaliação") + menu mobile fullscreen.
2. **Hero** — tagline, lead, CTAs (avaliação / sou gestante), imagem real do espaço, selo.
3. **Barra de prova social** — +300 alunas, +30% gestantes, 5★ Google, 100% individualizado.
4. **Bloco gestantes** (`#gestantes`) — destaque máximo, leva à página dedicada.
5. **Benefícios** do Pilates (cards).
6. **Serviços** (`#servicos`) — gestantes, saúde da mulher, dores/postura, idosos/reabilitação.
7. **Sobre** (`#sobre`) — história da Raquel + "ecossistema de cuidado".
8. **Programa Florescer** (`#florescer`) — 4 pilares (seção escura).
9. **Tecnologia & cuidado** (`#tecnologia`) — tecnologia acolhedora, humanizada.
10. **Metodologia** (`#metodo`) — 4 passos (avaliação → plano → evolução → reavaliação).
11. **Depoimentos** (`#depoimentos`) — avaliações reais + link Google.
12. **Eventos / presença local** (`#eventos`).
13. **FAQ** (`#faq`) — com `FAQPage` schema.
14. **Mapa & contato** (`#contato`) — endereço, WhatsApp, horário, redes, mapa embed.
15. **CTA final** — "Aqui, você vai ser cuidada de verdade".
16. **Footer** completo + WhatsApp flutuante + barra de ação fixa (mobile).

## Conversão (CTAs)

CTA primário: **Agendar avaliação inicial**. Secundários por intenção: *Sou gestante*,
*Conhecer o espaço*, *Tirar dúvidas*, *Quero o Florescer*. Todos abrem **WhatsApp com
mensagem pré-preenchida** (`wa.me/5514996598955?text=...`).
WhatsApp flutuante em todas as páginas + barra fixa no mobile (Agendar / Ligar).

## Requisitos não-funcionais

- **Mobile-first**, tipografia fluida (`clamp`), alvos de toque ≥44px.
- **Performance:** preload de fontes, `fetchpriority` no hero, `lazy` nas demais, sem JS pesado.
- **Acessibilidade:** HTML semântico, `aria-*` corretos, foco visível, skip-link, contraste.
- **SEO:** ver [ADR 0004](adr/0004-seo-tecnico-dados-estruturados.md) e [CONTENT-SEO.md](CONTENT-SEO.md).
- **Não quebrar o deploy** da Vercel; manter NAP consistente.

## Pendências

Mídias e dados reais do cliente — ver [ASSETS-NEEDED.md](ASSETS-NEEDED.md).
