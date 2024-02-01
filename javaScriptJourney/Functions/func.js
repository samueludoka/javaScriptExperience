function arr(){

}

let newArray = function(){

}

const myArr = () => {
    const sum = 2 + 2;
    console.log(sum)
}
// arrow function;
const myArrw = (x,y) => {
    const sum = x + y;
    console.log(sum)
}
myArrw(2,5)


// function as an argument is called a callback function;
let birthYears = [2000,1972,1999,2001];
let currentYear = 2024;

const getResultArray = (arr, func) =>{
    const result  = [];

    for(let birthYear of arr){
        let value = func(birthYear);
    }
}

const calculateAge = (birthYear) =>{
    let age = currentYear - birthYear;
    return age;
}
let ages = getResultArray(bit)