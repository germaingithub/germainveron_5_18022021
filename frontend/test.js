const prix = document.getElementById("prix");
const name = document.getElementById("name");
const descri = document.getElementById("descri");
const image = document.getElementById("image");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");


const getPrix = () => {
  fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
    .then((res) => res.json())
    .then((data) => {
      prix.innerHTML = data.price/100;
    });
    
    fetch('http://localhost:3000/api/teddies/5be9c8541c9d440000665243/500/600')
    .then((res) => res.json())
    .then((data) =>{
      `<img src=${res.image.url} />`
    })
    
    fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
    .then((res) => res.json())
    .then((data) => {
      name.innerHTML = data.name;
    });
    fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
    .then((res) => res.json())
    .then((data) => {
      descri.innerHTML = data.description;
    });
    

    //couleurs
     fetch("http://localhost:3000/api/teddies/5be9c8541c9d440000665243")
    .then((res) => res.json())
    .then((data) => {
      c1.innerHTML = data.colors;
     `repeat(${product.colors.length}, 1fr)`
    //  var number = 0;
    
    //while (number < 4){
      //console.log('data');
      //number =number + 1;
    //}
    });


}

getPrix();

  //formulaires
  function userInputChecker(userInputFirstName) {
	if(! userInputFirstName.match(/^([a-zA-Z ]+)$/))
    	return(0);
    else
    	return(1);
}

 function userInputChecker(userInputLastName) {
	if(! userInputLastName.match(/^([a-zA-Z ]+)$/))
    	return(0);
    else
    	return(1);
}

 function userInputChecker(userInputEmail) {
	if(! userInputEmail.match(/^([a-zA-Z @]+)$/))
    	return(0);
    else
    	return(1);
}

 function userInputChecker(userInputAdress) {
	if(! userInputAdress.match(/^([a-zA-Z 1-9]+)$/))
    	return(0);
    else
    	return(1);
}

 function userInputChecker(userInputZipCode) {
	if(! userInputZipCode.match(/^([1-9]+)$/))
    	return(0);
    else
    	return(1);
}


 function userInputChecker(userInputTown) {
	if(! userInputTown.match(/^([a-zA-Z ]+)$/))
    	return(0);
    else
    	return(1);
}