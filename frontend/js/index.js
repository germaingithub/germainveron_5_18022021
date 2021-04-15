'use strict';
(async () => {
  const products = await getProduct();
  for (const product of products) {
    displayProduct(product);
  }
})();
// récupération des données de l'API
function getProduct() {
  return fetch("http://localhost:3000/api/teddies/")
    .then((httpBodyResponse) => {
      return httpBodyResponse.json();
    })
    .then((products) => {
      return products;
    })
    .catch((error) => {
      alert(error);
    });
}

function displayProduct(productData) {
  const templateElt = document.getElementById("templateProduct");
  const cloneElt = document.importNode(templateElt.content, true);
 
  cloneElt.getElementById("name").textContent = productData.name;
  cloneElt.getElementById("description").textContent = productData.description;
  cloneElt.getElementById("price").textContent = productData.price / 100;
  cloneElt.getElementById("image").src = productData.imageUrl;
  cloneElt.getElementById("link").href = `produits.html?given_id=${productData._id}`;
  document.getElementById("main").appendChild(cloneElt);
}
