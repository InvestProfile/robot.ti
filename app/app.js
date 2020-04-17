
require('./models/Tinkoff');

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
app.use('/sigmoid', require('./controllers/Sigmoid'));
app.use('/dom', require('./controllers/Dom'));
app.use('/db', require('./controllers/DB'));

//HTTP-server
app.listen(port, () => console.log(`App listening on port ${port}`));

