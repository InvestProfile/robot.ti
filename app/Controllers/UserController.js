const express = require('express')

const router = express.Router()

const userModel = require('../Models/UsersModel')

router.get('/', (req, res) => {
    res.send({
        title: 'Hello, world!',
        content: 'How are you?',
        user: userModel.getUser()
    })
})

module.exports = router;



