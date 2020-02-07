var chai = require('chai');
var assert = chai.assert;
var Vns = require('../packages/web3-vns');

var vns = new Vns();

var setValue = 123;

describe('web3.vns', function () {
    describe('defaultBlock', function () {
        it('should check if defaultBlock is set to proper value', function () {
            assert.equal(vns.defaultBlock, 'latest');
            assert.equal(vns.personal.defaultBlock, 'latest');
            assert.equal(vns.Contract.defaultBlock, 'latest');
            assert.equal(vns.getCode.method.defaultBlock, 'latest');
        });
        it('should set defaultBlock for all sub packages is set to proper value, if Vns package is changed', function () {
            vns.defaultBlock = setValue;

            assert.equal(vns.defaultBlock, setValue);
            assert.equal(vns.personal.defaultBlock, setValue);
            assert.equal(vns.Contract.defaultBlock, setValue);
            assert.equal(vns.getCode.method.defaultBlock, setValue);
        });
    });
});

