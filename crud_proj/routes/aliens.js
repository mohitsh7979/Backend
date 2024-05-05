const express = require('express')
const Alien = require('../models/alien')
const router = express.Router()

router.get('/', async (req,res)=>{
    try{

        const aliens = await Alien.find()
        req.json(aliens)
    }catch(err){
 
        res.send('error'+  err)
    }

})

router.post('/',async(req,res)=>{

    const alien = new Alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })

    try{
        const a1 = await alien.save()
    }
    catch(err){

        req.send('Error')
    }
})

module.exports = router