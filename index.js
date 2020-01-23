console.log('index start');

const express = require('express')
const userController = require('./app/Controllers/UserController')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use('/user', userController)

app.get('/', (req, res) => {
    res.send({
        title: 'Hello, world!',
        content: 'How are you?'
    })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`App listening on port ${port}`))

