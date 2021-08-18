const express = require('express')
const petsRouter = express.Router()
const uuid = require('uuid/v4')

const pets = [
    { name: 'Sullivan', age: '7', _id: uuid() },
    { name: 'Luna', age: '4', _id: uuid() }
]

petsRouter.route('/')
    .get((req, res) => {
        res.send(pets)
    })
    .post((req, res) => {
        const newPet = req.body
        newPet._id = uuid()
        pets.push(newPet)
        res.send(`Successfully added ${newPet.name} to the houselhold.`)
    })

module.exports = petsRouter