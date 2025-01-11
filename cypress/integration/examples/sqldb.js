/// <reference types="cypress" />

context('Window', () => {
    it('Database Interaction', () => {
      // Replace cy.sqlServer with cy.task and queryDb task
      cy.task('queryDb', 'SELECT * FROM Persons').then(function (result) {
        // Log the FirstName of the first person in the result
        console.log(result[0].FirstName);  // Access the 'FirstName' from the first row
        console.log(result[0].City);       // Access the 'City' from the first row
      });
    });
  });
  