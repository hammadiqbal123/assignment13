// CHAPTER NO 1 ALERT

// alert("FIRST NAME:  HAMMAD");
// alert("LAST NAME:  IQBAL");
// alert("EMAIL:   HAMMADIQBAL88@GMAIL.COM");
// alert("PHONE NUMBER:   031364736");
// alert("PASSWORD:  HAMMAD123");

//CHAPTER NO 2 VARIABLES FOR STRING
// var a = "HAMMAD";
// console.log(a);

// CHAPTER NO 3 VARIABLE FOR NUMBER
// var f = 6;
// var h = 11;
// console.log(f+h);

//CHAPTER NO 4  VARIABLE NAMES LEGAL AND ILLEGAL
//  LEGAL
// var legal = 'IQBAL';
// console.log(legal);
// ILLEGAL
// var 12illegal = 'khan';
// console.log(12illegal);

// CHAPTER NO 5  MATH EXPRESSIONS  I
//QUESTION 1
var num = 20 % 6;
console.log(num);

//QUESTION 2
var number = 2000 * 1000;
console.log(number);

//QUESTION 3
var x = 20;
var y = 10;
console.log(x - y);

//QUESTION 4
var rem = 30;
var rema = 16;

console.log(rem % rema);

//QUESTION 5
var num1 = 30;
var num2 = 70;

console.log(num1 * num2);
alert("The result of multiplying " + num1 * num2);

//CHAPTER NO 6 MATH EXPERSSION  II

//QUESTION 1
// var x = 5;
// x += 1;
// console.log(x); 

//QUESTION 2
// var x = 5;
// x -= 1;
// console.log(x); 

//QUESTION 3
// var x = 50;
// var y = x++;
// console.log(y);

//QUESTION 4
// var y = 50;
// var z = --y;
// console.log(y);

//QUESTION 5
// var num = 10;
// var newNum = --num; 
// console.log(num);

//QUESTION 6
// var num1 = 5;
// var num2 = num1++;
// console.log(num1)

//QUESTION 7
// var num = 8;
// num++;
// alert("The new value is: " + num);

//CHAPTER NO 8 CONCATENATING TEXT STRINGS

//QUESTION 1
// var num = "2" + "2";
// console.log(num);

//QUESTION 2
// var message = "Hello," + " Dolly";
// alert(message);

//QUESTION 3
// alert("33" + 3);

//QUESTION 4
// var k = "pakistan";
// var l = "zindabad";

// alert(k+l);

//QUESTION 5
// var p = "The Number is"
// var q = 10;

// alert(p + q);

//QUESTION 6
// var h = "Hello";
// var f = "Hammad";
// alert(h + f);

//CHAPTER NO 9 PROMPTS

//QUESTION 1
// var firstName = prompt("Enter first name");

//QUESTION 2
// var country = prompt("Country?", "China");

//QUESTION 3
// var yourName = prompt("Enter Your Name");

//QUESTION 4
// var pol = prompt("please Enter your favorit color", "yellow");

//QUESTION 5
// var first = "What is your favorite food?";
// var defaultResponse = "Pizza";

// var userResponse = prompt(first, defaultResponse);

//QUESTION 6
// var ham = "What is your favorite color?";
// var dResponse = "Blue";

// var userResponse = prompt(ham, dResponse);

// alert("Your favorite color is: " + userResponse);


// IF STATMENTS

//QUESTION NO 1
// var city = "Karachi";
// if (city === "Karachi") {
//     console.log("The City of Lights");
// }

// var numb = 7;
// if (numb > 5) {
//     console.log("The number is greater than 5");
// } else {
//     console.log("The number is not greater than 5");
// }

//QUESTION NO 2
// if (x === y) {
//     var z = prompt("Enter the value of z:");
// }

//QUESTION NO 3
// var zipcode = ("10010");
// if (zipcode === "10010") {
//     alert("karachi");
// } else {
//     alert("please write correct city");
// }


//QUESTION NO 4
// var x = 5;
// if (x === 5) {
//     x = 10;
// }

//QUESTION NO 5 
// var x = 5;

// if (x === 5) {
//     x = 10;
// }


