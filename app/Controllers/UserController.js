const express = require('express')

const router = express.Router()

const user = require('../Models/UsersModel')

console.log('user hyuser')
//console.log(user.getUser())

router.get('/', (req, res) => {
    res.send({
        title: 'Hello, world!',
        content: 'How are you?'
    })
})

module.exports = router;



