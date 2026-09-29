# Template — Quality Gates

## Objetivo

Definir critérios objetivos que determinam se uma entrega pode avançar para o próximo estágio.

## Gates

| Gate | Critério | Bloqueia? | Evidência |
|---|---|---:|---|
| Build | Build concluído com sucesso | Sim | Pipeline |
| Unit | | | |
| API | | | |
| Contract | | | |
| Smoke | | | |
| E2E crítico | | | |
| Performance | | | |
| Segurança | | | |

## Exemplo de thresholds

Use somente thresholds compatíveis com o contexto real do produto.

| Métrica | Threshold |
|---|---|
| Taxa de erro | |
| p95 | |
| Checks aprovados | |
| Flaky rate | |
| Vulnerabilidades críticas | |

## Exceções

Se um gate for ignorado, registre motivo, risco assumido, responsável pela decisão, prazo para correção e plano de mitigação.

## Princípio

Um Quality Gate deve representar risco real. Evite gates que existam apenas para produzir uma sensação de controle.
