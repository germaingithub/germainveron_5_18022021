

let nameStorage = JSON.parse(localStorage.getItem('produit')); 
    const panierPosition = document.querySelector("#panier") //selection ou je vais injecter le code
    const panier_plein = document.querySelector("#panier_plein")

    //si panier vide
    if(nameStorage === null || nameStorage== 0 ){
        const panierVide =  ` 
            <div class="container">
                <div> Votre panier est vide </div>
            </div>
                            `;
            panierPosition.innerHTML = panierVide;
    }else{
        //si pas vide afficher produit
    
        for(i = 0; i < nameStorage.length; i++ ){    
           panier_plein.innerHTML +=`
               <div class="container">
                <th ${nameStorage[i].nameProduct} class="py-2"> ${nameStorage[i].nameProduct} </th>
                 <th><select </th>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                </select>
                <th>${nameStorage[i].priceProduct/100}.00€ </th>
                <th> id= "total"<th>           
                <th <button class="btn_supprimer">supprimer </button></th>
                </div>
         
  
           `      
        }
  
}
let btn_trash = document.querySelectorAll('.btn_supprimer');
console.log(btn_trash)

for (let j = 0; j < btn_trash.length; j++){
    btn_trash[j].addEventListener('click', (event) =>{
        event.preventDefault();
       let nameProductDelete = nameStorage[j].nameProduct;
       nameStorage = nameStorage.filter(
           (el) => el.nameProduct !== nameProductDelete
       );
       localStorage.setItem('produit',JSON.stringify(nameStorage));
     
     alert("Ce produit a été supprimé");
     window.location.href="panier.html";
    })

}


let totalPrice =[];
for (let m = 0; m < nameStorage.length; m++){
    let priceProductBasket = nameStorage[m].priceProduct/100;

    totalPrice.push(priceProductBasket)
    console.log(totalPrice)
}

const reducer = (accumulator, currentValue) => accumulator + currentValue
const totalPriceCalcul = totalPrice.reduce(reducer)

console.log(totalPriceCalcul)

const priceHtml = `  
<div class="py-5 col-12 bg-white"> Total de la commande: ${totalPriceCalcul}€ </div>
`  
panierPosition.insertAdjacentHTML("beforeend",priceHtml)

const formHtml = () =>{
    const positionForm = document.querySelector('#panier');

    if(nameStorage === null || nameStorage== 0 ){
        const panierVide =  ` 
            <div class="container">
                <div> Votre panier est vide </div>
            </div>
                            `;
            panierPosition.innerHTML = panierVide;
     }else{       
    const structureHtml = ` <form class="col-4 px-5" > 

      <form>
        <div class="form-row">
          <div class="col-md-10 mb-3">
            <label for="prenom">Prénom</label>
            <input type="text" class="form-control " id="prenom" name="prenom"  value="" required>
            <div class="valid-feedback">
              Parfait!
            </div>
          </div>
          <div class="col-md-10 mb-3">
            <label id="userInputLastName" for="validationServer02">Nom</label>
            <input type="text" class="form-control " id="validationServer02" placeholder="" value="" required>
            <div class="valid-feedback">
              Super!
            </div>
          </div>
          <div class="form-group col-md-10 mb-3">
            <label id="userInputEmail"  for="exampleInputEmail1">Email </label>
            <input type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" required>
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
        </div>
        <div class="form-row ">
          <div class="col-md-10 mb-3">
            <label id="userInputAdress"  for="validationServer04">Adresse</label>
            <input type="text" class="form-control " id="validationServer04" placeholder="" required>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
            <div class="col-md mb-3">
              <label id="userInputZipCode"  for="validationServer05">Code Postal</label>
              <input type="text" class="form-control " id="validationServer05" placeholder="" required>
              <div class="invalid-feedback">

              </div>
            </div>
            <div class="col-md mb-3">
              <label id="userInputTown" for="validationServer03">Ville</label>
              <input type="text" class="form-control " id="validationServer03" placeholder="" required>
              <div class="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>

          </div>

        </div>

        <button id="validation" class="btn bg-white btn-primary" type="submit">Valider votre commande</button>
      </form>
      ` 
      ;
      positionForm.insertAdjacentHTML('afterend',structureHtml);}
};
      formHtml();


      const btnSendForm = document.querySelector('#validation');
      btnSendForm.addEventListener('click',(e)=>{
          e.preventDefault();

        localStorage.setItem('prenom', document.querySelector('#prenom'));
       
      })
      
          
