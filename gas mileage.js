const promt = require("prompt-sync")();
// gasMillage Task
const gasMillage = ((milesDrive, gallonUsed, times) => {
    let res = 0.0
    let count = 0;
    for (let index = 0; index < times; index++) {
        res += milesDrive / gallonUsed
        count++;
    }
    let average = res / count
    return average;
})



// console.log(creditLimit(21, 200, 500, 98, 1000))

module.exports = {gasMillage}
