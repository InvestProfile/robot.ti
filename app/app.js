const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
global.catcher = fn => (...args) => fn(...args).catch(args[2]);
const routes = require('./Controllers');


app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => console.log(`App listening on port ${port}`));

process.on('unhandledRejection', err => {
    console.error('unhandledRejection:', err.message);
    console.error(err);
});
