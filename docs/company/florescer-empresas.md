# Florescer Empresas: Pilates na gestação como benefício corporativo

> Linha B2B2C da unidade **Fiore Pilates**. O RH da empresa paga, a colaboradora
> gestante usa. Entrega o **Programa Florescer** (presencial, no espaço Fiore).
> Decisão em [ADR 0017](../adr/0017-florescer-empresas-modelo-b2b2c.md).
>
> Aviso: as passagens sobre tributos abaixo são orientação de leitura, não
> consultoria. Validar sempre com o contador da Fiore e com o contador da empresa
> cliente.

## 1. Onde encaixa no ecossistema Fiore

**Florescer** passa a ser a linha de cuidado à gestante, com 3 formas de acesso:

| Acesso | Cliente pagante | Canal |
|---|---|---|
| Presencial B2C | a própria gestante | site, WhatsApp, SEO local |
| **Florescer Empresas** (este doc) | o RH da empresa | prospecção ativa e parceiros de benefícios |
| Florescer digital (futuro) | a gestante, e como add-on nos contratos de empresa | plataforma |

Não é marca nova nem unidade nova. É um go-to-market da clínica. O Mirae e a unidade
Tech ([ADR 0015](../adr/0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md)) não
entram aqui. O site B2C não vende isto (segue o princípio 3 do
[ROADMAP.md](../ROADMAP.md)): a venda é outbound e via RH.

Benefício de tabela: o Programa Florescer, hoje parado, ganha um motivo concreto pra
sair do papel, que é a primeira empresa âncora.

## 2. O que vendemos na v1 (oferta mínima)

- **Só Bauru.** Sem cidades vizinhas por enquanto.
- **1 a 2 empresas âncora.** Não escalar antes de provar adesão.
- **Entrega no estúdio Fiore.** A gestante agenda pelo fluxo normal da clínica, dentro
  do horário de atendimento (6h às 20h), como qualquer aluna. A única diferença
  operacional é **informar de qual empresa ela é** no cadastro, para consolidar
  consumo e relatório. Aula dentro da empresa não se aplica (precisa de equipamento,
  triagem de contraindicação e liberação médica).
- Quando houver disputa por horário de pico, direcionar as gestantes de empresa para
  os horários de menor procura e manter o pico para o balcão.
- **Programa Florescer:** Pilates especializado para gestantes, em turmas pequenas,
  com avaliação inicial e liberação médica obrigatória por gestante.
- Sem CRM nem ferramenta nova. Pipeline na tabela da seção 7 deste documento.

## 3. Modelo de precificação

**Formato: pós-pago mensal por sessão realizada.**

