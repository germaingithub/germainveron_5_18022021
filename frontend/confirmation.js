let order = JSON.parse(localStorage.getItem('order'));

console.log(order)
const numCde = document.querySelector("#numCde")
const contact = order.contact
const idOrder = order.orderId

numCde.innerHTML =` <p class="text-center text-4xl font-weight-bold mb-4">Merci ${order.contact.firstName}.Votre commande à bien été prise en compte ! En Espérant vous revoir très bientôt</p>
      <p class="text-center text-xl font-weight-bold mb-4">Votre commande N : ${order.orderId}</p>`

console.log(idOrder)

localStorage.clear()