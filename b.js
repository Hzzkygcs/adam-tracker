function halo(a, b){
    console.log("a:", a)
    console.log("b:", b)
    return a + 2*b
}

// halo(3, halo(5, 7))
halo(3, halo(5, 7))

/*
a: 3
b: 7
16

 */


//
//
// var a = 1
// var b = 2
//
// function add(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     var penjumlahan_1 = a + b;
//     console.log(penjumlahan_1);
//     var penjumlahan_2 = penjumlahan_1 + c;
//     console.log(penjumlahan_2);
//
//     return penjumlahan_2;
// }
//
//
// console.log(add(2, 9));
