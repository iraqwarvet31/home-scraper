const express = require('express');
const router = express.Router();

const { getListings } = require('../controller/index.js');

router.post('/listings', getListings);

module.exports = router;