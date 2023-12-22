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