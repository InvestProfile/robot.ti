
const OrderBook = require('./ti.orderBook.service');
const Dom = require('../dom.service');
const settings = require('./ti.settings/ti.settings').getSettings();

(() => {((i) => {setInterval( () => step(i++), settings.interval)})(0)})();

const step = async (i) => {
    for (let t = 0; t < settings.ticker.length; t++) {
        console.log(i + "step" + settings.ticker[t]);
        await Dom.setOrderBook(await OrderBook.getOrderBook(settings.ticker[t], settings.depth), i, t);
    }
};