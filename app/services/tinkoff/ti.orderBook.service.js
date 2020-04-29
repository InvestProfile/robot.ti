
const api = require('./ti.api/ti.openAPI').getOpenAPI('sendbox');

exports.getOrderBook = async (ticker, depth) => {
    const {figi} = await api.searchOne({ticker: ticker});
    return await api.orderbookGet({figi, depth: depth});
};