const express = require("express");
const path = require("path");
const PORT = 3000;

const db = require("./database/index.js");
const getData = require('./puppeteer/index.js')

const app = express();
const CLIENT_DIR = path.resolve(__dirname, "..", "client", "dist");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(CLIENT_DIR));

app.post("/api/apartments/", (req, res) => {
  console.log(req.body)
  // (async function main() {
  //   try {
  //     const data = await getData();
  //     res.send(data).status(200);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // })()
  res.send(req.body).status(200);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
