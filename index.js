const express = require('express')
const path = require('path')
const app = express()

//api
const task = [
    {
        id:1,
        name:'homework',
        disscrip:'make homework'
    },
    {
        id:2,
        name:'work',
        disscrip:'make work for money'
    }
]
app.get('/api/task',(req,res)=>{

})

// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'))
// })

//set static path
app.use(express.static(path.join(__dirname,'public')))
const port = process.env.PORT || 5000;

app.listen(port ,()=> console.log(`server has runing on port ${port}`))