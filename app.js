const express = require('express')
const app = express()
// Set an env var for the PORT, and a default value
const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Hello World! hihihi')
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})