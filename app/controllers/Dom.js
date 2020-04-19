const express = require('express');
const router = express.Router();
const Dom = require('../models/dom');
const DomModel = require('../models/dom.model');

router.get('/:id', (req, res) => {


    //console.log(DomModel().classMethods.getTest());

    DomModel.create({hash: 'fdsfds', ticker: 'dfsdf'});

    res.send({
        url: 'dom',
        dom: Dom.getDomByID(req.params.id)
    })
});


router.get('/', (req, res) => {

/*    const db = require('../models/dom.model');
    const Dom = db.dom;
    //const Op = db.Sequelize.Op;

    const dom = {
        hash: "ggg"
    };

    Dom.create(dom)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Tutorial."
        });
    });*/

});

module.exports = router;
