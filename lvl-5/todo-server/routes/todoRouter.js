const express = require('express')
const todoRouter = express.Router()
const uuid = require('uuid/v4')

    // Todo data
const todos = [
    {
        name: 'Throw something at Kevin',
        description: "It's just something we do.",
        imgUrl: 'https://c.tenor.com/dnJFN-Zesb0AAAAM/up-wave.gif',
        completed: false,
        _id: uuid()
    },

    {
        name: 'Plan a coup',
        description: 'Muffin prices have been high for too long, time to take a stand.',
        imgUrl: 'https://c.tenor.com/DeA5FBfN1PcAAAAM/soldier-belittling.gif',
        completed: false,
        _id: uuid()
    }
]
    //GET one
todoRouter.get('/:todoID', (req, res) => {
    const todoID = req.params.todoID
    const foundTodo = todos.find(todo => todo._id === todoID)
    res.send(foundTodo)
})
    //DELETE request
todoRouter.delete('/:todoID', (req, res) => {
    const todoID = req.params.todoID
    const todoIndex = todos.findIndex(todo => todo._id === todoID)
    todos.splice(todoIndex, 1)
    res.send(`Todo successfully deleted.`)
})
    //PUT request (update one)
todoRouter.put('/:todoID',
(req, res) => {
    const todoID = req.params.todoID
    const todoIndex = todos.findIndex(todo => todo._id === todoID)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})
    //Blanket requests
todoRouter.route('/')
    .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuid()
        todos.push(newTodo)
        res.send(`Successfully added new todo under "${newTodo.name}".`)
    })

    module.exports = todoRouter