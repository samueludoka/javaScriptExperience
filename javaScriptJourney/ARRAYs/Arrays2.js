
const arr = [1,2,3,4,5,6,7,8,9,10];
const newArr = [];

const result = arr.map((num) => num * num); 
console.log(result)

const ans = arr.filter((x) => x % 2 === 1);
console.log(ans);

const rum = arr.find((x) => x == 7);
console.log(rum);

arr.forEach((num) =>{
    let die = num * 100;
    newArr.push(die);
   
})
console.log(newArr);

