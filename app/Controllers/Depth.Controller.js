const express = require('express');
const depthModel = require('../Models/Depth.Model');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send({
        depth: 'Depth',
        getDepthModel: await depthModel.getDepth()
    })
});

module.exports = router;
