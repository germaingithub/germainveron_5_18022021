

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
                 <th> ${nameStorage[i].quantity} </th>
                <th>${nameStorage[i].priceProduct/100}.00€ </th>
                <th id="totalQte"><th>        
                <button class="btn_supprimer">supprimer </button>
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

    if(nameStorage === null || nameStorage== 0 ) {
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
            <div id="prenommanquant" class="position-relative bg-info mt-1 rounded" ></div>
          </div>
          <div class="col-md-10 mb-3">
            <label id="userInputLastName" for="lastname">Nom</label> 
            <input type="text" class="form-control " id="lastname" placeholder="" value="" required>
            <div id="nommanquant" class="position-relative bg-info mt-1 rounded" ></div>
           
          </div>
          <div class="form-group col-md-10 mb-3">
            <label id="userInputEmail"  for="email">Email </label>
            <input type="email" class="form-control " id="email" aria-describedby="emailHelp" required>
            <div id="emailmanquant" class="position-relative bg-info mt-1 rounded" ></div>
            <small id="emailHelp" class="form-text text-muted"></small>
          </div>
        </div>
        <div class="form-row ">
          <div class="col-md-10 mb-3">
            <label id="userInputAdress"  for="adress">Adresse</label>
            <input type="text" class="form-control " id="adress" placeholder="" required>
            <div id="adressemanquante" class="position-relative bg-info mt-1 rounded" ></div>
            
            <div class="col-md mb-3">
              <label id="userInputZipCode"  for="zipcode">Code Postal</label>
              <input type="text" class="form-control " id="zipcode" placeholder="" required>
              <div id="zipmanquant" class="position-relative bg-info mt-1 rounded">

              </div>
            </div>
            <div class="col-md mb-3">
              <label id="userInputTown" for="town">Ville</label>
              <input type="text" class="form-control " id="town" placeholder="" required>
              <div id="villemanquante" class="position-relative bg-info mt-1 rounded">
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
        return (/^[0-9a-zA-Z \s]{5,50}$/.test(value))
      }

      function checkFirstName() {
        const checkFn = formValues.firstname;
        if (regExFirstLastNameTown(checkFn)) {
          document.querySelector('#prenommanquant').textContent = '';
          return true;
        } else {
          document.querySelector('#prenommanquant').textContent = 'Chiffre et symbole ne sont pas admis. Entre 3 et 20 caracteres.';
          return false;
          
        } 
      }

      function checkLastName() {
        const checkLn = formValues.lastname;
        if (regExFirstLastNameTown(checkLn)) {
          document.querySelector('#nommanquant').textContent = '';
          return true;
        } else {
          document.querySelector('#nommanquant').textContent = 'Chiffre et symbole ne sont pas admis. Entre 3 et 20 caracteres.';
          return false;
         
        } 
        
      }
 
      function checkTown() {
        const checkT = formValues.town;
        if (regExFirstLastNameTown(checkT)) {
          document.querySelector('#villemanquante').textContent = '';
          return true;
        } else {
          document.querySelector('#villemanquante').textContent = 'Chiffre et symbole ne sont pas admis. Entre 3 et 20 caractères.';
          return false;
          
        } 
      }

      function checkZipCode() {
        const checkZip = formValues.zipCode;
        if (regExZipCode(checkZip)) {
          document.querySelector('#zipmanquant').textContent = '';
          return true;
        } else {
          document.querySelector('#zipmanquant').textContent = 'Seulement 5 chiffres autorisés.';
          return false;
          
        } 
      
      }

      function checkEmail() {
        const checkE = formValues.email;
        if (regExEmail(checkE)) {
          document.querySelector('#emailmanquant').textContent = '';
          return true;
        } else {
          document.querySelector('#emailmanquant').textContent = 'Votre email n\'est pas valide.';
          return false;
          
        } 
      }

      function checkAdress() {
        const checkA = formValues.adress;
        if (regExAdress(checkA)) {
          document.querySelector('#adressemanquante').textContent ='';
          return true;
        } else {
          document.querySelector('#adressemanquante').textContent =('L\'adresse ne doit contenir que des les lettres et/ou chiffres sans punctuation.');
          return false;
          
        } 
      }



        if (checkFirstName() && checkLastName() && checkTown() && checkZipCode() && checkEmail() && checkAdress()) {
          localStorage.setItem('formValues',JSON.stringify(formValues))
          
          window.location = window.Location.href="confirmation.html";

        } else {
          alert('Veuillez remplir le formulaires correctement');
        }
    
      const toBeSentToServer = {
        nameStorage,
        formValues

      }
       console.log(toBeSentToServer)
        

          if (toBeSentToServer=== null) {

                  } else {
    
                  }
            console.log(toBeSentToServer)
      });
       //enregisstrement donnees dans forumulaure
      const dataLocalStorage = localStorage.getItem('formvalues');
      const dataLocalStorageObj = JSON.parse(dataLocalStorage)  

      

