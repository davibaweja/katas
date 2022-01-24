// kata link => https://www.codewars.com/kata/52449b062fb80683ec000024/javascript

function generateHashtag (str) {

    if(str=="")
        return false
    if(str==" ")
        return false

    arr=str.split(" ")
    allSpaces=arr.every(value=>value==="")
    if(allSpaces)
        return false
    hashTag="#"
    arr.map(value=>{
        hashTag+=capitalizeFirstLetter(value)
    })
    console.log(hashTag)
    hashTagArray=hashTag.split("")
    if (hashTagArray.length>140 || hashTagArray.length<=0)
        return false    

    return hashTag
}

generateHashtag(" ".repeat(200))

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}