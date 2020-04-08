
const Dom = require('./Dom');

exports.getFrame = async (settings, api, i) => {

    const { figi } = await api.searchOne({ ticker: settings.ticker });

    const Frame = await api.orderbookGet({ figi, depth: settings.depth });
    console.log('________________________________ Set DOM: ' + i + ' ________________________________\n');
    console.log(await Dom.setDom({bids: Frame.bids, asks: Frame.asks, i}));
    console.log('________________________________ End Frame: ' + i + ' ________________________________\n')

    return Frame

};
