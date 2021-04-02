const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get("given_id")
const productData = getProductData(productId)

function getProductData(productId) {
  return fetch(`http://localhost:3000/api/teddies/${productId}`)
    .then(response => response.json())
    .then(productData => {
      console.log(productData)
      const teddiesElement = document.querySelector('#descrip')
      teddiesElement.innerHTML +=`
                    <div id="cart" class="card">  
                      <div class="row">
                        <img src="${productData.imageUrl}"  class="img-fluid col-6" alt="teddy_2" width="300" height="250">
                        <div class="col-6">
                          <h3>${productData.name}</h3>
                          <p>${productData.description}</p>
                          <span="prix"><strong>${productData.price/100}.00€</strong></span>
                        </div>                              
                      </div>
                    </div>
                `
      console.log(teddiesElement.innerHTML)        
      let colors = productData.colors
      const selectElement = document.querySelector('#colors')
      console.log(colors)
      for (let color of colors) {
        selectElement.innerHTML += `  
            <option value="${color}">${color}</option>`
      }
      console.log(selectElement.innerHTML)
      const buttonAddToLocalStorage = document.getElementById('addToBasket');
      buttonAddToLocalStorage.addEventListener('click', (event) => {
        
      let nameStorage = localStorage.getItem('produit');
      let tedProduct = JSON.parse(nameStorage);
      console.log(nameStorage)
      function addProductToLocalStorage() {
        if (nameStorage === null) {
          tedProduct = [];
        }
        tedProduct.push({
          id: productData._id,
          nameProduct: productData.name,
          priceProduct: productData.price,
          quantity: 1,
        });
      }
        addProductToLocalStorage()
        
      localStorage.setItem('produit', JSON.stringify(tedProduct));
      alert('L\'article a bien été ajouté à votre panier.');
      event.preventDefault();
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
  }
}