
const Dom = require('./dom.service');

exports.getFrame = async (settings, api, i, ticker) => {

    const { figi } = await api.searchOne({ ticker: ticker });

    //OrderBook
    const OrderBook = await api.orderbookGet({ figi, depth: settings.depth });
    await Dom.setOrderBook(OrderBook, settings, i, ticker);

    return {
        OrderBook
    }

};
