const entrada = require('readline-sync');

// Escolhendo um número aleatório entre 1 e 100
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Variável para armazenar a tentativa atual do jogador
var tentativa;

// Variável para armazenar o número de tentativas
var contadorTentativas = 0;

// Loop para permitir que o jogador faça várias tentativas
while (true) {
    // Solicita ao jogador que insira um número
    tentativa = parseInt(entrada.question("Tente adivinhar o número (entre 1 e 100):"));

    // Incrementa o contador de tentativas
    contadorTentativas++;

    // Verifica se o jogador acertou
    if (tentativa === numeroAleatorio) {
        console.log("Parabéns! Você acertou o número " + numeroAleatorio + " em " + contadorTentativas + " tentativas.");
        break; // Sai do loop
    } else if (tentativa > numeroAleatorio) {
        console.log("O número é menor. Tente novamente.");
    } else {
        console.log("O número é maior. Tente novamente.");
    }
}
