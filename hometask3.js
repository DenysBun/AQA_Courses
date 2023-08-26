// let x = 5; let y = 5; Use the addition assignment (*=) operator that will result in x being 25 (same as x = x * y).
let x = 5
let y = 5
x *= y 
console.log(x)

// create new variable 'let1' in lower case.
let newV = "let1"

//Update value 'let1' to upper case. 

let newVUpper = newV.toUpperCase()

console.log(newVUpper)

//Create another variable with few words and contain 'let1'. use method replace to word 'BANG'

let newPhrase  = ` Hello world ${newV}`
 newPhrase = newPhrase.replace(newV, "BANG1")
console.log(newPhrase)


//create comparison operator to log true, when x is NOT equal to y.

console.log(x!=y)

// create variable with using addition assignment (+=) for two numbers
let num1 = 100 
let num2 = 150 
num1 += num2
console.log(num1)

//create variable that should be 'false' with using equality operator

console.log(x==y)