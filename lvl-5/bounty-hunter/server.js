const express = require('express')
const app = express()

app.use(express.json())

app.use('/targets', require('./routes/targetRouter.js'))

app.listen(8233, () => {
    console.log('ATTN: Server running on PORT 8233');
})