// FizzBuzz, print all number from 1 to 100, if number is divisible for 3 print "Fizz",
// if is divisible by 5 (and not 3) Buzz, and if divisible by both 3 and 5 print "FizzBuzz"

for(let index = 1; index <= 100; index++) {
    
    let result = (index % 15 === 0) ? "FizzBuzz"
                :(index % 3 === 0) ? "Fizz"
                :(index % 5 === 0) ? "Buzz"
                :index;

    console.log(result);
}