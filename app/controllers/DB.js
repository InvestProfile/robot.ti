const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        url: 'DB'
    })
});

router.get('/:id', (req, res) => {
    res.send({
        url: 'DB'
    })
});

module.exports = router;
