# IA aplicada a Quality Engineering

## Objetivo

Usar IA como acelerador de análise e produtividade sem delegar a responsabilidade sobre a qualidade.

## Casos de uso

- geração inicial de cenários;
- identificação de casos de borda;
- criação de massa sintética;
- apoio à escrita de automação;
- revisão de código;
- interpretação de logs;
- documentação;
- agrupamento de falhas semelhantes;
- apoio à análise de impacto.

## Exemplo de fluxo

```text
Requisito
  ↓
IA sugere cenários
  ↓
QA revisa regras e riscos
  ↓
Cenários aprovados
  ↓
Implementação
  ↓
Revisão humana
```

## Riscos

- alucinação;
- cenário tecnicamente válido, mas incorreto para o negócio;
- exposição de dados sensíveis;
- dependência excessiva;
- código gerado sem entendimento.

## Controles

- não enviar dados sensíveis;
- revisar toda saída relevante;
- validar contra requisitos;
- executar o código;
- registrar decisões importantes;
- manter conhecimento técnico do time.

## Princípio

**IA apoia o raciocínio do QA; não substitui entendimento de negócio, análise de risco ou responsabilidade pela decisão.**
