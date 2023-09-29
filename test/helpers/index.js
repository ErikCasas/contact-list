const name = "Erik el rojo";
const num = 1234567891;
const messages = {
  errorType: { message: "Se debe ingresar un numero" },
  successfullyMessage: { message: "Tarea añadida" },
  successFullyEdit: { message: "contacto actualizado" },
  errorMessage: { message: "Se debe ingresar un numero" },
  deleteSuccesfully: { message: "Contacto eliminado" },
  errorIdEdit: { message: "no se encontró ningun contacto" },
  errorDataEdit: {
    message: "debes dar la nueva información en un objeto",
  },
  errorEdit: {
    message: `No puedes añadir más propiedades que las contempladas`,
  },
  errorEditnoId: { message: "Se necesita un ID para identificar el contacto" },
  errorDeleteContact: {
    message: "No se encontro algun contacto para eliminar",
  },
  errorDeleteContactNotInfo: {
    message: "Se necesita un id o nombre para eliminar el contacto",
  },
  errorAddContact: { message: "Número ya existente" },
};
const contactInList = {
  name,
  num,
};

const contactNotInList = {
  id: 100,
  name: "Lupita",
  num: 798312654,
};

module.exports = {
  contactNotInList,
  contactInList,
  messages,
  name,
  num,
};
