let nameStorage = localStorage.getItem('Prod');
    


    const panierPosition = document.querySelector("#panier") //selection ou je vais injecter le code

    console.log(panierPosition)

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
        let structurePanier = [];

        for(k = 0; k < nameStorage.length; k++ ){
           structurePanier = structurePanier +`
        
           <tr class="border bg-white">
                <th ${nameStorage.name} class="py-2"> teddy 1 </th>
                <th id="qte" >1</th>
                <th ${nameStorage.price}</th>
                <th>55€</th>
                <th id="trash"><i class="fas fa-trash"></i></th>
              </tr>
           `
        }
        if (k == nameStorage.length){
            panierPosition.innerHTML = structurePanier;
        }
    console.log(structurePanier)
}