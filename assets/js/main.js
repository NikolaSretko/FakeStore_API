//================================================================
//                         Fetch All
//================================================================
// Funktion zum Abrufen von Produkten
fetch('https://fakestoreapi.com/products')
    .then(res => {
        if (!res.ok) {
            throw new Error("Fehler beim Abrufen der Produkte");
        } else {
            return res.json();
        }
    })
    .then(products => {
        let counter = 1;

        products.forEach(product => {
            const newDivContainer = document.createElement('div');
            document.body.querySelector('#productGallery').append(newDivContainer);
            newDivContainer.setAttribute('data-price', `${product.price}`);

            const newImgEl = document.createElement('img');
            newImgEl.setAttribute('src', `${product.image}`);
            newImgEl.setAttribute('alt', `${product.description}`);
            newDivContainer.append(newImgEl);

            const newTitle = document.createElement('p');
            newTitle.textContent = `${product.title}`;
            newDivContainer.append(newTitle);

            const newDescription = document.createElement('p');
            newDescription.textContent = `${product.description}`;
            newDivContainer.append(newDescription);

            const newRating = document.createElement('p');
            newRating.innerHTML = `Bewertung:<br>${product.rating.rate}⭐️`
            newDivContainer.append(newRating)

            const newCounting = document.createElement('p');
            newCounting.textContent = `Von ${product.rating.count} Kunden Bewertet`;
            newDivContainer.append(newCounting)

            const newPrice = document.createElement('p');
            newPrice.textContent = `${product.price}€`;
            newDivContainer.append(newPrice)

            const newButton = document.createElement('button');
            newButton.textContent = `In den Warenkorb`;
            newDivContainer.append(newButton);

            counter++;
        });
    })
    .catch(error => console.log(error));

