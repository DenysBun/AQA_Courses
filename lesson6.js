// let obj1 = {name:"Den", lname:"Bunchuk", age: 34}

// console.log(obj1)

// let jsonObj1 = JSON.stringify(obj1)

// console.log(jsonObj1)


// const values = require('./values.json')
 const { error } = require('console')
const fs = require('fs-extra')

// // let jsonObj1 = '{"name":"Den","lname":"Bunchuk","age":34}'
// // let Obj2 = JSON.parse(jsonObj1)
// // console.log(Obj2.name)
// // Obj2.city = "York"
// // console.log(Obj2)
// // jsonObj1= JSON.stringify(Obj2)
// //  console.log(jsonObj1)

// console.log(values)
const path = './values.json'
const newData ={phone: 123123, adress: 'streeet12'}

let readData 
fs.readFile(path, 'utf8', (error, data)=> {
    if(error){
        console.log('Error during reading file')

    } else {
        readData = JSON.parse(data)
    }
    readData.adress='streeet12'
})



fs.writeFile(path, JSON.stringify(readData));
