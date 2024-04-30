#! /usr/bin/env node
import inquirer from "inquirer";

console.log("\n\t Wellcome to the Game\n");

const randomNumber = Math.floor(Math.random() * 5 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Wow! You guess the right number.");
}
else{
    console.log("Sorry! You guess the wrong number. The correct number is: " + randomNumber);
}