// const sum=(a,b)=>{
//     let result=a+b;
//     return result;
// }
// console.log(sum(1,2));

// API and Style Core Function
setTimeout(() =>{
console.log("Data Loaded after 2 sec")
},2000);

// Mostly use in the backend 
// let num=[1,2,3];
// let doubled=num.map(n=>n+3);
// console.log(doubled);

// Maping fucntion monslty in use
// let Numbers=[1,2,3,4];
// let doubled=Numbers.map(n=>n+1);
// console.log(doubled);

// Authrntication filter
// let user=[
//     {name:"Muhammad",age:20},
//         {name:"Ali",age:80},
//             {name:"Ahmed",age:50},
//                 {name:"haroon",age:90},
// ]
// let adults=user.map(n=>n.adults>=18);
// console.log(adults);


// Trying To fetch the data from API for javascirpt pratice
fetch("https://jsonplaceholder.typicode.com/posts").
then(res=>res.json()).then(data=>data.filter(u=>u.id>5).
map(u=>u.name)).then(name=>console.log(name));