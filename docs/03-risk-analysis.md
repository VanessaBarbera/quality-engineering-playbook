# Análise de Risco

## Critérios

A priorização considera **impacto** e **probabilidade**.

Escala utilizada: Baixo, Médio, Alto e Crítico.

## Matriz inicial

| Funcionalidade | Impacto | Probabilidade | Nível de risco | Estratégia principal |
|---|---|---|---|---|
| Login | Alto | Médio | Alto | API + segurança + E2E |
| Simulação de crédito | Alto | Alto | Crítico | Unitário + API + contrato |
| Envio de proposta | Alto | Alto | Crítico | API + integração + E2E |
| Contratação | Crítico | Alto | Crítico | API + DB + evento + E2E |
| Pagamento | Crítico | Alto | Crítico | API + idempotência + integração |
| Atualização cadastral | Médio | Médio | Médio | API + Web |
| Histórico de propostas | Baixo | Médio | Baixo/Médio | API + exploratório |
| Notificações | Médio | Médio | Médio | Evento + integração |

## Riscos técnicos

- indisponibilidade de serviços dependentes;
- dados inconsistentes;
- timeout;
- concorrência;
- eventual consistency;
- duplicidade de eventos;
- alteração de contrato de API;
- falhas intermitentes de ambiente.

## Riscos de negócio

- valor contratado incorreto;
- taxa divergente;
- contrato criado sem aceite;
- pagamento duplicado;
- status divergente entre canais;
- cliente acessando dados de outro cliente.

## Uso da análise

A matriz orienta:

1. prioridade de execução;
2. profundidade da cobertura;
3. decisão de automação;
4. gates de pipeline;
5. necessidade de observabilidade;
6. estratégia de rollback.
