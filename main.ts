#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// display a welcome message
console.log("~".repeat(60));
console.log(chalk.bold.cyanBright("\n \t\t WELCOME TO MY WORD COUNTER PROJECT"));
console.log("~".repeat(60));

// Declare a constant 'answer' and assign it to the result of inquirer.prompt function

const answers: {
    Sentence:string
} = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence to count the word:"
        }
    ]
)
const words = answers.Sentence.trim().split("")

// print  the array of words to the console
console.log(words)

// print the word count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);






//const array = ['a', 'b', 'c', 'd', 'e', 'd', 'e', 'f',]