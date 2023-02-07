// https://docs.cypress.io/api/table-of-contents

describe("My First Test", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.get("input").type("Note");
    cy.get("button").click();
    cy.contains("li", "Note");
    cy.get('[data-cy="delete"]').click();
    cy.contains("li", "Note").should("not.exist");
  });
});
