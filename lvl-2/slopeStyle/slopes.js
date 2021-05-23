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

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr) {
    let [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav} , and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))