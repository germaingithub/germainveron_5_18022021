let nameStorage = JSON.parse(localStorage.getItem('products'));
const panierPosition = document.querySelector("#panier")
const panierPlein = document.querySelector("#panier_plein")

if (nameStorage === null || nameStorage == 0) {
  const emptybasket = ` 
              <div class="container">
                  <div> Votre panier est vide </div>
              </div>
                              `;
  panierPosition.innerHTML = emptybasket;
} else {
  for (i = 0; i < nameStorage.length; i++) {
    panierPlein.innerHTML += `
                <div class="container ">
                      <th ${nameStorage[i].nameProduct} class="py-2"> ${nameStorage[i].nameProduct} </th>
                      <th> ${nameStorage[i].quantity} </th>
                      <th>${nameStorage[i].priceProduct/100} </th>
                      <th>${nameStorage[i].priceProduct/100*nameStorage[i].quantity}<th>        
                    <button class="btn_supprimer">supprimer </button>
                  </div>
                `
  }
}

let btn_trash = document.querySelectorAll('.btn_supprimer');
for (let j = 0; j < btn_trash.length; j++) {
  btn_trash[j].addEventListener('click', (event) => {
    event.preventDefault();
    let nameProductDelete = nameStorage[j].nameProduct;
    nameStorage = nameStorage.filter(
      (el) => el.nameProduct !== nameProductDelete
    );
    localStorage.setItem('products', JSON.stringify(nameStorage));
    alert("Ce produit a été supprimé");
    window.location.href = "panier.html";
  })
}

let totalPrice = [];
for (let m = 0; m < nameStorage.length; m++) {
  let priceProductBasket = nameStorage[m].priceProduct / 100*nameStorage[m].quantity;
  totalPrice.push(priceProductBasket)
}

const reducer = (accumulator, currentValue) => accumulator + currentValue

const totalPriceCalcul = totalPrice.reduce(reducer)

const priceHtml = `  
  <div class="py-5 col-2 bg-white mb-3"> Total de la commande: ${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totalPriceCalcul)} </div>
`
panierPosition.insertAdjacentHTML("afterend", priceHtml)

const formHtml = () => {
  if (nameStorage === null || nameStorage == 0) {
    const emptybasket = ` 
            <div class="container">
              <div> Votre panier est vide </div>
            </div>
                            `;
    panierPosition.innerHTML = emptybasket;
    const hideForm = document.getElementById('#form').style.display = d - none;
    panierPosition.innerHTML = hideForm;
  }
};
formHtml();
//check form
let firstName = document.getElementById('firstname')
let lastName = document.getElementById('lastname')
let email = document.getElementById('email')
let address = document.getElementById('address')
let city = document.getElementById('city')
let btnOrder = document.getElementById("validationForm")

let firstNameOk = ""
let lastNameOk = ""
let emailOk = ""
let addressOk = ""
let cityOk = ""

let lettersNumbersRg = /^[-'a-zA-Z0-9À-ÖØ-öø-ÿ\s]+$/
let lettersRg = /^[-'a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/
let emailRg = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/

function validation (regex, el) {
	let regexOk = regex.test(el);
	if (regexOk){
		return true
	}else{
		return false
	}
}

function disable(){
	btnOrder.removeAttribute("disabled")
	if (!firstNameOk || !lastNameOk || !emailOk || !addressOk || !cityOk) {
		btnOrder.setAttribute("disabled", "disabled")
 	}
}

function message(message, eltValid){
	if (eltValid != true && message) {
		alert(message)
	}
}

function validationStatus(inputElt, regex){
	let eltValue = inputElt.value
	return validation(regex, eltValue)
}

firstNameOk = validationStatus(firstName, lettersRg)
lastNameOk = validationStatus(lastName, lettersRg)
emailOk = validationStatus(email, emailRg)
addressOk = validationStatus(address, lettersNumbersRg)
cityOk = validationStatus(city, lettersNumbersRg)
disable()

firstName.addEventListener('change', (event) =>{
	let inputValue = event.target.value
	firstNameOk = validation(lettersRg, inputValue)
	disable()
	message("Chiffre et symbole ne sont pas admis.", firstNameOk)
})

lastName.addEventListener('change', (event) =>{
	let inputValue = event.target.value
	lastNameOk = validation(lettersRg, inputValue)
	disable()
	message("Chiffre et symbole ne sont pas admis.", lastNameOk)
})

email.addEventListener('change', (event) =>{
	let inputValue = event.target.value
	emailOk = validation(emailRg, inputValue)
	disable()
	message("Votre email n\' est pas valide.", emailOk)
})

address.addEventListener('change', (event) =>{
	let inputValue = event.target.value
	addressOk = validation(lettersNumbersRg, inputValue)
	disable()
	message("L\'adresse ne doit contenir que des lettres et / ou chiffres sans ponctuation. ", addressOk)
})

city.addEventListener('change', (event) =>{
	let inputValue = event.target.value
	cityOk = validation(lettersNumbersRg, inputValue)
	disable()
	message("Chiffre et symbole ne sont pas admis.", cityOk)
})

const btnSendForm = document.querySelector('#form');
btnSendForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const contact = {
    firstName: document.querySelector('#firstname').value,
    lastName: document.querySelector('#lastname').value,
    address: document.querySelector('#address').value,
    city: document.querySelector('#city').value,
    email: document.querySelector('#email').value,
  }

  const products = []
    nameStorage.forEach(product => {
    products.push(product.id)
  })

  const request = {
    contact: contact,
    products: products,
  }

  let send = JSON.stringify(request);

  const options = {
    method: 'POST',
    body: send,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }
  //envoi au serveur
  fetch('http://localhost:3000/api/teddies/order', options)
    .then(response => response.json())
    .then(response => {
      let order = JSON.stringify(response)
      localStorage.setItem('order', order)
      window.location = window.Location.href = "confirmation.html";
    })
    .catch(()=> {
      alert('L\'envoi de la requete est impossible.')
    })
});
//enregistrement données dans formulaire
const dataLocalStorage = localStorage.getItem('contact');
const dataLocalStorageObj = JSON.parse(dataLocalStorage)