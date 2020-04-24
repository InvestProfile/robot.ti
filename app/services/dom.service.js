
const {Dom: DomService} = require('../models');
const md5 = require('md5');

exports.setOrderBook = async (orderBook, settings, iterator) => {
    await DomService.create({
        hash: md5(Date.now()),
        date: Date.now(),
        iterator: iterator,
        ticker: settings.ticker,
        orderBookJSON: orderBook,
        figi: orderBook.figi,
        depth: orderBook.depth,
        tradeStatus: orderBook.tradeStatus,
        minPriceIncrement: orderBook.minPriceIncrement * settings.scale,
        lastPrice: orderBook.lastPrice * settings.scale,
        closePrice: orderBook.closePrice * settings.scale,
        limitUp: orderBook.limitUp * settings.scale,
        limitDown: orderBook.limitDown * settings.scale,
        bidsListJSON: orderBook.bids,
        asksListJSON: orderBook.asks,
    })
};










