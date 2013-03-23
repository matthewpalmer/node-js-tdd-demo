process.stdin.resume();
  process.stdin.setEncoding('utf8');
  var util = require('util');

  process.stdin.on('data', module.exports = function (text,err) {
    console.log('received data:', text);
    

    if (text === 'quit\n') {
      done();
    }
    if (typeof text == 'string') {
      return err;
    }
    if (text==='') {
      return err;
    }
    if (typeof text == 'number') {
      return text;
    }
    
  });

  function done() {
    console.log('Now that process.stdin is paused, there is nothing more to do.');
    process.exit();
  }

  function throwError() {
    //throw new Error('error');
    
  }