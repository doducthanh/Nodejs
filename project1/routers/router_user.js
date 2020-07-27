const express = require('express');
const router = express.Router();
const userControl = require('../controllers/userController');

router.post('/user', userControl.addUser);
router.get('/add', userControl.addUser);

module.exports = router;