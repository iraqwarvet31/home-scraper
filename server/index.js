const express = require('express');
const path = require('path');
const PORT = 3000;
const db = require('./database/index.js');

const app = express();
const CLIENT_DIR = path.resolve(__dirname, '..', 'client', 'dist');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(CLIENT_DIR));

// create request to /api/groceries endpoint and query our database and respond with data to client
// app.get('/api/groceries', (req, res) => {
//   const sql = 'SELECT * FROM groceries';
//   db.query(sql, (err, results) => {
//     if (err) {
//       console.log(err);
//       res.sendStatus(500);
//     } else {
//       res.send(results);
//     }
//   })
// })

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})

