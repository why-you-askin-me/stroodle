import { Server } from 'ws'
import { AuthAction } from '../client/actions'

const server = new Server({ port: 1984 })

const connected = {}
const users = {}

server.on('connection', ws => {
    const id = `${ws.upgradeReq.connection.remoteAddress}:${ws._socket._peername.port}`

    console.log(`${id} has connected.`)

    ws.on('message', msg => {
        handle(id, JSON.parse(msg))
    })

    // Remove the user from connected when they leave
    ws.on('close', (code, msg) => {
        console.log(`${id} has quit.`)
        delete connected[id]

        if(users[id]) {
            delete users[id]
        }
    })

    connected[id] = ws
})

const handle = (id, msg) => {
    switch(msg.type) {
        case AuthAction.ENTER:
            if(users[msg.user]) {
                connections[id].send({
                    type: AuthAction.ERROR,
                })
            } else {
                users[id] = connections[id]
                connections[id].send({
                    type: AuthAction.SUCCESS,
                })
            }

            break;
    }
}
