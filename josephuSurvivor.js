function josephusSurvivor(n,k){
    const arr = Array.from({length: n}, (_, index) => index + 1);
    let i=0

    console.log(arr)
    while(arr.length>1)
    {
        if(arr.length==2)
        {
            i=1
        }
        else if(i<arr.length)
        {
            i+=(k-1)
            if(i>(arr.length-1))
                i=i-arr.length
        }
        else if(i==arr.length){
            i=0
            i+=(k-1)
        }
        else    
            i=i-arr.length    
    
        arr.splice(i,1)    
    }
    return arr
}

//   NOT WORKINGG

josephusSurvivor(7,3)