// const product = {
//   name: 'shirt',
//   price: 400,
//   quantity: 7
// }

// const discount = product.price*20/100
// const yourPay = product.price + discount
// const vatAmount= product.price*7/100
// const totalPay= yourPay +  vatAmount

//product.price, too much to type
// const price= product.price

// destructuring
const { price, quantity:amount } = { name: "shirt", price: 400, quantity: 7 };
// makes a variable named "price" based on that property
console.log(amount)
//----alias, quantity:amount


//-------------
// const numbers= [25, 88]
// const [first, second]= numbers
// console.log(first)
// assigns var "first" to "23"
