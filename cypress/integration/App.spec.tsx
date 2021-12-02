/// <reference types="cypress" />

describe("App component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Shows App Title", function () {
    cy.get("div").should("contain.text", "Welcome to Dispatcher");
  });
  it("Shows App Description", function () {
    cy.get("div").should(
      "contain.text",
      "Locate articles and breaking news headlines from news sources and blogs across the web"
    );
  });
  // it("Shows App Title", function () {
  //   cy.get("button").click().should("", "Welcome to Dispatcher");
  // });
});
