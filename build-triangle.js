/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
  let line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";

  }
  return line + "\n";
  
  
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(size){
  let height = "";
  for (let k = 1; k <=size; k++){
    height += makeLine(k);
  }
  return height;

  
  
}

// test your code by uncommenting the following line
console.log(buildTriangle(10));