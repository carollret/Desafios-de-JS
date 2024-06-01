//Crie um array, e armazene nele 5 idades. E armazene em uma outra variável a soma da primeira com a última idade; 

var entrada = require("readline-sync");
var idades = []

for (var i=0; i<4; i++){
        var idade = entrada.question(`Escreva as idades: `)
        idades[i] = idade
    }
console.log(idades)