var cli = require('../cli');
var assert = require('assert');
var expect = require('expect.js');

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
	it('should accept numbers', function() {
		expect(cli(32)).to.eql(32);
	})
});