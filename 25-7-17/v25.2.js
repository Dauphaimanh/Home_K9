/* Viết 1 phương thức Prototype có tên là getCurrency có đối số truyền vào là đơn vị tiền tệ cần hiển thị
    Kết quả sẽ hiển thị ra kết định dạng kèm đơn vị tiền tệ
    var price = 12000;
    console.log(price.getCurrency('đ'));
    Hiển thị : 12,000 đ
*/

function Price(money) {
    this.money = money;
}

Price.prototype.getCurrency = function (coin) {
    return `${this.money.toLocaleString('vi-VN')}${coin || (đ)}`;
};

var price = new Price(12000);
console.log(price.getCurrency('¥'));
