// Set of cards
// A set always consists of three cards. 
// The set is considered valid if, and only if, every property of the card is either the same as the other two cards, 
// or distinct from the other two. Properties include the three features mentioned above plus the quantity of symbols.
// set always contains 3 cards
// 

// Input is 4 arrays
// quantities contain => number of symbols on each card
// [1,2,3], ["diamond","snake","capsule"], ["green","blue","red"], ["blank","striped","solid"]

function isValidSet(quantities, shapes, colours, patterns) {
  if( (allElementsSame(quantities) || allElementsDifferent(quantities) )&& 
      (allElementsSame(shapes)|| allElementsDifferent(shapes)) && (allElementsSame(colours)||allElementsDifferent(colours)) && (allElementsSame(patterns) || allElementsDifferent(patterns) ) )
    return true
  else 
    return false  
}



// a function that checks if all elements of an array are same
function allElementsSame(arr)
{
  console.log(arr) 
  value=arr.every( (val, i, arr) => val === arr[0] ) 
  console.log("Same?")
  console.log(value)
  return value
}

// a function that checks if all elements of an array are different
function allElementsDifferent(arr)
{
    value= new Set(arr).size == arr.length // we will make a set and if the length of array and size of set is same it means every element is different.
    console.log(arr) 
    console.log("different?")
    console.log(value)
    return value
}

// finalAns=isValidSet([1,2,3], ["diamond","snake","capsule"], ["green","blue","red"], ["blank","striped","solid"])
finalAns=isValidSet([1,1,1], ["capsule","diamond","snake"], ["red","red","red"], ["striped","blank","solid"])
// finalAns=isValidSet([3,1,2], ["diamond","capsule","snake"], ["blue","green","red"], ["solid","solid","solid"])
// finalAns=isValidSet([1,2,1], ["diamond","diamond","snake"], ["blue","red","red"], ["blank","blank","striped"])

console.log("-----------------------------------")
console.log(finalAns)
// arr=["a","c","b"]
// allElementsSame(arr)
// allElementsDifferent(arr)
