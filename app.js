const express=require('express')
const app=express()
const routes=require('./routes/index')

app.use('/',routes)
app.listen(7000,()=>{
    console.log('server running')
})

