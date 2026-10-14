# ADR 0022: Site 2.0, premium e fiel ao manual

Data: 2026-10-13 · Status: aceito (validado por Raquel e Matheus em 2026-10-14)

## Contexto

Para 2027 a Fiore quer subir de patamar e aumentar o ticket. O pedido foi um site "mais
premium, mais dinâmico, com mais imagens e uma tipografia mais fina", sem perder a
essência nem o público além das gestantes.

Três leituras orientaram o desenho:

- **Manual da marca.** A paleta oficial (amostrada do PDF) é `#21231E`, `#5C633E`,
  `#868F5E`, `#B2BC7D`, `#CCD4A1`, `#ECF0CF`. O site usava um bege "sand" (`#F4F2E8`) que
  não existe no manual e nunca usava os dois verdes-pistache claros. As peças de aplicação
  do manual usam foto grande, fundo pistache, letra grande e fina, e se colocam ao lado de
  marcas de luxo, não de outros estúdios.
- **Instagram (@pilatesfiore).** O estúdio (cortina de folhagens, arcos, madeira clara,
  luz lateral) é o ativo visual mais forte. Há um vídeo de uma professora da Fiore na
  própria gestação, no Reformer. Fotografia boa e reutilizável é rara. Ver
  [estudos/2026-10-instagram-analise.md](../estudos/2026-10-instagram-analise.md).
- **Estudo de mercado.** A recomendação para 2027 é saúde da mulher em todas as fases,
  com a gestante como carro-chefe. Ver [estudos/2026-10-foco-gestantes-2027.md](../estudos/2026-10-foco-gestantes-2027.md).
  O site reflete isso: gestante na primeira dobra e numa seção própria, mas a lista de
  cuidados e o resto da home falam com todas.

## Decisão

1. **Paleta do manual.** `mist #ECF0CF` vira o fundo assinatura no lugar do bege; base
   `paper #FDFFF7` (branco quente oficial, ajustado pelo [ADR 0023](0023-padrao-de-marca-premissa.md)); momentos escuros em `ink #21231E`. Os tokens antigos (`--forest`,
   `--sand`, `--gold` etc.) viram aliases, para as páginas internas continuarem funcionando.
2. **Tipografia fina, ainda Poppins.** Display em Poppins 200, grande, com tracking
   negativo; rótulos em maiúsculas espaçadas com numeração editorial. Mantém o ADR 0007.
   Confirmado no [ADR 0023](0023-padrao-de-marca-premissa.md): Poppins é a fonte da
   entrega da designer; Montserrat e Kamerik 205 são só do modelo de slides dela.
3. **Movimento contido, sem biblioteca** (ADR 0002 intacto): Ken Burns no hero, títulos e
   imagens que aparecem com máscara, manifesto que acende palavra por palavra no scroll,
   carrossel com scroll-snap, depoimentos um por vez, faixa de cuidados em loop. Tudo
   respeita `prefers-reduced-motion`, e nada acima da dobra depende de JS.
4. **Vídeo como textura.** Três loops curtos, mudos, sem texto gravado (gestante no
   Reformer, Cadillac, passeio pelo estúdio), carregados só perto da viewport, pausados
   fora da tela, desligados com movimento reduzido ou economia de dados. Moldura em arco,
   que ecoa a porta do estúdio e a curva da folha.
5. **Imagens responsivas.** Recortes novos dos originais em alta (série de retratos da
   Raquel, jardim, porta, recanto, aparelhos) em AVIF e WebP com fallback JPG, em
   `assets/images/v2/`. O hero da home é pré-carregado.
6. **Escopo.** Home e `/gestantes` redesenhadas; header, menu, rodapé, WhatsApp e barra
   mobile novos e idênticos nas 8 páginas; as 6 páginas internas herdam paleta e
   tipografia e ganham o redesenho completo numa etapa seguinte.
7. **Correções da auditoria que vieram junto:** skip link sem handler inline, foco visível
   em fundo escuro, contraste AA nos botões, títulos e descrições da home e de gestantes no
   tamanho certo e com "Pilates em Bauru" no início, frase sobre o Mirae ser vendido a
   outros estúdios retirada da home (ADR 0015).

## Consequências

- **Fotografia é o gargalo.** O código está pronto para fotos editoriais; as atuais são de
  celular, com lente grande-angular e fundos desiguais na equipe. Um ensaio profissional é
  a próxima alavanca de premium (ver [ASSETS-NEEDED.md](../ASSETS-NEEDED.md)).
- **Autorizações:** a gestante do vídeo do Reformer é a Raquel e a instrutora do Cadillac
  autorizou (confirmado em 2026-10-14).
- `DESIGN.md` foi atualizado para os novos tokens; a fonte de verdade continua sendo o
  `:root` de `assets/css/fiore.css`.
- Os scripts que geraram os recortes e os loops ficaram fora do repositório (scratchpad da
  sessão). Para novos recortes: mesmo padrão de nomes `<nome>-<largura>.avif|webp` e
  `<nome>.jpg`, 4:5 por padrão e 16:9 com sufixo `-wide`.
