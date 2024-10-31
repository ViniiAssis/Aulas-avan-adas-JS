document.addEventListener("DOMContentLoaded", () => {
    let respostas = [];

    // Questão 1: Exibir "Olá, Mundo!"
    document.write("Questão 1: Olá, Mundo!<br>");

    // Questão 2: Soma de dois números
    let num1 = parseFloat(prompt("Questão 2: Digite o primeiro número:"));
    let num2 = parseFloat(prompt("Digite o segundo número:"));
    let soma = num1 + num2;
    document.write(`Questão 2: A soma de ${num1} e ${num2} é: ${soma}<br>`);

    // Questão 3: Diferença de dois números
    let diff = num1 - num2;
    document.write(`Questão 3: A diferença entre ${num1} e ${num2} é: ${diff}<br>`);

    // Questão 4: Produto de dois números
    let produto = num1 * num2;
    document.write(`Questão 4: O produto de ${num1} e ${num2} é: ${produto}<br>`);

    // Questão 5: Quociente de dois números
    let quociente = num1 / num2;
    document.write(`Questão 5: O quociente de ${num1} e ${num2} é: ${quociente}<br>`);

    // Questão 6: Resto da divisão
    let resto = num1 % num2;
    document.write(`Questão 6: O resto da divisão de ${num1} por ${num2} é: ${resto}<br>`);

    // Questão 7: Par ou ímpar
    let numero7 = parseInt(prompt("Questão 7: Digite um número para verificar se é par ou ímpar:"));
    let tipo = (numero7 % 2 === 0) ? "par" : "ímpar";
    document.write(`Questão 7: O número ${numero7} é ${tipo}.<br>`);

    // Questão 8: Verificar maior de dois números
    let numero8a = parseFloat(prompt("Questão 8: Digite o primeiro número:"));
    let numero8b = parseFloat(prompt("Digite o segundo número:"));
    let maior8 = (numero8a > numero8b) ? numero8a : numero8b;
    document.write(`Questão 8: O maior número é: ${maior8}<br>`);

    // Questão 9: Calculadora simples
    let operacao = prompt("Questão 9: Qual operação deseja realizar? (+, -, *, /):");
    let resultado;
    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            resultado = "Operação inválida.";
    }
    document.write(`Questão 9: O resultado da operação é: ${resultado}<br>`);

    // Questão 10: Nota média
    let notas = [];
    for (let i = 1; i <= 3; i++) {
        let nota = parseFloat(prompt(`Questão 10: Digite a nota ${i}:`));
        notas.push(nota);
    }
    let media = notas.reduce((a, b) => a + b) / notas.length;
    document.write(`Questão 10: A média das notas é: ${media}<br>`);

    // Questão 11: Média de N números
    let quantidade11 = parseInt(prompt("Questão 11: Digite a quantidade de números para calcular a média:"));
    let soma11 = 0;
    for (let i = 0; i < quantidade11; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
        soma11 += numero;
    }
    let media11 = soma11 / quantidade11;
    document.write(`Questão 11: A média dos ${quantidade11} números é: ${media11}<br>`);

    // Questão 12: Fatorial de um número
    let numFatorial = parseInt(prompt("Questão 12: Digite um número para calcular o fatorial:"));
    let fatorial = 1;
    for (let i = 1; i <= numFatorial; i++) {
        fatorial *= i;
    }
    document.write(`Questão 12: O fatorial de ${numFatorial} é: ${fatorial}<br>`);

    // Questão 13: Sequência de Fibonacci
    let nFibonacci = parseInt(prompt("Questão 13: Quantos termos da sequência de Fibonacci você deseja?"));
    let fibonacci = [0, 1];
    for (let i = 2; i < nFibonacci; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    document.write(`Questão 13: Sequência de Fibonacci: ${fibonacci.join(", ")}<br>`);

    // Questão 14: Verificar se um número é primo
    let numero14 = parseInt(prompt("Questão 14: Digite um número para verificar se é primo:"));
    let ehPrimo = true;
    if (numero14 < 2) {
        ehPrimo = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero14); i++) {
            if (numero14 % i === 0) {
                ehPrimo = false;
                break;
            }
        }
    }
    document.write(`Questão 14: O número ${numero14} ${ehPrimo ? "é primo" : "não é primo"}<br>`);

    // Questão 15: Contagem de números pares e ímpares
    let total15 = parseInt(prompt("Questão 15: Quantos números você deseja digitar?"));
    let pares15 = 0, impares15 = 0;
    for (let i = 0; i < total15; i++) {
        let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
        if (numero % 2 === 0) {
            pares15++;
        } else {
            impares15++;
        }
    }
    document.write(`Questão 15: Números pares: ${pares15}, Números ímpares: ${impares15}<br>`);

    // Questão 16: Contar vogais e consoantes
    let frase = prompt("Questão 16: Digite uma frase:");
    let vogais16 = frase.match(/[aeiou]/gi) ? frase.match(/[aeiou]/gi).length : 0;
    let consoantes16 = frase.match(/[bcdfghjklmnpqrstvwxyz]/gi) ? frase.match(/[bcdfghjklmnpqrstvwxyz]/gi).length : 0;
    document.write(`Questão 16: Vogais: ${vogais16}, Consoantes: ${consoantes16}<br>`);

    // Questão 17: Inverter uma string
    let string17 = prompt("Questão 17: Digite uma string para inverter:");
    let stringInvertida = string17.split("").reverse().join("");
    document.write(`Questão 17: A string invertida é: ${stringInvertida}<br>`);

    // Questão 18: Verificar palíndromo
    let string18 = prompt("Questão 18: Digite uma palavra para verificar se é palíndromo:");
    let ehPalindromo = string18 === stringInvertida;
    document.write(`Questão 18: A palavra "${string18}" ${ehPalindromo ? "é" : "não é"} um palíndromo.<br>`);

    // Questão 19: Tabuada de um número
    let numero19 = parseInt(prompt("Questão 19: Digite um número para a tabuada:"));
    let tabuada19 = "";
    for (let i = 1; i <= 10; i++) {
        tabuada19 += `${numero19} x ${i} = ${numero19 * i}<br>`;
    }
    document.write(`Questão 19: Tabuada do ${numero19}:<br>${tabuada19}<br>`);

    // Questão 20: Cálculo da média ponderada
    let quantidade20 = parseInt(prompt("Questão 20: Quantos números deseja calcular a média ponderada?"));
    let somaPonderada20 = 0;
    let totalPesos20 = 0;
    for (let i = 0; i < quantidade20; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
        let peso = parseFloat(prompt(`Digite o peso para o número ${i + 1}:`));
        somaPonderada20 += numero * peso;
        totalPesos20 += peso;
    }
    let mediaPonderada20 = somaPonderada20 / totalPesos20;
    document.write(`Questão 20: A média ponderada é: ${mediaPonderada20}<br>`);

    // Questão 21: Maior e menor número
    let quantidade21 = parseInt(prompt("Questão 21: Quantos números deseja informar?"));
    let numeros21 = [];
    for (let i = 0; i < quantidade21; i++) {
        numeros21.push(parseFloat(prompt(`Digite o número ${i + 1}:`)));
    }
    let maior21 = Math.max(...numeros21);
    let menor21 = Math.min(...numeros21);
    document.write(`Questão 21: O maior número é: ${maior21}, O menor número é: ${menor21}<br>`);

    // Questão 22: Alunos aprovados e reprovados
    let totalAlunos22 = parseInt(prompt("Questão 22: Digite o total de alunos:"));
    let aprovados22 = 0;
    let reprovados22 = 0;
    for (let i = 0; i < totalAlunos22; i++) {
        let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));
        if (nota >= 7) {
            aprovados22++;
        } else {
            reprovados22++;
        }
    }
    document.write(`Questão 22: Alunos aprovados: ${aprovados22}, Alunos reprovados: ${reprovados22}<br>`);

    // Questão 23: Verificar se um número é primo
    let numero23 = parseInt(prompt("Questão 23: Digite um número para verificar se é primo:"));
    let ehPrimo23 = true;
    if (numero23 < 2) {
        ehPrimo23 = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero23); i++) {
            if (numero23 % i === 0) {
                ehPrimo23 = false;
                break;
            }
        }
    }
    document.write(`Questão 23: O número ${numero23} ${ehPrimo23 ? "é primo" : "não é primo"}<br>`);

    // Questão 24: Números primos informados
    let quantidade24 = parseInt(prompt("Questão 24: Digite a quantidade de números para verificar primos:"));
    let primos24 = [];
    for (let i = 0; i < quantidade24; i++) {
        let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
        let ehPrimo = numero > 1;
        for (let j = 2; j <= Math.sqrt(numero); j++) {
            if (numero % j === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) primos24.push(numero);
    }
    document.write(`Questão 24: Números primos informados: ${primos24.join(", ")}<br>`);

    // Questão 25: Sequência de Fibonacci
    let numElementos25 = parseInt(prompt("Questão 25: Digite o número de termos da sequência de Fibonacci:"));
    let fibonacci25 = [1, 1];
    for (let i = 2; i < numElementos25; i++) {
        fibonacci25.push(fibonacci25[i - 1] + fibonacci25[i - 2]);
    }
    document.write(`Questão 25: Sequência de Fibonacci até ${numElementos25} termos: ${fibonacci25.join(", ")}<br>`);

    // Questão 26: Novo salário após aumento
    let salarioInicial26 = parseFloat(prompt("Questão 26: Digite o salário inicial:"));
    let percentualAumento26 = parseFloat(prompt("Digite o percentual de aumento:"));
    let novoSalario26 = salarioInicial26 + (salarioInicial26 * percentualAumento26 / 100);
    document.write(`Questão 26: Novo salário após aumento de ${percentualAumento26}% é: ${novoSalario26}<br>`);

    // Questão 27: Salário após aumento acumulado
    let salarioInicial27 = parseFloat(prompt("Questão 27: Digite o salário inicial para aumento acumulado:"));
    let anoInicial27 = parseInt(prompt("Digite o ano inicial:"));
    let anoFinal27 = parseInt(prompt("Digite o ano final:"));
    let aumentoAcumulado27 = salarioInicial27;
    for (let ano = anoInicial27; ano <= anoFinal27; ano++) {
        let aumento = 0.05 * aumentoAcumulado27; // 5% de aumento
        aumentoAcumulado27 += aumento;
    }
    document.write(`Questão 27: Salário após os aumentos de ${anoInicial27} a ${anoFinal27} é: ${aumentoAcumulado27}<br>`);

    // Questão 28: Tabela de preços de produtos
    document.write("Questão 28: Tabela de preços de produtos:<br>");
    document.write("1 - R$ 1.99<br>");
    for (let i = 2; i <= 50; i++) {
        document.write(`${i} - R$ ${(i * 1.99).toFixed(2)}<br>`);
    }

    // Questão 29: Média de N números
    let quantidade29 = parseInt(prompt("Questão 29: Quantidade de números para calcular a média:"));
    let soma29 = 0;
    for (let i = 0; i < quantidade29; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
        soma29 += numero;
    }
    let media29 = soma29 / quantidade29;
    document.write(`Questão 29: A média dos ${quantidade29} números é: ${media29}<br>`);

    // Questão 30: Média ponderada
    let quantidade30 = parseInt(prompt("Questão 30: Quantidade de números para calcular a média ponderada:"));
    let somaPonderada30 = 0;
    let totalPesos30 = 0;
    for (let i = 0; i < quantidade30; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
        let peso = parseFloat(prompt(`Digite o peso para o número ${i + 1}:`));
        somaPonderada30 += numero * peso;
        totalPesos30 += peso;
    }
    let mediaPonderada30 = somaPonderada30 / totalPesos30;
    document.write(`Questão 30: A média ponderada é: ${mediaPonderada30}<br>`);

    // Questão 31: Maior e menor número
    let quantidade31 = parseInt(prompt("Questão 31: Quantos números deseja informar?"));
    let numeros31 = [];
    for (let i = 0; i < quantidade31; i++) {
        numeros31.push(parseFloat(prompt(`Digite o número ${i + 1}:`)));
    }
    let maior31 = Math.max(...numeros31);
    let menor31 = Math.min(...numeros31);
    document.write(`Questão 31: O maior número é: ${maior31}, O menor número é: ${menor31}<br>`);

    // Questão 32: Alunos aprovados e reprovados
    let totalAlunos32 = parseInt(prompt("Questão 32: Digite o total de alunos:"));
    let aprovados32 = 0;
    let reprovados32 = 0;
    for (let i = 0; i < totalAlunos32; i++) {
        let nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}:`));
        if (nota >= 7) {
            aprovados32++;
        } else {
            reprovados32++;
        }
    }
    document.write(`Questão 32: Alunos aprovados: ${aprovados32}, Alunos reprovados: ${reprovados32}<br>`);

    // Questão 33: Verificar se um número é primo
    let numero33 = parseInt(prompt("Questão 33: Digite um número para verificar se é primo:"));
    let ehPrimo33 = true;
    if (numero33 < 2) {
        ehPrimo33 = false;
    } else {
        for (let i = 2; i <= Math.sqrt(numero33); i++) {
            if (numero33 % i === 0) {
                ehPrimo33 = false;
                break;
            }
        }
    }
    document.write(`Questão 33: O número ${numero33} ${ehPrimo33 ? "é primo" : "não é primo"}<br>`);

    // Questão 34: Números primos informados
    let quantidade34 = parseInt(prompt("Questão 34: Digite a quantidade de números para verificar primos:"));
    let primos34 = [];
    for (let i = 0; i < quantidade34; i++) {
        let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
        let ehPrimo = numero > 1;
        for (let j = 2; j <= Math.sqrt(numero); j++) {
            if (numero % j === 0) {
                ehPrimo = false;
                break;
            }
        }
        if (ehPrimo) primos34.push(numero);
    }
    document.write(`Questão 34: Números primos informados: ${primos34.join(", ")}<br>`);

    // Questão 35: Sequência de Fibonacci
    let numElementos35 = parseInt(prompt("Questão 35: Digite o número de termos da sequência de Fibonacci:"));
    let fibonacci35 = [1, 1];
    for (let i = 2; i < numElementos35; i++) {
        fibonacci35.push(fibonacci35[i - 1] + fibonacci35[i - 2]);
    }
    document.write(`Questão 35: Sequência de Fibonacci até ${numElementos35} termos: ${fibonacci35.join(", ")}<br>`);

    // Questão 36: Novo salário após aumento
    let salarioInicial36 = parseFloat(prompt("Questão 36: Digite o salário inicial:"));
    let percentualAumento36 = parseFloat(prompt("Digite o percentual de aumento:"));
    let novoSalario36 = salarioInicial36 + (salarioInicial36 * percentualAumento36 / 100);
    document.write(`Questão 36: Novo salário após aumento de ${percentualAumento36}% é: ${novoSalario36}<br>`);

    // Questão 37: Salário após aumento acumulado
    let salarioInicial37 = parseFloat(prompt("Questão 37: Digite o salário inicial para aumento acumulado:"));
    let anoInicial37 = parseInt(prompt("Digite o ano inicial:"));
    let anoFinal37 = parseInt(prompt("Digite o ano final:"));
    let aumentoAcumulado37 = salarioInicial37;
    for (let ano = anoInicial37; ano <= anoFinal37; ano++) {
        let aumento = 0.05 * aumentoAcumulado37; // 5% de aumento
        aumentoAcumulado37 += aumento;
    }
    document.write(`Questão 37: Salário após os aumentos de ${anoInicial37} a ${anoFinal37} é: ${aumentoAcumulado37}<br>`);

    // Questão 38: Tabela de preços de produtos
    document.write("Questão 38: Tabela de preços de produtos:<br>");
    document.write("1 - R$ 1.99<br>");
    for (let i = 2; i <= 50; i++) {
        document.write(`${i} - R$ ${(i * 1.99).toFixed(2)}<br>`);
    }

    // Questão 39: Média de N números
    let quantidade39 = parseInt(prompt("Questão 39: Quantidade de números para calcular a média:"));
    let soma39 = 0;
    for (let i = 0; i < quantidade39; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
        soma39 += numero;
    }
    let media39 = soma39 / quantidade39;
    document.write(`Questão 39: A média dos ${quantidade39} números é: ${media39}<br>`);

    // Questão 40: Média ponderada
    let quantidade40 = parseInt(prompt("Questão 40: Quantidade de números para calcular a média ponderada:"));
    let somaPonderada40 = 0;
    let totalPesos40 = 0;
    for (let i = 0; i < quantidade40; i++) {
        let numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
        let peso = parseFloat(prompt(`Digite o peso para o número ${i + 1}:`));
        somaPonderada40 += numero * peso;
        totalPesos40 += peso;
    }
    let mediaPonderada40 = somaPonderada40 / totalPesos40;
    document.write(`Questão 40: A média ponderada é: ${mediaPonderada40}<br>`);

    // Questão 41: Exibir tabela de multiplicação
    let numero41 = parseInt(prompt("Questão 41: Digite um número para a tabela de multiplicação:"));
    document.write(`Questão 41: Tabela de multiplicação do ${numero41}:<br>`);
    for (let i = 1; i <= 10; i++) {
        document.write(`${numero41} x ${i} = ${numero41 * i}<br>`);
    }

    // Questão 42: Calcular a soma dos dígitos de um número
    let numero42 = prompt("Questão 42: Digite um número para calcular a soma dos dígitos:");
    let somaDigitos42 = 0;
    for (let digito of numero42) {
        somaDigitos42 += parseInt(digito);
    }
    document.write(`Questão 42: A soma dos dígitos de ${numero42} é: ${somaDigitos42}<br>`);

    // Questão 43: Exibir os números de 1 a 100
    document.write("Questão 43: Números de 1 a 100:<br>");
    for (let i = 1; i <= 100; i++) {
        document.write(`${i}<br>`);
    }
});
