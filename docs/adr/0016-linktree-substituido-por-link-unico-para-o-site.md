# ADR 0016 — Linktree substituído por link único da bio para o site

Data: 2026-08-29 · Status: aceito

## Contexto

A bio do Instagram (@pilatesfiore) apontava para `linktr.ee/fiorepilates`. Auditoria
do Linktree (conteúdo real puxado via Apify) encontrou 5 links:

1. "Bolão Copa do Mundo 2026" → `fiorepilates.com.br/` (campanha encerrada em
   2026-07-27, histórico na seção "Campanha" do [ROADMAP.md](../ROADMAP.md); rótulo
   desatualizado, destino já era a home).
2. "Fiore Pilates | Estúdio de Pilates Especializado" → `fiorepilates.com.br/`
   (duplicata do item 1, mesma URL).
3. "Programa Florescer" → `wa.me/5514996598955` com mensagem pré-preenchida (não
   apontava para a página `/florescer`, que já existe).
4. "Pilates em casa" → `edzz.la/LEKBD` (checkout Eduzz de um produto digital pago que
   nunca existiu no site nem na documentação). **Confirmado com os donos em 2026-08-29:
   produto encerrado**, sem venda ativa.
5. "Mirae | Sistema de gestão para o seu estúdio" → `mirae.fiorepilates.com.br/`
   (coerente com o [ADR 0015](0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md):
   o Mirae não é vendido no site da clínica; a venda B2B fica na landing do Mirae).

Ou seja, dos 5 links, 4 já eram cobertos pelo site (home, home, `/florescer`, rodapé
Mirae) e 1 estava morto. O Linktree só adicionava um clique e um domínio de terceiro
entre a bio e a ação.

### Dados que embasaram a decisão

- Linktree e agregadores de link têm CTR médio de 1-3%, não são indexados por
  buscadores e não dão visão de funil. O Linktree ainda aumentou o preço em 67% em
  novembro de 2025.
- Site próprio com domínio custom converte de 3 a 5 vezes mais: permite SEO, controle
  total de marca e analytics de verdade (a Fiore já tem GA4 `G-GN6B6NJNKL`
  instrumentado por seção de CTA).
- Pesquisa de concorrentes (bios reais coletadas em 2026-08-29): nenhum estúdio local
  do porte da Fiore usa Linktree. Estúdios locais (@pilatesbelavista e
  @espaco_bemestar, ambos de Bauru; @mammame.curitiba, de Pilates para gestantes)
  apontam a bio direto para o WhatsApp. Carolina Garcez Fisiopilates aponta para o
  site próprio, com CTA de WhatsApp em todas as seções. A referência mais próxima em
  posicionamento (Patricia Valeriano, autoridade em Pilates para gestantes, 30 mil
  seguidores) roda a página de links no domínio próprio, fugindo do Linktree.
  Agregador de link só aparece em franquia nacional (Pure Pilates, +480 unidades) e
  em quem vende muitos infoprodutos. O levantamento canônico e recorrente de
  concorrentes fica em [BENCHMARKING.md](../BENCHMARKING.md); os perfis acima são o
  recorte de bios feito para esta decisão.

## Decisão

**Remover o Linktree. A bio do Instagram passa a ter um único link, apontando para a
home do site:**

```
https://fiorepilates.com.br/?utm_source=instagram&utm_medium=bio
```

Justificativa de apontar para a home (e não para uma sub-página ou para o WhatsApp
cru):

- A home já é a versão mais completa de uma "bio que leva à ação": CTA "Agendar
  avaliação inicial" acima da dobra (hero, header e menu mobile), selo 5,0 / 44
  avaliações do Google no topo, seção de gestantes como primeiro bloco, `.wa-float` e
  `.mobile-bar` fixa no celular. Mantém o "1 clique até o WhatsApp" e ainda entrega
  marca, contexto de primeira visita, SEO e funil no GA4.
- É a única URL que serve 100% de quem chega pela bio: gestantes (foco), e também
  saúde da mulher, pós-parto e idosos.
- É uma URL estável: não fica desatualizada quando uma campanha começa ou termina.
- Os parâmetros `utm_source=instagram&utm_medium=bio` permitem medir no GA4 o tráfego
  vindo da bio e o efeito da migração. Não carregam dado pessoal.

Páginas de campanha (`/guia-gestante`, `/florescer`) continuam sendo destino de
**anúncios pagos e stories**, com link próprio na peça. Link fixo da bio e link de
campanha são ferramentas diferentes. Isto substitui as anotações antigas e
conflitantes em `docs/LEAD-MAGNET.md` e `docs/ROADMAP.md` (item 2.2) que davam a bio
como destino de `/guia-gestante` ou `/florescer`.

O link do Mirae sai da bio da clínica e permanece só onde já está: rodapé do site
("Acessar o app (Mirae)") e canais B2B do Mirae, conforme [ADR 0015](0015-unidade-tech-oferta-comercial-e-regra-de-dominio.md).

## Alternativas consideradas

- **Bio → `/gestantes`.** Bate 1:1 com o posicionamento do perfil. Recusada como
  padrão porque a home já abre com gestantes mais prova social e ainda atende os
  outros públicos. Fica como opção fácil de trocar depois, se o GA4 mostrar que vale.
- **Bio → WhatsApp direto** (como fazem os estúdios locais pesquisados). Recusada
  porque joga fora contexto de primeira visita, SEO e analytics. A home entrega o
  mesmo clique para o WhatsApp com tudo isso junto.
- **Página `/links` no próprio domínio** (modelo Patricia Valeriano). Recusada porque
  a Fiore não tem destinos suficientes para justificar: só recriaria o clique extra do
  Linktree.
- **Manter o Linktree, só limpando os links.** Recusada pelos dados de conversão,
  indexação, custo e funil acima.

## Consequências

- **Ação manual dos donos (fora deste repo).** Feito em 2026-08-29: o link da bio do
  Instagram foi trocado para a URL acima. O Linktree `linktr.ee/fiorepilates` **não
  foi despublicado**, por decisão do dono; fica no ar como página órfã (nada mais
  aponta para ela). Os ícones de rede social do perfil (Instagram, WhatsApp, TikTok,
  Facebook) não dependem do Linktree e continuam como estão.
- O produto "Pilates em casa" (Eduzz) deixa de ser divulgado. Se for reativado no
  futuro, precisa de destino próprio (seção ou página no site) e de um ADR novo.
- Acompanhar no GA4, nas primeiras semanas, o tráfego `instagram / bio` e a taxa de
  clique nos CTAs de WhatsApp da home, para confirmar o ganho.
- Se a home virar destino de tráfego frio de Instagram em volume, priorizar no
  roadmap qualquer ajuste de above-the-fold mobile que a medição indicar.

## Como manter

- A bio tem **um** link só. Campanha nova ganha link próprio na peça (anúncio,
  story, destaque), nunca vira mais um item de um agregador.
- Não reintroduzir Linktree nem similar sem reabrir este ADR.
- Manter os `utm_*` no link da bio para o GA4 continuar separando esse tráfego.
- Se o Linktree órfão vier a incomodar (link antigo circulando, alguém caindo numa
  página velha), despublicar em `linktr.ee` sem precisar de novo ADR.
