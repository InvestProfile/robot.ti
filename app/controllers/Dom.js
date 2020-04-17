const express = require('express');
const router = express.Router();
const Dom = require('../models/dom');

router.get('/:id', (req, res) => {
    res.send({
        url: 'dom',
        dom: Dom.getDom(req.params.id)
    })
});

module.exports = router;
