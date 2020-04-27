const express = require('express');
const router = express.Router();
const { Dom } = require('../models');

// Get Dom by DomId
router.get('/:id', async (req, res) => {
    Dom.findOne({where: {id: req.params.id}}).then(dom => res.send(dom))
});
// Get all Doms
router.get('/', async (req, res) => {
    await Dom.findAll().then(domList => res.send(domList));
});

module.exports = router;
