// // BT1:
// // - Để kiểm tra 1 biến có tồn tại hay không chúng ta có thể sử dụng toán tử typeof.
// // Toán tử typeof trong JS được dùng để kiểm tra kiểu dữ liệu của biến, object hoặc bất kì 1 giá trị nào cho trước.
// // - Các trường hợp biến sai: tên bắt đầu bằng chữ số, tên bắt đầu bằng kí hiệu của JS, tên chứa kí tự đặc biệt 
// // - Ví dụ tên sai: 5high, let, *Abc 
// // BT2:
// // let x = Number(prompt("Enter Radius"))
// // console.log("Area = " + x * x * 3.14)
// // BT3:
// // let y = Number(prompt("Enter the temperature in Celsius"))
// // console.log( y + "(C) = " + (1.8*y+32) + "(F)" )
// Turtle Exercise
// 1, A square 
// clear()
// for ( i=0; i<4 ; i++){
//     fd(100)
//     rt(90)
// }
// 2, An equilateral triangle
// clear()
// rt(30)
// for ( i=0; i<3; i++){
//   fd(100)  
//   rt(120)
// }
// 3, A circle
// clear()
// for ( j=0; j<360; j++ ){
//     fd(1)
//     rt(1)
// }
4, Multi-circles
clear()
penwidth(0.5)
color("green")
for ( i=0; i<40; i++ ){
  for ( j=0; j<360; j++ ){
    fd(1)
    rt(1)
  }
rt(9)
}
// abcxyz

