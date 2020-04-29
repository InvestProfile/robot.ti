
const api = require('./ti.api/ti.openAPI').getOpenAPI('sandbox');

exports.getOrderBook = async (ticker, depth) => {
    const {figi} = await api.searchOne({ticker: ticker});
    return await api.orderbookGet({figi, depth: (depth)?depth:10});
};