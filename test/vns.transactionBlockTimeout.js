var chai = require('chai');
var assert = chai.assert;
var Vns = require('../packages/web3-vns');

var vns = new Vns();

var setValue = 123;

describe('web3.vns', function () {
    describe('transactionBlockTimeout', function () {
        it('should check if transactionBlockTimeout is set to proper value', function () {
            assert.equal(vns.transactionBlockTimeout, 50);
            assert.equal(vns.Contract.transactionBlockTimeout, 50);
            assert.equal(vns.getCode.method.transactionBlockTimeout, 50);
        });
        it('should set transactionBlockTimeout for all sub packages is set to proper value, if Vns package is changed', function () {
            vns.transactionBlockTimeout = setValue;

            assert.equal(vns.transactionBlockTimeout, setValue);
            assert.equal(vns.Contract.transactionBlockTimeout, setValue);
            assert.equal(vns.getCode.method.transactionBlockTimeout, setValue);
        });
    });
});

