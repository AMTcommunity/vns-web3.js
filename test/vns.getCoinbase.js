var testMethod = require('./helpers/test.method.js');

var method = 'getCoinbase';


var tests = [{
    result: '0x47d33b27bb249a2dbab4c0612bf9caf4c1950855',
    formattedResult: '0x47d33b27bb249a2dbab4c0612bf9caf4c1950855',
    call: 'vns_coinbase'
}];


testMethod.runTests('vns', method, tests);
