
function sum(x, y){
    x = Number(x)
    y = Number(y)
        if(x === '') {
            throw 'No number inserted'
        } else if(isNaN(x)) {
            throw 'not a number'
        } else if(y === '') {
            throw 'No number inserted'
        } else if(isNaN(y)) {
            throw 'not a number'
        } else {
            return x + y
        }

}

try {
    console.log(sum(1, 2))
}
catch(err){
    console.log(err)
}
finally{
    console.log('...is this thing on?')
}

const credentials = {username: 'Braflee', password: 'haha'}

function login(username, password){
    if(username == 'Braflee' && password == 'haha'){
        console.log('Logged in.')
    } else {
        throw 'Wrong'
    }
}

try {
    console.log(login('Braflee', 'haha'))
}
catch(err){
    console.log(err)
}
finally{
    console.log('I gotchu boo.')
}