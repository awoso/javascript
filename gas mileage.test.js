const {gasMillage} = require("./GasMillage")
test("gas millage", () =>{
    let miles = 19;
    let gallon = 8;
    let times = 2;
    let result =  gasMillage(miles, gallon,  times)
    expect(result).toBe(2.375)
    })