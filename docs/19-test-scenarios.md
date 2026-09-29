# Cenários de Teste — FinFlow

## Jornada: Simulação de Crédito

### Cenário 1 — Simulação válida

**Dado** que o cliente está autenticado  
**E** possui cadastro elegível  
**Quando** informa um valor e prazo permitidos  
**Então** o sistema deve retornar uma simulação válida  
**E** apresentar valor, taxa, prazo e parcela calculados.

### Cenário 2 — Valor fora da faixa

**Dado** que o cliente está autenticado  
**Quando** solicita um valor acima do limite permitido  
**Então** a simulação deve ser rejeitada  
**E** uma mensagem de negócio adequada deve ser retornada.

---

## Jornada: Proposta

### Cenário 3 — Criar proposta a partir de simulação válida

**Dado** que existe uma simulação válida  
**Quando** o cliente confirma a proposta  
**Então** uma proposta deve ser criada  
**E** deve permanecer vinculada à simulação de origem.

### Cenário 4 — Reutilizar simulação inválida

**Dado** que uma simulação está expirada ou inválida  
**Quando** o cliente tenta gerar uma proposta  
**Então** a operação deve ser rejeitada.

---

## Jornada: Contratação

### Cenário 5 — Contratação aprovada

**Dado** que existe uma proposta aprovada  
**E** o cliente visualizou as condições  
**Quando** registra o aceite  
**Então** o contrato deve ser criado  
**E** valores e taxas devem ser consistentes com a proposta.

### Cenário 6 — Contratação sem aceite

**Dado** que existe uma proposta aprovada  
**Quando** uma tentativa de contratação ocorre sem aceite explícito  
**Então** nenhum contrato deve ser criado.

---

## Jornada: Pagamento

### Cenário 7 — Pagamento confirmado

**Dado** que existe parcela pendente  
**Quando** o pagamento é confirmado  
**Então** a parcela deve ser atualizada  
**E** o saldo deve refletir o pagamento  
**E** o evento correspondente deve ser publicado.

### Cenário 8 — Evento duplicado de pagamento

**Dado** que um evento de pagamento já foi processado  
**Quando** o mesmo `eventId` é recebido novamente  
**Então** o sistema não deve gerar baixa duplicada.

---

## Priorização

| ID | Jornada | Risco | Camada principal |
|---|---|---|---|
| CT-001 | Simulação válida | Alto | API |
| CT-002 | Limite inválido | Alto | API |
| CT-003 | Criar proposta | Crítico | API/Integração |
| CT-004 | Simulação expirada | Alto | API |
| CT-005 | Contratação | Crítico | API + E2E |
| CT-006 | Sem aceite | Crítico | API |
| CT-007 | Pagamento | Crítico | Integração |
| CT-008 | Duplicidade | Crítico | Evento/Integração |
