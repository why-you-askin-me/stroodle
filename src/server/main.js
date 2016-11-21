import { Server } from 'ws'

const server = new Server({ port: 1984 })

const connected = {}

server.on('connection', ws => {
    const id = `${ws.upgradeReq.connection.remoteAddress}:${ws._socket._peername.port}`

    console.log(`${id} has connected.`)

    ws.on('message', msg => {
        console.log(`${id}: ${msg}`)
    })

    // Remove the user from connected when they leave
    ws.on('close', (code, msg) => {
        console.log(`${id} has quit.`)
        delete connected[id]
    })

    connected[id] = ws
})
