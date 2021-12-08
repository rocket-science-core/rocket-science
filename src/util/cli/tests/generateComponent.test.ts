const generateComponent = require('../generateComponent/index');

describe('generateComponent cli', () => {
    jest.mock(generateComponent);
    let stdin;
    beforeEach(() => {
        stdin = require('mock-stdin').stdin();
    })

    it('creates a component with default params if no input', async () => {
        generateComponent();
        process.nextTick(() => {
            stdin.send('');
        });
        process.nextTick(() => {
        stdin.send('');
        });
    });

    // it('creates a component with user input', async () => {});

    // it('', async () => {});


});