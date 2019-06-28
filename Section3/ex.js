dayso = [-7, 3, 5, -6, 2];
let n = Number(prompt("Nhap n"));
for (i = 0; i < 5; i++) {
    if (dayso[i] === n) {
        console.log(`So ${n} o vi tri ${i + 1}`);
        break;
    }
}
for (i = 0; i < 5; i++) {
    if (dayso[i]) != n ) {
        console.log("Not found");
        break;
    }
}




// dayso = [ -7, 3, 5, -6, 2 ];
// for ( i=0; i<5; i++ ){
//     if ( dayso[i+1] > dayso[i] ){
//         console.log("Max = " + dayso[i+1]);
//     }
// }
