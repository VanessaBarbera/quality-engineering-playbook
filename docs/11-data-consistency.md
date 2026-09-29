# Banco de Dados e Consistência

## Objetivo

Validar se operações críticas geram o estado esperado e se os dados permanecem consistentes entre sistemas.

## Quando consultar banco

Consulta direta ao banco é útil quando:

- a persistência é parte do risco;
- a API não expõe informação suficiente;
- há processamento assíncrono;
- é necessário investigar divergência.

Não deve ser usada para acoplar todos os testes à implementação interna.

## Exemplo de validação

```sql
SELECT id, status, amount
FROM contracts
WHERE proposal_id = 'P123';
```

## Pontos de atenção

- transações;
- duplicidade;
- integridade referencial;
- arredondamento;
- timezone;
- concorrência;
- eventual consistency;
- dados pessoais.

## Dados de teste

Evitar dados reais de clientes. Preferir dados sintéticos, mascarados ou ambientes controlados.
