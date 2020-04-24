
require('./services/Tinkoff');

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//models
const db = require('./models');
db.sequelize.sync().then(()=> {
    console.log('DB created')
});

//controllers
app.use(express.urlencoded({ extended: true }));
app.use('/', require('./controllers'));
app.use('/sigmoid', require('./controllers/sigmoid.controller'));
app.use('/dom', require('./controllers/dom.controller'));

//HTTP-server
app.listen(port, () => console.log(`App listening on port ${port}`));

