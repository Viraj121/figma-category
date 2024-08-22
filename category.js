let productsData;

fetch("./ecommerce.json")
  .then((response) => response.json())
  .then((data) => {
    productsData = data.products[0];
    displayProducts("womens");
  });

function displayProducts(category) {
  const productDisplay = document.getElementById("productDisplay");
  productDisplay.innerHTML = "";

  productsData[category].forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product");
    productElement.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Rs. ${product.price}</p>
        `;
    productDisplay.appendChild(productElement);
  });
}

document
  .getElementById("mens")
  .addEventListener("click", () => displayProducts("mens"));
document
  .getElementById("womens")
  .addEventListener("click", () => displayProducts("womens"));
document
  .getElementById("accessories")
  .addEventListener("click", () => displayProducts("accessories"));
