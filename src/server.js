const express = require("express")
const server = express()

//Pegar o banco de dados
const db = require("./database/db.js")

//Configurar pasta pública
server.use(express.static("public"))

//Habilitar o uso do req.body na aplicação
server.use(express.urlencoded({ extended: true }))

//Utilizano o template Engine pelo Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Configurar o caminho da aplicação
//Página Inicial
//Req = Requisição
//Res = Resposta
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/create-point", (req, res) => {
    //red.query: Query Strings da Url
    // console.log(req.query)

    return res.render("create-point.html", )
})

server.post("/savepoint", (req, res) => {

    //req.body: O corpo do formulário
    //console.log(req.body)

    //Inserir dados no banco de dados
    const query = `
    INSERT INTO places (
        name ,
        address,
        address2,
        state,
        city,
        items
    ) VALUES (?,?,?,?,?,?);
`
    const values = [
        req.body.name ,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
        
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err)
            return res.send("Erro no cadastro")
        }

        console.log("Cadastrado com sucesso")
        console.log(this) 

        
        return res.render("create-point.html",{saved: true})
    }

    db.run(query, values, afterInsertData)

 

})

server.get("/search", (req, res) => {

    const search = req.query.search
    
    if(search==""){
        //pesquisa vazia
        return res.render("search-results.html",{total:0})
    }

    //Pegar os dados do Banco de Dados
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err)
        }
        const total = rows.length
        //Mostarr a página html com os dados do banco de dados
        return res.render("search-results.html", { places: rows, total })

    })



})



//Ligar o servidor
server.listen(3000)