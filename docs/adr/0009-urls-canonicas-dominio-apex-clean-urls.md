# ADR 0009 — URLs canônicas: domínio apex + clean URLs

- **Status:** Aceito
- **Data:** 2026-06-11

## Contexto

Auditoria de SEO (2026-06-11) encontrou dois problemas de URL em produção:

1. **Domínio dividido ("split-brain").** Todos os arquivos (canonical, sitemap,
   OG, JSON-LD) usam `https://fiorepilates.com.br` (apex, sem www), mas o projeto
   na Vercel tinha `www.fiorepilates.com.br` como domínio primário — o apex
   respondia **307 (redirect temporário)** para o www. Resultado: o Google indexava
   o www cuja canonical declarada apontava para uma URL que redireciona de volta —
   sinais contraditórios que diluem a autoridade das páginas.
2. **`/gestantes` retornava 404.** Sem `cleanUrls`, só `/gestantes.html` existia —
   URL pior para anúncios, compartilhamento e memorização.

## Decisão

1. **Domínio canônico = apex (`fiorepilates.com.br`).** Foi escolhido o apex porque
   **todos os arquivos do site já o usavam** — inverter o lado da Vercel custa um
   clique; padronizar para www custaria editar canonical/sitemap/OG/JSON-LD em todos
   os arquivos. Configuração na Vercel (painel → Domains):
   - `fiorepilates.com.br` → **Connect to an environment: Production** (serve o site).
   - `www.fiorepilates.com.br` → **Redirect to Another Domain →
     `fiorepilates.com.br` com 308 Permanent Redirect**.
   - **Não** basta "excluir o redirecionamento": sem redirect, www e apex serviriam
     o mesmo conteúdo em duas origens (conteúdo duplicado). Um dos dois **precisa**
     redirecionar permanentemente (308) para o outro.
2. **`cleanUrls: true` no `vercel.json`.** A Vercel passa a servir `/gestantes` e a
   redirecionar `gestantes.html` → `/gestantes` com 308 (preserva URLs já indexadas).
   Canonical, OG, breadcrumb, sitemap e links internos atualizados para `/gestantes`.
3. **Servidor local: `npx serve`** (substitui `python3 -m http.server`), porque o
   `serve` aplica clean URLs por padrão — comportamento igual ao da produção.
   `.claude/launch.json` e README atualizados.

## Consequências

- ✅ Um único host canônico; redirects 308 consolidam sinais de SEO.
- ✅ URLs limpas para anúncios e compartilhamento; URLs antigas redirecionam (308).
- ✅ Ambiente local fiel à produção.
- ⚠️ Páginas novas devem ser linkadas **sem** `.html` (ex.: `/florescer`).
- ⚠️ A troca de domínio primário é feita **no painel da Vercel** (não versionada
  neste repositório). Se o projeto for recriado, repetir a configuração acima.
