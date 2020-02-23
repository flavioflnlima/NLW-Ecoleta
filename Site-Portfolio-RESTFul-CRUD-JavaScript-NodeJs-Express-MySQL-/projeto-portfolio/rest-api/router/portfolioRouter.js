var express = require("express");
var router = express.Router();
var PortfolioModel = require("../model/portfolio/PortfolioModel");
var RespostaClass = require("../model/RespostaClass");

router.get("/", function(req, res, next) {
  PortfolioModel.getTodos(function(erro, retorno) {
    let resposta = new RespostaClass();

    if (erro) {
      resposta.erro = true;
      resposta.msg = "ocorreu um erro";
      console.log("error:", erro);
    } else {
      resposta.dados = retorno;
    }

    res.json(resposta);
  });
});

module.exports = router;
