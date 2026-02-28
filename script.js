// Food Data - Matching the assets.js structure
const menu_list = [
    { menu_name: "Salad", menu_image: "frontend_assets/menu_1.png" },
    { menu_name: "Rolls", menu_image: "frontend_assets/menu_2.png" },
    { menu_name: "Deserts", menu_image: "frontend_assets/menu_3.png" },
    { menu_name: "Sandwich", menu_image: "frontend_assets/menu_4.png" },
    { menu_name: "Cake", menu_image: "frontend_assets/menu_5.png" },
    { menu_name: "Pure Veg", menu_image: "frontend_assets/menu_6.png" },
    { menu_name: "Pasta", menu_image: "frontend_assets/menu_7.png" },
    { menu_name: "Noodles", menu_image: "frontend_assets/menu_8.png" }
];

const food_list = [
    { _id: "1", name: "Greek salad", image: "frontend_assets/food_1.png", price: 12, description: "Fresh vegetables with olive oil and feta cheese", category: "Salad" },
    { _id: "2", name: "Veg salad", image: "frontend_assets/food_2.png", price: 18, description: "Mixed fresh vegetables with special dressing", category: "Salad" },
    { _id: "3", name: "Clover Salad", image: "frontend_assets/food_3.png", price: 16, description: "Green clover leaves with cherry tomatoes", category: "Salad" },
    { _id: "4", name: "Chicken Salad", image: "frontend_assets/food_4.png", price: 24, description: "Grilled chicken with fresh garden vegetables", category: "Salad" },
    { _id: "5", name: "Lasagna Rolls", image: "frontend_assets/food_5.png", price: 14, description: "Italian style lasagna rolls with cheese", category: "Rolls" },
    { _id: "6", name: "Peri Peri Rolls", image: "frontend_assets/food_6.png", price: 12, description: "Spicy peri peri chicken rolls", category: "Rolls" },
    { _id: "7", name: "Chicken Rolls", image: "frontend_assets/food_7.png", price: 20, description: "Tender chicken wrapped in fresh bread", category: "Rolls" },
    { _id: "8", name: "Veg Rolls", image: "frontend_assets/food_8.png", price: 15, description: "Fresh vegetables rolled in tortilla", category: "Rolls" },
    { _id: "9", name: "Ripple Ice Cream", image: "frontend_assets/food_9.png", price: 14, description: "Creamy ripple ice cream with chocolate", category: "Deserts" },
    { _id: "10", name: "Fruit Ice Cream", image: "frontend_assets/food_10.png", price: 22, description: "Ice cream topped with fresh fruits", category: "Deserts" },
    { _id: "11", name: "Jar Ice Cream", image: "frontend_assets/food_11.png", price: 10, description: "Classic jar ice cream with vanilla", category: "Deserts" },
    { _id: "12", name: "Vanilla Ice Cream", image: "frontend_assets/food_12.png", price: 12, description: "Pure vanilla bean ice cream", category: "Deserts" },
    { _id: "13", name: "Chicken Sandwich", image: "frontend_assets/food_13.png", price: 12, description: "Grilled chicken sandwich with fresh veggies", category: "Sandwich" },
    { _id: "14", name: "Vegan Sandwich", image: "frontend_assets/food_14.png", price: 18, description: "Plant-based sandwich with avocado", category: "Sandwich" },
    { _id: "15", name: "Grilled Sandwich", image: "frontend_assets/food_15.png", price: 16, description: "Crispy grilled cheese sandwich", category: "Sandwich" },
    { _id: "16", name: "Bread Sandwich", image: "frontend_assets/food_16.png", price: 24, description: "Fresh bread with premium fillings", category: "Sandwich" },
    { _id: "17", name: "Cup Cake", image: "frontend_assets/food_17.png", price: 14, description: "Soft and fluffy cup cakes", category: "Cake" },
    { _id: "18", name: "Vegan Cake", image: "frontend_assets/food_18.png", price: 12, description: "Egg-free delicious vegan cake", category: "Cake" },
    { _id: "19", name: "Butterscotch Cake", image: "frontend_assets/food_19.png", price: 20, description: "Rich butterscotch flavored cake", category: "Cake" },
    { _id: "20", name: "Sliced Cake", image: "frontend_assets/food_20.png", price: 15, description: "Freshly baked cake slices", category: "Cake" },
    { _id: "21", name: "Garlic Mushroom", image: "frontend_assets/food_21.png", price: 14, description: "Garlic sautéed mushrooms", category: "Pure Veg" },
    { _id: "22", name: "Fried Cauliflower", image: "frontend_assets/food_22.png", price: 22, description: "Crispy fried cauliflower", category: "Pure Veg" },
    { _id: "23", name: "Mix Veg Pulao", image: "frontend_assets/food_23.png", price: 10, description: "Aromatic vegetable pulao", category: "Pure Veg" },
    { _id: "24", name: "Rice Zucchini", image: "frontend_assets/food_24.png", price: 12, description: "Zucchini with steamed rice", category: "Pure Veg" },
    { _id: "25", name: "Cheese Pasta", image: "frontend_assets/food_25.png", price: 12, description: "Creamy cheese pasta", category: "Pasta" },
    { _id: "26", name: "Tomato Pasta", image: "frontend_assets/food_26.png", price: 18, description: "Fresh tomato sauce pasta", category: "Pasta" },
    { _id: "27", name: "Creamy Pasta", image: "frontend_assets/food_27.png", price: 16, description: "Rich creamy white sauce pasta", category: "Pasta" },
    { _id: "28", name: "Chicken Pasta", image: "frontend_assets/food_28.png", price: 24, description: "Pasta with grilled chicken", category: "Pasta" },
    { _id: "29", name: "Butter Noodles", image: "frontend_assets/food_29.png", price: 14, description: "Butter tossed noodles", category: "Noodles" },
    { _id: "30", name: "Veg Noodles", image: "frontend_assets/food_30.png", price: 12, description: "Stir-fried vegetable noodles", category: "Noodles" },
    { _id: "31", name: "Somen Noodles", image: "frontend_assets/food_31.png", price: 20, description: "Japanese somen noodles", category: "Noodles" },
    { _id: "32", name: "Cooked Noodles", image: "frontend_assets/food_32.png", price: 15, description: "Perfectly cooked noodles", category: "Noodles" }
];

