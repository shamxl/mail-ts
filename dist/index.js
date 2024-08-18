#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
const logger_1 = require("./logger");
const stage_1_1 = require("./handler/stage-1");
const stage_2_1 = require("./handler/stage-2");
const stage_3_1 = require("./handler/stage-3");
const email_handler_1 = require("./handler/email-handler");
const config_1 = require("./config");
server_1.MailServer.on('m:client', stage_1_1.welcome);
server_1.MailServer.on('d:EHLO', stage_1_1.ehlo);
server_1.MailServer.on('d:MAIL', stage_2_1.mail);
server_1.MailServer.on('d:RCPT', stage_2_1.rcpt);
server_1.MailServer.on('d:DATA', stage_3_1.data);
server_1.MailServer.on('d:QUIT', stage_3_1.quit);
server_1.MailServer.on('m:mail', email_handler_1.email);
server_1.MailServer.listen(config_1.config.port, () => {
    (0, logger_1.banner)(config_1.config.port);
});
