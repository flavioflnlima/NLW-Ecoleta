/*const db = require('../../banco/dbConexao');

module.exports = class PortfolioModel{
    static getTodos(callback){
        return db.query('select *  from portfolio', callback)
    }
    static getId(id, callback){
        return db.query('SELECT * FROM ')
    }
}*/

var criarPet = function(nome) {
    var sex;
    
    return {
      setNome: function(newNome) {
        nome = newNome;
      },
      
      getNome: function() {
        return nome;
      },
      
      getSex: function() {
        return sex;
      },
      
      setSex: function(newSex) {
        if(typeof newSex == "string" && (newSex.toLowerCase() == "macho" || newSex.toLowerCase() == "fêmea")) {
          sex = newSex;
        }
      }
    }
  }
  
  var pet = criarPet("Vivie");
  console.log(pet.getNome());                  // Vivie
  
pet.setNome("Oliver");
pet.setSex("macho");
console.log(pet.getSex());                   // macho
console.log(pet.getNome());                  // Oliver
