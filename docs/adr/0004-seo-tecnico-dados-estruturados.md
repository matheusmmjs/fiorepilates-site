# ADR 0004 — SEO técnico e dados estruturados (JSON-LD)

- **Status:** Aceito
- **Data:** 2026-05-22

## Contexto

O site antigo não tinha `robots.txt`, `sitemap.xml`, Open Graph, Twitter Cards,
canonical nem dados estruturados. Para um negócio **local** (Bauru), o SEO local é o
maior motor de aquisição.

## Decisão

Implementar SEO técnico completo:

- **Por página:** `<title>` e `meta description` premium, `canonical`, `theme-color`,
  tags `geo.*`, Open Graph e Twitter Cards (imagem `og-image.jpg` 1200×630).
- **Dados estruturados (JSON-LD):**
  - `HealthAndBeautyBusiness` (home) — NAP, horário, fundadora, redes, ofertas.
  - `Service` + `FAQPage` + `BreadcrumbList` (página de gestantes).
  - `FAQPage` (home).
- **Arquivos:** `robots.txt`, `sitemap.xml`, `site.webmanifest`.
- **`vercel.json`:** cache longo para fontes/assets e headers de segurança básicos.
- **Performance/Core Web Vitals:** `preload` das fontes-chave, `fetchpriority="high"`
  na imagem do hero (LCP), `loading="lazy"` nas demais, dimensões `width/height` para
  evitar CLS.

> **AggregateRating ativado em 2026-05-27** com dados reais fornecidos pelo cliente:
> ratingValue 5,0 · reviewCount 44. Ver [ADR 0005](0005-conteudo-etico-e-prova-social-real.md).

## Consequências

- ✅ Elegível a rich results (FAQ, negócio local) e bom compartilhamento social.
- ✅ NAP consistente entre site, Google e redes (atenção ao manter isso).
- ⚠️ Coordenadas geográficas (`geo`) não foram incluídas no schema por falta do
  lat/long exato; o mapa usa busca por endereço. Adicionar quando disponível.
