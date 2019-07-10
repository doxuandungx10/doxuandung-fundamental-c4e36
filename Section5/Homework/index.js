// REVIEW
// - Dùng hàm sẽ gom một số đoạn code vào một khối xử lý và khi cần thì gọi ra dùng
// - Syntax:
// function name_of_function(var1, var2, var3, ...)
// {
//     // Some code
// }
// function: là từ khóa của javascript nên bắt buộc phải như vậy
// name_of_function: là tên của function, thông thường chúng ta tạo những tên có ý nghĩa như find_max, find_min, ...
// var1, var2 var3, ... là các tham số truyền vào hàm. Ví dụ viết hàm kiểm tra số chẵn hay lẽ thì ta sẽ có một tham số đó là số cần kiểm tra 

// - Return đặt ở cuối hàm với mục đích trả kết quả về để sử dụng tiếp ở những đoạn code bên ngoài. 
// - Tùy vào từng trường hợp cụ thể mà chùng ta sử dụng return hoặc không.
// - Parameter là tên biến được khai báo trong phần định nghĩa hàm. Argument là giá trị biến thực được truyền vào khi gọi hàm
// Cách dùng:
// function add(Parameter1, Parameter2){
//     return (Parameter2 + Parameter2)
// }
// add(Argument1, Argument2);
// - Dùng window.onload = () => {}


// TURTLE exercise
// 1, 
// function print(string) {
//     for (i = 0; i < 3; i++) {
//         console.log(string);

//     }

// }
// print("Hello World")

// 2,
// function sum(a, b) {
//     console.log(`Tong = ${a+b}`);
// }
// sum(1, 2)

// 3,
// function square(l, c) {
//     color(c)
//     for (i = 0; i < 4; i++) {
//         fd(l)
//         rt(90)
//     }
// }
// square(100, "blue")

// 4,
// clear()
// function square(l, c) {
//     color(c)
//     for (i = 0; i < 4; i++) {
//         fd(l)
//         rt(90)
//     }
// }
//  for (let i = 0; i  < 30; i ++){

//                 square(i * 5, "red")

//         lt(17)

// penup()
//            fd(i * 2)
//            pendown()

// }

// 5,
// clear()
// function draw_star(length) {
//   rt(162)
//   for ( i=0; i<5; i++ ){
//     fd(length)
//     rt(144)
//   }
// }
// draw_star(200)

// 6,
// function remove_dollar_sign(s) {
//     s2 = s.replace(/[$]/g, "");
//     return s2
// }
// var n = prompt("Enter a string which include $");
// console.log(remove_dollar_sign(n));

// 7,
// string_with_no_dollars = remove_dollar_sign("$80% percent of $life is to show $up")
// if (string_with_no_dollars == "80% percent of life is to show up") {
//     console.log("Your function is correct")
// } else {
//     console.log("Oops, there's a bug")
// }

// 8,
// function get_even_list(l) {
//     var l2 = [];
//     l.forEach((number, index) => {
//         if (number % 2 === 0) {
//             l2.push(l[index])
//         }
//     });
//     return l2
// }
// var even_list = get_even_list([1, -4, -1, 10])
// console.log(even_list);

// 9,
// even_list = get_even_list([1, 2, 5, 9, -10, 6])

// if (even_list == [2, -10, 6]){
//    print("Your function is correct")};
// else{
//    console.log("Ooops, bugs detected")}

// 10,
// function is_inside([x, y], [x2, y2, w, h]) {
//     if (x >= x2 && y >= y2 && x <= (x2 + w) && y <= (y2 + h)) {
//         console.log("The point is inside a rectangle!")
//     } else {
//         console.log("The point isn't inside a rectangle!")
//     }
// }

// 11,
// is_inside([10, 25], [10, 20, 100, 200])