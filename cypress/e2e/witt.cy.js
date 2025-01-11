describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get(".botao_superior > span").click();
    cy.get(":nth-child(2) > .input-required").type("cypressteste@witt.com'");
  });
});
