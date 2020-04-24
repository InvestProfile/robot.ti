
const Dom = require('./dom');

exports.getFrame = async (settings, api, i) => {

    const { figi } = await api.searchOne({ ticker: settings.ticker });

    //OrderBook
    const OrderBook = await api.orderbookGet({ figi, depth: settings.depth });
    //console.log('________________________________ Set DOM: ' + i + ' ________________________________\n');
    await Dom.setDom(OrderBook.bids, OrderBook.asks, settings.ticker, i);
    //console.log('________________________________ End Frame: ' + i + ' ________________________________\n');

    //console.log('________________________________ Set OrderBook: ' + i + ' ________________________________\n');
    await Dom.setOrderBook(OrderBook, settings.ticker, i);
    //console.log('________________________________ End OrderBook: ' + i + ' ________________________________\n');

    return {
        OrderBook
    }

};
