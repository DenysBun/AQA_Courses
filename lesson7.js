// ddd.newVAl = 'Myval'
// // fs.writeFileSync(path, JSON.stringify(ddd))

const fs = require ('fs-extra')
const path = './values.json'

async function func1(){

let ddd = await JSON.parse (fs.readFileSync(path, 'utf-8'))
console.log(ddd)
console.log ('hello from async function ')
ddd.dkd ='dkd'
await fs.writeFile(path, JSON.stringify(ddd))

}

func1()


