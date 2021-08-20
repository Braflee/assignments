const express = require('express')
const app = express()

app.use(express.json())

app.use('/todos', require('./routes/todoRouter.js'))

app.listen(6969, () => {
    console.log('ATTN: Server is live on PORT 6969.. Nice.');
})