
const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');
const socketURL = 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws';

const checkAPI = async (api) => {

    console.log((api.secretToken===undefined )?'TOKENs does not it works':'TOKENs it works');
    console.log('secretToken: ' + api.secretToken);

    return ((api.secretToken===undefined )?500:200);
};



const start = async (interval, api) => {

    //checkAPI(api).then((result) => {console.log(result)});

    //(timer = (i) => {setInterval(() => console.log(i++), interval)})(1);

    //await api.sandboxClear();

};


(async (mode, interval) => {

    const connectAPI = {
        api: {
            apiURL: 'https://api-invest.tinkoff.ru/openapi',
            secretToken: process.env.TOKEN,  // токен для боевого api
        },
        apiSandbox: {
            apiURL: 'https://api-invest.tinkoff.ru/openapi/sandbox',
            secretToken: process.env.SANDBOX_TOKEN // токен для сандбокса
        },
    };

    switch (mode) {
        case '': {await start(interval, connectAPI.api);}
        case "sandbox": {await start(interval, connectAPI.apiSandbox);}
    }

    console.log('Tinkoff start, set mode: "' + mode + '", set interval: ' + interval);

})('sandbox', 1000);



