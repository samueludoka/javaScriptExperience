
const prompt = require("prompt-sync")();

function sale(salesCal) {
    const soldSales = prompt("Enter item sold for the week and enter -1 to end: ");
    let sum = 0;
    let percent = 0;
    let count = 0;

    while(soldSales != 0){
        const soldSales = prompt("Enter item sold for the week and enter -1 to end: ");
        sum =+ soldSales;
        count =+1;
        percent = percent + sum * 0.09;
    }
    amount = percent + 200;
    return amount;
}
console.log(amount)
module.exports = {sale}