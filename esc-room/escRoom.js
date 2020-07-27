const readlineSync = require("readline-sync");
const name = readlineSync.question("You're finally awake, I don't know what happened but it looks like we were kidnapped somehow. I'm Brad, what's your name?: ") ;

let decision = readlineSync.keyInYN("Well, " + name + " it looks like we have a few options when it comes to escaping, will you help me?")