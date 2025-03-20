require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/facebook', (req, res) => {
    res.send('hello facebook!');
  });

  app.get('/instagram', (req, res) => {
    res.send('hello instagram!');
  });
app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
    });