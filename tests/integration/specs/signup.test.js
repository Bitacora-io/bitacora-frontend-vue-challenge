describe("Sign up", () => {
  before(() => {
    cy.intercept(
      {
        method: "POST",
        url: "/api/users/create",
      },
      { fixture: "user-create.json" }
    );

    cy.intercept(
      {
        method: "GET",
        url: "/api/organizations",
      },
      { fixture: "organizations.json" }
    );
  });

  beforeEach(() => cy.visit("/sign-up"));

  it("should redirect to /dashboard after registering user", () => {
    cy.get("[data-test=signup-name]").type("alan");
    cy.get("[data-test=signup-email]").type("alan@alan.com");
    cy.get("[data-test=signup-password]").type("alan123");
    cy.get("[data-test=signup-send-form]").click();
    cy.url().should("include", "/dashboard");
  });

  it("should not register user if there's an error in the form", () => {
    cy.get("[data-test=signup-email]").type("alan@alan.com");
    cy.get("[data-test=signup-password]").type("alan123");
    cy.get("[data-test=signup-send-form]").click();
    cy.get("div.el-form-item__error")
      .should("be.visible")
      .should("have.css", "color", "rgb(237, 85, 101)");
    cy.url().should("include", "/sign-up");
  });

  it("should display error whenever server response is other than 200", () => {
    cy.intercept("/api/users/create", (req) => {
      req.reply(500, { error: "Any error" });
    });
    cy.get("[data-test=signup-name]").type("alan");
    cy.get("[data-test=signup-email]").type("alan@alan.com");
    cy.get("[data-test=signup-password]").type("alan123");
    cy.get("[data-test=signup-send-form]").click();
    cy.get('[data-test="signup-failed-registry"]').should("be.visible");
    cy.url().should("include", "/sign-up");
  });
});
