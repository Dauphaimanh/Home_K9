// Cho trước 1 mảng số nguyên, tính trung bình các số nguyên tố trong mảng. Nếu trong mảng không có số nguyên tố thì hiển thị “Không có số nguyên tố”

var primus = [5, 2, 29, 72, 75, 89, 44, 32, 11, 98, 23];
primus = primus.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

// console.log(primus); find the prime number in array
var total = 0;
for (var k = 0; k < primus.length; k++) {
  total += primus[k];
}
var average = total / primus.length;
console.log(average);
