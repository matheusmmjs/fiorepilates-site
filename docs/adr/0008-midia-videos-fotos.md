# ADR 0008 — Mídia: vídeos (HEVC) e fotos da equipe

- **Status:** Parcial / pendente
- **Data:** 2026-05-22

## Contexto

O cliente enviou vídeos e fotos reais para enriquecer o site:
- **Vídeos** (em `~/Downloads`): "café da manhã com gestantes" (evento), "Florescer"
  (explicativo) e "massoterapia" (Fiore Toque / Rosana). Todos em **codec HEVC (H.265)**,
  verticais 1080×1920.
- **Fotos** (equipe): Raquel (fundadora/fisio), Matheus (co-proprietário, marido),
  Jamile (fisio), Filipe (fisio); Rosana atende no Fiore Toque. "Florescer" = o **time
  todo** que atende.

## Problemas encontrados

1. **HEVC não toca na maioria dos navegadores** (só Safari). Para web é preciso
   **transcodificar para H.264 (MP4)** e/ou WebM — o que exige `ffmpeg`.
2. **Disco cheio:** a máquina estava com ~0,4 GB livres (de 228 GB). A instalação do
   `ffmpeg` falhou por falta de espaço; não foi possível transcodificar nem otimizar vídeo.
3. **Fotos vieram embutidas na conversa** (imagens), **sem arquivos** acessíveis em disco —
   não dá para colocá-las no repositório sem os arquivos originais.

## Decisão (provisória)

- **Adiar a integração de vídeo e das fotos da equipe** até resolver as pendências.
- Manter, por ora, a foto real do espaço (`hero-espaco.jpg`) e os elementos da marca.
- Planejar uma **seção "Time Florescer"** (Raquel, Jamile, Filipe + Fiore Toque/Rosana)
  e usos de vídeo: Florescer (seção do programa), evento de gestantes (seção "Presença em
  Bauru"), massoterapia (mini-seção Fiore Toque) — quando houver mídia web-ready.

## Próximos passos (cliente)

1. Liberar espaço em disco **ou** fornecer os vídeos já em **MP4 (H.264)**, **ou** hospedar
   no YouTube/Vimeo (embed leve, melhor para performance).
2. Enviar os **arquivos** das fotos da equipe (ou uma pasta), idealmente em alta resolução.
3. Confirmar quem aparece e como creditar cada pessoa (nome + função).

Ver [ASSETS-NEEDED.md](../ASSETS-NEEDED.md).
