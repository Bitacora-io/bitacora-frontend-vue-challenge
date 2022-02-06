describe("Forgot Password", () => {
  before(() => {
    cy.intercept(
      {
        method: "GET",
        url: "api/users/reset_password",
      },
      { fixture: "users/reset-password" }
    );
  });

  beforeEach(() => cy.visit("/forgot-password"));

  xit("should be able to send request with valid email", () => {
    cy.get('[data-test="email"]').type("valid@email.com");
    cy.get('[data-test="send-email"]').click();
    cy.url().should("include", "/login");
  });

  it("should display error when invalid email is entered", () => {
    cy.get('[data-test="email"]').type("invalid format");
    cy.get('[data-test="send-email"]').click();
    cy.get("div.el-form-item__error")
      .should("be.visible")
      .should("have.css", "color", "rgb(237, 85, 101)");
    cy.url().should("include", "/forgot-password");
  });
});
