// Chuyển mảng sau thành dạng thẻ html select option


var categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      children: [
        {
          id: 4,
          name: "Chuyên mục 2.1",
        },
        {
          id: 5,
          name: "Chuyên mục 2.2",
          children: [
            {
              id: 10,
              name: "Chuyên mục 2.2.1",
            },
            {
              id: 11,
              name: "Chuyên mục 2.2.2",
            },
            {
              id: 12,
              name: "Chuyên mục 2.2.3",
            },
          ],
        },
        {
          id: 6,
          name: "Chuyên mục 2.3",
        },
      ],
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      children: [
        {
          id: 7,
          name: "Chuyên mục 3.1",
        },
        {
          id: 8,
          name: "Chuyên mục 3.2",
        },
        {
          id: 9,
          name: "Chuyên mục 3.3",
        },
      ],
    },
  ]
  

var selectElement = document.getElementById('select');

function centerOption(categories, level = 0) {
var options = '';

categories.forEach(function (category) {
    const indent = level > 0 ? '--|'.repeat(level - 1) + ' ' : '';
    options += `<option value="${category.id}">${indent}${category.name}</option>`;

    if (category.children) {
    options += centerOption(category.children, level + 1);
    }
});

return options;
}

var toHTML = centerOption(categories);
selectElement.innerHTML = toHTML;
  