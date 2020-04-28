
const settings = require('../tinkoff/ti.settings/ti.settings').getSettings();
const API = require('./ti.openAPI');

(async () => {

    const api = API.getOpenAPI('sendbox');

    console.log(api)

})();