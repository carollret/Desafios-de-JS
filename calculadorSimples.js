var entrada = require('readline-sync');

while (true) {
    var operacao = parseInt(entrada.question(`\nEscolha uma operação:
1. Adição
2. Subtração
3. Multiplicação
4. Divisão
5. Potenciação
6. Radiciação
7. Sair
Digite o número da operação desejada: `));

    if (operacao === 7) {
        console.log('Até logo!');
        break;
    }

    var num1 = parseFloat(entrada.question('Digite o primeiro número: '));
    var num2 = parseFloat(entrada.question('Digite o segundo número: '));
    var resultado;

    switch (operacao) {
        case 1:
            resultado = num1 + num2;
            console.log(`Resultado é ${resultado}`);
            break;
        case 2:
            resultado = num1 - num2;
            console.log(`Resultado é ${resultado}`);
            break;
        case 3:
            resultado = num1 * num2;
            console.log(`Resultado é ${resultado}`);
            break;
        case 4:
            if (num2 != 0) {
                resultado = num1 / num2;
                console.log(`Resultado é ${resultado}`);
            } else {
                console.log('Erro na divisão por zero');
            }
            break;
        case 5:
            resultado = Math.pow(num1, num2);
            console.log(`Resultado é ${resultado}`);
            break;
        case 6:
            resultado = Math.sqrt(num1);
            console.log(`Resultado é ${resultado}`);
            break;
    }
}