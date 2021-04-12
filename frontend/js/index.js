(async() =>{
    const producs = await getProduc()
    for(produc of producs) {
        displayProduc(produc)
    }
})()
// récupération des données de l'API
function getProduc() {
   return fetch("http://localhost:3000/api/teddies/")
   .then (httpBodyResponse =>{
       return httpBodyResponse.json()
   })
   .then(producs =>{
       return producs
   })
   .catch(error =>{
       alert(error)
   })
}

function displayProduc(productData){
    const templateElt = document.getElementById('templateProduct')
    const cloneElt = document.importNode(templateElt.content, true)

    cloneElt.getElementById('name').textContent = productData.name
    cloneElt.getElementById('description').textContent = productData.description
    cloneElt.getElementById('price').textContent = productData.price/100
    cloneElt.getElementById('image').src = productData.imageUrl
    cloneElt.getElementById('link').href =`produits.html?given_id=${productData._id}`
    document.getElementById('main').appendChild(cloneElt)
}