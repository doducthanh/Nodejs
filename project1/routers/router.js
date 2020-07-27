const express = require('express');

const router = express.Router();

const userController = require("../controllers/userController")

router.get('/users', function(req, res) {
    console.log("api get all user");
});
// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
// })
  // define the home page route
router.get('/', function (req, res) {
    res.send('Birds home page')
})
  // define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
})

router.get('/user', userController.addUser);

module.exports = router