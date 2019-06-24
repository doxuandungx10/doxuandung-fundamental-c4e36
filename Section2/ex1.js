// for (i=1 ; i<101 ; i++) {
//     if (i % 2 === 0){
//         console.log(i);
//     }
// }
// const a = Number(prompt("Nhap a:"));
// const b = Number(prompt("Nhap b:"));
// const c = Number(prompt("Nhap c:"));
// const d = b*b-4*a*c
// console.log("Phuong trinh co delta d = " + d );
// if ( d===0 ) {
//     console.log("Phuong trinh co 1 nghiem kep x = " + ( (-b)/(2*a) ));
// }
// if ( d<0 ){
//     console.log("Phuong trinh vo nghiem");
// }
// if ( d>0 ){
//     console.log("Phuong trinh co 2 nghiem la " + "x1=" + (-b- Math.sqrt(d))/(2*a) " va x2=" + (-b+ Math.sqrt(d))/(2*a));
// }

// console.log(`nghiem kep la ${x}`) // backticks

const x = prompt("Nhap x");
let isPrime = true;
if ( x<2 ){
    console.log("x khong phai la so nguyen to");

}
else {
    for ( let i=2 ; i < x  ; i++){
        if ( x % i === 0){
            isPrime = false
            // console.log("x khong phai la so nguyen to");
            break;
          }
        
    }
}
if (isPrime) {
    console.log("Prime Number");

} else {
    console.log("Not Prime Number");
}