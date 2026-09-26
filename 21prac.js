// const namea={
//     name:"Arshan",
//     age:22,
//     course:"BCA"
// }
// console.log(namea.name)
// console.log(namea.age)
// console.log(namea.course)

// const product={
//     name:"laptop",
//     price:50000
// }
// product.brand="Lenovo"
// product.price=49000
// console.log(product)
// delete product.brand
// console.log(product)

// const object1={
//     name:"Arshan",
//     age:22,
//     skills:["Html","CSS","JAVA"],
//     address:{
//         city:"Meerut",
//         State:"Up"
//     }    
// }
// console.log(object1)
// console.log(object1.skills)

// const object2={
//     studentA:{
//          name:"Arshan",
//     age:22,
//     skills:["Html","CSS","JAVA"],
//     address:{
//         city:"Meerut",
//         State:"Up"

//     },
//      studentB:{
//          name:"Shan",
//     age:20,
//     skills:["CSS","JAVA"],
//     address:{
//         city:"xyz",
//         State:"UK"
//     }
// }

//     }
// }
// for( const key in object2){
//     console.log(key, object2[key])


// }

//22.09.

// function ms(){
//     console.log("Welcome to Java Script")
// }
// ms()

// function add(a,b){
//     console.log(a+b)
// }
// add(10,20)
// function topay(price,quantity){
//     console.log(price*quantity)
// }
// topay(25,5)//argument
  
// function country(countryname="INDIA"){
//     console.log("Thw city in",countryname)

// }
// country("Italy")
// country()

// function add1(a=0,b=0){
//     console.log(a+b)
// }
// add1(10,20)
// add1()

// function square(a,b){
//     return a**b


// }
// let sq= square(3,2)
// console.log(square(10,2))
// console.log(sq)

// function square(number){
//     return number*number
// }
// let sq1= square(5)
// console.log(sq1)

// function checknumber(number){
//     if(number%2==0){
//         return"No is EVEN"
//     }

//     return "the No. is ODD"
    
// }
// // console.log(checknumber(1))

// function checknumber(number){
//     return number%2==0
// }

// if(checknumber(25)){
//     console.log("Yes The Number is EVEN")
// }
// else {
//     console.log("the No. Is ODD")


// }

//23.09.2026


// function oddeventest(request){
//     if(request =='even'){
//         return function (n){
//         if(n%2==0){
//             console.log("Yes, its a Even No.")
//         }
//      else {
//         console.log("Not Even No.")
//     }
// }
//     }else if(request =='odd'){
//         return function(n){
//             if(n%2 !=0){
//             console.log("Yes Its a Odd No.")
//         }
//     else{
//         console.log("the No. is Not odd")
//     }
// }
//     }else {
//         console.log("Wrong digit")
//     }
// }
// let func=oddeventest("even")
// func(5)

function calculate(request){
    if(request =='+'){
        return function(a,b){
            {
                console.log(a+b)
            }
        
        }
    }else if(request =='-'){
        return function(a,b){
            console.log(a-b)
        }
    } else if(request =='*'){
        return function(a,b){
            
                console.log(a*b)
            
        }
    }else if(request =='/'){
        return function(a,b){
                console.log(a/b)
      }
    }else {
        console.log("wrong operator")
    }
}
let func=calculate('/')
func(5,7)



