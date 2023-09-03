document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");

    // Fetch the JSON data from your API endpoint
    fetch("https://tcgpokeworld.webseojapan.com/wp-json/custom-api/v1/products")
        .then((response) => response.json())
        .then((data) => {
            // Display up to 10 products from the JSON data
            for (let i = 0; i < 12 && i < data.length; i++) {
                const product = data[i];
                const productElement = document.createElement("div");
                productElement.classList.add("max-w-md", "rounded", "overflow-hidden", "shadow-lg", "bg-white");
                productElement.innerHTML = `
                    <img class="w-full" src="${product.image}" alt="${product.title}">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">${product.title}</div>
                        <p class="text-gray-700 text-base">${product.description}</p>
                    </div>
                    <div class="px-6 py-4">
                        <span class="text-gray-700 text-base font-semibold">Price: $${product.price}</span>
                    </div>
                    <div class="px-6 py-4">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Add to Cart
                        </button>
                    </div>
                `;
                productList.appendChild(productElement);
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
});