//================================================================
//                          Electronics
//================================================================
// Funktion zum Abrufen von Elektronikprodukten
function categoryEle() {
    document.body.querySelector('#productGallery').innerHTML = "";
    fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res => {
            if (!res.ok) {
                throw new Error("Fehler beim Abrufen der Elektronikprodukte");
            } else {
                return res.json();
            }
        })
        .then(electronics => {
            let counter = 1;

            electronics.forEach(electronics => {
                const newDivContainer = document.createElement('div');
                document.body.querySelector('#productGallery').append(newDivContainer);

                const newImgEl = document.createElement('img');
                newImgEl.setAttribute('src', `${electronics.image}`);
                newImgEl.setAttribute('alt', `${electronics.description}`);
                newDivContainer.append(newImgEl);

                const newTitle = document.createElement('p');
                newTitle.textContent = `${electronics.title}`;
                newDivContainer.append(newTitle);

                const newDescription = document.createElement('p');
                newDescription.textContent = `${electronics.description}`;
                newDivContainer.append(newDescription);

                const newRating = document.createElement('p');
                newRating.innerHTML = `Bewertung:<br>${electronics.rating.rate}⭐️`
                newDivContainer.append(newRating)

                const newCounting = document.createElement('p');
                newCounting.textContent = `Von ${electronics.rating.count} Kunden Bewertet`;
                newDivContainer.append(newCounting)

                const newPrice = document.createElement('p');
                newPrice.textContent = `${electronics.price}€`;
                newDivContainer.append(newPrice)

                const newButton = document.createElement('button');
                newButton.textContent = `In den Warenkorb`;
                newDivContainer.append(newButton);

                counter++;
            });
        })
        .catch(error => console.log(error));
}
//================================================================
//                          Schmuck
//================================================================
// Funktion zum Abrufen von Schmuckprodukten
function categoryJewl() {
    document.body.querySelector('#productGallery').innerHTML = "";
    fetch('https://fakestoreapi.com/products/category/jewelery')
        .then(res => {
            if (!res.ok) {
                throw new Error("Fehler beim Abrufen der Elektronikprodukte");
            } else {
                return res.json();
            }
        })
        .then(jewelery => {
            let counter = 1;

            jewelery.forEach(jewelery => {
                const newDivContainer = document.createElement('div');
                document.body.querySelector('#productGallery').append(newDivContainer);

                const newImgEl = document.createElement('img');
                newImgEl.setAttribute('src', `${jewelery.image}`);
                newImgEl.setAttribute('alt', `${jewelery.description}`);
                newDivContainer.append(newImgEl);

                const newTitle = document.createElement('p');
                newTitle.textContent = `${jewelery.title}`;
                newDivContainer.append(newTitle);

                const newDescription = document.createElement('p');
                newDescription.textContent = `${jewelery.description}`;
                newDivContainer.append(newDescription);

                const newRating = document.createElement('p');
                newRating.innerHTML = `Bewertung:<br>${jewelery.rating.rate}⭐️`
                newDivContainer.append(newRating)

                const newCounting = document.createElement('p');
                newCounting.textContent = `Von ${jewelery.rating.count} Kunden Bewertet`;
                newDivContainer.append(newCounting)

                const newPrice = document.createElement('p');
                newPrice.textContent = `${jewelery.price}€`;
                newDivContainer.append(newPrice)

                const newButton = document.createElement('button');
                newButton.textContent = `In den Warenkorb`;
                newDivContainer.append(newButton);

                counter++;
            });
        })
        .catch(error => console.log(error));
}
//================================================================
//                              Men
//================================================================
// Funktion zum Abrufen von Herrenbekleidung
function categoryMen() {
    document.body.querySelector('#productGallery').innerHTML = "";
    fetch("https://fakestoreapi.com/products/category/men's clothing")
        .then(res => {
            if (!res.ok) {
                throw new Error("Fehler beim Abrufen der Elektronikprodukte");
            } else {
                return res.json();
            }
        })
        .then(men => {
            let counter = 1;

            men.forEach(men => {
                const newDivContainer = document.createElement('div');
                document.body.querySelector('#productGallery').append(newDivContainer);

                const newImgEl = document.createElement('img');
                newImgEl.setAttribute('src', `${men.image}`);
                newImgEl.setAttribute('alt', `${men.description}`);
                newDivContainer.append(newImgEl);

                const newTitle = document.createElement('p');
                newTitle.textContent = `${men.title}`;
                newDivContainer.append(newTitle);

                const newDescription = document.createElement('p');
                newDescription.textContent = `${men.description}`;
                newDivContainer.append(newDescription);

                const newRating = document.createElement('p');
                newRating.innerHTML = `Bewertung:<br>${men.rating.rate}⭐️`
                newDivContainer.append(newRating)

                const newCounting = document.createElement('p');
                newCounting.textContent = `Von ${men.rating.count} Kunden Bewertet`;
                newDivContainer.append(newCounting)

                const newPrice = document.createElement('p');
                newPrice.textContent = `${men.price}€`;
                newDivContainer.append(newPrice)

                const newButton = document.createElement('button');
                newButton.textContent = `In den Warenkorb`;
                newDivContainer.append(newButton);

                counter++;
            });
        })
        .catch(error => console.log(error));
}
//================================================================
//                              Woman
//================================================================
// Funktion zum Abrufen von Damenbekleidung
function categoryWoma() {
    document.body.querySelector('#productGallery').innerHTML = "";
    fetch("https://fakestoreapi.com/products/category/women's clothing")
        .then(res => {
            if (!res.ok) {
                throw new Error("Fehler beim Abrufen der Elektronikprodukte");
            } else {
                return res.json();
            }
        })
        .then(woman => {
            let counter = 1;

            woman.forEach(woman => {
                const newDivContainer = document.createElement('div');
                document.body.querySelector('#productGallery').append(newDivContainer);

                const newImgEl = document.createElement('img');
                newImgEl.setAttribute('src', `${woman.image}`);
                newImgEl.setAttribute('alt', `${woman.description}`);
                newDivContainer.append(newImgEl);

                const newTitle = document.createElement('p');
                newTitle.textContent = `${woman.title}`;
                newDivContainer.append(newTitle);

                const newDescription = document.createElement('p');
                newDescription.textContent = `${woman.description}`;
                newDivContainer.append(newDescription);

                const newRating = document.createElement('p');
                newRating.innerHTML = `Bewertung:<br>${woman.rating.rate}⭐️`
                newDivContainer.append(newRating)

                const newCounting = document.createElement('p');
                newCounting.textContent = `Von ${woman.rating.count} Kunden Bewertet`;
                newDivContainer.append(newCounting)

                const newPrice = document.createElement('p');
                newPrice.textContent = `${woman.price}€`;
                newDivContainer.append(newPrice)

                const newButton = document.createElement('button');
                newButton.textContent = `In den Warenkorb`;
                newDivContainer.append(newButton);

                counter++;
            });
        })
        .catch(error => console.log(error));
}
//================================================================
//                              Suchen
//================================================================
// Funktion zum Suchen von Produkten
function searchTerm() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const productGallery = document.getElementById('productGallery');
    const allProducts = Array.from(productGallery.children);

    allProducts.forEach(product => {
        const title = product.querySelector('p').textContent.toLowerCase();
        const isVisible = title.includes(searchInput);
        product.style.display = isVisible ? 'block' : 'none';
        console.log(searchInput);
        console.log(productGallery);
        console.log(allProducts);
        console.log(title);
        console.log(isVisible);
    });
}
//================================================================
//                              Sortieren
//================================================================
// Funktion zum Sortieren von Produkten
function changeSorting() {
    const sortToggle = document.getElementById('sortToggle');
    const productGallery = document.getElementById('productGallery');
    const electronicsGallery = document.getElementById('productGallery')
    const electronics = Array.from(electronicsGallery.children)
    const products = Array.from(productGallery.children);

    const sortBy = parseInt(sortToggle.value);

    switch (sortBy) {
        case 2: // Price - Low to High
            products.sort((a, b) => {
                const priceA = parseFloat(a.getAttribute('data-price'));
                const priceB = parseFloat(b.getAttribute('data-price'));
                return priceA - priceB;
            });
            break;

        case 3: // Price - High to Low
            products.sort((a, b) => {
                const priceA = parseFloat(a.getAttribute('data-price'));
                const priceB = parseFloat(b.getAttribute('data-price'));
                return priceB - priceA;
            });
            break;

        default:
            console.log('Fehler');
            break;
    }

    // Löscht alle Produkte aus dem Container
    productGallery.innerHTML = '';

    // Fügt die sortierten Produkte wieder ein
    products.forEach(product => {
        productGallery.appendChild(product);
    });

}
//================================================================
//                  Event Listener                     
//================================================================
window.onload = function () {
    // Event-Listener für die Suchfunktion
    document.getElementById('searchInput').addEventListener('input', searchTerm);

    // Event-Listener für die Sortierfunktion
    document.getElementById('sortToggle').addEventListener('change', changeSorting);
}

