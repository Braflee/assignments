const express = require('express')
const targetRouter = express.Router()
const uuid = require('uuid/v4')
    //Fake data
const targets = [
    {
        fName: 'Darth',
        lName: 'Vader',
        eliminated: false,
        bounty: 10000,
        type: 'Sith',
        _id: uuid()

    },

    {
        fName: 'Johnny',
        lName: 'Jumper',
        eliminated: false,
        bounty: 2,
        type: 'Jedi',
        _id: uuid()

    },

    {
        fName: 'Bill',
        lName: 'Clinton',
        eliminated: false,
        bounty: 1776,
        type: 'Sith',
        _id: uuid()

    },

    {
        fName: 'Joseph',
        lName: 'Smith',
        eliminated: false,
        bounty: 1892,
        type: 'Sith',
        _id: uuid()

    }
]
    //Get one
targetRouter.get('/:targetID', (req, res) => {
    const targetID = req.params.targetID
    const foundTarget = targets.find(target => target._id === targetID)
    res.send(foundTarget)
})
    //Get by type
targetRouter.get('/type', (req, res) => {
    const type = req.query.type
    const filteredTarget = targets.filter(target => target.type === type)
    res.send(filteredTarget)
})
    //Delete request
targetRouter.delete('/:targetID', (req, res) => {
    const targetID = req.params.targetID
    const targetIndex = targets.findIndex(target => target._id === targetID)
    targets.splice(targetIndex, 1)
    res.send(`Target successfully removed from Bounty List.`)
})
    //PUT request (update one)
targetRouter.put('/:targetID', (req, res) => {
    const targetID = req.params.targetID
    const targetIndex = targets.findIndex(target => target._id === targetID)
    const updatedTarget = Object.assign(targets[targetIndex], req.body)
    res.send(updatedTarget)
})
    //Generic requests (GET all and POST)
targetRouter.route('/')
    .get((req, res) => {
        res.send(targets)
    })
    .post((req, res) => {
        const newTarget = req.body
        newTarget._id = uuid()
        targets.push(newTarget)
        res.send(newTarget)
    })

module.exports = targetRouter