// A recursive program to find if a positive number is even or odd

function isEven(number) {
    if(number === 0)
        return true;
    else if (number === 1)
        return false;
    else {
        if (number < 0)
            return isEven(number + 2);
        else 
            return isEven(number - 2);
    }
        //return isEven(number - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1)); // Stack overflow! How to fix? Check if the number is positive or negative at sanity check, if negative add 2 instead of sub 2
console.log(isEven(-10));
console.log(isEven(-9));