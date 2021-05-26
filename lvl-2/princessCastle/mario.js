const readlineSync = require('readline-sync');
let gameActive = true

if(gameActive === true){
    game()
} else if(gameActive === false){
    console.log('dead')
}
function game(){
    class Player {
        constructor(name, totalCoins, status, hasStar=false){
            this.name = name,  
            this.totalCoins = totalCoins,
            this.status = status,
            this.hasStar = hasStar
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
            }else if(this.status === 'Smol'){
                this.status === 'DED'
                gameActive === false
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
            if(this.hasStar === true){
                console.log(`You have the star!`)
            } else {
                console.log(`No star`)
            }
        }
    }
    const marioBro = new Player('Mario', 0, 'Smol')
    setInterval(() => {
        const randomNum = Math.floor(Math.random() * 3)
        marioBro.print()
        console.log(randomNum)
        if (randomNum === 0) {
            marioBro.gotHit()
        } else if (randomNum === 1) {
            marioBro.gotPowerUp()
        } else if(randomNum === 2) {
            marioBro.gotCoin()
        } 
    }, 1000)
}






