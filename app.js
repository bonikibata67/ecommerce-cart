document.addEventListener('DOMContentLoaded', function() {
    // open cart button
    // store variables
    const openCartBtn = document.getElementById('cart-btn');
    const cartMenu = document.getElementById('cart-menu');

    // define function
    function openCart() {
        cartMenu.style.display = 'block';
    }

    openCartBtn.addEventListener('click', openCart);

    // store product items to server
    // store variables
    const productUrl = "http://localhost:3000/products";
    const form = document.getElementById('add-product-form');

    // add event to form
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // prevent form submission
        
        const formData = {
            name: document.getElementById('product-name').value,
            size: document.getElementById('product-size').value,
            color: document.getElementById('product-color').value,
            price: document.getElementById('product-price').value,
        };

        try {
            const response = await fetch(productUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                alert('Failed to add to server');
            }

            const data = await response.text();
            console.log(data);

            form.reset();

        } catch (error) {
            console.error('Error:', error);
        }
    });

    // FETCH AND DISPLAY PRODUCTS
    // fetch
    async function fetchProducts() {
        try {
            const response = await fetch(productUrl);

            if (!response.ok) {
                alert('Failed to fetch products');
            }

            const data = await response.json(); // Call .json() to parse response body as JSON
            return data;

        } catch (error) {
            console.error('Error:', error);
        }
    }

    // display products
    async function displayProducts() {
        const productList = document.getElementById('product-list');
        const products = await fetchProducts();

        productList.innerHTML = '';

        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product');
            productItem.innerHTML = `
                <div class="image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="description">
                    <h3>${product.name}</h3>
                    <p>Size: ${product.size}</p>
                    <p>Color: ${product.color}</p>
                    <p>Price: ${product.price}</p>
                </div>
            `;
            productList.appendChild(productItem);
        });
    }

    displayProducts();
});
