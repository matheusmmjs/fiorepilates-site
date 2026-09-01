# Ecossistema Fiore: arquitetura de marca e negócios

> Hub de estratégia do **Ecossistema Fiore** dentro deste repositório
> (`fiorepilates-site`). Resume a arquitetura de marca, os negócios, os mundos de
> cliente e a fronteira entre repositórios. O detalhe de produto do Mirae vive no
> repositório `mirae-local`
> (ver [Taxonomia da família Mirae](#taxonomia-da-família-mirae-pointer)).

## Arquitetura de marca

No topo existe o **Ecossistema Fiore**, com a marca-mãe Fiore emprestando nome,
valores e reputação (identidade "ecossistema de cuidado e excelência", ver
[BRAND.md](../BRAND.md)). Dentro dele, **Fiore Pilates** e **Fiore Labs** ficam
**lado a lado**: mesma origem, operação e cliente próprios.

Decisão registrada no [ADR 0020](../adr/0020-ecossistema-fiore-e-fiore-labs.md), que
substitui o [ADR 0013](../adr/0013-grupo-fiore-arquitetura-de-marca.md) (branded house
de 3 unidades).

## Fiore Pilates e Fiore Labs

| Negócio | O que é | Onde vive |
|---|---|---|
| **Fiore Pilates** | Clínica B2C local (Bauru/SP): Pilates especializado em gestantes e saúde da mulher. Inclui o **Fiore Toque** (terapias manuais) como **seção** do site, sem domínio próprio, e a linha B2B2C **Florescer Empresas** | `fiorepilates.com.br` (este repositório) |
| **Fiore Labs** | O que a família constrói: software (**Mirae**, Baru, Firme), consultoria e implantação, e experimentos (pastelaria, mentoria). O **Mirae** (SaaS de gestão para clínicas e estúdios de Pilates) é o carro-chefe | Site institucional `fiorelabs.com.br`; produto Mirae no repositório `mirae-local`; camada comercial aqui em [docs/tech/](../tech/OFERTA.md) e na Parte 2 do [ROADMAP.md](../ROADMAP.md) |

## Os 2 mundos de cliente

1. **Clínica (B2C local):** mulheres de Bauru e região, com foco em gestantes e saúde
   da mulher. Conversão via WhatsApp, SEO local e comunidade. É o mundo do site
   `fiorepilates.com.br` e da Parte 1 do [ROADMAP.md](../ROADMAP.md).
2. **Fiore Labs (B2B):** clínicas e estúdios de Pilates (para o Mirae) e outros
   negócios (para Baru, Firme, consultoria), em Bauru ou fora. Conversão pelas
   landings de cada produto e por `fiorelabs.com.br`, com a Fiore como case vivo
   ("Mirae by Fiore"). Oferta e ICP em [docs/tech/OFERTA.md](../tech/OFERTA.md).

Regra prática: o Mirae **não é vendido no site da clínica**. Ele aparece lá apenas
como prova de tecnologia e cuidado (ver princípio 3 do [ROADMAP.md](../ROADMAP.md)).

## Linha B2B2C da clínica: Florescer Empresas

Dentro do mundo da clínica há uma frente de receita além do B2C local: o **Florescer
Empresas**. O RH de uma empresa paga o Pilates na gestação como benefício e a
colaboradora gestante usa (B2B2C). É go-to-market da clínica, não marca nova nem
unidade nova, e o Mirae não entra. Escopo da v1: só Bauru, entrega no estúdio, venda
outbound e via administradoras de benefícios. Detalhe em
[ADR 0017](../adr/0017-florescer-empresas-modelo-b2b2c.md) e
[docs/company/florescer-empresas.md](florescer-empresas.md).

## Fronteira de repositórios

Decisão registrada no
[ADR 0014](../adr/0014-fronteira-repos-fiorepilates-site-e-mirae-local.md). Resumo:

- **`mirae-local`** é o repositório do **produto Mirae**: app, landing e governança do
  produto (taxonomia, roadmap de produto, ADRs de produto). É o dono do ADR-040.
- **`fiorepilates-site`** (este) é o repositório da **clínica**, da **estratégia do
  Ecossistema Fiore** e da **camada comercial da Fiore Labs** (consultoria e
  serviços), que o próprio ADR-040 coloca fora do escopo do `mirae-local`.

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

- [ADR 0020: Ecossistema Fiore, com Fiore Pilates e Fiore Labs](../adr/0020-ecossistema-fiore-e-fiore-labs.md)
- [ADR 0013: Grupo Fiore como branded house](../adr/0013-grupo-fiore-arquitetura-de-marca.md) (substituído pelo 0020)
- [ADR 0014: fronteira entre `fiorepilates-site` e `mirae-local`](../adr/0014-fronteira-repos-fiorepilates-site-e-mirae-local.md)
- [ADR 0015: oferta comercial e regra de domínio](../adr/0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)
- [ADR 0017: Florescer Empresas, linha B2B2C](../adr/0017-florescer-empresas-modelo-b2b2c.md) e [docs/company/florescer-empresas.md](florescer-empresas.md)
- [docs/tech/OFERTA.md](../tech/OFERTA.md) e a Parte 2 do [ROADMAP.md](../ROADMAP.md)
- [BRAND.md](../BRAND.md) (identidade da marca-mãe)
