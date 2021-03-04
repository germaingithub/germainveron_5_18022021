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
    
    fetch('http://localhost:3000/images/teddy_1.jpg')
    .then((res) => {
      document.getElementById('image').innerHTML = 
        `<img src=${res.url} />`
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
      
    });


}

getPrix();

  //formulaires
  