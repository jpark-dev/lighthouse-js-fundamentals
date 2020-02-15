//Function exercise to count how many containers(100 counts) can be made form a given pararmeter

function howManyHundreds (num){

  //calculate the remainder (anything below 100 in last 2 digits)
  let numRemainder = (num % 100);

  //calculate how many containers can be filled from the paramter
  let numContainer = (num - numRemainder) / 100;

  //return the value
  return numContainer;  
 
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);   