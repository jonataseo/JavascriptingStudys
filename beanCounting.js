

function countBs(toCheckString) {
    let numberOfBs = 0;
    for(let index = 0; index < toCheckString.length; index++) {
        if(toCheckString[index] === "B")
            numberOfBs++;
    }
    return numberOfBs;
}

function countChar(toCheckString, toCheckChar) {
    let numberOfChars = 0;
    for(let index = 0; index < toCheckString.length; index++){
        if(toCheckString[index] === toCheckChar)
            numberOfChars++;
    }
    return numberOfChars;
}

console.log(countBs("BBBsadgsassd"));
console.log(countChar("BBBsadgsassd", "d"));