# ADR 0010 — Vídeos auto-hospedados em H.264 (solução transitória)

- **Status:** Aceito (transitório — migração para YouTube planejada)
- **Data:** 2026-06-12
- **Substitui parcialmente:** [ADR 0008](0008-midia-videos-fotos.md) (que adiava os vídeos)

## Contexto

Os 3 vídeos do cliente (café da manhã com gestantes, Florescer, massoterapia) estavam
em **HEVC/H.265** (`hvc1`), que não toca em Chrome/Firefox/Android. O ADR 0008 adiou a
integração porque o disco estava cheio (~0,6 GB) e não dava para instalar o `ffmpeg`.
Em 2026-06-12 o disco foi liberado (8,8 GB) e o cliente preferiu **manter os vídeos
dentro do projeto** neste começo, migrando para YouTube depois.

## Decisão

1. **Transcodificar localmente** com `ffmpeg` para **H.264 720p** (`libx264`, crf 26,
   `yuv420p`, AAC 96k, `+faststart`) — compatível com todos os navegadores.
2. **Auto-hospedar** em `assets/videos/` (florescer.mp4, massoterapia.mp4,
   cafe-gestantes.mp4) com posters JPG em `assets/images/poster-*.jpg`.
3. **Carregamento leve obrigatório:** `<video controls preload="none" playsinline poster=…>`
   — o vídeo só baixa quando a pessoa dá play; o poster é a única carga inicial.
4. Cache de 30 dias para `assets/videos/` no `vercel.json`.

## Consequências

- ✅ Vídeos reais no ar hoje, sem depender de upload externo.
- ✅ `preload="none"` protege LCP/peso da página.
- ⚠️ ~30–40 MB no repositório git (aceitável agora, não elegante).
- ⚠️ **Dívida registrada:** migrar para YouTube (embed facade) e remover os arquivos
  do repositório — ver issue "Migrar vídeos para YouTube" no GitHub.
- Fonte original (HEVC) permanece em `~/Downloads` até a migração para YouTube.