- A gestante agenda no fluxo normal. O sistema marca a empresa dela.
- No fim do mês, o Fiore fecha o total de sessões por empresa e emite uma nota só.
- **Sem bloco fechado e sem mensalidade fixa.** Simples de vender ("paga só o que
  as suas gestantes usarem") e sem risco de vaga vazia para nenhum dos lados.
- Contrato de 12 meses, revisão no mês 3, reajuste anual.
- **Mínimo mensal é opcional:** só entra se a empresa quiser horários de pico
  reservados. Aí sim vira um piso combinado.
- Quando a empresa tiver histórico de consumo estável, dá pra migrar para avença fixa
  (receita garantida para o Fiore, previsibilidade para o RH).

### 3.1 Referências de preço (contexto interno, não vai pro material do cliente)

| Referência | Valor por sessão |
|---|---|
| Wellhub paga ao Fiore | R$ 34,50 |
| TotalPass paga ao Fiore | R$ 42,00 |
| Varejo B2C, plano 3x/semana anual (equivalente) | cerca de R$ 40 |
| Varejo B2C, plano 2x/semana anual (equivalente) | cerca de R$ 52 |
| Varejo B2C, plano 2x/semana mensal | cerca de R$ 66 |
| Aula avulsa | R$ 80 |

### 3.2 Recomendação

**Taxa corporativa: R$ 55 por sessão** em contrato de 12 meses (R$ 60 por sessão em
contratos de 3 a 6 meses). Sem taxa de matrícula na v1.

Por que R$ 55: fica **acima de todo canal de marketplace** (Wellhub e TotalPass), ou
seja, o B2B direto vira o melhor canal do Fiore, e na prática equivale ao **melhor
plano de balcão** (o 2x/semana anual), então o RH sente que fez negócio. A empresa
ainda traz o volume e faz a captação das gestantes, o que dispensa custo de marketing.

**Pendência:** confirmar o custo real por sessão (instrutor mais rateio) só para saber
a margem em R$ 55. Não trava o começo.

### 3.3 Estimativa de consumo (para conversa com o RH)

Consumo esperado por mês = (nº de gestantes ativas) x 2 sessões por semana x 4 semanas.

- **Piloto (1ª empresa):** 3 meses, sem volume mínimo, sem multa de saída. Paga só o
  que as gestantes fizerem.
- **Exemplo:** 4 gestantes a 2x/semana, cerca de 32 sessões/mês, cerca de **R$ 1.760
  por mês**. Por gestante ativa: cerca de **R$ 440 por mês**, cerca de R$ 2.640 no
  ciclo de 6 meses de participação.

## 4. Coparticipação da colaboradora

**Recomendação: v1 com 100% pago pela empresa.** É o menor atrito possível, tanto na
venda (uma nota só, sem configurar desconto em folha) quanto na adesão (a gestante
não pensa duas vezes). Serve ao objetivo da v1, que é provar que gestante de empresa
adere e volta.

**Na escala, migrar para híbrido:** coparticipação simbólica da colaboradora via
desconto em folha, algo como R$ 39 por mês (o "preço de um TotalPass"), e a empresa
cobre o restante. A coparticipação simbólica reduz o custo para o RH e melhora o
comparecimento (menos falta), sem virar barreira de acesso.

## 5. Argumento financeiro para a empresa

O que faz o olho do RH brilhar é dinheiro que a empresa economiza ou deixa de gastar.

### 5.1 Economia indireta (vale para qualquer regime tributário)

| Item | Ordem de grandeza |
|---|---|
| Parto normal no plano | R$ 8 mil a R$ 15 mil |
| Cesárea eletiva | R$ 15 mil a R$ 25 mil |
| Parto com complicação | R$ 40 mil a R$ 80 mil |
| Prematuro com UTI neonatal | R$ 80 mil a R$ 200 mil ou mais |
| Pré-natal por gestante | R$ 3 mil a R$ 6 mil |
| Queda de 5 pontos de sinistralidade, empresa de 300 vidas | cerca de R$ 144 mil por ano no reajuste |
| Repor quem não volta da licença | 50% a 200% do salário anual da pessoa |

Mais absenteísmo evitado: dor lombar e pélvica é a queixa número um da gestação, e
Pilates na gestação pode contribuir para menos afastamentos, com acompanhamento
adequado.

### 5.2 Vantagem tributária (depende do regime da empresa)

- **Lucro Real:** o benefício, quando oferecido a todas as colaboradoras sem
  distinção, é **despesa operacional dedutível** de IRPJ e CSLL. Isso reduz o custo
  líquido do benefício em cerca de um terço.
- **Lucro Real, jogada de médio prazo:** a **Lei de Incentivo ao Esporte** (Lei
  11.438/2006) permite destinar até 2% do IRPJ devido a um **projeto esportivo
  aprovado** ("desporto de participação") e deduzir 100%, com custo líquido perto de
  zero. Um programa de Pilates para gestantes pode, em tese, ser enquadrado como
  desporto de participação, mas exige projeto aprovado pelo Ministério do Esporte,
  proponente habilitado e prestação de contas. A regulamentação de 2024 restringiu
  parte da dedutibilidade. Não é para a v1, é um caminho a estudar com contador se o
  volume justificar.
- **Lucro Presumido ou Simples Nacional:** não há dedução da despesa (a tributação é
  por presunção ou por faturamento). Nesses casos o apelo é só a economia indireta da
  seção 5.1, não a fiscal.
- Não confundir com PAT (é alimentação) nem com o plano de saúde.

### 5.3 Base de evidência (para o material do cliente e para a conversa)

Tudo aqui é **probabilístico**, depende de cada caso e não substitui o pré-natal.
A direção, porém, se repete em estudos grandes.

| Achado | Ordem de grandeza | Fonte |
|---|---|---|
| Gestantes com dor lombar | 2 em 3 (e cerca de 1 em 5 com dor pélvica) | Revisão Cochrane; estudos brasileiros de prevalência (70% a 73%) |
| Redução do trabalho de parto com Pilates | cerca de 1 hora (fase ativa cerca de 54 min, segundo estágio cerca de 17 min); menos dor relatada no parto | Ensaio clínico randomizado, BMC Pregnancy and Childbirth, 2021 (103 gestantes) |
| Menos cesárea com exercício na gestação | cerca de 9% | Meta-análise, Frontiers in Clinical Diabetes and Healthcare, 2025 (cerca de 80 mil gestantes) |
| Menos macrossomia e menos parto prematuro | cerca de 40% a 50% | mesma meta-análise |
| Menos diabetes gestacional com atividade física regular | cerca de 30% | Revisões sistemáticas |
| Trabalho em pé mais de 3 a 4 horas por dia | mais parto prematuro e bebê pequeno para a idade gestacional | Meta-análise de atividades ocupacionais na gestação, 2020 |
| Trabalho muito sentado | mais diabetes gestacional e ganho de peso excessivo | Literatura de sedentarismo na gestação |
| Cesárea na saúde suplementar | cerca de 84% dos partos (OMS recomenda cerca de 15%) | Ministério da Saúde e ANS |
| Cesárea x parto normal, custo | cerca de 15% mais cara na mediana; multiplica com complicação | Ciência e Saúde Coletiva, 2024 |
| Mulheres fora do emprego até 24 meses da licença | cerca de 48%, na maioria por decisão da empresa | FGV, "Mulheres perdem trabalho após terem filhos" |
| Nascimentos no Brasil em 2024 | 2,38 milhões, queda de 5,8%, sexto ano seguido de queda | IBGE, Estatísticas do Registro Civil 2024 |

Enquadramento honesto: para a **dor durante a gestação** a evidência é fraca; para o
**trabalho de parto**, a **dor no parto** e os **desfechos do bebê**, é consistente.
A cesárea é essencial quando há indicação; o ganho está em evitar a que não precisa.
O diferencial do Fiore (fisioterapeuta, avaliação individual, adaptação por fase) não
tem ensaio próprio, é argumento de qualidade de execução, não de desfecho medido.

## 6. Argumento para a colaboradora (dedução no IRPF)

Pilates é dedutível como despesa médica no Imposto de Renda da pessoa física
**somente quando o serviço é prestado por fisioterapeuta** registrado no
COFFITO/CREFITO (Pilates fisioterapêutico). Base: **Solução de Consulta Cosit nº
32/2024** da Receita Federal.

Condições:
- Recibo ou nota fiscal com nome do fisioterapeuta e o número de registro no CREFITO,
  mais CPF ou CNPJ.
- Só aproveita quem declara no modelo completo (por deduções legais), não no
  simplificado.
- Pilates conduzido por educador físico **não** é dedutível.

**Hoje 100% das aulas na Fiore Pilates são conduzidas por fisioterapeutas**, então
esse argumento está disponível: basta emitir a nota como serviço de fisioterapia, com
o registro no CREFITO. Se a colaboradora tiver coparticipação, é essa parcela paga por
ela que ela pode deduzir. É também um diferencial de posicionamento: Pilates clínico,
conduzido por fisioterapeuta, não academia.

## 7. ICP e score de prospecção (só Bauru)

Fonte de dados: LinkedIn (porte, setor, sede), listas GPTW e rankings regionais,
avaliações Glassdoor e Google, e consulta de CNPJ (porte, CNAE, regime). CNPJ, regime
e distância de cada alvo ainda estão por confirmar; enquanto o volume for pequeno, a
lista vive aqui mesmo, sem planilha nem ferramenta.

### 7.1 Lista de prospecção

Ordenada por score. Status e próximo passo atualizados à mão.

| Empresa | Setor | Porte | Regime | Score | Status | Próximo passo e notas |
|---|---|---|---|---|---|---|
| Unimed Bauru | Saúde / operadora de plano e hospital | ~2000 | Cooperativa | 90 | a prospectar | Mapear contato do RH. Argumento de sinistralidade é o mais forte; cerca de 1500 mulheres no quadro |
| Rede Confiança Supermercados | Varejo supermercadista | ~4500 | Lucro Real | 87 | proposta enviada em 2026-08-31 | E-mail com PDF para evieira@confianca.com.br e guilherme.fernandes@confianca.com.br, aguardando retorno. Muita mulher em caixa e no administrativo |
| Tilibra (ACCO Brands) | Indústria de papelaria e material escolar | 1000 a 2000 | Lucro Real | 83 | proposta registrada em 2026-08-31 | Enviada pelo formulário de parceria, retorno para matheus@fiorepilates.com.br. Multinacional, pico sazonal na volta às aulas |
| OdontoCompany | Franqueadora de odontologia (sede) | 500 a 1000 | Lucro Real | 83 | a prospectar | Falar com o RH da sede, não das franquias. Considerar só o quadro da franqueadora em Bauru |
| Concilig | BPO de cobrança e telemarketing | ~5000 | Lucro Real | 82 | a prospectar | Contato RH ou área de bem-estar. Maior empregador BPO local, jornada de 6h; Glassdoor aponta salário baixo |
| AeC (unidade Bauru) | Contact center / BPO | 1000 a 2000 na unidade | Lucro Real | 77 | a prospectar | RH da unidade de Bauru. Decisão pode ser regional (HQ em BH); Glassdoor negativo sobre jornada |
| Sicredi Centro Oeste Paulista | Cooperativa de crédito | 300 a 500 | Cooperativa | 77 | a prospectar | RH regional. Cultura forte de bem-estar (GPTW recorrente), porte menor mas alta chance de aceitar |
| UNISAGRADO | Ensino superior privado | 500 a 900 | Imune (entidade educacional) | 75 | a prospectar | RH. Apelo fiscal fraco por ser imune; usar retenção e absenteísmo. Já tem parceria com empresas |
| Hospital de Base de Bauru | Saúde hospitalar | ~1200 | Filantrópico / associação | 74 | contato iniciado (Matheus) | Ligar no RH pelo (14) 3231-4770 e pedir o RH (ação 2026-09-01). Abordagem foi pelo WhatsApp do Hemocentro (14) 3231-4771, que orientou isso. Apelo fiscal fraco, foco em afastamento e escala |
| eSapiens Tecnologia | Tecnologia / venture builder | ~108 | Lucro Real ou Presumido | 63 | a prospectar | Contato direto com a liderança. Abaixo do porte ideal mas cultura e abertura altíssimas, bom para piloto rápido |
| Sincomércio Bauru e Região | Canal: sindicato patronal do comércio varejista | quadro próprio pequeno mais lojas associadas | n/a | canal | contato iniciado (Matheus) | Enviar proposta por e-mail para katiana@sincomerciobauru.com.br (ação 2026-09-01). Canal multiplicador para o varejo de Bauru pelas associadas. Ver seção 8 |

**Rubrica de score (0 a 100):**

| Critério | Peso | Como medir |
|---|---|---|
| Porte (nº de funcionários) | 25 | 150 ou mais pontua alto |
| % de mulheres em idade fértil (20 a 40) | 20 | amostragem no LinkedIn, setor como proxy |
| Tem plano de saúde empresarial | 15 | vagas publicadas, site de carreiras |
| Regime Lucro Real | 10 | consulta de CNPJ, porte |
| Reputação como empregador | 15 | selo GPTW, nota Glassdoor e Google |
| Proximidade do estúdio | 10 | distância até a R. Baltazar Rodrigues, 4-82 |
| Porte econômico e faturamento | 5 | porte na Receita, rankings, headcount |

**Eliminatório:** não ter operação em Bauru.

**Setores que concentram o público:** saúde, educação (universidades de Bauru),
varejo, bancos e cooperativas, BPO e call center, indústria de alimentos e calçadista,
serviços.

## 8. Canal: Salutem e administradoras de benefícios

**Salutem corporativo.** R. Gustavo Maciel, 11-47, Centro, Bauru. Seg a sex, 8h às
17h30. Administra benefícios, parcerias e saúde ocupacional para empresas de Bauru.

Duas hipóteses de relação, a definir na primeira reunião:

1. **Salutem como canal.** O Fiore entra no clube de parcerias da Salutem e fica
   exposto a várias empresas de uma vez. Menor custo de aquisição, provável repasse ou
   comissão à Salutem, margem menor e menos controle da experiência.
2. **Salutem como porta de entrada.** Ela apresenta o Fiore ao RH das empresas-alvo e
   o contrato é Fiore com a empresa, direto.

**Decisão: testar as duas em paralelo.** Na reunião com a Salutem, explorar a entrada
no clube de parcerias (hipótese 1) e, ao mesmo tempo, pedir apresentação a 1 ou 2
empresas-alvo para contrato direto (hipótese 2). A hipótese 2 é a que dá contrato
âncora com controle de preço e experiência; a hipótese 1 é a que dá volume. Comparar o
resultado das duas no mês 3.

## 9. Roteiro de abordagem do RH

1. **Dor:** gestantes com dor e afastamento, retorno difícil pós-licença,
   sinistralidade do plano subindo.
2. **Solução:** programa presencial no Fiore, especializado em gestação, com liberação
   médica e linguagem ética.
3. **Formato:** número de vagas, frequência semanal, relatório trimestral de adesão
   para o RH.
4. **Prova:** o Fiore é especializado nisso, a própria clínica é o case.
5. **Proposta:** piloto de 3 meses com N vagas, contrato de 12 meses, revisão no mês 3.
6. **Números:** levar a seção 5 adaptada ao regime tributário da empresa.

## 10. Guardrails éticos e médicos

Valem integralmente os do
[ADR 0005](../adr/0005-conteudo-etico-e-prova-social-real.md):

- Liberação médica obrigatória por gestante antes de começar.
- Linguagem sem promessa médica ("pode contribuir", "com acompanhamento adequado",
  "respeitando cada fase"). O programa não substitui o pré-natal.
- Prova social só real, sem inventar depoimento ou nota.
- NAP idêntico ao do site e do Google.

## 11. Métricas da v1 e critério de sucesso

- 1 a 2 empresas com contrato assinado.
- 5 ou mais gestantes ativas frequentando em até 90 dias.
- Adesão acima de 70% (comparecimento sobre o consumo esperado).
- Receita por sessão de R$ 55, acima de qualquer canal atual.
- Revisão no mês 3. Se não bater, parar e repensar antes de escalar.

## 12. Pendências e decisões em aberto

- Custo real por sessão (instrutor mais rateio), só para saber a margem em R$ 55.
- Como o sistema da clínica marca a empresa de cada gestante no cadastro e fecha o
  total por empresa no mês.
- Regime tributário de cada empresa-alvo. Sai da pesquisa de prospecção (coluna
  Regime da tabela da seção 7). Define qual parte da seção 5.2 usar.
- Reunião com a Salutem para destravar as duas hipóteses de canal da seção 8.
- Contato e e-mail que virão pela indicação.

## 13. Decisões já fechadas

- Nome: **Florescer Empresas**.
- Coparticipação: **100% empresa na v1**.
- Precificação: **pós-pago mensal por sessão realizada**, taxa corporativa **R$ 55 por
  sessão** em contrato de 12 meses. Sem bloco fechado. Mínimo mensal só se a empresa
  quiser horário de pico reservado.
- Agendamento: a gestante marca pelo fluxo normal (6h às 20h), com a empresa dela
  registrada no cadastro.
- Canal: **testar Salutem como clube de parcerias e como porta de entrada, em
  paralelo**.
- As aulas são **100% conduzidas por fisioterapeutas** (posicionamento de Pilates
  clínico e dedução de IRPF disponível).
- Escopo v1: **só Bauru**, 1 a 2 empresas âncora, entrega no estúdio, pipeline na
  tabela da seção 7, sem ferramenta nova.

## Relacionados

- [ADR 0017: Florescer Empresas, linha B2B2C](../adr/0017-florescer-empresas-modelo-b2b2c.md)
- [ADR 0013: Grupo Fiore como branded house](../adr/0013-grupo-fiore-arquitetura-de-marca.md)
- [ADR 0005: conteúdo ético e prova social real](../adr/0005-conteudo-etico-e-prova-social-real.md)
- [GRUPO-FIORE.md](GRUPO-FIORE.md)
- [florescer-empresas-proposta-modelo.md](florescer-empresas-proposta-modelo.md)
