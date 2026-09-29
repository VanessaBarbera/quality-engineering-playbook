# FinFlow — Contexto do Produto

## Visão geral

**FinFlow** é uma plataforma fictícia de crédito digital usada como cenário de referência neste playbook.

O produto permite que um cliente:

1. faça login;
2. consulte ou atualize seus dados;
3. simule condições de crédito;
4. envie uma proposta;
5. acompanhe a análise;
6. aceite uma oferta aprovada;
7. conclua a contratação;
8. acompanhe pagamentos e notificações.

## Componentes simulados

- Aplicação Web
- Aplicativo Mobile
- API Gateway
- Serviço de autenticação
- Serviço de clientes
- Serviço de simulação
- Serviço de propostas
- Serviço de contratos
- Serviço de pagamentos
- Banco de dados
- Broker de mensageria
- Serviço de notificações

## Fluxo crítico de contratação

```text
Login
  ↓
Consulta de cliente
  ↓
Simulação
  ↓
Proposta
  ↓
Análise
  ↓
Oferta
  ↓
Aceite
  ↓
Contrato
```

## Fluxo crítico de pagamento

```text
Contrato ativo
  ↓
Geração de parcela
  ↓
Pagamento
  ↓
Confirmação
  ↓
Atualização do saldo
  ↓
Notificação
```

## Regras fictícias relevantes

- apenas clientes autenticados podem iniciar uma proposta;
- uma proposta precisa estar vinculada a uma simulação válida;
- valores e taxas exibidos ao cliente devem ser consistentes entre API, Web e contrato;
- uma contratação não pode ser concluída sem aceite explícito;
- pagamentos duplicados não podem gerar baixa dupla;
- eventos financeiros devem ser processados de forma idempotente.

## Objetivo de qualidade

Reduzir o risco de falhas que possam causar:

- contratação incorreta;
- cálculo divergente;
- duplicidade de transação;
- exposição indevida de dados;
- indisponibilidade dos fluxos críticos;
- inconsistência entre sistemas.
