const express = require('express')
const app = express()

app.use(express.json())

const residents = [
    {name: 'Brad', age: '26'},
    {name: 'Lexi', age: '26'},
    {name: 'Jovee', age: '1'},
    {name: 'Luna', age: '4'},
    {name: 'Sullivan', age: '7'},
]

    //1. Endpoint (mount path)
    //2. CallBack function (req, res)
app.get('/residents', (req, res) => {
    res.send(residents)
})

app.post('/residents', (req, res) => {
    const newResident = req.body
    residents.push(newResident)
    res.send(`Successfully added ${newResident.name} to the household.`)
})

    //1: PORT 2: CallBack
app.listen(8675, () => {
    console.log('ATTN: Server running on PORT 8675');
})