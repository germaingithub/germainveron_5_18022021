

//panier user
if (localStorage.getItem("panierClient")){
    console.log("Panier OK");
}else{
    console.log("Création du panier");
    let init = [];
    localStorage.setItem("monPanier", (JSON.stringify(init)));
}

let panier = JSON.parse(localStorage.getItem("panierClient")); // stock le panier 

//le nombre d'article dans le panier 
//function nombreArticle (){
//    let numberArticle = document.getElementById("articleNumber");
//    numberArticle.textContent = panier.length;
//}
//nombreArticle();


let total= 0;
function affichagePanier (){
    if (panier.length> 0){
        document.getElementById("panierVide").remove();
//tableau recapitulant la commande
        let tableauGeneral = document.getElementById("panier");
        let tableauPanier = create ("table","class", "tableauPanier");
        let tableauHeader = create ("tr", "class", "tableauHeader");
        let tableauHeaderPic = document.createElement ("th");
        let tableauHeaderName = document.createElement ("th");
        let tableauHeaderPrice = document.createElement ("th");
        let tableauHeaderAction = document.createElement ("th");
        let tableauFooter = create ("tr", "class", "tableauufooter");
        let tableauFooterTotalPrice = create("th","class","tableauFooterTotalPrice");
        
        tableauFooterTotalPrice.setattribute("colspan", "4")


tableauGeneral.appendChild(tableauPanier);
tableauPanier.appendChild(tableauHeader);
tableauHeader.appendChild(tableauHeaderPic);
tableauHeader.appendChild(tableauHeaderName);
tableauHeader.appendChild(tableauHeaderPrice);
tableauHeader.appendChild(tableauHeaderAction);

tableauHeaderPic.textContent = "Vos Produit(s)";
tableauHeaderName = "Nom";
tableauHeaderPrice = "Tarif";
tableauHeaderAction = "Action";

JSON.parse(localStorage.getItem("panier-client")).forEach((article, index)=>{
    let articleligne = create("tr", "id", "articleLigne");
    let articlePic = create ("img","id","articlePic");
    let articleName = create ("td", "id", "articleName");
    let articlePrice = create ("td", "id", "articlePrice");
    let articleAction = create ("i", "id", index);

    articlePic.setattribute("src", article.imageURL);
    articleAction.setattribute("alt", "Supprimer l'article");
    articleAction.setattribute("class", "fas fa-trash-alt");

    articleAction.addEventlistener("Click", function (event) {
        suppressionArticle(event.target.id);
    })

}




)}
}