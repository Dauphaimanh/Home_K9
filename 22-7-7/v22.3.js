// Tách phần tử trong mảng theo đúng kiểu dữ liệu

var arr = [["a", 1, true, 3], ["b", 2, false]];

var first = [];
var second = [];
var third = [];

function newArr(arr) {
    arr.forEach(function (index) {
        if (Array.isArray(index)) {
            newArr(index);
        } else {
            if (typeof index === "number") {
                first.push(index);
            } else if (typeof index === "string") {
                second.push(index);
            } else if (typeof index === "boolean") {
                third.push(index);
            }
        }
    });
}

newArr(arr);
var result = console.log(first, second, third);
