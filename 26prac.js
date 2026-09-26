// let students=['Arshan','mhenaz','mahak' ]

// students.forEach(  (student,index) => {
//     console.log(student,index)
    
// })
//   let products=[
//     {name:"Laptop", price:50000},
//     {name:"keyboard", price:3000},
//     {name:"phone", price:20000}
//   ]  
//   products.forEach((product) => {
//     console.log(`${product.name} - ${product.price}`)//template literals ``
//   })

//   let prices=[100,200,300]
//   let result =prices.map((price) =>{
//     return price+50
//   })
//   console.log(result)

  let products=[
    {name:"Laptop", price:50000},
    {name:"keyboard", price:3000},
     {name:"phone", price:20000}
]
let names=products.map ((product) =>{
  return product.name
})
console.log(names)

 