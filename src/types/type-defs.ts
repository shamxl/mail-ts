import {Socket} from "net"

export interface ISocket extends Socket {
  onStream?: boolean, // is this socket currently sending data ?
  initiated?: boolean,
  to?: Array<string>,
  from?: string,
  hostname?: string,
  data?: Array<string>,
  alive?: boolean,
  history?: Array<string>
}

export interface IConfig {
  users: Array<string>,
  welcomeMessage: string,
  port: number,
  verbose: boolean,
  hostname: string,
  silent: boolean
}
