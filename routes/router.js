const express=require('express')
const userController=require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtmiddlewares')
const router=new express.Router

router.post('/register',userController.registerController)
router.post('/login',userController.loginController)

router.get('/all-users',jwtMiddleware,userController.allUserController)
router.get('/one-user',jwtMiddleware,userController.oneUserController)







module.exports=router