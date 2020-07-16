const express = require("express");
const server = express();

//pega o BD
const db = require("./database/db.js");

//configuração da pasta public
server.use(express.static("public"));

//template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

//rotas
server.get("/", (req, res) => {
  return res.render("index.html");
});
server.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});
server.get("/search", (req, res) => {
  db.all(`SELECT * FROM places`, function (err, rows) {
    if (err) {
      return console.log(err);
    }

    const total = rows.length

    return res.render("search-results.html", { places: rows, total: total });
  });
});

//starta o servidor
server.listen(3000);
