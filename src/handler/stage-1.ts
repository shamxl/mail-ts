/*
 * stage 1 takes care of these following commands :-
 *  service ready message / welcoming
 *  ehlo
*/

import {config} from "../config"
import {debug, info} from "../logger"
import { response } from "../responses"
import { ISocket } from "../types"

export const welcome = (socket: ISocket) => {
  debug("Got connection from", socket.remoteAddress)
  const msg: string = response.ready.replace("%S", config.welcomeMessage)
  socket.write(msg)
}

export const ehlo = (socket: ISocket, command: Array<string>) => {
  socket.hostname = command[1]
  info(socket.hostname, "connected")
  debug("Assigning hostname `", socket.hostname, "` to", socket.remoteAddress)
  socket.write(response.hello_msg.replace("%S", config.hostname))
}

