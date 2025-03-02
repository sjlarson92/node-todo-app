import items from "../../Items.js";

async function routes (fastify, options) {
    fastify.get('/', async () => {
        return { hello: 'world' }
    })

    fastify.get('/items', (request, reply) => {
        reply.send(items)
    })

    fastify.get('/items/:id', (request, reply) => {
        const {id} = request.params
        const item = items.find(item => item.id === id)
        reply.send(item)
    })
}

export default routes