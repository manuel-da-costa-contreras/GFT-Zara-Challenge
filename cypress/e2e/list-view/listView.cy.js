/// <reference types="cypress" />

const characterCard = "Yamcha";
const filteredCharacter = "Krillin";
const characterCards = ["Goku", "Vegeta"];

describe("GFT App 2e2", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("can search for a card and selects it", async () => {
    cy.wait(500);
    cy.scrollTo(0, 800);

    cy.get("[class*='listContainer']")
      .find("[class*='cardWrapper']")
      .contains("[class*='titleWrapper'] span", characterCard)
      .should("be.visible")
      .click();

    cy.get("[class*='cardButton']").should("be.visible").click();
    cy.wait(500);
  });

  it("it can search for an specific character", () => {
    cy.wait(500);

    cy.get("[class*='inputStyles']").type("Kril").should("have.value", "Kril");

    cy.get("[class*='listContainer']")
      .find("[class*='cardWrapper']")
      .contains("[class*='titleWrapper'] span", filteredCharacter)
      .should("be.visible");
  });

  it("it can click several on two characters", () => {
    cy.wait(500);

    characterCards.forEach((name) => {
      cy.get("[class*='listContainer']")
        .find("[class*='cardWrapper']")
        .contains("[class*='titleWrapper'] span", name)
        .parent()
        .find("button")
        .click();
    });

    cy.get("[class*='headerWrapper']")
      .find("[class*='favoriteButton']")
      .contains("span", 2)
      .should("have.text", 2);

    cy.get("[class*='headerWrapper']")
      .find("[class*='favoriteButton']")
      .click();

    cy.wait(500);
  });
});
