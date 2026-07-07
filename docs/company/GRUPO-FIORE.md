# Grupo Fiore: arquitetura de marca e unidades

> Hub de estratégia do **Grupo Fiore** dentro deste repositório (`fiorepilates-site`).
> Resume a arquitetura de marca, as unidades, os mundos de cliente e a fronteira entre
> repositórios. O detalhe de produto do Mirae vive no repositório `mirae-local`
> (ver [Taxonomia da família Mirae](#taxonomia-da-família-mirae-pointer)).

## Arquitetura de marca: branded house

O Grupo Fiore opera como **branded house**: uma marca-mãe (Fiore) que empresta nome,
valores e reputação a todas as unidades. A identidade central ("ecossistema de cuidado
e excelência", ver [BRAND.md](../BRAND.md)) permanece a mesma; cada unidade é uma
expressão dela para um público específico.

Decisão registrada no [ADR 0013](../adr/0013-grupo-fiore-arquitetura-de-marca.md).

## As 3 unidades

| Unidade | O que é | Onde vive |
|---|---|---|
| **Fiore Pilates** | Clínica B2C local (Bauru/SP): Pilates especializado em gestantes e saúde da mulher | `fiorepilates.com.br` (este repositório) |
| **Fiore Toque** | Cuidado na gestação e pós através do toque (terapias manuais). É uma **seção** do site da clínica, não um domínio próprio | Seção em `fiorepilates.com.br` (este repositório) |
| **Fiore Tech (Mirae)** | Unidade B2B de tecnologia: consultoria/implantação + o produto **Mirae** (SaaS de gestão para clínicas e estúdios) | Produto e landing no repositório `mirae-local`; camada comercial documentada aqui em [docs/tech/](../tech/OFERTA.md) |

## Os 2 mundos de cliente

1. **Clínica (B2C local):** mulheres de Bauru e região, com foco em gestantes e saúde
   da mulher. Conversão via WhatsApp, SEO local e comunidade. É o mundo do site
   `fiorepilates.com.br` e de tudo que já está em `docs/` (SPEC, CONTENT-SEO, ROADMAP).
2. **Mirae (B2B):** clínicas e estúdios de Pilates, de qualquer porte e público, em
   Bauru ou fora. Conversão via landing própria do Mirae, com a Fiore como case vivo
   ("Mirae by Fiore"). Oferta e ICP em [docs/tech/OFERTA.md](../tech/OFERTA.md).

Regra prática: o Mirae **não é vendido no site da clínica**. Ele aparece lá apenas
como prova de tecnologia e cuidado (ver princípio 3 do [ROADMAP.md](../ROADMAP.md)).

## Fronteira de repositórios

Decisão registrada no
[ADR 0014](../adr/0014-fronteira-repos-fiorepilates-site-e-mirae-local.md). Resumo:

- **`mirae-local`** é o repositório do **produto Mirae**: app, landing e governança da
  unidade (taxonomia, roadmap de produto, ADRs de produto). É o dono do ADR-040.
- **`fiorepilates-site`** (este) é o repositório da **clínica**, da **estratégia do
  Grupo Fiore** e da **camada comercial da unidade Tech** (consultoria e serviços),
  que o próprio ADR-040 coloca fora do escopo do `mirae-local`.

Nunca duplicar conteúdo do ADR-040 aqui: sempre resumir e linkar.

## Taxonomia da família Mirae (pointer)

O Mirae é composto por módulos com nome e papel próprios (núcleo, fundação de
conhecimento, app de operação, app de relacionamento, camada de inteligência). Essa
taxonomia muda conforme o produto evolui, então **não a replicamos aqui**: para não
duplicar e desatualizar, ver **ADR-040** (Taxonomia e Arquitetura de Marca da Família
Mirae, 2026-07-07) no repositório `mirae-local`, em
[docs/adr/](https://github.com/matheusmmjs/mirae-local/tree/main/docs/adr).
Observação: o ADR-040 é recente e pode ainda não estar no `main` (os ADRs de lá seguem
o padrão `ADR-0NN-titulo.md`); quando entrar, será `docs/adr/ADR-040-...md`. Em caso de
dúvida sobre nomes de módulo, vale sempre o ADR-040, nunca uma memória deste repo.

## Domínio do Mirae (dívida consciente)

O Mirae fica em `mirae.fiorepilates.com.br` enquanto o único tenant for a própria
Fiore. O gatilho para rebrand/domínio próprio (`mirae.com.br` / `usemirae.com`) é a
entrada do **2º tenant pagante**, momento em que a Fiore vira cliente-zero e case.
Não é uma decisão de migração agora; é dívida registrada no
[ADR 0015](../adr/0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md).

## Relacionados

- [ADR 0013: Grupo Fiore como branded house](../adr/0013-grupo-fiore-arquitetura-de-marca.md)
- [ADR 0014: fronteira entre `fiorepilates-site` e `mirae-local`](../adr/0014-fronteira-repos-fiorepilates-site-e-mirae-local.md)
- [ADR 0015: oferta comercial da unidade Tech e regra de domínio](../adr/0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)
- [docs/tech/OFERTA.md](../tech/OFERTA.md) e [docs/tech/ROADMAP-TECH.md](../tech/ROADMAP-TECH.md)
- [BRAND.md](../BRAND.md) (identidade da marca-mãe)
