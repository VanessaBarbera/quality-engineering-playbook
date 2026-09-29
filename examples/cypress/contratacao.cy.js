// Exemplo ilustrativo de estrutura Cypress para o produto fictício FinFlow.
// Não é executável isoladamente: depende de uma aplicação e comandos customizados.

describe('Contratação de crédito', () => {
  beforeEach(() => {
    cy.loginByApi();
  });

  it('permite contratar uma proposta aprovada', () => {
    cy.createApprovedProposalByApi().then((proposal) => {
      cy.visit('/propostas');

      cy.get(`[data-testid="proposal-${proposal.id}"]`).click();
      cy.get('[data-testid="accept-offer"]').click();
      cy.get('[data-testid="confirm-contract"]').click();

      cy.contains('Contratação realizada com sucesso').should('be.visible');
    });
  });
});
