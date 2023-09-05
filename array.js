let arr1 = ['kil','ooo', 343, 'klsjfd', 2390, true, function() {console.log("hello array")}]

// let value = arr1[3]
// console.log(value)


arr1[3]='new'
// console.log(arr1[3])

// console.log(arr1)

// arr1[6]()

// let lARRAY1 = arr1.length
// console.log(lARRAY1)

// console.log(arr1.at(-2))

// for (let i = 0; i < arr1.length; i++){

// //console.log(arr1[i])
// let result = [];

// if (typeof arr1[i] === String){
// result.push(arr1.at(i))

// }
// console.log(result)
// }

async function getOnlyString(baseArr){

let result = [];
resultWithUpperC = [];

for (let i = 0; i < baseArr.length; i++) {
  if (typeof baseArr[i] === 'string') {
    await result.push(baseArr[i])
  }
}
  for (let y = 0; y < result.length; y++){
    let word = result.at(y)
    let firstLetter = await String(word[0]).toUpperCase()
    let restLetters = await String(word.slice(1))
    await resultWithUpperC.push(firstLetter + restLetters)
  }


  console.log(resultWithUpperC)
}
getOnlyString(arr1)


// console.log(result)
// console.log(resultWithUpperC)
