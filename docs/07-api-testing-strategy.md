# Estratégia de Testes de API

## Objetivo

Validar regras de negócio, contratos, autenticação, autorização, dados e integração sem depender da interface.

## O que validar

- status HTTP;
- headers relevantes;
- schema e tipos;
- campos obrigatórios;
- regras de negócio;
- autenticação e autorização;
- idempotência;
- paginação e filtros;
- persistência;
- mensagens de erro;
- tempo de resposta em cenários críticos.

## Exemplo — criação de proposta

### Positivos

- cliente autenticado cria proposta válida;
- proposta referencia simulação existente;
- resposta retorna identificador e status correto.

### Negativos

- token ausente;
- token inválido;
- simulação inexistente;
- valor fora da faixa permitida;
- campos obrigatórios ausentes;
- cliente tentando acessar recurso de outro cliente.

## Evidências

Para fluxos críticos, registrar:

- endpoint;
- método;
- request sem dados sensíveis;
- status;
- response;
- correlation ID;
- efeito em banco ou evento quando aplicável.

## Automação

Priorizar API para regras estáveis e regressão frequente. Testes devem ser independentes, preparar seus próprios dados e limpar estado quando necessário.

## Princípio

**Não considerar sucesso apenas porque a API respondeu 200.** A resposta precisa estar correta e o efeito esperado precisa ter ocorrido.
