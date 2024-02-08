


const {creditLimit} = require("./CreditLimit")

test("credit limit", () =>{ 
    let accountNumber = 12;
    let beginingBalance = 234;
    let totalItemCharged = 123;
    let totalCreditApplied = 43;
    let allowedLimit = 500;
    let result = creditLimit(accountNumber, beginingBalance, totalItemCharged, totalCreditApplied, allowedLimit)
    expect(result).toBe("314")
    })