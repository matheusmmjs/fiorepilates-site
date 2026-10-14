---
name: Fiore Pilates
description: Site institucional acolhedor e premium de um estúdio de Pilates para gestantes em Bauru
colors:
  ink: "#21231E"
  olive: "#5C633E"
  sage: "#868F5E"
  pistachio: "#B2BC7D"
  pistachio-soft: "#CCD4A1"
  mist: "#ECF0CF"
  mist-soft: "#F5F8E3"
  paper: "#FDFFF7"
  text: "#21231E"
  text-soft: "#45473D"
  text-mute: "#63655A"
  line: "rgba(33, 35, 30, 0.16)"
  line-soft: "rgba(33, 35, 30, 0.09)"
  whatsapp: "#1f7a52"
typography:
  display:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(3rem, 9vw, 7.5rem)"
    fontWeight: 200
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  display-sub:
    fontFamily: "Poppins, system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
    fontSize: "clamp(2.1rem, 5vw, 3.2rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.01em"
  h1:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(2.3rem, 5.4vw, 4rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  h2:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  h3:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 2.4vw, 1.85rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "clamp(1.1rem, 1.7vw, 1.3rem)"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "normal"
  body:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  eyebrow:
    fontFamily: "Poppins, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  chip: "12px"
  md: "18px"
  lg: "28px"
  pill: "100px"
spacing:
  gutter: "clamp(1.25rem, 5vw, 3.5rem)"
  section: "clamp(3.5rem, 9vw, 7rem)"
  section-tight: "clamp(2.5rem, 6vw, 4.5rem)"
  maxWidth: "1180px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.7rem"
  button-primary-lg:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "1.1rem 2.1rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.7rem"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.95rem 1.7rem"
  card:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text-soft}"
    rounded: "{rounded.md}"
    padding: "clamp(1.5rem, 3vw, 2rem)"
  card-forest:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.md}"
    padding: "clamp(1.5rem, 3vw, 2rem)"
  cta-band:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.lg}"
    padding: "clamp(2.5rem, 6vw, 4.5rem)"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.text}"
    rounded: "{rounded.chip}"
    padding: "0.85rem 1rem"
---

# Fiore Pilates — Design System

Sistema visual do site institucional. Os **tokens do frontmatter são normativos**; o
texto abaixo diz como aplicá-los. Fonte de verdade no código: `assets/css/fiore.css`
(bloco `:root`). Ao mudar um token, mudar nos dois lugares.

## Design Principles

- **Acolhimento antes de tudo.** A sensação-alvo é "aqui eu vou ser cuidada de verdade".
  Nada de alarmismo, urgência ou linguagem fria de SaaS.
- **Calmo e premium.** Muito espaço em branco (creme), uma única cor de acento por tela,
  sombras suaves e difusas, cantos generosos. O luxo está na contenção.
- **Enxuto.** Copy e UI curtas. Cortar ~30% do rascunho. Não listar tudo que um serviço
  inclui.
- **Mobile-first.** A maioria chega pelo celular; a barra fixa de CTA no rodapé mobile é
  parte do layout.
- **Conversão para o WhatsApp.** Todo caminho leva a "Agendar avaliação inicial".

## Color

**Premissa:** cores só da paleta do manual; padrão completo em [docs/BRAND.md](docs/BRAND.md)
([ADR 0023](docs/adr/0023-padrao-de-marca-premissa.md)). Base da página é **paper**
(`#FDFFF7`, o branco quente oficial dos arquivos do logo); o fundo assinatura é **mist** (`#ECF0CF`), o
pistache das peças do manual; momentos escuros em **ink** (`#21231E`) com texto mist.
O bege "sand" antigo saiu: não existe no manual.

- **ink**: títulos, botão primário, seções escuras, rodapé.
- **olive** (`#5C633E`): rótulos, links, foco sobre fundo claro.
- **sage**: acento vivo, só em texto grande sobre claro (3,4:1 não serve para texto pequeno).
- **pistachio / pistachio-soft**: acento sobre fundo escuro, detalhes, ícones.
- **whatsapp** (`#1f7a52`): só no botão verde de WhatsApp.
- Aliases antigos continuam valendo no CSS (`--forest`=ink, `--cream`=paper, `--sand`=mist,
  `--gold`=olive, `--sage-tint`=mist-soft), para as páginas internas.
- Regra do acento único: numa mesma tela, o pistache OU um bloco ink carregam o destaque.

## Typography

Uma única família: **Poppins** auto-hospedada (pesos 200–600). Não reintroduzir
Fraunces nem Inter ([ADR 0007](docs/adr/0007-fidelidade-manual-marca-poppins.md)); o
comentário no topo do CSS que cita "Fraunces + Inter" está desatualizado.

- **display**: herói da home, Poppins **200**, grande e com tracking negativo (a "tipografia fina" pedida para 2027). Rótulos em maiúsculas espaçadas com numeração editorial ("01 · Manifesto"). O "serif-accent" dentro
  do título é `sage` peso 500 (não é outra fonte, é cor + peso).
- **display-sub** (`.display.display--sub`) — herói das páginas internas, mais quieto
  que o da home. É o padrão para o H1 de qualquer página que não seja a `index`.
- **h1–h4** — peso 400, `line-height` 1.08, `letter-spacing` -0.01em, cor forest.
- Alguns títulos de componente (`.pillar h3`, `.step-row h3`, `.footer-col h3`) usam o
  peso 600 de propósito para parecerem rótulo, não manchete.
