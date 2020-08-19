// comments
 document.write("Hello")

// variaveis, tipos de dados
let myvar = "He"
const myconst = "He"

document.write(myconst + myvar)

// string
var str1 = "Isso é uma string"
var str2 = 'Isso também é um string'
var str3 = `Isso é uma string também`

// number
const n1 = 1
const n2 = 12
document.write(n1 + n2)

// boolean - true ou false
const bTrue = true
const bFalse = false
document.write(bFalse)

// objeto possuem propriedades e funcionalidade
const pessoa = {
  altura: "1,80m",
  idade: 24,
  solteiro: true,
  correr(){
    document.write("executar uma grande logica de correr")
  }
}
pessoa.correr()

const pessoa2 = {
  altura: "1,75m",
  idade: 24,
  solteiro: false,
  correr(){
    document.write("executar uma grande logica de correr")
  }
}
pessoa2.correr()

// Array - Vetores
const colecaoDeBolinhas = ["blue", "green", 1, {name: "My Name"}]

document.write(colecaoDeBolinhas[3].name)


// Funções - Funcionalides - Atalhos - Reuso de código

// // registrar função
function sayMyName(name) {
  
  document.write(name)
}

// // executar
sayMyName("Douglas")
sayMyName("Valeska")
sayMyName("Kyam")

// condicionais

const notaFinal = 7

if( notaFinal < 5 ) {
  document.write("Reprovado")
} else {
  document.write("Aprovado")
}

// loop repetições
for (i = 0; i < 10; i++) {
  document.write(`<p>${i}</p>`)
}

var resultado = '';
var i = 0;
do {
   i += 1;
   resultado += i + ' ';
} while (i < 5);
document.getElementById('exemplo').innerHTML = resultado;

var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}

function showOffsetPos (sId) {
  var nLeft = 0, nTop = 0;

  for (var oItNode = document.getElementById(sId); // initialization
       oItNode; // condition
       nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent) // final-expression
       /* empty statement */ ;
  
  console.log("Offset position of \"" + sId + "\" element:\n left: " + nLeft + "px;\n top: " + nTop + "px;");
}

showOffsetPos("content");
