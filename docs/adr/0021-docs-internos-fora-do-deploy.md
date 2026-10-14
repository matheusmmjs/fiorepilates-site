# ADR 0021: Documentos internos fora do deploy

Data: 2026-10-13 · Status: aceito

## Contexto

A auditoria técnica de outubro de 2026 ([estudos/2026-10-auditoria-tecnica.md](../estudos/2026-10-auditoria-tecnica.md))
encontrou `docs/`, `CLAUDE.md`, `AGENTS.md`, `PRODUCT.md` e `DESIGN.md` servidos
publicamente em produção (HTTP 200). Como o site é estático e a Vercel publica a pasta
inteira, tudo que está no repositório ia junto. Entre o que ficou exposto:

- pressão de caixa e preços de outros produtos da Fiore Labs (`ROADMAP.md`);
- pipeline do Florescer Empresas com e-mails nominais de RH de empresas prospectadas,
  preço corporativo e comentários sobre esses empregadores;
- o registro de uma autoavaliação 5 estrelas no Perfil da Empresa no Google.

É dado pessoal de terceiros (LGPD) e risco comercial: qualquer prospect pode ler como foi
avaliado. O repositório também é o hub de estratégia do ecossistema (ADR 0020), então
esses documentos vão continuar existindo e crescendo.

## Decisão

1. **`.vercelignore` na raiz** exclui do deploy `docs/`, `*.md`, `.vscode/`, `.claude/`,
   `.agents/`, `.impeccable/` e `skills-lock.json`. Nada no site referencia esses arquivos.
   `llms.txt` e `llms-full.txt` continuam publicados (são intencionais).
2. **Defesa em profundidade:** `X-Robots-Tag: noindex, nofollow` para qualquer `*.md` no
   `vercel.json`, caso algo escape no futuro.
3. **Headers que faltavam:** `Permissions-Policy` (nega câmera, microfone, localização,
   pagamento e sensores) e `Cross-Origin-Opener-Policy: same-origin`. A CSP fica para
   depois do aviso de cookies, porque os scripts de GA4 e Clarity vão mudar de lugar.
4. **Regra daqui pra frente:** documento interno nunca vai para a raiz pública como
   HTML. Relatórios para o casal ou para a equipe são publicados como página privada
   (Artifact), não como arquivo do site.

## Consequências

- O que já foi exposto deve ser tratado como público: vale apagar a autoavaliação do GBP
  e, se algum desses URLs aparecer no Google, pedir remoção no Search Console.
- Ao publicar este branch, conferir em produção que `/docs/ROADMAP.md` e `/CLAUDE.md`
  devolvem 404.
- Qualquer arquivo novo de página precisa ser `.html` na raiz ou estar em `assets/`; o
  resto não sobe.
