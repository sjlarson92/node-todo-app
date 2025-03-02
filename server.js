import Fastify from 'fastify'

const fastify = Fastify({
    logger: true
})

const PORT = 8080

// Run the server!
fastify.listen({port: PORT}, (err, address) => {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})
