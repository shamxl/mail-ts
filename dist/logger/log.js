"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.info = info;
exports.debug = debug;
const chalk_1 = __importDefault(require("chalk"));
const config_1 = require("../config");
const INFO_PREFIX = chalk_1.default.hex("#F99631").bold('I');
//const WARN_PREFIX: string = chalk.bold.yellow('W')
//const ERROR_PREFIX: string = chalk.bold.red('E')
const DEBUG_PREFIX = chalk_1.default.bold.blue('D');
function info(text, ...args) {
    if (!config_1.config.silent) {
        console.log(INFO_PREFIX, chalk_1.default.bold(text), ...args);
    }
}
/*export function warn (...args: any[]): void {
  console.log(WARN_PREFIX, ...args)
}*/
/*export function error (...args: any[]): void {
  console.log(ERROR_PREFIX, ...args)
}*/
function debug(...args) {
    if (config_1.config.verbose) {
        console.log(DEBUG_PREFIX, ...args);
    }
}
