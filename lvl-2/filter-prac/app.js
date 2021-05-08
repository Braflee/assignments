const fiveAndAbove = [3, 5, 7, 9];
const result = fiveAndAbove.filter(num => num>= 5);

const makeEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = makeEven.filter(num => num % 2 === 0)

const makeShorter = ['Bill', 'Larry', 'Hyperion', 'AlphabetSoup']
const result = makeShorter.filter(user => user.length <= 5)

const coolKidsClub = [
    {name: 'Geralt', member: true},
    {name: 'Yennefer', member: true},
    {name: 'Eredin', member: false},
    {name: 'Detlaff', member: false},
    {name: 'Ciri', member: true}
]
const isMember = coolKidsClub.filter(char => char.member === true)

console.log(isMember)

const viewers = [
    {name: 'Phee', age: 20},
    {name:'Phi', age: 26},
    {name: 'Pho', age: 69 },
    {name: 'Phum', age: 23 }
];
const isOfAge = viewers.filter(viewer => viewer.age >= 18)

console.log(isOfAge)