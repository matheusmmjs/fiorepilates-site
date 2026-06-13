# Bolão Fiore — Copa 2026 (runbook da campanha)

> Campanha de engajamento + captação de leads. Página: `/bolao` (banner na home +
> link nos footers). Decidido em 2026-06-12: escopo **Brasil + finais**, coleta via
> **Google Forms embedado**, **aberto a todos**, prêmio único.

## Mecânica

- **Palpites:** placar dos jogos do Brasil + cravar o campeão da Copa.
  - Fase de grupos (Grupo C): Marrocos (sáb 13/06, 19h) · Haiti (sex 19/06) · Escócia (qua 24/06).
  - Depois: mata-mata do Brasil + **semifinais e final** (novo form/seção por fase).
- **Pontuação:** placar exato = 3 pts · vencedor/empate certo = 1 pt · campeão = 5 pts.
  Desempate: data/hora de envio dos palpites.
- **Prêmio (só 1º lugar):** 1 mês de Pilates na Fiore, 1x/semana (4 aulas), pessoal e
  intransferível, válido por 60 dias após a final.
- **Participação:** gratuita, sem compra, 1 por pessoa, 18+. Aberta a alunas e não-alunas
  (não-alunas = leads, com consentimento no form).

## Google Form — estrutura (criar e mandar o link de embed)

Perguntas, nesta ordem:

1. **Nome completo** — resposta curta, obrigatória.
2. **WhatsApp** — resposta curta, obrigatória (ex.: (14) 9xxxx-xxxx).
3. **Você é aluna/aluno da Fiore?** — múltipla escolha: Sim / Ainda não, obrigatória.
4. **Aceita receber contato da Fiore no WhatsApp?** (novidades e seu desempenho no
   bolão) — múltipla escolha: Sim / Prefiro não — obrigatória. *(consentimento LGPD)*
5. **Palpite: Brasil x Marrocos (13/06)** — resposta curta (ex.: 2x0).
6. **Palpite: Brasil x Haiti (19/06)** — resposta curta.
7. **Palpite: Brasil x Escócia (24/06)** — resposta curta.
8. **Quem será o campeão da Copa 2026?** — resposta curta.

Configurações: coletar e-mail **desativado** (atrito), 1 resposta por pessoa se possível,
respostas → planilha "Bolão Fiore 2026". Para embedar: **Enviar → ícone `<>` → copiar
o iframe** e mandar aqui — entra no bloco `data-bolao-form` da página (e o fallback de
WhatsApp `data-bolao-fallback` sai).

## Apuração (após cada jogo do Brasil)

1. Abrir a planilha de respostas, pontuar a rodada (3/1/0) — coluna por jogo.
2. Atualizar ranking (top 10) e divulgar: grupo WhatsApp + stories @pilatesfiore.
3. Mensagem de rodada: resultado, top 3, link para a próxima rodada de palpites.

## Divulgação (cadência)

- **Lançamento:** mensagem no WhatsApp para alunas + stories + post feed. Pedir que
  compartilhem com família/amigos ("Convidar amigos" na página gera a mensagem pronta).
- **Véspera de cada jogo:** lembrete "últimas horas para palpitar".
- **Pós-jogo:** ranking + zoeira leve (tom da marca: leve e caloroso, nunca agressivo).
- **Leads (não-alunas que aceitaram contato):** após a fase de grupos, convite para
  conhecer o estúdio / avaliação inicial. **Não** fazer pitch antes disso — deixar a
  brincadeira ser brincadeira.

## Medição

- GA4: evento `bolao_click` (banner/footers) + page_view de `/bolao`.
- Planilha: nº de participantes, % não-alunas, % com consentimento de contato.
- Meta de sucesso: 60+ participantes, 20+ leads novos com consentimento.

## Encerramento (após a final — 19/07/2026)

- Anunciar vencedor(a) (foto/story com autorização) e entregar o prêmio.
- Remover banner da home, links de footer e a página (ou trocar por "bolão encerrado").
- Registrar aprendizados aqui (participantes, leads, conversões) para a próxima campanha.
