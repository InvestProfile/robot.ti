exports.getSigmoid = () => {

    const brain = require('brain.js');

    const config = {
        binaryThresh: 0.5,
        hiddenLayers: [4], // array of ints for the sizes of the hidden layers in the network
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

    const output = net.run([0, 1]); // [0.987]


    console.log(output);

    return {
        name: 'djopus',
        phone: '+7(911)0070108',
        output
    }
};