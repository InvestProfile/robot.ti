
require('./Models/Tinkoff.Model');

const indexController = require('./Controllers/Index.Controller');
const mlController = require('./Controllers/ML.Controller');

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', indexController);
app.use('/ml', mlController);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));

