import Fastify from 'fastify'
import routes from "./src/routes/items.js";

const fastify = Fastify({
    logger: true
})

fastify.register(routes)

const PORT = 8080

// Run the server!
// Host defaults to listening only on the localhost 127.0.0.1
fastify.listen({port: PORT}, (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})
