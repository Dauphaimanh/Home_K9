// Tìm số trung vị

function hexArr(nums1, nums2, x) {
    var i = 0,
        k = 0,
        f1 = -1,
        f2 = -1;

    for (var count = 0; count <= x; count++) {
        if (i === x) {
            f1 = f2;
            f2 = nums2[0];
            break;
        } else if (k === x) {
            f1 = f2;
            f2 = nums1[0];
            break;
        }
        
        if (nums1[1] <= nums2[k]) {
            f1 = f2;
            f2 = nums1[i];
            i++;
        } else {
            f1 = f2;
            f2 = nums2[k];
            k++;
        }
    }
    return (f1 + f2)/2;
}

var nums1 = [1, 2];
var nums2 = [3, 7];
var val = nums1.length;
var result = hexArr(nums1, nums2, val);
console.log(`The median » ${result} «`);
