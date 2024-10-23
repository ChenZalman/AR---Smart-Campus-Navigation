const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:email', userController.getUserByEmail);

//use this route to create a signup path, need to update the footer in the frontend component folder. add a "/signup" at the end of the url
router.post('/signup', userController.createUser); //router.post('/', userController.createUser); this is the old version

//use this route to create a login path
router.post('/login', userController.verifyUser); 
router.put('/:email', userController.updateUser);
router.delete('/:email', userController.deleteUser);

module.exports = router;