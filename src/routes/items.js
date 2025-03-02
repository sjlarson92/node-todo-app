import items from "../../Items.js";

// Item schema
const Item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'}
    }
}

const ItemType = {
    schema: {
        response: {
            200: {
                Item
            }
        }
    }
}
const ItemArrayType = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item
            }
        }
    }
}
async function routes (fastify, options) {
    fastify.get('/', async () => {
        return { hello: 'world' }
    })

    fastify.get('/items', ItemArrayType, (request, reply) => {
        reply.send(items)
    })

    fastify.get('/items/:id', ItemType, (request, reply) => {
        const {id} = request.params
        const item = items.find(item => item.id === id)
        reply.send(item)
    })
}

export default routes