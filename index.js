#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 7869;
let myPinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "please enter your pin code.",
        type: "number",
    },
]);
if (myPinAnswer.pin === myPin) {
    console.log("Thanks for pin code");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select your option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
    }
    ("myBalance -= amountAns.amount");
    console.log("your remaining balance: " + myBalance);
    if (operationAns.operation === `check balance`)
        console.log("Your current balance is: " + myBalance);
}
else {
    console.log("incorrect pin code");
}
