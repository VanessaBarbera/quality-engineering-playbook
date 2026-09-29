# Template — Decisão de Automação

Use este documento para justificar **o que automatizar e em qual camada**.

## Cenário

**Nome:**

**Fluxo:**

**Risco:**

## Critérios

| Critério | Avaliação |
|---|---|
| Frequência de execução | Baixa / Média / Alta |
| Criticidade | Baixa / Média / Alta / Crítica |
| Repetibilidade | Baixa / Média / Alta |
| Estabilidade da funcionalidade | Baixa / Média / Alta |
| Custo manual | Baixo / Médio / Alto |
| Custo de manutenção | Baixo / Médio / Alto |
| Dependência de dados | Baixa / Média / Alta |
| Tempo de feedback necessário | Baixo / Médio / Alto |

## Decisão

- [ ] Não automatizar
- [ ] Unitário
- [ ] API
- [ ] Integração
- [ ] Contrato
- [ ] Web
- [ ] Mobile
- [ ] E2E
- [ ] Performance

## Justificativa

Explique por que essa camada oferece melhor equilíbrio entre risco, feedback e manutenção.

## Evidência esperada

- 
- 

## Quando revisar

- mudança relevante no fluxo;
- aumento de falhas;
- crescimento do tempo de regressão;
- alteração na arquitetura;
- aumento do custo de manutenção.
