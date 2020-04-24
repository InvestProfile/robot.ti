
const Dom = require('./dom.service');

exports.getFrame = async (settings, api, i) => {

    const { figi } = await api.searchOne({ ticker: settings.ticker });

    //OrderBook
    const OrderBook = await api.orderbookGet({ figi, depth: settings.depth });
    await Dom.setOrderBook(OrderBook, settings, i);

    return {
        OrderBook
    }

};
