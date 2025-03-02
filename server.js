import Fastify from 'fastify'
import items from './Items.js'
const fastify = Fastify({
    logger: true
})

const PORT = 8080


fastify.get('/items', (request, reply) => {
    reply.send(items)
})

// Run the server!
// Host defaults to listening only on the localhost 127.0.0.1
fastify.listen({port: PORT}, (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})
