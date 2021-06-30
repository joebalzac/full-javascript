// const calcAverage = (a, b, c) => (a + b + c) / 3

// //Test 1
// let scoreDolphins = calcAverage(44, 23, 71)
// let scoreKoalas = calcAverage(65, 54, 49)

// const checkWinner = function(avgDolphins, avgKoalas){
//     if (avgDolphins >= 2 * avgKoalas ){
//         console.log(`Dolphins are the winner! (${avgDolphins} vs ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphins){
//         console.log(`Koalas are the winner! (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log(`Nobody won bunch of losers...`)
//     }
// }

// checkWinner(scoreDolphins, scoreKoalas)

// //Test 2
// scoreDolphins = calcAverage(85, 54, 41)
// scoreKoalas = calcAverage(24, 34, 27)

// checkWinner(scoreDolphins, scoreKoalas)




// function addPlus(x, y) {
//     return x + y
// }

// console.log(addPlus(69, 420))

// function addTogether(x, y, z) {
//     return x + y + z / 3
// }

// console.log(addTogether(46, 54, 89))

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]

console.log(bills, tips, totals)







