# Mail-TS

<img src=".assets/mailts.png" />

**Easy to setup, simple, smtp server written in typescript.**

# Installation

## npm

```shell
$ npm i -g @shamxl/mail-ts
```

## mannual

```shell
$ git clone https://github.com/shamxl/mail-ts
$ cd mail-ts
$ npm rum build
$ chmod +x ./dist/index.js
$ npm link
```

# Usage

```
$ mail-ts --help
Options:
      --help            Show help                                      [boolean]
      --version         Show version number                            [boolean]
  -p, --port            Set port for smtp server, default 2525
                                                        [number] [default: 2525]
  -h, --hostname        Set hostname for smtp server, default localhost
                                                 [string] [default: "localhost"]
  -u, --users           Set users for smtp server eg: mail-ts -u admin guest
                                            [array] [default: ["admin","guest"]]
  -v, --verbose         Set debug mode, default to false
                                                      [boolean] [default: false]
  -m, --welcomeMessage  Set welcome message, default to `Mail Ts ready.`
                                            [string] [default: "Mail Ts ready."]
  -s, --silent          Disable all loggings except emails, default to false
                                                      [boolean] [default: false]
```

## Example usage

```
$ mail-ts
```

