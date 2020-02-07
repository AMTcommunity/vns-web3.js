var testMethod = require('./helpers/test.method.js');

var method = 'getWork';

var tests = [{
    args: [],
    formattedArgs: [],
    result: true,
    formattedResult: true,
    call: 'vns_'+ method
}];

testMethod.runTests('vns', method, tests);

