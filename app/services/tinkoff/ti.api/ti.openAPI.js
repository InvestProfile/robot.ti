
const OpenAPI = require('@tinkoff/invest-openapi-js-sdk');
const settings = require('../ti.settings/ti.settings').getSettings();

exports.getOpenAPI = (sandbox) => {
    if (sandbox && settings.sandboxToken)   return new OpenAPI({ apiURL: settings.sandboxApiURL, secretToken: settings.sandboxToken,    socketURL: settings.socketURL });
    else if (settings.secretToken)          return new OpenAPI({ apiURL: settings.apiURL, secretToken: settings.secretToken, socketURL: settings.socketURL });
};