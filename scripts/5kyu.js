/*Kata "Simple Pig Latin" on:
 https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript */

const pigIt = str => {
    debugger
    return str.split(" ").map(word => {
        if (word === "?" || word === "!")
            return word;

        return `${word.slice(1)}${word.slice(0, 1)}ay`
    }).join(" ");
}

console.log(pigIt('Pig latin is cool'));