import fastify from 'fastify'
import routes from './src/routes/items.js'

const server = fastify()

server.register(routes)

server.get('/ping', async (_, _) => {
    return 'pong\n'
})

// Run the server!
// Host defaults to listening only on the localhost 127.0.0.1
server.listen({port: 8080}, (err, address) => {
    if (err) {
        server.log.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})
