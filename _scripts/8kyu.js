/*Solving the kata "Categorize New Member" on:
 https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript */

// first solution, usin ".reduce":
function openOrSenior(data) {
    return data.reduce((acc, member) => (member[0] > 54 && member[1] > 7) ? acc.push("Senior") : acc.push("Open"), []);
}

// second solution, usin ".map":
function openOrSenior(data) {
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

/* Solving the kata "A square of squares" on:
https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript */

const isSquare = n => Number.isInteger(Math.sqrt(n))


/* Solving the kata "Difference of Volumes of Cuboids" on:
https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript */

const findDifference = (a, b) => Math.abs(a.reduce((acc, side) => acc * side) - b.reduce((acc, side) => acc * side))

/* Solving the kata "Find the first non-consecutive number" on:
https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/javascript */

const firstNonConsecutive = arr => {

    let result = null;
    for (let i = 0; i < arr.length; i++) {
        const el1 = arr[i];
        const el2 = arr[i + 1];

        if (el2 > (arr[i] + 1)) {
            result = el2
            break;
        }
    }

    return result;
};

/** Solving the kata "FIXME: Replace all dots" on:
 https://www.codewars.com/kata/596c6eb85b0f515834000049/train/javascript  */

// added the "\" to escape special characters and "g" to replace all occurences in the string
const replaceDots = str =>
    str.replace(/[.]/g, '-');

/** Solving the kata "Sum of positive" on:
 https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript  */

const positiveSum = arr => arr.reduce((acc, number) => {
    if (number > 0)
        acc += number;

    return acc;
}, 0);

/** Kata "You only need one - Beginner" on:
 https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript  */

const check = (a, x) => a.includes(x);

/** Kata "Is it a rainbow?" on:
 https://www.codewars.com/kata/59e7202ffc3c4952940000a9/train/javascript  */

const sortRainbow = colour => {
    const rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

    if (colour.toString() == rainbowColors.toString())
        return true;

    return false;

    //Solução Alternativa:
    // return rainbowColors.every((color, i) => colour[i] === color);
}

/** Kata "How good are you really?" on:
 https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript  */

const betterThanAverage = (classPoints, yourPoints) => {
    const totalClassPoints = classPoints.reduce((acc, grade) => acc += grade);
    const classAverage = totalClassPoints / classPoints.length;
    const amIbetter = yourPoints > classAverage;

    if (amIbetter)
        return true;

    return false;
}

