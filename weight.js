function orderWeight(strng) {
    weightArray=strng.split(" ")
    sumDigitsArray=[]
    weightArray.map(value=>{
        sumDigitsArray.push(sumDigits(value))
    })
    console.log(weightArray)
    console.log(sumDigitsArray)
}

// https://stackoverflow.com/questions/13304543/javascript-sort-array-based-on-another-array

// I can neither make something like => [[103,4],[123,6],[4444,12]]
// Then sort on the basis of 2nd entry
// Use sort function of JS

function sumDigits(number)
{
    arrayNumber=number.split("")
    sum=0
    arrayNumber.map(value=>{
        sum+=parseInt(value)
    })
    // console.log(sum)
    return sum
}

// sumDigits("444")

orderWeight("103 123 4444 99 2000")