- **lead** — subtítulo, peso 300.
- **eyebrow** — rótulo em maiúsculas, `letter-spacing` 0.18em, cor olive, com um traço
  de 1.75rem antes (e depois, quando centralizado).
- **body** — 1.0625rem, `line-height` 1.65. Parágrafos em `text-soft`.

## Layout & Spacing

- Container: `max-width` 1180px, padding lateral = `gutter`.
- Ritmo vertical: `section` entre blocos, `section-tight` para faixas menores.
- Grid de cards: `.cards.cols-2/3/4` colapsa para 1 coluna no mobile.
- `.split` = imagem + texto lado a lado a partir de 880px; `.split.reverse` inverte a
  ordem. Imagens de split usam `aspect-ratio` 4/5 (ou 3/4 em `.tall`), `object-fit: cover`,
  `rounded.lg` e sombra.
- Raios: `chip` (12px) para ícones e inputs, `md` (18px) para cards e faixas, `lg` (28px)
  para mídia e CTA band, `pill` (100px) para botões e selos.
- Sombras: sempre grandes, muito difusas e quase transparentes
  (`0 24px 60px -28px rgba(36,40,29,0.28)`). Nunca sombra dura ou próxima.

## Components

- **button-primary** — pílula forest/cream. `btn--lg` só aumenta o padding. Hover:
  `translateY(-2px)` + sombra suave (não cabe no schema de token).
- **button-ghost** — contorno em `line`, texto forest; no hover vira forest sólido.
- **button-whatsapp** — verde `#1f7a52`, só para "Falar no WhatsApp".
- Sobre fundo forest, usar `btn--on-dark` (fundo creme) ou `btn--on-dark.btn--ghost`.
- **card** — creme, borda `line-soft`, raio `md`. Hover: sobe 4px + sombra. Ícone num
  quadrado `sage-tint` 46px, raio 12px. `card--forest` inverte para bloco escuro.
- **cta-band** — bloco forest centralizado, raio `lg`, com o símbolo da folha a 8% de
  opacidade sangrando no canto inferior direito.
- **faq** — `<details>/<summary>` nativo, largura máx. 50rem, item separado por `line`.
  O controle `.pm` é um `+` que vira `−` (círculo forest) quando aberto. Sem marcador
  nativo do `<details>`.
- **checklist** — item com "tick" circular `sage-tint`/`sage` 22px.
- **eyebrow + h2 + lead** é o cabeçalho de seção padrão (`.section-head`, centralizado
  com `.center`).
- Header fixo que ganha fundo translúcido com blur ao rolar (`.is-scrolled`). Menu mobile
  é overlay full-screen creme; o botão dentro dele é `btn--block` (largura total).
- Elementos fixos: WhatsApp flutuante (desktop), barra de CTA no rodapé (mobile,
  empurra o `body` com `padding-bottom: 4.5rem`), botão "voltar ao topo".

## Motion

- Curva única: `--ease: cubic-bezier(0.22, 1, 0.36, 1)`, durações 0.3 a 1.6s.
- Sem bibliotecas (ADR 0002). Tudo em `fiore.js` e CSS: Ken Burns no hero, títulos e
  imagens com máscara ao entrar, manifesto que acende palavra por palavra, parallax leve
  (só desktop), carrossel com scroll-snap, depoimentos um por vez, faixa de cuidados em loop,
  header que some ao descer e volta ao subir.
- O conteúdo é visível sem JS: o `fiore.js` põe `.js` no `<html>` e só então anima.
  Nada acima da dobra usa `.reveal`.
- Vídeos em loop: mudos, carregados perto da viewport, pausados fora da tela; com
  `prefers-reduced-motion` ou economia de dados, ficam no pôster com botão de play.
- Tudo respeita `prefers-reduced-motion`.

## Imagery

- Fotos reais, luz natural, plantas. Recortes responsivos em `assets/images/v2/`:
  `<nome>-<largura>.avif|webp` + `<nome>.jpg`, 4:5 por padrão, 16:9 com sufixo `-wide`.
  Sempre `<picture>` com AVIF, WebP e JPG, `width`/`height` e `sizes` corretos.
- **Moldura em arco** (topo arredondado) para vídeo e retrato de destaque: ecoa a porta do
  estúdio e a curva da folha.
- **Não usar imagem gerada por IA** de pessoas. Pessoa identificável (aluna, gestante,
  bebê, instrutora) só com termo de imagem assinado.
- Símbolo da folha como marca d'água discreta; wordmark gigante e translúcido no rodapé
  (`assets/images/fiore-wordmark.svg`).
- O gargalo é fotografia editorial: ver [ASSETS-NEEDED.md](docs/ASSETS-NEEDED.md).

## Voice

- Humana, calorosa, contida. Frases curtas. Benefício antes de característica.
- **Nunca travessão (—) nem meia-risca (–)** como pontuação
  ([ADR 0011](docs/adr/0011-voz-humana-sem-travessoes.md)). Conferir: `grep -n "—\|–" *.html`.
- Com gestantes: linguagem ética, sem promessa médica ("pode ajudar", "contribui",
  "respeitando cada fase") + "Inicie sempre com a liberação do seu médico".
- Prova social só real. Nunca inventar avaliação, número ou depoimento.
