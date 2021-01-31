const readlineSync = require('readline-sync');
const username = readlineSync.question("Phil: Thank goodness you're finally here! I'm Phil the building manager, I called for your services hours ago! My building's infested with quite a few different monsters and I need them out. Like yesterday. Regardless, I hear Monster Slayers Inc. only hires the best of the best so I'm glad you're here. By the way, I didn't quite catch your name..?  ");
console.log("Phil: Well, " + username + " I will NOT keep you any longer, I'll let you get to work. I'll be watching the security feed from my phone out here while maintaining constant communcation, so once I see you deal with the last baddy you can be on your way!  ");
console.log('*Enter the building*')
class Protagonist {
    constructor(player, hp, ap) {
        this.player = player
        this.hp = hp
        this.ap = ap
        this.satchel = []
    }
    isAlive() {
        return this.hp > 0;
    }
    reduceHP(damage) {
        this.hp -= damage;
        if (this.hp < 0) {
            this.hp = 0;
        }
    }
}
const player = new Protagonist(username, 500, 500)

class Item {
    constructor(item, hp) {
        this.item = item
        this.hp = hp
    }
}
const remedy = new Item('Remedy', 200);
// const loremedy = new Item('Lo-remedy', 250);
// const hiremedy = new Item('Hi-remedy', 500);
// let items = [remedy, loremedy, hiremedy];

// let remedy = items[Math.floor(Math.random() * items.length)];

class Mob {
    constructor(enemy, hp, ap) {
        this.enemy = enemy
        this.hp = hp
        this.ap = ap
    }
    isAlive() {
        return this.hp > 0;
    }
    reduceHP(damage) {
        this.hp -= damage;
        if (this.hp < 0) {
            this.hp = 0;
        }
    }
}
const tonberry = new Mob("Tonberry", 500, 300);
const cactaur = new Mob("Cactuar", 25, 200);
const flan = new Mob("Flan", 25, 25);
const evilTwin = new Mob("Evil Twin", 100, 100);
let enemies = [tonberry, cactaur, flan, evilTwin];



while (player.isAlive()) {
    const controls = readlineSync.keyIn('[w] Walk\n[p] Player Status\n[u] Use remedy\n[q]Quit\n', { limit: 'wpuq' });
    if (controls === 'w') {
        walking()
    } else if (controls === 'p') {
        playerInfo()
    } else if (controls === 'u') {
        useItem(remedy)
    } else if (controls === 'q') {
        console.log("Phil: Thank you SO much for your help, my friend! I'll be in touch with your superiors to let them know how STELLAR of a job you did! Go take a nap, you've earned it... Buddy.")
        break;
    }
}

function walking() {
    const chance = Math.random();
    if (chance > 0.25) {
        console.log('*No sign of monsters... yet.*')
    } else {
        enemyAppears()
    }
}

function playerInfo() {
    console.log(player);
}



function enemyAppears() {
    if (enemies.length == 0) {
        console.log("Phil: That's the last of 'em! [q] Come on out!");
    } else {
        let spawn = enemies[Math.floor(Math.random() * enemies.length)];
        console.log('*ALERT* The terrifying ' + spawn.enemy + ' has reared its ugly head! ');
        console.log(spawn);
        fightLoop(spawn);
    }
}



function fightLoop(spawn) {
    // do a loop here until enemy hp or player hp is 0 or less, or if they get away
    while (player.isAlive() && spawn.isAlive()) {
        const fightControls = readlineSync.keyIn('[r] RUN\n[s] ATTACK\n[u] USE A REMEDY\n[q] QUIT\n', { limit: 'sruq' });

        const oddsOfEscape = Math.random()

        if (fightControls === 'r') {
            if (oddsOfEscape > .5) {
                console.log("Phil: Holy crap! Did you SEE THAT THING?! I don't blame you for running buddy, but uhh.. I reaaalllly need these guys outta here otherwise I'll have to shut my doors for good. You got this! I know you can do it! ");
                return;
            } else {
                enemyAttack(spawn)
            }
        } else if (fightControls === 's') {
            playerAttack(spawn);
            enemyAttack(spawn);
        } else if (fightControls === 'u') {
            useItem();
        } else if (fightControls === 'q') {
            console.log("Phil: Listen if you leave now.. I can't pay you. It's not too late to turn back.")

        }

    }
    if (player.hp == 0) {
        console.log('You died!');
        //look up cool node/js graphic
    } else if (spawn.hp == 0) {
        enemyDeath(spawn);
        console.log(spawn.enemy + ' is dead. You recovered 100 HP.');
        itemDrop(remedy)
        console.log('The ' + spawn.enemy + ' has dropped a ' + remedy.item + '!');
        console.log(remedy.item + ' has been added to your inventory.')

    }
}

function enemyAttack(spawn) {
    player.reduceHP(Math.floor(Math.random() * spawn.ap));
    console.log('*Direct hit!* ' + username + ' HP remaining: ' + player.hp);
}

function playerAttack(spawn) {
    spawn.reduceHP(Math.floor(Math.random() * player.ap));
    console.log('*Direct hit!* ' + spawn.enemy + ' HP remaining: ' + spawn.hp);
}

function enemyDeath(spawn) {
    let spawnIndex = enemies.indexOf(spawn);
    enemies.splice(spawnIndex, 1);
    player.hp += 100;
}

function itemDrop(remedy) {
    player.satchel.push(remedy)
}

function useItem() {
    if (player.satchel.length == 0) {
        console.log('Your inventory is empty.. go kill something.')
    } else {
        player.hp += 200;
        console.log('You recovered 200 HP!')
        player.satchel.shift();
    }
}
