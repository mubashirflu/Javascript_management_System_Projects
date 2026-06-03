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
function depostie(){
    if(!account){
        console.log("No Account found Create the Account!");
    return;
    }else{
        let amount=Number(prompt("Enter Deposite Amount!"));
        account.balance+=account;
        console.log("Deposite: "+account);
        console.log("New Balance: "+account.balance)
    }
}
function Withdraw(){
    if(!account){
        console.log("No Account Found! Sorry");
        return;
    }else{
        let amount=Number(prompt("Enter Amount to withdraw"));
        if(amount<=account.balance){
            account.balance-=account;
            console.log("Withdraw Successfull");
        }else{
            console.log("Insuffcient! Balance");
        }
        console.log("Current Balance",account.balance)
    }
}
function chekbalance(){
    if(!account){
        console.log("No Account Found Sorry!")
        return;
    }else{
        console.log("Account Holder Name",name);
        console.log("Current Balance is:",account.balance)
    }
}
function existsystem(){
    operations==false;
    console.log("System Closed");
}

while(operations){
    let choice=prompt(
        "Bank System Choose Availabe Opetions!",
        "1: Withdraw",
        "2: Deposite",
        "3: Check Balance",
        "4 Exit System",
        "Account Creation",
    )
    switch(choice){
        case "1":
            Withdraw();
            break;
        case "2":
            depostie();
            break;
        case "3":
            balance();
            break;
        case "4":
            existsystem();
            break;    
        case "5":
            account();
            break;
        default:
            console.log("Invalid Input");
            break;
    }
}