# ADR 0020: Ecossistema Fiore, com Fiore Pilates e Fiore Labs

Data: 2026-09-01 · Status: aceito · Substitui o [ADR 0013](0013-grupo-fiore-arquitetura-de-marca.md)

## Contexto

O [ADR 0013](0013-grupo-fiore-arquitetura-de-marca.md) descreveu o "Grupo Fiore" como
uma branded house de 3 unidades sob a marca-mãe: Fiore Pilates, Fiore Toque e Fiore
Tech (Mirae). Na prática o desenho evoluiu:

- A frente de tecnologia deixou de ser só "Mirae SaaS + consultoria". Hoje ela
  constrói vários produtos (Mirae, Baru, Firme), presta consultoria e implantação, e
  toca experimentos que nem sempre são software (pastelaria, mentoria). "Unidade de
  tecnologia" ficou pequeno pro que ela é.
- Essa frente ganhou identidade e domínio próprios (`fiorelabs.com.br`), então tratá-la
  como só mais uma unidade sob o mesmo guarda-chuva de marca da clínica não reflete a
  realidade.
- O nome "Fiore Tech" nunca pegou internamente; o time chama de **Fiore Labs**.

## Decisão

1. **Ecossistema Fiore.** No topo existe o **Ecossistema Fiore**. Dentro dele,
   **Fiore Pilates** e **Fiore Labs** ficam **lado a lado**, não uma dentro da outra.
   Compartilham origem, valores e a marca-mãe Fiore (ver [BRAND.md](../BRAND.md)), mas
   têm operação, cliente e superfície próprios.

2. **Fiore Pilates.** Clínica B2C local (Bauru/SP), coração do site
   `fiorepilates.com.br`. Inclui o **Fiore Toque** como **seção** do site (terapias
   manuais, sem domínio próprio) e a linha B2B2C **Florescer Empresas**
   ([ADR 0017](0017-florescer-empresas-modelo-b2b2c.md)).

3. **Fiore Labs.** É o que a família constrói: software (Mirae, Baru, Firme),
   consultoria e implantação, e experimentos (pastelaria, mentoria e o que vier).
   Site institucional em `fiorelabs.com.br`. O **Mirae** é o produto carro-chefe:
   SaaS de gestão para clínicas e estúdios de Pilates, com a Fiore Pilates como case
   vivo ("Mirae by Fiore").

4. **2 mundos de cliente, superfícies separadas.** A clínica vende para mulheres de
   Bauru pelo site e WhatsApp. A Fiore Labs vende para outros negócios pelas landings
   de cada produto e por `fiorelabs.com.br`. O Mirae (e qualquer produto Labs) aparece
   no site da clínica só como prova de tecnologia e cuidado, nunca como produto à
   venda ali.

5. **Este repositório** segue sendo o hub de estratégia do ecossistema e a casa da
   **camada comercial da Fiore Labs** (consultoria e serviços). O produto Mirae em si
   continua no `mirae-local` ([ADR 0014](0014-fronteira-repos-fiorepilates-site-e-mirae-local.md)).
   A visão consolidada fica em
   [docs/company/GRUPO-FIORE.md](../company/GRUPO-FIORE.md); o roadmap único do
   ecossistema em [docs/ROADMAP.md](../ROADMAP.md) (Parte 1 clínica, Parte 2 Fiore Labs).

## O que não muda

- A regra de domínio do Mirae (fica em `mirae.fiorepilates.com.br` até o 2º tenant
  pagante) segue valendo, agora sob a Fiore Labs
  ([ADR 0015](0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)).
- A fronteira entre `fiorepilates-site` e `mirae-local`
  ([ADR 0014](0014-fronteira-repos-fiorepilates-site-e-mirae-local.md)).
- O site da clínica continua B2C local puro, sem poluição B2B.

## Consequências

- "Fiore Tech" sai do vocabulário; onde aparecia, passa a ser "Fiore Labs".
- Os dois roadmaps (clínica e tech) viram um só, `docs/ROADMAP.md`, com uma parte por
  negócio. `docs/tech/ROADMAP-TECH.md` deixa de existir.
- `docs/tech/` passa a ser a camada comercial da Fiore Labs (não só do Mirae).
- Baru, Firme e os experimentos ainda não têm oferta escrita; entram no roadmap como
  frentes, com números provisórios marcados como tais.
- Fica uma dependência de leitura menor: quem quer a arquitetura de marca lê este ADR,
  não o 0013.

## Relacionados

- [ADR 0013: Grupo Fiore como branded house com 3 unidades](0013-grupo-fiore-arquitetura-de-marca.md) (substituído por este)
- [ADR 0014: fronteira entre `fiorepilates-site` e `mirae-local`](0014-fronteira-repos-fiorepilates-site-e-mirae-local.md)
- [ADR 0015: oferta comercial e regra de domínio](0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)
- [ADR 0017: Florescer Empresas](0017-florescer-empresas-modelo-b2b2c.md)
- [GRUPO-FIORE.md](../company/GRUPO-FIORE.md) · [ROADMAP.md](../ROADMAP.md) · [BRAND.md](../BRAND.md)
