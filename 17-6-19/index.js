// X1 
var a = 5,
    b = 12;
a += b;
b = a - b;
a -= b;
console.log(a, b);
// X2
var s = 10 + 20 + 5 ** 10 / 2;
console.log(s);
// X3
var a = 198,
    b = 209,
    c = 224;
if (a > b && a > c) {
    console.log(`biggest is ${a}`);
} else if (b > a && b > c) {
    console.log(`biggest is ${b}`);
} else {
    console.log(`biggest is ${c}`);
}
// X4
var a = 5,
    b = -12;
if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
    console.log("Hai số cùng dấu");
} else {
    console.log("Hai số khác dấu");
}
// X5
var a = 18,
    b = 11,
    c = 24;
if (a > b) {
    a += b;
    b = a - b;
    a -= b;
}
if (b > c) {
    b += c;
    c = b - c;
    b -= c;
}
if (a > c) {
    a += c;
    c = a - c;
    a -= c;
}
console.log(a, b, c);
