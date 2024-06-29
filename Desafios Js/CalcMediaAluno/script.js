document.addEventListener('DOMContentLoaded', function() {

    function criarCalculadora() {
        document.body.style.backgroundColor = '#2c3e50';

        var container = document.createElement('div');
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.style.height = '100vh';

        var calculadora = document.createElement('div');
        calculadora.style.backgroundColor = 'white';
        calculadora.style.padding = '20px';
        calculadora.style.borderRadius = '10px';
        calculadora.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.1)';
        calculadora.style.width = '300px';

        var titulo = document.createElement('h3');
        titulo.textContent = 'Calculadora de Média';
        titulo.style.textAlign = 'center';
        titulo.style.fontFamily = 'regular, sans-serif';
        calculadora.appendChild(titulo);

        var inputNome = document.createElement('input');
        inputNome.type = 'text';
        inputNome.placeholder = 'Nome do aluno';
        inputNome.style.width = '89%';
        inputNome.style.padding = '10px';
        inputNome.style.marginBottom = '10px';
        calculadora.appendChild(inputNome);

        for (var i = 0; i < 3; i++) {
            var divNota = document.createElement('div');
            divNota.style.display = 'flex';
            divNota.style.alignItems = 'center';
            divNota.style.marginBottom = '10px';

            var labelNota = document.createElement('label');
            labelNota.textContent = 'Nota ' + (i + 1) + ': ';
            labelNota.style.fontFamily = 'Arial, sans-serif';
            labelNota.style.marginRight = '10px';


            var inputNota = document.createElement('input');
            inputNota.type = 'text';
            inputNota.placeholder = 'Insira a nota ' + (i + 1).toString().toLowerCase();
            inputNota.id = 'nota' + (i + 1);
            inputNota.style.width = '100%';
            inputNota.style.padding = '10px';
            inputNota.style.marginRight = '10px';
            inputNota.style.flex = '1';

            divNota.appendChild(inputNota);
            calculadora.appendChild(divNota);
        }

        // botão para calcular média
        var botaoCalcular = document.createElement('button');
        botaoCalcular.textContent = 'Calcular Média';
        botaoCalcular.style.width = '100%';
        botaoCalcular.style.padding = '10px';
        botaoCalcular.style.backgroundColor = '#007BFF';
        botaoCalcular.style.color = 'white';
        botaoCalcular.style.border = 'none';
        botaoCalcular.style.borderRadius = '5px';
        botaoCalcular.style.fontFamily = 'Arial, sans-serif';
        botaoCalcular.style.cursor = 'pointer';
        botaoCalcular.onclick = function() {
            calcularMedia(inputNome.value);
        };
        calculadora.appendChild(botaoCalcular);

        var resultado = document.createElement('h3');
        resultado.id = 'resultado';
        resultado.style.textAlign = 'center';
        resultado.style.fontFamily = 'recular, sans-serif';
        resultado.style.marginTop = '20px';

        calculadora.appendChild(resultado);
        container.appendChild(calculadora);
        document.body.appendChild(container);
    }

    function calcularMedia(nomeAluno) {
        var somaNotas = 0;
        var qtdNotas = 0;

        for (var i = 1; i <= 3; i++) {
            var nota = parseFloat(document.getElementById('nota' + i).value);
            if (!isNaN(nota)) {
                somaNotas += nota;
                qtdNotas++;
            }
        }

        if (qtdNotas === 0) {
            document.getElementById('resultado').innerText = 'Insira pelo menos uma nota válida.';
            return;
        }

        var media = somaNotas/qtdNotas;
        var resultado = '';

        if (media < 5) {
            resultado = 'Reprovado';
        } else if (media >= 5 && media < 7) {
            resultado = 'Recuperação';
        } else {
            resultado = 'Aprovado';
        }

        document.getElementById('resultado').innerText = 'Aluno: ' + nomeAluno + '\nMédia: ' + media.toFixed(2) + ' - Situação: ' + resultado;
    }

    criarCalculadora();
});
