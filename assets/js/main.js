const productGallery = document.getElementById('productGallery');
//==============================================================================
//                                  fetch All
//==============================================================================
function fetchProducts(url, category = '') {
    productGallery.innerHTML = '';
    fetch(`https://fakestoreapi.com/products${category ? `/category/${category}` : ''}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Fehler beim Abrufen der ${category || 'Produkte'}`);
            } else {
                return res.json();
            }
        })
        .then(products => {
            products.forEach((product, index) => {
                const newDivContainer = document.createElement('div');
                productGallery.appendChild(newDivContainer);

                const newImgEl = document.createElement('img');
                newImgEl.src = product.image;
                newImgEl.alt = product.description;
                newDivContainer.appendChild(newImgEl);

                const newTitle = document.createElement('p');
                newTitle.textContent = product.title;
                newDivContainer.appendChild(newTitle);

                const newDescription = document.createElement('p');
                newDescription.textContent = product.description;
                newDivContainer.appendChild(newDescription);

                const newRating = document.createElement('p');
                newRating.innerHTML = `Bewertung:<br>${product.rating.rate}⭐️`;
                newDivContainer.appendChild(newRating);

                const newCounting = document.createElement('p');
                newCounting.textContent = `Von ${product.rating.count} Kunden Bewertet`;
                newDivContainer.appendChild(newCounting);

                const newPrice = document.createElement('p');
                newPrice.textContent = `${product.price}€`;
                newDivContainer.appendChild(newPrice);

                const newButton = document.createElement('button');
                newButton.textContent = 'In den Warenkorb';
                newDivContainer.appendChild(newButton);
            });
        })
        .catch(error => console.log(error));
}
//==============================================================================
//                                search function
//==============================================================================

function searchTerm() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    Array.from(productGallery.children).forEach(product => {
        const title = product.querySelector('p').textContent.toLowerCase();
        const isVisible = title.includes(searchInput);
        product.style.display = isVisible ? 'block' : 'none';
    });
}
//==============================================================================
//                                sort function
//==============================================================================

function changeSorting() {
    const sortToggle = document.getElementById('sortToggle');
    const sortBy = parseInt(sortToggle.value);
    const products = Array.from(productGallery.children);

    switch (sortBy) {
        case 2: // Price - Low to High
            products.sort((a, b) => parseFloat(a.getAttribute('data-price')) - parseFloat(b.getAttribute('data-price')));
            break;

        case 3: // Price - High to Low
            products.sort((a, b) => parseFloat(b.getAttribute('data-price')) - parseFloat(a.getAttribute('data-price')));
            break;

        default:
            console.log('Fehler');
            break;
    }

    productGallery.innerHTML = '';
    products.forEach(product => {
        productGallery.appendChild(product);
    });
}
//==============================================================================
//                                  addEventListener
//==============================================================================

window.onload = function () {
    document.getElementById('searchInput').addEventListener('input', searchTerm);
    document.getElementById('sortToggle').addEventListener('change', changeSorting);

    fetchProducts('https://fakestoreapi.com/products');
}
//==============================================================================
//                                 fetch Categorys
//==============================================================================



function categoryEle() {
    fetchProducts('https://fakestoreapi.com/products', 'electronics');
}

function categoryJewl() {
    fetchProducts('https://fakestoreapi.com/products', 'jewelery');
}

function categoryMen() {
    fetchProducts('https://fakestoreapi.com/products', "men's clothing");
}

function categoryWoma() {
    fetchProducts('https://fakestoreapi.com/products', "women's clothing");
}

