# Fiore Tech: oferta comercial

> Superfície comercial da unidade **Fiore Tech (Mirae)**. O produto em si (app,
> landing, taxonomia, roadmap de produto) vive no repositório `mirae-local`; a fonte
> da verdade da arquitetura de marca do produto é o **ADR-040** daquele repo (ver
> resumo e link em [GRUPO-FIORE.md](../company/GRUPO-FIORE.md)). Aqui fica só **o que
> se vende e como**. Decisão registrada no
> [ADR 0015](../adr/0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md).

## Posicionamento: "Mirae by Fiore"

A Fiore Pilates é o **case vivo**: a clínica usa o Mirae na operação real, todos os
dias. A venda não parte de promessa, parte de demonstração ("é assim que a gente
opera a nossa própria clínica"). Enquanto a Fiore for o único tenant, essa é a
narrativa central; com o 2º tenant pagante, a Fiore vira cliente-zero e case.

## Os 2 SKUs

### 1. Consultoria e implantação (projeto fechado)

- Projeto com escopo e preço fechados, definidos caso a caso.
- Papel no negócio: **caixa no curto prazo** e porta de entrada para o SaaS.
- Entrega puxada pela experiência real da Fiore como operação de referência.

### 2. Mirae SaaS (assinatura por tenant)

- Software de gestão por assinatura, cobrado por tenant.
- Papel no negócio: **receita recorrente** e escala da unidade.
- **Preço:** o preço canônico (mensal, anual, descontos de rede e trial) é o publicado
  na landing do Mirae, hoje em `mirae.fiorepilates.com.br`. Este documento **não**
  repete os números para não desatualizar; em caso de dúvida, vale a landing.

## ICP (perfil de cliente ideal)

Clínicas e estúdios de **Pilates**, de qualquer porte e qualquer público, em Bauru ou
fora. A venda é vertical (essa é a cunha de tração), ainda que os nomes dos módulos
sejam horizontais de propósito (ver taxonomia no
[GRUPO-FIORE.md](../company/GRUPO-FIORE.md)).

## Modelo de entrega

1. **Consultoria abre a relação:** diagnóstico e implantação por projeto fechado.
2. **O SaaS sustenta a relação:** o cliente segue no Mirae por assinatura.
3. **A Fiore é a vitrine:** demonstrações e provas usam a operação real da clínica.

## O que este documento não cobre

- Módulos, funcionalidades e roadmap de produto: repositório `mirae-local`.
- Números de preço: landing do Mirae.
- Sequência comercial no tempo: [ROADMAP-TECH.md](ROADMAP-TECH.md).
