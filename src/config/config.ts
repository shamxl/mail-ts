import yargs, {alias, demandOption} from 'yargs'
import { hideBin } from 'yargs/helpers'
import { IConfig  } from '../types'

export const config: IConfig = yargs(hideBin(process.argv))
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
  .parseSync() as IConfig



