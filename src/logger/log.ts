import chalk from 'chalk'
import {config} from '../config'

const INFO_PREFIX: string = chalk.hex("#F99631").bold('I')
//const WARN_PREFIX: string = chalk.bold.yellow('W')
//const ERROR_PREFIX: string = chalk.bold.red('E')
const DEBUG_PREFIX: string = chalk.bold.blue('D')

export function info (text: any, ...args: any[]): void {
  if (!config.silent) {
    console.log(INFO_PREFIX, chalk.bold(text), ...args)
  }
}

/*export function warn (...args: any[]): void {
  console.log(WARN_PREFIX, ...args)
}*/

/*export function error (...args: any[]): void {
  console.log(ERROR_PREFIX, ...args)
}*/

export function debug (...args: any[]): void {
  if (config.verbose) {
    console.log(DEBUG_PREFIX, ...args)
  }
}
