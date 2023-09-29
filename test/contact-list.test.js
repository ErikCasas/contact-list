const list = require("../src/data/index.js");
const { addContact, deleteContact } = require("../src/index.js");
const {
  name,
  num,
  contactInList,
  messages,
  contactNotInList,
} = require("./helpers/index.js");

describe("Add new contacts successfully", () => {
  it("does not add the new contact if the information are not provided", () => {
    expect(addContact()).toStrictEqual(messages.errorMessage);
    expect(list.length).toBe(8);
  });

  it("does not add the new contact if you dont have a number", () => {
    const onlyName = addContact(null, name);
    expect(onlyName).toStrictEqual(messages.errorMessage);
    expect(list.length).toBe(8);
  });

  it("Successfully saves the new contact", () => {
    expect(addContact(num, name)).toStrictEqual(messages.successfullyMessage);
    expect(list.length).toBe(9);
  });
  it("should not add a contact with name or number already saved", () => {
    expect(addContact(num, name)).toStrictEqual(messages.errorAddContact);
    expect(list.length).toBe(9);
  });

  it("must be able to add a contact with all the information", () => {
    expect(
      addContact(3125562306, "Erik", "Hernández", "Bogotá", "1 Mayo")
    ).toStrictEqual(messages.successfullyMessage);
    expect(list.length).toBe(10);
  });
  it("should save only phone number", () => {
    expect(addContact("3125562306")).toStrictEqual(messages.errorType);
  });
});

describe("The contact is removed from the list successfully", () => {
  it("does not eliminate a contact if the information are not provided", () => {
    expect(deleteContact()).toStrictEqual(messages.errorDeleteContactNotInfo);
    const contact = list.find(
      (e) => e.name === contactInList.name && e.num === contactInList.num
    );
    expect(contact).toBeTruthy();
    expect(list.length).toBe(10);
  });

  it("does not eliminate a contact if this not exist", () => {
    expect(deleteContact(contactNotInList.id)).toStrictEqual(
      messages.errorDeleteContact
    );
    expect(deleteContact(null, contactNotInList.name)).toStrictEqual(
      messages.errorDeleteContact
    );
    expect(list.length).toBe(10);
  });

  it("the contact are removed succesfully", () => {
    expect(deleteContact(contactInList.num, contactInList.name)).toStrictEqual(
      messages.deleteSuccesfully
    );
    expect(list.length).toBe(9);
  });
});
