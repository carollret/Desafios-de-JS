//Faça um programa que solicite a idade de 10 usuários, em seguida exiba a média das idades. 

var entrada = require('readline-sync');
var idade = 0;
var somaIdade = 0;
var qtdIdades = parseInt(entrada.question('Digite a quantidade idades que quer trabalhar: '));
for (i=0; i<qtdIdades; i++){
    idade = parseInt(entrada.question(`Digite ${i+1} uma idade: `));
    somaIdade = somaIdade + idade;
}
console.log(`A média das ${qtdIdades} idades é ${somaIdade/qtdIdades}`);