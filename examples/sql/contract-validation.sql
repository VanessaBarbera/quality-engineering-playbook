-- Exemplo ilustrativo.
-- Usar somente em ambiente de teste autorizado e sem dados pessoais reais.

SELECT
    id,
    proposal_id,
    status,
    amount,
    created_at
FROM contracts
WHERE proposal_id = 'P123';
