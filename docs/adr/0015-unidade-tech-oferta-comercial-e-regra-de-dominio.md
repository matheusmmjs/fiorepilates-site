# ADR 0015: Unidade Tech, oferta comercial e regra de domínio do Mirae

Data: 2026-07-07 · Status: aceito

## Contexto

A frente de tecnologia (hoje **Fiore Labs**, [ADR 0020](0020-ecossistema-fiore-e-fiore-labs.md);
quando este ADR foi escrito, "Fiore Tech") precisa de uma oferta comercial clara para
não misturar dois movimentos diferentes: gerar caixa agora (serviço) e construir
receita recorrente (SaaS). Também havia uma dúvida recorrente sobre o domínio do
Mirae: manter sob a marca Fiore ou migrar já para um domínio próprio, com custo de
rebrand antes de existir demanda externa.

Este repo é a casa da camada comercial da Fiore Labs
([ADR 0014](0014-fronteira-repos-fiorepilates-site-e-mirae-local.md)); o produto em si
é governado pelo ADR-040 no repositório `mirae-local`.

## Decisão

1. **Dois SKUs, e só dois:**
   - **Consultoria/implantação por projeto fechado:** escopo e preço definidos caso a
     caso; papel de caixa no curto prazo e porta de entrada para o SaaS.
   - **Mirae SaaS por tenant:** assinatura recorrente. O **preço canônico** (mensal,
     anual, descontos e trial) é o publicado na landing do Mirae; nenhum documento
     deste repo replica os números, para não desatualizar.
2. **ICP:** clínicas e estúdios de Pilates, qualquer porte, qualquer público, em Bauru
   ou fora. Venda vertical como cunha de tração, mesmo com nomes de módulo horizontais
   (taxonomia no ADR-040 do `mirae-local`).
3. **Posicionamento "Mirae by Fiore":** a Fiore Pilates é o case vivo; a demonstração
   usa a operação real da clínica.
4. **Regra de domínio (dívida consciente, sem migração agora):** o Mirae permanece em
   `mirae.fiorepilates.com.br` enquanto o único tenant for a própria Fiore. O gatilho
   para rebrand/domínio próprio (`mirae.com.br` / `usemirae.com`) é a entrada do
   **2º tenant pagante**, quando a Fiore vira cliente-zero e case. Até lá, a decisão
   não se reabre.

Detalhes da oferta em [docs/tech/OFERTA.md](../tech/OFERTA.md) e sequência comercial
na Parte 2 do [docs/ROADMAP.md](../ROADMAP.md).

## Consequências

- A unidade tem um funil simples: consultoria abre a relação, o SaaS a sustenta.
- Sem duplicidade de preço: quem quer números vai à landing, sempre atual.
- O custo de rebrand de domínio fica adiado até existir prova de demanda externa, e o
  gatilho é objetivo (2º tenant pagante), não uma sensação.
- O site da clínica não muda: a venda B2B acontece na landing do Mirae (princípio 3 do
  [ROADMAP.md](../ROADMAP.md)).

## Relacionados

- [ADR 0020: Ecossistema Fiore, com Fiore Pilates e Fiore Labs](0020-ecossistema-fiore-e-fiore-labs.md)
- [ADR 0014: fronteira entre `fiorepilates-site` e `mirae-local`](0014-fronteira-repos-fiorepilates-site-e-mirae-local.md)
- [OFERTA.md](../tech/OFERTA.md) · Parte 2 do [ROADMAP.md](../ROADMAP.md) · [GRUPO-FIORE.md](../company/GRUPO-FIORE.md)
