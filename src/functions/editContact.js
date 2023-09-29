const { messages } = require("../../test/helpers");
const list = require("../data");

const allowedProperties = ["name", "num", "adrres", "city", "lastName"];

const editContact = (id, data) => {
  if (!id) {
    return { message: "Se necesita un ID para identificar el contacto" };
  } else if (typeof data !== "object" || data === null) {
    return { message: "debes dar la nueva información en un objeto" };
  } else if (
    Object.keys(data).some((key) => !allowedProperties.includes(key))
  ) {
    return {
      message: `No puedes añadir más propiedades que las contempladas`,
    };
  } else {
    const index = list.findIndex((e) => e.id == id);
    if (index === -1) return { message: "no se encontró ningun contacto" };
    const contact = list.find((e) => e.id == id);
    const updateData = { ...contact, ...data };
    list.splice(index, 0, updateData);
    return { message: "contacto actualizado" };
  }
};

const data = {
  id: "Erikson",
};

module.exports = editContact;
