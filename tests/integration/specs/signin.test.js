describe("Sign in", () => {
  before(() => {
    cy.intercept(
      {
        method: "GET",
        url: "/api/organizations",
      },
      { fixture: "organizations.json" }
    );
  });

  beforeEach(() => cy.visit("/login"));

  it("should be able to sign in with correct credentials", () => {
    cy.intercept(
      {
        method: "POST",
        url: "/api/sessions/login",
      },
      { fixture: "login.json" }
    );
    cy.get('[data-test="signin-email"]').type("alan@alan.com");
    cy.get('[data-test="signin-password"]').type("whatsaup");
    cy.get('[data-test="signin-form-button"]').click();
    cy.url().should("include", "/dashboard");
  });

  it("should display errors when credentials invalid", () => {
    cy.intercept("/api/sessions/login", (req) => {
      req.reply(401, { error: "Wrong email or password" });
    });
    cy.get('[data-test="signin-email"]').type("alan@alan.com");
    cy.get('[data-test="signin-password"]').type("whatsaup");
    cy.get('[data-test="signin-form-button"]').click();
    cy.url().should("include", "/login");
    cy.get('[data-test="signin-failed-login"]').should("be.visible");
  });
});
