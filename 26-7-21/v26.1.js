// Viết lại hàm push() trong Array. Đặt tên là push2()

Array.prototype.push2 = function (...elements) {
    if (!Array.isArray(this)) {
      return "Wrong !";
    }
  
    this.length = this.length + elements.length;
    for (let i = 0; i < elements.length; i++) {
      this[this.length - 1 - i] = elements[elements.length - 1 - i];
    }
  
    return this.length;
};
  
var numbers = ['1', '2',];
var finalNum = numbers.push2('3');
console.log(numbers);