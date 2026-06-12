# O que precisamos de você (mídias e dados)

Atualizado em 2026-05-22 após o cliente enviar logo, tipografia, fotos e vídeos.

## ✅ Já resolvido

- **Logo + tipografia oficiais** integrados (Poppins, SVGs da marca). Ver [ADR 0007](adr/0007-fidelidade-manual-marca-poppins.md).
- **Avaliações Google:** 5,0 com 44 avaliações — exibido no site + `AggregateRating` ativo.
- **Horário:** Seg–Sex 6h–20h · Sáb 7h–12h.
- **Nome do programa:** "Florescer" (oficial).

## ⏳ Pendente — Mídia (bloqueado)

1. **Vídeos enviados estão em HEVC (H.265)** — não tocam na maioria dos navegadores.
   Para usar, precisamos de **um** destes:
   - liberar espaço em disco para transcodificar aqui (a máquina está ~cheia: ~0,6 GB
     livres de 228 GB — não coube instalar o `ffmpeg`), **ou**
   - você enviar os vídeos já em **MP4 (H.264)**, **ou**
   - hospedar no **YouTube/Vimeo** e a gente embeda (recomendado: mais leve e rápido).
   Vídeos: café da manhã com gestantes (evento), Florescer (explicativo), massoterapia (Fiore Toque).
2. **Fotos da equipe:** vieram **dentro da conversa** (imagens), sem os **arquivos**.
   Envie os arquivos (ou uma pasta) em alta: Raquel, Jamile, Filipe, Rosana (Fiore Toque)
   — para montarmos a seção **"Time Florescer"**. Confirme nome + função de cada um.
3. **Mais fotos reais** do espaço/aulas/aparelhos (Reformer, Cadillac, Chair) — hoje o site
   reaproveita uma única foto real do espaço.

## ⏳ Pendente — Dados

4. **Coordenadas (lat/long)** exatas do estúdio — para `geo` no schema e pin preciso.
5. **Razão social / CNPJ** e e-mail de contato (rodapé / dados estruturados).
6. **TikTok** (URL) e se mantém Facebook ativo.
7. Destino do **"Fiore App"** (`app.fiorepilates.com.br`) — entra no menu?
8. **Dourado:** o manual visual não usa dourado (usamos olive/verde). Confirmar se quer
   manter assim ou reintroduzir um dourado (fácil de ajustar).
9. **Link do Perfil da Empresa no Google (GBP):** o link curto de avaliação
   (`g.page/r/...`, em GBP → "Pedir avaliações") e a URL do perfil no Maps — para
   trocar o link genérico de busca por link direto e incluir no `sameAs` do schema.
10. **Credenciais da equipe:** CREFITO + especializações/formações de Raquel, Jamile,
    Filipe e Andressa (e formação da Rosana) — para bios do time e E-E-A-T.
11. **Foto da Andressa** (hoje está com placeholder de iniciais).
12. **Foto horizontal (paisagem) para OG da página de gestantes** — todas as fotos
    atuais são verticais (618×1100); a OG ideal é 1200×630.
13. **Vídeos no YouTube:** subir os 3 vídeos (café da manhã, Florescer, massoterapia)
    como "não listados" no YouTube e mandar os links — embedamos sem precisar
    transcodificar nada (ver [ADR 0008](adr/0008-midia-videos-fotos.md)).

## Como entregar imagens/vídeos

Imagens: como vier (JPG/PNG/HEIC) — otimizamos e renomeamos. Vídeos: preferir link
YouTube/Vimeo, ou MP4 H.264.
