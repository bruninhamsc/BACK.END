// JSON significa JavaScript Object Notation e é um formato de representação e troca de dados.

JSON É COMO FICHA DE CADASTRO.

FICHA FÍSICA:           JSON:     
Nome: João              "nome": "João "
Idade: 25               "idade": 25
Cidade: SP              "cidade": "SP"

É um formato para ORGANIZAR DADOS que TODO MUNDO entende (qualquer linguagem)

<!-- ======================================================= -->

{
    "cachorro": {
        "nome": "Kiko",
        "idade": 5,
        "raca": "Yorkshire",
        "vacinado": true,
        "peso": 5.0,
        "brinquedos": ["osso", "bola"],
        "dono": {
            "nome": "Bruna",
            "tek=lefone": "11908634672"
        }

    }
}
<!-- ======================================================= -->
    EXPLICAÇÃO
<!-- ======================================================= -->
// SRING (Texto) - Sempre com aspas
"nome": "Kiko"

// NUMBER (Número) - Sem aspas
"idade": 5,
"peso": 5.0,

// BOOLEAN (True/False) 
"vacinado": true,

// ARRAY (Lista) - Com colchetes
"brinquedos": ["osso", "bola"]

// OBJECT (Objeto) - Com Chaves
"dono": {
            "nome": "Bruna",
            "tek=lefone": "11908634672"
        }

// NULL (Vazio)
"datafalecimento": null