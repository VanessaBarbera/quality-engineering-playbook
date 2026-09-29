# Diagrama — Contexto do FinFlow

```mermaid
flowchart LR
    U[Cliente] --> WEB[Aplicação Web]
    U --> MOB[Aplicativo Mobile]

    WEB --> API[API Gateway]
    MOB --> API

    API --> AUTH[Serviço de Autenticação]
    API --> CUSTOMER[Serviço de Clientes]
    API --> SIM[Serviço de Simulação]
    API --> PROP[Serviço de Propostas]
    API --> CONTRACT[Serviço de Contratos]
    API --> PAY[Serviço de Pagamentos]

    CUSTOMER --> DB[(Banco de Dados)]
    SIM --> DB
    PROP --> DB
    CONTRACT --> DB
    PAY --> DB

    PROP --> BROKER[Broker de Mensageria]
    CONTRACT --> BROKER
    PAY --> BROKER

    BROKER --> NOTIFY[Serviço de Notificações]
```

## Objetivo do diagrama

Representar os principais pontos onde a estratégia de testes precisa considerar integração, contrato, persistência, eventos e jornadas de usuário.
