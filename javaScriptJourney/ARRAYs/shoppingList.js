
const shoppingList = [
    {name: 'Apples',category: 'Fruits', isHealthy: true},
    {name: 'Potato Chips',categories:'Snacks', isHealthy: false},
    {name: 'Carrots', category:'Vegetables',isHealthy: true},
    {name: 'Chocolate Bars', category:'Sweets',isHealthy: false},
    {name: 'Greek Yogurt', category:'Diary',isHealthy: true},
    {name: 'Soda', category:'Beverages',isHealthy: false},



];
const healthyItem = [];

const result = shoppingList.filter((shoppingList) => shoppingList.isHealthy == true);
console.log(result);

result.forEach((isHealthy) => {
    let result1 = isHealthy.name
    healthyItem.push(result1);
    
})
console.log(healthyItem)
