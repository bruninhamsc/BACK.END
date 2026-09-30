// FUNÇÕES EM JAVASCRIPT

// O que é uma função?
// Uma função é um bloco de có´digo reutilizável, criado para executar uma tarefa específica.

// Analogia SIMPLES!!!!!!
// Você vai colocar valores (parâmetros)
// Ela processa
// Devolve um resultado (return)

//-------------------------------------------------------------
// ESTRUTURA BÀSICA DE UMA FUNÇÃO
//-------------------------------------------------------------

// function nomeDaFuncao(parametro1, parametro2){
    //código que será executado
    // Return resultado;
// }

// FUNÇÕES EM JAVASCRIPT

// function ---> palavras chaves
// nomeDaFuncao ---> nome da função
// parâmetros ---> valores que a função recebe
// return ---> valor que a função devolve

// 5 EXEMPLOS

// 1 - Soma dois números

function somar(a, b){
    return a + b;
}

console.log(somar(2,3));

// 2 - Converter real para Dólar

function realParaDolar(valorReal, cotacao){
    return valorReal / cotacao;
}

console.log(realParaDolar(10, 5.20). toFixed(2));

// 3 -Converter o dolar para o real

function dolarParaReal(valorReal, cotacao){
    return valorReal * cotacao;
}

console.log(dolarParaReal(10, 5.20). toFixed(2));

// 4 - Aumento de salario (Você merece 25% de aumento)

function calcularAumento(salario, porcentagem){
    return salario + (salario * 0.25);
}

console.log(calcularAumento(1200, 25));

// 5 - Verifique se é par ou impar?

function parOuImpar(numero){
    if (numero % 2 === 0){
        return "Seu número é par."
        
    } else {
        return "Seu número é impar."
        
    }
}

console.log(parOuImpar(9));
