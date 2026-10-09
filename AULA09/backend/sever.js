// =======================================================
// NOSSA API DE CACHORROS
// 
// Agora as fotos NÃO são mais baixadas automaticamente!.
// Elas DEVEM existir manualmente na pasta
// data/fotos
// =======================================================

// ============================================
// ROTAS:
// ============================================
// GET /api/cachorros/aleatorio
// GET /api/cachorros/:raca

// Importar framework  Express para criar o servidor
const express = require("express");
// Importar o CORS para permitir requisições de outros dominios (ex: frontend)
const cors = require("cors");
// Importa módulo de arquivos do NODE
const fs = require("fs");
// Importa utilidades para trabalhar com caminhos de arquivos
const path = require("path");
// Importa o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json");
const { match } = require("assert");
// Cria a aplicação Express
const app = express();
// Definir a porta onde o servidor vai funcionar
const PORT = 3000;
// Abilitar o uso do CORS na aplicação
app.use(cors());

// ============================================
// SERVIR ARQUIVOS ESTÁTICOS
// ============================================

// Nós falamos para o express
// "Tudo o que estiver na pasta data/fotos pode ser acessado pila url /fotos"
// Exemplo:
// https://localhost:3000/fotos/husk/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") //caminho real da pasta do servidor
    )
)

// ============================================
// FUNÇÃO AUXILIAR
// ============================================

// função que recebe um array e retorna um item aleatíorio dele
function sortear(array) {
    // gere um número aleatório entre 0 e o tamanho do array
    // array.length - conta quantos itens existem na lista
    // math.random() - Sorteia um número decimal entre 0 e 1
    // math.random() * array.length - Multiplica o número sorteado pela quantidade de itens
    // math.floor() - tira a parte decimal, arredondando para baixo.
    const i = match.floor(match.random() * array.length)
    // const i - Guarda a posição na váriavel i
    // retorna o item sorteado
    return array[i];
}

// ============================================
// ROTAS DA API
// ============================================

// ROTA 1 - Cachorro aleatório

app.get("/api/cachorros/aleatorio", (req, res) => {
    // req = request(requisição) = é o pedido que chega ao servidor, por exemplo, o navegador pede uma foto de cachorro
    // res = response(resposta) = é o que o servidor envia devolta , por exemplo, o endereço da foto do cachorro

    // pegar todas as fotos de todas as raças
    // object.values pega os valores do objeto
    // flat transforma tudo em um único array
    const todasAsFotos = Object.values(cachorros).flat();
})

// Sorteia uma foto aleatória
const item = sortear(todasAsFotos)

//  Responder para o clienteem formato JSON
res.json({
    // status da resposta
    status: "success",
    // URL da imagem
    message: `https://localhost:${PORT}/fotos/${item}`
});

// ROTA 2 - Cachorro por raça
// Exemplo de acesso:
// https://localhost:3000/cachorros/husky

app.get("/api/cachorros/:raca", (req, res) => {

    // pega o parametro da URL (ex:husky)
    const raca = req.params.raca.toLocaleLowerCase();
    // params = contém os parametros definidos na URL da rota
    // .raca = acessa o parametro chamado raca.
    // .toLowerCase() = Transformar todas as letras em minúsculas
    if (!cachorros[raca]) {
        // cachorros[raca]: vai procurara a raça dentro do objeti "cachorros"
        // !: significa não: Nesse caso, verifica se a raça não existe ou se seu valor é falso.
            //  caso não existir, retorna erro 404
            res,status(404).json({
                status: "error",
                message: `Raça "${raca}" não encontrada`
            });

            // Encerra a execução da rota
            return;
    }

    // Sorteia uma foto da raca solicitada
    const item = sortear(cachorros[raca]);

    // retorna a resposta em JSON
    res.json({
        status: "success",
        message: `https://localhost:${PORT}/fotos/${item}`
    });
});