// Bài 1: N số fibonaci
/*
Hiển thị N số Fibonaci đầu tiên
Ví dụ: Gán n = 10 sẽ hiển thị danh sách 10 số fibonaci
Yêu cầu: Không dùng vòng lặp
*/

function fibonaci(n) {
    var a = 0, b = 1, c;
    document.write(a);
    document.write(b);
    for (var i = 2; i < n; i++) {
        c = a + b;
        document.write(c);
        a = b;
        b = c;
    }
}
fibonaci(10);
