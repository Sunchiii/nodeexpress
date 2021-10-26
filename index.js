const express = require('express')

const app = express()
const port = process.env.PORT || 5000;

app.listen(port ,()=> console.log(`server has runing on port ${port}`))