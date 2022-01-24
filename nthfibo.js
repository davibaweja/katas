function fibonacci(n)
{
    if(n==1||n==2)
        return 1
    if(n<1)
        return n    

    return fibonacci(n-1) + fibonacci(n-2)    
}

function nthfibo(n)
{
    return fibonacci(n-1)
}

// console.log(fibonacci(0))
// console.log(fibonacci(1))
// console.log(fibonacci(2))
// console.log(fibonacci(3))
// console.log(fibonacci(4))
// console.log(fibonacci(5))
// console.log(fibonacci(6))
// console.log(fibonacci(7))
// console.log(fibonacci(8))
// console.log(fibonacci(9))
// console.log(fibonacci(10))
// console.log(fibonacci(20))
// console.log(fibonacci(30))


// 0 1 1 2 3 5 8 13 21
// 1 2 3 4 5 6 7 8  9 
// 0 1 2 3 4 5 6 7  8