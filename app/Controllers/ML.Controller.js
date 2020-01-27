const express = require('express');
const router = express.Router();
const sigmoidModel = require('../Models/Sigmoid.Model');

router.get('/', (req, res) => {
    res.send({
        ml: 'ml',
        sigmoid: sigmoidModel.getSigmoid()
    })
});

module.exports = router;