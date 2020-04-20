const express = require('express');
const router = express.Router();
const sigmoidModel = require('../huita/Sigmoid');

router.get('/', (req, res) => {
    res.send({
        model: 'sigmoid',
        sigmoid: sigmoidModel.getSigmoid()
    })
});

module.exports = router;
