// Crie dois arrays, um contendo 5 idade e outro 5 nomes. Crie um para que imprima a mensagem: 
// “O usuário { } tem { } anos”; 

var entrada = require("readline-sync");
var nomes = []
var idades = []

for (var i=0; i<5; i++){
        var nome = entrada.question(`Informe o nome: `)
        var idade = parseInt(entrada.question(`Informe a idade: `))
        nomes[i] = nome
        idades[i] = idade
    }
console.log(`Os usuários são: ${nomes}, tem ${idades} anos`)