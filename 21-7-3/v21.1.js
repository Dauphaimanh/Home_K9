// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí

var combo = [24, 7, 44, 2, 11, 109];
var big = combo[0];
var small = combo[0];

for (var i = 0; i < combo.length; i++) {
    if (combo[i] > big) {
        big = combo[i];
    }
    if (combo[i] < small) {
        small = combo[i]
    }
}
console.log(`The biggest number is » ${big} « and the smallest number is » ${small} «`);