//CHAPTER NO 11 COMPARISON OPERATOR

//QUESTION NO 1
// if  (variable1 !== variable2){

// }

//QUESTION NO 2
// if  (variable1 >= variable2){

// }

//QUESTION NO 3
// var namea = 5;
// if (namea !== 10) {
//     namea = 10;
// }

//QUESTION NO 4
// var number1 = 5;
// var number2 = 10;


// if(number1 !== number2){
//     alert("Congratulations!");
// }


//QUESTION NO 5
// var firstNam = prompt("please Enter your first name");

// if(firstNam !== "hammad"){
//     alert("no match");
// }

//CHAPTER NO 12 IF ..... ELSE AND ELSE IF STATMENTS
//QUESTION NO 1
// var var1 = 10;
// var var2 = 38;

// if(var1 >= var2){
//     alert("Variable 1 is greater than or equal to Variable 2");
// }else{
//     alert("Variable 1 is less than Variable 2");   
// }


//QUESTION NO 2
// Taking marks from the user
// var marks = parseFloat(prompt("Enter your marks:"));

// Assuming total marks is 100
// var totalMarks = 100;

// Calculating percentage
// var percentage = (marks / totalMarks) * 100;

// Evaluating grade based on percentage
// if (percentage >= 90) {
//     console.log("Your percentage is " + percentage.toFixed(2) + "%. Grade: A");
// } else if (percentage >= 80) {
//     console.log("Your percentage is " + percentage.toFixed(2) + "%. Grade: B");
// } else if (percentage >= 70) {
//     console.log("Your percentage is " + percentage.toFixed(2) + "%. Grade: C");
// } else if (percentage >= 60) {
//     console.log("Your percentage is " + percentage.toFixed(2) + "%. Grade: D");
// } else if (percentage >= 50) {
//     console.log("Your percentage is " + percentage.toFixed(2) + "%. Grade: E");
// } else {
//     console.log("Your percentage is " + percentage.toFixed(2) + "%. Grade: F");
// }

//QUESTION NO 3
// if (a === 10) {
//     alert("a is 10");
// } else {
//     alert("The correct value of a is " + a);
// }


//QUESTION NO 4
// var city = prompt("Enter a city:");

// if (city === "Karachi") {
//   alert("It is Karachi");
// } else if (city === "Lahore") {
//   alert("It's Lahore");
// } else {
//   alert("It's neither Karachi nor Lahore");
// }

// TESTING SETS OF CONDITIONS

//QUESTION NO 1 
// if a == b and c == d:

//QUESTION NO 2
// if a ==b or c != d:

//QUESTION NO 3
// if (name =="Hamza"or name != "arsalan"  ) and age < 60:

//QUESTION NO 4
// var firstName = "Hammad";
// var lastName = "iqbal";

// var userfirstName = prompt("Enter your first name");
// var userlastName = prompt("Enter your last name");

// if (userfirstName === firstName && userlastName === lastName){
//     alert("Names !Match");
// }else{
//       alert("Name don't !Match");
// }

//CHAPTER NO 14 IF STATEMENTS NESTED
//QUESTION NO 1
// var  password = prompt("Enter your password:");

// if (password !== "") {
//     if (password.length <= 5) {
//         alert("Password must be greater than 5");
//     } else {
//         alert("OK");
//     }
// }

//QUESTION NO 2
// if(a === 10){
//     alert("a is 10");
// }else{
//     ("the correct value of a" + a);
// }

//CHAPTER NO 13 TESTING SETS OF CONDITIONS
//QUESTION NO 1
// if(a == b && c == d){

// }

//QUESTION NO 2
// if(a == b || c !== d){

// }

//QUESTION NO 3
// if ((name === "hamza" || name === "arsalan") && age <60){

// }

//QUESTION NO 4
// var firstVar = 10;
// var secVar = 20;

// if(firstVar < secVar || firstVar > secVar){
//     alert("first var is not equal to secvar");
// }


//QUESTION NO 5
// var firstName = "hammad";
// var lastname = "iqbal";

// var userfirstName = prompt("Enter your first name");
// var userLastName = prompt("Enter your last name");

