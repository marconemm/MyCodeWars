/*Kata "Is a number prime?" on:
 https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript */

const isPrime = number => {

    if (number < 2) //2 is the first prime numberber:
        return false;

    const sqrt = Math.round(Math.sqrt(number));

    for (let i = 2; i <= sqrt; i++) {

        /** If IS possible to divide "number" by any integer below its square root,
         * then "number" isn't a prime number:
         * */
        if (number % i === 0)
            return false;

    }

    return true; // If INS'T possible the previous division, "number" is a prime numbe.
}


