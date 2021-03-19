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

/*Kata "Detect Pangram" on:
 https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript */

const isPangram = string => {
    string = string.replace(/[0-9.,\s]/g, "");
    string = string.toLowerCase();

    const alphabet = {};
    for (let i = 0; i < string.length; i++) {
        if (!alphabet[string[i]])
            alphabet[string[i]] = 1;
        else
            alphabet[string[i]]++;
    }

    const usedLettersList = Object.keys(alphabet);

    if (usedLettersList.length === 26)
        return true;

    return false;
}
// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log(isPangram("ABCD45EFGH,IJK,LMNOPQR56STUVW3XYZ"));

/*Kata "Multiples of 3 or 5" on:
 https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript */
const solution = number => {

    const multiplesOf3and5List = [];
    for (let i = 1; i < number; i++)
        if (i % 3 === 0 || i % 5 === 0)
            multiplesOf3and5List.push(i);

    return multiplesOf3and5List.reduce((acc, multiple) => acc += multiple, 0);
}
// console.log(solution(10));