const express = require('express');
const userController=require('../controller/userController')
const router = express.Router();

router.route('/new').post(userController.createNewUser);
// router.route('/login').post(authController.login);
// router.route('/verification/:token').get(authController.verification);

    

module.exports = router;