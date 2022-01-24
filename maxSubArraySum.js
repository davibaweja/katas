// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function(arr){
    let i=0
    let j=0
    let finish=false
    let sumFinal=0
    let sum=0

    while (j<arr.length)
    {
        if(i==j && arr[i]<0)
        {
            i+=i
            j+=j
        }

        sum+=arr[j]
        j+=1
        
    }
   
    
}