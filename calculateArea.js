// Function exercise to calculate the surface area of different shapes

//SA(surface area) of rectangle function
function calculateRectangleArea(length, width){

  //check if parameters are 0 or negative values
  if (length <= 0 || width <= 0){
    return undefined;

  }else{
    //equation to get SA of a rectangle = length * width
    let sa = (length * width);

    return sa;

  }

}

//SA(surface area) of triangle function
function calculateTriangleArea(base, height){
  
  //check if parameters are 0 or negative values
  if (base <= 0 || height <= 0){
    return undefined;

  }else{
    //equation to get SA of a triangle = (base * height) / 2
    let sa = (base * height) / 2;

    return sa;

  }
  
}

//SA(surface area) of circle function
function calculateCircleArea(radius){
  
  //check if parameters are 0 or negative values
  if (radius <= 0){
    return undefined;

  }else{

    //equation to get SA of rectangle = PI * radius^2
    let sa = Math.PI * Math.pow(radius, 2);

    return sa;

  }
  
}


console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined