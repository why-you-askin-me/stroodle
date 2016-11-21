import { Server } from 'ws'

const server = new Server({ port: 1984 })

server.on('connection', ws => {
    console.log('connection!')
    ws.on('message', msg => {
        console.log('Got message: ' + msg)
    })

    ws.send(JSON.stringify({
        type: 'LOG_JOIN',
        user: 'user123',
    }))
})
