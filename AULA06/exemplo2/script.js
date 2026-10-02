//=========================================
// SELECIONANDO ELEMENTOS DO DOM
//=========================================

// Selecionando por ID
// console.log(document.getElementById("titulo"));
// Para visualização na console.

let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageteste");

// É possível selecionar por classe
let caixas = document.getElementsByClassName("box");

// Mostrar no console.log
console.log(titulo);
console.log(caixas);
console.log(imagem);

// ==================================
// FUNÇÃO PARA ALTERAR O CONTEÚDO
// ==================================

function alterar(){
    titulo.innerHTML = "Jarvis dominou tudo!"
    subtitulo.innerHTML = "Só que não"
    paragrafo.innerText = "O texto do parágrafo foi modificado apartir do JavaScript."

    // Alterando elemento da classe
    caixas[0].innerText = "Primeiro paragrafo alterado"
    caixas[1].innerText = "Segundo paragrafo alterado"

    // Alterando imagem
    imagem.src = "https://lede-admin.dailydot.com/wp-content/uploads/sites/69/2025/02/jarvis_memes_usable.jpg?w=945"
}