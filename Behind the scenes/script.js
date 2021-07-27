'use strict';
// const lastName = "Balzac" //Global scope 

// function calcAge (birthYear){
//     const age = 2021 - birthYear
    
//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}` 
//         console.log(output)

//         if (birthYear >= 1981 && birthYear <= 1996){
//             var millenial = true
//             // Creating NEW variable with same name as outer scope's variable
//             const firstName = 'Steven'
            
//             //Reassigning outer scope's in inner scopes 
//             output =  "NEW OUTPUT"

//             const string = `Oh and you're millenial ${firstName}`
//             console.log(string)

//             function add(a, b) {
//                 return a + b
//             }
           

            

//             // console.log(add(2, 3))
//             console.log(output)
//             console.log(millenial)
           
//         }
        
        
//     }
//     printAge()

//     return age

// }



// const firstName = "Joseph" //"Global scope"
// calcAge(1985)



//Hoisting with variables

// console.log(me)
// console.log(job)
// console.log(year)

// var me = 'Joseph'
// let job = 'teacher'
// const year = 1991

// Hoisting Functions 
// console.log(addDecl(2, 3))


// function addDecl(a, b) {
//     return a + b 
// }

// var addExpr = function (a, b) {
//     return a + b
// }

// console.log(addExpr(6, 9))
  


// const addArrow = (a, b) => a + b

// console.log(addArrow(4, 20))


// //Example 

// if (!numProducts) deleteShoppingCart()

// var numProducts = 10

// function deleteShoppingCart() {
//     console.log('All products deleted!')
// }

// var x = 1
// let y = 2
// const z = 3

// console.log(x === window.x)
// console.log(y === window.y)
// console.log(z === window.z)

// console.log(this)

// const calcAge = function (birthYear) {
//     // console.log(2037 - birthYear)
//     // console.log(this)
// }

// calcAge(1981)

// const calcAgeArrow = birthYear => {
//     // console.log(2037 - birthYear)
//     // console.log(this)
// }

// calcAgeArrow(1985)


// const jonas = {
//     year: 1985,
//     calcAge: function() {
//         console.log(this)
//         console.log(2037 - this.year)
//     }
// }
// jonas.calcAge()


// const maltida = {
//     year: 2021,
// }
// maltida.calcAge = jonas.calcAge
// maltida.calcAge()

// const f  = jonas.calcAge
// f()


// var firstName = "Maltida"

// const jonas = {

//     firstName: 'Joseph',
//     year: 1985,
//     calcAge: function() {
//         // console.log(this)
//         console.log(2037 - this.year)

//         //Solution 1
//         // const self = this // self or that   
//         // const isMillenial = function () {
//         //     console.log(self)
//         //     console.log(self.year >= 1981 && self.year <= 1996)
//         // }
       
//         // Solution 2   
//         const isMillenial = () => {
//             console.log(this)
//             console.log(this.year >= 1981 && this.year <= 1996)
//         }
//         isMillenial()
//     },

//     greet: () => {
//         console.log(this)
//         console.log(`Hey ${this.firstName} you were born in ${this.year} and now you are`)
//     }
// }
// jonas.greet()
// jonas.calcAge()

// arguments keyword 

// let age = 30 
// let oldAge = age
// age = 31
// console.log(age)
// console.log(oldAge)


// const me =  {
//     name: 'Jonas',
//     age: 30 
// }
// console.log(this.age)

// const friend = me 
// friend.age = 27
// console.log('Friend', friend)
// console.log('Me', me)

//Primitive types
let lastName = "Williams"
let oldLastName = lastName
lastName = "Davis"
console.log(lastName, oldLastName)

//Reference types 
const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27
}

const marriedJessica = jessica
marriedJessica.lastName = 'Davis'
// console.log('Before marriage:', jessica)
// console.log('After marriage:', marriedJessica )
// marriedJessica = {}

// Copying objects
const jessica2 = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27, 
    family: ['Alice', 'Bob'],
}

const jessicaCopy = Object.assign({}, jessica2)
jessicaCopy.lastName = 'Davis'

jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')

console.log('Before marriage:', jessica2)
console.log('After marriage:', jessicaCopy)