var add = require('./add'),
    subtract = require('./subtract'),
    divide = require('./divide'),
    multiply = require('./multiply');

process.stdin.resume();
  process.stdin.setEncoding('utf8');
  var util = require('util');
  var arrayOfInputs = [];
  process.stdin.on('data', module.exports = function (text,err) {
    console.log('received data:', text);
    
    //TAKE A LINE OF TEXT and PARSE IT
    
    //Remove new line
    text = text.replace(/(\r\n|\n|\r)/gm,"");

    //separate into components based on ' '
    var splitString = text.split(' ');
    var firstNumber = parseInt(splitString[0]);
    var operator = splitString[1];
    var secondNumber = parseInt(splitString[2]);



    if (isNaN(firstNumber) || isNaN(secondNumber) ) {
      console.log('make sure there is a space!');
      return err;
    }
    console.log(operator);

    if (operator=='+') { 
      console.log(add(firstNumber,secondNumber));
      return add(firstNumber,secondNumber);
    } else if (operator=='-') { 
      console.log(subtract(firstNumber,secondNumber));
      return subtract(firstNumber,secondNumber);
    } else if (operator=='/') { 
      console.log(divide(firstNumber,secondNumber));
      return divide(firstNumber,secondNumber);
    } else if (operator=='*') { 
      console.log(multiply(firstNumber,secondNumber));
      return multiply(firstNumber,secondNumber);
    } else {
      console.log('make sure there is a space between');
    }

    
    
  });

  function done() {
    console.log('Now that process.stdin is paused, there is nothing more to do.');
    process.exit();
  }

  function throwError() {
    //throw new Error('error');
    
  }