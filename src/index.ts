#!/usr/bin/env node
import { MailServer } from "./server";
import { banner } from './logger'
import {
  welcome,
  ehlo
} from './handler/stage-1'

import {
  mail,
  rcpt
} from './handler/stage-2'

import {
  data,
  quit
} from './handler/stage-3'

import {
  email
} from './handler/email-handler'

import { config } from './config'

MailServer.on('m:client', welcome)
MailServer.on('d:EHLO', ehlo)
MailServer.on('d:MAIL', mail)
MailServer.on('d:RCPT', rcpt)
MailServer.on('d:DATA', data)
MailServer.on('d:QUIT', quit)

MailServer.on('m:mail', email)

MailServer.listen(config.port, () => {
  banner(config.port)
})
