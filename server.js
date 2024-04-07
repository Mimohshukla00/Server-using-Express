// step-1 create a folder
// step-2 move into that folder
// step-3 npm init -y
// step-4 open foldre using vs code
// step-5 npm-i express
// step-6 create server.js
// step-7 write the following code in server

// server instantiate
const express = require("express");
const app = express();

// activation of server on 3000 port
app.listen(3000, () => {
  console.log("server started at port 3000");
});
// routes

app.get("/", (req, res) => {
  res.send("hello mimohshukla");
});
app.post("/api/cars", (req, resp) => {
  const { name, brand } = req.body;
  console.log(name);
  console.log(brand);
  resp.send({ msg: `car added successfully` });
});
