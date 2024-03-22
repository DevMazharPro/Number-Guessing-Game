import inquirer from "inquirer";
import chalk from "chalk";
let secretNumber = Math.floor(Math.random() * 10);
let tries = 3;
while (tries > 0) {
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "userGuess",
            message: "Guess a number between 1 and 10",
        },
    ]);
    const { userGuess } = answer;
    if (answer.userGuess === secretNumber) {
        console.log(chalk.blueBright("Congratulations, You got it."));
        tries = 0;
    }
    else {
        console.log(chalk.red("Sorry, try again."));
        console.log(`You have ${tries - 1} try left.`);
    }
    tries--;
}
if ((tries = 1)) {
    console.log(`The secret number was ${secretNumber}`);
}
else if ((tries = 0)) {
    console.log("Invalid");
}
