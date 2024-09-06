// Tìm số nguyên dương nhỏ nhất không có trong nums

var nums = [7,8,9,11,12];

function oreo(nums) {
    var newNums = nums.sort((a, b) => a - b);
    var lowNumber = 1;
    for (var i = 0; i < newNums.length; i++) {
        var n = newNums[i];
        if (n > 0) {
            if (lowNumber < n) {
                return lowNumber;
            } else lowNumber = n + 1;
        }
    } return lowNumber;
}
var result = oreo(nums);
console.log(`The lowest positive integer » ${result} «`);
