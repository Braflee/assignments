const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('dev'))

app.use('/targets', require('./routes/targetRouter.js'))

app.listen(8233, () => {
    console.log('ATTN: Server running on PORT 8233');
})