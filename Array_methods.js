// let fruits=["mango","apple","banana"];
// fruits.push("graps");
// console.log(fruits);
// fruits.pop("graps");
// console.log(fruits);


// Adavcne push method in js
// let students=[];
// students.push({
//     name:"Muhammad",
//     age:20,
//     place:"DeutschLand",
// }),
// students.push({
//     name:"Saqib",
//     age:30,
//     place:"DeutschLand",
// })
// ,console.log(students);


// User inputs Push
// let students=[];
// let name = prompt("Enter name:");
// let age=Number(prompt("Enter your Age:"));
// let id=prompt("Enter Destination:");
// students.push({
//     name:name,
//     age:age,
//     id:id
// })
// console.log(students);


// Push using the Loop
// let number=[];
// for( let i=0;i<=10; i++){
//     number.push(i);
// }
// console.log(number);


// Push Dynamic System
// let values=[];
// values.push("Muhammad");
// values.push("How");
// values.push("Are You!");
// console.log(values);


// Push return array new Length
// let arr=[1,2,3,4];
// let result=arr.push(6);
// console.log(arr);
// console.log(result);


// Push using the Student Managemtn System
// let student=[];
// function addstudent(name,marks,callback){
//     student.push({
//         name:name,
//         marks:marks,
//     }),
//     callback(student);
// }
// function done(result){
//     console.log("Student Successfully Added!",result);
// }
// addstudent("Mubashir",20,done);


function sumoffucntion(a,b,callback){
    let result=a+b;
    callback(result);
}
function done(result){
    console.log("The Sum of the Result is:"+result);
}
sumoffucntion(1,2,done);
