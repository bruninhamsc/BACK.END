/*
// ===================================================
// FRONT END - Consome nossa API local
// ===================================================

// Este arquivo roda no navegador.
// Ele faz requisições para nossa API Node.js e mostra os dados na tela.
*/

// ===================================================
// ELEMENTOS DO HTML
// ===================================================
// foto do Cachorro
const dogImage = document.getElementById("dogImage")
// Nome raça
const breedName = document.getElementById("breedName")
// Cachorro aleatório
const randomBtn = document.getElementById("randomBtn")
// Botão que busca cachorro por raça
const searchBtn = document.getElementById("searchBtn")
// campo de texto onde o usuário digita a raça
const breedInput = document.getElementById("breed Input");
// area onde fica a imagem do cachorro
// Usamos querySelector porque é uma classe(.dog-area)
const dogArea = document.querySelector(".dog-area");

// ===================================================
// URL DA API
// ===================================================
const API = "https://localhost:3000/api/cachorros";

// ===================================================
// FUNÇÃO PRINCIPAL
// ===================================================
async function buscaCachorro(url) {
    // adiciona a classe "loading"
    // normalmente usada para mostrar animação de carregamento
    dogArea.classList.add("loading");
    
    try {
        //faz requisição HTTP para a api
        const response = await fetch(url);
        //converte a respostas para JSON
        const data = await response.json ();
        console.log("Resposta da API:", data)
        
        
        //Vamos verificar se a API retornou o erro 
        if (data.status === "erro"){
            //Mostrar a mensagem de erro na tela
            //breedName - elemento HTML
            //.textcontent - propriedade que define o texxto de elemento
            //data - Objeto co os dados recebudos da API
            breedName.textContent = data.message;
            //remove a imagem
            dogImage.src = "";
            //execução da função
            return;   
        }
        //coloca a imagem do cachorro na tela
        // o src define qual imagem sera exibida
        dogImage.src = data.message;
        
        
        //extrai o nome da raça da URL da imagem
        //exemlo da URL:
        // http://localhost:3000/fotos/husky;1.png
        
        //separa a URL em partes usando "/"
        const partes = data. message.split("/")
        
        //pega a posição 5 do array
        // que corresponde ao nome da raça 
        const raca = partes [5]
        
        //coloca a primeira letra maiuscula
        // ex: husky --> Husky
        breedName.textContent =
        //raca.charAt(0) - pega a primeira letra
        //.toUpperCase() - Transforma em maiuscula
        //raca.slice(1) - pega o texto a parti da segunda
        raca.charAt(0).toUpperCase() + raça.slice(1);
        
    } catch (erro) {
        //caso o servidor esteja desligado
        //ou aconteça algum erro na requisição
        
        console.error(erro);
        
        // mostra mensagem na tela
        breedName.textContent =
        "Servidor offline - rode node sever.js"
        
        // remove a imagem
        dogImage.src = "";
    } finally {
        // remove a classe de carregamento
        // independente de erro ou sucesso.
        dogArea.classList.remove("loading")
    }
};
};

// ===================================================
// AÇÕES
// ===================================================
