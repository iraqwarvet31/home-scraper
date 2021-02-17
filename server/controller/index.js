const Listing = require('../model/index.js');
const puppeteer = require('puppeteer');
const getData = require('../puppeteer/index.js')

exports.getListings = function (req, res) {
  const { city, state } = req.body;

  (async function main() {
    try {
      const data = await getData(city, state);
      res.send(data).status(200);
    } catch (error) {
      console.log(error)
      res.sendStatus(500);
    }
  })()
}