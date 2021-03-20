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

/*Kata "Find the odd int" on:
 https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript */

const findOdd = numbersList => {

    const numbersOccurencies = {}

    for (let i = 0; i < numbersList.length; i++) {
        const number = numbersList[i];
        if (!numbersOccurencies[number])
            numbersOccurencies[number] = 1;
        else
            numbersOccurencies[number]++;
    }

    for (const key in numbersOccurencies)
        if (numbersOccurencies[key] % 2 !== 0)
            return parseInt(key);
}

// console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ]));

/*Kata "Who likes it?" on:
 https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript */

const likes = namesList => {
    if (namesList.length === 0)
        return "no one likes this";

    const likeStr = (namesList.length > 1) ? 'like this' : 'likes this';
    let str = "";
    if (namesList.length < 4) {
        for (let i = 0; i < namesList.length; i++) {
            const name = namesList[i];

            if (i === namesList.length - 1)
                str += `${name}`;
            else if (i === namesList.length - 2)
                str += `${name} and `;
            else
                str += `${name}, `;
        }
        return `${str} ${likeStr}`
    }
    return `${namesList[0]}, ${namesList[1]} and ${namesList.length - 2} others ${likeStr}`
}
// console.log(likes(['Peter']));
// console.log(likes(['Jacob', 'Alex']));
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

