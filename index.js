const express = require('express')
const path = require('path')
const task = require('./tesk')
const app = express()


//create function for use middleware 
// const store = (req,res,next)=>{
//     console.log("this middleware")
//     next()
// }
// app.use(store)


//api
app.get('/api/task',(req,res)=>res.json(task))

app.get('/api/task/:id',(req,res)=>{
    let find = task.some(task => task.id === parseInt(req.params.id)) 
    if(find){
        res.json(task.filter(task => task.id === parseInt(req.params.id)))
    }
    else{
        res.status(400).json({msg:`not found data on this params ${req.params.id}`})
    }
})

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

//set static path for open file
app.use(express.static(path.join(__dirname,'public')))
const port = process.env.PORT || 5000;

app.listen(port ,()=> console.log(`server has runing on port ${port}`))