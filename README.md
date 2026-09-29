# Quality Engineering Playbook

Este repositório apresenta uma abordagem prática de **Quality Engineering**, reunindo estratégia, processos, decisões, templates e exemplos aplicáveis ao ciclo completo de desenvolvimento de software.

O objetivo é demonstrar como estruturo qualidade desde a análise de requisitos até a liberação em produção, considerando risco, automação, CI/CD, observabilidade e melhoria contínua.

## Cenário de referência

O playbook utiliza um produto fictício chamado **FinFlow**, uma plataforma digital de crédito criada exclusivamente para fins de portfólio.

Fluxo principal:

```text
Cliente → Simulação → Análise → Proposta → Contratação → Pagamento
```

A partir desse fluxo, o projeto demonstra como diferentes tipos de teste podem ser distribuídos entre API, Web, Mobile, contratos, banco de dados, performance e E2E.

## Objetivos

- Definir uma estratégia de qualidade baseada em risco
- Planejar cobertura de testes de forma rastreável
- Decidir o que automatizar e em qual camada
- Integrar testes ao pipeline de CI/CD
- Definir Quality Gates para promoção entre ambientes
- Tratar instabilidades e flaky tests
- Monitorar qualidade por métricas e observabilidade
- Utilizar IA como apoio, mantendo revisão e responsabilidade humana

## Estrutura

```text
docs/
  01-finflow-context.md
  02-quality-strategy.md
  03-risk-analysis.md
  04-automation-strategy.md
  05-ci-cd-quality-gates.md
  06-decision-log.md

templates/
  test-case-template.md
  bug-report-template.md
  release-checklist.md
  test-plan-template.md

diagrams/
  system-context.md
  quality-flow.md
```

## Princípios do Playbook

1. **Qualidade começa antes da execução dos testes.**
2. **Cobertura deve ser orientada por risco e valor de negócio.**
3. **Automação é investimento e precisa justificar custo de manutenção.**
4. **Testes E2E devem proteger fluxos críticos, não concentrar toda a cobertura.**
5. **Falhas precisam produzir evidências úteis para diagnóstico.**
6. **Pipeline verde não substitui análise de risco, observabilidade e validação de negócio.**

## Roadmap

- [x] Contexto do produto fictício
- [x] Estratégia de qualidade
- [x] Análise de risco
- [x] Estratégia de automação
- [x] CI/CD e Quality Gates
- [x] Decision Log
- [ ] Templates essenciais
- [ ] Diagramas iniciais
- [ ] Estratégia de testes de API
- [ ] Estratégia Web com Cypress
- [ ] Estratégia Mobile
- [ ] Testes de contrato
- [ ] Banco de dados e consistência
- [ ] Mensageria e eventos
- [ ] Performance com k6
- [ ] Acessibilidade
- [ ] Observabilidade
- [ ] Flaky tests
- [ ] Métricas de qualidade
- [ ] IA aplicada a QA

## Sobre o projeto

Este material foi criado para fins de estudo e portfólio profissional. O produto FinFlow, seus fluxos e regras são fictícios e não representam processos internos de nenhuma empresa real.
