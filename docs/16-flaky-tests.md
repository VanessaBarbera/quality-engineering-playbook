# Flaky Tests

## Definição

Teste flaky é aquele que produz resultados diferentes sem mudança relevante no produto ou no teste.

## Possíveis causas

- dados compartilhados;
- dependência de ordem;
- waits fixos;
- concorrência;
- ambiente;
- rede;
- dependências externas;
- timezone;
- eventual consistency;
- elementos instáveis na UI.

## Processo de tratamento

1. reproduzir;
2. coletar evidências;
3. classificar a causa;
4. corrigir sincronização ou dados;
5. validar repetidamente;
6. monitorar reincidência.

## Retry

Retry pode ser usado como mecanismo controlado de tolerância, mas não como correção automática.

## Métrica sugerida

```text
Flaky Rate =
execuções inconsistentes / execuções totais
```

Acompanhar tendência é mais útil do que aceitar uma suíte que "geralmente passa".
