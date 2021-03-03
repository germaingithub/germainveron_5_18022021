fetch('http://localhost:3000/api/teddies/5be9c8541c9d440000665243')
    .then(res => {
        if(res.ok){
            res.json().then(data =>{
                img.src = data [0].url
            })
        } else{
            console.log("ERREUR");
            document.getElementById("erreur").innerHTML = "Erreur :("
        }
    })

    const elt = document.getElementById('norbert');    // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function() {          // On écoute l'événement click
    elt.innerHTML = "C'est cliqué !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
});

   const elt = document.getElementById('validation');    // On récupère l'élément sur lequel on veut détecter le clic
elt.addEventListener('click', function() {          // On écoute l'événement click
    elt.innerHTML = "Nous vous remercions pour votre commande. !";               // On change le contenu de notre élément pour afficher "C'est cliqué !"
});

elt.addEventListener('mousemove', function(event) {
    const x = event.offsetX; // Coordonnée X de la souris dans l'élément
    const y = event.offsetY; // Coordonnée Y de la souris dans l'élément
});