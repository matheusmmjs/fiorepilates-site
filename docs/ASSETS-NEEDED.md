# O que precisamos de você (mídias e dados)

Atualizado em 2026-06-14 — fechamos a maior parte das pendências de mídia e dados
neste PR (assets + fase 2). Restam só os itens marcados em **⏳ Pendente** no fim.

## ✅ Já resolvido

- **Logo + tipografia oficiais** integrados (Poppins, SVGs da marca). Ver [ADR 0007](adr/0007-fidelidade-manual-marca-poppins.md).
- **Avaliações Google:** 5,0 com 44 avaliações — exibido no site + `AggregateRating` ativo.
- **Horário:** Seg–Sex 6h–20h · Sáb 7h–12h.
- **Nome do programa:** "Florescer" (oficial).
- **Vídeos** (Florescer, café da manhã, massoterapia): transcodificados p/ H.264 e
  auto-hospedados em `assets/videos/`. Ver [ADR 0010](adr/0010-videos-autohospedados-h264.md).
- **Fotos reais do espaço:** 8 fotos novas do estúdio (aparelhos, recepção, fachada,
  sala do céu, entrada) na seção "Nosso espaço". Originais em `~/Downloads/FIORE 2`.
- **Equipe:** Jamile saiu (removida do site). Time Florescer = **Raquel** (fundadora),
  **Andressa** e **Filipe** (fisioterapeutas) + **Rosana** (massoterapeuta, Fiore Toque).
  Fotos organizadas em `assets/images/team/`. Sem CREFITO no site (decisão do cliente).
- **Coordenadas (geo):** -22.3405673, -49.0528841 no schema + `hasMap`.
- **Razão social / CNPJ:** Fiore Pilates LTDA · 60.413.273/0001-90 (rodapé + `legalName`/`taxID`).
- **Redes:** TikTok `@fiorepilates` e Facebook (perfil real) no rodapé + `sameAs`.
- **App Mirae** (`https://mirae.fiorepilates.com.br/`): citado na seção Tecnologia +
  link no rodapé.
- **Link de avaliação GBP:** `g.page/r/CS2fBMfwzWG6EAE/review` (rodapé) + URL do Maps no `sameAs`.
- **Form do bolão:** embed do Google Form ativo em `/bolao` (saiu o fallback de WhatsApp).
- **Dourado:** mantido o padrão da marca (olive/verde, sem dourado) — confirmado pelo cliente.
- **Arte da campanha da Copa:** criada em `assets/images/copa-desafio.svg` (+ `.png` 1080×1350)
  para posts/stories, na identidade da marca.

## ⏳ Pendente

1. **Foto real da Andressa** em arquivo. Hoje está com placeholder de iniciais "AS"
   (a foto enviada veio colada no chat, não como arquivo). Arraste o arquivo (ou
   salve em `~/Downloads`) que a gente troca — destino: `assets/images/team/andressa.jpg`.
2. **Fotos dos eventos** (com autorização): Curso de Gestantes da Unimed (3 edições)
   e cafés da manhã — para enriquecer `/eventos` (hoje o card da Unimed usa foto do
   espaço como placeholder). Ver [COMO-PUBLICAR-EVENTO.md](COMO-PUBLICAR-EVENTO.md).
3. **Foto horizontal (paisagem)** para a OG da página de gestantes — as fotos atuais
   são todas verticais (9:16); a OG ideal é 1200×630.
4. **E-mail de contato** (opcional) para rodapé/dados estruturados.

## Como entregar imagens/vídeos

Imagens: como vier (JPG/PNG/HEIC) — otimizamos e renomeamos. Vídeos: preferir link
YouTube/Vimeo, ou MP4 H.264.
