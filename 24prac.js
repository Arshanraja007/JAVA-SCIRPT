// const person ={
//     intro :function(name,age){
//         console.log(name,age)
//     }
// }
// person.intro("Arshan",22)

// const calculator ={
//     add : function(a,b){
//         return a+b
//     },
//     subtract : function(a,b){
//         return a-b   
//     },
//      multiply: function(a,b){
//         return a*b   
//     }

// }
// console.log(calculator.add(20,10))
// console.log(calculator.subtract(20,10))
// console.log(calculator.multiply(20,10))

// const greet =() => {
//     console.log("Hello ")//3rd method of function we make
// }
// greet()
// const add = ( num1,num2) => {
//     console.log(num1+num2)
// }
// add(50,5)

// const multiply= (a,b) => (a*b)
// console.log(multiply(10,2))

// const division = (x,y) => (x/y)
// console.log(division(50,10))

// const subtract = (xy,yz) =>{
//     console.log(xy-yz)
// }
// subtract(100,20)

// const divide = (z,d)=> (z/d)
// console.log(divide(8,4))

// const addi = (no1,no2) => {
//     return no1+no2
// }
// const total = addi(20,25)
// console.log(total)


// const funcx=(num,func) => {
//     for(let i=1 ; i<=num; i++){
//         func()
//     }
  
// }
// const greet =() => {
//     console.log("Hello ")
// }
// funcx(5,greet)

// const discountper = (discount ) =>{
//       return function (price){
//         return price-(discount*price)/100
//       }
      
// }
// const fiftypercent = discountper(50)
// const saleprice=fiftypercent(1000)
// console.log(saleprice)

//25.09.2026//


// setTimeout(() => {
//     console.log("hello")
// }, 2000); //   timeout func me 2000=2sec



    
// console.log("Login")
// setTimeout(() =>{
//     console.log("Welcome Back")
// }, 2000)

// const interval =setInterval(() => {
//     console.log("hey")
// },2000);

// setTimeout(() =>{
//     clearInterval(interval)
// },9000)

// const alarm = setInterval(() =>{
//     console.log("Uth jau uth jau")
// },3000);
// setTimeout(() => {
//     clearInterval(alarm)
// },15000);

const student ={
    name:"Arshan",
    course:"BCA" ,
    Age:22,

    
}
console.log(student.name)
console.log(student.Age)

const bankacc ={
    balance: 50,
    deposit: function(amount){
        this.balance = amount + this.balance;
    },
    withdraw : function(amount){
        
        if(amount<=this.balance){
            this.balance=this.balance-amount
            console.log("withdraw successfull")
        }else{
            console.log("insufficient balance")
        }
      
    }

}
bankacc.deposit(500)
console.log(bankacc.balance)
bankacc.deposit(5000)
console.log(bankacc.balance)
bankacc.withdraw(5550)
console.log(bankacc.balance)


 
 let produts=[
    {
        name:"Laptop",
        price:50000

    },
      {
        name:"mouse",
        price : 1000

      },
      {
       name:"keyboard",
        price : 2000
 
      }
    ]
     function calculatetotal(products)
     
