
const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

const checkAPI = async (connectAPI) => {

    console.log((connectAPI.api.secretToken===undefined && connectAPI.apiSandbox.sandboxToken===undefined)?'TOKENs does not it works':'TOKENs it works');

    console.log('secretToken: ' + ((connectAPI.api.secretToken===undefined)?' unset':' set'));
    console.log('sandboxToken: ' + ((connectAPI.apiSandbox.sandboxToken===undefined)?' unset':' set'));

    return ((connectAPI.api.secretToken===undefined && connectAPI.apiSandbox.sandboxToken===undefined)?500:200);
};


const govno = async (api, ticker) => {

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

};


const trade = async (api, settings, i) => {
    console.log('START TRADE: ' + i);

    if (settings.mode == '') {

    }
    else {
        //await api.sandboxClear();
        await govno(api, settings.ticker)
    }

    console.log('END TRADE: ' + i + '\n ______________________________________________________________')
};


const start = async (settings, api) => {
    (timer = (i) => {setInterval(async () => await trade(api, settings, i++), settings.interval)})(1);
};


(async (settings) => {

    const connectAPI = {
        api: {
            apiURL: settings.apiURL,
            secretToken: settings.secretToken
        },
        apiSandbox: {
            sandboxApiURL: settings.sandboxApiURL,
            sandboxToken: settings.sandboxToken
        },
    };

    checkAPI(connectAPI).then((result) => {console.log('CHECK TOKENs: ' + result)});

    const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';

    switch (settings.mode) {
        case '': {await start(settings, new OpenAPI({ apiURL: connectAPI.api.apiURL, secretToken: connectAPI.api.secretToken, socketURL }));}
        case "sandbox": {await start(settings, new OpenAPI({ apiURL: connectAPI.apiSandbox.sandboxApiURL, secretToken: connectAPI.apiSandbox.sandboxToken, socketURL }));}
    }

    console.log('Tinkoff settings, set mode: "' + settings.mode + '", set interval: ' + settings.interval + '\n ______________________________________________________________');

})({
    mode: 'sandbox',
    interval: 1000,
    apiURL: 'https://api-invest.tinkoff.ru/openapi',
    secretToken: process.env.TOKEN,  // токен для боевого api
    sandboxApiURL: 'https://api-invest.tinkoff.ru/openapi/sandbox',
    sandboxToken: process.env.SANDBOX_TOKEN, // токен для сандбокса
    ticker: 'AMD' //AAPL
});



