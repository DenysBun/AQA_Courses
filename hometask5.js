// //create a function that takes one param and inside makes the value Uppercase
// 	if the parameter not string type - console message about the incorrect type of data.

let obj1 = { name: "Den", lname: "Bunchuk", age: 34 };

function convertToUppercase(value) {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else {
    return 'Incorrect data type. Please provide a string.' ; 
  }
}

// // Convert specific properties to uppercase
obj1.name = convertToUppercase(obj1.name);
obj1.lname = convertToUppercase(obj1.lname);
obj1.age=convertToUppercase(obj1.age)

console.log(obj1);

//create js function that add properties for the object, allowing only numbe

function addNumberProperty(obj, propertyName, propertyValue) {
    if (typeof propertyValue === 'number') {
      obj[propertyName] = propertyValue;
    } else {
      console.log(`Property "${propertyName}" must have a numeric value.`);
    }
  }
  
  // Example usage:
  const myObject1 = {};
  
  addNumberProperty(myObject1, 'age', 30); // Adding a valid numeric property
  addNumberProperty(myObject1, 'score', "9"); // Attempt to add a non-numeric property
  
  console.log(myObject1);


  //create JS object with 5 different properties

  const myObject = {
    name: "John",
    age: 30,
    city: "New York",
    isStudent: true,
    hobbies: ["Reading", "Coding", "Traveling"]
  };
  
  console.log(myObject);

  addNumberProperty(myObject, 'age2', 303)

  console.log(myObject)

  //check the function syntax and if some issues propose
  //let sum == function{a, b} (
  //return a + b;
  //)

  let sum = function(a, b) {
    return a + b;
  };

