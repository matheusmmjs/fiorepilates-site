# Lead magnet — Guia da Gestante Ativa em Bauru

Isca digital gratuita para captar leads de gestantes (Fase 2, item 2.8 do
[ROADMAP](ROADMAP.md)). A pessoa recebe o **PDF pelo WhatsApp** — o contato vira lead.

## Peças

- **PDF:** `assets/guia-gestante-ativa-bauru.pdf` (5 páginas, A4, na identidade da marca,
  fontes Poppins embutidas, linguagem ética — ver [ADR 0005](adr/0005-conteudo-etico-e-prova-social-real.md)).
- **Fonte do PDF:** `assets/lead-magnet/guia-gestante-ativa-bauru.html` (HTML com print CSS).
- **Landing:** `/guia-gestante` — destino de anúncios e bio do Instagram.
- **Promo:** banner na página `/gestantes` (entre depoimentos e FAQ).

## Como funciona o fluxo

1. Pessoa clica em **"Quero o guia gratuito"** (landing ou promo).
2. Abre o WhatsApp com a mensagem _"Olá! Quero receber o Guia da Gestante Ativa
   em Bauru (PDF gratuito)."_
3. Vocês respondem **enviando o arquivo PDF** (ou o link
   `fiorepilates.com.br/assets/guia-gestante-ativa-bauru.pdf`).

O link direto **não é divulgado no site** de propósito — assim o download passa pelo
WhatsApp e o contato é captado.

## Como regenerar o PDF

Editar `assets/lead-magnet/guia-gestante-ativa-bauru.html` e rodar (precisa do Chrome):

```sh
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=assets/guia-gestante-ativa-bauru.pdf \
  "file://$(pwd)/assets/lead-magnet/guia-gestante-ativa-bauru.html"
```

## Status editorial

- Conteúdo inicial revisado com ajustes do cliente em 2026-06-18.
- Fonte editável versionada em HTML e PDF final gerado a partir dessa fonte.
- Qualquer evolução futura deve editar primeiro o HTML e regenerar o PDF, para manter
  histórico e consistência visual.

## Pendente (cliente)

- Divulgar: bio do Instagram apontando para `/guia-gestante`, stories, e (depois) anúncios.
- Opcional: revisão complementar por obstetra/equipe de saúde antes de campanhas pagas.
- Opcional: automatizar o envio do PDF pelo WhatsApp (resposta rápida / ferramenta de atendimento).
