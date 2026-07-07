# ADR 0014: Fronteira de repositórios entre `fiorepilates-site` e `mirae-local`

Data: 2026-07-07 · Status: aceito

## Contexto

Com o Grupo Fiore estruturado em unidades ([ADR 0013](0013-grupo-fiore-arquitetura-de-marca.md)),
passam a existir dois repositórios com papéis que podem se confundir:

- **`fiorepilates-site`** (este): o site estático da clínica.
- **`mirae-local`**: o produto Mirae (app e landing).

Sem uma fronteira explícita, documentos de estratégia, marca e oferta comercial
tendem a ser criados nos dois lados, duplicados e desatualizados. O ADR-040 do
`mirae-local` (Taxonomia e Arquitetura de Marca da Família Mirae, 2026-07-07) já
define a taxonomia do produto e coloca explicitamente a frente comercial de
consultoria/serviços **fora** do escopo daquele repo. Faltava dizer onde ela vive.

## Decisão

1. **`mirae-local` = produto Mirae.** App, landing e governança da unidade como
   produto: taxonomia, roadmap de produto e ADRs de produto. É o **dono do ADR-040**.
2. **`fiorepilates-site` = clínica + grupo + comercial da Tech.** Este repo guarda o
   site da clínica, a estratégia do Grupo Fiore
   ([docs/company/GRUPO-FIORE.md](../company/GRUPO-FIORE.md)) e a camada comercial da
   unidade Tech: consultoria/implantação e posicionamento de revenda do Mirae SaaS
   ([docs/tech/OFERTA.md](../tech/OFERTA.md) e
   [docs/tech/ROADMAP-TECH.md](../tech/ROADMAP-TECH.md)).
3. **Referenciar, nunca duplicar.** Conteúdo do ADR-040 (taxonomia, nomes de módulo,
   arquitetura de marca do produto) só entra aqui como resumo curto com aviso de fonte
   e link textual, no formato "ver ADR-040 no repositório `mirae-local`"
   ([mirae-local/docs/adr](https://github.com/matheusmmjs/mirae-local/tree/main/docs/adr)).
   Não usar caminho relativo entre repos, que não resolve. Em caso de divergência
   entre um resumo daqui e o ADR-040, vale o ADR-040.
4. **A recíproca vale:** decisões comerciais da unidade Tech e de estratégia do grupo
   se registram aqui e o `mirae-local` deve linkar para cá, não copiar.

## Consequências

- Uma única fonte da verdade por assunto; resumos sempre apontam para a origem.
- Quem trabalha o produto abre o `mirae-local`; quem trabalha oferta, ICP e narrativa
  comercial da Tech trabalha aqui.
- Links entre repos são textuais (nome do repo + documento), então uma renomeação de
  arquivo no `mirae-local` não quebra nada aqui, mas exige conferência manual.
- O stack e as regras do site da clínica não mudam: a fronteira é só documental
  ([ADR 0001](0001-stack-html-estatico.md) preservado).

## Relacionados

- [ADR 0013: Grupo Fiore como branded house](0013-grupo-fiore-arquitetura-de-marca.md)
- [ADR 0015: oferta comercial da unidade Tech e regra de domínio](0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)
- ADR-040 no repositório `mirae-local` (taxonomia e arquitetura de marca da família Mirae)
