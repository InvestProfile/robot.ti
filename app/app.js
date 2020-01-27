const express = require('express');
const indexController = require('./Controllers/Index.Controller');
const glassController = require('./Controllers/Glass.Controller');
const userController = require('./Controllers/User.Controller');
const mlController = require('./Controllers/ML.Controller');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', indexController);
app.use('/glass', glassController);
app.use('/user', userController);
app.use('/ml', mlController);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));

