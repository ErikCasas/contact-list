const list = require("../data");

const defaultInfo = "Por definir";


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


module.exports =  addContact