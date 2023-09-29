const list = require("../data");

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


  module.exports = showListOfContacts