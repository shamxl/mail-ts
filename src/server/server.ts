import * as net from 'net'
import { ISocket } from '../types'
export const MailServer: net.Server = net.createServer((socket: ISocket) => {
  MailServer.emit("m:client", socket)
  socket.on("data", (data: Buffer) => {
    let message: string = Buffer.from(data).toString().replace('\r\n', '')
    // check whether the client is sending data or commands
    if (!socket.onStream) {
      let commands: Array<string> = message.split(" ")
      MailServer.emit(`d:${commands[0]}`, socket, commands)
    } else {
      MailServer.emit(`m:mail`, socket, message)
    }
  })  
})
