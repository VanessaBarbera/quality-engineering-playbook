# Execução dos Quality Gates

## Objetivo

Este repositório possui uma pipeline real no GitHub Actions para demonstrar como uma estratégia de qualidade pode ser convertida em uma validação automatizada.

O cenário usa exclusivamente o produto fictício **FinFlow**.

## O que a pipeline faz

```text
Push / Pull Request
        ↓
Checkout
        ↓
Node.js
        ↓
Servidor local FinFlow
        ↓
Health Check
        ↓
k6 Smoke Test
        ↓
Quality Gates
        ↓
Relatório como Artifact
```

## Cenários executados

O teste realiza chamadas para:

- `GET /api/health`
- `POST /api/simulations`

Ele valida comportamento funcional básico e também critérios de performance.

## Quality Gates

A execução falha quando algum dos critérios abaixo não é atendido:

| Métrica | Gate |
|---|---|
| Taxa de requisições com erro | menor que 1% |
| p95 de duração HTTP | menor que 500 ms |
| Checks aprovados | maior que 99% |

Os thresholds são definidos diretamente no arquivo `examples/k6/smoke.js`.

## Evidência

Ao final da execução, a pipeline publica um artifact chamado:

```text
k6-quality-gate-report
```

Ele contém:

- resumo da execução do k6;
- log do servidor fictício usado no teste.

## Por que usar um servidor local?

O FinFlow é um produto fictício. Por isso, o pipeline não depende de APIs externas nem utiliza sistemas reais.

O servidor local existe apenas como **test harness de portfólio**, permitindo demonstrar:

- automação executável;
- smoke de performance;
- thresholds;
- Quality Gate;
- CI/CD;
- evidências de execução.

## Execução local

Com Node.js e k6 instalados:

```bash
node examples/k6/mock-server.js
```

Em outro terminal:

```bash
BASE_URL=http://127.0.0.1:3000 k6 run examples/k6/smoke.js
```

## Decisão de engenharia

O objetivo desta implementação não é simular um sistema bancário completo. É demonstrar de forma pequena, transparente e reproduzível como uma decisão documentada no playbook pode se transformar em um gate automatizado de pipeline.
