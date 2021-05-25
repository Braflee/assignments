// // collectAnimals = (...animals) => animals
// // console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

// // function combineFruit(...nummies) {
// //     let [fruit, sweets, veggies] = nummies
// //     return {fruit, sweets, veggies}
// // }
// // console.log(combineFruit(
// //     ["apple", "pear"],
// //     ["cake", "pie"],
// //     ["carrot"]));

// const vacation = {
//     location: "Burly Idaho",
//     duration: "2 weeks"
// };
// function parseSentence({location, duration}) {
//     return `We're going to have a good time in ${location} for ${duration}`
// }
// console.log(parseSentence(vacation))

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr) {
//     let [firstFav, secondFav, thirdFav] = arr
//     return `My top three favorite activities are, ${firstFav}, ${secondFav} , and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))

// combineAnimals = (...animals) => animals;

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(...realAnimals, ...magicalAnimals, ...mysteriousAnimals));
// let numbers = [1, 2, 3, 4];

// product = (numbers) => numbers.reduce(function (acc, number) {
//         return acc * number;
//     }, 1)

// console.log(product(numbers))
// function unshift(a, b, c, d, e, ...array ) {
//     return [...array, a, b, c, d, e];
// }

// console.log(unshift(1, 2, 3, 4, 5))

function populatePeople(names) {
    return names.map(function (name) {
       let [firstName, lastName] = name.split(" ");
        return {
            firstName,
            lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]