// https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

function pigIt(str){
    let stringArray=str.split(" ")


}

// cat,   cat!    cat?    handle these one's
function changeWord(word)
{
    if (word=="!" || word=="?")
    {
        return word
    }
    let firstLetter=word.substring(0, 1)
    let withOutFirstLetter=word.substring(1);
    finalWord=withOutFirstLetter+firstLetter+"ay"
    console.log(finalWord)
}
changeWord("pig!")