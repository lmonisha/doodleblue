const express=require('express')
const router=express.Router()
const Controller=require('../controller/fetchdata')

router.get('/getAlldata',Controller.getAlldata)

module.exports=router