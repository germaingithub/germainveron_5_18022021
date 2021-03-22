
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
                        <img src="${productData.imageUrl}"  class="img-fluid col-6" alt="teddy_2" width="300" height="250">
                          <div class="col-6">
                            <h3> ${productData.name}  </h3>
                            <p>${productData.description}</p>
                          <div class="prix">
                            <strong>${productData.price/100}.00€ 
                            </strong>
                          </div>                              
                      </div>
                          
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
//ajoutpanier

     
  
      


      // ajout au local storage + sauvegarde + transfo en JSON + alert (objet bien ajouté)
      
        const bouton = document.getElementById('addToBasket');

        bouton.addEventListener('click', (event) => {
        event.preventDefault();
        alert('L\'article a bien été ajouté à votre panier.');

      let blocInfoProd = {
      nameProduct :  productData.name,
      priceproduct :  productData.price,
      quantity : 1,
    };

     let nameStorage = JSON.parse(localStorage.getItem('tout')); 

        if (nameStorage === null) {
          nameStorage = [];
         
        } 
      
          nameStorage.push();
          localStorage.setItem("tout",JSON.stringify(blocInfoProd));
      
        
      
      });
         
      
       addTobasket();
});


    }

      // ajout au local storage + sauvegarde + transfo en JSON + alert (objet bien ajouté)
  
       
  