const express = require('express')
const residentRouter = express.Router()
const uuid = require('uuid/v4')


const residents = [
    { name: 'Brad', age: '26', _id: uuid() },
    { name: 'Lexi', age: '26', _id: uuid() },
    { name: 'Jovee', age: '1', _id: uuid() },
]

    //GET one
residentRouter.get('/:residentID', (req, res) => {
    const residentID = req.params.residentID
    const foundResident = residents.find(resident => resident._id === residentID)
    res.send(foundResident)
})

residentRouter.route('/')
        //GET all
    .get((req, res) => {
        res.send(residents)
    })
    .post((req, res) => {
        const newResident = req.body
        newResident._id = uuid()
        residents.push(newResident)
        res.send(`Successfully added ${newResident.name} to the household.`)
    })



module.exports = residentRouter