console.group("hello Teacher")
//q1 Print numbers from 1 to 20 using a for loop.
// let num=20;
// for(i=1;i<=20;i++){
//     console.log(i)
// }


//q2 Print all even numbers from 1 to 50.
// let num=50;
// for (i=1; i<=50; i++){
//     if(i%2==0){                              //back tick to print number buddy read it 
//         console.log(`the No. ${i} is EVEN `)
//     }else {
//         console.log(`the No. ${i} Is ODD `)
//     }
// }

//q3 Find the sum of numbers from 1 to 100.
// let sum =0;
// for (i=1; i<=100;i++){
//         sum=sum+i;
//         console.log(sum);

    
// }
// console.log(sum)


//q4 Print all numbers from 1 to 50 which is divisible by 5.
 
// for (i=1; i<=50;i++){
//     if(i%5==0){
//         console.log(`${i} is divisible by 5`)
//     }
// }

// //q5 Print the multiplication table of 8 using a loop.


// for (i=1; i<=10;i++){
//      console.log(8*i) //
// }


// q6Check whether the number is a palindrome using a loop
 


    // let num=1221;
    // let reverse=0;
    // let temp = num;
    // while(num>0){
    
    //     let digit=Math.floor(num%10);
    //     reverse= reverse*10+digit;
    //     num=Math.floor(num/10);
        
    // }
    
    // console.log(reverse)
    // if (reverse==temp){
    // console.log("the no. is pallindrome")
    // }else {
    //     console.log("thnk you teacher i will try to cover it today all")
    // }

    // question revisions
    //q1 table printing
//    for(let i=1; i<=10; i++){
//     console.log(5*i)
//    }     
//    //q2 even orr odd
//  for (let i=1; i<=100; i++){
//     if(i%2==0){
//         console.log(`${i} is EVEN`)
//     }else{
//         console.log(`${i} is ODD`)
//     }
//  }

 //q3 nesting test 
//  for (let i=1; i<=3; i++){
//     for(let j=1; j<=3; j++){
//         console.log(j)
//     }
//  }

// //q4 star pattern
// for(let i=1; i<=4; i++){
//      let pattern = ""
//     for(j=1; j<=i; j++){
//         pattern = pattern + "*";
        
//     }
//     console.log(pattern)
// }

// Count digit
let num = 12345
let count = 0;
while(num>0) {
    num = Math.floor(num/10)
    count++;
}
console.log(count)

