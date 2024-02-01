
const scores = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


const result = scores.filter(score => score % 2 === 0);
console.log(result);


const newArr = [];
scores.forEach((x) => {
    let result = x * 2;
    newArr.push(result)
    
});
 console.log(newArr);

 const num = scores.map((numb) => numb * numb);
 console.log(num);