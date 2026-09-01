# ADR 0017: Florescer Empresas, linha B2B2C de Pilates na gestação para empresas

Data: 2026-08-31 · Status: aceito

## Contexto

A Fiore Pilates é uma clínica B2C local ([ADR 0013](0013-grupo-fiore-arquitetura-de-marca.md)).
Surgiu a oportunidade de vender o cuidado à gestante para **empresas de Bauru**: o RH
paga, a colaboradora gestante usa. O **Programa Florescer** (presencial, integrativo,
para gestantes) está parado e entrega exatamente esse conteúdo. Há um canal possível
via administradoras de benefícios locais, como a Salutem.

Três dúvidas precisavam de resposta antes de investir: isto é uma marca nova? é a
unidade Tech? como não conflitar com o site B2C da clínica?

## Decisão

1. **Não é marca nova nem unidade nova.** É uma linha de go-to-market **B2B2C da
   unidade Fiore Pilates**, chamada **Florescer Empresas**, que entrega o **Programa
   Florescer** (presencial, no espaço Fiore) tendo o RH como cliente pagante.
2. **Arquitetura de marca:** **Florescer** passa a ser a linha de cuidado à gestante,
   com 3 formas de acesso: presencial B2C, **Florescer Empresas** (B2B2C) e **Florescer
   digital** (produto digital, B2C e add-on dos contratos de empresa).
3. **Escopo da v1:** só Bauru, 1 a 2 empresas âncora, entrega no estúdio pelo fluxo
   normal de agendamento (6h às 20h) com a empresa da gestante registrada no cadastro,
   sem CRM ou ferramenta nova (pipeline em planilha).
4. **Precificação:** pós-pago mensal por sessão realizada, uma nota por empresa no fim
   do mês, contrato de 12 meses, revisão no mês 3. **Taxa corporativa de R$ 55 por
   sessão** no contrato de 12 meses (R$ 60 em contratos de 3 a 6 meses). Sem bloco
   fechado e sem mensalidade fixa; mínimo mensal só se a empresa quiser horário de
   pico reservado. Fica acima de todo canal de marketplace (Wellhub R$ 34,50,
   TotalPass R$ 42) e equivale ao melhor plano de balcão. A base de custo real ainda
   será levantada só para conferir a margem.
5. **Coparticipação:** v1 com 100% pago pela empresa (menor atrito de venda e adesão
   máxima). Modelo híbrido com coparticipação simbólica da colaboradora entra só na
   escala, para controlar custo e falta.
6. **Canal:** testar em paralelo a Salutem como clube de parcerias (volume) e como
   porta de entrada para contratos diretos com empresas âncora (controle de preço e
   experiência). Comparar no mês 3.
7. **Fronteira:** isto é comercial da **clínica**, não da unidade Tech
   ([ADR 0015](0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)). O Mirae não
   entra. O site B2C não vende isto (princípio 3 do [ROADMAP.md](../ROADMAP.md)): a
   venda é outbound e via RH ou parceiro de benefícios.
8. **Guardrails:** valem integralmente os do
   [ADR 0005](0005-conteudo-etico-e-prova-social-real.md), com destaque para liberação
   médica por gestante e linguagem sem promessa médica. As aulas do Fiore são hoje
   100% conduzidas por fisioterapeutas, o que sustenta o posicionamento de Pilates
   clínico e libera o argumento de dedução no IRPF da colaboradora (Solução de
   Consulta Cosit nº 32/2024).

Detalhamento (planos, argumento financeiro e fiscal, ICP, canal, roteiro de RH) em
[docs/company/florescer-empresas.md](../company/florescer-empresas.md).

## Consequências

- O Programa Florescer ganha um motivo para sair do papel: a empresa âncora é o
  empurrão.
- Nova métrica de negócio para a clínica: sessões de empresa realizadas por mês,
  contratos ativos, adesão das gestantes.
- Os argumentos financeiros viram material de venda, sempre com validação de contador:
  economia de sinistralidade e de turnover pós-licença; despesa dedutível no Lucro
  Real; Lei de Incentivo ao Esporte como caminho de médio prazo; dedução no IRPF da
  colaboradora quando o serviço é prestado por fisioterapeuta (Solução de Consulta
  Cosit nº 32/2024).
- Risco de canal: se a venda for só via administradora de benefícios, margem e
  controle da experiência caem. A escolha entre "canal" e "porta de entrada" fica para
  depois da primeira reunião com a Salutem.
- Porta aberta: se virar receita relevante e recorrente com muitas empresas,
  reavaliar em novo ADR se Florescer Empresas deve virar unidade própria.

## Relacionados

- [docs/company/florescer-empresas.md](../company/florescer-empresas.md)
- [ADR 0013: Grupo Fiore como branded house](0013-grupo-fiore-arquitetura-de-marca.md)
- [ADR 0005: conteúdo ético e prova social real](0005-conteudo-etico-e-prova-social-real.md)
- [ADR 0015: oferta comercial da unidade Tech e regra de domínio](0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)
- [GRUPO-FIORE.md](../company/GRUPO-FIORE.md)
