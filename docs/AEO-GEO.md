# AEO / GEO — aparecer nas respostas de IA (ChatGPT, Gemini, Perplexity, AI Overviews)

> AEO = Answer Engine Optimization · GEO = Generative Engine Optimization.
> Objetivo: quando alguém pergunta a uma IA "melhor Pilates para gestante em Bauru",
> "onde fazer fisioterapia pélvica em Bauru", "quanto custa Pilates na gravidez", a
> resposta cita a Fiore.
> **[M]** = ação da Raquel/Matheus (fora do código) · **[C]** = já feito ou a fazer no site.
> Ver [ADR 0019](adr/0019-aeo-geo-otimizacao-para-busca-generativa.md) para o "porquê".

## Como as IAs escolhem quem citar (resumo da pesquisa, 2026)

- **Local ("perto de mim", cidade):** o **Google Perfil da Empresa (GBP)** é a fonte
  nº 1. ChatGPT/Gemini/AI Overviews montam a resposta local a partir dele + reviews +
  dados consistentes na web. Numa amostra local: Google mostrou o negócio em 35,9% das
  buscas; ChatGPT 1,2%, Perplexity 7,4%, Gemini 11%. É jogo de médio prazo (2 a 4 meses).
- **ChatGPT Search e Copilot usam o índice do Bing.** Estar no Bing Webmaster Tools é
  pré-requisito para ser citado por eles.
- **Schema (JSON-LD) é lido antes do texto.** ~71% das páginas citadas pelo ChatGPT e
  ~65% das citadas pelo Google AI Mode têm structured data. Não garante citação, mas
  multiplica a chance.
- **Conteúdo em formato de resposta.** Pergunta + resposta direta na 1ª frase.
  Estudo de Princeton: adicionar estatística, fonte e citação aumenta a visibilidade em
  IA em até 40%. Frase vaga é ignorada; frase específica e "autossuficiente" é citada.
- **Corroboração em terceiros.** A IA sintetiza de várias fontes que concordam entre si
  (imprensa, diretórios, portais de saúde, redes). Uma menção só no próprio site pesa pouco.
- **llms.txt praticamente não é usado** pelos crawlers (Google ignora oficialmente).
  Mantemos um mínimo em `/llms.txt` por baixo custo, sem esperar efeito em ranking.

## O que já está no site [C]

- Schema `HealthAndBeautyBusiness` + `Physiotherapy` com `@id` único
  (`https://fiorepilates.com.br/#business`), `geo`, `hasMap`, `openingHoursSpecification`,
  `aggregateRating` (5,0 / 45, dados reais do Google), `founder`, `priceRange`,
  `sameAs` (Instagram, Facebook, TikTok, Google Maps), `knowsAbout` (tópicos de
  especialidade), `makesOffer` com URL de cada serviço.
- Toda página de serviço referencia o mesmo negócio por `@id` (consolida a entidade
  para a IA).
