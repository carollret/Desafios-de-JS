// Crie um programa que solicite a idade de 5 usuário, em seguida imprima a média das idades, e menor idade e maior idade; 

var entrada = require("readline-sync");
var nomes =[]
var notas = []
var media = []

for (var i=0; i<5; i++){
        var nomes = entrada.question(`Digite o nome: `)
        var nomes = parseFloat(entrada.question(`Digite a nota: `))
        nomes[i] = nome
        notas[i] = nota
        media = (notas+notas)/5

    }
console.log(`Os usuários são: ${nomes}, As notas ${notas}`)

// termina essa