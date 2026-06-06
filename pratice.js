let userinput=document.querySelector("#input");
let add=document.querySelector("#add");
let output=document.querySelector("#output");
let task=[];
add.addEventListener("click",function(){
    if(userinput.value==""){
        alert("Add Some Value!");
        return;
    }   
    task.push(userinput.value);
    let li=document.createElement("li");
    li.innerText=userinput.value;
    output.appendChild(li);
    userinput.value="";

    // Delete Functionality
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.addEventListener("click",function(){
        li.remove();
    });
    li.appendChild(delbtn);
    output.appendChild(li);
    userinput.value="";
});