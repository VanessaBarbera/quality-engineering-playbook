# Matriz de Rastreabilidade

A rastreabilidade conecta regra, risco, cenário, automação e evidência.

| Requisito | Risco | Cenário | Automação sugerida | Evidência |
|---|---|---|---|---|
| RF-001 Autenticação | Alto | Login válido/inválido | API + E2E crítico | Response + log |
| RF-002 Simulação | Crítico | CT-001 / CT-002 | Unit + API | Payload + cálculo |
| RF-003 Proposta | Crítico | CT-003 / CT-004 | API + integração | Response + DB |
| RF-004 Contratação | Crítico | CT-005 / CT-006 | API + E2E | Response + DB + evento |
| RF-005 Pagamento | Crítico | CT-007 / CT-008 | Integração/evento | DB + evento + log |

## Uso

A matriz ajuda a responder:

- qual requisito está coberto;
- qual risco está sendo mitigado;
- onde o cenário é executado;
- se existe automação;
- qual evidência será produzida.

## Princípio

Rastreabilidade não é burocracia quando ajuda a entender rapidamente **o que foi testado, por quê e com qual resultado**.
