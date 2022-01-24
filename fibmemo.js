// in this we are using recursion with memoization


// conditions to follow
// - if nth fibonacci has already been calculated just return from the array
// - else just calculate it and put it in the array.
function fibonaccimemo(n,arr)
{
   if(arr[n]!=undefined) // it means it has been calculated we wil just use it
    {
        return arr[n]
    }
   else // we will calculate it
    {
        fiboValue=fib(n,arr)
        arr[n]=fiboValue
        return fiboValue
    }
}


// Calculates fibonacci as normals, but we only use it when needed. This function will not be used more than once for a same number.
function fib(n,arr){
    if(n<=1)
        return n
    return fibonaccimemo(n-1,arr) + fibonaccimemo(n-2,arr)
}

// this is the main function that starts the program.
function fibonacci(n)
{
    let arr = new Array(n).fill(undefined)
    arr[0]=0
    arr[1]=1
    arr[2]=1
    return fibonaccimemo(n,arr)
}

console.log(fibonacci(70))