const express = require("express");
const mex = require("mustache-express");
const app = express();
const routes = require('./routes/router.js');
app.engine("mustache", mex());

app.set("views", "./views");
app.set("view engine", "mustache");
app.use(express.static("public"));

app.use(routes);

app.listen(3000, function () {
  console.log("App is running on localhost:3000");
})