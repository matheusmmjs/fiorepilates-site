# ADR 0019 — AEO/GEO: otimizar para busca generativa (ChatGPT, Gemini, Perplexity, AI Overviews)

Data: 2026-09-01 · Status: aceito

## Contexto

Em 2026, cerca de 45% das pessoas pedem indicação de negócio local a um assistente de
IA (era 6% em 2025). A Fiore quer ser citada quando alguém pergunta a uma IA por
Pilates para gestantes, fisioterapia pélvica ou preço de Pilates na gravidez em Bauru.

Pesquisa feita em set/2026 (fontes no [AEO-GEO.md](../AEO-GEO.md)):

- Para consultas locais, o **Google Perfil da Empresa** é a principal fonte das IAs;
  reviews (volume e recência) e consistência de NAP na web vêm logo depois.
- **ChatGPT Search e Copilot usam o índice do Bing** — estar no Bing Webmaster Tools
  é pré-requisito.
- **Structured data (JSON-LD) é lido antes do texto**; a maioria das páginas citadas
  por ChatGPT e Google AI Mode tem schema. Não garante nada, mas multiplica a chance.
- Conteúdo em **formato de pergunta e resposta**, com resposta direta e específica na
  primeira frase, é citado com mais frequência (estudo de Princeton: +40% com
  estatística/fonte/citação).
- **`llms.txt` praticamente não é consumido** pelos crawlers e o Google o ignora
  oficialmente.

## Decisão

Tratar AEO/GEO como uma frente própria, não como subitem de SEO, com metade da ação
**fora do código** (GBP, Bing, reviews, imprensa) documentada em
[AEO-GEO.md](../AEO-GEO.md) para a Raquel/Matheus executarem.

No site (feito nesta rodada):

1. Enriquecer o schema do negócio no `index.html`: `@type` passa a
   `["HealthAndBeautyBusiness", "Physiotherapy"]`; adicionados `slogan`, `knowsAbout`
   (tópicos de especialidade), `image` como lista de fotos reais; `makesOffer` com
   `url` de cada serviço e nomes atualizados após a fusão do
   [ADR 0018](0018-unificacao-fisioterapia-pelvica-e-saude-da-mulher.md).
2. Toda página de serviço passa a referenciar o negócio pelo mesmo `@id`
   (`https://fiorepilates.com.br/#business`) em vez de repetir dados parciais — ajuda a
   IA a consolidar tudo numa entidade só.
3. FAQ expandido com perguntas de intenção real e resposta direta na primeira frase
   ("quanto custa o Pilates para gestante em Bauru", "posso fazer no primeiro
   trimestre", "precisa de liberação do obstetra", "a Fiore atende só gestantes",
   "as aulas são individuais ou em grupo", "a fisioterapia pélvica dói"). Texto enxuto.
4. `/llms.txt` mínimo com resumo do negócio e das páginas (baixo custo, sem expectativa
   de ranking).
5. `robots.txt` libera explicitamente os robôs de IA e aponta o `/llms.txt`.

Não feito de propósito:

- **Sem `Review` individual no schema.** Mantém-se só o `AggregateRating` real do
  Google. `Review` "self-serving" não gera rich result desde 2019 e o princípio 2 do
  ROADMAP (prova social só real) pede cautela. Reavaliar se surgir uma coleta de
  avaliações estruturada.
- **Sem investir em `llms.txt` além do mínimo.**

## Consequências

- É jogo de médio prazo: conteúdo novo pode ser citado em 3 a 5 dias, mas
  consistência leva de 2 a 4 meses.
- O maior gargalo agora é **fora do código**: GBP completo, Bing Webmaster e volume de
  avaliações. O site já não é o fator limitante.
- Toda página nova precisa seguir o checklist de manutenção de schema do
  [AEO-GEO.md](../AEO-GEO.md).
- Auditoria do GBP feita em 2026-09-01 (via Chrome MCP), achados e punch-list em
  [AEO-GEO.md](../AEO-GEO.md#auditoria-do-perfil-da-empresa-2026-09-01-feita-via-chrome-mcp).
  CEP do site alinhado ao GBP/Instagram (17012-621); falta confirmar no Correios.
  Principais achados do GBP: nome com palavra-chave, categoria principal errada
  ("Clínica de Fisioterapia" em vez de "Estúdio de pilates"), card do Maps aparecendo
  como "Casa", descrição de 1 linha, serviços genéricos, 0 posts no ar, 0 Q&A.
