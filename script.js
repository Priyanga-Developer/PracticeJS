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
for (let i of object2){
    console.log(i);// object is not itertable
}

