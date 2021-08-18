const express = require('express')
const app = express()

app.use(express.json())



app.listen(6900, () => {
    console.log('ATTN: Server is live on PORT 6900.. Nice.');
})