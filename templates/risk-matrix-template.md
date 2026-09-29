# Template — Matriz de Riscos

## Escala sugerida

### Impacto

- **Baixo:** impacto limitado e facilmente reversível.
- **Médio:** afeta parte dos usuários ou exige intervenção.
- **Alto:** afeta fluxo importante, receita, operação ou experiência.
- **Crítico:** pode gerar perda financeira, regulatória, de segurança ou indisponibilidade grave.

### Probabilidade

- Baixa
- Média
- Alta

## Matriz

| ID | Funcionalidade / Fluxo | Impacto | Probabilidade | Nível de risco | Estratégia de mitigação | Cobertura |
|---|---|---|---|---|---|---|
| R-001 | | | | | | |

## Perguntas de apoio

- A falha pode gerar perda financeira?
- Existe impacto regulatório?
- Há exposição de dados?
- O fluxo é muito utilizado?
- Existe dependência externa?
- O erro é facilmente detectável?
- Existe rollback?
- O problema pode gerar efeito duplicado?
- O fluxo possui consistência eventual?

## Ações por risco

### Crítico
Cobertura em múltiplas camadas, automação prioritária, Quality Gate, evidência forte, observabilidade e plano de rollback.

### Alto
Automação recomendada, regressão frequente e monitoramento.

### Médio
Cobertura proporcional à mudança e automação conforme ROI.

### Baixo
Validação simples ou exploratória pode ser suficiente.
