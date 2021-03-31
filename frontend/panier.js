let nameStorage = JSON.parse(localStorage.getItem('produit'));
const panierPosition = document.querySelector("#panier") //selection ou je vais injecter le code
const panier_plein = document.querySelector("#panier_plein")

//si panier vide
if (nameStorage === null || nameStorage == 0) {
  const panierVide = ` 
            <div class="container">
                <div> Votre panier est vide </div>
            </div>
                            `;
  panierPosition.innerHTML = panierVide;
} else {
  //si pas vide afficher produit

  for (i = 0; i < nameStorage.length; i++) {
    panier_plein.innerHTML += `
               <div class="container">
                <th ${nameStorage[i].nameProduct} class="py-2"> ${nameStorage[i].nameProduct} </th>
                 <th> ${nameStorage[i].quantity} </th>
                <th>${nameStorage[i].priceProduct/100}.00€ </th>
                <th>${nameStorage[i].priceProduct/100*nameStorage[i].quantity}.00€<th>        
                <button class="btn_supprimer">supprimer </button>
                </div>
         
  
           `
  }

}


console.log(nameStorage)

let btn_trash = document.querySelectorAll('.btn_supprimer');

for (let j = 0; j < btn_trash.length; j++) {
  btn_trash[j].addEventListener('click', (event) => {
    event.preventDefault();
    let nameProductDelete = nameStorage[j].nameProduct;
    nameStorage = nameStorage.filter(
      (el) => el.nameProduct !== nameProductDelete
    );
    localStorage.setItem('produit', JSON.stringify(nameStorage));
    alert("Ce produit a été supprimé");
    window.location.href = "panier.html";
  })

}


let totalPrice = [];
for (let m = 0; m < nameStorage.length; m++) {
  let priceProductBasket = nameStorage[m].priceProduct / 100 * nameStorage[m].quantity;
  totalPrice.push(priceProductBasket)

}

const reducer = (accumulator, currentValue) => accumulator + currentValue
const totalPriceCalcul = totalPrice.reduce(reducer)



const priceHtml = `  
  <div class="py-5 col-12 bg-white"> Total de la commande: ${totalPriceCalcul}.00€ </div>
`
panierPosition.insertAdjacentHTML("beforeend", priceHtml)

const formHtml = () => {
  const positionForm = document.querySelector('#panier');

  if (nameStorage === null || nameStorage == 0) {
    const panierVide = ` 
            <div class="container">
              <div> Votre panier est vide </div>
            </div>
                            `;
    panierPosition.innerHTML = panierVide;
  } else {
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
            <label id="userInputAdress"  for="address">Adresse</label>
            <input type="text" class="form-control " id="address" placeholder="" required>
            <div id="adressemanquante" class="position-relative bg-info mt-1 rounded" ></div>
            
            <div class="col-md mb-3">
              <label id="userInputZipCode"  for="zipcode">Code Postal</label>
              <input type="text" class="form-control " id="zipcode" placeholder="" required>
              <div id="zipmanquant" class="position-relative bg-info mt-1 rounded">
              </div>
            </div>
            <div class="col-md mb-3">
              <label id="userInputTown" for="city">Ville</label>
              <input type="text" class="form-control " id="city" placeholder="" required>
              <div id="villemanquante" class="position-relative bg-info mt-1 rounded">
            </div>
          </div>
        </div>
        <button id="validation" class="btn  btn-primary"  type="submit">Valider votre commande</button>
      </form>
      `;
    positionForm.insertAdjacentHTML('afterend', structureHtml);
  }
};
formHtml();


const btnSendForm = document.querySelector('#validation');
btnSendForm.addEventListener('click', (e) => {
  e.preventDefault();

  const contact = {
    firstName: document.querySelector('#firstname').value,
    lastName: document.querySelector('#lastname').value,
    address: document.querySelector('#address').value,
    city: document.querySelector('#city').value,
    email: document.querySelector('#email').value,
  }
const zip = {
  zipCode: document.querySelector('#zipcode').value,
}
  //formulaire check




  const regExFirstLastNameCity = (value) => {
    return (/^[A-Za-z]{3,20}$/.test(value))
  }

  const regExZipCode = (value) => {
    return (/^[0-9]{5}$/.test(value))
  }

  const regExEmail = (value) => {
    return (/^[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,4}$/.test(value));
  }
  const regExAddress = (value) => {
    return (/^[0-9a-zA-Z \s]{5,50}$/.test(value))
  }

  function checkFirstName() {
    const checkFn = contact.firstname;
    if (regExFirstLastNameCity(checkFn)) {
      document.querySelector('#prenommanquant').textContent = '';
      return true;
    } else {
      document.querySelector('#prenommanquant').textContent = 'Chiffre et symbole ne sont pas admis. Entre 3 et 20 caracteres.';
      return false;

    }
  }

  function checkLastName() {
    const checkLn = contact.lastname;
    if (regExFirstLastNameCity(checkLn)) {
      document.querySelector('#nommanquant').textContent = '';
      return true;
    } else {
      document.querySelector('#nommanquant').textContent = 'Chiffre et symbole ne sont pas admis. Entre 3 et 20 caracteres.';
      return false;

    }

  }

  function checkCity() {
    const checkT = contact.city;
    if (regExFirstLastNameCity(checkT)) {
      document.querySelector('#villemanquante').textContent = '';
      return true;
    } else {
      document.querySelector('#villemanquante').textContent = 'Chiffre et symbole ne sont pas admis. Entre 3 et 20 caractères.';
      return false;

    }
  }

  function checkZipCode() {
    const checkZip = zip.zipCode;
    if (regExZipCode(checkZip)) {
      document.querySelector('#zipmanquant').textContent = '';
      return true;
    } else {
      document.querySelector('#zipmanquant').textContent = 'Seulement 5 chiffres autorisés.';
      return false;

    }

  }

  function checkEmail() {
    const checkE = contact.email;
    if (regExEmail(checkE)) {
      document.querySelector('#emailmanquant').textContent = '';
      return true;
    } else {
      document.querySelector('#emailmanquant').textContent = 'Votre email n\'est pas valide.';
      return false;

    }
  }

  function checkAddress() {
    const checkA = contact.address;
    if (regExAddress(checkA)) {
      document.querySelector('#adressemanquante').textContent = '';
      return true;
    } else {
      document.querySelector('#adressemanquante').textContent = ('L\'adresse ne doit contenir que des les lettres et/ou chiffres sans punctuation.');
      return false;

    }
  }



  if (checkFirstName() && checkLastName() && checkCity() && checkZipCode() && checkEmail() && checkAddress()) {
    localStorage.setItem('contact', JSON.stringify(contact))
   
    

  } else {
    alert('Veuillez remplir le formulaires correctement');
  }
const products =[]
nameStorage.forEach(product =>{
  products.push(product.id)
})
const request = {
  contact: contact,
  products: products,
  }
  let send = JSON.stringify(request);

  console.log(request)
  const options = {
    method: 'POST',
    body: send,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }

  fetch('http://localhost:3000/api/teddies/order', options)
    .then(response => response.json())
    .then(response => {
      let order = JSON.stringify(response)
      localStorage.setItem('order',order)
console.log(response)
 window.location = window.Location.href="confirmation.html";
    })
    .catch(function () {
      alert('L\'envoi de la requete est impossible.')
      console.log(dataLocalStorage)
    })
    
});
//enregisstrement donnees dans forumulaure
const dataLocalStorage = localStorage.getItem('contact');
const dataLocalStorageObj = JSON.parse(dataLocalStorage)