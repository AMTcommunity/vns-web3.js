var chai = require('chai');
var assert = chai.assert;
var u = require('./helpers/test.utils.js');
var Vns = require('../packages/web3-vns');
var vns = new Vns();

describe('web3.net', function() {
    describe('methods', function() {
        u.methodExists(vns.net, 'getId');
        u.methodExists(vns.net, 'getNetworkType');
        u.methodExists(vns.net, 'isListening');
        u.methodExists(vns.net, 'getPeerCount');
    });
});
