// Sắp xếp mảng theo thứ tự tăng dần
// Chèn thêm 1 số vào bất kỳ vị trí nào trong mảng mà không làm thay đổi thứ tự sắp xếp của mảng



function goUp(numbers, reVerse) {
    return numbers - reVerse;
}
var numbers = [5, 1, 9, 8, 10];
numbers.push(4);
var newNumbers = numbers.sort(goUp);
console.log(newNumbers);
