const express = require('express')
const app = express()
const port=8080
const router= require('./routes')

app.use(express.json())
app.get('/', (req,res)=>{
    res.send('hello world')
})

app.use('/api', router)

app.listen(port, ()=>{
    console.log(`server starterd on port ${port}`)
})