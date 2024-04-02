console.log(process.env);

const {SHELL,HOMEBREW_PREFIX} = process.env;

// console.table({SHELL,HOMEBREW_PREFIX})

const characters = ['Flash','Superman','Batman']

const [, ,Superman] = characters;

// console.log(Flash)