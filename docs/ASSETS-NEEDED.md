# O que precisamos de você (mídias e dados)

Atualizado em 2026-06-14 — fechamos a maior parte das pendências de mídia e dados
neste PR (assets + fase 2). Restam só os itens marcados em **⏳ Pendente** no fim.

## ✅ Já resolvido

- **Logo + tipografia oficiais** integrados (Poppins, SVGs da marca). Ver [ADR 0007](adr/0007-fidelidade-manual-marca-poppins.md).
- **Avaliações Google:** 5,0 com 45 avaliações — exibido no site + `AggregateRating` ativo.
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
- **Dourado:** mantido o padrão da marca (olive/verde, sem dourado) — confirmado pelo cliente.
- **Vídeo real do Mirae** na seção Tecnologia (2026-08-26): reaproveitado o vídeo
  oficial de tour do próprio repo do Mirae (`mirae-tour.mp4`, H.264, já pronto),
  substituindo o mockup estático. Depoimento real da Fiore (já público no site do
  Mirae) também citado na seção.
- **Fotos de 2 eventos** (2026-08-26): encontro sobre diástase/pós-parto (22/08) e
  Café com Gestantes 2ª edição (02/02), baixadas do Instagram e publicadas em
  `/eventos`.

## ⏳ Pendente

1. **Fotos do Curso de Gestantes da Unimed** (3 edições, com autorização): a 1ª
   edição não está no histórico do Instagram, precisa vir de arquivo próprio.
   Matheus/Raquel vão colocar em
   `~/Library/Mobile Documents/com~apple~CloudDocs/Familia Moreira/Fiore/Eventos/Unimed`.
   Ver [COMO-PUBLICAR-EVENTO.md](COMO-PUBLICAR-EVENTO.md).
2. **ID do Pixel da Meta** — para instalar o pixel + eventos (item 2.7 do roadmap).
3. **E-mail de contato** (opcional) para rodapé/dados estruturados.
4. **Foto horizontal (paisagem)** real (opcional): a OG de `/gestantes` hoje usa um
   card desenhado da marca (`og-gestantes.jpg`, 1200×630); uma foto real pode substituir
   depois, se quiser.

### Novos (redesign 2.0, outubro de 2026)

5. ✅ **Autorização do vídeo da gestante no Reformer** (confirmado em 2026-10-14: é a Raquel) (`assets/videos/loop-gestante-reformer.mp4`,
   do reel de 22/06/2026). Pela legenda do post é uma professora da Fiore na própria
   gestação, provavelmente a Raquel. Confirmar quem é e se pode ir ao site.
6. ✅ **Autorização da instrutora do vídeo no Cadillac** (confirmada em 2026-10-14) (`assets/videos/loop-cadillac.mp4`,
   reel de 02/10/2026).
7. **Ensaio fotográfico profissional** (a maior alavanca de premium, ver
   [ADR 0022](adr/0022-redesign-2-0-premium.md)): uma manhã de luz natural; gestantes reais
   em aula com termo assinado; mãos e detalhes; retratos padronizados da equipe (mesmo
   fundo e figurino); fachada e jardim sem grande-angular; 3 a 4 fotos **horizontais**
   em alta para o topo das páginas; vídeos curtos sem texto e sem música.
8. **Termo de imagem padrão** assinado na matrícula, para alunas, bebês e equipe.
9. ✅ **E-mail de contato público** (`matheus@fiorepilates.com.br`, em /privacidade; sugestão: criar alias `contato@` ou `privacidade@` no iCloud) para a página de privacidade (LGPD) e o aviso de cookies.
10. ✅ **Fonte oficial (resolvido, Poppins, ver ADR 0023):** o PDF do manual foi diagramado em Montserrat e Kamerik 205; o site
    usa Poppins (ADR 0007). Confirmar com a designer.

## Como entregar imagens/vídeos

Imagens: como vier (JPG/PNG/HEIC) — otimizamos e renomeamos. Vídeos: preferir link
YouTube/Vimeo, ou MP4 H.264.
