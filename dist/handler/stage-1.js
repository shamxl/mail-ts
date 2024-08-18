"use strict";
/*
 * stage 1 takes care of these following commands :-
 *  service ready message / welcoming
 *  ehlo
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.ehlo = exports.welcome = void 0;
const config_1 = require("../config");
const logger_1 = require("../logger");
const responses_1 = require("../responses");
const welcome = (socket) => {
    (0, logger_1.debug)("Got connection from", socket.remoteAddress);
    const msg = responses_1.response.ready.replace("%S", config_1.config.welcomeMessage);
    socket.write(msg);
};
exports.welcome = welcome;
const ehlo = (socket, command) => {
    socket.hostname = command[1];
    (0, logger_1.info)(socket.hostname, "connected");
    (0, logger_1.debug)("Assigning hostname `", socket.hostname, "` to", socket.remoteAddress);
    socket.write(responses_1.response.hello_msg.replace("%S", config_1.config.hostname));
};
exports.ehlo = ehlo;
