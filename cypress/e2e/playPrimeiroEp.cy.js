describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get(".home-text > .botao > span").click();
    cy.get("#kimetsu > a > img").click();
  });
});
