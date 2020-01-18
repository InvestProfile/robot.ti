const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

const apiURL = 'https://api-invest.tinkoff.ru/openapi';
const sandboxApiURL = 'https://api-invest.tinkoff.ru/openapi/sandbox';
const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
const secretToken = process.env.TOKEN; // токен для боевого api
const sandboxToken = process.env.SANDBOX_TOKEN; // токен для сандбокса
const api = new OpenAPI({ apiURL: sandboxApiURL, secretToken: sandboxToken, socketURL });

const ticker = 'AVP'; //AAPL

!(async function run() {
    await api.sandboxClear();
    const { figi } = await api.searchOne({ ticker: ticker });

    console.log('В портфеле: ');
    console.log(await api.instrumentPortfolio({ figi }));

    console.log('Получаем стакан по ' + ticker + ': ');
    console.log(await api.orderbookGet({ figi, depth: 1 }));

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

