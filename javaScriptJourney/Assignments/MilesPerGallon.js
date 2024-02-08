const prompt = require("prompt-sync")();
function calculatMile(miles){

    // let miles = prompt("Enter numbers of miles driven: ");
    // let gallon = prompt("Enter number of gallon used: ");
    let counter = 1;
    while(miles&&gallon != -1){
    
    let miles = prompt("Enter numbers of miles driven" + (counter+1)+":");
    let gallon = prompt("Enter number of gallon used" + (counter+1)+":");
    let toy = miles/ gallon;
    let total =+ toy
    // console.log(total) 
    }
    return total

}
module.exports = {calculatMile};
    