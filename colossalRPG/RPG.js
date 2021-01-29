const readlineSync = require('readline-sync');
// make sure it's known that the player should only quit once all enemies are dead
const username = readlineSync.question('You made it! Welcome to The Forest of Lunafreya. What is your name, brave one?: ');
console.log('Welcome to the gauntlet, ' + username + '...');
class Protagonist {
    constructor(player, hp, ap) {
        this.player = player
        this.hp = hp
        this.ap = ap
        this.satchel = ['Hi-Potion']
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

class Info {
    constructor(enemy, hp, ap) {
        this.enemy = enemy
        this.hp = hp
        this.ap = ap
    }
    reduceHP(damage) {
        this.hp -= damage;
        if (this.hp < 0) {
            this.hp = 0;
        }
    }
}
const tonberry = new Info("Tonberry", 500, 300);
const cactaur = new Info("Cactuar", 25, 200);
const flan = new Info("Flan", 25, 25);
const evilTwin = new Info("Evil Twin", 100, 100);
const enemies = [tonberry, cactaur, flan, evilTwin];

while (player.isAlive()) {
    const controls = readlineSync.keyIn('Walk [w], Check your satchel [i], or Quit [q]? ', { limit: 'wiq' });
    if (controls === 'w') {
        walking()
    } else if (controls === 'i') {
        openSatchel()
    } else if (controls === 'q') {
        console.log('Ok, bye I guess..')
        break;
    }
}

function walking() {
    const chance = Math.random();
    if (chance > 0.25) {
        console.log('*So far, so good. You can keep walking or use the other options previously provided.*')
    } else {
        enemyAppears()
    }
}

function openSatchel() {
    console.log(player.satchel);
}


//change *random* param and var
function enemyAppears() {
    const random = enemies[Math.floor(Math.random() * enemies.length)];
    console.log('*ALERT* The notorious ' + random.enemy + ' has reared its ugly head! ')
    console.log(random);
    fightLoop(random);
};
function fightLoop(random) {
    // do a loop here until enemy hp or player hp is 0 or less, or if they get away
    while (player.hp > 0 && random.hp > 0) {
        const fightControls = readlineSync.keyIn(' *Fight Controls* [r]RUN , [s]Attack!!! , or [q]quit??? ', { limit: 'srq' });

        const oddsOfEscape = Math.random()

        if (fightControls === 'r') {
            if (oddsOfEscape > .5) {
                console.log('You have escaped!');
                return;
            } else {
                enemyAttack(random)
            }
        } else if (fightControls === 's') {
            playerAttack(random);
            enemyAttack(random);
        } else if (fightControls === 'q') {
            console.log('Okay, bye I guess...')
            break;
        }

    }
    if (player.hp == 0) {
        console.log('You died!');
        //look up cool node/js graphic
    } else if (random.hp == 0) {
        console.log(random.enemy + ' has fallen.')
    }

    // if item
    // implement effect of item
    //choose where to put item drop
    // Once out of the loop, if the character succeeded, you can check if the enemy had an item
    // if enemy had item, add it to player inventory

}
function enemyAttack(random) {
    player.reduceHP(Math.floor(Math.random() * random.ap));
    console.log('*Direct hit!* ' + username + ' HP remaining: ' + player.hp);
}
function playerAttack(random) {
    random.reduceHP(Math.floor(Math.random() * player.ap));
    console.log('*Direct hit!* ' + random.enemy + ' HP remaining: ' + random.hp);
}

//