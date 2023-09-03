// //create a function that takes one param and inside makes the value Uppercase
// 	if the parameter not string type - console message about the incorrect type of data.

function convertToUppercase(input) {
    if (typeof input === 'string') {
      return input.toUpperCase();
    } else {
      console.log('Incorrect data type. Please provide a string.');
      return null; 
    }
  }