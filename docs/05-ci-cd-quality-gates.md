# CI/CD e Quality Gates

## Fluxo proposto

```text
Commit
  ↓
Build
  ↓
Unit Tests
  ↓
API Tests
  ↓
Contract Tests
  ↓
Deploy em QA
  ↓
Smoke Tests
  ↓
E2E Crítico
  ↓
Quality Gate
  ↓
Promoção
```

## Quality Gates

A promoção pode ser bloqueada quando houver:

- falha em teste crítico;
- quebra de contrato;
- smoke test reprovado;
- erro de build;
- vulnerabilidade classificada como bloqueadora;
- cobertura mínima definida não atendida;
- defeito crítico conhecido sem aceite formal de risco.

## Estratégia por velocidade

| Estágio | Objetivo |
|---|---|
| Unit | feedback em segundos |
| API | validar regras e contratos internos |
| Contract | detectar incompatibilidades |
| Smoke | garantir ambiente utilizável |
| E2E crítico | proteger jornadas essenciais |

## Evidência em pipeline

Guardar:

- logs;
- relatórios;
- request/response quando seguro;
- screenshots de falhas de UI;
- vídeos apenas quando úteis;
- artifacts com retenção adequada.

## Falha na CI e sucesso local

Investigar:

1. versão das dependências;
2. variáveis de ambiente;
3. dados compartilhados;
4. execução paralela;
5. timezone;
6. latência;
7. dependências externas;
8. sincronização;
9. diferenças de infraestrutura.

Retry pode ser utilizado de forma controlada, mas não deve substituir investigação de causa raiz.
