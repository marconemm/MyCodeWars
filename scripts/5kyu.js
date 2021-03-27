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
debugger
console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));