- `FAQPage` em todas as páginas, com perguntas de intenção real ("quanto custa o
  Pilates para gestante em Bauru", "posso fazer no primeiro trimestre", "precisa de
  liberação do obstetra", "a Fiore atende só gestantes", "a fisioterapia pélvica dói").
- `/llms.txt` com resumo do negócio e das páginas.
- `robots.txt` libera explicitamente os robôs de IA.
- HTML estático rápido, headings semânticos, resposta direta na 1ª frase de cada FAQ.

## Passo a passo [M] — ordem de prioridade

### 1. Google Perfil da Empresa (impacto mais alto)
1. Acessar business.google.com com a conta da Fiore.
2. **Categorias:** categoria principal "Estúdio de pilates"; secundárias "Fisioterapeuta",
   "Personal trainer" se disponível.
3. **Serviços:** cadastrar um a um, com descrição de 2 a 3 linhas cada, usando as
   mesmas palavras do site: Pilates para gestantes, Fisioterapia pélvica e saúde da
   mulher, Pilates pós-parto, Pilates para idosos e reabilitação, Programa Florescer.
4. **Atributos:** "atende mulheres", acessibilidade, estacionamento, Wi‑Fi, banheiro,
   agendamento online (link do WhatsApp).
5. **Descrição do perfil (750 caracteres):** reaproveitar o parágrafo de abertura do
   site + NAP + horário + "comece com liberação médica".
6. **Fotos:** subir 15 a 20 fotos reais (fachada, recepção, salas, aparelhos, aula, equipe).
   Depois, **3 fotos novas por semana**.
7. **Perguntas e respostas:** a própria Fiore publica de 8 a 10 perguntas (as mesmas do
   FAQ do site) e responde. Isso semeia o Q&A antes que terceiros perguntem.
8. **Posts:** 1 post por semana (evento, dica, bastidor, novidade).
9. **NAP idêntico ao site:** "R. Baltazar Rodrigues, 4-82, Jardim Planalto, Bauru/SP" e
   "(14) 99659-8955". Conferir também o CEP (o site usa 17012-090; a bio do Instagram
   mostra 17012-621 — padronizar os três num valor só).

### 2. Bing Webmaster Tools (destrava ChatGPT Search e Copilot)
1. bing.com/webmasters → entrar com a mesma conta Google (importa direto do Search Console).
2. Adicionar `https://fiorepilates.com.br/`.
3. Enviar `https://fiorepilates.com.br/sitemap.xml`.
4. Conferir "Site Explorer" depois de alguns dias para ver o que foi indexado.

### 3. Motor de avaliações (volume + recência)
- Meta: 8 a 10 avaliações novas por mês no Google (hoje ~0). Concorrente Quality
  Pilates tem 132 com a mesma nota 5,0. É volume que falta.
- Pedir sempre ao fim de um ciclo bom (fim da avaliação inicial, pós-parto, alta),
  com o link curto `https://g.page/r/CS2fBMfwzWG6EAE/review`.
- Usar o NPS do Mirae como gatilho: nota alta → link do Google.
- **Responder 100% das avaliações**, citando o serviço na resposta ("Que bom que o
  Pilates na gestação te ajudou...").

### 4. Presença citada em terceiros (corroboração)
- Garantir que a matéria da **TV TEM** esteja linkável (URL pública) e citada no site
  (já está em `/eventos`).
- Cadastro em diretórios locais confiáveis: guia de Bauru, Apontador, portais de saúde
  da mulher, Doctoralia (perfil da Raquel como fisioterapeuta).
- Parcerias com obstetras e doulas de Bauru que linkem ou citem a Fiore.
- Pauta em veículo escrito local (JCNet, Social Bauru) — item 3.5 do ROADMAP.

### 5. Instagram e conteúdo (autoridade)
- Subir a cadência: hoje ~0,7 post/semana; meta 4 a 5. Reels educativos respondendo
  perguntas reais ("dá pra fazer Pilates no 1º trimestre?") viram material que a IA
  também lê.
- Bio com link para o site (já feito, ADR 0016).

## Como medir (mensal)
- Perguntar direto ao ChatGPT, Gemini e Perplexity: "melhor pilates para gestante em
  Bauru", "onde fazer fisioterapia pélvica em Bauru", "quanto custa pilates na
  gravidez em Bauru" — anotar se a Fiore aparece e em que posição.
- Google Search Console: consultas, páginas indexadas, posição para "pilates gestantes
  bauru".
- Bing Webmaster: páginas indexadas e cliques.
- GBP Insights: visualizações, cliques para WhatsApp, pedidos de rota.
- Nº de avaliações no Google (meta 8 a 10/mês).

## Manutenção do schema [C]
- Ao criar página nova: `Service` + `BreadcrumbList` + `FAQPage`, `provider` referenciando
  `@id` do negócio, e adicionar a página ao `makesOffer` e ao `/llms.txt`.
- Ao mudar horário, endereço, telefone ou nota do Google: atualizar o schema do
  `index.html` **e** o GBP no mesmo dia (NAP idêntico, princípio 4 do ROADMAP).
- Validar sempre: `grep -n "—\|–" *.html` (sem travessão) e o Rich Results Test do Google.

---

## Auditoria do Perfil da Empresa (2026-09-01, feita via Chrome MCP)

Conta: gerenciada pela Fiore. 279 interações com clientes. 1.027 visualizações no Maps.

### O que está bom
- **Nota 5,0 · 45 avaliações** (bate com o schema do site).
- **NAP:** telefone (14) 99659-8955, endereço R. Baltazar Rodrigues 4-82, Jardim Planalto,
  Bauru/SP — consistentes. **CEP no GBP e no Instagram: 17012-621** (o site estava com
  17012-090; **corrigido no schema em 2026-09-01**; falta só confirmar no Correios que
  621 é o correto).
- **Horário:** seg a sex 06:00–20:00, sáb 07:00–12:00, dom fechado — idêntico ao site.
- **Redes sociais** cadastradas: Instagram, Facebook, TikTok (batem com o `sameAs`).
- **Atributos:** acessibilidade completa (banheiro, entrada, estacionamento, assento),
  "empresa de empreendedoras", estacionamento gratuito no local.
- **Respostas a avaliações:** só **1 pendente** (Jade Garcia, "Excelente ambiente e
  profissionais", há ~4 semanas). O hábito de responder existe.
- Horários de pico populados (tráfego real).

### Problemas, por prioridade (ação [M], salvo indicado)

1. **Nome do perfil = "Fiore Pilates e Fisioterapia para Gestantes".** Tem palavra-chave
   ("para Gestantes") no nome, o que viola a diretriz do Google (nome = nome real do
   negócio) e diverge do site ("Fiore Pilates"). Risco de suspensão/edição forçada.
   Padronizar para o nome real e igual em site, GBP, Instagram e Facebook. Sugestão:
   **"Fiore Pilates e Fisioterapia"** (o `alternateName` do schema).
2. **Categoria principal = "Clínica de Fisioterapia".** Para as buscas de "pilates" e
   "pilates gestante bauru" isso enterra a Fiore. Trocar a **principal para "Estúdio de
   pilates"** e deixar "Clínica de Fisioterapia"/"Fisioterapeuta" como secundárias.
   Revisar "Loja para gestantes" (não é loja) — considerar remover.
3. **Card do Maps aparece como "Casa".** Há um "Marcador: Casa" no ponto do endereço e o
   Maps mostra "Casa" como título, com o nome do negócio abaixo. Provavelmente o ponto
   está num endereço residencial. Abrir chamado no suporte do Google Business / usar
   "Sugerir mudança" para corrigir o tipo do local para estabelecimento comercial.
4. **Descrição com 1 linha** ("Transformar a jornada da maternidade com cuidado integral
   e propósito."), de 750 disponíveis. Reescrever com o 1º parágrafo do site + serviços +
   NAP + "comece com liberação médica".
5. **Serviços não curados.** Estão os sugeridos genéricos do Google (Acupuntura,
   Massagens, Quiropraxia, Fisioterapia...), **sem descrição**. Substituir pela lista
   real do site (Pilates para gestantes, Fisioterapia pélvica e saúde da mulher, Pilates
   pós-parto, Pilates para idosos e reabilitação, Programa Florescer, Avaliação inicial),
   cada um com 2 a 3 linhas.
6. **Posts: 0 no ar, 2 rejeitados** ("Black Friday ... 30% OFF" e "café da manhã com
   gestantes"). O de Black Friday provavelmente caiu por linguagem promocional/desconto e
   texto na imagem. Recomeçar com 1 post/semana (evento, dica, bastidor), sem "%OFF" nem
   imagem coberta de texto.
7. **Perguntas e respostas: 0.** A Fiore mesma deve publicar 8 a 10 perguntas (as do FAQ
   do site) e respondê-las.
8. **Fotos:** última foto há ~28 dias. Subir um lote agora (15 a 20) e manter 3/semana.
9. **1 avaliação sem resposta** (Jade Garcia). Responder citando o serviço.
