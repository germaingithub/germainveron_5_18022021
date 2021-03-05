const prix = document.getElementById("prix");
const name = document.getElementById("name");
const descri = document.getElementById("descri");
const image = document.getElementById("image");

fetch("http://localhost:3000/api/teddies/${teddy._id}")
    .then(response => response.json())
    .then(teddies => {
 
 const teddiesElement = document.querySelector('#descrip')
        for (let teddy of teddies) {
console.log(teddy)
            teddies.Element.innerHTML += `<div class="card">
        <div class="row">

          <img src="${teddy.imageUrl}" width="300" height="250" />

          <div class="col-6">
            <h3 id="${teddy.name}"> nom ours </h3>
            <p id="${teddy.description}">detail ours</p>
            <div id="prix"> ${teddy.price/100} </div>

          </div>
        </div>
        <form>
          <div class="form-row align-items-center">
            <div class="col-auto my-1">
              <label class="mr-sm-2" for="inlineFormCustomSelect">Preference</label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option selected>Couleurs</option>
                <option id="c1">One</option>
                <option id="c2">Two</option>
                <option id="c3">Three</option>
                <option id="c4">Four</option>

              </select>
            </div>


          </div>
        </form>`
        }
  })