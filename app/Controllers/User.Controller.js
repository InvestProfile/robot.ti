const express = require('express');
const router = express.Router();
const userModel = require('../Models/Users.Model');

router.get('/', (req, res) => {
    res.send({
        userModel: 'userModel',
        getUserModel: userModel.getUser()
    })
});

module.exports = router;



