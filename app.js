const express = require("express");
const app = express();

app.use(express.static("app/public"));

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

var session = require("express-session");
app.use(
    session(
        {
      secret: "HELLo nODE",
      resave: false,
      saveUninitialized: false,
  }));  

var rotas = require("./app/routes/router.cjs");
app.use("/", rotas);

app.listen(3300, () =>{
    console.log(`Servidor ouvindo na porta 3300`);
});