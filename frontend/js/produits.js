const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get("given_id")
const productData = getProductData(productId)

function getProductData(productId) {
  return fetch(`https://ab-p5-api.herokuapp.com/api/teddies/${productId}`)
    .then(response => response.json())
    .then(productData => {

      const teddiesElement = document.querySelector('#descrip')
      teddiesElement.innerHTML += `
                    <div id="cart" class="card">  
                      <div class="row">
                        <img src="${productData.imageUrl}"  class="img-fluid col-6" alt="teddy_2" width="300" height="250">
                        <div class="col-6">
                          <h3>${productData.name}</h3>
                          <p>${productData.description}</p>
                          <strong>${productData.price/100}.00€</strong>
                        </div>                              
                      </div>
                    </div>
                `
      let colors = productData.colors
      const selectElement = document.querySelector('#colors')

      for (let color of colors) {
        selectElement.innerHTML += `  
            <option value="${color}">${color}</option>`
      }

      const structureQuantite = `
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      `
      const positionQuantite = document.querySelector('#selectQte');
      positionQuantite.innerHTML = structureQuantite;

      const buttonAddToLocalStorage = document.getElementById('addToBasket');

      buttonAddToLocalStorage.addEventListener('click', (event) => {
        event.preventDefault();
        const choixQte = positionQuantite.value;

        let nameStorage = localStorage.getItem('produit');
        let tedProduct = JSON.parse(nameStorage);

        function addProductToLocalStorage() {
          if (nameStorage === null) {
            tedProduct = [];
          }
          tedProduct.push({
            id: productData._id,
            nameProduct: productData.name,
            priceProduct: (productData.price * choixQte),
            quantity: choixQte,
          });
        }
        //addProductToLocalStorage()
        
        const monProduit = {
           id: productData._id,
            nameProduct: productData.name,
            priceProduct: (productData.price * choixQte),
            quantity: choixQte,
        }

          addProductToLocalSrage(monProduit)
        //localStorage.setItem('produit', JSON.stringify(tedProduct));
        alert('L\'article a bien été ajouté à votre panier.');
        
      })
    })
};

const addProductToLocalSrage = (product) => {
  if (!localStorage.getItem('products')) {
    localStorage.setItem('products', JSON.stringify([product]))
  } else {
    const products = JSON.parse(localStorage.getItem('products'))
    const productAlreadySelected = products.filter(prod => prod.id === product.id)

    if (productAlreadySelected.length > 0) {
      productAlreadySelected[0].quantity++
    } else {
      products.push(product)
    }
    localStorage.setItem('products',JSON.stringify(products))
  }
}