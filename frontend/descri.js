const urlParams = new URLSearchParams(window.location.search) 
const productId = urlParams.get("given_id")
const productData =  getProductData(productId)





function getProductData(productId) {
  return fetch(`http://localhost:3000/api/teddies/${productId}`)
    .then(response => response.json())
    .then(productData => {
  
      const teddiesElement = document.querySelector('#descrip')
         
      teddiesElement.innerHTML += 
                `
                    <div id="cart" class="card">  
                      <div class="row">
                        <img src="${productData.imageUrl}" id="image" class="img-fluid col-6" alt="teddy_2" width="300" height="250">
                          <div class="col-6">
                            <h3> ${productData.name} id="nameP" </h3>
                            <p>${productData.description}</p>
                          <div class="prix">
                            <strong>${productData.price/100}.00€ id="priceP"</strong>
                          </div>                              
                      </div>
                          <button id="addtobasket" type="button" class="btn btn-primary btn-lg col-4 align-self-end mb-3"
                            >Ajouter au panier
                          </button>
                    </div>
                `
         

      let colors = productData.colors
      const selectElement = document.querySelector('#colors')
      for (let color of colors) {
      
        selectElement.innerHTML += 
          `  
            <option value="${color}">${color}</option>
          `
      } 
      function ajoutPanier(){
    var btn = document.getElementByID("#addToBasket");
    btn.addEventListener("click", async function(){
      alert = "article ajouté"
        cart.push();
        localStorage.setitem('panier', JSON.stringify(panier));
        alert("Ajouté au panier")
        location.reload();
    });
};
ajoutPanier();
    })
    
}
