# Observabilidade aplicada à Qualidade

## Objetivo

Usar sinais do sistema para acelerar diagnóstico e validar comportamento além da resposta visível ao usuário.

## Pilares

- logs;
- métricas;
- traces.

## Durante os testes

Capturar quando possível:

- correlation ID;
- trace ID;
- endpoint;
- serviço envolvido;
- timestamp;
- erro técnico;
- latência.

## Exemplo de investigação

```text
Falha no E2E
   ↓
Correlation ID
   ↓
Trace distribuído
   ↓
Serviço de contratos
   ↓
Timeout no serviço de pagamentos
```

## Produção

Qualidade continua após o deploy.

Monitorar:

- taxa de erro;
- latência;
- indisponibilidade;
- falhas por jornada;
- eventos não processados;
- anomalias após release.
