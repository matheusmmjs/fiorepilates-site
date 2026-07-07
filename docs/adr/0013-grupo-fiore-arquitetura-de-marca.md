# ADR 0013: Grupo Fiore como branded house com 3 unidades

Data: 2026-07-07 · Status: aceito

## Contexto

A Fiore deixou de ser só a clínica de Pilates. Além do **Fiore Pilates** (B2C local,
Bauru/SP) e do **Fiore Toque** (terapias manuais, hoje uma seção do site), a família
desenvolveu tecnologia própria que virou produto: o **Mirae**, SaaS de gestão para
clínicas e estúdios, operado pela unidade **Fiore Tech**.

Sem uma arquitetura de marca explícita, cada documento e cada conversa tratava essas
frentes de um jeito: ora como projetos separados, ora como "features" da clínica.
Isso gerava dúvidas práticas: o Toque precisa de domínio? O Mirae é vendido no site
da clínica? Onde vive a estratégia do grupo?

## Decisão

1. **Branded house.** O Grupo Fiore opera como casa de marcas sob a marca-mãe Fiore:
   mesma identidade, valores e reputação (ver [BRAND.md](../BRAND.md)), com unidades
   como expressões dela para públicos diferentes.
2. **3 unidades:**
   - **Fiore Pilates:** clínica B2C local, coração do site `fiorepilates.com.br`.
   - **Fiore Toque:** cuidado através do toque; permanece **seção** do site da
     clínica, sem domínio próprio.
   - **Fiore Tech (Mirae):** unidade B2B de tecnologia (consultoria + Mirae SaaS).
3. **2 mundos de cliente, superfícies separadas:** a clínica vende para mulheres de
   Bauru pelo site e WhatsApp; o Mirae vende para clínicas e estúdios pela landing
   própria. O Mirae aparece no site da clínica só como prova de tecnologia e cuidado,
   nunca como produto à venda ali (princípio 3 do [ROADMAP.md](../ROADMAP.md)).
4. **Este repositório é o hub de estratégia do grupo.** A visão consolidada fica em
   [docs/company/GRUPO-FIORE.md](../company/GRUPO-FIORE.md), incluindo um resumo da
   taxonomia da família Mirae. A fonte da verdade da taxonomia e da arquitetura de
   marca do produto é o **ADR-040** no repositório `mirae-local`
   ([github.com/matheusmmjs/mirae-local](https://github.com/matheusmmjs/mirae-local));
   aqui só se resume e linka, nunca se duplica.

## Consequências

- Cada frente sabe onde vive e para quem fala; some a ambiguidade "clínica vs. grupo".
- O site da clínica continua focado em conversão B2C local, sem poluição B2B.
- Documentos de grupo e da unidade Tech ganham casa (`docs/company/` e `docs/tech/`),
  sem tocar no stack estático do site ([ADR 0001](0001-stack-html-estatico.md)).
- Cria dependência de leitura entre repositórios: quem for trabalhar a marca do
  produto Mirae precisa abrir o ADR-040 no `mirae-local`.

## Relacionados

- [ADR 0014: fronteira entre `fiorepilates-site` e `mirae-local`](0014-fronteira-repos-fiorepilates-site-e-mirae-local.md)
- [ADR 0015: oferta comercial da unidade Tech e regra de domínio](0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)
- [GRUPO-FIORE.md](../company/GRUPO-FIORE.md)
