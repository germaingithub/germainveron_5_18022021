const urlParams = new URLSearchParams(window.location.search) 
const productId = urlParams.get("given_id")
const productData =  getProductData(productId)

let selectColor = async () =>{

     let color = [] 
     const appHtml = document.querySelector('#colors')

     try {
         color = await getcolors()
         for (let _color of colors){
             appHtml.innerHTML += `
             <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>colors</option>
                <option value="${productData.color}">One</option>
       

              </select>`
         }
     } catch (error){
         console.error(error)
     }
    }
console.log()

console.log(productData)

function getProductData(productId){
  return fetch(`http://localhost:3000/api/teddies/${productId}`)
    .then(response => response.json())
    .then(productData => {
        const teddiesElement = document.querySelector('#descrip')
         {
       
        
           

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
        `
         }
      
        

}
    )}
       // let selectColor = document.querySelector('colors');

        //data.colors.forEach(colors => {
          //      let option = document.createElement("option");
           //     selectColor.appendChild(option);
            //    option.setAttribute("value", "diff colors");
            //    option.textContent = colors;
          //  });



    //  document.getElementById('addtobasket').onclick = (event) => {
   // event.preventDefault()
   // Panier.addProduct(product)
  //  redirectToShoppingCart(productData.name)
 // }

 // element.addEventListener('click', function(e) { //ecouter un click
//    e.preventDefault(); 
//});



//mySelect.addEventListener('change', function(e) { //ecouter un hcangement
 //   result.innerHTML = e.target.value; 
//}); 