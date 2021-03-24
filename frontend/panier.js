

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
    
}

const reducer = (accumulator, currentValue) => accumulator + currentValue
const totalPriceCalcul = totalPrice.reduce(reducer)



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
            <label for="firstname">Prénom </label>
            <input type="text" class="form-control" id="firstname" placeholder="" value=""  required>  
          </div>
          <div class="col-md-10 mb-3">
            <label id="userInputLastName" for="lastname">Nom</label>
            <input type="text" class="form-control " id="lastname" placeholder="" value="" required>
            <div class="valid-feedback">
              Super!
            </div>
          </div>
          <div class="form-group col-md-10 mb-3">
            <label id="userInputEmail"  for="email">Email </label>
            <input type="email" class="form-control " id="email" aria-describedby="emailHelp" required>
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
        </div>
        <div class="form-row ">
          <div class="col-md-10 mb-3">
            <label id="userInputAdress"  for="adress">Adresse</label>
            <input type="text" class="form-control " id="adress" placeholder="" required>
            <div class="invalid-feedback">
              Please provide a valid state.
            </div>
            <div class="col-md mb-3">
              <label id="userInputZipCode"  for="zipcode">Code Postal</label>
              <input type="text" class="form-control " id="zipcode" placeholder="" required>
              <div class="invalid-feedback">

              </div>
            </div>
            <div class="col-md mb-3">
              <label id="userInputTown" for="town">Ville</label>
              <input type="text" class="form-control " id="town" placeholder="" required>
              <div class="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>

          </div>

        </div>

        <button id="validation" class="btn  btn-primary"  type="submit">Valider votre commande</button>
      </form>
      ` 
      ;
      positionForm.insertAdjacentHTML('afterend',structureHtml);}
};
      formHtml();

    
      const btnSendForm = document.querySelector('#validation');
      btnSendForm.addEventListener('click',(e)=>{
          e.preventDefault();

          const formValues ={
            firstname: document.querySelector('#firstname').value,
            lastname: document.querySelector('#lastname').value,
            adress: document.querySelector('#adress').value,
            town: document.querySelector('#town').value,
            zipCode: document.querySelector('#zipcode').value,
            email: document.querySelector('#email').value,
          }
         
          //formulaire check
          const textAlert = (value) => {
            return `${value}: chiffre et symbole ne sont pas admis. entre 3 et 20 caracteres.`;
          }
           const textAlertNumber = (value) => {
            return `${value}: Seulement 5 chiffres autorisés.`;
          }
          const textAlertEmail = (value) => {
            return `${value}: Votre email n'est pas valide.`;
          }

          const regExFirstLastNameTown = (value) => {
            return (/^[A-Za-z]{3,20}$/.test(value))
          }
          
          const regExZipCode = (value) => {
            return (/^[0-9]{5}$/.test(value))
          }

           const regExEmail = (value) => {
            return (/^[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}$/.test(value));
          }
          const regExAdress = (value) => {
            return (/^[0-9] [a-zA-Z]$/)
          }

          function checkFirstName() {
            const checkFn = formValues.firstname;
            if (regExFirstLastNameTown(checkFn)) {
              return true;
            } else {
              alert(textAlert('Prénom'));
              return false;
              
            } 
          }

          function checkLastName() {
            const checkLn = formValues.lastname;
            if (regExFirstLastNameTown(checkLn)) {
              return true;
            } else {
              alert(textAlert('Nom'));
              return false;
              
            } 
          }

          function checkTown() {
            const checkT = formValues.town;
            if (regExFirstLastNameTown(checkT)) {
              return true;
            } else {
              alert(textAlert('Ville'));
              return false;
              
            } 
          }

            function checkZipCode() {
            const checkZip = formValues.zipCode;
            if (regExZipCode(checkZip)) {
              return true;
            } else {
              alert(textAlertNumber('Code postal'));
              return false;
              
            } 
          }

          function checkEmail() {
            const checkE = formValues.email;
            if (regExEmail(checkE)) {
              return true;
            } else {
              alert(textAlertEmail('Email'));
              return false;
              
            } 
          }



          if (checkFirstName() && checkLastName() && checkTown() && checkZipCode() && checkEmail()) {
             localStorage.setItem('formValues',JSON.stringify(formValues))
             

          } else {
            alert('Veuillez remplir le formulaires correctement');
          }
      
          //formualire check fin


        
       
        const toBeSentToServer = {
          nameStorage,
          formValues
          
        }
        window.Location.href="confirmation.html" 
        console.log(toBeSentToServer)
      });
       //enregisstrement donnees dans forumulaure
      const dataLocalStorage = localStorage.getItem('formvalues');
      const dataLocalStorageObj = JSON.parse(dataLocalStorage)  

      

