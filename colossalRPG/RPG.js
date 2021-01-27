const readlineSync = require('readline-sync');
let notDead = true;
//let escaped = true;

const username = readlineSync.question('You made it! Welcome to The Path of Esmerelda. What is your name, brave one?: ');
    console.log('Welcome to your trial of heroes, ' + username  + '.');
class Protagonist {
    constructor(player, hp, stamina){
        this.player = player
        this.hp = hp
        this.stamina = stamina
        this.satchel = ['Hi-Potion']
    }
}
const player = new Protagonist(username, 100, 100)

class Mob {
    constructor(enemy, hp, stamina){
        this.enemy = enemy
        this.hp = hp
        this.stamina = stamina
    }
}
const tonberry = new Mob("Tonberry", 500, 500);
const cactaur = new Mob("Cactuar", 25, 200);
const flan = new Mob("Flan", 25, 25);
const evilTwin = new Mob("Evil Twin", 100, 100);
const enemies = [tonberry, cactaur, flan, evilTwin];

while (notDead){
    const controls = readlineSync.keyIn('walk[w], ', 'check your bag [p], ', 'End it all[s]');
        if (controls === w){
            walking()
        } else if(controls === i) {
            openSatchel()
        } else {
            bashHead()
        }

}

function walking(){
    const chance = Math.random(); 
    if(chance > 0.25){
        console.log('*So far, so good. You can keep walking or use the other options previously provided.*')
    } else {
        enemyAppears()
    }
}
function openSatchel(){
    console.log(player.satchel);
}
function bashHead(){
    console.log('You bash your head against a tree for some reason.')
}

//how should the enemy drop something? just how many random generators does this need???

function enemyAppears(){
    
};

//I think constructor functions would help quite a bit. both enemies and player should have attributes like hp and ap(and/or mp);


