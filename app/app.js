const express = require('express');
const indexController = require('./Controllers/IndexController');
const glassController = require('./Controllers/GlassController');
const userController = require('./Controllers/UserController');
const mlController = require('./Controllers/MLController');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', indexController);
app.use('/glass', glassController);
app.use('/user', userController);
app.use('/ml', mlController);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));

