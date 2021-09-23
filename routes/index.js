const express=require('express')
const router=express.Router()
const movies=require('./movies')

router.use('/home', movies)

module.exports=router