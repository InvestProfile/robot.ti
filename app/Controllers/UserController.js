const express = require('express')

const router = express.Router()

//const user = require('../Models/UsersModel')

router.get('/', (req, res) => {
    res.json({
        title: 'Hello, world!',
        content: 'How are you?'
    })
})

module.exports = router;



