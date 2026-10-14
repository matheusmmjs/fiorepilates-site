# ADR 0023: Tipografia, logo e cores como premissa da marca

Data: 2026-10-14 · Status: aceito · Complementa o [ADR 0007](0007-fidelidade-manual-marca-poppins.md)

## Contexto

Na revisão do site 2.0 surgiram três dúvidas que mostravam que a marca não estava
travada:

- O PDF do manual foi diagramado em Montserrat e Kamerik 205, e o site usa Poppins.
- O `BRAND.md` listava cores "extraídas dos SVGs" (`#24281D`, `#FDFFF7`, um bege `#F4F2E8`
  e um amarelo de estrela) que não batiam com a página de Cores do manual.
- O Instagram mistura fonte cursiva, condensada e serifada, e às vezes usa dourado.

Em 2026-10-14 Raquel e Matheus definiram: **tipografia, logo e cores são premissa; nunca
fugir disso.**

## Decisão

1. **Fonte da verdade:** o pacote da designer que criou a identidade e o logo
   (`~/Downloads/Fiore Pilates 2/`). Cores lidas dos vetores (`pdftocairo -svg`), não de
   pixel.
2. **Tipografia:** só Poppins, a fonte da pasta `Tipografia/` e das peças de aplicação.
   Montserrat e Kamerik 205 são do modelo de apresentação da designer e ficam fora.
3. **Logo:** sempre o arquivo oficial; o nome "fiore" é lettering da designer (base
   próxima à Poppins Medium, com "r" e "e" próprios) e nunca é recriado digitando.
4. **Cores:** as 6 da página Cores (`#21231E #5C633E #868F5E #B2BC7D #CCD4A1 #ECF0CF`) +
   as 4 dos arquivos do logo (`#24281D #858E5E #181917 #FDFFF7`). Derivação só por
   transparência ou mistura de cor oficial, registrada como token. Exceções funcionais:
   verde do WhatsApp e cores do "G" do Google.
5. **Abrangência:** todo canal e material, inclusive Instagram, vídeos e o que for feito
   por agência ou IA.
6. O padrão completo, com o que é proibido e um checklist de 4 perguntas, fica em
   [BRAND.md](../BRAND.md#padrão-visual-da-marca-premissa-inegociável). `DESIGN.md` e
   `assets/css/fiore.css` seguem o BRAND.md.

## Consequências

- O fundo base do site passou de `#FBFCF5` (derivado por nós) para o branco quente
  oficial `#FDFFF7`.
- As peças do Instagram precisam voltar para Poppins e para a paleta (sem script, sem
  condensada, sem dourado). Vale combinar isso com quem produz os posts.
- Qualquer exceção futura (nova fonte, nova cor) exige um novo ADR e, de preferência, a
  própria designer.
- Os arquivos-fonte da marca (manual, `.ai`, PNGs) **não** foram copiados para o
  repositório, porque ele é público no GitHub; ficam na pasta da entrega e em backup
  privado.
