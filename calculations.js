

function zero(input)
{
    if (input == undefined)
    {
        return 0
    }
    else
    {
        inputArray=input.split("")
        if (inputArray[0]=="*")
        {
            return 0*parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="+"){
            return 0+parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="-"){
            return 0-parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="/"){
            return Math.floor(0/parseInt(inputArray[1]));
        }
    }
}


function one(input)
{
    if (input == undefined)
    {
        return 1
    }
    else
    {
        inputArray=input.split("")
        if (inputArray[0]=="*")
        {
            return 1*parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="+"){
            return 1+parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="-"){
            return 1-parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="/"){
            return Math.floor(1/parseInt(inputArray[1]));
        }
    }
}

function two(input)
{
    if (input == undefined)
    {
        return 2
    }
    else
    {
        inputArray=input.split("")
        if (inputArray[0]=="*")
        {
            return 2*parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="+"){
            return 2+parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="-"){
            return 2-parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="/"){
            return Math.floor(2/parseInt(inputArray[1]));
        }
    }
}

function three(input)
{
    if (input == undefined)
    {
        return 3
    }
    else
    {
        inputArray=input.split("")
        if (inputArray[0]=="*")
        {
            return 3*parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="+"){
            return 3+parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="-"){
            return 3-parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="/"){
            return Math.floor(3/parseInt(inputArray[1]));
        }
    }
}

function four(input)
{
    if (input == undefined)
    {
        return 4
    }
    else
    {
        inputArray=input.split("")
        if (inputArray[0]=="*")
        {
            return 4*parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="+"){
            return 4+parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="-"){
            return 4-parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="/"){
            return Math.floor(4/parseInt(inputArray[1]));
        }
    }
}

function five(input)
{
    if (input == undefined)
    {
        return 5
    }
    else
    {
        inputArray=input.split("")
        if (inputArray[0]=="*")
        {
            return 5*parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="+"){
            return 5+parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="-"){
            return 5-parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="/"){
            return Math.floor(5/parseInt(inputArray[1]));
        }
    }
}

function six(input)
{
    if (input == undefined)
    {
        return 6
    }
    else
    {
        inputArray=input.split("")
        if (inputArray[0]=="*")
        {
            return 6*parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="+"){
            return 6+parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="-"){
            return 6-parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="/"){
            return Math.floor(6/parseInt(inputArray[1]));
        }
    }
}


function seven(input)
{
    if (input == undefined)
    {
        return 7
    }
    else
    {
        inputArray=input.split("")
        if (inputArray[0]=="*")
        {
            return 7*parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="+"){
            return 7+parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="-"){
            return 7-parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="/"){
            return Math.floor(7/parseInt(inputArray[1]));
        }
    }
}







function eight(input)
{
    if (input == undefined)
    {
        return 8
    }
    else
    {
        inputArray=input.split("")
        if (inputArray[0]=="*")
        {
            return 8*parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="+"){
            return 8+parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="-"){
            return 8-parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="/"){
            return Math.floor(8/parseInt(inputArray[1]));
        }
    }
}

function nine(input)
{
    if (input == undefined)
    {
        return 9
    }
    else
    {
        inputArray=input.split("")
        if (inputArray[0]=="*")
        {
            return 9*parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="+"){
            return 9+parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="-"){
            return 9-parseInt(inputArray[1]);
        }
        else if(inputArray[0]=="/"){
            return Math.floor(9/parseInt(inputArray[1]));
        }
    }
}



function times(input)
{
    value= "*"+input.toString()
    return value
}

// console.log(times(7))
function plus(input)
{
    value= "+"+input.toString()
    return value
}

function minus(input)
{
    value= "-"+input.toString()
    return value
}

function dividedBy(input)
{
    value= "/"+input.toString()
    return value
}

// console.log(six(dividedBy(two())))
// console.log(dividedBy(two()))