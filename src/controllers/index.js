const path = require('path');

// There is no reason for the name here except an arbitary example
// of updating the server data based on a client request.
let name = 'unknown';

const hostIndex = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/index.html`));
};

const hostPage1 = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/page1.html`));
};

const hostPage2 = (req, res) => {
  return res.sendFile(path.resolve(`${__dirname}/../../views/page2.html`));
};

const hostNotFound = (req, res) => {
  return res.status(404).sendFile(path.resolve(`${__dirname}/../../views/notFound.html`));
};

const getName = (req, res) => {
  return res.json({name});
};

const setName = (req, res) => {
  if (!req.body.firstname || !req.body.lastname) {
    return res.status(400).json({
      error: 'Missing firstname and/or lastname.',
      id: 'setNameMissingParams'
    });
  }

  name = `${req.body.firstname} ${req.body.lastname}`;
  return res.json({name});
};

module.exports = {
  index: hostIndex,
  page1: hostPage1,
  page2: hostPage2,
  notFound: hostNotFound,
  getName,
  setName,
};