
function changeImage(newImageSrc) {
    var mainImage = document.getElementById('mainImage');
    mainImage.src = newImageSrc;
}


function selectSize(sizeElement) {
    // Remove the "active" class from all size elements
    var allSizeElements = document.querySelectorAll('.psize');
    allSizeElements.forEach(function (element) {
        element.classList.remove('active');
    });

    // Add the "active" class to the clicked size element
    sizeElement.classList.add('active');
}


function addToCart() {
    // Get product details
    var productName = document.querySelector('.pname').innerText;
    var selectedSize = document.querySelector('.psize.active').innerText;
    var quantity = document.querySelector('.quantity input').value;

    // Create a new cart item element
    var cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `<p>${productName} - Size: ${selectedSize} - Quantity: ${quantity}</p>`;

    // Append the cart item to the cart items container
    var cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.appendChild(cartItem);

    // Show the cart box
    document.getElementById('cartBox').style.display = 'block';
}

function closeCartBox() {
    // Hide the cart box
    document.getElementById('cartBox').style.display = 'none';
}

function toggleCartBox() {
    // Toggle the visibility of the cart box
    var cartBox = document.getElementById('cartBox');
    cartBox.style.display = (cartBox.style.display === 'block') ? 'none' : 'block';
}



function toggleProductDetails() {
    var detailsContent = document.getElementById('productDetailsContent');
    var toggleIcon = document.getElementById('detailsToggleIcon');

    if (detailsContent.style.display === 'none' || detailsContent.style.display === '') {
        detailsContent.style.display = 'block';
        toggleIcon.innerText = '-';
    } else {
        detailsContent.style.display = 'none';
        toggleIcon.innerText = '+';
    }
}