// if(userfirstName === firstName && userLastName === lastname){
//     alert("No Match");
// }


//CHAPTER NO 14 IF STATMENT NESTED
//QUESTION NO 1
// var a = 1;
// var c = "Max";

// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }

//QUESTION NO 2
// var a = 1;
// var c = "Max";

// if(a === 1 && c === "max"){
//     alert("ok");
// }


//QUESTION NO 3
// var num1 = 10;
// var num2 = 10;

// if(num1 ===num2){
//     if(num1 <= num2){
//         alert("condition are true");
//     }
// }

//CHAPTER NO 15 ARRAY I
//QUESTION NO 1
// var hmm = [];

//QUESTION NO 2
// var hmm = ["HAMMAD"];

//QUESTION NO 3
// var hmm = ["a","b","c","d","e"];
// alert(hmm);

//QUESTION NO 4
// var hmm = ["a","b","c","d","e","F","G"];
// var totalLenth = hmm.length;
// console.log(totalLenth);

//QUESTION NO 5
// var arrayElement = ["first Elements"];
// arrayElement [1] ="secElement";

// alert(arrayElement[1]);

//CHAPTER NO 16 ARRAY II
//QUESTION NO 1
// var myArray = ["firstElement"];
// myArray.push("secondElement");

// var lastElement = myArray[myArray.length - 1];
// alert(lastElement);

//QUESTION NO 2
// var khan = ["h", "i", "j", "k"];
// khan.pop();

// console.log(khan);

//QUESTION NO 3
// var khan = ["h", "i", "j", "k"];
// khan.push(5);

// console.log(khan);

//CHAPTER NO 16 ARRAY III
//QUESTION NO 1
// var khan = ["h", "i", "j", "k"];
// khan.shift(5);

// console.log(khan);

//QUESTION NO 2
// var khan = ["h", "i", "j", "k"];
// khan.unshift(5,8,5);

// console.log(khan);
 
//QUESTION NO 3
// var khan = ["First Element"];
// khan.unshift("Sec Element");

// var nama = khan[0];
// console.log(nama);

//QUESTION NO 4
// var khan = ["h", "i", "j", "k"];
// khan.splice(6,"H");

// console.log(khan);

//QUESTION NO 5
// var khan = ["h", "i", "j", "k"];
// var pol = khan.slice(0,2);

// console.log(pol);

//QUESTION NO 6
// var khan = ["h", "i", "j", "k"];
// khan.splice(1,2, "khan","lao");

// console.log(khan);

//QUESTION NO 7
// var pol = ["dog","ox","loin","cat","duck"];
// var lop = pol.slice(3,5);
// console.log(lop);


//CHAPTER NO CHAPTER  17 - 20 FOR LOOPS
//QUESTION NO 1
// for(var i = 0; i < 10; i++){
//     console.log("Hammad",i+1);
// }

//QUESTION NO 2
// for i in Range(0 ,12);

//QUESTION NO 3
// for (var i = 0; i <= 4; i++);

//QUESTION NO 4
// for (var count = 1; count < 101; count++) {

// }

//QUESTION NO 5
// for (var i = 10; i > 7; i--) {

// }

//QUESTION NO 6
// var myArray = [1, 2, 3, 4, 5];
// var numberOfElements = myArray.length;

//QUESTION NO 7
// var flag = true;

//QUESTION NO 8
// pets = ['dog','cat','rabbit','fish'];

// for i in Range(len(pets)):
// print(pets[1])

//QUESTION NO 9
// var userNames = ["Alice", "Bob", "Charlie", "David"];

// var firstName = prompt("Enter first name");

// for (let i = 0; i < userNames.length; i++) {
//     if (firstName === userNames[i]) {
//         alert("Enter");
//         break;
//     } else if (i === userNames.length - 1) {
//         alert("Please write correct user name");
//     }
// }


//QUESTION NO 10
var first = ["a", "b", "c", "d", "e", "f"];
var second = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < first.length; i++) {
    for (var j = 0; j < second.length; j++) {
        console.log(first[i] + second[j]);
    }
}
