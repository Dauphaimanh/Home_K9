// Bài 2: Đảo ngược số
/*
Viết hàm đảo ngược số nguyên với tham số là số cần đảo ngược
Ví dụ: Khi gọi hàm và truyền đối số 12345 sẽ trả về kết quả 54321
*/
var n = 12345,
    reverse = 0,
    stock;

while (n>0) {
    stock = n%10;
    reverse = reverse * 10 + stock;
    n = Math.floor(n / 10);
}

document.write(reverse);
