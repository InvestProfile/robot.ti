const express = require('express');
const router = express.Router();
const Doms = require('../huita/dom');
const { Dom: DomController } = require('../models');

// Get JsonDom by DomId
router.get('/:id', async (req, res) => {
    res.send({
        url: 'dom',
        status: 200,
        dom: Doms.getDomByID(req.params.id)
    })
});
// Get all Doms
router.get('/', async (req, res) => {
    await DomController.findAll().then(domList =>
        res.send({
            url: 'dom list',
            status: 200,
            domList
        }));
});

router.post('/', async (req, res) => {

    await DomController.create({hash: md5(Date.now()), date: Date.now(), ticker: 'AMD'});

    res.send({
        url: 'dom',
        status: 200
    })
});


module.exports = router;
