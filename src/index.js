const list = require("./data/index");

//--------------------------------------------------
const addContact = (num, name) => {
  //una alterativa es que si no se da un nombre,
  //el numero sea el nombre, como sucede en los telefonos
  if (!num || !name) {
    return { message: "Falta el numero o el nombre del nuevo contacto" };
  }
  const contactInList = list.find((e) => e.name === name || e.num === num);
  if (contactInList) {
    return { message: "Número o nombre ya existente" };
  } else {
    console.log("adios");
    const newContact = {
      id: list.length + 1,
      name,
      num,
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

showListOfContacts();
module.exports = { addContact, deleteContact };
