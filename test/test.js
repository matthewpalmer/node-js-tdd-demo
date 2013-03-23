var assert = require('assert');
var expect = require('expect.js');
var add = require('../add');
var subtract = require('../subtract');
var multiply = require('../multiply');
var divide = require('../divide');
var sorter = require('../sort');
/*
describe('Array', function() {
	describe('#indexOf',function() {
		it('should return -1 when the value is not present',function() {
			assert.equal(-1, [1,2,3].indexOf(5));
			assert.equal(-1, [1,2,3].indexOf(0));
		});
		it('should return the index when the value is present',function() {
			assert.equal(2, [1,2,3].indexOf(3));
		});

	});
});
*/

//CALCULATOR TESTS - should each of these go in a new file?
describe('add',function() {
	it('should expose a function', function() {
		expect(add).to.be.a('function');
	});
	it ('should add the values', function() {
		expect(add(1,3)).to.equal(4);
	});
});

describe('subtract', function() {
	it('should expose a function', function() {
		expect(subtract).to.be.a('function');
	});
	it ('should subtract the values', function() {
		expect(subtract(5,2)).to.equal(3);
	});
});

describe('multiply', function() {
	it('should expose a function', function() {
		expect(multiply).to.be.a('function');
	});
	it ('should multiply the values', function() {
		expect(multiply(3,4)).to.equal(12);
	});
});

describe('divide', function() {
	it('should expose a function', function() {
		expect(multiply).to.be.a('function');
	});
	it('should divide the values', function() {
		expect(divide(12,4)).to.equal(3);
	});
});

//SORTER TESTS - new file?
describe('sort', function() {
	it('should expose a function',function() {
		expect(sorter).to.be.a('function');
	});
	
	it ('should sort an array', function() {
		expect(sorter([7,4,2,5,1])).to.eql([1,2,4,5,7]);
	});
});