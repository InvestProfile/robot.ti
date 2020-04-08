
require('./Models/Tinkoff');

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./Controllers'));
app.use('/sigmoid', require('./Controllers/Sigmoid'));
app.use('/dom', require('./Controllers/Dom'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}`));

