var testMethod = require('./helpers/test.method.js');

var method = 'isMining';
var call = 'vns_mining';

var tests = [{
    result: true,
    formattedResult: true,
    call: call
}];


testMethod.runTests('vns', method, tests);
