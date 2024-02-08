const {calculateMile} = require('../../Assignments/MilesPerGallon');

test('divide miles by gallons', () => {
    let gallon = 67;
    let miles = 670;
    let result = calculateMile(miles, gallon);
    expect(result).toBe(10);
});