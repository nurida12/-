let fruits = ['apple', 'banana', 'cherry', 'pineapple'];
//always second
fruits[1] = 'blueberry'
console.log(fruits);

//каждый созди отдельно фруит деген созбен жазды
fruits.forEach(function(fruit) {
    console.log("fruit: ", fruit);
    
})

//барлык создерди улкен ариппен жазды
let uppercasedFruits = fruits.map(function(fruit){
    return fruit.toUpperCase();
})


console.log(uppercasedFruits);

//5әріптен больше сөздер
let filteredFruits = fruits.filter(function(fruit){
  return fruit.length > 5; 
})

console.log(filteredFruits);

