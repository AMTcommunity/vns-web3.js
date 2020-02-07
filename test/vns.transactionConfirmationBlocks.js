var chai = require('chai');
var assert = chai.assert;
var Vns = require('../packages/web3-vns');

var vns = new Vns();

var setValue = 123;

describe('web3.vns', function () {
    describe('transactionConfirmationBlocks', function () {
        it('should check if transactionConfirmationBlocks is set to proper value', function () {
            assert.equal(vns.transactionConfirmationBlocks, 24);
            assert.equal(vns.Contract.transactionConfirmationBlocks, 24);
            assert.equal(vns.getCode.method.transactionConfirmationBlocks, 24);
        });
        it('should set transactionConfirmationBlocks for all sub packages is set to proper value, if Vns package is changed', function () {
            vns.transactionConfirmationBlocks = setValue;

            assert.equal(vns.transactionConfirmationBlocks, setValue);
            assert.equal(vns.Contract.transactionConfirmationBlocks, setValue);
            assert.equal(vns.getCode.method.transactionConfirmationBlocks, setValue);
        });
    });
});

