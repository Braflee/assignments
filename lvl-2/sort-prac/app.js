// const randomOrder = [2, 5, 4, 9, 7, 1]
// // const least2Greatest = randomOrder.sort((a, b) => a - b)

// const greatest2Least = randomOrder.sort((a, b) => b - a)

// console.log(greatest2Least)

// const dumbNames = ['Guiseppe', 'Gerd', 'Braelin', 'Aspen']
// // const short2Long = dumbNames.sort((a, b) => a.length - b.length)
// const short2Long = dumbNames.sort()

// console.log(short2Long)

const users = [
    {name: 'Brad', age: 26},
    {name: 'Lexi', age: 25},
    {name: 'Jovee', age: 1}
];

const sortAge = users.sort((a, b) => a.age - b.age)

console.log(sortAge)
