
import inquirer from "inquirer";

const calculater:{
    num1:number
    num2 :number
    opreator:string
  
  }= await inquirer.prompt([
    {
    type:"number",
    name: "num1",
    message : "type a  1st number ",
    },
    {
      type:"number",
      name: "num2",
      message: "type a second number",
  
    },
    {
      type: "list",
      name : "opreator",
      message: "choose opreator",
      choices: ["+", "-", "*", "/" ]
    },
  ]);
  let {num1, opreator, num2 }= calculater;
  
  let result
  switch (opreator) {
      case "+" : result = num1 + num2
      break;
      case "_" : result = num1 - num2
      break;
      case "*": result = num1 * num2
      break;
      case "/" : result = num1 / num2
  
      break; 
     default:
      console.log("invalid msg");
      
  }
  // console.log(result);
  console.log(`${num1} ${opreator} ${num2}= ${result}`);
  console.log("whoes here eror");
  


