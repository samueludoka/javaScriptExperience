
 const prompt = require("prompt-sync")();
 const firstName = prompt("what is your fucking firstName name: ")

 console.log(firstName)

const sum = (a,b) =>{
    let ans = a+b;
    return ans;
}

const multiplyElementsByTwo = (arr) =>{
    let newArray = [];
    for(let element of arr){
        let ans = element * 2;
        newArray.push(ans);
         

    }
    return newArray
}

module.exports = {sum,multiplyElementsByTwo};