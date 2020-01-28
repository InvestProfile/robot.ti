const express = require('express');
const depthModel = require('../Models/Depth.Model');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        depth: 'Depth',
        getDepthModel: depthModel.getDepth()
    })
});

module.exports = router;