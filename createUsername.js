// https://www.codewars.com/kata/582a53ed261c2af9d200018c/train/javascript

function addUsername(list) {

    list.map(item=>{
        item.username=createUsername(item.firstName,item.lastName,item.age)
    })

    return list
}

function createUsername(firstName, lastName,age)
{
    let username=""
    firstName=firstName.toLowerCase()
    lastName=lastName.toLowerCase()
    lastNameArray=lastName.split("")
    currentYear= new Date().getFullYear()
    let number= currentYear-age
    username=firstName+lastNameArray[0]+number
    return username
}


var list1 = [
    { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
    { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
  ];
  

console.log(addUsername(list1))  