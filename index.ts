#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

// Variables
let secretNumber: number = Math.floor(Math.random() * 10);
let tries: number = 3;
let playAgain: boolean = true;

while (playAgain) {
  while (tries > 0) {
    const answer = await inquirer.prompt([
      {
        type: "number",
        name: "userGuess",
        message: "Guess a number between 1 and 10",
      },
    ]);
// Game Code
    const { userGuess } = answer;
    if (answer.userGuess === secretNumber) {
      console.log(chalk.bgBlackBright("Congratulations, You got it."));
      tries = 0;
    } else {
      console.log(chalk.red("Sorry, try again."));
      console.log(`You have ${tries - 1} try left.`);
    }
    tries--;
  }
// Secret Number Revealed 
  if ((tries = 1)) {
    console.log(`The secret number was ${secretNumber}`);
  } else {
    console.log("Invalid");
  }
// Play Again Code
  const playAgainAns = await inquirer.prompt([
    {
      name: "playAgain",
      message: "Do you want to play again?",
      type: "confirm",
    },
  ]);

  if (playAgainAns.playAgain == true) {
    tries = 3;
    secretNumber = Math.floor(Math.random() * 10);
  } else {
    playAgain = false;
  }
}
