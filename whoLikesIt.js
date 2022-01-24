function likes(names) {
    startMessage=""
    finalMessage=""
    if(names.length==0){
      finalMessage="no one likes this"
      return finalMessage
    }
    else if (names.length==1)
      {
        startMessage= names[0]+ " likes this"
        return startMessage
      }
    else if (names.length==2)
      startMessage= names[0] + " and " + names[1]
    else if (names.length==3)
      startMessage= names[0] + ", " + names[1] + " and " + names[2]
    else if (names.length>3)
      startMessage= names[0] + ", " + names[1] +" and " + (names.length-2).toString() + " others"
    
    
    finalMessage= startMessage+" like this"
    return finalMessage
  }