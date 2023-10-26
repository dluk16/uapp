import sql from './db.js'

export class Usuario{
    
    async list(search){
        let users;
        if(search){
            users = await sql `SELECT * FROM usuario WHERE nome ilike ${'%'+search+'%'}`
        }else{
            users = await sql `SELECT * FROM usuario`
        }  
        return users      
    }

    async create(user){
        const {nome, senha, celular } = user
        await sql `INSERT INTO usuario (nome, senha, celular) VALUES (${nome},${senha},${celular})`
    }

    async update(id, user){
        const {nome, senha, celular } = user
        await sql `UPDATE usuario SET nome=${nome}, senha=${senha}, celular=${celular} WHERE id=${id}`
    }

    async delete(id){
        await sql `DELETE * FROM usuario  WHERE id=${id}`
    }
}