const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

const apiURL = 'https://api-invest.tinkoff.ru/openapi';
const sandboxApiURL = 'https://api-invest.tinkoff.ru/openapi/sandbox';
const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
const secretToken = process.env.TOKEN || 't.MLM55YptKxCzWiufgQYgNtiCl-VD5eeREbZ1XV_l2wYKW_LKf1sJiGOfnDtwZxc1KdnWCyIc1urNP9KjLOMbtA'; // токен для сандбокса; // токен для боевого api
const sandboxToken = process.env.SANDBOX_TOKEN; // токен для сандбокса

const api = new OpenAPI({ apiURL: apiURL, secretToken: secretToken, socketURL });
const apiSB = new OpenAPI({ apiURL: sandboxApiURL, secretToken: sandboxToken, socketURL });


const ticker = 'AVP'; //AAPL

!(async function run() {
    await apiSB.sandboxClear();
    const { figi } = await api.searchOne({ ticker: ticker });

    console.log('В портфеле: ');
    console.log(await api.instrumentPortfolio({ figi }));

    console.log('Получаем стакан по ' + ticker + ': ');
    const orderbookGet = await api.orderbookGet({ figi, depth: 1 });
    console.log("figi: " + orderbookGet.figi);
    console.log("depth: " + orderbookGet.depth);
    console.log("tradeStatus: " + orderbookGet.tradeStatus);
    console.log("minPriceIncrement: " + orderbookGet.minPriceIncrement);
    console.log("lastPrice: " + orderbookGet.lastPrice);
    console.log("closePrice: " + orderbookGet.closePrice);
    console.log("limitUp: " + orderbookGet.limitUp);
    console.log("limitDown: " + orderbookGet.limitDown);
    console.log("bids: " + orderbookGet.bids);
    console.log("asks: " + orderbookGet.asks);

    /*    console.log(
            await api.candlesGet({
                from:   '2020-01-09T18:38:33.131642+03:00',
                to:     '2020-01-09T18:48:33.131642+03:00',
                figi,
                interval: '1min',
            }) // Получаем свечи за конкретный промежуток времени.
        );*/

    /* api.orderbook({ figi, depth: 10 }, (x) => {
         console.log(x.bids);
     });
     api.candle({ figi }, (x) => {
         console.log(x.h);
     });*/
})();