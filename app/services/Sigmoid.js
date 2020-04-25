exports.getSigmoid = () => {

    const brain = require('brain.js/src/index.js');

    const config = {
        binaryThresh: 0.5,
        hiddenLayers: [4], // array of ints for the sizes of the hidden layers in the network
        activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
        leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
    };

    const net = new brain.NeuralNetwork(config);

    const input = [
        { input: [0, 0], output: [0] },
        { input: [0, 1], output: [1] },
        { input: [1, 0], output: [1] },
        { input: [1, 1], output: [0] },
    ];

    net.train(input);

    const output = net.run([1, 0]); // [0.987]


    console.log(output);

    return {
        input,
        output
    }
};