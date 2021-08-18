const express = require('express')
const app = express()

app.use(express.json())

app.use('/things', require('./routes/thingRouter.js'))

app.listen(5682, () => {
    console.log('ATTN: Server is live on PORT 5682');
})