describe("TC01", () => {
  it("Open Kapook.com Calendar", () => {
    cy.visit("https://calendar.kapook.com/");
  });
});
describe("TC02", () => {
  it("Open Day Number 8 in April Year 2567", () => {
    cy.visit("https://calendar.kapook.com/");
    cy.get("#april > ul > :nth-child(9) > .holiday").click();
  });
});
describe("TC03", () => {
  it("Open April Calendar Details", () => {
    cy.visit("https://calendar.kapook.com/");
    cy.url().should("include", "https://calendar.kapook.com/");
    cy.get("#april > h2 > a").click();
    cy.url().should("include", "/2567/april");
  });
});
describe("TC04", () => {
  it("Open April Calendar Details", () => {
    cy.visit("https://calendar.kapook.com/");
    cy.url().should("include", "https://calendar.kapook.com/");
    cy.wait(10000);
    cy.get("#april > h2 > a").click();
    cy.url().should("include", "/2567/april");
  });
});
