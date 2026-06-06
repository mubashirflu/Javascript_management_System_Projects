// let students={
//     name:"Muhammad",
//     age:20,
//     address:"Regensburg",
//     id:"OTH REGENBURG",
// }
// let {name,age,address,id}=students;
// console.log(name);
// console.log(age);
// console.log(address);
// console.log(id);

// const { use } = require("react")


// Destructing API Style Pratice 
// let user={
//     name:"Muhammad",
//     id:20,
//     university:"OTH Regenburg",
//     courses:"informatik",
// };
// let {name,id,university,courses}=user;
// console.log(`Student name: ${name} id is :${id} university is: ${university} and the courses is :${courses}`);


// Normal Data Fetching using API
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => data.map(p => p.title))
//     .then(titles => {
//         document.body.innerHTML = titles.join("<br>");
//     });


// Fetching Data using Destructuring
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(n=>n.json())
// .then(data=>{
//     data.forEach(user=>{
//         let {id,title,body}=user;
//         console.log(`User Id: ${id}`);
//         console.log(`User Title: ${title}`);
//         console.log(`User Body: ${body}`);
//     })
// })


// Easiest way to fetch the data
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(n=>n.json())
// .then(data=>{
//     data.forEach(({id,title,body})=>{
//         console.log(`User id: ${id} User Title: ${title}
//             User Body: ${body}
//             `);
//     }
// )})


// user Data printing
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(n=>n.json())
// .then(data=>{
//     data.forEach(({id,title,body})=>{
//         console.log(`
//             User Id: ${id}
//             User Title: ${title},
//             User Body: ${body}
//             `
//         )
//     })
// })


// user Name prining
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then(n=>n.json())
    // .then(data=>{
    //     data.forEach(({id,name,username,email,address:{city,zipcode}})=>{
    //         console.log(`User Id is: ${id}
    //             User Name: ${name},
    //             User Nick Name ${username},
    //             User Email: ${email},
    //             User Address: ${city},
               
    //             `)
    //     })
    // })



    // User Card
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(n=>n.json())
// .then(data=>{
//     let container=document.getElementById("container");
//     data.forEach(user=>{
//         let {id,email,username,name}=user;
//         container.innerHTML+=`
//         <div style="border 1px solid blac; margin:10px;padding:10px">
//         <h2>${id}</h2>
//         <h3>${name}</h3>
//         <p>${username}</p>
//         <p>${email}</p>
//         </div>
//         `
//     })
// })



// Live Search using API
// create the array list to store the original data
// let alldata = [];
// let container = document.getElementById("container");
// let livesearch = document.getElementById("search");

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => {
//     alldata = data;
//     displayuser(alldata);
// });

// function displayuser(users) {
//     container.innerHTML = "";

//     users.forEach(user => {
//         container.innerHTML += `
//         <div style="border:1px solid black; margin:20px; padding:10px">
//             <h2>${user.id}</h2>
//             <h3>${user.name}</h3>
//             <p>${user.email}</p>
//         </div>`;
//     });
// }

// livesearch.addEventListener("input", function () {
//     let value = this.value.toLowerCase();

//     let filtered = alldata.filter(user => {
//         return user.name.toLowerCase().includes(value);
//     });

//     displayuser(filtered);
// }); 



let alldata=[];
let container=document.getElementById("container");
let usersearch=document.getElementById("search");

fetch("https://jsonplaceholder.typicode.com/users")
.then(n=>n.json())
.then(data=>{
    alldata=data;
    displayuser(alldata);
});
function displayuser(users){
    container.innerHTML="";
    users.forEach(user=>{
        container.innerHTML+=`
        <div style="border:1px solid black;margin:10px;padding:10px">
        <h2>${user.id}</h2>
        <h3>${user.name}</h3>
        <p>${user.email}</p>
        <p>${user.city}</P>
        </div>`;
    })
}
usersearch.addEventListener("input",function(){
    let value=this.value.toLowerCase();
    let filter=alldata.filter(user=>
        user.name.toLowerCase().includes(value)
    );
    displayuser(filter)
})  