# Estratégia Web com Cypress

## Objetivo

Proteger jornadas críticas no navegador sem usar a interface para validar toda regra de negócio.

## Seleção de cenários

Automatizar no Web principalmente:

- login e navegação principal;
- simulação de crédito;
- envio de proposta;
- aceite de oferta;
- contratação;
- visualização de status importante.

Regras de cálculo e validações extensas devem permanecer preferencialmente em API ou unitário.

## Boas práticas

- usar seletores estáveis, como `data-testid`;
- evitar dependência de texto visual quando não necessário;
- controlar dados por API quando possível;
- evitar waits fixos;
- sincronizar pela condição real da aplicação;
- separar comandos reutilizáveis;
- manter testes independentes;
- gerar screenshot e vídeo somente quando agregarem diagnóstico.

## Exemplo conceitual

```javascript
describe('Contratação de crédito', () => {
  it('permite contratar uma proposta aprovada', () => {
    cy.loginByApi()
    cy.createApprovedProposalByApi()

    cy.visit('/propostas')
    cy.get('[data-testid="proposal-card"]').click()
    cy.get('[data-testid="accept-offer"]').click()

    cy.contains('Contratação realizada com sucesso').should('be.visible')
  })
})
```

## Anti-patterns

- criar toda massa pela UI;
- depender da ordem dos testes;
- `cy.wait(5000)` para resolver sincronização;
- validar detalhes internos que pertencem à API;
- duplicar toda cobertura de backend no navegador.
