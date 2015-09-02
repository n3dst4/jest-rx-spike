
// this doesn't help
//jest.dontMock('rx');

// this does fix the problem
//jest.autoMockOff()

// this line causes the SyntaxError
var Rx = require("rx");

// see above
//jest.autoMockOn();
