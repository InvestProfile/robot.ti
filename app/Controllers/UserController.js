const express = require('express')

const router = express.Router()

const user = require('../Models/UsersModel')

router.get('/', (req, res) => {
    res.send({
        title: 'Hello, world!',
        content: 'How are you?',
        user: user.getUser()
    })
})

module.exports = router;



