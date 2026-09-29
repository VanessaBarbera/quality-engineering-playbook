# Diagrama — Fluxo de Qualidade

```mermaid
flowchart LR
    REQ[Requisito] --> RISK[Análise de risco]
    RISK --> PLAN[Planejamento]
    PLAN --> DEV[Desenvolvimento]
    DEV --> UNIT[Unit tests]
    UNIT --> API[API / Integração]
    API --> CONTRACT[Contract tests]
    CONTRACT --> QA[Deploy QA]
    QA --> SMOKE[Smoke]
    SMOKE --> E2E[E2E crítico]
    E2E --> GATE{Quality Gate}
    GATE -->|Aprovado| PROD[Promoção]
    GATE -->|Reprovado| FIX[Correção]
    FIX --> DEV
    PROD --> OBS[Observabilidade]
    OBS --> FEEDBACK[Feedback]
    FEEDBACK --> RISK
```

## Ideia central

Qualidade é um ciclo contínuo. O processo não termina na execução dos testes: métricas, logs e comportamento em produção alimentam novas decisões de risco.
