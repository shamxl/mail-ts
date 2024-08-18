import chalk from  'chalk'
import {info} from './log'

function sleep (ms: number): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function banner (port: number) {
  let ts_logo1: string = chalk.bgHex("#F99631").bold("     ")
  let ts_logo2: string = chalk.bgHex("#F99631").bold("   M ")
  let name: string = "Mail "
  console.log(" ")
  console.log(" ".repeat(name.length), ts_logo1)
  process.stdout.write(`\r${" ".repeat(name.length + 1)}${ts_logo2}`)

  await sleep(500)


  for (let i = 0; i < name.length; i++) {
    process.stdout.write('\r')
    process.stdout.write(" ".repeat(name.length - i))
    process.stdout.write(chalk.hex("#FFD5A3").bold(name.slice(0, i)))
    process.stdout.write(" ")
    process.stdout.write(ts_logo2)
    await sleep(50)
  }

  await sleep(500)
  
  console.log('\n')
  info("Listening on port", chalk.hex("#F99631").bold(port))

}
