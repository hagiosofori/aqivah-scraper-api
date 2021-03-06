const express = require('express');
const router = express.Router();
const data = require('./../data');
const { db } = require('../index');

router.get('/', (req, res) => {
  console.log("req.body", req.query);
  const requestOptions = {
    getNextSource: 'getNextSource',
  };

  let response = 'Invalid request';

  if (req.query.request === requestOptions.getNextSource) {
    console.log('called api /sources with req getnextsource');
    response = getNextSource();
  }

  if (!req.query.request)
    response = data.sources;

  res.send(response);
});

router.post('/', (req, res) => {
  console.log('received source -> ', req.body);
  res.send("Success");
});

module.exports = router;


function getNextSource() {
  console.log('source to use -> ', data.sources[2]);
  return data.sources[2];
}
