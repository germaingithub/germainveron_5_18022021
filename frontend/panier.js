let nameStorage = JSON.parse(localStorage.getItem('produit'));
const panierPosition = document.querySelector("#panier")
const panier_plein = document.querySelector("#panier_plein")

if (nameStorage === null || nameStorage == 0) {
  const emptybasket = ` 
              <div class="container">
                  <div> Votre panier est vide </div>
              </div>
                              `;
  panierPosition.innerHTML = emptybasket;
} else {
  for (i = 0; i < nameStorage.length; i++) {
    panier_plein.innerHTML += `
                <div class="container ">
                      <th ${nameStorage[i].nameProduct} class="py-2"> ${nameStorage[i].nameProduct} </th>
                      <th> ${nameStorage[i].quantity} </th>
                      <th>${nameStorage[i].priceProduct/100/nameStorage[i].quantity}.00€ </th>
                      <th>${nameStorage[i].priceProduct/100}.00€<th>        
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
    localStorage.setItem('produit', JSON.stringify(nameStorage));
    alert("Ce produit a été supprimé");
    window.location.href = "panier.html";
  })
}
let totalPrice = [];
for (let m = 0; m < nameStorage.length; m++) {
  let priceProductBasket = nameStorage[m].priceProduct / 100;
  totalPrice.push(priceProductBasket)
}
const reducer = (accumulator, currentValue) => accumulator + currentValue
const totalPriceCalcul = totalPrice.reduce(reducer)
const priceHtml = `  
  <div class="py-5 col-2 bg-white"> Total de la commande: ${totalPriceCalcul}.00€ </div>
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
    alert('Veuillez remplir le formulaires correctement')
  }

  const products = []
  nameStorage.forEach(product => {
    products.push(product.id)
  })

  const request = {
    contact: contact,
    products: products,
    totalPriceCalcul: totalPriceCalcul,
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
    .catch(function () {
      alert('L\'envoi de la requete est impossible.')
      console.log(dataLocalStorage)
    })
});
//enregisstrement donnees dans forumulaire
const dataLocalStorage = localStorage.getItem('contact');
const dataLocalStorageObj = JSON.parse(dataLocalStorage)