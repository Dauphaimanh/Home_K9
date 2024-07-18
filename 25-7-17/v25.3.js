/* Chuyển đổi mảng 1 chiều thành dạng lồng (nested)
*/ 

var categories = [
    {
        id: 1,
        name: "Chuyên mục 1",
        parent: 0,
        },
        {
        id: 2,
        name: "Chuyên mục 2",
        parent: 0,
        },
        {
        id: 3,
        name: "Chuyên mục 3",
        parent: 0,
        },
        {
        id: 4,
        name: "Chuyên mục 2.1",
        parent: 2,
        },
        {
        id: 5,
        name: "Chuyên mục 2.2",
        parent: 2,
        },
        {
        id: 6,
        name: "Chuyên mục 2.3",
        parent: 2,
        },
        {
        id: 7,
        name: "Chuyên mục 3.1",
        parent: 3,
        },
        {
        id: 8,
        name: "Chuyên mục 3.2",
        parent: 3,
        },
        {
        id: 9,
        name: "Chuyên mục 3.3",
        parent: 3,
        },
        {
        id: 10,
        name: "Chuyên mục 2.2.1",
        parent: 5,
        },
        {
        id: 11,
        name: "Chuyên mục 2.2.2",
        parent: 5,
        },
];


function tututuMaxverstappen (categories) {
    var firstOmen = [];
    var secondCosmos = [];
    for (var arabica of categories) {
        secondCosmos[arabica.id] = arabica;
    }
    for (var arabica of categories) {
        if (arabica.parent === 0) {
            firstOmen.push(arabica);
        } else {
            var bermudaTriangle = secondCosmos[arabica.parent];
            if (!bermudaTriangle.children) {
                bermudaTriangle.children = [];
            }
            bermudaTriangle.children.push(arabica);
        }
    }
    return firstOmen;
}

var result = tututuMaxverstappen(categories);
console.log(result);
