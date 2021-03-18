let nameStorage = JSON.parse(localStorage.getItem('Prod'));
const saveTolocalStorage = () => {
      localStorage.setItem ('Prod', blocInfoProd)
  
}; 


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
                <th ${nameStorage[i].name} class="py-2"> ${nameStorage[i].name} </th>
                <th id="qte" >1</th>
              <th>${nameStorage[i].price/100}.00€</th>
              <th> </th>
                
                <th id="trash"><button <i class="fas fa-trash"></i></button></th>
              </tr>
              
           `      
        }
     //<tr class="border bg-white">
                //<th id="nomProduit" class="py-2"> teddy 1 </th>
                //<th id="qte" >1</th>
                //<th id="montant" >50€</th>
                //<th id="total">55€</th>
                //<th id="trash"><i class="fas fa-trash"></i></th>
              //</tr>
    
}

//bouton supprimer
let btn_trash =document.querySelectorAll(".fas fa-trash");

console.log(nameStorage[0])