// / Guess what answers you would get if you ran this in the
// // Javascript Console in Google Chrome. Once you have an answer  to the questions then 
// // check them by copying them and running it in the console yourself line by line 


// //Evaluate the below:
// 5 + "34"->534
// 5 - "4"=1 (bcoz string is converted to number)
// 10 % 5=0 (remainder)
// 5 % 10=5
// "Java" + "Script"-Java script
// " " + " "
// " " + 0 =' 0'
// true + true =2
// true + false =1
// false + true=1
// false - true=-1
// 3 - 4 =-1
// "Bob" - "bill"-NaN


// //Evaluate the below comparisons:
// 5 >= 1 false
// 0 === 1 false
// 4 <= 1 false
// 1 != 1 false
// "A" > "B" true
// "B" < "C" false
// "a" > "A"  You can see the values of each char at the ascii table below
// a = 97 ACSI vlaues
// A = 65 ACSI vlaues
// "b" < "A"
// true === false ->false
// true != true false


// // Make the string: "Hi There! It's "sunny" out" by using the + sign:

// Calculator


var a =prompt("Enter the first number");
var b=prompt("Enter the second number");
var c=Number(a)+Number(b);
var d=Number(a)-Number(b);
var e=Number(a)*Number(b);
var f=Number(a)/Number(b);
alert("The sum is"+c +" "+ "The sub is"+d +" " +" The multiply is" +e +" "+"divide is" +f);

// hoisting
var one=3;
var one=5;
console.log(one)
two=6;
console.log(two)
var two

let num1=34;
let num2=678;
console.log(num1)

// num3=5;
// console.log(num3);
// let num3; 
// ReferenceError: Cannot access 'num3' before initialization
    
let num4;
console.log(num4);  //undefined 
num4=8776;



name1("hIIIII")
function name1(statements) {
    console.log(statements)
} // answer is "Hiii"

function toCelius(params) {
   console.log(params) 
}
let x= toCelius(22)
console.log(x)

//rest parameter

function sum(a,b,...nums) {
    let newNum=0
    for (const i of nums) {
        newNum+=i;
        
    }
  return newNum+a+b
}


console.log(sum(1,2,3,4,5,6));
//spread operator
const nums=[1,2,3,4,5,6]
function sum2(a,b,c,d,e,f) {
    return a+b+c+d+e+f
   
}


console.log(sum2(...nums));
console.log([..."John Resig"])
//ans
// [
//     "J",
//     "o",
//     "h",
//     "n",
//     " ",
//     "R",
//     "e",
//     "s",
//     "i",
//     "g"
// ]

const arr1=[1,2,3,4]
arr1.push(89)
console.log(arr1)

const arr2=[1,2,3,4]
const arr3=arr2.concat(89)
console.log(arr2 ,arr3)
const months = ['Jan', 'March', 'April', 'June'];
months.splice(2,0,"feb")
console.log(months)

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
animals.splice(1,0,"dog");
animals.splice(3,1);
console.log(animals)
const newarr=animals.slice()
console.log(newarr)
animals.sort();
console.log(animals);

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(' '));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"]
const str="Hello|world"
console.log(str.length);
console.log(str.slice(1,3));
console.log(str.split(""));
console.log(str.split(" "));
console.log(str.split(","));
console.log(str.split("|"));
const newArray=[1,2,3,4,5]
const arrayfind=newArray.find((a)=> a>3)
console.log(arrayfind);

console.log(Number("23"));
console.log(Number("23.33"));
console.log(Number("10 yaers"));
console.log(Number("-10"));
console.log(Number("-10.33"));
console.log(Number("yaers 10"));

console.log(parseInt("23"));
console.log(parseInt("23.33"));
console.log(parseInt("10 yaers"));
console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("yaers 10"));

console.log(parseFloat("23"));
console.log(parseFloat("23.33"));
console.log(parseFloat("10 yaers"));
console.log(parseFloat("-10"));
console.log(parseFloat("-10.33"));
console.log(parseFloat("yaers 10"));

console.log(new Date());
console.log(new Date().toString());
console.log(new Date().toISOString());
console.log(new Date().toDateString());
console.log(new Date().toUTCString());
console.log(new Date().getFullYear());
console.log(new Date().getMonth()+1);
console.log(new Date().getDate());

const selectcountry=()=>{
    
let selectName=document.querySelector("#countries");
let value=selectName.value
    switch (value){
        case "India":
        console.log("u are in india");
        break;
        case "Pakistan":
        console.log("u are in pakistan");
        break;
        case "Srilanka":
        console.log("you are in sri lanka");
        break;
        default :
        console.log("please select the country");
     }

}


let output=document.querySelector("p");

