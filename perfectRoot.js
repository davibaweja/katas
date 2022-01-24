// https://www.codewars.com/kata/54d4c8b08776e4ad92000835/train/javascript

var isPP = function(n){
    squareRoot=Math.sqrt(n)
    afterDecimal=squareRoot%1

    if(afterDecimal!=0)
    {
        return null
    }

    return [squareRoot,2]
}

console.log(isPP(81))