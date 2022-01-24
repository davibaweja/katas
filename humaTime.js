// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript



function humanReadable(seconds) {
    let hours =Math.floor(seconds/3600)
    let remainingSecs=seconds-hours*3600
    let minutes=Math.floor((remainingSecs)/60)
    let finalSeconds=(remainingSecs-minutes*60)

    if(hours<9)
        hours="0"+hours
    if(minutes<9)
        minutes="0"+minutes
    if(finalSeconds<9)
        finalSeconds="0"+finalSeconds        

    return hours+":"+minutes+":"+finalSeconds
}
console.log(humanReadable(0))