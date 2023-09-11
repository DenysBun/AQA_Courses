// Create an array with 10 elements
let myArray = Array(1,2,3,4,5,6,7,8,9,10);

// Function to add a value to the array at index 500
function addValueToArrayAtIndex(arr, value, index) {
    if (index >= arr.length) {
        for (let i = arr.length; i <= index; i++) {
            arr.push(undefined);
        }
    }
    arr[index] = value;
}

// Add a value at index 500
addValueToArrayAtIndex(myArray, 42, 500);
console.log(myArray)

// Function to create two new arrays - one with string elements only, another with numbers
function splitArray(arr) {
    let stringArray = [];
    let numberArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') {
            stringArray.push(arr[i]);
        } else if (typeof arr[i] === 'number') {
            numberArray.push(arr[i]);
        }
    }

    return [stringArray, numberArray];
}

// Example usage:
let myStringsAndNumbers = ["Hello", 123, "World", 456, "JavaScript", 789, 10, 20, "Node.js", 30];
let [strings, numbers] = splitArray(myStringsAndNumbers);

console.log("Original Array:", myStringsAndNumbers);
console.log("String Array:", strings);
console.log("Number Array:", numbers);
