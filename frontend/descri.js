const urlParams = new URLSearchParams(window.location.search) 
const productId = urlParams.get("given_id")
const productData =  getProductData(productId)
console.log(productData)

function getProductData(productId){
  return fetch(`http://localhost:3000/api/teddies/${productId}`)
    .then(response => response.json())
    .then(productData => {
        const teddiesElement = document.querySelector('#descrip')
         {
        console.log(productData.price)
        
           

            teddiesElement.innerHTML += `<div class="card">
        
        <div class="row">

          <img src="${productData.imageUrl}" id="image" class="img-fluid col-6" alt="teddy_2" width="300" height="250">
          <div class="col-6">
             <h3> ${productData.name} </h3>
           <p>${productData.description}</p>
             <div class="prix">
                                    <strong>${productData.price/100}.00€</strong>
                                </div>

          </div>
        </div>
        <form>
          <div class="form-row align-items-center">
            <div class="col-auto my-1">
              <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Couleurs</option>
                <option id="c1">One</option>
                <option id="c2">Two</option>
                <option id="c3">Three</option>
                <option id="c4">Four</option>

              </select>
            </div>

<div class="row">
        <div class="col-7 pb-3"></div>
        <button type="button" class="btn btn-primary btn-lg col-4 align-self-end mb-3"
          onclick="buttonClickGET()">Ajouter au panier</button>
      </div>
          </div>
        </form>`
        }

    })}