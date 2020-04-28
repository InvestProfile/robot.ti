
const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');

const settings = require('../tinkoff/ti.settings/ti.settings').getSettings();

exports.checkToken = () => {
    return {

    }
};

exports.getOpenAPI = (sendbox) => {

    if (sendbox) {
        return new OpenAPI({ apiURL: settings.sandboxApiURL, secretToken: settings.sandboxToken,    socketURL: settings.socketURL })
    }
    else {
        return new OpenAPI({ apiURL: settings.apiURL, secretToken: settings.secretToken, socketURL: settings.socketURL })
    }
};