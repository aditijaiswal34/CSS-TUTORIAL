// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 10.99 },
    { id: 2, name: "Product 2", price: 15.99 },
];

let cart = [];

function addToCart(productId) {
    const product = products.find(item => item.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    
    cartList.innerHTML = "";
    let total = 0;
    
    cart.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        total += product.price;
    });
    
    cartTotal.textContent = total.toFixed(2);
}

function checkout() {
    alert("Thank you for your purchase!");
    cart = [];
    updateCart();
}

