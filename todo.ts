#! /bin/usr/env node

import inquirer from "inquirer"

let todo = [];
let condition = true;


while (condition) {
    let addTask = await inquirer.prompt(
        [
            {
                name: "todo",
                type: 'input',
                message: 'What you want to add todo',
            },
            {
                name: "addMore",
                type: 'confirm',
                message: 'Do you want to add More ?',
                default: "false",
            }

        ]

    );
    todo.push(addTask.todo);//adding in array outside the loop
    condition=addTask.addMore;
    console.log(todo);
}