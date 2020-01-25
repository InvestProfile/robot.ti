const express = require('express');
const router = express.Router();
const userModel = require('../Models/UsersModel');

router.get('/', (req, res) => {
    res.send({
        userModel: 'userModel',
        getUserModel: userModel.getUser()
    })
});

module.exports = router;



