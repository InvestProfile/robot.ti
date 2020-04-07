
const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

const Settings = require('./Settings');

let settings = Settings.getSettings();

const checkApiURL = async (token) => {
    return ((token===undefined)?500:200);
};

const getCost = async (api, ticker) => {

    const { figi } = await api.searchOne({ ticker: ticker });


    console.log('Получаем стакан по ' + ticker + ': ');

    //console.log(await api.orderbookGet({ figi })); // получаем стакан

    let orderbookGet = await api.orderbookGet({ figi, depth: 60 });
    //let date = await orderbookGet.json();

    return orderbookGet;

/*    const orderbookGet = await api.orderbookGet({ figi, depth: 1 });

    console.log("figi: " + orderbookGet.figi);
    console.log("depth: " + orderbookGet.depth);
    console.log("tradeStatus: " + orderbookGet.tradeStatus);
    console.log("minPriceIncrement: " + orderbookGet.minPriceIncrement);
    console.log("lastPrice: " + orderbookGet.lastPrice);
    console.log("closePrice: " + orderbookGet.closePrice);
    console.log("limitUp: " + orderbookGet.limitUp);
    console.log("limitDown: " + orderbookGet.limitDown);
    console.log("bids: " + orderbookGet.bids);
    console.log("asks: " + orderbookGet.asks);*/


};


const trade = async (api, settings, i) => {
    console.log('START TRADE: ' + i + ', mode: ' +settings.mode);

    if (settings.mode == '') {

    }
    else {

        let ggg = await getCost(api, settings.ticker);
        console.log(ggg);
    }

    console.log('END TRADE: ' + i + '\n ______________________________________________________________')
};


const runTime = async (settings, api) => {
    (timer = (i) => {setInterval(async () => await trade(api, settings, i++), settings.interval)})(1);
};


(async (settings) => {

    checkApiURL(settings.secretToken).then((result) => {console.log('CHECK secretToken: ' + (result?'true':'false'))});
    checkApiURL(settings.sandboxToken).then((result) => {console.log('CHECK sandboxToken: ' + (result?'true':'false'))});

    switch (settings.mode) {
        case '':  {await runTime(settings, new OpenAPI({ apiURL: settings.apiURL,        secretToken: settings.secretToken,     socketURL: settings.socketURL }));}
        case "sandbox": {await runTime(settings, new OpenAPI({ apiURL: settings.sandboxApiURL, secretToken: settings.sandboxToken,    socketURL: settings.socketURL }));}
    }

    console.log('Tinkoff settings, set mode: "' + settings.mode + '", set interval: ' + settings.interval + '\n ______________________________________________________________');

})(settings);



