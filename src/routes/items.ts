import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import items from "../../Items.js";

// Item schema
const Item = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'}
    }
}

const getHome = {
    schema: {
        response: {
            200: {
                type: 'string'
            }
        }
    },
    handler: async () => {
        return { hello: 'world' }
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

async function routes (fastify: FastifyInstance) {
    fastify.get('/', getHome)

    fastify.get('/items', ItemArrayType, async (request: FastifyRequest, reply: FastifyReply) => {
        reply.send(items)
    })

    fastify.get('/items/:id', ItemType, async (request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) => {
        const {id} = request.params
        const item = items.find(item => item.id === id)
        reply.send(item)
    })
}

export default routes