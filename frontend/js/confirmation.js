let order = JSON.parse(localStorage.getItem('order'));
let produit = JSON.parse(localStorage.getItem('products'));
const numCde = document.querySelector("#numCde")
const contact = order.contact
const products = produit
const idOrder = order.orderId

const total = order.totalPriceCalcul    
    
let totalConf = [];
  for (let p = 0; p < products.length; p++) {
  let pBasket = products[p].priceProduct / 100 * products[p].quantity ;
  totalConf.push(pBasket)
}
//récapitulatif du montant total de la commande + numero de commande + nom client
const reduc = (accumulator, currentValue) => accumulator + currentValue
const totalPriceC = totalConf.reduce(reduc)

      numCde.innerHTML =` <p class="text-center text-4xl font-weight-bold mb-4 fs-2">Merci ${order.contact.firstName}.Votre commande à bien été prise en compte ! En Espérant vous revoir très bientôt</p>
      <p class="text-center text-xl font-weight-bold mb-4 fs-2">Voici votre numéro de commande: ${order.orderId}</p>
      <p class="text-center text-xl font-weight-bold mb-4 fs-2">Le montant total de votre commande est de :${new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(totalPriceC)}</p>`

      localStorage.clear()