require('dotenv').config()
console.log(process.env.PORT);

const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Heyy twitter!");
});

app.get("/login", (req, res) => {
    res.send("<h1>You are logged in!</h1>");
})

app.get('/chai', (req, res) => {
    res.send('<h2>Chai is the best!</h2>');
} )

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
