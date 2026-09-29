# Exemplo de Teste de API — Proposta

Este exemplo é conceitual e usa o produto fictício FinFlow.

## Request

```http
POST /api/proposals
Authorization: Bearer <token>
Content-Type: application/json
```

```json
{
  "simulationId": "SIM-001"
}
```

## Validações

- status `201`;
- `proposalId` presente;
- `simulationId` igual ao enviado;
- status inicial esperado;
- cliente da proposta é o mesmo do token;
- registro persistido;
- correlation ID disponível.

## Negativos

- token ausente → `401`;
- token sem permissão → `403`;
- simulação inexistente → `404` ou regra definida pelo contrato;
- simulação expirada → erro de negócio;
- payload inválido → `400`.
