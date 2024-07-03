

// 1
function fullname(firstname, lastname) {
  return firstname + " " + lastname;
}
console.log(fullname("dax", "daxshana"));

// 2
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one anothr.")

// 3
console.log(" 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 4 16 64 \n 5 1 5 25 125")


// 5
const d = new Date();
let year = d.getFullYear();
console.log(year);

let month = d.getMonth() + 1;
console.log(month);

const c = new Date();
console.log(c)

let day = d.getDate();
console.log(day);


// 6
// y=mx+c
//y=2x-2
function straightline(m, c) {
  const slope = m;
  const yIntercept = c;
  const xIntercept = -c / m;
  return `Slope: ${slope},\n Y-Intercept: ${yIntercept},\n X-Intercept: ${xIntercept}`;
}
console.log(straightline(2, -2));


//7
// (2,2),(6,10)
function calculateslope(x1, y1, x2, y2) {
  const slope1 = (y2 - y1) / (x2 - x1);
  return `slope:${slope1}`
}
console.log(calculateslope(2, 2, 6, 10));

// // 8
// // weeklyearnings=h*rs/h
// const hours = prompt("Enter hours:");
// const rateperHour = prompt("Enter Rate Per Hour:");
// const weeklyearnings = hours * rateperHour;
// alert(`Your weekly earning is ${weeklyearnings}`);

// 9
// age=current year-birthyear
// const currentyear = new Date().getFullYear();
// const birthyear = prompt("Enter your birth year:");
// const age = currentyear - birthyear;
// if (age >= 18) {
//   alert(`You are:${age}. You are old enough to drive.`);
// } else {
//   const wait = 18 - age;
//   alert(`You are:${age}. You will be allowed to drive after${wait} years.`);
// }


// 10
const numbers = [1, 2, 3, 4, 5, 6, 7];
const evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);

// 11
const Numers = [1, 2, 3, 4, 5];
const squareNumbers = Numers.map(function (number) {
  return number * number;
});
console.log("Square Numbers:", squareNumbers);

// 13
const greets = (name) => {
  return `Welcome ${name} to the team.`;
};

console.log(greets('Ryan')); 
console.log(greets('Sara'));

// 14
const litres = (time) => {
  return Math.floor(time * 0.5);
};

console.log(litres(0));    
console.log(litres(2));   
console.log(litres(1.4));  
console.log(litres(3.8));  
console.log(litres(5));    

// 15
const positiveSum = arr => {
  return arr.reduce((sum, num) => {
    return num > 0 ? sum + num : sum;
  }, 0);
};

console.log(positiveSum([1, 2, 3, 4, 5])); 
console.log(positiveSum([1, -2, 3, 4, 5])); 
console.log(positiveSum([-1, 2, 3, 4, -5])); 
console.log(positiveSum([-1, -2, -3, -4, -5])); 
console.log(positiveSum([])); 

// 16
const calculateBMI = (weight, height) => {

  const bmi = weight / (height * height);

  let category;
  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Overweight";
  } else if (bmi >= 30) {
    category = "Obese";
  }


  return {
    bmi: bmi.toFixed(2),  category: category
  };
};

console.log(calculateBMI(70, 1.75)); 
console.log(calculateBMI(50, 1.60)); 
console.log(calculateBMI(90, 1.80)); 
console.log(calculateBMI(110, 1.70)); 
console.log(calculateBMI(45, 1.60));


//condition
// 1

let n = -1;
let ans = n < 0 ? "Negative" : n=0 ? "Zero":"Positive";
console.log(ans);

//  2

let n1= 4;
let oddEven = n1%2===0 ? "Even Number" :"Odd Number";
console.log(oddEven);

// 3

let num1 = 20;
let num2 = 30;
let max = num1>num2 ? num1 : num2;
console.log(`The greater number is:${max}`)

// 4

let age = 11;
let ticketPrice = age<12 ? "Rs5" : age<18 ? "Rs10" : age<60 ? "Rs20" : "Rs15";
console.log(ticketPrice);

// 5

let year1 = 2011;
let leapYear = year1%4===0 ? "Leap year" : "Not a leap year";
console.log(leapYear);

// 6

let price = 120;
let priceDiscount = price>100 ? 20 : price>= 50 ? 10 : 0;
console.log(priceDiscount);

// 7

const greetUser = (currentTime)=>{
  const greetings =
  currentTime >= 5 && currentTime<12? "Good morning":
  currentTime>=12 && currentTime<18 ? "Good afternoon":
  "Good evening";
  console.log(`${greetings},there!`)
 
 };
 
 greetUser(8);
 greetUser(15);
 greetUser(21);
 
 
// loop
// 1
for (let i = 0;i<=5;i++){
  console.log(i);
 
 }

//  2
const sumNumbersFormula = () => {
  const n = 99;
  return (n * (n + 1)) / 2;
};

console.log(sumNumbersFormula());

// 3
const sumEvenNumbersFormula = () => {
  const firstEven = 10;
  const lastEven = 100;
  const numberOfEvens = ((lastEven - firstEven) / 2) + 1;
  const sum = (numberOfEvens / 2) * (firstEven + lastEven);
  return sum;
};

console.log(sumEvenNumbersFormula());



