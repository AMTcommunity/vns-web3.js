var chai = require('chai');
var assert = chai.assert;
var Vns = require('../packages/web3-vns');

var vns = new Vns();

var setValue = 123;

describe('web3.vns', function () {
    describe('transactionPollingTimeout', function () {
        it('should check if transactionPollingTimeout is set to proper value', function () {
            assert.equal(vns.transactionPollingTimeout, 750);
            assert.equal(vns.Contract.transactionPollingTimeout, 750);
            assert.equal(vns.getCode.method.transactionPollingTimeout, 750);
        });
        it('should set transactionPollingTimeout for all sub packages is set to proper value, if Vns package is changed', function () {
            vns.transactionPollingTimeout = setValue;

            assert.equal(vns.transactionPollingTimeout, setValue);
            assert.equal(vns.Contract.transactionPollingTimeout, setValue);
            assert.equal(vns.getCode.method.transactionPollingTimeout, setValue);
        });
    });
});

