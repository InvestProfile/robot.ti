
exports.getSettings = () => {

    const fs = require('fs');
    const path = require('path');
    const file = path.join(__dirname, '.', 'ti.settings.json');
    const json = fs.readFileSync(file);
    const settings = JSON.parse(json);

    return {
        apiURL: 'https://api-invest.tinkoff.ru/openapi',
        secretToken: process.env.TOKEN,  // токен для боевого api
        sandboxApiURL: 'https://api-invest.tinkoff.ru/openapi/sandbox',
        sandboxToken: process.env.SANDBOX_TOKEN, // токен для сандбокса
        socketURL: 'wss://api-invest.tinkoff.ru/openapi/md/v1/md-openapi/ws',
        mode: settings.mode, //secret or sandbox
        interval: settings.interval,
        ticker: settings.ticker, //AAPL
        depth: settings.depth,
        scale: settings.scale
    }
};




