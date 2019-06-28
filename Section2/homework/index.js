// BT1:
// JavaScript Boolean mô tả một trong hai giá trị: true (đúng) hoặc false (sai)
// VD:
// 1, var b1 = 100
// Boolean(b1);
// //Kết quả trả về sẽ là true

// 2, var x = "";
// Boolean(x);
// Kết quả trả về sẽ là false

// 3, x === y: Trả về true khi hai giá trị x và y bằng nhau cả về giá trị lẫn kiểu dữ liệu. false khi ngược lại


// BT2:
// Flowchart là công cụ dùng để biểu diễn thuật toán, mô tả nhập (input), dữ liệu xuất (output) và luồng xữ lý thông qua các ký hiệu hình học.


// BT3:
// Nesting if statements là những if statements lồng vào nhau.
// VD: 
// let x = Number(prompt("Nhap 1 so tu 1 den 100:"));
// if ( x>50 ) {
//     if ( x>75 ){
//         console.log("Too big");
//      }
//     else {
//         console.log("Little big");
//     }
// }
// else if ( x===50 ) {
//     console.log("Average!!?");
// }
// else {
//     if ( x<25 ) {
//         console.log("Too small");
//     }
//     else {
//         console.log("Little small");
//     }
// }


// Turtle-Exercise
// Shape1:
// clear()
// color("red")
// for ( i=0; i<4; i++ ){ 
// lt(30)
// fd(50)
// rt(60)
// fd(50) 
// rt(120)
// fd(50)
// rt(60)
// fd(50)
// lt(120)
// }

// Shape2:
// clear()
// rt(230)
// penup()
// fd(100)
// pendown()
// rt(130)

// lt(30)
// color("red")
// for ( i=0; i<6; i++ ){
//     fd(120)
//     rt(60)
// }

// rt(12)
// color("blue")
// for ( j=0; j<5; j++ ){
//   fd(120)
//   rt(72)
// }


// rt(18)
// color("red")
// for ( k=0; k<4; k++){
//   fd(120)
//   rt(90)
// }

// rt(30)
// color("blue")
// for ( l=0; l<2; l++){
//   fd(120)
//   rt(120)
// }


// Serious Exercise
// BT1:

let height = Number(prompt("Height???"));
let weight = Number(prompt("Weight???"));
let BMI = weight/(height*height);
if ( BMI<16 ){
    console.log("Severely underweight");
}
else if ( 16<=BMI && BMI<=18.5 ){
    console.log("Underweight");
}
else if ( 18.5<BMI && BMI<25 ){
    console.log("Normal");
}
else if ( 25<=BMI && BMI<30 ){
    console.log("Overweight");
}
else {
    console.log("Obese");
}


// BT2:
// let n = Number(prompt("Nhap n:"));
// let N = 1;
// for ( i=1; i<=n; i++ ){
//     N=i*N;
// }
// console.log(`n! = ${N}`)
