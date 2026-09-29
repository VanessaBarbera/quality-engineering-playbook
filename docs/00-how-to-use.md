# Como usar este Quality Engineering Playbook

## Para quem serve

Este playbook pode ser usado por profissionais de QA, Quality Engineers, Tech Leads, squads de desenvolvimento e pessoas estudando Quality Engineering.

## Formas de uso

### Uso individual

Um QA pode usar os templates para estruturar plano de testes, análise de riscos, decisão de automação, bug reports, release checklist e evidências.

### Uso por uma squad

O time pode adaptar o playbook para definir critérios de entrada e saída, cobertura mínima, Quality Gates, estratégia de regressão, tratamento de flaky tests e observabilidade.

### Uso como referência

Nem todo documento precisa ser adotado. Escolha apenas os artefatos que ajudam a resolver um problema real.

## Modelo de adoção

```text
Produto
   ↓
Contexto
   ↓
Riscos
   ↓
Cobertura
   ↓
Automação
   ↓
Quality Gates
   ↓
Execução
   ↓
Observabilidade
   ↓
Aprendizado
```

## FinFlow x seu produto

Neste repositório:

- **FinFlow** = exemplo preenchido;
- **templates/** = base reutilizável;
- **docs/** = estratégias e referências;
- **examples/** = exemplos técnicos;
- **diagrams/** = representações visuais.

Ao reutilizar, substitua regras fictícias do FinFlow pelas regras reais do produto.

## Adaptação mínima recomendada

Antes de usar o playbook em um projeto real, defina:

1. fluxos críticos;
2. falhas de maior impacto;
3. integrações;
4. ambientes;
5. evidências necessárias;
6. testes que bloqueiam release;
7. métricas úteis para o time.

## Evite

- transformar o playbook em burocracia;
- criar documentos que ninguém usa;
- automatizar tudo por padrão;
- aplicar thresholds arbitrários;
- copiar estratégia sem considerar risco;
- medir produtividade individual por quantidade de testes.

## Resultado esperado

O time deve conseguir responder rapidamente: o que é crítico, o que está sendo testado, em qual camada, o que está automatizado, o que bloqueia release, quais riscos permanecem e como a qualidade está sendo acompanhada.
