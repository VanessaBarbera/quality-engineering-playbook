# Estratégia de Automação

## Objetivo

Automatizar onde houver ganho real de velocidade, repetibilidade e confiança, evitando concentrar toda a cobertura na interface.

## Distribuição de cobertura

```text
            E2E
           /   \
       poucos fluxos
        críticos

          API
     integração/contrato
      maior cobertura

        Unitários
   regras e cálculos isolados
```

## Critérios para automatizar

Avaliar:

- frequência de execução;
- criticidade;
- repetibilidade;
- estabilidade da funcionalidade;
- custo de preparação dos dados;
- custo de manutenção;
- tempo economizado na regressão.

## Exemplos

| Cenário | Automatizar? | Camada preferencial |
|---|---|---|
| Login válido | Sim | API |
| Login inválido | Sim | API |
| Cálculo de parcela | Sim | Unitário/API |
| Criação de proposta | Sim | API |
| Contratação completa | Sim | E2E crítico |
| Pagamento duplicado | Sim | API/Integração |
| Mudança visual pontual | Depende | Exploratório/Visual |

## O que evitar

- duplicar o mesmo cenário em todas as camadas sem justificativa;
- usar E2E para validar cada regra de negócio;
- automatizar funcionalidades muito instáveis apenas para aumentar números;
- aplicar retry para esconder causa raiz;
- criar testes dependentes da ordem de execução.

## ROI da automação

```text
Valor =
frequência de execução
+ criticidade
+ tempo manual economizado
+ capacidade de detectar regressões

Custo =
implementação
+ manutenção
+ infraestrutura
+ dados
```

## Manutenibilidade

A suíte deve priorizar:

- separação entre dados e lógica;
- helpers reutilizáveis;
- nomes descritivos;
- independência;
- dados controlados;
- logs úteis;
- execução local e em CI.
