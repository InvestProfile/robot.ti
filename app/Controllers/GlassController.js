const express = require('express');
const glassModel = require('../Models/GlassModel');
const router = express.Router();

router.get('/', (req, res) => {
    res.send({
        glass: 'glass',
        getGlassModel: glassModel.getGlass()
    })
});

module.exports = router;