# Estratégia de Qualidade

## Objetivo

A estratégia de qualidade do FinFlow busca prevenir defeitos, detectar falhas cedo e aumentar a confiança nas entregas sem transformar toda validação em teste E2E.

## Shift Left

Qualidade começa na análise do requisito.

Antes da implementação, QA participa da identificação de:

- regras de negócio;
- critérios de aceite;
- cenários alternativos;
- dependências;
- riscos;
- dados necessários;
- impactos em integrações.

## Risk-Based Testing

A profundidade dos testes varia conforme:

- impacto financeiro;
- impacto regulatório;
- frequência de uso;
- probabilidade de falha;
- criticidade da integração;
- capacidade de recuperação.

## Cobertura por camada

| Camada | Objetivo |
|---|---|
| Unitário | Regras isoladas e cálculos |
| API | Regras de negócio e validações |
| Integração | Comunicação entre serviços e persistência |
| Contrato | Compatibilidade entre produtores e consumidores |
| E2E | Fluxos críticos do usuário |
| Exploratório | Riscos não previstos e experiência real de uso |
| Não funcional | Performance, segurança, acessibilidade e resiliência |

## Critérios de entrada

Uma história está pronta para teste quando possui:

- critérios de aceite claros;
- dependências conhecidas;
- ambiente disponível;
- massa de teste definida;
- versão implantada identificável.

## Critérios de saída

Uma entrega pode seguir para promoção quando:

- cenários críticos estão aprovados;
- não há defeitos bloqueadores abertos;
- regressão planejada foi executada;
- quality gates foram atendidos;
- evidências estão disponíveis;
- riscos residuais foram registrados.

## Evidências

Para cenários críticos, priorizar evidências que permitam diagnóstico:

- request/response;
- status HTTP;
- logs;
- identificadores de correlação;
- consulta em banco quando aplicável;
- evento publicado/consumido;
- screenshots apenas quando agregarem contexto.

**Quanto maior o risco do fluxo, maior deve ser a profundidade da validação e a qualidade das evidências.**
