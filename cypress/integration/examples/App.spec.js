describe ('Test App', () => {

    it ('launches', () => {
        cy.visit ('/');
    });

    it ('logo shown on the login page', () => {
        cy.visit ('/');
        cy.get('[data-cy=header]').should('contain', 'ChoreWeek');
    });

    it('click addChore button', () => {
        cy.visit ('/');
        cy.get('[data-cy=addChore]').click();
        cy.get('[data-cy=cancel]').should('contain' ,'Cancel');
    });
});
