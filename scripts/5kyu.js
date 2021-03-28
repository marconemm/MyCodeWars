/*Kata "Simple Pig Latin" on:
 https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript */

const pigIt = str => {
    return str.split(" ").map(word => {
        if (word === "?" || word === "!")
            return word;

        return `${word.slice(1)}${word.slice(0, 1)}ay`
    }).join(" ");
}
// console.log(pigIt('Pig latin is cool'));

/*Kata "Human Readable Time" on:
 https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript */

const getIntegerPart = value => {
    value = value.toString();
    if (value.includes(".")) {
        const dotIndex = value.indexOf(".");
        return parseInt(value.slice(0, dotIndex));
    }
    return parseInt(value);
}

const humanReadable = seconds => {
    if (seconds) {

        let hours = 0;
        let minutes = getIntegerPart(seconds / 60);

        if (minutes) {
            hours = getIntegerPart(minutes / 60);
            minutes -= hours * 60;
            seconds -= ((hours * 3600) + (minutes * 60)) // 1h === 3600 minutes and 1min === 60 seconds.
        }

        hours = hours.toString();
        minutes = minutes.toString();
        seconds = seconds.toString();

        if (hours.length === 1)
            hours = `0${hours}`;

        if (minutes.length === 1)
            minutes = `0${minutes}`;

        if (seconds.length === 1)
            seconds = `0${seconds}`;

        return `${hours}:${minutes}:${seconds}`;
    }
    return "00:00:00";
}

/*Kata "Moving Zeros To The End" on:
 https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript */

const moveZeros = arr => {
    const zerosList = arr.filter(item => item === 0);
    const result = arr.filter(item => item !== 0);

    zerosList.forEach(element => result.push(element));

    return result;
};
// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

/*Kata "Valid Parentheses" on:
 https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript */

const validParentheses = parentheses => {
    parentheses = parentheses.split("()").join("");

    if (parentheses.length === 1
        || parentheses[0] === ")"
        || parentheses[parentheses.length - 1] === "(")
        return false;

    while (parentheses.includes("()")) {
        const start = parentheses.indexOf("()");
        parentheses = parentheses.slice(start, (start * -1));
    }

    if (parentheses.length === 0)
        return true;

    return false;
}

// console.log(validParentheses("())"));
// console.log(validParentheses(")()()()("));
// console.log(validParentheses("()()()()()()()()()()(())()()()((()"));

/*Kata "RGB To Hex Conversion" on:
 https://www.codewars.com/kata/513e08acc600c94f01000001 */

const getHexadecimal = value => {
    if (value < 1)
        return "00";

    if (value >= 255)
        return "FF";

    let integerPart;
    let module;
    const hexaBase = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
    const resultList = []

    do {
        integerPart = Math.floor(value / 16);
        module = value % 16;
        resultList.push(module);
        value = integerPart;

        if (integerPart <= 1)
            resultList.push(integerPart);

    } while (integerPart > 1)

    return `${hexaBase[resultList[1]]}${hexaBase[resultList[0]]}`;
}

const rgb = (r, g, b) => getHexadecimal(r) + getHexadecimal(g) + getHexadecimal(b);

// console.log(rgb(0, 0, 0));
// console.log(rgb(0, 0, -20));
// console.log(rgb(300, 255, 255));
// console.log(rgb(173, 255, 47));
// console.log(rgb(8, 11, 248));

/*Kata "Where my anagrams at?" on:
 https://www.codewars.com/kata/523a86aa4230ebb5420001e1 */

const alphabetize = word => word.toLowerCase().split("").sort().join("");

const anagrams = (word, wordsList) => {
    word = alphabetize(word)
    return wordsList.filter(item => word === alphabetize(item));
}