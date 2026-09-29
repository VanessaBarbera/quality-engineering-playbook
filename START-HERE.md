# Start Here — Como reutilizar este Playbook

Este repositório foi estruturado para servir tanto como **portfólio** quanto como **guia reutilizável de Quality Engineering**.

O produto fictício **FinFlow** funciona como um exemplo preenchido. Para aplicar o playbook em outro produto, use os templates genéricos disponíveis na pasta `templates/`.

## Caminho recomendado

### 1. Entenda o produto

Comece preenchendo:

- `templates/product-context-template.md`

Registre objetivo do produto, usuários, fluxos críticos, integrações, dados sensíveis e dependências.

### 2. Avalie os riscos

Use:

- `templates/risk-matrix-template.md`

Classifique funcionalidades por impacto, probabilidade, criticidade e necessidade de mitigação.

### 3. Defina a cobertura

Use:

- `templates/test-plan-template.md`
- `templates/automation-decision-template.md`

Decida quais validações pertencem a unitário, API, integração, contrato, Web/Mobile, E2E, exploratório ou testes não funcionais.

### 4. Defina os Quality Gates

Use:

- `templates/quality-gates-template.md`
- `templates/release-checklist.md`

Estabeleça critérios objetivos para promoção entre ambientes.

### 5. Crie rastreabilidade

Relacione:

```text
Requisito → Risco → Cenário → Automação → Evidência → Resultado
```

Use como referência:

- `docs/20-traceability-matrix.md`

### 6. Evolua com feedback

Após releases, revise falhas em produção, métricas, flaky tests, tempo de feedback, gaps de cobertura e novos riscos.

## Regra principal

Não copie decisões sem entender o contexto.

O objetivo do playbook é oferecer uma **estrutura para tomada de decisão**, e não impor a mesma estratégia a todos os produtos.
