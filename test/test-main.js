var assert = require('assert');
var expect = require('expect.js');
var add = require('../add');
var subtract = require('../subtract');
var multiply = require('../multiply');
var divide = require('../divide');
var sorter = require('../sort');
var cli = require('../cli');

describe('main', function() {
	it('should take inputs', function() {
		expect(cli).to.be.a('function');
	});
	
});
