# Estratégia de Conteúdo & SEO

## Posicionamento

Referência em **Pilates para gestantes em Bauru**, dentro de um cuidado mais amplo de
saúde da mulher, dores/postura, idosos e reabilitação. Forte em gestantes, **sem**
parecer que atende apenas gestantes.

## Palavras-chave (foco local — Bauru)

**Primárias:** Pilates em Bauru · Pilates para gestantes Bauru · Pilates gestante / pré-natal Bauru ·
estúdio de Pilates Bauru · clínica de Pilates em Bauru.
**Secundárias:** Pilates para dores · Pilates para postura · Pilates para idosos ·
fisioterapia pélvica Bauru · Pilates pós-parto.

Mapeamento: termos de gestante → `gestantes.html`; termos amplos → `index.html`.

## Tom de voz

Acolhedor, elegante, seguro, humano. Frases curtas. Benefício antes de característica.
Para gestantes, **linguagem ética** (ver [ADR 0005](adr/0005-conteudo-etico-e-prova-social-real.md)):
usar "pode ajudar", "contribui", "com acompanhamento adequado", "respeitando cada fase";
sempre o aviso de não substituir orientação médica.

**Sem travessão (—) nem meia-risca (–)** como pontuação de frase — soa a texto de IA.
Usar vírgula, ponto, "e"/"que" ou "|" em títulos. Hífen de palavra composta (pós-parto,
bem-estar) é normal. Ver [ADR 0011](adr/0011-voz-humana-sem-travessoes.md). Conferir antes
de publicar: `grep -n "—\|–" *.html`.

## Estratégia de CTA

| Intenção | Texto | Mensagem WhatsApp (pré-preenchida) |
|----------|-------|-------------------------------------|
| Avaliação | Agendar avaliação inicial | "Olá! Vim pelo site e gostaria de agendar uma avaliação inicial na Fiore." |
| Gestante | Sou gestante / Quero Pilates para gestantes | "Olá! Sou gestante e gostaria de conhecer a Fiore." |
| Espaço | Conhecer nosso espaço | "Olá! Gostaria de conhecer o espaço da Fiore." |
| Dúvidas | Tirar dúvidas | "Olá! Gostaria de tirar algumas dúvidas sobre as aulas da Fiore." |
| Florescer | Quero fazer parte do Florescer | "Olá! Gostaria de saber mais sobre o Programa Florescer da Fiore." |

Número: **(14) 99659-8955** → `https://wa.me/5514996598955?text=...` (texto URL-encoded).

## SEO técnico (implementado)

- **URLs canônicas:** domínio apex sem www + clean URLs (`/gestantes`) — ver [ADR 0009](adr/0009-urls-canonicas-dominio-apex-clean-urls.md). Links internos **sem** `.html`.
- `title` + `meta description` premium por página, `canonical`, OG + Twitter Cards.
- JSON-LD: `HealthAndBeautyBusiness` + `FAQPage` (home); `Service` + `FAQPage` + `BreadcrumbList` (gestantes).
- `AggregateRating` ativo: 5,0 · 44 avaliações (dados reais do cliente, 2026-05-27).
  *Nota: o Google ignora review markup "self-serving" para rich results desde 2019 —
  não esperar estrelas na SERP; o ativo real são as avaliações no Perfil da Empresa.*
- `robots.txt`, `sitemap.xml` (ambas as páginas + `lastmod`), `site.webmanifest`, `vercel.json` (cache + headers + cleanUrls).
- LCP: hero em `<picture>` com **WebP + `srcset`** (480w/618w) e `fetchpriority="high"`; fontes com `preload`.
- Favicon: `fiore-simbolo.svg` (primário) + `/favicon.ico` na raiz (16+32px, ~1,2 KB).
- Imagem social: `assets/images/og-image.jpg` (1200×630).
- **Google Analytics 4:** `G-GN6B6NJNKL` — tag no `<head>` de ambas as páginas (posição obrigatória para verificação via Search Console).
- **Google Search Console:** ✅ verificado (prefixo `https://fiorepilates.com.br/`), sitemap enviado e processado (2 páginas, 2026-05-27), propriedade GA ↔ Search Console vinculada.

## Medição de conversão (GA4)

`assets/js/fiore.js` dispara eventos em **todo clique** de CTA:

| Evento | Quando | Parâmetros |
|--------|--------|------------|
| `whatsapp_click` | clique em qualquer link `wa.me` | `cta_section` (hero, gestantes, florescer, header, footer, whatsapp_flutuante, barra_mobile, menu_mobile…), `cta_text`, `page_path` |
| `phone_click` | clique em link `tel:` | `cta_section`, `page_path` |

**Ação no painel GA4 (uma vez):** Admin → Events → marcar `whatsapp_click` como
**key event** (conversão). Depois, importar como conversão no Google Ads.

## Local SEO (ações fora do código — recomendadas ao cliente)

- Manter **NAP idêntico** em site, Google Perfil da Empresa, Instagram e Facebook.
- Pedir avaliações no Google e responder a todas.
- Postar fotos reais do espaço no Perfil da Empresa.
- ~~Fornecer **nota média + nº de avaliações** para ativarmos `AggregateRating`.~~ ✅ Ativo: 5,0 · 44 avaliações.
- Conteúdo recorrente para gestantes (Instagram/TikTok) — reforça autoridade local.
  Oportunidade: público do "Curso para Gestantes da Unimed Bauru".

## Backlog de conteúdo (futuro)

- Página/seção **Fiore Toque**.
- Página **Programa Florescer** dedicada (hoje é seção).
- Blog/artigos para gestantes (mitos e verdades) — exigiria reavaliar stack (Astro).
