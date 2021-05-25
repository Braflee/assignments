const readlineSync = require('readline-sync');
const counter = setInterval(() => fate(roll), 1500)

class Player {
    constructor(name, totalCoins, status, hasStar=false, gameActive=true){
        this.name, 
        this.totalCoins, 
        this.status,
        this.hasStar,
        this.gameActive
    }
    setName(chooseFighter){
        chooseFighter = readlineSync.keyIn('Who do you think deserves to find Peach? [m]Mario, or [l]Luigi?', {limit: 'ml'})
            if(chooseFighter === 'm'){
                this.name = 'Mario'
                fate()
            } else if(chooseFighter === 'l'){
                this.name = 'Luigi'
                fate()
            }else{
                console.log('Nooooooo pick one or the other')
            }
        }    
    gotHit(){
        if(this.status === 'Powered Up'){
            this.status = 'Big'
        }else if(this.status === 'Big'){
            this.status = 'Smol'
        }else if(this.status === 'Smol'){
            this.status = 'DED'
            this.gameActive = false
            clearInterval(counter)
        }
    }  
    gotPowerUp(){
        if(this.status === 'Smol'){
            this.status = 'Big'
        }else if(this.status === 'Big'){
            this.status = 'Powered Up'
            this.hasStar = true
        }else{
            console.log('Bro chill you have the star already')
        }
    }   
    gotCoin(){
        this.totalCoins += 1;
    }
    print(){
        console.log(`Brother: ${this.name}`)
        console.log(`Bank: ${this.totalCoins} coins`)
        console.log(`Power Status: ${this.status}!`)
        if(this.hasStar === true){
            console.log(`You have the star!`)
        }
    }
}

const marioBro = new Player('test', 0, 'Smol')

function rng(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let roll = rng(0, 2);

function fate(roll){
    marioBro.setName()
    print()
    if(roll === 0){
        marioBro.gotHit()
    }else if(roll ===  1){
        marioBro.gotPowerUp()
    }else{
        marioBro.gotCoin()
    }
}

