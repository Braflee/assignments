// const arr = [1, 2, 3, 4, 5]
// const result = arr.reduce(function(final, num){
//     final += num 
//     return final
// })

// console.log(result)

// const arr = [1, 2, 3, 4, 5]
// const result = arr.reduce(function(final, num){
//     final += num.toString()
//     return final.toString()
// })

// console.log(result)

// const voter = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]
// const voteCount = voter.reduce(function(final, voter){
//     if(voter.voted){
//         final++
//     }
//     return final
// }, 0)

// console.log(voteCount + ' voted')

const wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
const damage = wishlist.reduce(function(final, shopper){
    final += shopper.price
    return final
}, 0)

console.log(damage)