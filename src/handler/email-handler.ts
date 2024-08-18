// prints out the processed email
//

import chalk from 'chalk'
import { info, debug } from '../logger'
import {response} from '../responses'
import { ISocket } from '../types'
import {config} from '../config'
import { table, TableUserConfig } from 'table'


export function email (socket: ISocket, mail: string): void {
  debug(socket.to)
  printMail(socket.from as string, socket.to as Array<string>, mail)
  if (mail == "." || mail.endsWith("\r\n.\r\n")) {
    info("closing connection with", socket.hostname, socket.remoteAddress)
    debug("Resetting socket")
    socket.from = undefined
    debug("Set from address to", socket.from)
    socket.to = undefined
    debug("Set rcpt address to", socket.to)
    socket.onStream = undefined
    debug("Set stream status to", socket.onStream)
    socket.write(response.completed)
    
  } 
}

function printMail (from: string, to: Array<string>, message: string): void {
  let config: TableUserConfig = {
    columns: [
      {
        wrapWord: true
      },
      {
        wrapWord: true
      },
      {
        wrapWord: true,
        width: 40
      }
    ]
  }

  let data = [
    [chalk.hex("#FFD5A3").bold("FROM"), chalk.hex("#FFD5A3").bold("TO"), chalk.hex("#F99631").visible("MAIL")],
    [chalk.hex("#FFD5A3").visible(from), chalk.hex("#FFD5A3").visible(to), chalk.hex("#F99631").bold(message.replace("\r\n.\r\n", ""))]
  ]

  console.log(table(data, config))
}
