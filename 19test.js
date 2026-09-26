console.log("TEst Day ")

//q1
// let name="Arshan";
// let age="22";
 
// let student=true;

// console.log(name)
// console.log(age)
// console.log(student)
 
// //q2
// let a = 10;
// let b = 3;

// console.log(a + b);
// console.log(a % b);
// console.log(a ** 2);

// q3 
// let name=prompt("Enter name here")
// let number=prompt("enter your No.")
// if (number>=1){
//     console.log('the number is Potitive')
// }else if(number<1){
//     console.log('the number is negative')

// }else {
//     console.log('the number is zero')
// }

//q4
// let name=prompt("Enter name here")
// let numA=Number(prompt("enter No.")) // output string me print hota hai usku number m convert krne k liye NUMBer use kiya 
// let numB=Number(prompt("enter No."))
// let total=numA + numB;
// console.log(total)

//q5
// let num=[15, 20, 5]
// for(num=1; num<=50; num++){
// console.log(num)
// }

//qxyz
// let age=20;
// if(age>=18){
//     console.log("The person is eligible to Vote")
// }else{
//     console.log("Try Next Year ")
// }

// let num=15;
// if(num%3==0 && num%5==0){
//     console.log("The No is Divisible by both")

// }else{
//     console.log(" Gave Next no.")
// }

// let nA=15;
// let nB=20;
// let nC=22;
// if(nA>nB && nA>nC){
//     console.log("nA is largest ")
// }else if(nB>nC && nB.nC){
//     console.log("nB is Largest")

// }else{
//     console.log("C is Largets ")
// }

//Take a student's marks and print:
// 90+ → A
// 75–89 → B
// 50–74 → C
// below 50 → Fail

// let total=85;
// if (total>=90){
//     console.log("Grade A is yours")
// }else if( total>=75){
//     console.log("the Grade is B")
// }else if ( total>=50){
//     console.log("The Grde is C")
// }else {
//     console.log("Try again Buddy ")
// }
 
// let sum=0;
// for(let i=1; i<=100; i++){
//      sum= sum+i;
//      }
//      console.log(sum)


    //  let str="arshan";
    //  let count=0;

    //  console.log(str.length)
    //  console.log(str.toUpperCase())
    
    //  for(let char of str){
    //     if("aieou". includes(char)){
    //         count++;
    //     }
    //  }
    //   console.log(count);

// let str = "javascript";
// let count = 0;

// for (let char of str) {
//   if ("aeiou".includes(char)) {
//     count++;
//   }
// }

// console.log(count);



/// after test ques practise//
// swap nos.//
//   q1
//  let a=22 ;
//  let b= 2 ;
//  let temp = b;
//   b=a;
//   a=temp;
//   console.log(a)
//   console.log(b)

//    q2 
//   let x=100;
//   let y=50;
//   let temp =x;
//       x=y
//       y=temp
    
//       console.log(x)
//       console.log(y)
////reverse a string ////
let str = "Mehnaz"
let reverse = ""
for(let i=str.length-1; i>=0; i--) {
    reverse = reverse + str[i]
}
console.log(reverse)

let newStr = str.split("").reverse().join("")
console.log(newStr)

