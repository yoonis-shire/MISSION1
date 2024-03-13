const raw = require('./raw');


//test if model = civic and year = 2014  

test('civic and 2014 = 6614', () => {
    expect(raw("civic", 2014)).toBe(6614);
});

//test case - year can't be a word ** 

test("civic and twenty-twenty = Year can't be a word", () => {
    expect(raw("civic", "twenty-twenty")).toBe("Year can't be a word");
});

//test case - yeaer can't be a negative **

test("civic and -1900 = Year can't be negative", () => {
    expect(raw("civic", -1900)).toBe("Year can't be negative");
});

//test case 2 - car year can't be before 1886

test("car year can't be before 1886", () => {
    expect(raw("civic", 1600)).toBe("Car Year can't be before 1886, when first car was invented");
});

//test case 3 - car year can't be after 2025

test("car year can't be after 2025", () => {
    expect(raw("civic", 2027)).toBe("Car Year can't be after 2025");
});

//test case 4 - year must be a whole number

test("year must be a whole number", () => {
    expect(raw("civic", 2020.8)).toBe("Invalid Year, must be a whole number");
});


