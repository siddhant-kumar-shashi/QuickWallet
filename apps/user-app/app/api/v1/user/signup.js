const express = require('express')

const app = express() 

app.post('/signup' , (req , res) => {
    const data = req.body
        
})

app.listen(3000 , () => {
    console.log('server is listening on port 3000')
})