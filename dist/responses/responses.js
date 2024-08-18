"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.response = void 0;
exports.response = {
    ready: "220 %S\r\n",
    completed: "250 OK\r\n",
    closing: "221 GoodBye.\r\n",
    syntax_error: "501 Syntax error in parameters or arguments\r\n",
    hello_msg: "250 %S\r\n",
    command_notrec_error: "500 command not recognized\r\n",
    user_notfound_error: "550 No such user here\r\n",
    start_mailinput: "354 Start mail input, end with <CRLF>.<CRLF>\r\n",
    bad_sequence: "503 Bad sequence of commands\r\n"
};
