// Edtrutura Condicionais (Tomando decisoes)
// As estruturas condicionais permitem executar diferentes blocos de codigos dependendo de uma condição.

// if/else - Condicionais
// If - \verifica se uma condição é verdadeira e executa o codigo dentro dele, se a condição for falsa, o ELSE pode executar outro bloco de código.

let idade = 12

if (idade >= 18) {
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade");
    
}

// IF, ELSE IF, ELSE (Multiplas condições)
let idade2 = 10;

if (idade2 <12){
    console.log("Você é uma criança");
    
} else if (idade2 < 18) {
    console.log("Você é um adolecente");
    
} else {
    console.log("Você é um adulto");
    
}