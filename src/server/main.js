import { Server } from 'ws'
import { AuthAction, TextAction } from '../client/actions'

const server = new Server({ port: 1984 })

const connections = {}
const users = {}
const messages = {}

server.on('connection', ws => {
    const id = `${ws.upgradeReq.connection.remoteAddress}:${ws._socket._peername.port}`

    console.log(`${id} has connected.`)

    ws.on('message', msg => {
        console.log(msg)
        handle(id, JSON.parse(msg))
    })

    // Remove the user from connected when they leave
    ws.on('close', (code, msg) => {
        console.log(`${id} has quit.`)
        delete connections[id]
        delete messages[id]

        if(users[id]) {
            delete users[id]
        }
    })

    connections[id] = ws
    messages[id] = ''
})

const send = (id, obj) => {
    if(connections[id]) {
        connections[id].send(JSON.stringify(obj))
    }
}

const broadcast = msg => {
    for(let id in connections) {
        connections[id].send(JSON.stringify(msg))
    }
}

const handle = (id, msg) => {
    const user = users[id]
    switch(msg.type) {
        case AuthAction.SUBMIT:
            for(let user in users) {
                if(users[user] == msg.user) {
                    connections[id].send({
                        type: AuthAction.ERROR,
                    })
                    break;
                }
            }

            users[id] = msg.user
            send(id, {
                type: AuthAction.SUCCESS,
                user: msg.user,
            })

            break;

        case TextAction.UPDATE:
            if(user) {
                console.log(user)
                messages[id] = msg.text
                broadcast({
                    type: TextAction.UPDATE,
                    text: msg.text,
                    user,
                })
            }

            break;

        case TextAction.SUBMIT:
            const message = messages[id]

            if(user) {
                broadcast({
                    type: TextAction.CHAT,
                    text: message,
                    user
                })
            }

            messages[id] = ''

            break;
    }
}
