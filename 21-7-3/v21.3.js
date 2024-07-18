// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý

let unknown = [8, 6, 9, 0, 8, 6];

function newValue(unknown) {
    var hexValue = [];
    for (i = 0; i < unknown.length; i++) {
        if (hexValue.indexOf(unknown[i]) === -1) {
            hexValue.push(unknown[i]);
        }
    }
    return hexValue;
}
console.log(newValue(unknown));
