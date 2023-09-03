// revrite to while 

// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
//   }

  let i = 0;
  while (i < 3) {
console.log (`number ${i}!`)
i++
  } 

// create a loop from 0 to 10, inside create a variable 'NotDivide', and assign numbers that can't divide 2
// and console every time that number.
for (let i = 0; i <= 10; i++) {
    if (i % 2 !== 0) { // Check if the number can't be divided by 2
      let NotDivide = i;
      console.log(NotDivide);
    }
  }

  //create loop with condition from 0 to 10, and jump to the next iteration when i is 5.

  for (let i = 0; i <= 10; i++) {
    if (i === 5) {
      continue; // Skip the current iteration when i is 5
    }
    console.log(i);
  }
  //create if/else for checking numbers, if lower than 10 console 'Hello', if higher than 10 console 'Bye'


  let number = 0;
if (number < 10) {
  console.log('Hello');
} else {
  console.log('Bye');
}
