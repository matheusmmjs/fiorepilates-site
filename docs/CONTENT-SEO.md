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

- `title` + `meta description` premium por página, `canonical`, OG + Twitter Cards.
- JSON-LD: `HealthAndBeautyBusiness` + `FAQPage` (home); `Service` + `FAQPage` + `BreadcrumbList` (gestantes).
- `AggregateRating` ativo: 5,0 · 44 avaliações (dados reais do cliente, 2026-05-27).
- `robots.txt`, `sitemap.xml` (ambas as páginas + `lastmod`), `site.webmanifest`, `vercel.json` (cache + headers).
- LCP: imagem do hero com `fetchpriority="high"`; fontes com `preload`.
- Imagem social: `assets/images/og-image.jpg` (1200×630).
- **Google Analytics 4:** `G-GN6B6NJNKL` — tag no `<head>` de ambas as páginas (posição obrigatória para verificação via Search Console).
- **Google Search Console:** verificar via GA4. Após verificar, enviar sitemap: `https://fiorepilates.com.br/sitemap.xml`. Linkar propriedade GA ↔ Search Console no painel GA.

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
