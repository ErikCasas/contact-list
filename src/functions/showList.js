const list = require("../data");

const showListOfContacts = () => {
  console.table(list);
};

module.exports = showListOfContacts;
