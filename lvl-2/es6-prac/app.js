// let name = "John"
// const age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (let i = 0; i < pets.length; i++) {
//         var pet = { type: pets[i] }
//         var name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"]);

// const carrots = ["bright orange", "ripe", "rotten"]

// // function mapVegetables(arr) {
// //     return arr.map(function (carrot) {
// //         return { type: "carrot", name: carrot }
// //     })
// // }

// mapVegetables = arr => (arr.map(carrot => ({type: "carrot", name: carrot})))

// console.log(mapVegetables(carrots))

// const people = [
//     {
//         name: "Princess Peach",
//         friendly: false
//     },
//     {
//         name: "Luigi",
//         friendly: true
//     },
//     {
//         name: "Mario",
//         friendly: true
//     },
//     {
//         name: "Bowser",
//         friendly: false
//     }
// ]

// // function filterForFriendly(arr) {
// //     return arr.filter(function (person) {
// //         return person.friendly
// //     })
// // }

// filterForFriendly = arr => (arr.filter(person => (person.friendly)))
// console.log(filterForFriendly(people))

// doMathSum = (a, b) => a + b

// produceProduct = (a, b) => a * b

// console.log(doMathSum(2, 2))
// console.log(produceProduct(2, 2))


// printString = (fName, lName, age) => console.log(`Hi ${fName} ${lName}, how does it feel to be ${age}?`);
// printString('Jane', 'Doe', 100);

// const animals = [
//     {
//         type: "dog",
//         name: "theodore"
//     },
//     {
//         type: "cat",
//         name: "whiskers"
//     },
//     {
//         type: "pig",
//         name: "piglette"
//     },
//     {
//         type: "dog",
//         name: "sparky"
//     }
// ];

// filterForDogs = arr => arr.filter(animal => (animal.type === "dog"))

// console.log(filterForDogs(animals))

specialMessage = (name, location) => console.log(`Hi ${name}!

Welcome to ${location}.

I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`);

specialMessage('Janice', 'Hawaii');