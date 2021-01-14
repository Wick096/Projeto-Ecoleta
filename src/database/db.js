//importar a dependencia do sqLite3
const sqlite3 = require("sqlite3").verbose()

//Criar o objeto que irá fazer operações do banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db 
//Utilizar o objeto do banco de dados para operações
/* db.serialize(()=>{
    //com comandos SQL eu vou:

    //1-Criar uma tabela
    db.run(`
    //   CREATE TABLE IF NOT EXISTS places(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT 
        );
    `)


    //2-Inserir dados na tabela
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
    //const values = [
        //"Colectoria",
        //"Guilherme Gemballa, Jadim América",
        //"Número 260°",
      //  "Santa Catarina",
    //    "Rio do Sul",
  //      "Resíduos Eletrônicos , Lâmpadas"
//]

//function afterInsertData(err){
  //  if (err){
    //    return console.log(err)
    //}

    //console.log("Cadastrado com sucesso")
    //console.log(this)
//}

//db.run(query, values, afterInsertData)

    //3-Consultar os dados da tabela
       // db.all(`SELECT * FROM places`,function(err,rows){
         //   if (err){
           //     return console.log(err)
            //}

            //console.log("Aqui estão seus registros")
            //console.log(rows)
        //})

    //4-Deletar algum dado da tabela
    //db.run(`DELETE FROM places WHERE id=?` , [1],function(err){
        //if(err){
          //  return console.log(err)
        //}
        //console.log("Deletado com sucesso")
        
    //})//
//}) */