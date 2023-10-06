// FUNCTION-------------------

// Q1-----------  
// function currentDateTime() {

//   var currentDate = new Date();
//   var dateTimeString = currentDate.toString();
//   alert("Current date and time: " + dateTimeString);
// }

// currentDateTime();

// Q2-------------

// function fullName(firstName,lastName){
//   return firstName + lastName;
// }

// var firstName = prompt("Enter your first name");
// var lastName = prompt("Enter your last name");

// fullName(firstName,lastName);

//     document.write("Hello " + fullName(firstName,lastName));

// Q3------------

// var num1 = +prompt("enter your first num");
// var num2 = +prompt("enter your second num");

// function sum(num1,num2){
//     return num1 + num2;
// }

// sum(num1,num2);
// console.log(num1 + num2);
    
// Q4----------

// var num1 = +prompt("enter your nummber");
// var oper = prompt("enter your operator");
// var num2 = +prompt("enter your nummber");

// function calc(num1, oper, num2) {
//   if (oper === "+") {
//     return num1 + num2;
//   }
//   else if (oper === "-") {
//     return num1 - num2;
//   }
//   else if (oper === "*") {
//     return num1 * num2;
//   }
//   else if (oper === "/") {
//     return num1 / num2;
//   }
//   else if (oper === "%"){
//     return num1 % num2;
//   }

// }

// var res = calc(num1, oper, num2);
// console.log(res);

// Q5-----------

// function square(num1,num2) {
//     return num1 ** num2;
// }
// square(25,2);

// document.write(square(25,2));

// or------------

//  console.log(Math.pow(25,2));

// Q6-----------

// formula of factorial is ---------- n! = n * (n-1) * n *(n-2)...*1

// function factorial(n) { 

//   if (n == 0) return 1; 
//   return n * factorial(n - 1); 

// } 

// var userInput = +prompt("enter your num ");
// factorial(userInput);

// document.write(factorial(userInput));

// Q7------------

// var endNum = +prompt("enter ending value");

// function count(endNum) {

//   for (let i = 0; i < endNum; i++) {
//     console.count("counting");
//   }
   
// }

// count(endNum);

// Q8-------------

// function calculateHypotenuse(calculateSquare,calculateperpendicular) {
//   function calculateSquare() {
//       return baseInput * baseInput;
//   }
//   function calculateperpendicular() {
//     return perpendicularInput * perpendicularInput;
//   }
//    return calculateSquare() + calculateperpendicular();
// }

// var baseInput = +prompt("enter number for base value");
//  var perpendicularInput = +prompt("enter number for perpendicular value");

// calculateHypotenuse(baseInput*baseInput,perpendicularInput*perpendicularInput);

// console.log(Math.pow(baseInput,2));

// console.log(perpendicularInput * perpendicularInput);

//  console.log(calculateHypotenuse());

// Q9 (i)-------------

// function areaofRectangle(width,height) {
//   return width * height;
// }

// var res =areaofRectangle(20,50);

// console.log("The area of the rectangle by using values is:" + res);

// // Q9 (ii)-------------

// function calculateRectangleArea(width, height) {
//   return width * height;
// }

// var width = 5;
// var height = 10;
// var res2 = calculateRectangleArea(width, height);
// console.log("The area of the rectangle by using variables is:" + res2);

// Q10-----------

// function palindromeWord(word) {
//   return word;
// }
// var word = prompt("enter your word");

// var res = palindromeWord(word);

// console.log(res);

/*
function palindrome(str) {  
  
   var len = str.length; 

   for (var i = 0; i < len / 2; i++) {  
    
    if (str[i] !== str[len - 1 - i]) {  
         
        alert("It is not a palindrome"); 
         break; 
      
       } 
      else {
         alert("It is a palindrome");
         break;
      }
      
  } 
}

var str = prompt("Enter a string or number"); 
  
palindrome(str);*/

// Q11----------

// function uppercase(sentence) {

//   var arr = sentence.split(" ");
//   var arr1 = [];
    
//   for(var i = 0; i < arr.length; i++){
//       arr1.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
//   }
//   return arr1.join(" ");
// }

// console.log(uppercase("the quick brown fox"));

// Q12---------- undefined result 

// function longestSpell(userInput) {
//   var word = userInput.split(" ");
//    var longestWord = " ";

//   for (var i = 1 ; i < word.length ; i++) {
//     if (word.length < longestWord.length) {
      
//       return longestWord;

//     }
//     }

// }

// var userInput = prompt("Enter a sentence:");
//  var longestWord = longestSpell(userInput);

// console.log(longestWord);


// Q13----------

// function countLetter(userInput, letter) {
//   var count = 0;
//   for (var i = 0; i < userInput.length; i++) {
//     if (userInput[i] === letter) {
//       count++;
//     }
//   }
//   return count;
// }

// var userInput = "JSResourceS.com";
// var letterToCount = "o";
// var result = countLetter(userInput, letterToCount);

// console.log("The letter " +letterToCount + " appears " + result + " times in the string.");

// Q14-----------
/*
function calcCircumference(radius) {

  var circumference = Math.PI * 2 *radius;

  console.log("The circumference is " + circumference);

}

function calcArea(radius) {

  var area = Math.PI * Math.pow(radius, 2);
  console.log("The area is " + area);
}

var radius = parseInt(prompt("Enter the radius of the circle:"));

if (!isNaN(radius)) {

  calcCircumference(radius);
  calcArea(radius);
}

 else {

  console.log("Please enter a valid radius.");

 } */