for(let i=0; i<10; i++){
    output.innerHTML+=`The number is ${i}`

}
const somearray=["apple","banana","pineapple"]
const objectcreate={...somearray}
console.log(objectcreate)
for(let i in somearray){
    output.innerHTML+=`fruit names are ${somearray[i]}`

} //Fruits name are apple ,Fruits name are banana...
for(let i in objectcreate){
    output.innerHTML+=`fruit names are ${objectcreate[i]}`

} //Fruits name are apple ,Fruits name are banana...
const object2={
    firstName:"Priya",
    secondName:"Priyanga",
    Place:"chennai"
}
const string="Priyanga";

for (let i of somearray){
    console.log(i) // apple banana pineapple
}
for (let i of string){
    console.log(i);//  p r i y a n g a
}
// for (let i of object2){
//     console.log(i);// object is not itertable
// }

let count=0;
while(count<5){
    console.log("Hiii "+count);
    count++;
}

let newcount=0;
do{
    console.log("hiii"+newcount);
    newcount++;
}
while(newcount<5) // Hii 0,Hii 1, Hii 2...Hii 5

for (let i=0; i<4 ; i++){
    if(i===2) break;
    console.log(`The number is ${i}`);
}//The number is 0 ,The number is 1

for (let i=0; i<5 ; i++){
    if(i===2) continue;
    console.log(`The number is ${i}`);
}//The number is 0 ,The number is 1,The number is 3 ,The number is 4 

//Error handling in Javascript

" use strict";
x=3.14;
console.log(x)
let array1=[1,3,5,6,7]
document.write(array1)
// document.write(array2)
try{
   throw new Error (err.message)
}
catch(err){
    console.log(err.message)
}
finally{
    document.write(array1)
}


//This in method

const person={
    firstName: "Priya",
    lastName:"Priyanga",
    fullName:function(){
        return this.firstName+this.lastName;
    }, //normal function
    secondfullName:()=>this.firstName,
    thirdfullName:()=>this,
}
console.log(person.fullName()) // Priya Priyanga
console.log(person.secondfullName()) //undefined
console.log(person.thirdfullName()) // window object

//call()

let employee1={ firstName:"John",secondName:"Doe"}
let employee2={ firstName:"Radson",secondName:"Doe"}
let invite={
    fullName:function(greeting1,greeting2){
          console.log(greeting1 + this.firstName + this.secondName +greeting2);
    }
}
invite.fullName.call(employee1,"Hello!","How are you?") // Hello! John Doe ,How are you?

//apply()
let employee3={ firstName:"John",secondName:"Doe"}
let employee4={ firstName:"Radson",secondName:"Doe"}
let invite1={
    fullName:function(greeting1,greeting2){
          console.log(greeting1 + this.firstName + this.secondName +greeting2);
    }
}
invite1.fullName.apply(employee4,["Hello!","How are you?"]) // Hello! Rdson Doe ,How are you?

//bind()
let employee5={ firstName:"John",secondName:"Doe"}
let employee6={ firstName:"Radson",secondName:"Doe"}
let invite2={
    fullName:function(greeting1,greeting2){
          console.log(greeting1 + this.firstName + this.secondName +greeting2);
    }
}
 let employeeName1=invite2.fullName.bind(employee5)
 let employeeName2=invite2.fullName.bind(employee6) 
 employeeName1("Hello","How are you?")
 employeeName2("Hello","Good Morning!")

 const person2 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = person.fullName.bind(member);

 //bind helps in this keyword preserved in callback function
 const person3 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      console.log( this.firstName + " " + this.lastName)
    }
  }
 let bindfunc=person3.fullName.bind(person3)
 setTimeout(bindfunc,3000)
//map
 const personName=["Priya","Riya","Diya"];
 const num=[1,2,3]
 const nummap=num.map((num)=>num*2)
 console.log(nummap)// [2,4,6]
 const newmap=personName.map((eachname)=>{
    console.log("Hello!"+eachname) //Hello! Priya Hello! Riya Hello! Diya
 })
  const newarraymap=num.map(function (element,index,array) {
     console.log(element);//3
     console.log(index);//2
     console.log(array);//[1,2,3]
  })


//filter 
const personName2=["Geetha","Riya","Diya"]
const newFilter=personName2.filter((eachname)=>{
   return eachname.length<5 
 
}
)
console.log(newFilter)// ["Riya","Diya"]

// reduce

const numbers=[12,13,14,16]
const reducedArray=numbers.reduce((accumulator ,currentValue,index)=>{
    return   accumulator+currentValue 
})
console.log(reducedArray);//55 index startes from 1

const reducedArray2=numbers.reduce((accumulator ,currentValue,index)=>{
    return   accumulator+currentValue 
},100)
console.log(reducedArray2);//155 ,takes 100 as initial value and index starts from 0

const numbers2=[1,2,3,4,5]
numbers2.forEach(numbers2=>console.log( numbers2))
