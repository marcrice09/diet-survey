const express = require('express');
const axios = require('axios');
const router = express.Router();

const { getPlanet }  = require('../lib/planets')

router.get('/tatooine', async function(req, res) {
  let path = await getPlanet('https://swapi.co/api/planets/1/');
  res.json(path);
});

router.get('/alderaan', async function(req, res) {
  let path = await getPlanet('https://swapi.co/api/planets/2/');
  res.json(path);
});

router.get('/yavin', async function(req, res) {
  let path = await getPlanet('https://swapi.co/api/planets/3/');
  res.json(path);
});

module.exports = router;
