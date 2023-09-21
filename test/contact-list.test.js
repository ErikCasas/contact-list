const list = require("../src/data/index.js");
const {
  addContact,
  deleteContact,
} = require("../src/index.js");
const {
  name,
  num,
  contactInList,
  messages,
  contactNotInList,
} = require("./helpers/index.js");

//Se pueden hacer mas validaciones como que el numero sea efectivamente un dato numerico y no un string
//o que tenga un min y max de caracteres
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

  it("does not add the new contact if you dont have a name", () => {
    const onlyNumber = addContact(num);
    expect(onlyNumber).toStrictEqual(messages.errorMessage);
    expect(list.length).toBe(8);
  });

  it("Successfully saves the new contact", () => {
    expect(addContact(num, name)).toStrictEqual(messages.successfullyMessage);
    expect(list.length).toBe(9);
    expect(
      list.find(
        (e) =>
          e.name === contactInList.name &&
          e.num === contactInList.num &&
          e.id === 9
      )
    ).toStrictEqual(contactInList);
  });
  it("should not add a contact with name or number already saved", () => {
    expect(addContact(num, name)).toStrictEqual(messages.errorAddContact);
    expect(list.length).toBe(9);
  });
});

describe("The contact is removed from the list successfully", () => {
  it("does not eliminate a contact if the information are not provided", () => {
    expect(deleteContact()).toStrictEqual(messages.errorDeleteContactNotInfo);
    expect(list.length).toBe(9);
  });

  it("does not eliminate a contact if this not exist", () => {
    expect(deleteContact(contactNotInList.id)).toStrictEqual(
      messages.errorDeleteContact
    );
    expect(deleteContact(null, contactNotInList.name)).toStrictEqual(
      messages.errorDeleteContact
    );
    expect(list.length).toBe(9);
  });

  it("the contact are removed succesfully", () => {
    expect(deleteContact(contactInList.num, contactInList.name)).toStrictEqual(
      messages.deleteSuccesfully
    );
    expect(list.length).toBe(8);
  });
});


