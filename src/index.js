const express = require('express');
const route = require('./routes/route')
const PORT = 3000
const app = express()

app.use(express.json())

app.use('/', route)

app.listen(PORT, ()=> {
    console.log(`Server is Running on port ${PORT}`)
})