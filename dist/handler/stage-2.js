"use strict";
/*
 * stage 2 takes care of these following commands :-
 *  rcpt
 *  mail
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.rcpt = exports.mail = void 0;
const config_1 = require("../config");
const logger_1 = require("../logger");
const responses_1 = require("../responses");
let users = config_1.config.users;
const mail = (socket, command) => {
    var _a, _b;
    if (!socket.hostname) {
        (0, logger_1.debug)("Rejecting mail from", socket.hostname, "due to bad command sequence");
        socket.write(responses_1.response.bad_sequence);
        return;
    }
    if (command.length < 2) {
        (0, logger_1.debug)("Rejecting mail from", socket.hostname, "due to insufficient arguments");
        socket.write(responses_1.response.command_notrec_error);
        return;
    }
    let email = (_b = (_a = command[1]) === null || _a === void 0 ? void 0 : _a.split("FROM:<")[1]) === null || _b === void 0 ? void 0 : _b.replace('>', '');
    if (!email) {
        socket.write(responses_1.response.syntax_error);
        return;
    }
    let [user, domain] = email.split('@');
    if (!user || !domain) {
        socket.write(responses_1.response.syntax_error);
        return;
    }
    socket.from = email;
    socket.write(responses_1.response.completed);
};
exports.mail = mail;
const rcpt = (socket, command) => {
    var _a, _b, _c;
    if (!socket.from) {
        (0, logger_1.debug)("Rejecting mail from", socket.hostname, "due to bad command sequence");
        socket.write(responses_1.response.bad_sequence);
        return;
    }
    if (command.length < 2) {
        (0, logger_1.debug)("Rejecting mail from", socket.hostname, "due to insufficient arguments");
        socket.write(responses_1.response.command_notrec_error);
        return;
    }
    let email = (_b = (_a = command[1]) === null || _a === void 0 ? void 0 : _a.split("TO:<")[1]) === null || _b === void 0 ? void 0 : _b.replace('>', '');
    (0, logger_1.debug)("Parsed email", email);
    if (!email) {
        (0, logger_1.debug)("Rejecting mail from", socket.hostname, "due to syntax error");
        socket.write(responses_1.response.syntax_error);
        return;
    }
    let [user, domain] = email.split('@');
    (0, logger_1.debug)("Parsed user and domain", user, domain);
    if (!user || !domain) {
        (0, logger_1.debug)("Rejecting mail from", socket.hostname, "due to syntax error in from email");
        socket.write(responses_1.response.syntax_error);
        return;
    }
    if (!users.includes(user)) {
        (0, logger_1.debug)("Rejecting mail from", socket.hostname, "due to invalid user");
        socket.write(responses_1.response.user_notfound_error);
        return;
    }
    if (socket.to) {
        (0, logger_1.debug)("assigning", user, "to", socket.hostname);
        (_c = socket.to) === null || _c === void 0 ? void 0 : _c.push(user);
    }
    else {
        (0, logger_1.debug)("assigning empty array and adding user to", socket.hostname);
        socket.to = [];
        socket.to.push(user);
    }
    socket.write(responses_1.response.completed);
};
exports.rcpt = rcpt;
