const Main = "[data-cy=Main]";
const CreateDictionary = "[data-cy=CreateDictionary]";
const NameInput = "[data-cy=NameInput]";
const ListDictionaries = "[data-cy=ListDictionaries]";
const Dictionary = "[data-cy=Dictionary]";
const DictionaryRemoveButton = "[data-cy=DictionaryRemoveButton]";
const CreateDictionarySubmitButton = "[data-cy=CreateDictionarySubmitButton]";
const FromInput = "[data-cy=FromInput]";
const ToInput = "[data-cy=ToInput]";
const ListTransformRows = "[data-cy=ListTransformRows]";
const CreateTransformRowSubmitButton =
  "[data-cy=CreateTransformRowSubmitButton]";
const CreateTransformRowError = "[data-cy=CreateTransformRowError]";
const RemoveTransformRowButton = "[data-cy=RemoveTransformRowButton";

describe("App", function() {
  beforeEach(() => {
    cy.server();
    cy.visit("/");
  });

  describe("when the user loads the home route", function() {
    it("should load the Main view correctly", function() {
      cy.get(Main);
      cy.get(CreateDictionary);
    });
    it("the user can create new dictionaries", function() {
      createDictionaries();
    });
  });

  describe("when the user has created Dictionaries", function() {
    beforeEach(() => {
      createDictionaries();
    });
    it("the user can select dictionaries", function() {
      selectDictionaries();
    });
    it("the user can remove dictionaries", function() {
      removeDictionaries();
    });

    it("the user can create and delete valid transform rows", function() {
      cy.get(ListTransformRows).should("not.exist");
      createTransformRows();
      cy.get(ListTransformRows);
      createInvalidTransformRows();
      updateTransformRow();
      removeTransformRows();
      cy.get(ListTransformRows).should("not.exist");
    });

    it("the transforms list only rows that belong to the selected Dictionary", function() {
      cy.get(ListTransformRows).should("not.exist");
      createTransformRows();
      cy.get(ListTransformRows);
      selectDictionaries();
      cy.get(ListTransformRows).should("not.exist");
    });
  });
});

const createDictionaries = () => {
  cy.get(NameInput)
    .type("Test Dictionary #1")
    .should("have.value", "Test Dictionary #1");
  cy.get(CreateDictionarySubmitButton).click();

  cy.get(NameInput)
    .type("Test Dictionary #2")
    .should("have.value", "Test Dictionary #2");
  cy.get(CreateDictionarySubmitButton).click();
};

const selectDictionaries = () => {
  cy.get(ListDictionaries + " > :nth-child(2) > :nth-child(2)").contains(
    "true"
  );
  const DictionarySelectButton = "[data-cy=DictionarySelectButton]";
  cy.get(DictionarySelectButton).click();
  cy.get(ListDictionaries + " > :nth-child(1) > :nth-child(2)").contains(
    "true"
  );
  cy.get(ListDictionaries + " > :nth-child(2) > :nth-child(2)").contains(
    "false"
  );
};

const removeDictionaries = () => {
  cy.get(":nth-child(2) > " + DictionaryRemoveButton).click();
  cy.get(Dictionary);
  cy.get(":nth-child(1)  > " + DictionaryRemoveButton).click();
  cy.get(Dictionary).should("not.exist");
};

const createTransformRows = () => {
  cy.get(FromInput)
    .type("Metal Grey")
    .should("have.value", "Metal Grey");
  cy.get(ToInput)
    .type("Gray")
    .should("have.value", "Gray");
  cy.get(CreateTransformRowSubmitButton).click();

  cy.get(FromInput)
    .type("Dark Red")
    .should("have.value", "Dark Red");
  cy.get(ToInput)
    .type("Crimson")
    .should("have.value", "Crimson");
  cy.get(CreateTransformRowSubmitButton).click();

  cy.get(
    "[data-cy=ListTransformRows] > :nth-child(2) > :nth-child(1)"
  ).contains("Dark Red");
  cy.get(
    "[data-cy=ListTransformRows] > :nth-child(2) > :nth-child(2)"
  ).contains("Crimson");
};

const createInvalidTransformRows = () => {
  cy.get(FromInput)
    .type("Crimson")
    .should("have.value", "Crimson");
  cy.get(ToInput)
    .type("Blue")
    .should("have.value", "Blue");
  cy.get(CreateTransformRowSubmitButton).should("not.exist");
  cy.get(CreateTransformRowError);

  cy.get(FromInput)
    .clear()
    .type("Blue")
    .should("have.value", "Blue");
  cy.get(CreateTransformRowSubmitButton).should("not.exist");
  cy.get(CreateTransformRowError);

  cy.get(ListTransformRows);
};

const updateTransformRow = () => {
  cy.get(FromInput)
    .clear()
    .type("Dark Red")
    .should("have.value", "Dark Red");
  cy.get(ToInput)
    .clear()
    .type("Red")
    .should("have.value", "Red");
  cy.get(CreateTransformRowSubmitButton).click();

  cy.get(ListTransformRows + "> :nth-child(2) > :nth-child(1)").contains(
    "Dark Red"
  );
  cy.get(ListTransformRows + ">  :nth-child(2) > :nth-child(2)").contains(
    "Red"
  );
};

const removeTransformRows = () => {
  cy.get(RemoveTransformRowButton)
    .first()
    .click();

  cy.get("[data-cy=ListTransformRows] > :nth-child(2)").should("not.exist");

  cy.get(RemoveTransformRowButton)
    .first()
    .click();

  cy.get("[data-cy=ListTransformRows] > :nth-child(1)").should("not.exist");
  cy.get(ListTransformRows).should("not.exist");
};
