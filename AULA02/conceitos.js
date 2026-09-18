// INICIO BACKEND - JAVASCRIPT

// VARIAVEIS

// ANTIGO!!!!!!, pode ser redeclarado e mudar o valor.
var idade = 10
var idade = 20 //não gera erro

// MAIS MODERNO, pode mudar o valor, mas não pode ser redeclarado
let nome = "Julia"
nome = "Dafny"; // Permitido
// let nome = "Jose"; // ❌erro

//const é fixo, não pode mudar de valor
const pi = 3.14;
// pi = 40; // ❌erro

//--------------------------------------
// FORMAS DE ESCREVER UM CÓDIGO 
//--------------------------------------

//___________________________________________________
// CAMEL CASE ----- * A mais famosa 
// - Primeira palavra minuscula
// - Palavras seguintes começão com maiuscula

// let nomeCompleto; let idadeUsuario; functionCalcularIdade(){}

//___________________________________________________
// PASCALCASE
// - Todas as palavras começam com letra maiúsculas


// class UsuarioSistema {
//     constructor(nome, idade) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// };
        
        
//___________________________________________________
// SNAKE CASE
// - Palavras separadas por underscore _

// let nome_completo; let total_vendas;