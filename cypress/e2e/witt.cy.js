describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get(".botao_superior > span").click();
    cy.get(":nth-child(2) > .input-required").type(
      "Testecypress@outlook.com.br'"
    );
    cy.get(":nth-child(3) > .input-required").type("cypressteste@witt.com'");
    cy.get(":nth-child(4) > .input-required").type("cypressteste@witt.com'");
    cy.get(".button > input").click();
    cy.get(":nth-child(7) > a").click();
    cy.get("#email").type("Testecypress@outlook.com.br'");
    cy.get("#senha").type("cypressteste@witt.com");
    cy.get(".logar").click();
  });
});
