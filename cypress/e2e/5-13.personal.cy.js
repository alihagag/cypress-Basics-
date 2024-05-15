/// <reference types="cypress" />

// iFrame : Embeding anotehr DOM within another one (header and body)




describe("Homework", () => {

  it("first and last name", () => {
    cy.visit("https://www.techglobal-training.com/frontend/iframes");
    cy.get("#first_name").type("Ali");
    cy.get("#last_name").type("Hagag");
    cy.get("#submit").click();
  });
  
});