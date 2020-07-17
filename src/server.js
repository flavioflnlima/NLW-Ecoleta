const express = require("express");
const server = express();

//pega o BD
const db = require("./database/db.js");

//configuração da pasta public
server.use(express.static("public"));

//habilidar o uso do req.body
server.use(express.urlencoded({ extended: true }));

//template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

//rotas
//req: Requisição
//res: Resposta
server.get("/", (req, res) => {
  return res.render("index.html");
});

server.get("/create-point", (req, res) => {
  return res.render("create-point.html");
});

server.post("/savepoint", (req, res) => {
  //req.body: Corpo do formulario

  const query = `INSERT INTO places(
            image,
            name,
            address,
            address2,
            state,
            city,
            items

        ) 
        VALUES(
            ?,?,?,?,?,?,?
        )`;

  const values = [
    req.body.image,
    req.body.name,
    req.body.address,
    req.body.address2,
    req.body.state,
    req.body.city,
    req.body.items,
  ];

  function afterInsertDate(err) {
    if (err) {
      console.log(err);
      return res.send("erro no cadastro");
    }

    return res.send("create-point.html", { saved: true });
  }

  db.run(query, values, afterInsertDate);
});

server.get("/search", (req, res) => {
  const search = req.query.search;
  let total;
  if (search == "") {
    db.all(`SELECT * FROM places`, function (err, rows) {
      if (err) {
        return console.log(err);
      }
      total = rows.length;
      return res.render("search-results.html", { places: rows, total: total });
    });
  } else {
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (
      err,
      rows
    ) {
      if (err) {
        return console.log(err);
      }

      total = rows.length;

      return res.render("search-results.html", { places: rows, total: total });
    });
  }
});

//starta o servidor
server.listen(3000);
