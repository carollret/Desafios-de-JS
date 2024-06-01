// Crie um array com 5 nomes. Crie um “for” e imprima na tela a seguinte mensagem: “O nome do usuário é { }”, 
// para cada nome do vetor; 

var entrada = require("readline-sync");
var nomes = []

for (var i=0; i<5; i++){
        var nome = entrada.question(`Informe o nome: `)
        nomes[i] = nome
    }
console.log(`Os usuários são: ${nomes}`)