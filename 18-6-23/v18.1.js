// #Tính tiền taxi

/*
Tính tiền cước taxi dựa vào các điều kiện sau
Số km ≤ 1 giá 15000đ
1 < số km ≤ 5 giá 13500đ
Số km > 5 giá 11000đ
Nếu số km > 120 km sẽ được giảm 10% trên tổng số tiền
*/

var km = 12;
var money;

if (km < 0) {
    document.write("?");
} else if (km <= 1) {
    money = 15000 * km;
    document.write(`Số tiền phải trả = ${money}`);
} else if (km <= 5) {
    money = 15000 * 1 + 13500 * (km - 1);
    document.write(`Số tiền phải trả = ${money}`);
} else if (km <= 120) {
    money = 15000 * 1 + 13500 * 4 + 11000 * (km - 5);
    document.write(`Số tiền phải trả = ${money}`);
} else {
    money = (15000 * 1 + 13500 * 4 + 11000 * (km - 5)) * 0.9;
    document.write(`Số tiền phải trả = ${money}`);
}
s