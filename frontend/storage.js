

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