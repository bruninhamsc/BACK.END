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