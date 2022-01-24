function dirReduc(arr){
    arr = arr.map(name => name.toLowerCase());
    completed=false
    let i=0
    let j=1
    positions=[]
    while (completed==false)
    {
        opposite=areTheyOppositeDirections(arr[i],arr[j])
        if(opposite)
        {
            positions.push(i)
            positions.push(j)
            i+=2
            j+=2
        }
        else{
            i+=1
            j+=1
        }

        if(i>=arr.length||j>=arr.length) // if one of them is equal to length then it has surpassed the index, then nothing to compare
        {
            if(positions.length==0)  // If no positions were added to this array then it means it is ready to go
            {
                completed=true // while loop terminating here
            }
            else{
                arr=reCreate(arr,positions)
                positions=[]
                i=0
                j=1
            }
        }
    }
    console.log(arr)
    arr = arr.map(name => name.toUpperCase());
    return arr
  }

function areTheyOppositeDirections(direction1,direction2)
{
    if (direction1=="north" && direction2=="south")
        return true
    if (direction1=="south" && direction2=="north")
        return true  
    if (direction1=="east" && direction2=="west")
        return true   
    if (direction1=="west" && direction2=="east")
        return true  
    else
        return false     
}

// This function will recreate the array, positions holds the opposite positions, 
// and they will be removed while recreating array in this function.
function reCreate(arr,positions)
{
    finalArray=arr.filter((value,index)=> !positions.includes(index));
    return finalArray
}


// dirReduc(["north","west","east","south","west","north"])
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])

// function checkIndexInPositions(index,positions) { 
//     console.log("function")
//     console.log(index);
//     console.log(positions);
//     if (positions.includes(index)) {
//         // console.log(index);
//         return false;
//     }
//     else
//         return true;    
// }

// arr=[18,19,20,21,22,23,23,24,24]
// positions=[1,2,3]

// reCreate(arr,positions)