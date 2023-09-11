

const objMy = {name: 'Den', lName : 'Bunchuk '}


// console.log(Object.keys(testDataEnv1))

testDataEnv1.pass = 'Pass1'

// console.log(Object.keys(testDataEnv1))

// console,log(Object.values(testDataEnv1))

for (let data in testDataEnv1){

    console.log(`${data}: ${testDataEnv1[data]}`)
}