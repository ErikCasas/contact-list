const list = require("../data");

const deleteContact = (id, name) => {
    if (!id && !name) {
      return { message: "Se necesita un id o nombre para eliminar el contacto" };
    }
    const contact = list.find((e) => e.id === id || e.name === name);
    if (contact) {
      const index = list.indexOf(contact);
      list.splice(index, 1);
      return { message: "Contacto eliminado" };
    } else {
      return { message: "No se encontro algun contacto para eliminar" };
    }
  };


  module.exports = deleteContact