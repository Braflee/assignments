function sum(x, y){
    return x + y
}

try{
    sum(1, 2)
    throw new Error('test')
}
catch(err){
    console.log(err)
}
