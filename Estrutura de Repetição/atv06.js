// Vamos criar um jogo de adivinha. Primeiramente crie uma variável com um número secreto. Em seguida faça um looping que solicite um número ao usuário. Verifique se o usuário acertou. Caso tenha acertado, mostre a mensagem “você acertou! O número secreto é {...}”. O programa somente para de solicitar os números quando o número secreto é acertado.

var entrada = require('readline-sync');
var numSecreto = 1;
var palpite = 0;

while (true){ //se o loop for verdadeiro
    palpite = parseInt(entrada.question('Adivinhe o numero secreto: '));
    if (palpite === numSecreto){
        console.log(`Você acerto o número secreto ${numSecreto}`);
        break; // quebra o loop
    }else{ // se for falso ele vai pedi pro usuario digitar novamente
        console.log(`Você erro, tenta novamente.`);
    }
}