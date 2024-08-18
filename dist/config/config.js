"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
exports.config = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    .options({
    port: {
        alias: 'p',
        type: 'number',
        description: "Set port for smtp server, default 2525",
        default: 2525,
        demandOption: false
    },
    hostname: {
        alias: 'h',
        type: 'string',
        default: "localhost",
        description: "Set hostname for smtp server, default localhost",
        demandOption: false
    },
    users: {
        alias: 'u',
        type: 'array',
        description: "Set users for smtp server eg: mail-ts -u admin guest",
        default: ["admin", "guest"],
        demandOption: false
    },
    verbose: {
        alias: 'v',
        type: 'boolean',
        description: "Set debug mode, default to false",
        default: false,
        demandOption: false
    },
    welcomeMessage: {
        alias: 'm',
        type: 'string',
        description: "Set welcome message, default to `Mail Ts ready.`",
        default: "Mail Ts ready.",
        demandOption: false
    },
    silent: {
        alias: 's',
        type: 'boolean',
        description: "Disable all loggings except emails, default to false",
        default: false,
        demandOption: false
    }
})
    .strict()
    .parseSync();
