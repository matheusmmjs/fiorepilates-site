# Desafios Fiore (runbook do programa contínuo)

> Decisão de 2026-06-12: os desafios são um **programa permanente** da Fiore
> (página `/desafios`), separado do bolão (campanha pontual da Copa — [BOLAO.md](BOLAO.md)).
> Sempre existe **um desafio da vez**; os encerrados vão para a galeria de anteriores.

## O conceito

Ações lúdicas dentro das aulas que viram **conteúdo gerado pelas alunas (UGC)**:
a aluna participa, posta marcando **@pilatesfiore + #FioreNoPilates** e a Fiore
reposta nos stories. Cada post é prova social orgânica para a rede da aluna.
Mote: *"Movimento que conecta, energia que transforma."*

## Desafio da vez: Copa 2026 (jun–jul/2026)

1. Vir à aula com peça **verde, amarela ou azul**;
2. Escolher um **envelope** no estúdio (iniciante / intermediário / avançado) com um
   exercício surpresa;
3. Executar com a instrutora acompanhando e **tirar a foto**;
4. **Postar marcando @pilatesfiore + #FioreNoPilates** → repost nos stories.

Operação: montar os 3 envelopes (exercícios **seguros e fotogênicos**, escolhidos
pelas instrutoras), avisar o time, repostar tudo. Métrica: nº de posts marcados.

## Como trocar o desafio da vez (no site)

Template comentado no topo de `desafios.html`:

1. Mover a section atual de `#desafio-da-vez` para a área "Desafios anteriores"
   (trocar `bg-forest` por `bg-sand`, remover o `id`); adicionar 1–2 fotos reais
   do que rolou (autorizadas).
2. Criar a nova section `#desafio-da-vez` no mesmo formato: eyebrow (tema) ·
   h2 · lead · 4 passos (`.pillars`) · CTA.
3. Atualizar `lastmod` de `/desafios` no `sitemap.xml`.
4. PR → merge (fluxo padrão; quem cria o desafio manda tema + 4 passos + período).

## Ideias de próximos desafios (backlog)

- **Desafio da Prancha** (progressão semanal, foto no marco final);
- **Desafio Primavera/Florescer** (set/2026 — gancho com a marca);
- **Desafio das Gestantes** (movimentos seguros por trimestre — com revisão ética
  [ADR 0005](adr/0005-conteudo-etico-e-prova-social-real.md));
- **Desafio de fim de ano** (retrospectiva de evolução: 1ª aula × hoje, via Mirae).

## Regras de sempre

- Participação leve e opcional — nunca constranger quem não quer aparecer.
- Foto/post **só com autorização**; instrutora sempre acompanhando o exercício.
- Linguagem da marca: leve, acolhedora, sem promessa de resultado.
