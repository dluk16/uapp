import sql from './db.js'

//sql`DROP TABLE IF EXISTS usuario`.then(()=>{ console.log("Tabela Usuario deletada com sucesso") })

sql ` CREATE TABLE usuario (id SERIAL PRIMARY KEY, nome VARCHAR(100) NOT NULL, senha VARCHAR(6) NOT NULL, celular VARCHAR(10) NOT NULL)`.then(()=>{
    console.log("Tabela Usuario criada com sucesso")
})

//const user = ` CREATE TABLE usuario (id SERIAL PRIMARY KEY, nome VARCHAR(100) NOT NULL, senha VARCHAR(6) NOT NULL, celular VARCHAR(10) NOT NULL)`
