/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

let num = 99;
let numNext = 98;
const output = " bottles of juice on the wall! ";
const output2 = " bottles of juice! Take one down, pass it around... ";
const output3 = " bottles of juice on the wall!";
const outputPl = " bottle of juice on the wall! ";
const output2Pl = " bottle of juice! Take one down, pass it around... ";
const output3Pl = " bottle of juice on the wall!";

while (num > 0) {
    
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    
    let numNext = num - 1;
    
    if (num === 1){
        console.log(num + outputPl + num + output2Pl + numNext + output3);  
        
    }else if (num === 2){
        console.log(num + output + num + output2 + numNext + output3Pl);
        
    }else{
        console.log(num + output + num + output2 + numNext + output3);
    }
    // decrement num
    num = num - 1;
}