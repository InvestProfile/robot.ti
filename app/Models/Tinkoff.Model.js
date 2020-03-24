
const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

const checkAPI = async (connectAPI) => {

    console.log((connectAPI.api.secretToken===undefined && connectAPI.apiSandbox.sandboxToken===undefined)?'TOKENs does not it works':'TOKENs it works');

    console.log('secretToken: ' + ((connectAPI.api.secretToken===undefined)?' unset':' set'));
    console.log('sandboxToken: ' + ((connectAPI.apiSandbox.sandboxToken===undefined)?' unset':' set'));

    return ((connectAPI.api.secretToken===undefined && connectAPI.apiSandbox.sandboxToken===undefined)?500:200);
};


const trade = async (api, settings, i) => {
    console.log('trade: ' + i);
    if (settings.mode == '') {}
    else {
        await api.sandboxClear();
    }
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
    sandboxToken: process.env.SANDBOX_TOKEN // токен для сандбокса
});



