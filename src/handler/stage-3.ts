/*
 * stage 3 takes care of these following commands :-
 *  data
 *  end / <CRLF>.<CRLF>
 *  quit
*/

import {debug, info} from "../logger"
import { response } from "../responses"
import { ISocket } from "../types"

export const data = (socket: ISocket, _command: Array<string>) => {
  if (!socket.to) {
    debug("Rejecting mail due to bad command sequence")
    socket.write(response.bad_sequence)
    return
  }

  debug("Starting mail input for", socket.hostname)
  socket.onStream = true
  socket.write(response.start_mailinput)
}

export const quit = (socket: ISocket, _command: Array<string>) => {
  info("Connection closed with", socket.hostname)
  debug("Exit message recieved from", socket.hostname, socket.remoteAddress)
  socket.write(response.closing)
}
