describe("Log out", () => {
  before(() => {
    cy.intercept(
      {
        method: "GET",
        url: "/api/organizations",
      },
      { fixture: "organizations.json" }
    );

    cy.intercept(
      {
        method: "GET",
        url: "/api/sessions/logout",
      },
      { message: "Session ended" }
    );

    window.localStorage.setItem("session_token", "abc");
  });

  beforeEach(() => cy.visit("/dashboard"));

  it("should be able to log out when clicking Logout button", () => {
    cy.get('[data-test="nav-profile-icon"]').click();
    cy.get('[data-test="nav-profile-logout"]').click();
    cy.url().should("include", "/login");
  });
});
