// JS


var products = [
    { id: 1, name: "Sản phẩm 1", price: 1000 },
    { id: 2, name: "Sản phẩm 2", price: 2000 },
    { id: 3, name: "Sản phẩm 3", price: 3000 },
    { id: 4, name: "Sản phẩm 4", price: 4000 }
  ];
  
  function createProductTable() {
    const productTable = document.getElementById('product_table');
    let tableHTML = '<tr><th>STT</th><th>Tên sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Thêm vào giỏ</th></tr>';
  
    products.forEach((product, index) => {
      tableHTML += `
        <tr>
          <td>${index + 1}</td>
          <td>${product.name}</td>
          <td>${product.price}</td>
          <td><input type="number" value="1" min="1"></td>
          <td><button data-product-id="${product.id}">Thêm vào giỏ</button></td>
        </tr>`;
    });
  
    productTable.innerHTML = tableHTML;
  }
  
  // Function to handle adding products to cart
  function addToCart(productId) {
    // ... (cart logic)
  }
  
  // Function to create the cart table
  function createCartTable() {
    // ... (cart table logic)
  }
  
  // Function to update cart quantities
  function updateCart() {
    // ... (update cart logic)
  }
  
  // Function to delete cart items
  function deleteCartItem() {
    // ... (delete cart item logic)
  }
  
  // Function to delete the entire cart
  function deleteCart() {
    // ... (delete cart logic)
  }
  
  // Initial setup
  createProductTable();
  // ... (cart initialization)
  
  // Event listeners for buttons
  const addToCartButtons = document.querySelectorAll('#product_table button');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productId = button.dataset.productId;
      addToCart(productId);
    });
  });
  
  // ... (event listeners for other buttons)
  