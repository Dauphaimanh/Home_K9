// #Tính giá trị biểu thức

var x = 5,
    s = 0;
for (var i = 1; i <= x; i++) {
    s = s + i * (i + 1);
}
document.write(`${s} « là giá trị của biểu thức`);
