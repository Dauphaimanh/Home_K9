// Làm phẳng array sau (Chuyển về mảng 1 chiều)

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

var newArr= [];
function hexArr(arr){
    arr.forEach(function(index){
        if(Array.isArray(index)){
            newArr.concat(hexArr(index));
        }else{
            newArr.push(index);
        }
    })
    return newArr;
}

console.log(hexArr(arr));
