const name = "Erik el rojo";
const num = 1234567891;
const messages = {
  errorType: { message: "Se debe ingresar un numero" },
  successfullyMessage: { message: "Tarea añadida" },
  errorMessage: { message: "Se debe ingresar un numero" },
  deleteSuccesfully: { message: "Contacto eliminado" },
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
