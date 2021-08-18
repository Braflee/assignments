const express = require('express')
const app = express()

app.use(express.json())

app.use('/residents', require('./routes/residentRouter.js'))
app.use('/pets', require('./routes/petsRouter.js'))

    //1: PORT 2: CallBack
app.listen(8675, () => {
    console.log('ATTN: Server running on PORT 8675');
})