
require('./Models/Tinkoff');

const indexController = require('./Controllers');
const mlController = require('./Controllers/Sigmoid');

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', indexController);
app.use('/sigmoid', mlController);
app.use('/dom', mlController);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));

