// 3.	Write a program to print out

// a.	7 numbers, starting from 0 (no user input)
// let x = 0;
// while(x<7){
//     console.log(x);
//     x++;
// }

// b.	n numbers, starting from 0, n entered by user
// let n = Number(prompt("Please insert number of times you wanna print!"));
// let x = 0;
// while(x < n){
//     console.log(x);
//     x++;
// }

// c.	A sequence of numbers, starting from 3, ending before n, n entered by user
// let n = Number(prompt("Please insert number of times you wanna print! The number must be greater than 3!"));
// let x = 3;
// if (n < 4) {
//     alert("The number must be greater than 3. Please reload the page and insert another number!");
// }
// while(x < n){
//     console.log(x);
//     x++;
// }


// d.	A sequence of numbers, starting from c, ending before n, c and n entered by user
// let beginNumber = Number(prompt("Please insert the begining number!"));
// let endNumber = Number(prompt("Please insert the ending number! This number must be greater than the begining number!"));
// let x = beginNumber;
// if (x >= endNumber) {
//     alert("If the begining number is " + beginNumber + " the ending number must be greater than " + beginNumber + ". Please reload the page and insert another number!");
// }
// while(x < endNumber){
//     console.log(x);
//     x++;
// }

// e.	A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
// let beginNumber = Number(prompt("Please insert the begining number!"));
// let endNumber = Number(prompt("Please insert the ending number! This number must be greater than the begining number!"));
// let x = beginNumber;
// if (x >= endNumber) {
//     alert("If the begining number is " + beginNumber + " the ending number must be greater than " + beginNumber + ". Please reload the page and insert another number!");
// }
// while(x < endNumber){
//     console.log(x);
//     x+=3;
// }

// f.	A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
// let beginNumber = Number(prompt("Please insert the begining number!"));
// let endNumber = Number(prompt("Please insert the ending number! This number must be greater than the begining number!"));
// let step = Number(prompt("Please insert the step number!"));
// let x = beginNumber;
// if (x >= endNumber) {
//     alert("If the begining number is " + beginNumber + " the ending number must be greater than " + beginNumber + ". Please reload the page and insert another number!");
// }
// while(x < endNumber){
//     console.log(x);
//     x+=step;
// }

// 4.	Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
// let n = Number(prompt("Please insert a positive number!"));
// let x = 1;
// let m = 1;
// if (n<0) {
//     alert("The inserted number should be positive!")
// }
// while (x <= n) {
//   m *= x; 
//   x++; 
// }
// alert("The Factorial of " + n + " is: " + m);

// 5.	Write a program asking users their age, and then decide if they are old enough to view a 14+ content
// let age = Number(prompt("Please insert your age before watching this video!"));
// if (age < 14) {
//     alert("Please watch other videos. You are not allowed at this age!");
// }
// if (age >= 14) {
//     alert("Enjoy your video ^^");
// }

// 6.	Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
// let n = Number(prompt("Please insert a number in range 0 - 9!"));
// if (n >= 0 && n <= 9) {
//     if (n <= 9/2) {
//         alert("Your number is lower half of 9.");
//     } else {
//         alert("Your number is higher half of 9.");
//     }
// } else {alert("Please insert a number in range 0 - 9!");
    
// }

// 7.	Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
// let n = Number(prompt("Please insert the maximum number!"));
// let x = Number(prompt("Please insert a number in range 0 - " + n));
// if (x >= 0 && x <= n) {
//     if (x <= n/2) {
//         alert("Your number is lower half of " + n);
//     } else {
//         alert("Your number is higher half of " + n);
//     }
// } else {alert("Please insert a number in range 0 - " + n);
    
// }

// 8.	Write a script to check if a number is even (divisible by 2) or odd number
// let n = Number(prompt("Please insert a number for checking!"));
// if (n % 2 == 0) {
//     alert(n + " is an even number.");
// } else {
//     alert(n + " is an odd number")
// }

// 9.	Write a program to print out
// a.	6 L’s and H’s, half L’s, half H’s (L means low, H means high)
for (let index = 0; index < Math.ceil(6 / 2); index++) {
    console.log("L");
}
for (let index = 0; index < Math.floor(6 / 2); index++) {
    console.log("H");
}

// b.	n L’s and H’s in total, n entered by user
// let total = Number(prompt("Please insert a number!"));
// for (let index = 0; index < Math.ceil(total / 2); index++) {
//     console.log("L");
// }
// for (let index = 0; index < Math.floor(total / 2); index++) {
//     console.log("H");
// }

// c.	8 1’s and 0’s in total, consecutively
// for (let index = 0; index < 8; index++) {
//     if (index % 2 == 0) {
//         console.log(0);
//     } else {
//         console.log(1)
//     }
// }

// d.	n 1’s and 0’s in total, consecutively, n entered by user
// let total = Number(prompt("Please insert a number!"));
// for (let index = 0; index < total; index++) {
//     if (index % 2 == 0) {
//         console.log(0);
//     } else {
//         console.log(1)
//     }
// }


// 10.	Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows
// let weigh = Number(prompt("Please insert your weigh in kg."));
// let height = Number(prompt("Please insert your height in cm."));
// if (height != 0) {
//     let BMI = weigh/(height/100)**2;
//     console.log("Your BMI is: " + BMI)
//     if (BMI < 16) {
//         console.log("You're severely underweight!");
//     } else {
//         if (BMI < 18.5) {
//             console.log("You're underweight!");
//         } else {
//             if (BMI < 25) {
//                 console.log("You're Normal!");
//             } else {
//                 if (BMI < 30) {
//                     console.log("You're Overweight!");
//                 } else {
//                     console.log("You're Obese!");
//                 }
//             }
//         }
//     }
// } else {
//     console.log("Your height should not be '0'. Please try again.")
// }

// BÀI 11, 12, 13 VẼ NHỜ JS TURTLE Ở LINK: https://turtle-js.herokuapp.com/
// 11.	Use JS Turtle, to draw the following shapes
// a.	A square
// for (let index = 0; index < 4; index++) {
//     fd(100);
//     rt(360/4);
// }

// b.	A triangle
// for (let index = 0; index < 3; index++) {
//     fd(100);
//     rt(360/3);
// }

// c.	A pentagon
// for (let index = 0; index < 5; index++) {
//     fd(100);
//     rt(360/5);
// }

// d.	A hexagon
// for (let index = 0; index < 6; index++) {
//     fd(100);
//     rt(360/6);
// }

// 12.	Use JS Turtle to draw a polygon, the number of polygon’s edges entered by users
// let numberOfEdge = Number(prompt("Please insert number of edges in your Polygon!"));
// for (let index = 0; index < numberOfEdge; index++) {
//     fd(100);
//     rt(360/numberOfEdge);
// }

// 13.	(Optional) Use JS Turtle to draw n polygons, n entered by users
// let numberOfPolygon = Number(prompt("Please insert number of Polygons you wanna draw!"));
// if (numberOfPolygon >= 1) {
//     for (let i = 0; i < numberOfPolygon; i++) {
//      for (let index = 0; index < i+3; index++) {
//     fd(100);
//     rt(360/(i+3));
// }   
        
//     }
// } else {
//     alert("The number of Polygons must be greater than 0. Please try again!")
// }
