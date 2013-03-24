var cli = require('../cli');
var assert = require('assert');
var expect = require('expect.js');
var add = require('../add'),
    subtract = require('../subtract'),
    divide = require('../divide'),
    multiply = require('../multiply');

//CLI TESTS
describe('CLI', function() {
	it('should expose a function', function() {
		expect(cli).to.be.a('function');
	});
	it('should reject empty values', function() {
		expect(cli('')).to.not.be.ok();
	});
	it('should reject letters', function() {
		expect(cli('something')).to.not.be.ok();
	});
	
});

//CALCULATOR TESTS
describe('CALCULATOR', function() {
	it('should add numbers', function() {
		expect(cli('3 + 4')).to.eql('7');
	});
	it('should subtract numbers',function() {
		expect(cli('4 - 3')).to.eql('1');
	});
	it('should multiply numbers',function() {
		expect(cli('2 * 6')).to.eql('12');
	});
	it('should divide numbers',function() {
		expect(cli('12 / 4')).to.eql('3');
	});
})