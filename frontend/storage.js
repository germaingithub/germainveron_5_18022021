

let nameStorage = JSON.parse(localStorage.getItem('produit')); 
    const panierPosition = document.querySelector("#panier") //selection ou je vais injecter le code
    const panier_plein = document.querySelector("#panier_plein")

    //si panier vide
    if(nameStorage === null){
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
        
            <tr class="border bg-white">
                <th ${nameStorage[i].nameProduct} class="py-2"> ${nameStorage[i].nameProduct} </th>
                <th>${nameStorage[i].quantity} </th>
                <th>${nameStorage[i].priceProduct}.00€ </th>
                <th>${nameStorage[i].priceProduct}.00€ </th>
                <th><th>
                <th id="trash"><button <i class="fas fa-trash"></i></button></th>
            </tr>
              
           `      
        }
     console.log(nameStorage)
}



