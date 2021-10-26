const express = require('express')
const path = require('path')
const app = express()

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public','index.html'))
})
const port = process.env.PORT || 5000;

app.listen(port ,()=> console.log(`server has runing on port ${port}`))