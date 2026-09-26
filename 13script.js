// console.log("Hello King ")
// //q1 Create an array of 5 numbers and print the first element, last element, and length of the array.
// let nos= [1,2,3,4,5]
// console.log(nos[1,4])
// //q2 2. Add "Mango" to the end and "Apple" to the beginning of this array:
//    let fruits = ["Banana", "Orange", "Grapes"];
//    fruits.push("MANGO")
//    fruits.unshift("APPLE")
//    console.log(fruits)
//  //q3 3. Remove the first and last elements from this array:
// //    let numbers = [10, 20, 30, 40, 50];
// //    numbers.pop(0) // removes from end 
// //    numbers.shift(4)//removes from start 
// //    console.log(numbers)
// //q4 4. Check whether "JavaScript" exists in this array:
// //    let skills = ["HTML", "CSS", "React", "Node"];
// //    console.log(skills.includes("JAVA SCRIPT"))
// //q5  Find the index of "React" in this array:
//    let skills = ["HTML", "CSS", "JavaScript", "React", "Node"];
//    console.log(skills.indexOf("React"))
// //q6 6. Use slice() to create a new array containing [30, 40, 50]:
//    let numbers = [10, 20, 30, 40, 50, 60];
//   console.log( numbers.slice(2,5))

//   //q7 7. Use splice() to remove "CSS" from this array:
//    let skills1 = ["HTML", "CSS", "JavaScript", "React"];
//    console.log( skills1.splice(1,1))
//    console.log(skills1)

//    //q8 8. Use splice() to replace "JavaScript" with "TypeScript":
//    let skills2 = ["HTML", "CSS", "JavaScript", "React"];
//    skills2.splice(2,1,"TypeScript") // phele start kha se krna dekhega then delte kitne then print what we hav to 
//    console.log(skills2)

//    //q9 9. Insert "Python" between "JavaScript" and "React":
//    let lang = ["HTML", "CSS", "JavaScript", "React"];
//    lang.splice(3,0,"Python")
//    console.log(lang)

//    //q10 10. Remove "Banana" and add "Mango" in its place:
//     let fruitsa = ["Apple", "Banana", "Orange"];
//     fruitsa.splice(1,1,"mango")
//      console.log(fruitsa)
// // q15 15. Perform the following operations:
//     let fruitsb = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
//     fruitsb.splice(2,1,"Pineapple")
//     fruitsb.splice(5,0,"WATERMELON")
//     fruitsb.shift(1)
//     console.log(fruitsb)
//      17.09.2026

//q1
// let arr=[1,2,3,4,5,6]
// for (let num of arr)
//    { if (num%2==0){
//       console.log(num)
// }
//    }

//    //q2
// let str="JAVASCRIPT"
//    for (let char of str ) {
//       console.log(char)
//    }

//    //q3
//    let fruits = [
//       ["apple","banana"],
//       ["mango","orange"],
//       ["grapes", "kiwi"]
//    ]
//    for(let lists of fruits){
//       for(let aa of lists)
//          {
//          console.log(aa)
//       }
   
//    }

   // let arr=[12,45,7,89,34,67,23]
   //  let largest = arr[0]
   //  for (let i of arr){
   //    if(i>largest){
   //       largest=i
   //    }
   //  }
   //  console.log(largest)

    let arrr=[
      [5,2,8,5],
      [1,5,3],
      [5,7,5,9]
    ]
    let count=0;
    for (let num of arr1){
     for( let arr1 of num)
   
   { if (num==5){
     count ++
}
   }
}
 console.log(num)