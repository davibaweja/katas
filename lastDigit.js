

// stackoverflow link => https://stackoverflow.com/questions/45490056/alternate-function-of-math-pow-in-javascript/45490160

var lastDigit = function(str1, str2){  
    number1=parseInt(str1)
    number2=parseInt(str2)
    largeNumber=Math.pow(number1, number2)
    lastDigitRequired=largeNumber%10
    // if(largeNumber==Infinity)
        // lastDigitRequired=0
    console.log(largeNumber)
    console.log(lastDigitRequired)    
    return lastDigitRequired

}

// var lastDigit = function(str1, str2){  
//     number1=parseInt(str1)
//     number2=parseInt(str2)
//     let log10Y=Math.log(number1)*number2/Math.log(10);
// let b = Math.floor(log10Y);
// let a = log10Y-b;
// console.log("Answer: ",10**a," x 10^",b);
// }



//   lastDigit("10","10000000000") 
  lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376")