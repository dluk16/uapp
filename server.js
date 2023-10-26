import {fastify} from 'fastify'
import {Usuario} from './usuario.js'

const server = fastify();
const userdb = new Usuario()


server.get('/',()=>{   
    return "SErver funcionando"
})

server.get('/usuario', async(request)=>{
    const search = request.query.search
    const users = await userdb.list(search)
    return users
})

server.post('/usuario', async(request, reply)=>{
    const {nome,senha, celular} = request.body
    await userdb.create({nome,senha, celular})
    return reply.status(201).send()
})

server.put('/usuario/:id', async(request, reply)=>{
    const id = request.params.id
    const {nome,senha, celular} = request.body
    await userdb.update(id,{nome,senha, celular})
    return reply.status(204).send()
})


server.delete('/usuario/:id', async(request, reply)=>{
    const id = request.params.id
    await userdb.delete(id)
    return reply.status(204).send()
})

server.listen({
    port: process.env.PORT ?? 3333
})