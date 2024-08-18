"use strict";
// prints out the processed email
//
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.email = email;
const chalk_1 = __importDefault(require("chalk"));
const logger_1 = require("../logger");
const responses_1 = require("../responses");
const table_1 = require("table");
function email(socket, mail) {
    (0, logger_1.debug)(socket.to);
    printMail(socket.from, socket.to, mail);
    if (mail == "." || mail.endsWith("\r\n.\r\n")) {
        (0, logger_1.info)("closing connection with", socket.hostname, socket.remoteAddress);
        (0, logger_1.debug)("Resetting socket");
        socket.from = undefined;
        (0, logger_1.debug)("Set from address to", socket.from);
        socket.to = undefined;
        (0, logger_1.debug)("Set rcpt address to", socket.to);
        socket.onStream = undefined;
        (0, logger_1.debug)("Set stream status to", socket.onStream);
        socket.write(responses_1.response.completed);
    }
}
function printMail(from, to, message) {
    let config = {
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
    };
    let data = [
        [chalk_1.default.hex("#FFD5A3").bold("FROM"), chalk_1.default.hex("#FFD5A3").bold("TO"), chalk_1.default.hex("#F99631").visible("MAIL")],
        [chalk_1.default.hex("#FFD5A3").visible(from), chalk_1.default.hex("#FFD5A3").visible(to), chalk_1.default.hex("#F99631").bold(message.replace("\r\n.\r\n", ""))]
    ];
    console.log((0, table_1.table)(data, config));
}
