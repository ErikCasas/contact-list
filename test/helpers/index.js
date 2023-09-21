const name = "Erik el rojo";
const num = 1234567891;
const messages = {
  successfullyMessage: { message: "Tarea añadida" },
  errorMessage: { message: "Falta el numero o el nombre del nuevo contacto" },
  deleteSuccesfully: { message: "Contacto eliminado" },
  errorDeleteContact: {
    message: "No se encontro algun contacto para eliminar",
  },
  errorDeleteContactNotInfo: {
    message: "Se necesita un id o nombre para eliminar el contacto",
  },
  errorAddContact: { message: "Número o nombre ya existente" },
};
const contactInList = {
  id: 9,
  name,
  num,
};

const contactNotInList = {
  id: 100,
  name:"Lupita",
  num:798312654
};

module.exports = {
  contactNotInList,
  contactInList,
  messages,
  name,
  num,
};
