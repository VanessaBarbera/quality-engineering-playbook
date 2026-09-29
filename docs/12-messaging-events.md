# Mensageria e Eventos

## Objetivo

Validar fluxos assíncronos e garantir que eventos importantes sejam publicados, consumidos e processados corretamente.

## Cenários

- evento publicado com payload correto;
- consumidor processa o evento;
- evento duplicado não gera efeito duplicado;
- retry após falha temporária;
- mensagem inválida direcionada para tratamento apropriado;
- ordem de eventos quando relevante;
- timeout e indisponibilidade do consumidor.

## Idempotência

Fluxos financeiros precisam evitar efeitos duplicados.

Exemplo:

```text
PaymentConfirmed
      ↓
Consumidor recebe evento
      ↓
Verifica eventId
      ↓
Já processado? → ignora
Novo?          → processa
```

## Evidências

- topic/queue;
- eventId;
- correlationId;
- payload sanitizado;
- timestamp;
- resultado do consumidor.

## Eventual Consistency

Testes não devem assumir atualização instantânea quando o desenho é assíncrono. A espera deve usar polling ou condição observável com timeout controlado.
