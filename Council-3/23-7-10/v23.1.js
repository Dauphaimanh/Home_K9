// Cho một số nguyên n, trả về số nguyên tố đối xứng nhỏ nhất lớn hơn hoặc bằng n.


var n = 11;
function primeNum(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  } else {
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
  }
  return true;
}

function symNum(m) {
  var l = m.toString();
  var hexNum = l.split("").reverse().join("");
  return l === hexNum;
}


// ham
function symetric(n) {
  var m = n;
  while (true) {
    if (primeNum(m) && symNum(m)) {
      return m;
    }
    m++;
  }
}
var result = symetric(n);
console.log(`The smallest symmetric prime number is » ${result} «`);