"use strict";
/*
 * stage 3 takes care of these following commands :-
 *  data
 *  end / <CRLF>.<CRLF>
 *  quit
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.quit = exports.data = void 0;
const logger_1 = require("../logger");
const responses_1 = require("../responses");
const data = (socket, _command) => {
    if (!socket.to) {
        (0, logger_1.debug)("Rejecting mail due to bad command sequence");
        socket.write(responses_1.response.bad_sequence);
        return;
    }
    (0, logger_1.debug)("Starting mail input for", socket.hostname);
    socket.onStream = true;
    socket.write(responses_1.response.start_mailinput);
};
exports.data = data;
const quit = (socket, _command) => {
    (0, logger_1.info)("Connection closed with", socket.hostname);
    (0, logger_1.debug)("Exit message recieved from", socket.hostname, socket.remoteAddress);
    socket.write(responses_1.response.closing);
};
exports.quit = quit;
