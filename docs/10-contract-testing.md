# Testes de Contrato

## Objetivo

Detectar incompatibilidades entre serviços antes que uma integração quebre em ambiente integrado.

## O que observar

- campos obrigatórios;
- tipos;
- enums;
- formatos;
- versionamento;
- compatibilidade retroativa;
- códigos de erro esperados.

## Exemplo

Se o serviço de propostas publica:

```json
{
  "proposalId": "P123",
  "status": "APPROVED",
  "customerId": "C456"
}
```

um consumidor que depende de `status` e `customerId` precisa ser protegido contra mudanças incompatíveis.

## Estratégia

- validar contratos no CI;
- evitar remoção ou alteração incompatível sem versionamento;
- distinguir contrato técnico de regra de negócio;
- tratar produtores e consumidores como participantes da qualidade.

## Quality Gate

Uma quebra incompatível de contrato deve bloquear a promoção até que produtores e consumidores estejam alinhados.
