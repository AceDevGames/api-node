const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send("oi Rodrigo Acevedo")
})

app.listen(3001)