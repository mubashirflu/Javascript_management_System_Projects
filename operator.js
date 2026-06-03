// ATM Management System
// <!DOCTYPE html>
// let balance = 1000;
// let name = "mubashir";

// let pin = prompt("Enter 4 Digit PIN!");

// console.log("Welcome To the Meezan Banking System");

// if (pin == 9090) {

//     console.log("Select your Operation!");
//     console.log("1: Checking Balance!");
//     console.log("2: Transfer Amount!");
//     console.log("3: Withdraw Money!");
//     console.log("4: Exit!");

//     let operation = prompt("Enter option");

//     switch(operation){

//         case "1":
//             console.log("Total Balance is " + balance);
//             break;

//         case "2":
//             let amount = Number(prompt("Enter amount"));
//             let num = prompt("Enter IBAN");

//             if(amount > balance){
//                 console.log("SORRY! Insufficient Balance");
//             } else {
//                 balance = balance - amount;
//                 console.log("Amount has been Transferred " + amount);
//                 console.log("Total Balance is:"+balance)
//             }
//             break;

//         case "3":
//             let amount1 = Number(prompt("Enter Withdraw Amount"));

//             if(amount1 > balance){
//                 console.log("SORRY! Insufficient Balance");
//             } else {
//                 balance = balance - amount1;
//                 console.log("Amount has been Withdrawn " + amount1);
//             }
//             break;

//         case "4":
//             console.log("Exit from the System");
//             break;

//         default:
//             console.log("Incorrect Input");
//     }

// } else {
//     console.log("SORRY! Incorrect PIN");
// }


// Student Calculator
// let english=Number(prompt("Enter your English marks"));
// let physics=Number(prompt("Enter your Physics marks"));
// let chemistry=Number(prompt("Enter your Chemistry marks"));
// let totalMarks=english+physics+chemistry;
// console.log("Your Total Marks is!"+totalMarks);
// if(totalMarks>=80){
//     console.log("Very Good! A+");
// }else if(totalMarks>=70){
//     console.log("Vey Good!: "+totalMarks);
// }else if(totalMarks>60){
//     console.log("Good C Grade")
// }else{
//     console.log("FAIL!")
// }


// Shopping list Card

// let price =Number(prompt("Enter Product Price!"))
// let quantity =Number(prompt("Enter Product Quantity!"))
// let total=price*quantity;
// console.log("Total Bill!"+total)
// if(total>10000){
//     let discount=total*10/100;
//     let finalbill=total-discount;
//     console.log("Discount Applied!"+discount);
//     console.log("Final Bill!"+finalbill);
// }else{
//     console.log("No Discount Applied");
//     console.log("FinalBill "+finalbill);
// }

