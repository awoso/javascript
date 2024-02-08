const creditLimit = ((accountNumber, balanceBeginning, totalItemsCharged, totalCreditApplied, allowedLimit) => {
    let result = balanceBeginning + totalItemsCharged  - totalCreditApplied;
    var str = ""
    str+=result;
    if (result > allowedLimit) {
        str += " \nCredit Exceed Limit"
        return  str
    }else if(result < allowedLimit){
            return str
    }
})

console.log(creditLimit(12, 234, 123, 43, 500))
module.exports = {creditLimit}