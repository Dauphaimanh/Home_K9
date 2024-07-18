// Lấy kết quả giao giữa 2 mảng

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = arrA.filter(function(item) {
    return arrB.includes(item);
});
console.log(result);
