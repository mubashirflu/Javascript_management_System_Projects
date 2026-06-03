// Normalfunctions
// function greet(){
//     console.log("Hello How are you!");
// }
// greet();


// Function with parameter
// let a=Number(prompt("Enter First Number!"));
// let b=Number(prompt("Enter Second Number!"));
// function calculation(a,b){
//     return a+b;
// }
// let result=calculation(a,b);
// console.log(result);



// Bank Management System
let account=null;
let operations=null;
function createAccount(){
    let name=prompt("Enter your Name:");
    let accoNo=prompt("Enter Account Number:");
    let balance=Number(prompt("Enter Initial Balance:"));
    account={
        name:name,
        accoNo:accoNo,
        balance:balance,
    };
    console.log("Account Created Successfully");
}