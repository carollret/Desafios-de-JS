// Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de números pares e a quantidade de números ímpares. Faça um programa que solicita 10 números do usuário e em seguida exiba a mensagem “O número {x} é ímpar/par” de acordo com o valor que foi digitado.

var entrada = require('readline-sync');
var qtdPares = 0;
var qtdImpar = 0;

for (var i=0; i<10; i++){
    var num = parseInt(entrada.question(`Digite ${i+1}º numero: `)); // ${i+1}ª indica a posição
    if(num % 2 !== 0){
        qtdPares++;
    } else{
        qtdImpar++;
    }
}
console.log(`Quantidade de números pares é ${qtdPares}`)
console.log(`Quantidade de números ímpares é ${qtdImpar}`)