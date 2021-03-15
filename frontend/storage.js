//panier user
if (localStorage.getItem("panier")){
    console.log("Panier OK");
}else{
    console.log("Création du panier");
    let init = [];
    localStorage.setItem("monPanier", (JSON.stringify(init)));
}

let panier = JSON.parse(localStorage.getItem("panier")); // stock le panier 

//le nombre d'article dans le panier 
function nombreArticle (){
    let numberArticle = document.getElementById("articleNumber");
    numberArticle.textContent = panier.length;
}
nombreArticle();