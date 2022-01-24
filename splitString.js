function solution(str){
   arr=str.split("")
   finalArray=[]
   currentValue=""
   i=0;
   j=1;
   while(i<arr.length&&j<arr.length)
   {
       currentValue=arr[i]+arr[j]
       finalArray.push(currentValue)
       i+=2
       j+=2
   }
   if(i<arr.length)
   {
    currentValue=arr[i]+"_"
    finalArray.push(currentValue)
   }
   return finalArray
}

solution("abc")