// Cart state
let cart = [];
let currentCategory = "All";

// DOM Elements
const menuCategories = document.getElementById('menu-categories');
const foodList = document.getElementById('food-list');
const cartIcon = document.getElementById('cart-icon');
const cartOverlay = document.getElementById('cart-overlay');
const cartSidebar = document.getElementById('cart-sidebar');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartCount = document.getElementById('cart-count');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const checkoutBtn = document.getElementById('checkout-btn');

// Initialize the app
function init() {
    renderMenuCategories();
    renderFoodItems(food_list);
    updateCartCount();
}

// Render menu categories
function renderMenuCategories() {
    let html = `<div class="menu-category active" data-category="All">
        <span>All</span>
    </div>`;
    
    menu_list.forEach(category => {
        html += `<div class="menu-category" data-category="${category.menu_name}">
            <img src="${category.menu_image}" alt="${category.menu_name}">
            <span>${category.menu_name}</span>
        </div>`;
    });
    
    menuCategories.innerHTML = html;
    
    document.querySelectorAll('.menu-category').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.menu-category').forEach(c => c.classList.remove('active'));
            item.classList.add('active');
            currentCategory = item.dataset.category;
            filterFoodItems();
        });
    });
}

// Render food items
function renderFoodItems(items) {
    if (items.length === 0) {
        foodList.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #666;">No food items found</p>';
        return;
    }
    
    let html = '';
    items.forEach(food => {
        html += `
            <div class="food-item" data-id="${food._id}">
                <div class="food-item-img">
                    <img src="${food.image}" alt="${food.name}">
                    <button class="add-btn" data-id="${food._id}">
                        <img src="frontend_assets/add_icon_green.png" alt="Add">
                    </button>
                </div>
                <div class="food-item-info">
                    <h3>${food.name}</h3>
                    <p>${food.description}</p>
                    <div class="food-item-price">
                        <span>$${food.price}</span>
                        <div class="rating">
                            <img src="frontend_assets/rating_starts.png" alt="Rating">
                            <span>4.5</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    
    foodList.innerHTML = html;
    
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const foodId = btn.dataset.id;
            addToCart(foodId);
        });
    });
}

// Filter food items by category
function filterFoodItems() {
    let filteredItems;
    if (currentCategory === "All") {
        filteredItems = food_list;
    } else {
        filteredItems = food_list.filter(food => food.category === currentCategory);
    }
    renderFoodItems(filteredItems);
}

// Add to cart
function addToCart(foodId) {
    const food = food_list.find(f => f._id === foodId);
    if (!food) return;
    
    const existingItem = cart.find(item => item._id === foodId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...food, quantity: 1 });
    }
    
    updateCartCount();
    renderCartItems();
    showToast(`${food.name} added to cart!`);
}

// Update cart count
function updateCartCount() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalCount;
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <img src="frontend_assets/basket_icon.png" alt="Empty Cart">
                <p>Your cart is empty</p>
            </div>
        `;
        cartTotal.textContent = '$0';
        return;
    }
    
    let html = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        html += `
            <div class="cart-item">
                <div class="cart-item-img">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>
                    <div class="cart-item-controls">
                        <button class="decrease" data-id="${item._id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase" data-id="${item._id}">+</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    cartItems.innerHTML = html;
    cartTotal.textContent = `$${total}`;
    
    document.querySelectorAll('.decrease').forEach(btn => {
        btn.addEventListener('click', () => updateQuantity(btn.dataset.id, -1));
    });
    
    document.querySelectorAll('.increase').forEach(btn => {
        btn.addEventListener('click', () => updateQuantity(btn.dataset.id, 1));
    });
}

// Update quantity
function updateQuantity(foodId, change) {
    const item = cart.find(item => item._id === foodId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        cart = cart.filter(item => item._id !== foodId);
    }
    
    updateCartCount();
    renderCartItems();
}

// Show toast notification
function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Cart sidebar toggle
cartIcon.addEventListener('click', () => {
    cartOverlay.classList.add('active');
    cartSidebar.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartOverlay.classList.remove('active');
    cartSidebar.classList.remove('active');
});

cartOverlay.addEventListener('click', () => {
    cartOverlay.classList.remove('active');
    cartSidebar.classList.remove('active');
});

// Search functionality
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    searchFoodItems(searchTerm);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const searchTerm = searchInput.value.toLowerCase();
        searchFoodItems(searchTerm);
    }
});

function searchFoodItems(searchTerm) {
    const filteredItems = food_list.filter(food => 
        food.name.toLowerCase().includes(searchTerm) || 
        food.category.toLowerCase().includes(searchTerm)
    );
    renderFoodItems(filteredItems);
}

// Checkout
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    
    showToast('Order placed successfully! Thank you for your order.');
    cart = [];
    updateCartCount();
    renderCartItems();
    cartOverlay.classList.remove('active');
    cartSidebar.classList.remove('active');
});

// Initialize app on load
document.addEventListener('DOMContentLoaded', init);
