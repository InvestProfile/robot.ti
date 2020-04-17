const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/', require('./controllers'));
app.use('/hash', require('./controllers/hesh.controller'));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App listening on port ${port}`));

//require('./models/index').getModels();




