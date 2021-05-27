const readlineSync = require('readline-sync');
let gameActive = true
//const gameTimer = game()
game()

function game(){
    class Player {
        constructor(name, totalCoins, status, hasStar=false, playerIsAlive = true){
            this.name = name,  
            this.totalCoins = totalCoins,
            this.status = status,
            this.hasStar = hasStar,
            this.playerIsAlive = playerIsAlive
        }
        setName(namePicked){
            setName = readlineSync.keyIn('Who do you think deserves to find Peach? [m]Mario, or [l]Luigi?', {limit: 'ml'})
            if (namePicked === 'm'){
                    this.name = 'Mario'
            } else if (namePicked === 'l'){
                    this.name = 'Luigi'
                }else{
                    console.log('Nooooooo pick one or the other')
                }
            }    
        gotHit(){
            if(this.status === 'Powered Up'){
                this.status = 'Big'
                console.log('Your star protected you!')
            }else if(this.status === 'Big'){
                this.status = 'Smol'
                this.hasStar = false
            }else if(this.status === 'Smol'){
                this.status = 'DED'
                this.playerIsAlive = false
                this.hasStar = false
                clearInterval(gameTimer)
                console.log('You DIIIIEEEEED')

            }
        }  
        gotPowerUp(){
            if(this.status === 'Smol'){
                this.status = 'Big'
                this.hasStar = false
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
            console.log(`
            `)
            if(this.hasStar === true){
                console.log(`You have the star!`)
            } else {
                console.log(`No star`)
            }
        }
    }
    const marioBro = new Player('Mario', 0, 'Smol')
    const gameTimer = setInterval(() => {
        const randomNum = Math.floor(Math.random() * 3)
        marioBro.print()
        if (randomNum === 0) {
            marioBro.gotHit()
        } else if (randomNum === 1) {
            marioBro.gotPowerUp()
        } else if(randomNum === 2) {
            marioBro.gotCoin()
        } 
    }, 1000)
    // if(marioBro.playerIsAlive === false){
    //     console.log('hello')
    //     clearInterval(gameTimer)
    // }
}






