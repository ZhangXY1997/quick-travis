describe ('Test App', () => {

    it ('launches', () => {
        cy.visit ('/');
    });

    it ('logo shown on the login page', () => {
        cy.visit ('/');
        cy.get('[data-cy=header]').should('contain', 'ChoreWeek');
    });
});
