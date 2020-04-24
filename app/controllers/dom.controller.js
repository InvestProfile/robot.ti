const express = require('express');
const router = express.Router();
const JsonDom = require('../huita/dom');
const { Dom: DomController } = require('../models');

// Get JsonDom by DomId
router.get('/json/:id', async (req, res) => {
    res.send({
        url: 'dom',
        status: 200,
        dom: JsonDom.getDomByID(req.params.id)
    })
});
// Get JsonDom by DomId
router.get('/json', JsonDom.getDom);

// Get Dom by DomId
router.get('/:id', async (req, res) => {
    DomController.findOne({where: {id: req.params.id}}).then(dom => res.send({
        url: 'dom',
        status: 200,
        dom
    }))
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
