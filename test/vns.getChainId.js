var testMethod = require('./helpers/test.method.js');

var method = 'getChainId';
var methodCall = 'vns_chainId';

var tests = [{
    result: '0x01',
    formattedResult: 1,
    call: methodCall
}];


testMethod.runTests('vns', method, tests);

