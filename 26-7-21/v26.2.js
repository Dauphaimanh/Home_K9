// Viết lại vòng lặp filter trong Array. Đặt tên là filter2()

Array.prototype.filter2 = function (callback) {
    if (typeof callback !== 'function') {
        return "Wrong !";
    }

    var result = [];
    this.forEach(function (value, index) {
        if (callback(value, index)) {
            result.push(value);
        }
    });
    return result;
};
  
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var finalNum = numbers.filter2(function (value, index) {
    return +value % 3 === 0;
});
console.log(finalNum);
