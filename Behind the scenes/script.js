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

//Hoisting Functions 
console.log(addDecl(2, 3))


function addDecl(a, b) {
    return a + b 
}

var addExpr = function (a, b) {
    return a + b
}

console.log(addExpr(6, 9))
  


const addArrow = (a, b) => a + b

console.log(addArrow(4, 20))


//Example 

if (!numProducts) deleteShoppingCart()

var numProducts = 10

function deleteShoppingCart() {
    console.log('All products deleted!')
}

var x = 1
let y = 2
const z = 3

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)

