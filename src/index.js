const list = require("./data/index");

const defaultInfo = "Por definir";

//--------------------------------------------------
const addContact = (
  num,
  name,
  lastName,
  city = defaultInfo,
  address = defaultInfo
) => {
  if (typeof num !== "number") return { message: "Se debe ingresar un numero" };
  if (!num) return { message: "Falta el numero del nuevo contacto" };
  name = name || num;
  const contactInList = list.find((e) => e.num === num);
  if (contactInList) {
    return { message: "Número ya existente" };
  } else {
    const newContact = {
      id: new Date().getTime(),
      name,
      num,
      lastName,
      direction: {
        city,
        address,
      },
    };
    list.push(newContact);
    return { message: "Tarea añadida" };
  }
};

//--------------------------------------------------

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

//--------------------------------------------------

const showListOfContacts = () => {
  console.log("╔════════════════╦═════════════╗");
  console.log("║  Nombre        ║    Telefono ║");
  console.log("╠════════════════╩═════════════╣");
  list.map((e) => {
    console.log("╠═══════════════════════════════");
    console.log(`║${e.name}      ${e.num} `);
  });
  console.log("╚═══════════════════════════════");
};

const editContact = () => {};
module.exports = { addContact, deleteContact };
