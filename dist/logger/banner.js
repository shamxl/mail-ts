"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.banner = banner;
const chalk_1 = __importDefault(require("chalk"));
const log_1 = require("./log");
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function banner(port) {
    return __awaiter(this, void 0, void 0, function* () {
        let ts_logo1 = chalk_1.default.bgHex("#F99631").bold("     ");
        let ts_logo2 = chalk_1.default.bgHex("#F99631").bold("   M ");
        let name = "Mail ";
        console.log(" ");
        console.log(" ".repeat(name.length), ts_logo1);
        process.stdout.write(`\r${" ".repeat(name.length + 1)}${ts_logo2}`);
        yield sleep(500);
        for (let i = 0; i < name.length; i++) {
            process.stdout.write('\r');
            process.stdout.write(" ".repeat(name.length - i));
            process.stdout.write(chalk_1.default.hex("#FFD5A3").bold(name.slice(0, i)));
            process.stdout.write(" ");
            process.stdout.write(ts_logo2);
            yield sleep(50);
        }
        yield sleep(500);
        console.log('\n');
        (0, log_1.info)("Listening on port", chalk_1.default.hex("#F99631").bold(port));
    });
}
