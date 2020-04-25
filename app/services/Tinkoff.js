
const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

const Frame = require('./Frame');

const Settings = require('../ti.settings/ti.settings');
let settings = Settings.getSettings();

const frame = async (api, i) => {
    console.log('++++++++++++++++++++++++++++++++ Start Frame: ' + i + ' ++++++++++++++++++++++++++++++++');

    for (let ticker=0; ticker<settings.ticker.length; ticker++) {
        console.log(await Frame.getFrame(settings, api, i, settings.ticker[ticker]));
    }

    console.log('-------------------------------- End Frame: ' + i + ' --------------------------------')
};

const run = async (api) => {
    (timer = (i) => {setInterval(async () => await frame(api, i++), settings.interval)})(0);
};

const checkApiURL = async (token) => {
    return ((token===undefined)?500:200);
};

(async (settings) => {

    checkApiURL(settings.secretToken).then((result) => {console.log('CHECK secretToken: ' + (result?'true':'false'))});
    checkApiURL(settings.sandboxToken).then((result) => {console.log('CHECK sandboxToken: ' + (result?'true':'false'))});

    switch (settings.mode) {
        case '':        {await run(new OpenAPI({ apiURL: settings.apiURL,        secretToken: settings.secretToken,     socketURL: settings.socketURL }));}
        case "sandbox": {await run(new OpenAPI({ apiURL: settings.sandboxApiURL, secretToken: settings.sandboxToken,    socketURL: settings.socketURL }));}
    }

})(settings);



