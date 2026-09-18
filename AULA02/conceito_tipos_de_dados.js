// Tipos dee dados
// No javascript, tudo o que armazenamos em variáveis tem um tipo. Esses tipos definem o que podemos fazer com os valores.

//Principais tipos de dados:
// String (textos)
// Number (números)
// Boolean (verdadeiro ou falso)
// Object (objetos, que agrupam informações)
// Array (lista de valores)
// Null (valor vazio)
// Undefined (quando algo não foi definido)

// STRING (Textos)
// Uma string é um texto sempre escrito entre aspas ("" ou '')
let nome = "Jarvis";
let mensagem = 'Olá Mundo!';

//console.log(nome);
//console.log(mensagem);

let saudação = "Olá, " + nome + "!";
//console.log(saudação); // Exibe "Olá, Jarvis"

// Typeof
// O typeof serve para descobrir o tipo de um valor ou variável

let nomeDois = "Bruna";
console.log(typeof nomeDois);

let soma = 10 + 5;
console.log(soma);

// Boolean (Verdadeiro ou Falso)
// Um boolean pode ter apenas dois valores: true (verdadeiro) ou false (falso)

let maiorDeIdade = true;
let menorDeIdade = false;

console.log(maiorDeIdade); // Exibe true
console.log(menorDeIdade); // Exibe false

let idade = 20
let podeDirigir = idade >= 18;
console.log(podeDirigir);