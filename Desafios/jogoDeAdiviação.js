var entrada = require('readline-sync');
var tentativa;
var contadorTentativas = 0;
var numAleatorio = Math.floor(Math.random() *100)+1;

while (true){ //se o loop for verdadeiro
    tentativa = parseInt(entrada.question('Adivinhe o numero secreto entre 0 e 100: '));
    contadorTentativas ++;
    if (tentativa === numAleatorio){
        console.log(`Você acerto o número secreto ${numAleatorio} em ${contadorTentativas}`); // contadorTentativas para me dizer quantas vezes eu digitei ate adivinhar a resposta
        break; // quebra o loop
    }else if (tentativa > numAleatorio) { // se for falso ele vai pedi pro usuario digitar novamente
        console.log(`O número é menor. Tenta novamente.`);
    }else{
        console.log(`O número é maior. Tenta novamente.`);
    }
}