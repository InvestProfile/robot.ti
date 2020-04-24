
const {Dom, Bid, Ask, OrderBook} = require('../models');

const md5 = require('md5');

const Doms = [{
    id: 0,
    ticker: '',
    bids:
        [ { price: 47.47, quantity: 1 },
            { price: 47.46, quantity: 10 },
            { price: 47.45, quantity: 2 },
            { price: 47.44, quantity: 10 },
            { price: 47.43, quantity: 41 },
            { price: 47.4, quantity: 384 },
            { price: 47.39, quantity: 1 },
            { price: 47.38, quantity: 20 },
            { price: 47.37, quantity: 501 },
            { price: 47.36, quantity: 34 },
            { price: 47.34, quantity: 26 },
            { price: 47.33, quantity: 17 },
            { price: 47.31, quantity: 1 },
            { price: 47.3, quantity: 63 },
            { price: 47.29, quantity: 5 },
            { price: 47.27, quantity: 10 },
            { price: 47.2, quantity: 44 },
            { price: 47.17, quantity: 1 },
            { price: 47.12, quantity: 18 },
            { price: 47.1, quantity: 8 },
            { price: 47.06, quantity: 4 },
            { price: 47.05, quantity: 75 },
            { price: 47.02, quantity: 1 },
            { price: 47.01, quantity: 10 },
            { price: 47, quantity: 207 },
            { price: 46.91, quantity: 1 },
            { price: 46.9, quantity: 56 },
            { price: 46.89, quantity: 17 },
            { price: 46.88, quantity: 4 },
            { price: 46.83, quantity: 150 },
            { price: 46.81, quantity: 250 },
            { price: 46.8, quantity: 36 },
            { price: 46.77, quantity: 1 },
            { price: 46.74, quantity: 150 },
            { price: 46.7, quantity: 162 },
            { price: 46.6, quantity: 5 },
            { price: 46.51, quantity: 1 },
            { price: 46.5, quantity: 133 },
            { price: 46.3, quantity: 8 },
            { price: 46.2, quantity: 3 },
            { price: 46.13, quantity: 12 },
            { price: 46.12, quantity: 1 },
            { price: 46.11, quantity: 56 },
            { price: 46.1, quantity: 40 },
            { price: 46.01, quantity: 5 },
            { price: 46, quantity: 109 },
            { price: 45.99, quantity: 1 },
            { price: 45.71, quantity: 30 },
            { price: 45.6, quantity: 1 },
            { price: 45.59, quantity: 1 } ],
    asks:
        [ { price: 47.5, quantity: 624 },
            { price: 47.55, quantity: 2 },
            { price: 47.56, quantity: 1033 },
            { price: 47.58, quantity: 200 },
            { price: 47.65, quantity: 5 },
            { price: 47.66, quantity: 353 },
            { price: 47.9, quantity: 20 },
            { price: 48, quantity: 17 },
            { price: 48.15, quantity: 157 },
            { price: 48.2, quantity: 5 },
            { price: 48.25, quantity: 6 },
            { price: 48.4, quantity: 11 },
            { price: 48.41, quantity: 20 },
            { price: 48.5, quantity: 22 },
            { price: 48.59, quantity: 1 },
            { price: 48.65, quantity: 26 },
            { price: 48.7, quantity: 14 },
            { price: 48.84, quantity: 29 },
            { price: 48.85, quantity: 20 },
            { price: 48.87, quantity: 1 },
            { price: 48.88, quantity: 10 },
            { price: 48.9, quantity: 17 },
            { price: 48.95, quantity: 1 },
            { price: 49, quantity: 177 },
            { price: 49.05, quantity: 77 },
            { price: 49.08, quantity: 20 },
            { price: 49.1, quantity: 15 },
            { price: 49.12, quantity: 15 },
            { price: 49.13, quantity: 1 },
            { price: 49.2, quantity: 60 },
            { price: 49.22, quantity: 309 },
            { price: 49.25, quantity: 84 },
            { price: 49.3, quantity: 115 },
            { price: 49.32, quantity: 1 },
            { price: 49.34, quantity: 1 },
            { price: 49.35, quantity: 19 },
            { price: 49.37, quantity: 5 },
            { price: 49.39, quantity: 3 },
            { price: 49.4, quantity: 21 },
            { price: 49.41, quantity: 1 },
            { price: 49.42, quantity: 2 },
            { price: 49.43, quantity: 10 },
            { price: 49.45, quantity: 76 },
            { price: 49.49, quantity: 19 },
            { price: 49.5, quantity: 87 },
            { price: 49.53, quantity: 1 },
            { price: 49.6, quantity: 103 },
            { price: 49.61, quantity: 1 },
            { price: 49.62, quantity: 9 },
            { price: 49.64, quantity: 2 } ]}];

exports.setDom = async (bids, asks, ticker, i) => {

    await Dom.create(
        {
            hash: md5(Date.now()),
            date: Date.now(),
            ticker: ticker,
            bids: [
                {hash: md5(Date.now()), priceH: 'fff'}
            ]});
/*Dom.create(dom)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the Tutorial."
    });
});*/

    Doms.push({id: i, ticker: ticker, bids: bids, asks: asks})

};

exports.setOrderBook = async (orderBook, iterator, ticker) => {
    await OrderBook.create({
        hash: md5(Date.now()),
        date: Date.now(),
        iterator: iterator,
        ticker: ticker,
        data: orderBook
    })
};

exports.getDom = (req, res) => {
    res.send({
        url: 'domsJsom',
        status: 200,
        doms: Doms
    })
};

exports.getDomByID = (id) => {
    return Doms[id]
};










