Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Ana Luisa')
    cy.get('#lastName').type('Fávaro de Souza')
    cy.get('#email').type('analuisafav@gmail.com')
    cy.get('#open-text-area').type('Test')
    cy.contains('button', 'Enviar').click()
})