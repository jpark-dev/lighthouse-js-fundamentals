/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here

let initCount = 60;


while (initCount >= 0){
    
    let msg = "";
    
    if (initCount === 50){
        msg += "Orbiter transfers from ground to internal power";
        
    }else if (initCount === 31){
        msg += "Ground launch sequencer is go for auto sequence start";
        
    }else if (initCount === 16){
        msg += "Activate launch pad sound suppression system";
        
    }else if (initCount === 10){
        msg += "Activate main engine hydrogen burnoff system";
        
    }else if (initCount === 6){
        msg += "Main engine start";
        
    }else if (initCount === 0){
        msg += "Solid rocket booster ignition and liftoff!";
        
    }else{
        msg += "T-";
        msg += initCount;
        msg += " seconds";
    }
    
    console.log(msg);
    
    initCount = initCount - 1;
}