//Function exercise to count how many containers(100 counts) can be made form a given pararmeter

function howManyHundreds (num){

  // if the paramter is bigger than 100 
  if (num => 100){

    //calculate the remainder (anything below 100 in last 2 digits)
    let numRemainder = (num % 100);

    //calculate how many containers can be filled from the paramter
    let numContainer = (num - numRemainder) / 100;

    //return the value
    return numContainer;  

  // if the paramter is lower than 100 (no container to fill)
  }else{
    
    //return 0 as value
    return 0;
  }
  
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);