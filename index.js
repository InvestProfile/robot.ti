console.log('index start');

const brain = require('brain.js');

const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};

const net = new brain.NeuralNetwork(config);

net.train([
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] },
]);

const output = net.run([1, 0]); // [0.987]

console.log(output);






/*const express = require('express')
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
app.listen(port, () => console.log(`App listening on port ${port}`))*/

