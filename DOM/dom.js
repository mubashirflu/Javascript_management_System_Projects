
// Variable bana ka elem,nt se connect krna 
// let heading = document.getElementById("title");

// console.log(heading);


// Get the element by id
// let title=document.getElementById("title")


// Get the elemnt by class
// let box=document.getElementById("Box")


// Query selector mean use to select it any matching firest elemnt in HTML
// Query selector start with ID
// let heading =document.querySelector("#title");
// console.log(heading);

// Query Selector start with class
// let heading =document.querySelector(".Box");
// console.log(heading);


// Tag selectipon using selector
// let title=document.querySelector(".title");
// let btn=document.querySelector(".btn");
// console.log(title);
// console.log(btn);
// btn.addEventListener("click",function(){
//     title.innerText="Text Changed";
// })


// Query Selector Pratice
// Couneter Pratice using DOM
// let counter=0;
// let countText=document.querySelector("#count");
// let plus=document.querySelector("#plus");
// let minus=document.querySelector("#minus");
// let reset=document.querySelector("#reset");
// // Increment
// plus.addEventListener("click",function(){
// counter++;
// countText.innerText=counter;
// });
// // Increment
// minus.addEventListener("click",function(){
//     if(counter==0){
//         console.log("SORRY! already ZERO")
//     }else{
// counter--;
// countText.innerText=counter;
//     }
// });
// reset.addEventListener("click",function(){
//     counter=0;
//     countText.innerText=counter;
// })



// Color change using DOM
// let red=document.querySelector(" .red");
// let blue=document.querySelector(" .blue");
// let green=document.querySelector(" .green");
// let black=document.querySelector(".black");
// let orange=document.querySelector(".orange");
// red.addEventListener("click",function(){
//     document.body.style.backgroundColor="red";
// })
// blue.addEventListener("click",function(){
//     document.body.style.backgroundColor="blue";;
// })

// green.addEventListener("click",function(){
//     document.body.style.backgroundColor="green";
// })
// black.addEventListener("click",function(){
//     document.body.style.backgroundColor="black";
// })


// orange.addEventListener("click",function(){
//     document.body.style.backgroundColor="orange";
// })


// Hide and Show the Text
// let btn = document.querySelector("#btn");
// let text = document.querySelector("#text");

// btn.addEventListener("click", function () {
//     if (text.style.display === "none") {
//         text.style.display = "block";
//     } else {
//         text.style.display = "none";
//     }
// });


// Taking User Input
// let userinput=document.querySelector("#userinput");
// let btn=document.querySelector("#btn");
// let output=document.querySelector("#output");
// btn.addEventListener("click",function(){
//     output.innerText=userinput.value;
// })


// TO DO list ofthe Elenment Added with fucntions
let userinput = document.querySelector("#userinput");
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");

btn.addEventListener("click", function () {

    let taskDiv = document.createElement("div");

    let taskText = document.createElement("span");
    taskText.innerText = userinput.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function () {
        taskDiv.remove();
    });

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteBtn);

    output.appendChild(taskDiv);

    userinput.value = "";
});