const express = require('express')
const thingRouter = express.Router()
// const uuid = require('uuid/v4')

const things = [
    {
        name: "banana",
        type: "food",
        price: 200,
    }, {
        name: "pants",
        type: "clothing",
        price: 2500,
    }, {
        name: "basket ball",
        type: "toy",
        price: 1000,
    }, {
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    }, {
        name: "shirt",
        type: "clothing",
        price: 800,
    }, {
        name: "soup",
        type: "food",
        price: 300,
    }, {
        name: "flour",
        type: "food",
        price: 100,
    }
]

thingRouter.get('/', (req, res) => {
    const type = req.query.type
    const filteredThing = things.filter(thing => thing.type === type)
    res.send(filteredThing)
})

thingRouter.route('/')
    .get((req, res) => {
        res.send(things)
    })

module.exports = thingRouter