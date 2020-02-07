var chai = require('chai');
var assert = chai.assert;
var u = require('./helpers/test.utils.js');

var Vns = require('../packages/web3-vns');
var vns = new Vns();

describe('vns', function() {
    describe('methods', function() {
        u.methodExists(vns, 'getBalance');
        u.methodExists(vns, 'getStorageAt');
        u.methodExists(vns, 'getTransactionCount');
        u.methodExists(vns, 'getCode');
        u.methodExists(vns, 'isSyncing');
        u.methodExists(vns, 'sendTransaction');
        u.methodExists(vns, 'call');
        u.methodExists(vns, 'getBlock');
        u.methodExists(vns, 'getTransaction');
        u.methodExists(vns, 'getUncle');
        u.methodExists(vns, 'getBlockTransactionCount');
        u.methodExists(vns, 'getBlockUncleCount');
        u.methodExists(vns, 'subscribe');
        u.methodExists(vns, 'Contract');
        u.methodExists(vns, 'Iban');


        u.methodExists(vns, 'isMining');
        u.methodExists(vns, 'getCoinbase');
        u.methodExists(vns, 'getGasPrice');
        u.methodExists(vns, 'getHashrate');
        u.methodExists(vns, 'getAccounts');
        u.methodExists(vns, 'getBlockNumber');

        u.methodExists(vns, 'getProtocolVersion');

        u.methodExists(vns, 'setProvider');
        u.propertyExists(vns, 'givenProvider');
        u.propertyExists(vns, 'defaultBlock');
        u.propertyExists(vns, 'defaultAccount');

        u.propertyExists(vns, 'net');
        u.methodExists(vns.net, 'getId');
        u.methodExists(vns.net, 'isListening');
        u.methodExists(vns.net, 'getPeerCount');

        u.propertyExists(vns, 'personal');
        u.methodExists(vns.personal, 'sendTransaction');
        u.methodExists(vns.personal, 'newAccount');
        u.methodExists(vns.personal, 'unlockAccount');
    });
});

