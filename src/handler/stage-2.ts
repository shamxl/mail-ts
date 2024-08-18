/* 
 * stage 2 takes care of these following commands :-
 *  rcpt
 *  mail
*/

import {config} from "../config";
import {debug} from "../logger";
import {response} from "../responses";
import {ISocket} from "../types";

let users: Array<string> = config.users

export const mail = (socket: ISocket, command: Array<string>) => {
  if (!socket.hostname) {
    debug("Rejecting mail from", socket.hostname, "due to bad command sequence")
    socket.write(response.bad_sequence)
    return
  }
  if (command.length < 2) {
    debug("Rejecting mail from", socket.hostname, "due to insufficient arguments")
    socket.write(response.command_notrec_error)
    return 
  }

  let email: string | undefined = command[1]?.split("FROM:<")[1]?.replace('>', '')
  if (!email) {
    socket.write(response.syntax_error)
    return
  }

  let [ user, domain ] = email.split('@')
  if (!user || !domain) {
    socket.write(response.syntax_error)
    return
  }
  
  socket.from = email
  socket.write(response.completed)
}

export const rcpt = (socket: ISocket, command: Array<string>) => {
  if (!socket.from) {
    debug("Rejecting mail from", socket.hostname, "due to bad command sequence")
    socket.write(response.bad_sequence)
    return
  }

  if (command.length < 2) {
    debug("Rejecting mail from", socket.hostname, "due to insufficient arguments")
    socket.write(response.command_notrec_error)
    return 
  }

  let email: string | undefined = command[1]?.split("TO:<")[1]?.replace('>', '')
  debug("Parsed email", email)  
  if (!email) {
    debug("Rejecting mail from", socket.hostname, "due to syntax error")
    socket.write(response.syntax_error)
    return
  }

  let [ user, domain ] = email.split('@')
  debug("Parsed user and domain", user, domain)
  if (!user || !domain) {
    debug("Rejecting mail from", socket.hostname, "due to syntax error in from email")
    socket.write(response.syntax_error)
    return
  }

  if (!users.includes(user)) {
    debug("Rejecting mail from", socket.hostname, "due to invalid user")
    socket.write(response.user_notfound_error)
    return
  }

  if (socket.to) {
    debug("assigning", user, "to", socket.hostname)
    socket.to?.push(user)
  } else {
    debug("assigning empty array and adding user to", socket.hostname)
    socket.to = []
    socket.to.push(user)
  }

  socket.write(response.completed)

}
