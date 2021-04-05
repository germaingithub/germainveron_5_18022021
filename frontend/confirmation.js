let order = JSON.parse(localStorage.getItem('order'));
let produit = JSON.parse(localStorage.getItem('produit'));
console.log(produit)
const numCde = document.querySelector("#numCde")
const contact = order.contact
const products = produit
const total =order.totalPriceCalcul
let totalConf = [];
  for (let p = 0; p < products.length; p++) {
  let pBasket = products[p].priceProduct / 100 ;
  totalConf.push(pBasket)
}

const reduc = (accumulator, currentValue) => accumulator + currentValue
const totalPriceC = totalConf.reduce(reduc)

const idOrder = order.orderId
      numCde.innerHTML =` <p class="text-center text-4xl font-weight-bold mb-4 fs-2">Merci ${order.contact.firstName}.Votre commande à bien été prise en compte ! En Espérant vous revoir très bientôt</p>
      <p class="text-center text-xl font-weight-bold mb-4 fs-2">Voici votre numéro de commande: ${order.orderId}</p>
      <p class="text-center text-xl font-weight-bold mb-4 fs-2">Le montant total de votre commande est de :${totalPriceC}.00€</p>`

localStorage.clear()
      