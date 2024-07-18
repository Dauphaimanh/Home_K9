// Viết lại vòng lặp reduce() trong Array bằng cách sử dụng Prototype trong Javascript ( lưu ý đặt tên là reduce2() )

Array.prototype.reduce2 = function (callback, inValue) {
    var cosSimulate = inValue;
    for (let i = 0; i < this.length; i++) {
        cosSimulate = callback(cosSimulate, this[i], i, this);
    }
    return cosSimulate;
};


var numbers = [1, 3, 5, 7, 9, 11];
var result = numbers.reduce2((cosSimulate, preValue) => cosSimulate + preValue, 0);
console.log(result);