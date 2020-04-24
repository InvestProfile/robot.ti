
const Dom = require('./dom');

exports.getFrame = async (settings, api, i) => {

    const { figi } = await api.searchOne({ ticker: settings.ticker });

    const OrderBook = await api.orderbookGet({ figi, depth: settings.depth });
    console.log('________________________________ Set DOM: ' + i + ' ________________________________\n');
    console.log(await Dom.setDom({bids: OrderBook.bids, asks: OrderBook.asks, ticker: settings.ticker, i}));
    console.log('________________________________ End Frame: ' + i + ' ________________________________\n');

    console.log('________________________________ Set OrderBook: ' + i + ' ________________________________\n');
    console.log(await Dom.setOrderBook({OrderBook, ticker: settings.ticker, i}));
    console.log('________________________________ End OrderBook: ' + i + ' ________________________________\n');

    return {
        OrderBook
    }

};
