function createPhoneNumber(numbers){
    firstPortion= "(" + numbers[0].toString()+ numbers[1].toString()+numbers[2].toString()+ ") "
    secondPortion= numbers[3].toString()+numbers[4].toString()+numbers[5].toString()+"-" +numbers[6].toString()+numbers[7].toString()+numbers[8].toString()+numbers[9].toString()
    return firstPortion+secondPortion
  }