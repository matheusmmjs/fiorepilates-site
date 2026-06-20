# ADR 0012: Página temporária de aniversário para tablet na recepção

Data: 2026-06-20 · Status: aceito

## Contexto

No aniversário de 1 ano da Fiore, a equipe quer ativar duas frentes durante o café da
manhã e até 30/06/2026:

- campanha de indicação, com benefício para quem indica e para quem fecha plano;
- coleta de mensagens sobre a experiência do primeiro ano, incluindo pontos de melhoria.

A equipe não quer imprimir materiais ou QR codes para não interferir na estética do
espaço físico. A interação principal será um tablet na recepção.

## Decisão

Criar `aniversario.html`, servido como `/aniversario`, com experiência própria de
tablet:

1. Tela cheia, sem header, footer, WhatsApp flutuante ou barra mobile.
2. Carrossel automático com controles manuais para recepção, reduzido a três telas
   para evitar redundância.
3. Uma ação por tela e um QR code por tela, em tamanho grande:
   - deixar uma mensagem para a Fiore pelo Google Forms;
   - registrar indicação pelo WhatsApp no celular da própria pessoa;
   - avaliar no Google.
4. Página com `noindex, nofollow` e fora do `sitemap.xml`, por ser temporária e de uso
   operacional.
5. Separar a avaliação pública no Google da campanha de indicação. A avaliação no Google
   deve ser convite livre, sem brinde, desconto ou presente em troca.
6. Evitar links principais de WhatsApp acionáveis no tablet, porque eles podem abrir o
   WhatsApp Web da própria Fiore. O tablet orienta, o celular da pessoa executa.
7. Remover informações operacionais do topo, como datas da campanha, para deixar a tela
   mais emocional e menos parecida com regulamento.

## Consequências

- A recepção ganha uma peça viva e elegante sem material impresso.
- A ação pode ser removida facilmente depois do período.
- Evita risco reputacional e de política do Google por avaliação incentivada.
- A pesquisa interna pode ser respondida de forma anônima, com nome opcional.
- Como o site permanece estático, qualquer coleta estruturada depende de serviço
  externo como Google Forms.
