const express = require('express');
const router = express.Router();
const Dom = require('../Models/Dom');

router.get('/', (req, res) => {
    res.send({
        url: 'dom',
        dom: Dom.getDom(0)
    })
});

module.exports = router;