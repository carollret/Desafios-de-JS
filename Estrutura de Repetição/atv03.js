//Faça um programa que solicita 10 números do usuário e em seguida exiba a mensagem “O número {x} é ímpar/par” de acordo com o valor que foi digitado.

var entrada = require('readline-sync');
for (i=0; i<=10; i++);{
    var num = parseInt(entrada.question("Digite um número: "));
    if(num % 2 !== 0){
        console.log('Número ímpar ');
    } else{
        console.log('Número par ');
    }
}