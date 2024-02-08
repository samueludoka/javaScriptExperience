const arr = [1,3,4,5,];

arr.forEach((x) => {
    if(x % 2 === 0){
        console.log(x);
    }
});

const arr1 = [1,3,4,5,];
const newArray = [];


arr.forEach((x) => {
    let ans = x * 3;
    newArray.push(ans)
})
console.log(newArray);

// Array.map
const array1 = [1,4,9,16];
const map1 = array1.map((x) => x * 2)
console.log(map1);


// Array.filter
const words = ['spray', 'elite', 'exuberant','destruction','present'];
const result = words.filter((words) => words.length > 6);
console.log(result);

// more map examples
let array = [2,3,5,6,7];
const squareOfNumbers = array.map((num) => num * num);
console.log(squareOfNumbers)


// Array.find()
let array2 = [2,3,5,6,7,2,2];
let number = array2.find((x) => x > 2);
console.log(number);


// Array.findIndex()
let array3 = [2,3,5,6,7,2,2];
let number1 = array2.findIndex((x) => x > 2);
console.log(number1);