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


// Destructing API Style Pratice 
let user={
    name:"Muhammad",
    id:20,
    university:"OTH Regenburg",
    courses:"informatik",
};
let {name,id,university,courses}=user;
console.log(`Student name: ${name} id is :${id} university is: ${university} and the courses is :${courses}`);
