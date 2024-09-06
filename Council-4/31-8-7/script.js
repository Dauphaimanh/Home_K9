// 2.0

var products = [
    { id: 1, name: "sản phẩm 1", price: 1000 },
    { id: 2, name: "sản phẩm 2", price: 2000 },
    { id: 3, name: "sản phẩm 3", price: 3000 },
    { id: 4, name: "sản phẩm 4", price: 4000 }
];


function createProductTable() {}


function addToCart(product) {
    var cart = JSON.parse(localStorage.getItem('cart')) || [];
    var productIndex = cart.findIndex(item => item.id === ); //something
    if (productIndex !== -1) {
        cart[productIndex].quantity++;
    } else {
        var product = product.find(item => item.id === ); //something
        cart.push({product, quantity: 1});
    }
    localStorage.setItem(cart, JSON.stringify(cart));
    updateCartTable();
}


function createCartTable() {}

function updateCartTable() {}

function removeCartItem(productId) {}


function deleteCart() {
    localStorage.removeItem('cart');
    updateCartTable();
}
