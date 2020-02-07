var chai = require('chai');
var assert = chai.assert;
var Vns = require('../packages/web3-vns');
var Web3 = require('../packages/web3');

var vns = new Vns();

var setValue = '0x47D33b27Bb249a2DBab4C0612BF9CaF4C1950855';

describe('web3.vns', function () {
    describe('defaultAccount', function () {
        it('should check if defaultAccount is set to proper value', function () {
            assert.equal(vns.defaultAccount, null);
            assert.equal(vns.personal.defaultAccount, null);
            assert.equal(vns.Contract.defaultAccount, null);
            assert.equal(vns.getCode.method.defaultAccount, null);
        });
        it('should set defaultAccount for all sub packages is set to proper value, if Vns package is changed', function () {
            vns.defaultAccount = setValue;

            assert.equal(vns.defaultAccount, setValue);
            assert.equal(vns.personal.defaultAccount, setValue);
            assert.equal(vns.Contract.defaultAccount, setValue);
            assert.equal(vns.getCode.method.defaultAccount, setValue);
        });
        it('should fail if address is invalid, wich is to be set to defaultAccount', function () {

            assert.throws(function(){ vns.defaultAccount = '0x17F33b27Bb249a2DBab4C0612BF9CaF4C1950855'; });

        });
        it('should have different values for two Vns instances', function () {

            var eth1 = new Vns();
            eth1.defaultAccount = setValue;
            assert.equal(eth1.defaultAccount, setValue);

            var eth2 = new Vns();
            assert.equal(eth2.defaultAccount, null);

        });
        it('should have different values for two Web3 instances', function () {

            var web31 = new Web3();
            web31.vns.defaultAccount = setValue;
            assert.equal(web31.vns.defaultAccount, setValue);

            var web32 = new Web3();
            assert.equal(web32.vns.defaultAccount, null);

        });
    });
});

