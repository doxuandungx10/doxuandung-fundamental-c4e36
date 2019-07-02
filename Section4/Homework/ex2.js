const price = {
    banana: 4,
    apple: 2,
    orange: 1.5,
    pear: 3
}
const stock = {
    banana: 6,
    apple: 0,
    orange: 32,
    pear: 15

}
const value = ["banana", "apple", "orange", "pear"]
value.forEach((food, index) => {
    console.log(`${food}:
price: ${price[food]}
stock: ${stock[food]} `);

})
let total = 0;
value.forEach((food, index) => {
    x = price[food] * stock[food];
    console.log(`Value of ${food} = ${x}`);
    total += x;
})
console.log(`Total = ${total}`)