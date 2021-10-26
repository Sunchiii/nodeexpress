const express = require('express')
const path = require('path')
const task = require('./tesk')
const app = express()

//api
app.get('/api/task',(req,res)=>res.json(task))

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

//set static path for open file
app.use(express.static(path.join(__dirname,'public')))
const port = process.env.PORT || 5000;

app.listen(port ,()=> console.log(`server has runing on port ${port}`))