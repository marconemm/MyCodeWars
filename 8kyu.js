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