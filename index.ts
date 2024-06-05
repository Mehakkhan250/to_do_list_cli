#! /usr/bin/env node
import inquirer from "inquirer";

console.log(`Welcome to MK todo list`);
let myLoop = true;
let todoListArray: string[]= [];

while(myLoop){
    let userInput = await inquirer.prompt([
    {
      type: `input`,
      name: `todoItem`,
      message: `Enter items in your To Do list`,
    },
    {
        type: `confirm`,
        name: `addMore`,
        message: `Do you want to add more items `,
        default: false,
    },
    {
        type: `confirm`,
        name: `seeList`,
        message: `Do you want to see to do list`,
        default: false,
        when(userInput){
            return userInput.addMore === false
        }
    }
      ]);

      const {todoItem, addMore, seeList} = userInput

      if(todoItem){
        todoListArray.push(todoItem)
      }
      if(seeList){
        console.log(`\nHere is your to do list:`);
        todoListArray.forEach((item, index )=>{
        console.log(`${index + 1} . ${item}`);

        });
    }
    myLoop = addMore

}
