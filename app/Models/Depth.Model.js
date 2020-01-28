const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

const apiURL = 'https://api-invest.tinkoff.ru/openapi';
const sandboxApiURL = 'https://api-invest.tinkoff.ru/openapi/sandbox';
const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';
const secretToken = process.env.TOKEN; // токен для боевого api
const sandboxToken = process.env.SANDBOX_TOKEN; // токен для сандбокса

const api = new OpenAPI({ apiURL: apiURL, secretToken: secretToken, socketURL });
const apiSB = new OpenAPI({ apiURL: sandboxApiURL, secretToken: sandboxToken, socketURL });

const ticker = 'AMD'; //AAPL

const run = async () => {
    await apiSB.sandboxClear();
    const { figi } = await api.searchOne({ ticker: ticker });

    console.log('В портфеле: ');
    console.log(await api.instrumentPortfolio({ figi }));

    console.log('Получаем стакан по ' + ticker + ': ');
    const orderbookGet = await api.orderbookGet({ figi, depth: 1 });

    console.log('-----orderbook streem -----')
    api.orderbook({ figi, depth: 10 }, (x) => {
        console.log(x.bids);
    });
    return 'djopus я не знаю что ты тут хочешь вернуть или нет я тебя спрашиваю';
};


exports.getDepth = async () => {
    console.log((process.env.TOKEN===undefined && process.env.SANDBOX_TOKEN===undefined)?'TOKENs it works':'TOKENs does not it works');

    return {
        ticker: ticker,
        run: await run()
    }
};

