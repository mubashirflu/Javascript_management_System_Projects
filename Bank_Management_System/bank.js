let balance = 0;

let nameinput = document.querySelector("#name");
let amountInput = document.querySelector("#amount");

let balanceText = document.querySelector("#balance");
let create = document.querySelector("#create");
let deposite = document.querySelector("#deposite");
let withdraw = document.querySelector("#withdraw");
let history = document.querySelector("#history");

function updatebalance() {
    balanceText.innerText = "Balance: " + balance;
}

function Histroy(text) {
    let li = document.createElement("li");
    li.innerText = text;
    history.appendChild(li);
}

create.addEventListener("click", function () {
    let name = nameinput.value;
    Histroy("Account Created for: " + name);
});

deposite.addEventListener("click", function () {
    let amt = Number(amountInput.value);

    if (amt > 0) {
        balance += amt;
        updatebalance();
        Histroy("Deposited: " + amt);
    }
});

withdraw.addEventListener("click", function () {
    let amt = Number(amountInput.value);

    if (amt > balance) {
        alert("Insufficient Balance");
    } else {
        balance -= amt;
        updatebalance();
        Histroy("Withdrawn: " + amt);
    }
});