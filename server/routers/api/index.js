const express=require('express')

const router=express.Router()

const usercontroller = require('../../controller/usercontroller');


router.post('/user',usercontroller.createUser)

router.get('/show',usercontroller.showUser)

router.put('/update/:id',usercontroller.userUpdate)

router.delete('/delete/:id',usercontroller.userDelete)

router.get('/',(req,res)=>{
    res.send('home page')
})

module.exports=router;
